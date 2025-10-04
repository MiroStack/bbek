import { useEffect } from "react";
import { showErrorDialog } from "../../../../datasource/redux/dialog/DialogSlice";
import { useAppDispatch } from "../../../../datasource/redux/staff/hooks/hooks";
interface PageProps {
    pages: number[],
    pageNumber: number,
    totalPage: number,
    setPageNumber: React.Dispatch<React.SetStateAction<number>>,
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>,
    setPages: React.Dispatch<React.SetStateAction<number[]>>,

}

export const Pagination = ({
    pages,
    pageNumber,
    totalPage,
    setPageNumber,
    setRefresh,
    setPages }: PageProps) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        const maxVisible = 5; // how many page buttons you want to show
        let start = Math.max(1, pageNumber - Math.floor(maxVisible / 10));
        let end = start + maxVisible - 1;

        if (end > totalPage) {
            end = totalPage;
            start = Math.max(1, end - maxVisible + 1);
        }

        const newPages = [];
        for (let i = start; i <= end; i++) {
            newPages.push(i);
        }
        setPages(newPages);
        console.log(pageNumber);
    }, [pageNumber, totalPage]);
    return (
        <div className="w-full p-4 flex items-center justify-center relative">
            <button className="cursor-pointer"
                onClick={() => {
                    if (pageNumber > 1) {
                        setPageNumber(pageNumber - 1);
                        setRefresh(true);
                    } else {
                        sessionStorage.setItem("message", "No previous records available");
                        dispatch(showErrorDialog());
                    }
                }}
            >&laquo;</button>
            <span className="mx-4">{pageNumber} of {totalPage}</span>
            <button className="cursor-pointer"
                onClick={() => {
                    if (pageNumber < totalPage) {
                        setPageNumber(pageNumber + 1);
                        setRefresh(true);
                    } else {
                        sessionStorage.setItem("message", "No more records available");
                        dispatch(showErrorDialog());
                    }
                }}
            >&raquo;</button>

            <div className="absolute right-4 flex items-center gap-2">
                {
                    pages.map((page, index) => (
                        <span key={index} className={`p-1 ${pageNumber == page ? 'bg-green-200' : 'bg-gray-100'} w-7 text-center hover:cursor-pointer`}
                            onClick={() => {
                                if (totalPage < page) {
                                    sessionStorage.setItem("message", "No more records available");
                                    dispatch(showErrorDialog());
                                } else {
                                    setPageNumber(page);
                                    setRefresh(true);

                                }

                            }}
                        >{page}</span>
                    ))
                }
            </div>
        </div>
    );
}