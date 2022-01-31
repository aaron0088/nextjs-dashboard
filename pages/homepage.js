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

    <div className="bg-[url('public/aspasp_a4.png')] sm:bg-[url('public/aspasp_registration.png')] md:bg-[url('public/aspasp_registration.png')] bg-no-repeat bg-top lg:bg-top bg-contain md:bg-cover lg:bg-cover h-[100%]">
          
        <div className="h-[70%] lg:h-[74%] 2xl:h-[82%] sm:h-[94%]"></div>
        
        <div className="lg:text-4xl text-s text-center text-red-800">
              <h1>Register Now!</h1>
          </div>

          <div className="flex justify-center place-items-end">

            <div className="text-center text-xs lg:my-3 lg:text-sm lg:ml-[30rem]">
            <a href="./delegatechoose"><button className="py-1 w-[20rem] md:py-2.5 md:w-75 lg:py-2.5 lg:w-75 mx-1 border-2 bg-[#701875] text-white rounded-[999px] hover:drop-shadow-xl">DELEGATES Click here</button></a>
            <a href="./emerging"><button className="py-1 w-[20rem] md:py-2.5 md:w-75 lg:py-2.5 lg:w-75 border-2 bg-[#db2777] text-white rounded-[999px] hover:drop-shadow-xl">DELEGATES (Emerging Countries) Click Here</button></a>
            <a href="./studentchoose"><button className="text-black py-1 w-[20rem] md:py-2.5 md:w-75 lg:py-2.5 lg:w-75 mx-1 border-2 bg-[#eab308]  rounded-[999px] hover:drop-shadow-xl">STUDENT Click here</button></a>
            <a href="./speakerchoose"><button className="py-1 w-[20rem] md:py-2.5 md:w-75 lg:py-2.5 lg:w-75 border-2 bg-[#0891b2] text-white rounded-[999px] hover:drop-shadow-xl">PRESENTER Click here</button></a>
            <div className='mt-3'>
            <a href="/ASPASP2022_Basic_Infopack.pdf" download="ASPASP2022_Basic_Infopack"><button className="py-1 w-[20rem] md:py-2.5 md:w-75 lg:py-2.5 lg:w-75 border-2 bg-white text-black rounded-[999px] hover:drop-shadow-xl">DOWNLOAD ASPASP2022 Infopack</button></a>
            </div>
            </div>
          </div>
        </div>
        </div>
    )
}