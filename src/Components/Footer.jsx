import React from 'react'
import Facebook from "../Components/Icons/Facebook"
import Insta from "../Components/Icons/Instagram"
import Twitter from "../Components/Icons/Twitter"
import Youtube from "../Components/Icons/Youtube"
export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer-content ">
        <div className='logo'>
            <a href="#">Taste now</a>
        </div>
          <div className="footer-content-social mobile-off">
        <Facebook/>
       
      <Insta/>
          <Twitter/>
  <Youtube/>
          </div>
        </div>
        <div className="footer-content">
         
          <ul>
            <li><a href="#">Seslendirme ve Alt Jazz</a></li>
            <li><a href="#">Media Market</a></li>
            <li><a href="#">Gillie</a></li>
            <li><a href="#">Size Last</a></li>
            
          </ul>
        </div>
        <div className="footer-content">
         
          <ul>
            <li><a href="#">Self Betimes</a></li>
            <li><a href="#">Yatırımcı İlişkileri</a></li>
            <li><a href="#">Basal Himmler</a></li>
          </ul>
        </div>
        <div className="footer-content">
         
         <ul>
           <li><a href="#">Yard Market</a></li>
           <li><a href="#">Is İmkanları</a></li>
           <li><a href="#">Car Tercihleri</a></li>
         </ul>
       </div>
       <div className="footer-content">
         
         <ul>
           <li><a href="#">Hedge Karla</a></li>
           <li><a href="#">Mullein Koşulları</a></li>
           <li><a href="#">Autumnal Bulgier</a></li>
         </ul>
       </div>
       <div className="footer-content-social mobile-on">
        <Facebook/>
       
      <Insta/>
          <Twitter/>
  <Youtube/>
          </div>
      </footer>
  )
}
