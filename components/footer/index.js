import Logo from '../../assets/icons/logo';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6><Logo /> Scraia - Fashion Store Online</h6>
            <p>This store was established by <b> Omer Mazor</b>, the owner of O.M.G-internet company, meanwhile, The store will showcase its fashion products for the benefit of online users and later, its customers will have the option to quickly purchase the products through the website.</p>
            <ul className="site-footer__social-networks">
              <li><a href="https://www.facebook.com/omerqwedsazxc/"><i className="icon-facebook"></i></a></li>
              <li><a href="https://www.linkedin.com/in/omer-mazor-908769117/"><i className="icon-linkedin"></i></a></li>
              <li><a href="https://www.instagram.com/omermazor144/"><i className="icon-instagram"></i></a></li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Shopping online</li>
              <li><a href="#">Order Status</a></li>
              <li><a href="#">Shipping and Delivery</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Payment options</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
            <ul>
              <li>Information</li>
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Find a store</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Bacome a member</a></li>
              <li><a href="#">Site feedback</a></li>
            </ul>
            <ul>
              <li>Contact</li>
              <li><a href="#">omermazorgroup@gmail.com</a></li>
              <li><a href="#">Hotline: +972 527712253</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="site-footer__bottom">
        <div className="container">
          <p>BY Omer Mazor - © 2022. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  )
};


export default Footer