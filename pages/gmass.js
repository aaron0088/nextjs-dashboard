import Image from 'next/image'

export default function Gmass() {
  return (
    <div className="m-0 w-screen h-full">

      <div className="">
        <Image
        src="/aspasp_registration.png"
        layout="responsive"
        height={1080}
        width={1920}>
        </Image>

        <div className='text-center'>
        <Image
        src="/fee.png"
        height={1290}
        width={810}>
        </Image>
        </div>
        
      <div className="lg:text-4xl text-s text-center text-red-800">
        <h1>Register Now!</h1>
      </div>

      <div className="flex justify-center place-items-end">
        <div className="text-center text-xs lg:my-3 lg:text-sm ">
          <a href="https://aspasp2022.xpoexpo.com/delegatechoose">
            <button className="py-1 w-[20rem] md:py-2.5 md:w-75 lg:py-2.5 lg:w-75 mx-1 border-2 bg-[#701875] text-white rounded-[999px] hover:drop-shadow-xl">DELEGATES Click here</button>
          </a>

          <a href="https://aspasp2022.xpoexpo.com/emerging">
            <button className="py-1 w-[20rem] md:py-2.5 md:w-75 lg:py-2.5 lg:w-75 border-2 bg-[#db2777] text-white rounded-[999px] hover:drop-shadow-xl">DELEGATES (Emerging Countries) Click Here</button>
          </a>

          <a href="https://aspasp2022.xpoexpo.com/studentchoose">
            <button className="text-black py-1 w-[20rem] md:py-2.5 md:w-75 lg:py-2.5 lg:w-75 mx-1 border-2 bg-[#eab308] rounded-[999px] hover:drop-shadow-xl">STUDENT Click here</button>
          </a>
          
          <a href="https://aspasp2022.xpoexpo.com/speakerchoose">
            <button className="py-1 w-[20rem] md:py-2.5 md:w-75 lg:py-2.5 lg:w-75 border-2 bg-[#0891b2] text-white rounded-[999px] hover:drop-shadow-xl">PRESENTER Click here</button>
          </a>
          
          <div className="mt-3">
            <a href="/Basic_InfoPack.pdf" download="ASPASP2022_Basic_Infopack">
              <button className="py-1 w-[20rem] md:py-2.5 md:w-75 lg:py-2.5 lg:w-75 border-2 bg-white text-black rounded-[999px] hover:drop-shadow-xl">DOWNLOAD ASPASP2022 Infopack</button>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}


