import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../datasource/redux/staff/hooks/hooks";
import OfferingRepo from "../../../datasource/repositories/OfferingRepo";
import { hideLoader, showLoader, showSuccessDialog } from "../../../datasource/redux/dialog/DialogSlice";

export const GiveOnlineForm = () => {
  const dispatch = useAppDispatch();
  const clientId = "ARTGE_DGPv5RcPqLENmvsEAY8eQ7vgnrzpeCiwn5rHJfrBfGQW1HvurvSHewGKx_j9cJADitdSAzAbTl";
  const [donation, setDonation] = useState<string>("tithe");
  const [donationType, setDonationType] = useState<number>(1);
  const [amount, setAmount] = useState<number>(50);
  const [showCustomAmount, setShowCustomAmount] = useState<boolean>(false);


  const handleShowCustomAmount = () => {
    setShowCustomAmount(!showCustomAmount);
  }

  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(e.target.value));
  }
  useEffect(() => {
    switch (donation) {
      case "tithe":
        setDonationType(1);
        break;
      case "offering":
        setDonationType(2);
        break;
      case "special-offering":
        setDonationType(3);
        break;
    }
  }, [donation])

  const handleDonationProcess = async () => {
    try {
      dispatch(showLoader());
      const response = await OfferingRepo.submitDonation(donationType, amount);
      dispatch(hideLoader());
      if (response.statusCode == 200) {
        sessionStorage.setItem("message", response.message);
        dispatch(showSuccessDialog());
      }
    } catch (e) {

    } finally {
      dispatch(hideLoader());
    }
  }

  return (<PayPalScriptProvider options={{ clientId: clientId, currency: "PHP", }}>
    <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg transform transition-all duration-500 hover:shadow-xl">
      <div className="p-6 md:p-8">
        <div className="space-y-6">
          <div
            className="animate-fade-in"
            style={{ animationDelay: '100ms' }}
          >
            <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-lg font-medium mb-2 block">
              Select Donation Type
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
              <button
                className={`${donation == "tithe" ? "bg-blue-600 text-white" : ""} inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 transition-all duration-300 transform hover:scale-105`}
                type="button"
                onClick={() => setDonation("tithe")}
              >
                Tithe
              </button>
              <button
                className={`${donation == "offering" ? "bg-blue-600 text-white" : ""} inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 transition-all duration-300 transform hover:scale-105`}
                type="button"
                onClick={() => setDonation("offering")}
              >
                Offering
              </button>
              <button
                className={`${donation == "special-offering" ? "bg-blue-600 text-white" : ""} inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 transition-all duration-300 transform hover:scale-105`}
                type="button"
                onClick={() => setDonation("special-offering")}
              >
                Special Offering
              </button>
            </div>
          </div>
          <div
            className="animate-fade-in"
            style={{ animationDelay: '200ms' }}
          >
            <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-lg font-medium mb-3 block">
              Select Amount
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
              <button
                className={`${amount == 50 ? "bg-blue-600 text-white" : ""} inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 transition-all duration-300 transform hover:scale-105`}
                type="button"
                onClick={() => setAmount(50)}
              >
                ₱ 50
              </button>
              <button
                className={`${amount == 100 ? "bg-blue-600 text-white" : ""} inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 transition-all duration-300 transform hover:scale-105`}
                type="button"
                onClick={() => setAmount(100)}
              >
                ₱ 100
              </button>
              <button
                className={`${amount == 500 ? "bg-blue-600 text-white" : ""} inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 transition-all duration-300 transform hover:scale-105`}
                type="button"
                onClick={() => setAmount(500)}
              >
                ₱ 500
              </button>
              <button
                className={`${amount == 1000 ? "bg-blue-600 text-white" : ""} inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 transition-all duration-300 transform hover:scale-105`}
                type="button"
                onClick={() => setAmount(1000)}
              >
                ₱ 1000
              </button>
            </div>
            <div className="flex flex-col items-start gap-3">
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-3 transition-all duration-300 transform hover:scale-105"
                type="button"
                onClick={handleShowCustomAmount}
              >
                Custom
              </button>
              <input type="number"
                placeholder="Amount..."
                value={amount}
                onChange={handleAmount}
                className={`${showCustomAmount ? "" : "hidden"} w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`} />
            </div>
          </div>

          <div
            className="bg-gray-50 p-4 rounded-md flex items-start space-x-3 animate-fade-in"
            style={{ animationDelay: '400ms' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-help h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <path d="M12 17h.01"></path>
            </svg>
            <div>
              <p className="text-sm text-gray-600">
                Your donation will be securely processed through PayPal.
                You don't need a PayPal account to donate - you can use
                any major credit or debit card.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <PayPalButtons
              style={{ layout: "vertical" }}
              className="w-full ml-10"
              createOrder={(data, actions) => {
                return actions.order.create({
                  intent: "CAPTURE",
                  purchase_units: [
                    {
                      amount: {
                        currency_code: "PHP",
                        value: `${amount}`,
                      },
                    },
                  ],
                });
              }}
              onApprove={async (data, actions) => {
                if (!actions.order) return;
                const details = await actions.order.capture();
                console.log("Order captured:", details);
                handleDonationProcess();
              }}
            />
          </div>

        </div>
      </div>
    </div>
  </PayPalScriptProvider>

  );
}