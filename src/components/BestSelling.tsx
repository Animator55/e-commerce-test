import Product from "./molecule/_Product"
import "../assets/bestSelling.css"

import image1 from "../assets/images/phone-1.jpg"
import image2 from "../assets/images/pad-1.jpg"
import image3 from "../assets/images/head-1.jpg"
import image4 from "../assets/images/laptop-1.jpg"
import image5 from "../assets/images/watch-1.jpg"
import image6 from "../assets/images/phone-2.jpg"
const prods: { name: string, price: string, image: string }[] = [

    { "image": image6, "name": "Samsung Galaxy S25", "price": "799 €" },
    { "image": image1, "name": "Apple iPhone 16 Pro", "price": "1.167 €" },
    { "image": image3, "name": "Apple AirPods 4", "price": "149 €" },
    { "image": image4, "name": "Apple Mac Mini (2024)", "price": "663 €" },
    { "image": image5, "name": "Apple Watch Series 10", "price": "429 €" },
    { "image": image2, "name": "Apple iPad 10,9\" (2024) Wi-Fi (10ª Gen)", "price": "369 €" },

]

export default function BestSelling() {
    /// mandatory
    return <section className="block --no_padding_h hidden" id="Best Selling">
        <h3><b style={{color: "var(--cmain)"}}>Best</b> Selling</h3>
        <ul className="mandatory_ul">
            {prods.map(el => {
                return <Product height="23dvw" key={Math.random()} el={el} />
            })}
        </ul>
    </section>
} 