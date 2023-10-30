import Hero from "./Components/Hero"
import Nav from "./Components/Nav"
import Slider from "./Components/Slider"
import PizzaSlice from "./Components/Icons/PizzaSlice"
import Burger from "./Components/Icons/Burger"
import Salad from "./Components/Icons/Salad"
import Combos from "./Components/Icons/Combos"
import Footer from "./Components/Footer"
import MobileNav from "./Components/MobileNav"
function App() {

  return (
    <>
    <Nav/>
    <MobileNav/>
    <Hero/>
    <section className="populer">
 
      <h1>Our Popular <span>Categories</span></h1>
      <div className="categories">
      <div className="category active">
        <PizzaSlice/>
        <h3 className="active">Pizzas</h3>
      </div>
      <div className="category">
      <Burger/>
        <h3 >Burgers</h3>
      </div>
      <div className="category">
      <Salad/>
        <h3 >Salads</h3>
      </div>
      <div className="category">
      <Combos/>
        <h3 >Combos</h3>
      </div>
      </div>
      <Slider/>
    </section>
    <section className="know-us">
      <h1>Get to know <span>us</span></h1>
      <div className="know-us-grid">
        <div>
          <img src="/unsplash_Oalh2MojUuk.png" alt="" />
        </div>
        <div >
          <h1><span>Teamwork</span> is the key to our sucess</h1>
          <p>At TasteNow we make sure that every decision is determined by a team of us. Everyone´s opinion matters, and as group, we are stronger. We firmly belive that team work, makes the dream work.</p>
        </div>
        <div>   <div >
          <h1>We are all in for the <span>enviroment</span> </h1>
          <p>TasteNow donates $1 penny for every purchase made from the app to an organization that takes care of our enviromet. We belive that with everyone´s help, we can make a better world. </p>
        </div></div>
        <div>
        <div>
          <img src="/unsplash_Oalh2MojUuk.png" alt="" />
        </div>
        </div>
        
         </div>
    </section>
    <Footer/>
    </>
  )
}

export default App
