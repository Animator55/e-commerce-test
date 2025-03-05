import Product from "./_Product"

const prods: { name: string, price: string, image: string }[] = [

    { "image": "", "name": "Samsung Galaxy S25", "price": "799 €" },
    { "image": "", "name": "Apple iPhone 16 Pro", "price": "1.167 €" },
    { "image": "", "name": "Apple AirPods 4", "price": "149 €" },
    { "image": "", "name": "Apple Mac Mini (2024)", "price": "663 €" },
    { "image": "", "name": "Apple Watch Series 10", "price": "429 €" },
    { "image": "", "name": "Apple iPad 10,9\" (2024) Wi-Fi (10ª Gen)", "price": "369 €" },

]

export default function BestSelling() {
    /// mandatory
    return <section className="block">
        <h3>Best Selling</h3>
        <ul>
            {prods.map(el => {
                return <Product key={Math.random()} el={el} />
            })}
        </ul>
    </section>
} 