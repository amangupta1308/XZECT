import React from 'react';

const Footer = () => {
    return (<>
        <div className="footer">
            <div style={{width: "35%"}}>
                <h2 style={{marginBottom: "1.6vw"}}>Xzect Labs Pvt. Ltd.</h2>
                <p style={{textAlign: "justify"}}>Xzect provides a diverse array of services that enable both businesses and individuals to bring their vision to life . Our specialties include software development, website design and SEO, cloud services, robotics and automation, 3D printing and prototyping, data science and analytics, AI and machine learning, IOT, AR and VR, blockchain, and other tech-related services. Our team of experienced professionals is available to assist with the design and development of new products, exploration of robotics and automation possibilities, or any other requirements.</p>
                <p style={{margin: "1.6vw 0"}}>Registered Address: 203, 2-A/3, Asaf Ali Road, Delhi - 110002</p>
                <p style={{margin: "0 0 1.6vw 0"}}>CIN: U72200DL2022PTC408714</p>
                <p style={{margin: "0 0 1.6vw 0"}}>GST: 07AAACX4373J1Z2</p>
                <div className='footer-icons'>
                    <a href=""><img src="https://img.icons8.com/?size=512&id=118497&format=png" width="40px"/></a>
                    <a href="" className="footer-icon-some"><img src="https://img.icons8.com/?size=1x&id=32323&format=png" width="40px"/></a>
                    <a href=""><img src="https://img.icons8.com/?size=1x&id=114445&format=png" width="40px"/></a>
                    <a href="" className="footer-icon-some"><img src="https://img.icons8.com/?size=1x&id=13963&format=png" width="40px"/></a>
                    <a href=""><img src="https://img.icons8.com/?size=1x&id=63676&format=png" width="40px"/></a>
                    <a href="" className="footer-icon-some"><img src="https://img.icons8.com/?size=1x&id=19318&format=png" width="40px"/></a>
                </div>
            </div>
            <div>
                <h2 style={{color: "white"}}>Services</h2>
                <ul className='list-footer'>
                    <li><a>Software & App Development</a></li>
                    <li><a>Website Development & SEO</a></li>
                    <li><a>Cloud Services</a></li>
                    <li><a>Robotics & Automation</a></li>
                    <li><a>3D Printing & prototyping</a></li>
                    <li><a>Data Science & Analytics</a></li>
                    <li><a>AI & Machine Learning</a></li>
                    <li><a>IOT, AR & VR</a></li>
                    <li><a>Blockchain</a></li>
                    <li><a>Tech Consultancy</a></li>
                    <li><a>Research & Development</a></li>
                    <li><a>View all Services</a></li>
                </ul>
            </div>
            <div>
                <h2 style={{color: "white"}}>Industries</h2>
                <ul className='list-footer'>
                    <li><a>eCommerce</a></li>
                    <li><a>Hyperlocal</a></li>
                    <li><a>Healthcare</a></li>
                    <li><a>Finance</a></li>
                    <li><a>Education</a></li>
                    <li><a>Gaming</a></li>
                    <li><a>Social Networking</a></li>
                    <li><a>Agriculture</a></li>
                    <li><a>Travel & Aviation</a></li>
                    <li><a>Logistics</a></li>
                    <li><a>Restaurant</a></li>
                    <li><a>Real Estate</a></li>
                    <li><a>View all Industries</a></li>
                </ul>
            </div>
            <div>
                <h2 style={{color: "white"}}>Resources</h2>
                <ul className='list-footer'>
                    <li><a>About</a></li>
                    <li><a>Tech Stack</a></li>
                    <li><a>Contact Us</a></li>
                    <li><a>Careers</a></li>
                    <li><a>Webinars</a></li>
                    <li><a>Terms & Conditions</a></li>
                    <li><a>Privacy Policy</a></li>
                    <li><a>Legal Information</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Youtube (@xzect_labs)</a></li>
                    <li><a>Github (@xzect)</a></li>
                </ul>
            </div>
        </div>
        <div className='copywright'><p>© 2018 - 2023. Xzect Labs Pvt. Ltd. All rights reserved.</p></div>
    </>)
}
export default Footer;