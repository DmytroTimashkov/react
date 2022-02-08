import React from 'react';

class Card2 extends React.Component{
    render(){
        const {text} = this.props
        const {title} = this.props
        const cardTitle = title ? <h4 className='card-title'>{title}</h4> : null
        const cardText = text ? <p className='card-text'>{text}</p> : null
        const card1 = (
            <div className='card'>
                <div className='card-body'>
                    {cardTitle}
                    {cardText}
                </div>
            </div>
        )
        return card1
    }
}

export default Card2