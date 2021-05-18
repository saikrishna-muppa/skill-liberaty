import React from "react";
import { Card, Avatar } from "antd";
import "../about/About.css";
import ScoreBlock from "../scoreBlock/ScoreBlock";
import CourseCards from "../course/cards/CourseCards";
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
        <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
        </div>
        </div>
        <ScoreBlock/>
        <h2 className="about-cards-text">Various courses to choose from</h2>
        <CourseCards/>
    </div>
  );
};

export default About;
