import data from "@/data/expirience.json"

export const ExpCard = () => {
  return (
    <>
      {data.map((item, index) => (
        <div key={index} className="flex flex-col mt-14 w-[80vw] px-5 sm:px-12 py-5 lg:w-5/12 lg:min-w-[370px] lg:py-12 rounded-lg 
        border  border-opacity-20 drop-shadow-sm 
        transition-transform ease-in duration-300 transform hover:scale-105
        bg-gradient-to-b from-darkCardGradient-primary to-darkCardGradient-secondary border-borderDark">

          <div className="flex justify-between items-center "> 
            <img src={item.logo} alt="" className="max-w-32 drop-shadow-md" /> 
            <div className="flex gap-2">
              <a href={item.url} className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/>
                </svg>
              </a>
              <a href="#" className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 256 256">
                <path fill="currentColor" d="M212 96a84 84 0 1 0-136 65.9V240a4 4 0 0 0 4 4a4.05 4.05 0 0 0 1.79-.42L128 220.47l46.22 23.11A4 4 0 0 0 180 240v-78.1A83.89 83.89 0 0 0 212 96m-40 137.53l-42.22-21.11a4 4 0 0 0-3.58 0L84 233.53v-66a83.8 83.8 0 0 0 88 0ZM128 172a76 76 0 1 1 76-76a76.08 76.08 0 0 1-76 76m0-128a52 52 0 1 0 52 52a52.06 52.06 0 0 0-52-52m0 96a44 44 0 1 1 44-44a44.05 44.05 0 0 1-44 44"></path>
              </svg>
              </a>
            </div>
          </div>   
          <p className="mt-4 text-xs w-full lg:min-w-80 lg:w-[37vw] overflow-y-auto md:text-sm text-white">{item.description}</p>
        </div>
      ))}
    </>
  );
};
