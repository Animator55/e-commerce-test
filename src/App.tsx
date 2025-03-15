import React from 'react'
import './assets/App.css'
import BestSelling from './components/BestSelling'
import Categories from './components/Categories'
import Clients from './components/Clients'
import FeatureProducts from './components/FeatureProducts'
import Footer from './components/Footer'
import Header from './components/Header'
import NavBar from './components/NavBar'
import NewArrival from './components/NewArrival'

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(element => {
      element.target.classList.toggle("show", element.isIntersecting)
  });
}, {
  root: null,
  // rootMargin: '-300px 0px -500px 0px',
  threshold: 0.1
})

function App() {  

  React.useEffect(()=>{
    document.querySelectorAll<HTMLDivElement>(".hidden").forEach(el=>{
      observer.observe(el)
    })
  })

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
