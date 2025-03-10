import ProductHorizontal from "./molecule/_Product--horizontal"
import "../assets/newArrival.css"

const arrival = [
    { "image": "", category: "Phone", "name": "Nothing Phone (3a)", "description": "Smartphone asequible con diseño innovador y características destacadas.", "price": "599 €" },
    { "image": "", category: "Watch", "name": "Samsung Galaxy Watch 7", "description": "Reloj inteligente con pantalla Super AMOLED y monitoreo avanzado de salud.", "price": "349 €" },
    { "image": "", category: "Watch", "name": "Apple Watch Ultra 2", "description": "Reloj inteligente de alta resistencia con caja de titanio reciclado y nuevas funcionalidades de salud.", "price": "799 €" },
    { "image": "", category: "Phone", "name": "Realme 14 Pro+", "description": "Smartphone con especificaciones altas a precio medio.", "price": "499 €" },
    { "image": "", category: "Tablet", "name": "Xiaomi Mi Pad 6", "description": "Tablet con pantalla de 11 pulgadas y procesador Snapdragon 870.", "price": "399 €" },
    { "image": "", category: "Watch", "name": "Xiaomi Mi Watch 2", "description": "Reloj inteligente con monitoreo de salud y batería de larga duración.", "price": "129 €" },
]


export default function NewArrival() {
    /// mandatory
    return <section className="block --new_arrival_block" id="News">
        <h3>New Arrival</h3>
        <ul className="new_arrival_grid">
            {arrival.map(el => {
                return <ProductHorizontal el={el}/>
            })}
        </ul>
    </section>
} 