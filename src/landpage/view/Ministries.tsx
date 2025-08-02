import { useEffect, useState } from "react"
import { JoinUsSection } from "../components/JoinUsSection"
import { MinistriesCard } from "../components/MinistriesCard"
import type { MinistryModel } from "../../models/MinistryModel"
import MinistryRepo from "../../repositories/MinistryRepo"

export const MinistriesPage = () => {
  const [ministryData, setMinistryData] = useState<MinistryModel[]>([]);
  useEffect(() => {
    try {
      getAllMinistryList();
    } catch (e) {
      console.log(e);
    }
  }, [])
  const getAllMinistryList = async () => {
    const data = await MinistryRepo.getAllMinistry();
    setMinistryData(data);
  }
  return (
    <>
      <div className="w-screen h-auto items-center flex flex-col justify-center">
        <section className="relative w-100 h-[60vh] min-h-[400px] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/477115481_2128820220966685_5952564918601637595_n.jpg-x3k7YXxz9UtkcIzc2uDKAaftXHlDeO.jpeg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              filter: 'brightness(0.5)',
            }}
          ></div>
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Church Ministries
            </h1>
            <p className="text-xl md:text-2xl text-white font-light">
              Serving God and our community
            </p>
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

        {/* ministries card */}
        <div className="h-auto mx-5 py-5 flex flex-col items-center justify-center gap-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
              ministryData.map((items, index) => (
                <MinistriesCard key={index} ministryModel={items} />
              ))
            }


          </div>

          {/* end */}
        </div>
        <JoinUsSection />
      </div>
    </>
  )
}