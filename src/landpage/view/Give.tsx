import { useState } from "react";
import BackgroundImage from "../../assets/img/placeholder.svg";
import { GiveInPersonCard } from "../components/GiveInPersonCard";
import { GiveOnlineForm } from "../components/GiveOnlineForm";
export const GivePage = () => {
  const [showForm, setShowForm] = useState(true);
  const displayForm = ()=>{
    setShowForm(true);
  }
  const hideForm =()=>{
    setShowForm(false);
  }

  return (
    <>
      <div className="w-screen h-auto items-center flex flex-col justify-center">
        <section className="relative w-100 h-[60vh] min-h-[400px] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url("${BackgroundImage}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              filter: 'brightness(0.5)',
            }}
          ></div>
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              DONATION</h1>
            <p className="text-xl md:text-2xl text-white font-light">Supporting the mission and ministry of our church</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              ></path>
            </svg>
          </div>
        </section>
        {/* give content */}
        <div className="h-auto w-100 mx-5 py-5 flex flex-col items-center justify-center gap-2">
          <main className="flex-1 bg-white">
            <section className="py-16 bg-white">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Give Generously</h2>
                  <p className="text-lg text-gray-600">
                    Your generous donations make it possible for Bible Baptist Ekklesia of
                    Kawit to continue its mission of spreading the Gospel, serving our
                    community, and helping those in need. Every gift, no matter the size,
                    makes a difference.
                  </p>
                </div>
                <div className="max-w-4xl mx-auto">
                  <div dir="ltr" data-orientation="horizontal" className="animate-fade-in">
                    <div
                      role="tablist"
                      aria-orientation="horizontal"
                      className="h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground grid w-full grid-cols-2 mb-8"
                      tabIndex={0}
                      data-orientation="horizontal"
                      style={{ outline: 'none' }}
                    >
                      <button
                        type="button"
                        role="tab"
                        aria-selected="true"
                        aria-controls="radix-«r8e»-content-online"
                        data-state="active"
                        id="radix-«r8e»-trigger-online"
                        className={`${showForm?"bg-blue-600 text-white":"bg-white text-black"} inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm text-base py-3`}
                        tabIndex={-1}
                        onClick={displayForm}
                        data-orientation="horizontal"
                        data-radix-collection-item=""
                      >
                        Give Online
                      </button>
                      <button
                        type="button"
                        role="tab"
                        aria-selected="false"
                        aria-controls="radix-«r8e»-content-other"
                        data-state="inactive"
                        id="radix-«r8e»-trigger-other"
                        className={`${!showForm?"bg-blue-600 text-white":"bg-white text-black"} inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm text-base py-3`}
                        tabIndex={-1}
                        onClick={hideForm}
                        data-orientation="horizontal"
                        data-radix-collection-item=""
                      >
                        Other Ways to Give
                      </button>
                    </div>
                    <div
                      data-state="active"
                      data-orientation="horizontal"
                      role="tabpanel"
                      aria-labelledby="radix-«r8e»-trigger-online"
                      id="radix-«r8e»-content-online"
                      tabIndex={0}
                      className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:outline-none"
                      style={{ animationDuration: '0s' }}
                    >
                      {/* {form} */}
                      {
                        showForm?<GiveOnlineForm/>:<GiveInPersonCard/>
                      }
                      {/* <GiveOnlineForm/> */}
                      

                    </div>
                    <div
                      data-state="inactive"
                      data-orientation="horizontal"
                      role="tabpanel"
                      aria-labelledby="radix-«r8e»-trigger-other"
                      hidden={true}
                      id="radix-«r8e»-content-other"
                      tabIndex={0}
                      className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:outline-none"
                    ></div>
                  </div>
                </div>
              </div>
            </section>
            <section className="py-16 bg-gray-50">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl font-bold mb-6 text-center">Why We Give</h2>
                  <div className="bg-white rounded-lg shadow-md p-8 animate-fade-in">
                    <div className="space-y-6">
                      <div className="transform transition-all duration-500 hover:translate-y-[-5px]">
                        <h3 className="text-xl font-bold mb-2">Biblical Stewardship</h3>
                        <p className="text-gray-600">
                          The Bible teaches us that everything we have comes from God, and
                          we are called to be good stewards of these blessings. Giving is
                          an act of worship and a demonstration of our trust in God's
                          provision.
                        </p>
                      </div>
                      <div className="transform transition-all duration-500 hover:translate-y-[-5px]">
                        <h3 className="text-xl font-bold mb-2">Supporting Ministry</h3>
                        <p className="text-gray-600">
                          Your donations help fund our church's various ministries, from
                          worship services and Bible studies to community outreach and
                          missions. They also support our pastors and staff who serve our
                          church.
                        </p>
                      </div>
                      <div className="transform transition-all duration-500 hover:translate-y-[-5px]">
                        <h3 className="text-xl font-bold mb-2">Making a Difference</h3>
                        <p className="text-gray-600">
                          Through your generosity, we're able to extend God's love beyond
                          our walls, feeding the hungry, caring for those in need, and
                          sharing the Gospel in our community and around the world.
                        </p>
                      </div>
                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-center italic">
                          "Each of you should give what you have decided in your heart to
                          give, not reluctantly or under compulsion, for God loves a
                          cheerful giver." — 2 Corinthians 9:7
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>

          {/* end */}
        </div>
      </div>
    </>
  );
}