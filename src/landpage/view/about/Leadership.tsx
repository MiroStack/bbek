import BackgroundImage from "../../../assets/img/placeholder.svg";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom"
import { JoinUsSection } from "../../components/JoinUsSection";
export const LeadershipPage = () => {
  return (
    <>
      <div className="w-screen h-auto items-center flex flex-col justify-center  bg-gray-100">
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
              Church Leadership</h1>
            <p className="text-xl md:text-2xl text-white font-light">Bible Baptist Ekklesia of Kawit</p>
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

        {/* leadership content */}
        <div className="h-auto mx-5 py-5 flex flex-col items-center justify-center gap-2">
          {/* leaders statement */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden mb-12">
            <div className="p-3 md:p-6">
              <div className="prose max-w-none">
                <p>
                  Our church is led by dedicated servants who are committed to shepherding the flock and equipping the saints for the work of ministry. They provide spiritual guidance, pastoral care, and administrative leadership for our congregation.
                </p>
                <p>
                  Our leadership team also includes deacons, ministry leaders, and administrative staff who work together to facilitate the various aspects of church life and ministry.
                </p>
              </div>
            </div>
          </div>
          {/* leaders profile */}
          <div className="h-auto grid grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center">
            <div className="w-[24rem] h-auto rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden mx-auto">
              <div className="aspect-square relative bg-gray-200">
                <img
                  alt="Rev. Rodolfo Mojica"
                  className="object-cover w-full h-full"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/478007642_2128820190966688_8461904787166437366_n.jpg-D7sWBodBFECzjP6YghhtOrVEG2YJMZ.jpeg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1">Rev. Rodolfo Mojica</h3>
                <p className="text-blue-600 font-medium mb-4">Sending Pastor</p>
                <p className="text-gray-700">
                  Pastor Rodolfo Mojica serves as our Sending Pastor, providing overall leadership and vision for the church. He is responsible for preaching, teaching, and pastoral care, as well as overseeing the various ministries of the church.
                </p>
              </div>
            </div>

            <div className="w-[24rem] h-auto rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden mx-auto">
              <div className="aspect-square relative bg-gray-200">
                <img
                  alt="Rev. Fresco Q. Sulapas"
                  className="object-cover w-full h-full"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/484951000_2158666484648725_313986049700580927_n.jpg-FNiEFKcRj7SssL1Qdzrd0B89TYlcIy.jpeg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1">Rev. Fresco Q. Sulapas</h3>
                <p className="text-blue-600 font-medium mb-4">Senior Pastor</p>
                <p className="text-gray-700">
                  Pastor Fresco Q. Sulapas serves as our Senior Pastor, assisting in preaching, teaching, and pastoral care. He works closely with the Sending Pastor to ensure that the spiritual needs of the congregation are met.
                </p>
              </div>
            </div>
            <div className="w-100 h-[36rem] lg:w-[24rem] lg:h-auto  rounded-lg border bg-card flex items-center justify-center gap-1 text-2xl text-card-foreground shadow-sm overflow-hidden mx-auto">
              <Link to={"/landpage/about/officers"} className="flex items-center gap-1 hover:!text-blue-950">
                <span className="text-gray-700">
                  View More
                </span>
                <FaArrowRight />
              </Link>
            </div>
          </div>

          {/* button back */}
          <div className="mt-5 text-center"><Link to="/about">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:text-accent-foreground h-10 px-4 py-2 border-gray-300 text-gray-700 hover:bg-gray-100">Back to About</button></Link>
          </div>




          {/* end */}
        </div>

        <JoinUsSection/>
      </div>
    </>
  )
}