import Head from 'next/head'
import Image from 'next/image'

export default function Homepage() {
    return(
        <div className="m-0 w-screen h-screen">
        <Head>
        <title>ASPASP2022</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div className="bg-[url('https://aspasp2022.xpoexpo.com/aspasp_a4.png')] w sm:bg-[url('https://aspasp2022.xpoexpo.com/aspasp_registration.png')] bg-no-repeat bg-top sm:bg-top md:bg-top lg:bg-top bg-contain sm:bg-cover md:bg-cover lg:bg-cover h-[100%]">
          
        <div className="h-[65%] sm:h-[80%] lg:h-[82%]"></div>
        
        <div className="sm:text-4xl text-s text-center text-red-800">
              <h1>Register Now!</h1>
          </div>

          <div className="flex justify-center place-items-end">

            <div className="text-center text-xs sm:my-3 sm:ml-[30rem]">
            <a href="./delegatechoose"><button className="py-1 w-[20rem] sm:py-2.5 sm:w-72 mx-1 border-2 bg-[#701875] text-gray-100 rounded-[999px]">DELEGATES Click here</button></a>
            <a href="./emerging"><button className="py-1 w-[20rem] sm:py-2.5 sm:w-72 border-2 bg-[#db2777] text-gray-100 rounded-[999px]">DELEGATES (Emerging Countries) Click Here</button></a>
            <a href="./studentchoose"><button className="py-1 w-[20rem] sm:py-2.5 sm:w-72 mx-1 border-2 bg-[#eab308] text-gray-100 rounded-[999px]">STUDENT Click here</button></a>
            <a href="./speakerchoose"><button className="py-1 w-[20rem] sm:py-2.5 sm:w-72 border-2 bg-[#0891b2] text-gray-100 rounded-[999px]">PRESENTER Click here</button></a>
            <div className='mt-3'>
            <a href="/ASPASP2022_Basic_Infopack.pdf" download="ASPASP2022_Basic_Infopack"><button className="py-1 w-[20rem] sm:py-2.5 sm:w-72 border-2 bg-white text-black rounded-[999px]">Download ASPASP2022 Infopack</button></a>
            </div>
            </div>
          </div>
        </div>
        </div>
    )
}