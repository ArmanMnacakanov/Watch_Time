
import Footer from '../Footer/Footer'
import './contact.css';

const Contact = () => {
  return (
    <div className='App'>
      <div className='div'>
        <div className='img2' id='img2'></div>
        <div className='inputs'>
          <h1 className='h1'>Contact Us</h1>
          <input type='text' placeholder='Name'></input>
          <input type='text' placeholder='Email'></input>
          <textarea placeholder='Message'></textarea>
          <button className='send'>Send</button>
        </div>
      </div>
      <Footer/>
    </div>


  )
};

export default Contact;