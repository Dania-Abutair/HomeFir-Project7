import React from 'react'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaSnapchat } from 'react-icons/fa'
// import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <Jumbotron style={{ backgroundColor: '#0a62d0' }}>
      <Container style={{ color: '#DDDDDA' }}>
        <div class='container p-4'>
          <div class='row'>
            <div class='col-lg-2 col-md-12 mb-4 mb-md-0'>
              <img src='/homefit1.png' alt='homefit logo'></img>
            </div>
            <div class='col-lg-7 col-md-6 mb-4 mb-md-0'>
              <h5 class='text-uppercase'>Home Fit</h5>

              <p>
                an E-commerce website For sport tools especially which are
                suitable for use at Home . Our vision to help people change
                their lifestyle to be more fitness and healthy and always keep
                practicing sport until the hard conditions.
              </p>
            </div>
            <div class='col-lg-3 col-md-6 mb-4 mb-md-0'>
              <h5 class='text-uppercase'>Links</h5>
              <ul class='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='alink'>
                    <FaFacebook /> Facebook
                  </a>
                </li>
                <li>
                  <a href='#!' className='alink'>
                    <FaInstagram /> Instegram
                  </a>
                </li>
                <li>
                  <a href='#!' className='alink'>
                    <FaYoutube /> Youtube
                  </a>
                </li>
                <li>
                  <a href='#!' className='alink'>
                    <FaSnapchat /> Snapchat
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class='text-center p-3'>
          © 2020 Copyright:
          <a className='alink' href='https://mdbootstrap.com/'>
            HomeFit.com
          </a>
        </div>
      </Container>
      {/* <div className="Footer-end">
    <hr style={{marginTop:'20px', backgroundColor:'#DDDDDA'}}></hr>
    <center><div className="footer-center" >
    <p id="footer-p" style={{color:'#DDDDDA'}}>MaHLeE © All rights reserved</p>  
    </div></center>  
    </div> */}
    </Jumbotron>
  )
}

export default Footer
