import Product from "./molecule/_Product"
import "../assets/featuredProducts.css"
import image1 from "../assets/images/phone-1.jpg"
import image2 from "../assets/images/pad-1.jpg"
import image3 from "../assets/images/head-1.jpg"
import image4 from "../assets/images/laptop-1.jpg"
import image5 from "../assets/images/watch-1.jpg"

const featured: { name: string, image: string, price: string }[] = [
    { "image": image5, "name": "Apple Watch Series 10", "price": "429 €" },
    { "image": image2, "name": "Apple iPad 10,9\" (2024) Wi-Fi (10ª Gen)", "price": "369 €" },
    { "image": image1, "name": "Apple iPhone 16 Pro", "price": "1.167 €" },
    { "image": image3, "name": "Apple AirPods 4", "price": "149 €" },
]
const mainFeatured =
    { "image": image4, "name": "Apple Mac", "price": "663 €" }


export default function FeatureProducts() {
    return <section className="block --featured_block hidden" id="Featured">
        <h3><b style={{color: "var(--cmain)"}}>Feature</b> Products</h3>
        <section className="featured_block">
            <div className="featured_image_main">
                <div className="featured_image_main_content">
                    <p>
                        {mainFeatured.name}
                    </p>
                    <h3>
                        {mainFeatured.price}
                    </h3>
                </div>
                <img
                    // style={{background:mainFeatured.image}}
                    src={mainFeatured.image}
                />
            </div>
            <div className="featured_grid">
                {featured.map(el => {
                    return <Product height={"14dvw"} key={Math.random()} el={el} />
                })}
            </div>
        </section>
    </section>
}