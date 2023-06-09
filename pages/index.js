import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import ArticleList from '../components/ArticleList';

const inter = Inter({ subsets: ['latin'] })

export default function Home({articles}) {
  console.log(articles)
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ArticleList articles={articles}/>
    </div>
  )
}

export const getStaticProps = async() =>{
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const articles =await res.json();
  return{
    props:{
      articles
    }
  }
}
