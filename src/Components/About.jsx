import React from 'react'
import Title from './Title'

const About = () => {
  return (
    <section class="section" id="about">
      <Title title='about' subtitle='us'/>

      <div class="section-center about-center">
        <div class="about-img">
          <img
            src='./images/about.jpg'
            class="about-photo"
            alt="a guy on a trek"
          />
        </div>
        <article class="about-info">
          <h3>explore the difference</h3>
          <p>
            We started Wayfinder for one reason: to bring back the joy of driving.
            Too often, the journey is sacrificed for the destination. We're told the best route is the fastest, but we believe the best route is the one you’ll remember.
            
          </p>
          <p>
            Our team is made up of passionate explorers who believe technology should help us discover more, not less. That's why we built an app that prioritizes adventure and scenery over shortcuts. Wayfinder’s smart algorithm and community-sourced data uncover the hidden roads and beautiful drives that other navigation apps ignore.
            We're not just about getting you from A to B; we're about making the space between them unforgettable.
          </p>
          <a href="#" class="btn">read more</a>
        </article>
      </div>
    </section>
  )
}

export default About