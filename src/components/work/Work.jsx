import React from 'react';
import work1 from "../../assets/work1.jpg";
import work11 from "../../assets/work11.png"
import "./Work.css"

const Work = () => {
  return (
    <section className="work section" id="Portfolio">
      <h2 className='section__title'>Portfolio</h2>
      <span className="section__subtitle">Explore some of my latest projects showcasing my expertise in frontend and backend development.</span>

      <div className="work__container container grid">
        <div className="work__card">
          <img src={work1} alt="" className='work__img' />
          <h3 className="work__title">rental car project</h3>
          <p className="work__description">
            Built with Laravel, this project is a comprehensive rental car platform with seamless booking features.
          </p>
          <a href="https://github.com/Yahya-khalili/project-ren-cars" target='_blank' className="work__button">
          View on GitHub <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
        </div>

        <div className="work__card">
          <img src={work11} alt="" className='work__img' />
          <h3 className="work__title">advanced mern</h3>
          <p className="work__description">
            Developed using the MERN stack, this project demonstrates advanced features like authentication and state management.
          </p>
          <a href="https://github.com/Yahya-khalili/mern-auth" target='_blank' className="work__button">
          View on GitHub <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
        </div>
      </div>

      
    </section>
  )
}

export default Work
