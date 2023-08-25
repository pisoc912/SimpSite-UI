
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Shorten from "./components/Shorten";
import Ads from "./components/Ads";
import Footer from "./components/Footer";
import ShortenWrapper from "./components/ShortenWrapper";
import { SessionProvider } from "next-auth/react";

function Home() {
  return (
    <SessionProvider>
      <Navbar />
      <HomePage />
      <ShortenWrapper />
      <Ads />
      <Footer />
    </SessionProvider>
  )
}

export default Home;