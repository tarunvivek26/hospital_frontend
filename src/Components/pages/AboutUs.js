import React, { Fragment , useState} from 'react'
import "../styles/About.css"
import { Link} from 'react-router-dom';
import { AiFillFacebook, AiFillGithub, AiFillGoogleCircle, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
const Aboutus = () => {
    const [ toggleTab, setToggleTab] = useState(1)
    const toggleState = (index) =>{
        setToggleTab(index)
    }
  return (
    <Fragment>
        {/* <h3 className='contactus'>Having an Issue?<a href='#'>Contact Us</a></h3> */}
        <section className='about'>
        <h3 className='switch'><Link to={'/fbform'}>Feedback</Link></h3>
            <div className='row'>
            
                <div className='column'>
                    <div className='about-img'></div>
                </div>

                <div className='column'>

                    <div className='tabs'>

                        <div className={toggleTab === 1 ? 'single-tab active-tab':'single-tab'}
                        onClick = {() => toggleState(1)}
                        >
                            <h2>About Us</h2>
                        </div>

                        <div className={toggleTab === 2 ? 'single-tab active-tab':'single-tab'}
                        onClick = {() => toggleState(2)}
                        >
                            <h2>Why Choose Us?</h2>
                        </div>

                        <div className={toggleTab === 3 ? 'single-tab active-tab':'single-tab'}
                        onClick = {() => toggleState(3)}
                        >
                            <h2>Join Us Today</h2>
                        </div>

                        <div className={toggleTab === 4 ? 'single-tab active-tab':'single-tab'}
                        onClick = {() => toggleState(4)}
                        >
                            <h2>Reach Us</h2>
                        </div>

                    </div>

                    <div className='tab-content'>
                        {/* About Content */}

                        <div className={toggleTab === 1 ?'content active-content':'content'}>
                            <h2>Welcome to Health Care!</h2>
                            <p> 

At <span><strong className='bold'>Health Care</strong></span>, we believe that everyone deserves access to the best healthcare possible. Our mission is to provide a seamless and efficient platform for patients to connect with healthcare providers, access their medical reports, and manage their bills. We understand that navigating the world of healthcare can be challenging, and we're here to simplify the process for you.<br></br>

<h2>Our Vision</h2>

Our vision is to revolutionize the way patients interact with healthcare services. We want to empower you to take control of your health by offering a comprehensive healthcare management solution. With our platform, you can effortlessly register, schedule appointments, and communicate with your trusted healthcare professionals. We aim to make healthcare a more transparent, accessible, and patient-centric experience.
</p>
                        </div>

                        {/* {why to choose} */}
                        <div className={toggleTab === 2 ?'content active-content':'content'}>
                            <div className='exp-column'>
                                <h3>Easy Registration</h3>
                                
                                <p>We've made registering with <span><strong className='bold'>Health Care</strong></span> a breeze. With just a few clicks, you can create an account and start managing your healthcare journey.</p>
                            </div>

                            <div className='exp-column'>
                                <h3>Connect with Trusted Doctors</h3>
                                <p>Our platform connects you with a network of reputable healthcare providers. You can choose from a range of specialists and primary care physicians based on your needs.</p>
                            </div>

                            {/* <div className='exp-column'>
                                <h3>Secure Access to Your Reports</h3>
                                <p>Gone are the days of waiting anxiously for your medical reports. With our platform, you can access your test results and medical records online, whenever and wherever you need them.</p>
                            </div> */}

                            <div className='exp-column'>
                                <h3>Convenient Bill Management</h3>
                                <p>Keep your healthcare expenses organized with our user-friendly billing system. View, download, and pay your bills securely, all in one place.</p>
                            </div>

                            <div className='exp-column'>
                                <h3>Appointment Scheduling</h3>
                                <p>Booking appointments with your healthcare provider has never been easier. You can schedule appointments at your convenience, reducing the need for long waiting times.</p>
                            </div>

                            {/* <div className='exp-column'>
                                <h3>Patient-Centric Care</h3>
                                <p>We're committed to putting you, the patient, at the center of your healthcare journey. Your comfort and satisfaction are our top priorities</p>
                            </div> */}

                        </div>

                    {/* Join us */}
                    <div className={toggleTab === 3 ?'content active-content':'content'}>
                            <h2>Your Health, Your Choice</h2>
                            <p> 

                            At <strong className='bold'>Health Care</strong>, we understand that your health is a deeply personal matter. That's why we provide the tools and resources you need to make informed decisions and take control of your healthcare. Whether you're managing a chronic condition, seeking a second opinion, or simply staying on top of routine check-ups, we're here to support you every step of the way.<br></br><br></br>
                            
                            We invite you to become a part of our healthcare management community. Experience the convenience, transparency, and patient-centric care that <strong className='bold'>Health Care</strong> offers. Your well-being is our primary concern, and we're dedicated to making your healthcare journey as smooth as possible.<br></br><br></br>

                            Thank you for choosing <strong className='bold'>Health Care</strong> as your trusted healthcare partner. We look forward to serving you and helping you achieve your best state of health.
                            If you have any questions, feedback, or suggestions, please don't hesitate to reach out to us. We're here to listen and continuously improve our platform for your benefit.<br></br>

                            Join us on the path to better healthcare management. Your health, your choice!<br></br>

                            </p>



                        </div>

                        <div className={toggleTab === 4 ?'content active-content':'content'}>
                            <h2>Support Us</h2>
                           
                            {/* Social Apps */}

                            <div className='text-black flex flex-col justify-center h-screen fixed left-0'>
                                <ul>
                                    <li className='flex w-[160px]  justify-between items-center'>
                                        <a className=' flex h-[40px] text-lg justify-between items-center w-full bg-blue-600 ml-[-120px] hover:ml-[-10px] duration-500' href='#'> <AiFillFacebook size='35px'/> Facebook</a>
                                    </li>

                                    <li className='flex w-[160px]  justify-between items-center'>
                                        <a className=' flex h-[40px] text-lg justify-between items-center w-full bg-blue-600 ml-[-120px] hover:ml-[-10px] duration-500' href='#'> <AiFillLinkedin size='35px'/> Linkedin</a>
                                    </li>

                                    <li className='flex w-[160px]  justify-between items-center'>
                                        <a className=' flex h-[40px] text-lg justify-between items-center w-full bg-gray-600 ml-[-120px] hover:ml-[-10px] duration-500' href='#'> <AiFillGithub size='35px'/> Github</a>
                                    </li>

                                    <li className='flex w-[160px]  justify-between items-center'>
                                        <a className=' flex h-[40px] text-lg justify-between items-center w-full bg-blue-600 ml-[-120px] hover:ml-[-10px] duration-500' href='#'><AiFillTwitterCircle size='35px'/> Twitter </a>
                                    </li>

                                    <li className='flex w-[160px]  justify-between items-center'>
                                        <a className=' flex h-[40px] text-lg justify-between items-center w-full bg-pink-600 ml-[-120px] hover:ml-[-10px] duration-500' href='#'><AiFillInstagram size='35px'/> Instagram </a>
                                    </li>
                                </ul>
                            </div>

                        </div>    
                    </div>


                </div>

            </div>

        </section>

    </Fragment>
  )
}

export default Aboutus