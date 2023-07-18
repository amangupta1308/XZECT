import React from 'react';

const Card = (props) => {
    return (<>
        <div className='card'>
            <a>
                <img src={props.imgsrc} alt="Poster" className='card__img' />
                <div className='card__info'>
                    <h3 className='card__category'>{props.title}</h3>
                    <p className='card__button'>Get Started</p>
                </div>
            </a>
        </div>
    </>)
}
export default Card;