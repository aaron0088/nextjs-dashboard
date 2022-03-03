import Head from 'next/head'
import Image from 'next/image'

export default function Delegatechoose() {
    return(
        <div className="m-0 w-screen h-screen ">
        <Head>
        <title>ASPASP2022</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div className="sm:pl-44 w-screen h-screen sm:bg-[url('/form-bg-update1.1.svg')] bg-no-repeat bg-cover bg-center ">
      <div className="flex justify-center">
          <div className="mt-24 mb-12 sm:text-4xl text-3xl sm:ml-56 text-center">
              <h1>Delegates Registration</h1>
          </div>


          </div>
          <div className="flex items-center justify-center w-screen">

            <div className="sm:pl-[30%] md:pl-0 text-center">
            <button className="border-2 bg-[#064c7a] sm:w-[30%] text-gray-100 text-2xl p-2 px-[5.1rem] sm:ml-12 md:ml-0 rounded-xl mt-10"><a href="./registration/delegatelocal">Click Here for Local Delegates Registration</a></button>
            <button className="border-2 bg-[#064c7a] sm:w-[30%] text-gray-100 text-2xl p-2 px-[5.1rem] sm:ml-12 md:ml-0 rounded-xl mt-10"><a href="./registration/delegates">Click Here for Foreign Delegates Registration</a></button>
            </div>
          </div>
        </div>
        </div>
    )
}