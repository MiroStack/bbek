export const JoinUsSection=()=>{
  return(
  <>
  <section className="w-100 py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Join Us This Sunday</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              We'd love to have you join us for worship this Sunday. Come experience the love and community at Bible Baptist Ekklesia of Kawit.
            </p>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg font-medium">
              <span className="mr-2">GET DIRECTIONS</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right h-5 w-5"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </section>
  </>)
}