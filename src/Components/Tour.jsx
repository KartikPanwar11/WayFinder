import React from 'react'
import Title from './Title'
import { tours } from '../../data'

const Tour = () => {
  return (
    <div>
    <section class="section" id="tours">
    <Title title='featured' subtitle='tours'/>

      <div class="section-center featured-center">

      {tours.map((tour)=>{
        const {id,date,image,title,country,info,duration,amount} = tour
        return(
          <article class="tour-card" key={id}>
          <div class="tour-img-container">
            <img src={image} class="tour-img" alt="" />
            <p class="tour-date">{date}</p>
          </div>
          <div class="tour-info">
            <div class="tour-title">
              <h4>{title}</h4>
            </div>
            <p>{info}</p>
            <div class="tour-footer">
              <p>
                <span><i class="fas fa-map"></i></span>{country}
              </p>
              <p>{duration}</p>
              <p>{amount}</p>
            </div>
          </div>
        </article>
        )
      })}

      </div>
    </section>
    </div>
  )
}

export default Tour