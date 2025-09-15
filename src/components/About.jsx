import React from "react";
import "../About.css"; 

const About = () => {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <p>
        Hi! I’m Sankalp, a passionate frontend developer and competitive
        programmer. I enjoy building interactive web apps and solving
        challenging problems on coding platforms.
      </p>

      <div className="skills">
        <h3>Skills</h3>
        <ul>
          <li>React.js</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML5 & CSS3</li>
          <li>Python</li>
          <li>Data Structures & Algorithms</li>
          <li>Git & GitHub</li>
        </ul>
      </div>

      <div className="coding-stats">
        <h3>Competitive Coding</h3>
        <div className="platforms">
          <div className="platform-card">
            <h4>LeetCode</h4>
            <p>Rating: 1800</p>
            <p>Questions Solved: 250+</p>
          </div>
          <div className="platform-card">
            <h4>Codeforces</h4>
            <p>Rating: 1600</p>
            <p>Problems Solved: 300+</p>
          </div>
          <div className="platform-card">
            <h4>HackerRank</h4>
            <p>Rank: 5⭐ (Problem Solving)</p>
            <p>Challenges Solved: 200+</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
