export const Resources = () => {
    return (
        <>
            <div className="rounded-lg text-card-foreground border border-gray-200 shadow-sm bg-white">
                <div className="flex flex-col space-y-1.5 p-6 pb-2">
                    <div className="tracking-tight text-lg font-bold flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open h-5 w-5 mr-2 text-green-600">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"></path>
                        </svg>
                        Resources
                    </div>
                </div>
                <div className="p-6 pt-0">
                    <div className="space-y-3">
                        <div className="border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                            <p className="font-medium">Staff Handbook</p>
                            <p className="text-xs text-gray-500 mt-1">Updated: 2023-05-15</p>
                        </div>
                        <div className="border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                            <p className="font-medium">Volunteer Guidelines</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}