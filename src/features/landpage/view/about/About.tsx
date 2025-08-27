import { Outlet } from "react-router-dom"

export const AboutPage = ()=>{
  return(
    <>
        <div className="w-screen h-auto items-center flex justify-center">
            <Outlet/>
        </div>
    </>
  )
}