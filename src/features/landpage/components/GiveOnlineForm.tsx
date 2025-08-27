export const GiveOnlineForm=()=>{
    return(<>
                          <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg transform transition-all duration-500 hover:shadow-xl">
                        <div className="p-6 md:p-8">
                          <div className="space-y-6">
                            <div
                              className="animate-fade-in"
                              style={{ animationDelay: '100ms' }}
                            >
                              <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-lg font-medium mb-2 block">
                                Select Donation Type
                              </label>
                              <div
                                role="radiogroup"
                                aria-required="false"
                                dir="ltr"
                                className="gap-2 flex flex-col space-y-2"
                                tabIndex={0}
                                style={{ outline: 'none' }}
                              >
                                <div className="flex items-center space-x-2">
                                  <button
                                    type="button"
                                    role="radio"
                                    aria-checked="true"
                                    data-state="checked"
                                    value="tithe"
                                    className="aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    id="tithe"
                                    tabIndex={-1}
                                    data-radix-collection-item=""
                                  >
                                    <span data-state="checked" className="flex items-center justify-center">
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
                                        className="lucide lucide-circle h-2.5 w-2.5 fill-current text-current"
                                      >
                                        <circle cx="12" cy="12" r="10"></circle>
                                      </svg>
                                    </span>
                                  </button>
                                  <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="tithe"
                                  >
                                    Tithe
                                  </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <button
                                    type="button"
                                    role="radio"
                                    aria-checked="false"
                                    data-state="unchecked"
                                    value="offering"
                                    className="aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    id="offering"
                                    tabIndex={-1}
                                    data-radix-collection-item=""
                                  ></button>
                                  <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="offering"
                                  >
                                    Offering
                                  </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <button
                                    type="button"
                                    role="radio"
                                    aria-checked="false"
                                    data-state="unchecked"
                                    value="buildingFund"
                                    className="aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    id="buildingFund"
                                    tabIndex={-1}
                                    data-radix-collection-item=""
                                  ></button>
                                  <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="buildingFund"
                                  >
                                    Building Fund
                                  </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <button
                                    type="button"
                                    role="radio"
                                    aria-checked="false"
                                    data-state="unchecked"
                                    value="missions"
                                    className="aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    id="missions"
                                    tabIndex={-1}
                                    data-radix-collection-item=""
                                  ></button>
                                  <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="missions"
                                  >
                                    Missions
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div
                              className="animate-fade-in"
                              style={{ animationDelay: '200ms' }}
                            >
                              <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-lg font-medium mb-3 block">
                                Select Amount
                              </label>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                                <button
                                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 transition-all duration-300 transform hover:scale-105"
                                  type="button"
                                >
                                  ₱50
                                </button>
                                <button
                                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-primary/90 h-10 px-4 py-2 transition-all duration-300 transform hover:scale-105 bg-blue-600 text-white"
                                  type="button"
                                >
                                  ₱100
                                </button>
                                <button
                                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 transition-all duration-300 transform hover:scale-105"
                                  type="button"
                                >
                                  ₱500
                                </button>
                                <button
                                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 transition-all duration-300 transform hover:scale-105"
                                  type="button"
                                >
                                  ₱1000
                                </button>
                              </div>
                              <div className="flex items-center space-x-2">
                                <button
                                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-3 transition-all duration-300 transform hover:scale-105"
                                  type="button"
                                >
                                  Custom
                                </button>
                              </div>
                            </div>
                            <div
                              className="animate-fade-in"
                              style={{ animationDelay: '300ms' }}
                            >
                              <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-lg font-medium mb-2 block">
                                Frequency
                              </label>
                              <button
                                type="button"
                                role="combobox"
                                aria-controls="radix-«r8l»"
                                aria-expanded="false"
                                aria-autocomplete="none"
                                dir="ltr"
                                data-state="closed"
                                className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-full md:w-[250px]"
                              >
                                <span style={{ pointerEvents: 'none' }}>One-time</span>
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
                                  className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                                  aria-hidden="true"
                                >
                                  <path d="m6 9 6 6 6-6"></path>
                                </svg>
                              </button>
                            </div>
                            <div
                              className="bg-gray-50 p-4 rounded-md flex items-start space-x-3 animate-fade-in"
                              style={{ animationDelay: '400ms' }}
                            >
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
                                className="lucide lucide-circle-help h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                <path d="M12 17h.01"></path>
                              </svg>
                              <div>
                                <p className="text-sm text-gray-600">
                                  Your donation will be securely processed through PayPal.
                                  You don't need a PayPal account to donate - you can use
                                  any major credit or debit card.
                                </p>
                              </div>
                            </div>
                            <button
                              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 rounded-md px-8 w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 transform hover:scale-105 animate-fade-in"
                              style={{ animationDelay: '500ms' }}
                            >
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
                                className="lucide lucide-heart mr-2 h-4 w-4"
                              >
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                              </svg>{' '}
                              Donate Now with PayPal
                            </button>
                          </div>
                        </div>
                      </div>
    </>);
}