import Product from "./molecule/_Product"
import "../assets/featuredProducts.css"

const featured: { name: string, image: string, price: string }[] = [
    { "image": "white", "name": "Apple Watch Series 10", "price": "429 €" },
    { "image": "white", "name": "Apple iPad 10,9\" (2024) Wi-Fi (10ª Gen)", "price": "369 €" },
    { "image": "white", "name": "Apple iPhone 16 Pro", "price": "1.167 €" },
    { "image": "white", "name": "Apple AirPods 4", "price": "149 €" },
]
const mainFeatured =
    { "image": "white", "name": "Apple Mac", "price": "663 €" }


export default function FeatureProducts() {
    return <section className="block --featured_block">
        <h3>Feature Products</h3>
        <section className="featured_block">
            <div className="featured_image_main">
                <div className="featured_image_main_content">
                    <h3>
                        {mainFeatured.name}
                    </h3>
                    <p>
                        {mainFeatured.price}
                    </p>
                </div>
                <img
                    style={{background:mainFeatured.image}}
                    // src={mainFeatured.image}
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