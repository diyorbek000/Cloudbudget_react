import Header from "../src/assets/components/Header/Header"
import Navbar from "../src/assets/components/Navbar/Navbar"
import Section from "../src/assets/components/Section/Section"
import Footer from "../src/assets/components/Footer/Footer"

import "./index.css"
export default function App() {

  return (
    <>
    <div className="navbar-bg">
      <div className="container">
        <Navbar />
      </div>
    </div>
      <Header />
      <Section />
      <Footer />
    </>
  )
}