import React from 'react';

const Icon = (props) => {
    return (<>
        <a href='https://www.xzect.com/' style={{textDecoration: "none", color: "black", fontFamily: "'Roboto', sans-serif", fontWeight: "500"}}>
            <div className='icon'>
                <img src={props.imgsrc} alt="Poster" className='icon__img' style={{width: "30px"}}/>
                <p className='icon__category'>{props.title}</p>
            </div>
        </a>
    </>)
}
export default Icon;