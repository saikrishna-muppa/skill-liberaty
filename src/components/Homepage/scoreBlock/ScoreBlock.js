import React from "react";
import '../scoreBlock/ScoreBlock.css';
import {GoSmiley} from 'react-icons/go';
import {FaGraduationCap} from 'react-icons/fa';
import {FaHistory} from 'react-icons/fa';
import {FaUsers} from 'react-icons/fa'
import CountUp from 'react-countup';
const ScoreBlock = () => {
  return (
    <div  className="score-container">
    {/* <img src="https://image.shutterstock.com/image-photo/portrait-happy-young-business-woman-260nw-117554134.jpg"/> */}
      <div className="container">
      <div className="score-header">
          <div>
          <div className="icons"> <GoSmiley/></div>
          <CountUp start={0} end={196} className="score-digits" />
          <div className="score-text">Complete Courses</div>
          </div>
          <div>
          <div className="icons"> <FaGraduationCap/></div>
          <CountUp start={0} end={96} className="score-digits" />
          <div className="score-text">Certified Teachers</div>
          </div>
          <div>
          <div className="icons"> <FaHistory/></div>
          <CountUp start={0} end={25} className="score-digits" />
          <div className="score-text">Years Of Experience</div>
          </div>
          <div>
          <div className="icons"> <FaUsers/></div>
          <CountUp start={0} end={890} className="score-digits" />
          <div className="score-text">Students Enrolled</div>
          </div>

</div>
</div>
  
  </div>
  );
};

export default ScoreBlock;
