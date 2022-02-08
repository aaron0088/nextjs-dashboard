import Head from 'next/head'
import Image from 'next/image'

export default function Emerging() {
    return(
        <div className="m-0 w-screen h-screen ">
        <Head>
        <title>ASPASP2022</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

	  <div className="w-screen h-screen sm:bg-[url('/form-bg-update1.1.svg')] bg-cover bg-center">
      <div className="flex justify-center sm:pl-20">
          <div className="mt-10 sm:mb-12 text-4xl items-end sm:pl-44">
              <h1>DELEGATES (EMERGING COUNTRIES)</h1>
              <h1>REGISTRATION</h1>
          </div>


          </div>
          <div className="flex items-center justify-center w-screen sm:pl-72">
            <form className="content-center sm:grid sm:grid-cols-2 sm:divide-x sm:space-x-4" action="https://aspasp.mnerdsdev.com/emerging.php" method="POST" encType="multipart/form-data">
            
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
          			<option value="" disabled selected>Please Select</option>
					<option value="Afghanistan">Afghanistan</option>
					<option value="Angola">Angola</option>
					<option value="Bangladesh">Bangladesh</option>
					<option value="Benin">Benin</option>					
					<option value="Bhutan">Bhutan</option>
					<option value="Bolivia">Bolivia</option>					
					<option value="Burkina Faso">Burkina Faso</option>
					<option value="Burundi">Burundi</option>
                    <option value="Cabo Verde">Cabo Verde</option>
					<option value="Cambodia">Cambodia</option>
					<option value="Cameroon">Cameroon</option>
					<option value="Central African Republic">Central African Republic</option>
					<option value="Chad">Chad</option>
					<option value="Comoros">Comoros</option>
					<option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
					<option value="Cote D'ivoire">Cote D&apos;ivoire</option>			
					<option value="Djibouti">Djibouti</option>					
					<option value="Egypt">Egypt</option>
					<option value="El Salvador">El Salvador</option>					
					<option value="Eritrea">Eritrea</option>					
					<option value="Ethiopia">Ethiopia</option>
                    <option value="Eswatini">Eswatini</option>				
					<option value="Gambia">Gambia</option>					
					<option value="Ghana">Ghana</option>					
					<option value="Guinea-bissau">Guinea-bissau</option>					
					<option value="Haiti">Haiti</option>					
					<option value="Honduras">Honduras</option>					
					<option value="India">India</option>
					<option value="Indonesia">Indonesia</option>					
					<option value="Korea, Democratic People's Republic of">Korea, Democratic People&apos;s Republic of</option>					
					<option value="Kyrgyzstan">Kyrgyzstan</option>
					<option value="Lao People's Democratic Republic">Lao People&apos;s Democratic Republic</option>					
					<option value="Lesotho">Lesotho</option>					
					<option value="Madagascar">Madagascar</option>
					<option value="Malawi">Malawi</option>										
					<option value="Mali">Mali</option>					
					<option value="Mauritania">Mauritania</option>					
					<option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
					<option value="Moldova, Republic of">Moldova, Republic of</option>					
					<option value="Mongolia">Mongolia</option>					
					<option value="Morocco">Morocco</option>
					<option value="Mozambique">Mozambique</option>
					<option value="Myanmar">Myanmar</option>					
					<option value="Nepal">Nepal</option>					
					<option value="Nicaragua">Nicaragua</option>
					<option value="Niger">Niger</option>
					<option value="Nigeria">Nigeria</option>					
					<option value="Pakistan">Pakistan</option>									
					<option value="Papua New Guinea">Papua New Guinea</option>					
					<option value="Philippines">Philippines</option>					
					<option value="Rwanda">Rwanda</option>					
					<option value="Sao Tome and Principe">Sao Tome and Principe</option>					
					<option value="Senegal">Senegal</option>					
					<option value="Sierra Leone">Sierra Leone</option>					
					<option value="Solomon Islands">Solomon Islands</option>
					<option value="Somalia">Somalia</option>
					<option value="South Africa">South Africa</option>
                    <option value="South Sudan">South Sudan</option>
					<option value="Sudan">Sudan</option>					
					<option value="Syrian Arab Republic">Syrian Arab Republic</option>					
					<option value="Tajikistan">Tajikistan</option>					
					</optgroup>
					
				  </select><br/><br/>
            

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
            
            <div className="sm:space-x-4 m-3">
            <div className="text-2xl">Emergency Contact Information</div><br/>
            <label htmlFor="emergencyname">Full Name</label><br/>
            <input className="bg-gray-200 border-2 border-gray-500 w-[100%]" name="emergencyname" id="emergencyname" type="text" autoComplete="name" required/> <br/> <br/>

            <label htmlFor="emergencyemail">Email</label><br/>
            <input className="bg-gray-200 border-2 border-gray-500 w-[100%]" name="emergencyemail" id="emergencyemail" type="text" autoComplete="name" /> <br/> <br/>

            <label htmlFor="emergencyno">Contact Number</label><br/>
            <input className="bg-gray-200 border-2 border-gray-500 w-[100%]" name="emergencyno" id="emergencyno" type="text" autoComplete="name"/> <br/> <br/>

            
            <button className="border-2 bg-[#064c7a] text-gray-100 text-2xl p-2 px-[6.25rem] rounded-xl sm:mt-80 sm:absolute sm:right-[20%] sm:bottom-[9%]" name="submit" type="submit">Next</button>

            </div>
          </form>
          </div>
        </div>
        </div>
    )
}