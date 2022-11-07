import './App.css';
import ballena from './assets/ballena.png';
import rallas from './assets/rallas.png';
import perfil from './assets/img-perfil-card.png';
import Glider from 'react-glider';
import 'glider-js/glider.min.css';
import Slider from './assets/components/Slider';
import { useState } from 'react';
import Navbar from './assets/components/Navbar';

function App() {
  const [hamburger, setHamburger] = useState(false)

  const silderOptions = [
    { id: "1", name: "Señora 1", src: perfil, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, temporibus cupiditate vel dolor voluptate eveniet molestias porro error dolorem, odio explicabo voluptas consectetur natus ipsam exercitationem minus dolore veniam earum." },
    { id: "2", name: "Señora 2", src: perfil, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, temporibus cupiditate vel dolor voluptate eveniet molestias porro error dolorem, odio explicabo voluptas consectetur natus ipsam exercitationem minus dolore veniam earum." },
    { id: "3", name: "Señora 3", src: perfil, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, temporibus cupiditate vel dolor voluptate eveniet molestias porro error dolorem, odio explicabo voluptas consectetur natus ipsam exercitationem minus dolore veniam earum." },
    { id: "4", name: "Señora 4", src: perfil, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, temporibus cupiditate vel dolor voluptate eveniet molestias porro error dolorem, odio explicabo voluptas consectetur natus ipsam exercitationem minus dolore veniam earum." },
    { id: "5", name: "Señora 5", src: perfil, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, temporibus cupiditate vel dolor voluptate eveniet molestias porro error dolorem, odio explicabo voluptas consectetur natus ipsam exercitationem minus dolore veniam earum." },
    { id: "6", name: "Señora 6", src: perfil, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, temporibus cupiditate vel dolor voluptate eveniet molestias porro error dolorem, odio explicabo voluptas consectetur natus ipsam exercitationem minus dolore veniam earum." },
  ]

  const navbarItems = [
    { id: 1, name: "Galeria", dropdownItems: [{ id: 1, nameDrop: "Galeria 1" }, { id: 2, nameDrop: "Galeria 2" }] },
    { id: 2, name: "Servicio", dropdownItems: [{ id: 1, nameDrop: "Servicio 1" }, { id: 2, nameDrop: "Servicio 2" }] },
    { id: 3, name: "Sobre Nosotros", dropdownItems: [{ id: 1, nameDrop: "Nosotros 1" }, { id: 2, nameDrop: "Nosotros 2" }, { id: 2, nameDrop: "Nosotros 3" }] },
    { id: 4, name: "Contacto", dropdownItems: [{ id: 1, nameDrop: "Contacto 1" }] }]

  return (
    <div className="App">


      <section className="first-section">
        <header className="header">
          <div className="logo">wknd</div>
          <Navbar items={navbarItems} menu={hamburger}/>
          <div className="sesion">
            <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.6421 0C7.36209 0 0.64209 6.72 0.64209 15C0.64209 23.28 7.36209 30 15.6421 30C23.9221 30 30.6421 23.28 30.6421 15C30.6421 6.72 23.9221 0 15.6421 0ZM15.6421 4.5C18.1321 4.5 20.1421 6.51 20.1421 9C20.1421 11.49 18.1321 13.5 15.6421 13.5C13.1521 13.5 11.1421 11.49 11.1421 9C11.1421 6.51 13.1521 4.5 15.6421 4.5ZM15.6421 25.8C11.8921 25.8 8.57709 23.88 6.64209 20.97C6.68709 17.985 12.6421 16.35 15.6421 16.35C18.6271 16.35 24.5971 17.985 24.6421 20.97C22.7071 23.88 19.3921 25.8 15.6421 25.8Z" fill="white" />
            </svg>
            <span>Ingresar</span>
          </div>
          <svg className='hamburger' viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>setHamburger(!hamburger)}>
            <path d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" fill="#8F8F8F" />
          </svg>

        </header>

        <p className="text-1">Las mejores <br /> vacaciones <br /> de tu vida</p>

      </section>

      <section className="second-section">
        <div className="container-lorem-1">
          <h1 className="first-lorem">Lorem ippsum</h1>

          <h4 className="first-lorem-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolore reprehenderit minus culpa quas animi earum laborum dolorem.</h4>

        </div>

        <div className="container-lorem-2">
          <h1 className="second-lorem">Lorem Ipsum</h1>
          <h4 className="second-lorem-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, expedita totam?.</h4>
          <h4 className="second-lorem-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolores, cum consectetur eligendi reiciendis ad facilis corporis </h4>
        </div>



        <div className="elipse"></div>

        <div className="container-vacations">
          <h1>Your vacation is here</h1>
          <img src={ballena} alt="" />

          <h2>Ready <br /> to <br />sail</h2>
        </div>

        <div className="container-star">
          <div className="options-star">
            <div className='relleno-star'>
              <div className='star'></div>
            </div>
            <div className='relleno-star'>
              <div className='star'></div>
            </div>
            <div className='relleno-star'>
              <div className='star'></div>
            </div>
            <div className='relleno-star'>
              <div className='star'></div>
            </div>
            <div className='relleno-star'>
              <div className='star'></div>
            </div>
          </div>


          <h1>Tus palabras, no nuestra</h1>
          <p>After 15 years running The Yacht Week, people have a lot to say about us</p>
        </div>

        <div className='container-slider'>
          <Slider options={silderOptions} initialChecked={0} />
        </div>


      </section>



      <svg viewBox="0 0 461 2374" fill="none" xmlns="http://www.w3.org/2000/svg" className="line-yellow" >
        <path d="M371.078 3C517.62 187.966 169.69 353.879 85.0776 684.5C-25.6491 1117.16 325.771 1242.84 436.5 1094.5C489.5 1023.5 436.5 917.5 319.5 917.5C170.5 917.5 3 1221.04 3 1511.5C3 1923.5 319.5 1982.5 319.5 2371" stroke="#D2E603" stroke-width="6" stroke-linecap="round" />
      </svg>



    </div>
  )
}

export default App
