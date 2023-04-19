import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import React from 'react';
import Layout from '../../components/layout';



const Firstpost = () => {
  return (
    <Layout>
      <Head>
        <title>first-post</title>

      </Head>
      <h1>
        <Link href="/">Back to Home</Link>
      </h1>
      <Image src="/Images/profile.jpg" height={144} width={144} alt='profile-img'/>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
    </Layout>
  )
}

export default Firstpost;