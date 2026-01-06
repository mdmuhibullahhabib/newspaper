import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Main = () => {
    return (
        <div className='bg-[#f9f3f8]'>
            <header>
                <Navbar></Navbar>
            </header>
            <div className="mt-24">
                <Outlet></Outlet>
            </div>

             <footer>
                 <Footer></Footer>
             </footer>
        </div>
    )
}

export default Main;