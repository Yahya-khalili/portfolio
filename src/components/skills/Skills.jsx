import React from 'react'
import "./skills.css"
import Frontend from './Frontend';
import Backkend from './Backkend';
import Database from './Database';

const Skills = () => {
  return (
    
    <section className="skills section" id="skills">
        <h2 className="section__title">My Skills </h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
            <Frontend></Frontend>
            <Backkend/>
            <Database/>
        </div>
    </section>
  )
}

export default Skills
