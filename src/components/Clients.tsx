type clientsType = { image: any, quote: string, name: string, ranking: number }

const clients: clientsType[][] = [
    [
        { "image": "", "quote": "Siempre compro aquí porque son confiables y rápidos.", "name": "Rodrigo H.", "ranking": 5 },
        { "image": "", "quote": "La atención fue increíble, resolvieron todas mis dudas.", "name": "Carla V.", "ranking": 4.9 },
        { "image": "", "quote": "Compré un MacBook y llegó antes de lo esperado. 100% recomendado.", "name": "Emiliano S.", "ranking": 5 },
        { "image": "", "quote": "Gran variedad de productos y excelentes precios.", "name": "Patricia K.", "ranking": 4.8 },
        { "image": "", "quote": "Me enviaron un regalo junto con mi compra, ¡un gran detalle!", "name": "Gabriel O.", "ranking": 5 },
        { "image": "", "quote": "Garantía oficial y soporte postventa. Estoy muy satisfecho.", "name": "Natalia R.", "ranking": 5 },
        { "image": "", "quote": "Ofrecen descuentos por compras en efectivo. Muy conveniente.", "name": "Fabián M.", "ranking": 4.9 },
        { "image": "", "quote": "Compré un iPhone y la caja estaba impecable, todo sellado.", "name": "Andrea F.", "ranking": 5 },
        { "image": "", "quote": "Buena comunicación en todo el proceso de compra.", "name": "Leonardo E.", "ranking": 4.8 },
        { "image": "", "quote": "El seguimiento del pedido fue excelente, sabía exactamente cuándo llegaba.", "name": "Isabela N.", "ranking": 5 }
      ],
      [
        { "image": "", "quote": "La mejor tienda online de tecnología. Compré un iPhone y llegó antes de lo esperado.", "name": "Lucas G.", "ranking": 5 },
        { "image": "", "quote": "Me encantó la experiencia de compra. Todo súper fácil y seguro.", "name": "María J.", "ranking": 4.9 },
        { "image": "", "quote": "Gran servicio. Compré un iPad y llegó perfectamente embalado.", "name": "Andrés R.", "ranking": 5 },
        { "image": "", "quote": "Buena relación calidad-precio. Productos originales y con garantía.", "name": "Fernanda S.", "ranking": 4.8 },
        { "image": "", "quote": "El mejor precio para mi Apple Watch. Volveré a comprar aquí.", "name": "Martín L.", "ranking": 5 },
        { "image": "", "quote": "Los AirPods llegaron en perfecto estado y funcionan de maravilla.", "name": "Sofía P.", "ranking": 4.9 },
        { "image": "", "quote": "Servicio al cliente excelente. Me ayudaron a elegir el mejor producto.", "name": "Javier D.", "ranking": 5 },
        { "image": "", "quote": "Tienen stock de los últimos modelos y los envíos son rápidos.", "name": "Valeria C.", "ranking": 4.8 },
        { "image": "", "quote": "Muy buena experiencia de compra, todo claro y sin sorpresas.", "name": "Carlos T.", "ranking": 5 },
        { "image": "", "quote": "Me ofrecieron facilidades de pago y cuotas sin interés. ¡Excelente!", "name": "Daniela M.", "ranking": 5 }
      ]
]
  
export default function Clients() {
    const AutoCarrousel = ({ list }: { list: clientsType[] }) => {
        if (!list || list.length < 1) return
        return <ul>
            {list.map(el => {
                return <div className="quote-item" key={Math.random()}>
                    <img src={el.image} />
                    <div className="quote-content">
                        <p>"{el.quote}"</p>
                        <h5>{el.name}</h5>
                    </div>
                </div>
            })}
        </ul>
    }

    return <section className="block">
        <AutoCarrousel list={clients[0]}/>
        <AutoCarrousel list={clients[1]}/>
    </section>
}