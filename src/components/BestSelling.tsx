import Product from "./molecule/_Product"
import "../assets/bestSelling.css"

const prods: { name: string, price: string, image: string }[] = [

    { "image": "lightpink", "name": "Samsung Galaxy S25", "price": "799 €" },
    { "image": "lightyellow", "name": "Apple iPhone 16 Pro", "price": "1.167 €" },
    { "image": "lime", "name": "Apple AirPods 4", "price": "149 €" },
    { "image": "cyan", "name": "Apple Mac Mini (2024)", "price": "663 €" },
    { "image": "lightblue", "name": "Apple Watch Series 10", "price": "429 €" },
    { "image": "lightgray", "name": "Apple iPad 10,9\" (2024) Wi-Fi (10ª Gen)", "price": "369 €" },

]

export default function BestSelling() {
    /// mandatory
    return <section className="block --no_padding_h" id="Best Selling">
        <h3><b style={{color: "var(--cmain)"}}>Best</b> Selling</h3>
        <ul className="mandatory_ul">
            {prods.map(el => {
                return <Product height="23dvw" key={Math.random()} el={el} />
            })}
        </ul>
    </section>
} 