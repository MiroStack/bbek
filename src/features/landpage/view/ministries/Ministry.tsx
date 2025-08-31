import { Outlet } from "react-router-dom"

export const MinistryPage = () => {
  return (
    <>
      <div className="w-screen h-auto items-center flex flex-col justify-center">
        <Outlet/>
      </div>
    </>
  )
}