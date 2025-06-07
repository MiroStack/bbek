import BackgroundImage from "../../assets/img/placeholder.svg";
export const DepartmentCard= ()=>{
    return(
        <>
         <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
                      <div className="aspect-square relative bg-gray-200">
                        <img
                          alt="Sis. Danica Aldousari"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover"
                          src={BackgroundImage}
                          style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }}
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold">Sis. Danica Aldousari</h3>
                        <p className="text-gray-500">President</p>
                      </div>
                    </div>
        </>
    )
}