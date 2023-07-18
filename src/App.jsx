import React from 'react';
import Cards from './Cards';
import Icons from './Icons';
import Navbar from './Navbar';
import Footer from './Footer';
import Line from './Line';
import Innovate from './Innovate';
import Main from './Main';

const App = () => {
    return (<>
        <Navbar/><br/><br/><br/><Line/>
        <Main/>
        <Line/>
        <Cards/>
        <Icons/>
        <Innovate/>
        <Line/>
        <Footer/>
    </>)
}
export default App;