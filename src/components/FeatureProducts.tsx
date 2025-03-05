import Product from "./_Product"

const featured: {name: string, image: string, price: string}[] = [
    { "image": "", "name": "Apple Mac", "price": "663 €" },
    { "image": "", "name": "Apple Watch Series 10", "price": "429 €" },
    { "image": "", "name": "Apple iPad 10,9\" (2024) Wi-Fi (10ª Gen)", "price": "369 €" },
    { "image": "", "name": "Apple iPhone 16 Pro", "price": "1.167 €" },
    { "image": "", "name": "Apple AirPods 4", "price": "149 €" },
]


export default function FeatureProducts (){
    return <section className="block">
        <h4>Feature Products</h4>
        <div className="main-image">
            
        </div>
        <div className="feature-grid">
            {featured.map(el=>{
                return <Product key={Math.random()} el={el}/>
            })}
        </div>
    </section>
}