import "../styles/Loader.css";
type LoaderProps = {
    loader: boolean
}
export const Loader: React.FC<LoaderProps> = ({loader}) => {

    return (
        <>
            <div className={`${loader?"fixed":"hidden"} bg-white w-[24rem] md:w-[30rem]  lg:w-[24rem]  h-[18rem] p-3  rounded-lg shadow-lg items-center justify-center flex-col z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}>
                <div className="h-100 flex flex-col items-center justify-center space-y-1.5 text-center sm:text-left">
                    <div className="loader"></div>
                    <h3 className="font-medium tracking-wider">Loading...</h3>
                </div>
            </div>
        </>
    )
}