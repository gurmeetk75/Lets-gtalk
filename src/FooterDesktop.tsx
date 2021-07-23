import React from 'react';

class FooterDesktop extends React.Component{
    render(){
        return(
            <div className="three-column-footer-contact-form-container">
  <div className="three-column-footer-contact-form" data-equalizer data-equalize-by-row="true">
    <div className="footer-left" data-equalizer-watch>
      <div className="baseline">
        {/* <div className="contact-details">
          <h6>Contact Us</h6>
          <p><i className="fa fa-phone fa-lg" aria-hidden="true"></i> 01234 567890</p>
          <p><a href="#"><i className="fa fa-envelope-o" aria-hidden="true"></i> Contact us</a></p>
          <p><i className="fa fa-map-marker fa-lg" aria-hidden="true"></i> Street, City, County, Country</p>
        </div> */}
        {/* <div className="newsletter">
          <div className="input-group">
            <h6>Sign up for our newsletter</h6>
            <input className="input-group-field" type="email" placeholder="Email address"/>
          </div>
          <a className="button expanded" href="#">Submit</a>
        </div> */}
      </div>
     </div>
    <div className="footer-center" data-equalizer-watch>
      <div className="baseline">
        <div className="newsletter">
          <h6>Contact Us</h6>
          <div className="input-group">
            <input className="input-group-field" type="text" placeholder="Name"/>
            <input className="input-group-field" type="email" placeholder="Email address"/>
            <textarea placeholder="Message"></textarea>
          </div>
          <a className="button expanded" href="#">Submit</a>
        </div>
      </div>
    </div>
    <div className="footer-right" data-equalizer-watch>
      <div className="baseline">
        {/* <img className="thumbnail" src="https://placehold.it/100"/>
        <h6>Opening times</h6>
        <p>Mon - Fri 9:00am - 5:00pm</p>
        <p>Sat 9:00am - 8:00pm</p>
        <p>Sun 9:00am - 4:00pm</p>
        <div className="social">
          <i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
          <i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i>
          <i className="fa fa-google-plus-square fa-2x" aria-hidden="true"></i>
          <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
        </div> */}
      </div>
    </div>
  </div>
</div>


        )
    }
}

export default FooterDesktop;