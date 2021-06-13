import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import ProductFeed from "../components/ProductFeed";
import Slider from "../components/Slider";


export default function Home({results}) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      {/* header */}
      <div className="sticky top-0 z-999">
     <Header />
      <Nav />
     </div>
      <main className="max-w-screen-2xl mx-auto">
        {/* slider */}
        <Slider />
        {/* product feed */}
        <ProductFeed results={results}/>
      </main>
    </div>
  );
}


export async function getServerSideProps(context) {
  const request = await fetch('https://fakestoreapi.com/products')
  .then((res)=> res.json())
  return {
      props:{
          results: request
      }
  }
}

