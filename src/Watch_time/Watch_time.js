import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Pages/Layout/Layout';
import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product'
import Contact from './Pages/Contact/Contact';
import NoPage from './Pages/NoPage/NoPage';

import './Watch_time.css'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='Product' element={<Product />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='*' element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default App