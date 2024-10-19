import React from 'react';
import './styles/eventcard.css';


const EventCard = ({ title, date, description,img ,members = 3,eligibility= 'X-XII',mode='Hybrid',info,secondaryinfo}) => {
    

    return (
        <div className="event-card">
            <img src={img} alt=''>
            </img>
            <div className="event-card-content">
                <h1>{title}</h1>
            </div>
            <div className='hover-card-content'>
                <h1 id='event-info-title'>Event Info</h1>
                <div className='description'>
                    <p>Members per team: {members}</p>
                    <p>Eligiblity: {eligibility}</p>
                    <p>Mode: {mode}</p>
                    <p id="Info">{info}</p>
                    <p id='SecondaryInfo'>{secondaryinfo}</p>
                </div>
                <button className='register-btn'>
                    Register 
                </button>

            </div>
        </div>
    );
};

export default EventCard;