import React from "react";
import { Card, Avatar } from "antd";
import "../homepage/About.css";
import ScoreBlock from "../../scoreBlock/ScoreBlock";
import CourseCards from "../../course/cards/CourseCards";

import { Pagination } from "antd";
import ContactUs from "../contactUs/ContactUs";
import TeachersCards from "../teachersCards/TeachersCards";
const { Meta } = Card;
const About = () => {
  return (
    <div>
      <div className="about-container">
        <div className="about-header">
          <h3>Welcome to the Professional Education Theme!</h3>
          <Card
            className="about-card"
            style={{ width: 300 }}
            cover={
              <img
                className="about-avatar"
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Meta
              title="Group Seminars"
              description="consectetur adipisicing elit, sed do eiusmod tempor"
            />
          </Card>
          <Card
            className="about-card"
            style={{ width: 300 }}
            cover={
              <img
                className="about-avatar"
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Meta
              title="Expert Teachers"
              description="consectetur adipisicing elit, sed do eiusmod tempor"
            />
          </Card>
          <Card
            className="about-card"
            style={{ width: 300 }}
            cover={
              <img
                className="about-avatar"
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Meta
              title="Large Library"
              description="consectetur adipisicing elit, sed do eiusmod tempor"
            />
          </Card>
          <Card
            className="about-card"
            style={{ width: 300 }}
            cover={
              <img
                className="about-avatar"
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Meta
              title="Trending Courses"
              description="consectetur adipisicing elit, sed do eiusmod tempor"
            />
          </Card>
        </div>
        <div>
          <img
            className="about-side-image"
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        </div>
      </div>
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
