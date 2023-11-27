import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './style.css'
const SocialMedia = () => {
  return (
    <div id='SocialMedia'>
       <a href='https://github.com/shahane806' target='_blank' rel="noreferrer"> <GitHubIcon className='icon' /></a>
       <a href='https://www.instagram.com/shahane806/' target='_blank' rel="noreferrer">  <InstagramIcon className='icon'/></a>
       <a href='https://www.linkedin.com/in/omshahane/' target='_blank' rel="noreferrer"> <LinkedInIcon className='icon'/></a>
    </div>
  )
}

export default SocialMedia
