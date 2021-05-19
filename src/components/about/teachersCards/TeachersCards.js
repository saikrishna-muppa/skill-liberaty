import React from 'react'
import '../teachersCards/TeachersCards.css'
import StudentCard from './StudentCard'
const TeachersCards = (props) => {
    return (
        <div className="teacher-card-container">
            <h2>Meet Our Teachers</h2>
            <h4>Vestibulum volutpat non eros ut vulputate. Nunc id risus accumsan Donec mi nulla, auctor nec sem a, ornare auctor mi.</h4>
           <div style={{marginTop:"30px"}}>
            <StudentCard   />
            </div>
        </div>
    )
}

export default TeachersCards