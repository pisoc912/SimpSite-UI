
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Shorten from "./components/Shorten";
import Ads from "./components/Ads";
import Footer from "./components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Shorten />
      <Ads />
      <Footer />
    </div>
  )
}

export default Home;