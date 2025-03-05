import './assets/App.css'
import BestSelling from './components/BestSelling'
import Categories from './components/Categories'
import Clients from './components/Clients'
import FeatureProducts from './components/FeatureProducts'
import Footer from './components/Footer'
import Header from './components/Header'
import NavBar from './components/NavBar'
import NewArrival from './components/NewArrival'

function App() {  

  return <main>
    <NavBar/>
    <Header/>
    <Categories/>
    <BestSelling/>
    <FeatureProducts/>
    <NewArrival/>
    <Clients/>
    <Footer/>
  </main>
}

export default App
