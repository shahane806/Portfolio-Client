import React from 'react';
import './style.css';
import Profile from '../Profile/Profile';
import ProfileDetails from '../ProfileDetails/ProfileDetails';
import TechUsed from '../TechUsed/TechUsed';
import DownloadResume from '../DownloadResume/DownloadResume';
import SocialMedia from '../SocialMedia/SocialMedia';
const SideNav = () => {
  return (
    <div id='Side_Nav'>
      <Profile/>
      <ProfileDetails/>
      <TechUsed/>
      <DownloadResume/>
      <SocialMedia/>
    </div>
  )
}

export default SideNav
