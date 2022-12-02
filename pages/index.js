import Head from "next/head";
import ProductHero from "../views/Hero";
import ProductValues from "../views/ProductValues";

export default function Home() {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Hotel Hell is a collection of true small stories from Beverly Hills highend hotels. Find out the wild world of the elites, criminals, and where the dead bodies are hidden."
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta 
          name="image" 
          content="%PUBLIC_URL%/HotelHell.png"
        />
        <meta 
          property="og:title" 
          content="Hotel Hell Beverly Hills and Beyond"
        />
        <meta 
          property="og:description" 
          content="Hotel Hell is a collection of true small stories from Beverly Hills highend hotels. Find out the wild world of the elites, criminals, and where the dead bodies are hidden."
        />
        <meta 
          property="og:image" 
          content="%PUBLIC_URL%/HotelHell.png"
        />
        <meta 
          property="og:url" 
          content="www.hotelhellbeverlyhills.com"/>
        <meta 
          name="twitter:title" 
          content="Hotel Hell"/>
        <meta 
          name="twitter:description" 
          content="Hotel Hell is a collection of true small stories from Beverly Hills highend hotels. Find out the wild world of the elites, criminals, and where the dead bodies are hidden."
        />
        <meta name="twitter:image" content="%PUBLIC_URL%/HotelHellBanner.jpg"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <title>Hotel Hell Beverly Hills and Beyond</title>
      </Head>
      <ProductHero />
      <ProductValues />
    </div>
  )
}
