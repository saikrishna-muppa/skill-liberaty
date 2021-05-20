import React from "react";
import { Card, Avatar } from "antd";
import "../homepage/About.css";
import ScoreBlock from "../../Homepage/scoreBlock/ScoreBlock";
import CourseCards from "../../course/cards/CourseCards";

import { Pagination } from "antd";
import ContactUs from "../contactUs/ContactUs";
import TeachersCards from "../teachersCards/TeachersCards";
import EducationTheme from "../educationTheme/EducationTheme";

const { Meta } = Card;
const About = () => {
  return (
    <div>
      <EducationTheme/>
      <div className="about-score-block">
        <ScoreBlock />
      </div>
      <h2 className="about-cards-text">Various courses to choose from</h2>
      <CourseCards />
      <div className="contactus">
        
        <ContactUs />
      </div>

      <div className="teacherscards">
        <TeachersCards />
      </div>

      <div className="about-join">
        <h3>Want to Join?</h3>
        <p>Lorem ipsum dolor sit amet elit. Nisi facere reprehenderit!</p>
        <div class="link-list-menu">
          <a href="about.html" class="btn-join-about-primary">
            Become Teacher
          </a>
          <a href="about.html" class="btn-join-about">
           Signup
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
