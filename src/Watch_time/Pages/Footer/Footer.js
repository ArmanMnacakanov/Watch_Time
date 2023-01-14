import './footer.css'

export default function App() {

    
    return (
        <div className='App'>
            <div className='footer'>
                <div>
                    <h3>Our information</h3>
                    <h4>1234 - Peru</h4>
                    <h4>La Libertad 43210</h4>
                    <h4>123-456-789</h4>
                </div>
                <div>
                    <h3>About Us</h3>
                    <a className='href' href='#'>Support Center</a>
                    <a className='href' href='#'>Customer Support</a>
                    <a className='href' href='#'>About Us</a>
                    <a className='href' href='#'>Copy Right</a>
                </div>
                <div>
                    <h3>Product</h3>
                    <a className='href' href='#'>Road bikes</a>
                    <a className='href' href='#'>Mountain bikes</a>
                    <a className='href' href='#'>Electric</a>
                    <a className='href' href='#'>Accesories</a>
                </div>
                <div>
                    <h3>Social</h3>
                    <a href='#' className='href'>Instagram</a>
                    <a href='#' className='href'>Facebook</a>
                    <a href='#' className='href'>Twitter</a>
                </div>
            </div>
            <div className='final'>
                <p>© Bedimcode. All rigths reserved</p>
            </div>
        </div>
    )
}