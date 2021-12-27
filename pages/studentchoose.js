import Head from 'next/head'
import Image from 'next/image'

export default function Studentchoose() {
    return(
        <div className="m-0 w-screen h-screen ">
        <Head>
        <title>ASPASP2022</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div className="w-screen h-screen bg-[url('https://test.mnerdsdev.com/form-bg-update1.1.svg')] bg-no-repeat bg-cover bg-center ">
      <div className="flex justify-center">
          <div className="mt-24 mb-12 text-4xl ml-72">
              <h1>Students Registration</h1>
          </div>


          </div>
          <div className="flex items-center justify-center w-screen">

            <div className="pl-[30%]">
            <button className="border-2 bg-[#064c7a] w-[30%] text-gray-100 text-2xl p-2 px-[5.1rem] ml-12 rounded-xl mt-10"><a href="./studentlocal">Click Here for Local Students Registration</a></button>
            <button className="border-2 bg-[#064c7a] w-[30%] text-gray-100 text-2xl p-2 px-[5.1rem] ml-12 rounded-xl mt-10"><a href="./register">Click Here for Foreign Students Registration</a></button>
            </div>
          </div>
        </div>
        </div>
    )
}