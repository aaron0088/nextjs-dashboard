import Head from 'next/head'
import Image from 'next/image'

export default function Speakerlocal() {
    return(
        <div className="m-0 w-screen h-screen ">
        <Head>
        <title>ASPASP2022</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div className="w-screen h-screen sm:bg-[url('/form-bg-update1.1.svg')] bg-cover bg-center ">
      <div className="flex justify-center">
          <div className="mt-6 mb-1 text-4xl sm:ml-72 ml-14">
              <h1>Presenters Registration</h1>
          </div>


          </div>
          <div className="flex items-center justify-center w-screen sm:pl-72">
            <form className="content-center p-3 sm:pl-3" action="https://test.mnerdsdev.com/presenterlocal.php" method="POST" encType="multipart/form-data">
            <label htmlFor="name">Full Name</label><br/>
            <input className="bg-gray-200 border-2 border-gray-500 w-[100%]" id="name" name="name" type="text" autoComplete="name" required/> <br/> <br/>

            <label htmlFor="email">Email</label><br/>
            <input className="bg-gray-200 border-2 border-gray-500 w-[100%]" id="name" name="email" type="email" autoComplete="name" required/> <br/> <br/>

            <label htmlFor="name">Contact Number</label><br/>
            <input className="bg-gray-200 border-2 border-gray-500 w-[100%]" id="name" name="contactno" type="text" autoComplete="name" required/> <br/> <br/>

            <label htmlFor="prefix">Prefix</label><br/>
    	        <select name="prefix" className="bg-gray-200 border-2 border-gray-500 w-[100%] p-1" required>
              <option id="tansri" value = "tansri" selected disabled>Please Select</option>
               <option id="tansri" value = "tansri">Tan Sri</option>
               <option id="puansri" value = "puansri">Puan Sri</option>
               <option id="datuk" value = "datuk">Datuk</option>
               <option id="datin" value = "datin">Datin</option>
               <option id="datuksri" value = "datuksri">Datuk Sri</option>
               <option id="datinsri" value = "datinsri">Datin Sri</option>
               <option id="mr" value = "mr">Mr</option>
               <option id="miss" value = "ms">Ms</option>
               <option id="mrs" value = "mrs">Mrs</option>
               <option id="mdm" value = "mdm">Mdm</option>
               <option id="professor" value = "professor">Professor</option>
               <option id="asscprof" value = "asscprof">Associate Prof</option>
               <option id="dr" value = "dr">Dr</option>
               <option id="other" value = "other">Other</option>
             </select> <br/> <br/>

             <label htmlFor="organiszation">Organization/University/Institute/College</label><br/>
            <input className="bg-gray-200 border-2 border-gray-500 w-[100%]" id="oraganization" name="organiszation" type="text" autoComplete="name" required/> <br/> <br/>

            <label htmlFor="nationality">Nationality:</label><br/>
				  <select className="bg-gray-200 border-2 border-gray-500 w-[100%] p-1" name="nationality" required>
					
					<optgroup label="Nationality">
					
					<option value="Malaysia" selected>Malaysia</option>
					
					</optgroup>
					
				  </select><br/><br/>
            
            <label htmlFor="file">File Upload</label><br/>
            <input className="" id="file" name="file" type="file" autoComplete="name" accept=".pdf" required/> <br/> <br/>

            <label htmlFor="tshirtsize">T-Shirt Size</label><br/>
    	        <select name="tshirtsize" className="bg-gray-200 border-2 border-gray-500 w-[100%] p-1" required>
               <option id="xs" value = "xs">XS</option>
               <option id="s" value = "s">S</option>
               <option id="m" value = "m">M</option>
               <option id="l" value = "l">L</option>
               <option id="xl" value = "xl">XL</option>
               <option id="xxl" value = "xxl">XXL</option>
             </select> <br/> <br/>

            

            <button className="border-2 bg-[#064c7a] text-gray-100 text-2xl p-2 px-[5.1rem] ml-10 rounded-xl mt-3" name="submit" type="submit">Next</button>
          </form>
          </div>
        </div>
        </div>
    )
}