import React, {useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {HiOutlineBars3CenterLeft} from 'react-icons/hi2';
import {RxCross1} from 'react-icons/rx';
import Line from './Line';

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    return (<>
        <div className='nav'>
            <div style={{height: "100%", marginLeft: "4.4rem", marginBottom: "2rem"}}><img src='https://www.xzect.com/assets/images/xzect-logo.svg' width="49%" style={{margin: " 20px"}}></img></div>
            <div style={{height: "100%", color: "white", fontWeight: "bolder", fontSize: "17px", margin: "1rem 0 0 0", marginBottom: "2rem",fontFamily: "'Roboto', sans-serif"}}><h1 style={{letterSpacing: "3px"}}>Xzect</h1></div>
            <div style={{height: "100%"}}></div>
            <div className='icon-ham'><HiOutlineBars3CenterLeft style={{margin: "auto 0", height: "100%"}} onClick={()=>{setMenu(~menu)}}/></div>
        </div>
        <div className={(menu)?'show-items':''}>
         <div className='items-list'>
            <div className='item-list'>
                <h2 style={{color: "white"}}>Popular</h2>
                <ul>
                    <li><a href="https://www.xzect.com/under-development">Magento Development</a></li>
                    <li><a href="https://www.xzect.com/under-development">Wordpress Development</a></li>
                    <li><a href="https://www.xzect.com/under-development">Ecommerce</a></li>
                    <li><a href="https://www.xzect.com/under-development">Shopify</a></li>
                    <li><a href="https://www.xzect.com/under-development">NFT</a></li>
                    <li><a href="https://www.xzect.com/under-development">MVP</a></li>
                    <li><a href="https://www.xzect.com/under-development">Drones</a></li>
                    <li><a href="https://www.xzect.com/under-development">View all Popular</a></li>
                </ul>
            </div>
            <div className='item-list'>
                <h2 style={{color: "white"}}>Services</h2>
                <ul>
                    <li><a href="https://www.xzect.com/under-development">Software & App Development</a></li>
                    <li><a href="https://www.xzect.com/under-development">Website Development & SEO</a></li>
                    <li><a href="https://www.xzect.com/under-development">Cloud Services</a></li>
                    <li><a href="https://www.xzect.com/under-development">Robotics & Automation</a></li>
                    <li><a href="https://www.xzect.com/under-development">3D Printing & prototyping</a></li>
                    <li><a href="https://www.xzect.com/under-development">Data Science & Analytics</a></li>
                    <li><a href="https://www.xzect.com/under-development">AI & Machine Learning</a></li>
                    <li><a href="https://www.xzect.com/under-development">IOT, AR & VR</a></li>
                    <li><a href="https://www.xzect.com/under-development">Blockchain</a></li>
                    <li><a href="https://www.xzect.com/under-development">Tech Consultancy</a></li>
                    <li><a href="https://www.xzect.com/under-development">Research & Development</a></li>
                    <li><a href="https://www.xzect.com/under-development">View all Services</a></li>
                </ul>
            </div>
            <div className='item-list'>
                <h2 style={{color: "white"}}>Industries</h2>
                <ul>
                    <li><a href="https://www.xzect.com/under-development">eCommerce</a></li>
                    <li><a href="https://www.xzect.com/under-development">Hyperlocal</a></li>
                    <li><a href="https://www.xzect.com/under-development">Healthcare</a></li>
                    <li><a href="https://www.xzect.com/under-development">Finance</a></li>
                    <li><a href="https://www.xzect.com/under-development">Education</a></li>
                    <li><a href="https://www.xzect.com/under-development">Gaming</a></li>
                    <li><a href="https://www.xzect.com/under-development">Social Networking</a></li>
                    <li><a href="https://www.xzect.com/under-development">Agriculture</a></li>
                    <li><a href="https://www.xzect.com/under-development">Travel & Aviation</a></li>
                    <li><a href="https://www.xzect.com/under-development">Logistics</a></li>
                    <li><a href="https://www.xzect.com/under-development">Restaurant</a></li>
                    <li><a href="https://www.xzect.com/under-development">Real Estate</a></li>
                    <li><a href="https://www.xzect.com/under-development">View all Industries</a></li>
                </ul>
            </div>
            <div className='item-list'>
                <h2 style={{color: "white"}}>Resources</h2>
                <ul>
                    <li><a href="https://www.xzect.com/under-development">About</a></li>
                    <li><a href="https://www.xzect.com/under-development">Tech Stack</a></li>
                    <li><a href="https://www.xzect.com/under-development">Contact Us</a></li>
                    <li><a href="https://www.xzect.com/under-development">Careers</a></li>
                    <li><a href="https://www.xzect.com/under-development">Webinars</a></li>
                    <li><a href="https://www.xzect.com/under-development">Terms & Conditions</a></li>
                    <li><a href="https://www.xzect.com/under-development">Privacy Policy</a></li>
                    <li><a href="https://www.xzect.com/under-development">Legal Information</a></li>
                    <li><a href="https://www.xzect.com/under-development">Blog</a></li>
                    <li><a href="https://www.xzect.com/under-development">Youtube (@xzect_labs)</a></li>
                    <li><a href="https://www.xzect.com/under-development">Github (@xzect)</a></li>
                </ul>
            </div>
         </div>
        </div>
        {/* <Line/> */}
    </>)
}
// console.log(menu);
// export {menu, Navbar};
export default Navbar;