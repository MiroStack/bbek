import { Outlet } from "react-router-dom"

export const BeOneOfUsPage = ()=>{
  return(
    <>
        <div className="w-screen h-auto items-center flex flex-col justify-center">
            <Outlet/>
        </div>
    </>
  )
}