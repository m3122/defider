import React from 'react'
import Carousel from '../components/carousel'
import { Link } from 'react-router-dom';
import './home.css';

export const HomePage = () => {
  return (
    <>
      <Carousel/>
      <div className='parent'>
        <div className='kin'>
          <Link to="/gimnasio">
            <div className='image'>
              <img
                src="https://siga.usm.cl/gim/imagen/gim_portada1.jpg"
                alt="Background"
              />
              <div className='text-inside'>
                Pide hora al gimnasio
              </div>
            </div>
          </Link>
        </div>
        <div className='kin'>
          <Link to="/talleres">
            <div className='image'>
              <img
                src="https://usm.cl/wp-content/uploads/2022/03/Expo-DEFIDER-2-300x241.jpg"
                alt="Background"
              />
              <div className='text-inside'>
                Revisa nuestros talleres
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default HomePage