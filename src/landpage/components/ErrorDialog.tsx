import { IoIosCloseCircle } from "react-icons/io";
type ErrorProps = {
    message: string;
    error: boolean;
    setShowError: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ErrorDialog: React.FC<ErrorProps> = ({error, message, setShowError}) => {
    const setError = setShowError;
    const closeError =()=> setError(false);

    return (
        <>
        {/* {${error?"fixed":"hidden"}} */}
            <div className={`${error?"fixed":"hidden"} bg-white w-[24rem] md:w-[30rem]  lg:w-[24rem]  h-[18rem] p-3  rounded-lg shadow-lg items-center justify-center flex-col z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}>
                <div className="h-100 flex flex-col items-center justify-center space-y-1.5 text-center sm:text-left">
                    <div className="text-5xl text-red-600"><IoIosCloseCircle/></div>
                    <h3 className="font-medium text-xl tracking-wider mb-2">{message}</h3>
                    <button className="bg-blue-700 w-40 h-8 rounded-md text-white my-3" onClick={closeError}>Close</button>
                </div>
            </div>
        </>
    )
}