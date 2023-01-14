import './product.css';
import Footer from '../Footer/Footer'
import product1 from '../../assets/products/product1.png';
import product2 from '../../assets/products/product2.png';
import product3 from '../../assets/products/product3.png';
import product4 from '../../assets/products/product4.png';
import product5 from '../../assets/products/product5.png';
import product6 from '../../assets/products/product6.png';
import product7 from '../../assets/products/new1.png';
import product8 from '../../assets/products/new2.png';
import product9 from '../../assets/products/new3.png';

function Product() {
    const products = [
        { id: 1, model: "SPIRIT ROSE", src: product1, price: "$1500" },
        { id: 2, model: "KHAKI PILOT", src: product2, price: "$1350" },
        { id: 3, model: "JUBILEE BLACK", src: product3, price: "$870" },
        { id: 4, model: "FOSIL ME3", src: product4, price: "$650" },
        { id: 5, model: "DUCHEN", src: product5, price: "$950" },
        { id: 6, model: "JAZZMASTER", src: product6, price: "$1150" },
        { id: 7, model: "DREYFUSS GOLD", src: product7, price: "$750" },
        { id: 8, model: "PORTUGUESE FORSE", src: product8, price: "$1590" },
        { id: 9, model: "LONGINES FORSE", src: product9, price: "$980" },
    ];
    return (
        <div className='App'>
            <h2 className='name'>PRODUCTS</h2>
            <div className='products'>
                {products.map((e) => {
                    return (
                        <div key={e.id} className='product'>
                            <h2>{e.model}</h2>
                            <img id='productimg' src={e.src}></img>
                            <span>{e.price}</span>
                        </div>
                    )
                })}
            </div>
            <Footer/>
        </div>
    )
};

export default Product;