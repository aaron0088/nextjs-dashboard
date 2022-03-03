import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="m-0 w-screen h-full">

      <div className="">
        <Image
        src="/aspasp_registration.png"
        layout="responsive"
        alt='registration front'
        height={1080}
        width={1920}>
        </Image>


        <div className='text-center xl:grid xl:grid-cols-2 xl:col-span-2'>
        <Image
        src="/fee.jpg"
        alt='fee info'
        height={1290}
        width={810}>
        </Image>

        <div className='border-2 px-4 text-left md:pt-5'>
        <div className='text-center font-bold'>Emerging Countries List:</div>
        <div className='md:grid md:grid-cols-5'>
          <div></div>
          <div>
            1. Afghanistan<br/>
            2. Angola <br/>
            3. Bangladesh <br/>
            4. Benin Bhutan <br/>
            5. Bolivia <br/>
            6. Burkina Faso <br/>
            7. Burundi Cabo <br/>
            8. Verde <br/>
            9. Cambodia <br/>
            10. Cameroon<br/>
            11. Central African Republic <br/>
            12. Chad<br/>
            13. Comoros<br/>
            14. Democratic Republic of the Congo<br/>
            15. Côte d'Ivoire<br/>
            16. Djibouti<br/>
            17. Arab Republic of Egypt<br/>
            18. El Salvador<br/>
            19. Eritrea<br/>
            20. Eswatini <br/>
            21. Ethiopia <br/>
            22. The Gambia<br/>
            23. Ghana <br/>
            24. Guinea<br/>
            25. Guinea-Bissau <br/>
            26. Haiti <br/>
            27. Honduras <br/>
            28. India <br/>
            29. Indonesia <br/>
            30. Liberia<br/>
            31. Kenya <br/>
            32. Kiribati<br/>
            33. Democratic People’s Republic of Korea<br/>
            34. Kyrgyz Republic<br/>
            35. Lao People’s Democratic Republic <br/>
            36. Lesotho<br/>
            37. Madagascar <br/>
            38. Malawi<br/> </div>

        <div></div>

        <div>
          39. Mali <br/>
          40. Mauritania<br/>
          41. Federated States of Micronesia <br/>
          42. Moldova<br/>
          43. Mongolia <br/>
          44. Morocco <br/>
          45. Mozambique <br/>
          46. Myanmar <br/>
          47. Nepal <br/>
          48. Nicaragua <br/>
          49. Niger <br/>
          50. Nigeria <br/>
          51. Pakistan<br/>
          52. Papua New Guinea <br/>
          53. Philippines <br/>
          54. Rwanda<br/>
          55. Sao Tome and Principe <br/>
          56. Senegal<br/>
          57. Sierra Leone <br/>
          58. Solomon Islands <br/>
          59. Somalia<br/>
          60. South Sudan <br/>
          61. Sudan<br/>
          62. Syrian Arab Republic<br/>
          63. Tajikistan<br/>
          64. Tanzania <br/>
          65. Timor-Leste <br/>
          66. Togo <br/>
          67. Tunisia <br/>
          68. Uganda <br/>
          69. Ukraine <br/>
          70. Uzbekistan <br/>
          71. Vanuatu <br/>
          72. Vietnam<br/>
          73. West Bank and Gaza<br/>
          74. Republic of Yemen <br/>
          75. Zambia<br/>
          76. Zimbabwe<br/>
          </div>

        </div>

        </div>

        </div>
        
      <div className="lg:text-4xl text-s text-center text-red-800">
        <h1>Register Now!</h1>
      </div>

      <div className="flex justify-center place-items-end">
        <div className="text-center text-xs lg:my-3 lg:text-sm ">
          <Link href="./registration/delegatechoose">
            <button className="py-1 w-[20rem] md:py-2.5 md:w-75 lg:py-2.5 lg:w-75 mx-1 border-2 bg-[#701875] text-white rounded-[999px] hover:drop-shadow-xl">DELEGATES Click here</button>
          </Link>

          <Link href="./registration/emerging">
            <button className="py-1 w-[20rem] md:py-2.5 md:w-75 lg:py-2.5 lg:w-75 border-2 bg-[#db2777] text-white rounded-[999px] hover:drop-shadow-xl">DELEGATES (Emerging Countries) Click Here</button>
          </Link>

          <Link href="./registration/studente">
            <button className="py-1 w-[20rem] md:py-2.5 md:w-75 lg:py-2.5 lg:w-75 border-2 bg-[#210c96] text-white rounded-[999px] hover:drop-shadow-xl">STUDENTS (Emerging Countries) Click Here</button>
          </Link>

          <Link href="./registration/studentchoose">
            <button className="text-black py-1 w-[20rem] md:py-2.5 md:w-75 lg:py-2.5 lg:w-75 mx-1 border-2 bg-[#eab308] rounded-[999px] hover:drop-shadow-xl">STUDENTS Click here</button>
          </Link>
          
          <Link href="./registration/speakerchoose">
            <button className="py-1 w-[20rem] md:py-2.5 md:w-75 lg:py-2.5 lg:w-75 border-2 bg-[#0891b2] text-white rounded-[999px] hover:drop-shadow-xl">PRESENTER Click here</button>
          </Link>
          
          <div className="mt-3">
            <Link href="/ASPASP2022_Basic_Infopack.pdf" download="ASPASP2022_Basic_Infopack">
              <button className="py-1 w-[20rem] md:py-2.5 md:w-75 lg:py-2.5 lg:w-75 border-2 bg-white text-black rounded-[999px] hover:drop-shadow-xl">DOWNLOAD ASPASP2022 Infopack</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
