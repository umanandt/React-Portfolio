import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../styles/Footer.css';


function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon/>
            <LinkedInIcon/>
            <FacebookIcon/> 
            <TwitterIcon/>
        </div>
        <p> &copy; 2022 reactTech.com</p>
    </div>
  )
}

export default Footer