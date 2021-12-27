import Head from 'next/head'
import Image from 'next/image'

export default function Studentlocal() {
    return(
        <div className="m-0 w-screen h-screen ">
        <Head>
        <title>ASPASP2022</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div className="w-screen h-screen bg-[url('https://test.mnerdsdev.com/form-bg-update1.1.svg')] bg-cover bg-center">
      <div className="flex justify-center">
          <div className="mt-10 mb-24 text-4xl">
              <h1>STUDENTS REGISTRATION</h1>
          </div>


          </div>
          <div className="flex items-center justify-center w-screen pl-72">
            <form className="content-center grid grid-cols-2 divide-x space-x-4" action="https://test.mnerdsdev.com/studentlocal.php" method="POST" encType="multipart/form-data">
            
            <div className="m-3"> 
            <div className="text-2xl">Personal Information</div><br/>
            <label htmlFor="name">Full Name</label><br/>
            <input className="bg-gray-200 border-2 border-gray-500 w-[100%]" name="name" id="name" type="text" required/> <br/> <br/>

            <label htmlFor="email">Email</label><br/>
            <input className="bg-gray-200 border-2 border-gray-500 w-[100%]" name="email" id="email" type="email" required/> <br/> <br/>

            <label htmlFor="contactno">Contact Number</label><br/>
            <input className="bg-gray-200 border-2 border-gray-500 w-[100%]" name="contactno" id="contactno" type="text" required/> <br/> <br/>

            <label htmlFor="prefix">Prefix</label><br/>
    	        <select name="prefix" className="bg-gray-200 border-2 border-gray-500 w-[100%] p-1" required>
              <option id="select" name="select" value = "select" selected disabled>Please Select</option>
               <option id="tansri" name="tansri" value = "tansri">Tan Sri</option>
               <option id="puansri" name="puansri" value = "puansri">Puan Sri</option>
               <option id="datuk" name="datuk" value = "datuk">Datuk</option>
               <option id="datin" name="datin" value = "datin">Datin</option>
               <option id="datuksri" name="datuksri" value = "datuksri">Datuk Sri</option>
               <option id="datinsri" name="datinsri" value = "datinsri">Datin Sri</option>
               <option id="mr" name="mr" value = "mr">Mr</option>
               <option id="miss" name="ms" value = "ms">Ms</option>
               <option id="mrs" name="mrs" value = "mrs">Mrs</option>
               <option id="mdm" name="mdm" value = "mdm">Mdm</option>
               <option id="professor" name="professor" value = "professor">Professor</option>
               <option id="asscprof" name="asscprof" value = "asscprof">Associate Prof</option>
               <option id="dr" name="dr" value = "dr">Dr</option>
               <option id="other" name="other" value = "other">Other</option>
             </select> <br/> <br/>

             <label htmlFor="name">Organization/University/Institute/College</label><br/>
            <input className="bg-gray-200 border-2 border-gray-500 w-[100%]" id="oraganization" name="organiszation" type="text" autoComplete="name" required/> <br/> <br/>

            <label htmlFor="nationality">Nationality:</label><br/>
				  <select className="bg-gray-200 border-2 border-gray-500 w-[100%] p-1" name="nationality" required>
					
					<optgroup label="Nationality">
					
					<option value="Malaysia" selected>Malaysia</option>
					
					</optgroup>
					
				  </select><br/><br/>
            
            <label htmlFor="name">Student ID (Image File)</label><br/>
            <input className="" id="name" name="studentid" type="file" autoComplete="name" accept="image/*" required/> <br/> <br/>

			<label htmlFor="name">File Submission</label><br/>
            <input className="" id="name" name="file" type="file" autoComplete="name" accept=".pdf" required/> <br/> <br/>

            <label htmlFor="tshirtsize">T-Shirt Size</label><br/>
    	        <select name="tshirtsize" className="bg-gray-200 border-2 border-gray-500 w-[100%] p-1" required>
               <option id="xs" value = "xs">XS</option>
               <option id="s" value = "s">S</option>
               <option id="m" value = "m">M</option>
               <option id="l" value = "l">L</option>
               <option id="xl" value = "xl">XL</option>
               <option id="xxl" value = "xxl">XXL</option>
             </select> <br/> <br/>
            </div>
            
            <div className="space-x-4 m-3">
            <div className="text-2xl">Emergency Contact Information</div><br/>
            <label htmlFor="emergencyname">Full Name</label><br/>
            <input className="bg-gray-200 border-2 border-gray-500 w-[100%]" name="emergencyname" id="emergencyname" type="text" autoComplete="name" required/> <br/> <br/>

            <label htmlFor="emergencyemail">Email</label><br/>
            <input className="bg-gray-200 border-2 border-gray-500 w-[100%]" name="emergencyemail" id="emergencyemail" type="text" autoComplete="name" /> <br/> <br/>

            <label htmlFor="emergencyno">Contact Number</label><br/>
            <input className="bg-gray-200 border-2 border-gray-500 w-[100%]" name="emergencyno" id="emergencyno" type="text" autoComplete="name"/> <br/> <br/>

            
            <button className="border-2 bg-[#064c7a] text-gray-100 text-2xl p-2 px-[6.25rem] rounded-xl mt-80 absolute right-[20%] bottom-[9%]" name="submit" type="submit">Next</button>

            </div>
          </form>
          </div>
        </div>
        </div>
    )
}