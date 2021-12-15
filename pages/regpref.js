import Head from 'next/head'
import Image from 'next/image'

export default function Regpref() {
    return(
        <div className="m-0 w-screen h-screen ">
        <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div className="w-screen h-screen bg-[url('https://test.mnerdsdev.com/Form-bg.svg')] bg-no-repeat bg-cover bg-center ">
      <div className="flex justify-center">
          <div className="my-24 text-4xl">
              <h1>Activity Preferences</h1>
          </div>
          </div>

          <div className="flex justify-center">
          <div className="flex justify-center w-1/3">
            <form className="content-center" method="POST" action="">
            <label for="name">Day 1 Stream 1</label><br/>
            <select className="bg-gray-200 border-2 border-gray-500" id="name" type="text" autocomplete="name" required>
            <option value="">Applied sport and social psychology</option></select> <br/><br/>

            <label for="name">Day 1 Stream 1</label><br/>
            <select className="bg-gray-200 border-2 border-gray-500" id="name" type="text" autocomplete="name" required>
            <option value="">Applied sport and social psychology</option></select> <br/><br/>

            <label for="name">Day 1 Stream 2</label><br/>
            <select className="bg-gray-200 border-2 border-gray-500" id="name" type="text" autocomplete="name" required>
            <option value="">Applied sport and social psychology</option></select> <br/><br/>

            <label for="name">Day 2 Stream 1</label><br/>
            <select className="bg-gray-200 border-2 border-gray-500" id="name" type="text" autocomplete="name" require>
            <option value="">Applied sport and social psychology</option></select> <br/><br/>

            <label for="name">Day 2 Stream 2</label><br/>
            <select className="bg-gray-200 border-2 border-gray-500" id="name" type="text" autocomplete="name" required>
            <option value="">Applied sport and social psychology</option></select> <br/><br/>

            <label for="name">Day 3 Stream 1</label><br/>
            <select className="bg-gray-200 border-2 border-gray-500" id="name" type="text" autocomplete="name" required>
            <option value="">Applied sport and social psychology</option></select> <br/><br/>

            <label for="name">Day 3 Stream 2</label><br/>
            <select className="bg-gray-200 border-2 border-gray-500" id="name" type="text" autocomplete="name" required>
            <option value="">Applied sport and social psychology</option></select> <br/><br/>

            <button className="border-2 bg-[#064c7a] text-gray-100 text-2xl p-2 px-[7.25rem] rounded-xl"><a href="/regpref">Next</a></button>
          </form>
          </div>
          </div>
        </div>
        </div>
    )
}