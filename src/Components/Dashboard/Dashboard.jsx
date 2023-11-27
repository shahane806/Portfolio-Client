import React from 'react';
import './style.css';
import NavigationBar from './NavigationBar/NavigationBar';
import Banner from './Banner/Banner';
import Footer from '../Footer/Footer';
import SideNav from "../SideNavigation/SideNav";

const Dashboard = () => {
  return (
    <div id='Dashboard'>
        <NavigationBar/>
     <div className='Dashboard-Information'>
     <SideNav />

        <Banner/>
     </div>
   
    <Footer/>

     <div className='Dashboard-Background'></div>
    </div>
  )
}

export default Dashboard
