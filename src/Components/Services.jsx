import React from 'react'

const Services = () => {
  return (
    <div>
            <section class="section services" id="services">
      <div class="section-title">
        <h2>our <span>services</span></h2>
      </div>
      <div class="section-center services-center">
        <article class="service">
          <span class="service-icon"><i class="fas fa-wallet fa-fw"></i></span>
          <div class="service-info">
            <h4 class="service-title">saving money</h4>
            <p class="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>

        <article class="service">
          <span class="service-icon"><i class="fas fa-tree fa-fw"></i></span>
          <div class="service-info">
            <h4 class="service-title">endless hiking</h4>
            <p class="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>

        <article class="service">
          <span class="service-icon"><i class="fas fa-socks fa-fw"></i></span>
          <div class="service-info">
            <h4 class="service-title">amazing comfort</h4>
            <p class="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>
      </div>
    </section>

    </div>
  )
}

export default Services