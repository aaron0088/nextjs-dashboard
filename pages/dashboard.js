import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Dashboard() {
  return (
    <div>
      <Head>
        <title>ASPASP2022</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}> 
        {/*left column*/}
        <div className={styles.leftbar}>
          <div className="flex-col justify-between h-96">
            <div className={styles.title}>
              <h1 className="mt-5 mb-16 text-4xl align-middle leading-tight font-bold">
                Dashboard
              </h1>
            </div>

            <div className="">
              <a className="flex flex-col text-2xl mb-10" href="">Home</a>
              <a className="flex flex-col text-2xl mb-10" href="">Report</a>
            </div>
              
            <div className="">
              <a className="text-2xl" href="">Logout</a>
            </div>
          </div>
        </div>

        
        {/*center column*/}
        
          

          <div className={styles.centeritems}>
          <div className={styles.grid}>

            <a href="" className={styles.cardthree}>
              <h2 className="font-bold">Speaker Registration &rarr;</h2>
              <p>View speaker registration data, export report</p>
            </a>

            <a
              href=""
              className={styles.cardtwo}
            >
              <h2 className="font-bold">Participants Registration &rarr;</h2>
              <p>View participants registration data, export report</p>
            </a>

            <a
              href=""
              className={styles.cardone}
            >
              <h2 className="font-bold">Site Statistics &rarr;</h2>
              <p>
                Graphical views of visits on the site
              </p>
            </a>

            <a
              href="https://dashboard.stripe.com/"
              className={styles.cardfour}
            >
              <h2 className="font-bold">To Stripe Dashboard - Payment Area &rarr;</h2>
              
            </a>
          </div>
        </div>
      </main>

    </div>
  )
}
