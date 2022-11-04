import React from 'react'

export const News = ({ data }) => {

    const { title, subtitle, text, image } = data;

  return (
    <div className='News__container'>
        <div className="news__pciture">
            <img src={ image } alt="" />
        </div>
        <div className="info">
            <h1>{ title }</h1>
            <h3>{ subtitle }</h3>
            <p>{ text }</p>
        </div>
    </div>
  )
}
