import "../assets/categories.css"
import image1 from "../assets/images/phone-main.jpg"
import image2 from "../assets/images/laptop-main.jpg"
import image3 from "../assets/images/head-main.jpg"
import image4 from "../assets/images/watch-main.jpg"

const categories : {name: string, image: string}[]=[
    {name: "Smart Phone", image: image1},
    {name: "Laptop", image: image2},
    {name: "Headphones", image: image3},
    {name: "Smart Watch", image: image4},
]


export default function Categories (){
    return <ul className="block --categories" id="Categories">
        {categories.map(el=>{
            return <li
                key={Math.random()} 
                className="categories_block"
            >
                <img 
                // style={{backgroundColor: el.image}}
                src={el.image} 
                alt="" 
                />
                <h3>{el.name}</h3>
            </li>
        })}
    </ul>
}