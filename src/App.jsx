import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="w-full min-h-screen  ">
      <Navbar />
      <LandingPage />
      <Marquee />

      <Footer />
    </div>
  )
}