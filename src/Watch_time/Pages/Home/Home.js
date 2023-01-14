
import './home.css';
import Footer from '../Footer/Footer'

import new1 from '../../assets/products/new1.png';
import new2 from '../../assets/products/new2.png';
import new3 from '../../assets/products/new3.png';
import new4 from '../../assets/products/new4.png';

const Home = () => {

    const arrivals = [
        { id: 1, model: "DREYFUSS GOLD", src: new1, price: "$750" },
        { id: 2, model: "PORTUGUESE FORSE", src: new2, price: "$1590" },
        { id: 3, model: "LONGINES FORSE", src: new3, price: "$980" },
        { id: 4, model: "JAZZMASTER", src: new4, price: "$1150" },
    ];

    return (
        <div className="app">

            <div className="home">
                <div className="text">
                    <h2>NEW WATCH COLLECTIONS B720</h2>
                    <p className='latest'>Latest arrival of the new imported watches of the B720 series, with a modern and resistant design.</p>
                    <span>$1245</span>
                    <button className='add'>ADD TO CART</button>
                </div>
                <div className="img"></div>
            </div>

            <div className='storydiv'>
                <div className='storyimg'></div>
                <div className='story'>
                    <h1>OUR STORY</h1>
                    <h2>
                        Inspirational Watch of
                        this year
                    </h2>
                    <p>
                        The latest and modern watches of this year, is available in various presentations in this store, discover them now.
                    </p>
                    <button className='discover'>Discover</button>
                </div>
            </div>

            <div className='newsdiv'>
                <div className='image1'></div>
                <div className='image2'></div>
                <div id='news'>
                    <h1 className='recent'>RECENT NEWS</h1>
                    <p>
                        Nec feugiat in fermentum posuere urna nec tincidunt praesent.
                        Ipsum consequat nisl vel pretium lectus quam. Nulla aliquet enim tortor at auctor urna nunc id.
                    </p>
                </div>
            </div>

            <p className='newarrivals'>NEW ARRIVALS</p>
            <div className='arrivals'>
                {arrivals.map((e) => {
                    return (
                        <div key={e.id} className='arrival'>
                            <h2 className='modelname'>{e.model}</h2>
                            <img id='arrivalimg' src={e.src}></img>
                            <span className='modelprice'>{e.price}</span>
                        </div>
                    )
                })}
            </div>

            <div className='subscribe'>
                <div>
                    <h1 className='textt'>
                        Subscribe Our
                        <br></br>
                        Newsletter
                    </h1>
                    <p className='textt2'>
                        Don't miss out on your discounts. Subscribe to our email newsletter to get the best offers,
                        discounts, coupons, gifts and much more.
                    </p>
                </div>
                <div className='sub2'>
                    <input type='text' placeholder='Enter your email'className='email' ></input>
                    <button className='sub'>Subscribe</button>
                </div>
            </div>

            <Footer />

        </div>

    );

};

export default Home;

