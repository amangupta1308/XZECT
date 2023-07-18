import React from 'react';
import Icon from './Icon';
import IconData from './IconData';

const Icons = () => {
    return (<>
        <div className='icon-section'>
            <h2 className='icons-text-1'>Leverage our software & hardware expertise</h2>
            <p className='icons-text-2'>Use our services and tech expertise to create disruptive products & solutions that can revolutionize your business and stay ahead with evolving technological advancements.</p>
            <div className='main_icons'>
                {IconData.map((curr, ind)=>{
                    return <Icon key={curr.id} imgsrc={curr.imgsrc} title={curr.title}/>
                })}
            </div>
            <div style={{display: "flex", justifyContent: "center", width: "100%"}}>
            <button className='button-explore'>
                <a href='https://www.xzect.com/tech-stack' className='button-explore-text'>Explore Our Entire Tech Stack</a>
            </button>
            </div>
        </div>
    </>)
}

export default Icons;