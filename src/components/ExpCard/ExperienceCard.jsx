

export const ExpCard = ({logo, link, description}) => {

return (
        <>
            <div className="flex flex-col mt-14 w-5/12 min-w-[370px] py-5 rounded-lg border border-borderDark bg-gradient-to-b from-gradient-900 to-gradient-700 drop-shadow-md dark:border-gray-700 dark:bg-gray-800 transition-transform ease-in duration-300 transform hover:scale-105">
                <div className="flex justify-between px-10 items-center">  
                    <img src={logo} alt="" className="max-w-32" /> 
                        <div className=" flex gap-2">
                        <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/>
                                </svg>
                            </a>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 256 256">
                                    <path fill="currentColor" d="M126 136a6 6 0 0 1-6 6H72a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6m-6-38H72a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m110 62.62V224a6 6 0 0 1-9 5.21l-25-14.3l-25 14.3a6 6 0 0 1-9-5.21v-26H40a14 14 0 0 1-14-14V56a14 14 0 0 1 14-14h176a14 14 0 0 1 14 14v31.38a49.91 49.91 0 0 1 0 73.24M196 86a38 38 0 1 0 38 38a38 38 0 0 0-38-38m-34 100v-25.38a50 50 0 0 1 56-81.51V56a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2v128a2 2 0 0 0 2 2Zm56-17.11a49.91 49.91 0 0 1-44 0v44.77l19-10.87a6 6 0 0 1 6 0l19 10.87Z"/>
                                </svg>
                            </a>
                        </div>
                    </div>   
                <p className="mt-4 text-[10px] min-w-80 w-[37vw] overflow-y-auto md:text-sm pl-10">{description}</p>
            </div>
        </>
     );
};