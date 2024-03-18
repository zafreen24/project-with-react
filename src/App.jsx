
import Blog from "./components/Blog/Blog"
import Bottom from "./components/Bottom/Bottom"
import Stellar from "./components/Stellar/Stellar"
import Focus from "./components/focus/Focus"
import Footer from "./components/footer/Footer"
import Menu from "./components/menu/Menu"
import Banner from "./components/menu/banner/Banner"
import Work from "./components/menu/work/Work"
import Project from "./components/project/Project"

function App() {

  return (
    <>
      <Menu/>
      <Banner/>
      <Work/>
      <Project/>
      <Focus/>
     <Stellar/>
     <Blog/>
     <Footer/>
     <Bottom/>
    </>
  )
}

export default App
