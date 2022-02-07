import Head from 'next/head'
import Image from 'next/image'

export default function Delegates() {
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
              <h1>DELEGATES REGISTRATION</h1>
          </div>


          </div>
          <div className="flex items-center justify-center w-screen sm:pl-72">
            <form className="content-center sm:grid sm:grid-cols-2 sm:divide-x sm:space-x-4" action="https://aspasp.xpoexpo.com/delegate.php" method="POST" encType="multipart/form-data">
            
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
					<option value="Albania">Albania</option>
					<option value="Algeria">Algeria</option>
					<option value="American Samoa">American Samoa</option>
					<option value="Andorra">Andorra</option>
					
					<option value="Anguilla">Anguilla</option>
					<option value="Antarctica">Antarctica</option>
					<option value="Antigua and Barbuda">Antigua and Barbuda</option>
					<option value="Argentina">Argentina</option>
					<option value="Armenia">Armenia</option>
					<option value="Aruba">Aruba</option>
					<option value="Australia">Australia</option>
					<option value="Austria">Austria</option>
					<option value="Azerbaijan">Azerbaijan</option>
					<option value="Bahamas">Bahamas</option>
					<option value="Bahrain">Bahrain</option>
					
					<option value="Barbados">Barbados</option>
					<option value="Belarus">Belarus</option>
					<option value="Belgium">Belgium</option>
					<option value="Belize">Belize</option>
					
					<option value="Bermuda">Bermuda</option>
					
					
					<option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
					<option value="Botswana">Botswana</option>
					<option value="Bouvet Island">Bouvet Island</option>
					<option value="Brazil">Brazil</option>
					<option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
					<option value="Brunei Darussalam">Brunei Darussalam</option>
					<option value="Bulgaria">Bulgaria</option>
					
				
					<option value="Canada">Canada</option>
					<option value="Cayman Islands">Cayman Islands</option>

					<option value="Chad">Chad</option>
					<option value="Chile">Chile</option>
					<option value="China">China</option>
					<option value="Christmas Island">Christmas Island</option>
					<option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
					<option value="Colombia">Colombia</option>

					<option value="Congo">Congo</option>

					<option value="Cook Islands">Cook Islands</option>
					<option value="Costa Rica">Costa Rica</option>

					<option value="Croatia">Croatia</option>
					<option value="Cuba">Cuba</option>
					<option value="Cyprus">Cyprus</option>
					<option value="Czech Republic">Czech Republic</option>
					<option value="Denmark">Denmark</option>

					<option value="Dominica">Dominica</option>
					<option value="Dominican Republic">Dominican Republic</option>
					<option value="Ecuador">Ecuador</option>


					<option value="Equatorial Guinea">Equatorial Guinea</option>

					<option value="Estonia">Estonia</option>

					<option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
					<option value="Faroe Islands">Faroe Islands</option>
					<option value="Fiji">Fiji</option>
					<option value="Finland">Finland</option>
					<option value="France">France</option>
					<option value="French Guiana">French Guiana</option>
					<option value="French Polynesia">French Polynesia</option>
					<option value="French Southern Territories">French Southern Territories</option>
					<option value="Gabon">Gabon</option>

					<option value="Georgia">Georgia</option>
					<option value="Germany">Germany</option>

					<option value="Gibraltar">Gibraltar</option>
					<option value="Greece">Greece</option>
					<option value="Greenland">Greenland</option>
					<option value="Grenada">Grenada</option>
					<option value="Guadeloupe">Guadeloupe</option>
					<option value="Guam">Guam</option>
					<option value="Guatemala">Guatemala</option>
					<option value="Guernsey">Guernsey</option>

					<option value="Guyana">Guyana</option>

					<option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
					<option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>

					<option value="Hong Kong">Hong Kong</option>
					<option value="Hungary">Hungary</option>
					<option value="Iceland">Iceland</option>


					<option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
					<option value="Iraq">Iraq</option>
					<option value="Ireland">Ireland</option>
					<option value="Isle of Man">Isle of Man</option>
					<option value="Italy">Italy</option>
					<option value="Jamaica">Jamaica</option>
					<option value="Japan">Japan</option>
					<option value="Jersey">Jersey</option>
					<option value="Jordan">Jordan</option>
					<option value="Kazakhstan">Kazakhstan</option>

					<option value="Korea, Republic of">Korea, Republic of</option>
					<option value="Kuwait">Kuwait</option>

					<option value="Latvia">Latvia</option>
					<option value="Lebanon">Lebanon</option>
					<option value="Lesotho">Lesotho</option>

					<option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
					<option value="Liechtenstein">Liechtenstein</option>
					<option value="Lithuania">Lithuania</option>
					<option value="Luxembourg">Luxembourg</option>
					<option value="Macao">Macao</option>
					<option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>

					
					<option value="Maldives">Maldives</option>

					<option value="Malta">Malta</option>
					<option value="Marshall Islands">Marshall Islands</option>
					<option value="Martinique">Martinique</option>

					<option value="Mauritius">Mauritius</option>
					<option value="Mayotte">Mayotte</option>
					<option value="Mexico">Mexico</option>

					<option value="Moldova, Republic of">Moldova, Republic of</option>
					<option value="Monaco">Monaco</option>

					<option value="Montenegro">Montenegro</option>
					<option value="Montserrat">Montserrat</option>



					<option value="Namibia">Namibia</option>
					<option value="Nauru">Nauru</option>

					<option value="Netherlands">Netherlands</option>
					<option value="Netherlands Antilles">Netherlands Antilles</option>
					<option value="New Caledonia">New Caledonia</option>
					<option value="New Zealand">New Zealand</option>



					<option value="Niue">Niue</option>
					<option value="Norfolk Island">Norfolk Island</option>
					<option value="Northern Mariana Islands">Northern Mariana Islands</option>
					<option value="Norway">Norway</option>
					<option value="Oman">Oman</option>

					<option value="Palau">Palau</option>
					<option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
					<option value="Panama">Panama</option>

					<option value="Paraguay">Paraguay</option>
					<option value="Peru">Peru</option>

					<option value="Pitcairn">Pitcairn</option>
					<option value="Poland">Poland</option>
					<option value="Portugal">Portugal</option>
					<option value="Puerto Rico">Puerto Rico</option>
					<option value="Qatar">Qatar</option>
					<option value="Reunion">Reunion</option>
					<option value="Romania">Romania</option>
					<option value="Russian Federation">Russian Federation</option>

					<option value="Saint Helena">Saint Helena</option>
					<option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
					<option value="Saint Lucia">Saint Lucia</option>
					<option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
					<option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
					<option value="Samoa">Samoa</option>
					<option value="San Marino">San Marino</option>

					<option value="Saudi Arabia">Saudi Arabia</option>

					<option value="Serbia">Serbia</option>
					<option value="Seychelles">Seychelles</option>

					<option value="Singapore">Singapore</option>
					<option value="Slovakia">Slovakia</option>
					<option value="Slovenia">Slovenia</option>


					<option value="South Africa">South Africa</option>
					<option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
					<option value="Spain">Spain</option>
					<option value="Sri Lanka">Sri Lanka</option>

					<option value="Suriname">Suriname</option>
					<option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
					<option value="Swaziland">Swaziland</option>
					<option value="Sweden">Sweden</option>
					<option value="Switzerland">Switzerland</option>

					<option value="Taiwan">Taiwan</option>

					<option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
					<option value="Thailand">Thailand</option>
					<option value="Timor-leste">Timor-leste</option>
					<option value="Togo">Togo</option>
					<option value="Tokelau">Tokelau</option>
					<option value="Tonga">Tonga</option>
					<option value="Trinidad and Tobago">Trinidad and Tobago</option>
					<option value="Tunisia">Tunisia</option>
					<option value="Turkey">Turkey</option>
					<option value="Turkmenistan">Turkmenistan</option>
					<option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
					<option value="Tuvalu">Tuvalu</option>
					<option value="Uganda">Uganda</option>
					<option value="Ukraine">Ukraine</option>
					<option value="United Arab Emirates">United Arab Emirates</option>
					<option value="United Kingdom">United Kingdom</option>
					<option value="United States">United States</option>
					<option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
					<option value="Uruguay">Uruguay</option>
					<option value="Uzbekistan">Uzbekistan</option>
					<option value="Vanuatu">Vanuatu</option>
					<option value="Venezuela">Venezuela</option>
					<option value="Viet Nam">Viet Nam</option>
					<option value="Virgin Islands, British">Virgin Islands, British</option>
					<option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
					<option value="Wallis and Futuna">Wallis and Futuna</option>
					<option value="Western Sahara">Western Sahara</option>
					<option value="Yemen">Yemen</option>
					<option value="Zambia">Zambia</option>
					<option value="Zimbabwe">Zimbabwe</option>
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