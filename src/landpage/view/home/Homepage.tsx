export const Homepage = () => {
    return (
        <div className="w-screen flex flex-col items-center p-4 overflow-x-hidden">
            {/*Hero section*/}
            <div id="hero-page" className="w-[86%] h-[26rem] relative  bg-cover bg-center relative rounded-lg">
                <div className="absolute bottom-0 left-0">
                    <p>A Place to Grow in Faith, Hope, and Love</p>
                    <h3>BIBLE BAPTIST OF EKLESSIA
                        KAWIT CAVITE</h3>
                        <p>Join us on Sundays</p>
                        <div>
                            <button className="">PLAN YOUR VISIT</button>
                            <button className=""> GET DIRECTIONS</button>
                        </div>
                </div>
            </div>

        </div>
    );
}