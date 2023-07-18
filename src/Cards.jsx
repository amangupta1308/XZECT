import React from 'react';
import Card from './Card';
import CardData from './CardData';

const Cards = () => {
    return (<>
        <div style={{backgroundColor: "#1e222e"}}>
            <h1 className='cards-text-1'>Customised Solutions for All Your Business Needs</h1>
            <p className='cards-text-2'>Take Your Business to the Next Level with Our Industry-Leading Services</p>
            <div className='main_cards'>
                {CardData.map((curr, ind)=>{
                    return <Card key={curr.id} imgsrc={curr.imgsrc} title={curr.title} link={curr.link} />
                })}
            </div>
        </div>
    </>)
}
export default Cards;