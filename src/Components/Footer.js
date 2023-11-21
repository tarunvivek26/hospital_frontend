import './footer.css';
// import 'bootstrap/dist/CSS/bootstrap.min.CSS'
function App() {
  return (
    <>

    <div className="Footer">
      <div className=" Fcont">
       <div className="row">
          <div className="col-md-6 col-lg-5 col-12 ft-1">
            <h3><span>Health</span>Care</h3>
            <p>Our mission is to provide a seamless and efficient platform for patients to connect with healthcare providers, access their medical reports, and manage their bills.</p>
            <div className="footer-icons">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin-in"></i>
            <i class="fa-brands fa-github"></i>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-12 ft-2">
            <h4>Quick Links</h4>
            <ul>
              <li className="nav-item">
                <a classNme="" href="/">Services</a>
              </li>
              <li className="nav-item">
                <a classNme="" href="/">Portfolio</a>
              </li>
              <li className="nav-item">
                <a classNme="" href="/">Contact Us</a>
              </li>
              <li className="nav-item">
                <a classNme="" href="/">About us</a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-4 col-12 ft-3">
            <h4>Contact info</h4>
            <p><i class="fa-solid fa-phone-volume"></i>+91 8642055864</p>
            <p><i class="fa-solid fa-envelope"></i>helthcare@gmail.com</p>
            <p><i class="fa-solid fa-location-dot"></i>Andhra Pradesh , India</p>
          </div>
        </div>
      </div>
      
    </div>
    <div className="Last-footer">
      <p>Thanks for Choosing HealthCare</p>
    </div>
    {/*  */}
    </>
  );
}

export default App;