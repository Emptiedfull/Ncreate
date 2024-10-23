import React from 'react';

import '../components/styles/home.css';
import { useNavigate } from 'react-router-dom';

import map from '../components/images/Map.png';
import bg from '../components/images/bg.png'
import micro from '../components/images/partners/micro.png'
import { useEffect, useState } from 'react';

const importAll = (r) => r.keys().map(r);
const Events = importAll(require.context('../components/images/Comps', false, /\.(png|jpe?g|svg)$/));
const projects = importAll(require.context('../components/images/projects', false, /\.(png|jpe?g|svg)$/));


function Home() {

    const history = useNavigate();

    const calculateTimeLeft = () => {
        const targetDate = new Date('2024-11-03T00:00:00'); // Set your target date here
        const now = new Date();
        const difference = targetDate - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentProjectImageIndex, setCurrentProjectImageIndex] = useState(0);

    useEffect(() => {
        const imageTimer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % Events.length);
        }, 6000); // Change image every 6 seconds

        return () => clearInterval(imageTimer);
    }, []);
    useEffect(() => {
        const projectImageTimer = setInterval(() => {
            setCurrentProjectImageIndex((prevIndex) => (prevIndex + 1) % projects.length);
        }, 6000); // Change project image every 6 seconds

        return () => clearInterval(projectImageTimer);
    }, []);


    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    return (<>


        <div className='HeroBanner'>
            <div className='H-HeroText'>
                <div className='Motto'>
                    <h1>LITHIUM</h1>
                    <h2>Innovate, Play, Create</h2>
                </div>

            </div>
            <div className='Hero-graphic'>
                <img src={map} alt=''></img>
            </div>
        </div>
        <div className='Markthedate'>
            <h2>Meeting you in</h2>
            <div className='countdown'>
                {Object.keys(timeLeft).length > 0 ? (
                    <>
                        <div className='countdown-item'>
                            <span className='countdown-number'>{timeLeft.days}</span>
                            <span className='countdown-label'>Days</span>
                        </div>
                        <div className='countdown-item'>
                            <span className='countdown-number'>{timeLeft.hours}</span>
                            <span className='countdown-label'>Hours</span>
                        </div>
                        <div className='countdown-item'>
                            <span className='countdown-number'>{timeLeft.minutes}</span>
                            <span className='countdown-label'>Minutes</span>
                        </div>
                        <div className='countdown-item'>
                            <span className='countdown-number'>{timeLeft.seconds}</span>
                            <span className='countdown-label'>Seconds</span>
                        </div>
                    </>
                ) : (
                    <span>Event has started!</span>
                )}
            </div>

        </div>
        {/* <div className='filler'>

            <div className='ContFiller Events' onClick={()=> history('./events')}>
                <h3 className='filler-title'>Upcoming Events</h3>
                <div className='image-box'>
                    <img src={Events[currentImageIndex]} alt="Event" />
                </div>
            </div>
            <div className='ContFiller Showcase' onClick={() => history('./showcase')}>
                <h3 className='filler-title'>Project Showcase</h3>
                <div className='image-box'>
                    <img src={projects[currentProjectImageIndex]} alt="Project" />
                </div>
            </div>

        </div> */}
        <div className='About-Us'>
            <div className='About-Text'>
                <h1>
                    About DTC
                </h1>
                <p>
                    Delhi Tech Circuit is a network of over a hundred tech clubs across Delhi NCR, offering school students opportunities to engage in tech-related events, projects, meetups, and competitions. Despite this, many new and emerging tech clubs often miss out on these opportunities due to limited visibility and recognition within the community
                    DTC is not just a club but a launchpad for students who aspire to excel in technology, innovation, and leadership. It helps bridge the gap between academic learning and industry requirements by giving students practical exposure to cutting-edge tech

                </p>
            </div>
            <div className='About-Graphic'>
                <img src={bg} alt='' />

            </div>

        </div>
        <div className='About-Us'>
        <div className='About-Graphic'>
                <img src={bg} alt='' />

            </div>

            <div className='About-Text'>
                <h1>
                    About Lithium
                </h1>
                <p>
                With engaging hands-on activities, captivating tech demos, and exciting competitions, this event is designed to fuel curiosity and foster innovation. This carnival will bring together hundreds of talented students, tech enthusiasts, and innovators eager to explore the latest advancements and challenges in the tech world.
                We would be holding many competitions partnered by various tech clubs of Delhi NCR like hackathons, cubing, hardware, gaming etc. We would also be holding workshops specifically tailored for girls to encourage their participation in STEM.


                </p>
            </div>
          
        </div>

        <div className='partners'>
            <h1>
                Our Partners 
            </h1>
        <div className='partners-logo'>
            <div className='partner-logo'>
                    <img src={micro} alt='Partner Logo' />
                </div>
            <div className='partner-logo'>
                <img src={micro} alt='Partner Logo' />
            </div>
            <div className='partner-logo'>
                <img src={micro} alt='Partner Logo' />
            </div>
            <div className='partner-logo'>
                <img src={micro} alt='Partner Logo' />
            </div>
            <div className='partner-logo'>
                <img src={micro} alt='Partner Logo' />
            </div>
            <div className='partner-logo'>
                <img src={micro} alt='Partner Logo' />
            </div>
            <div className='partner-logo'>
                <img src={micro} alt='Partner Logo' />
            </div>
        </div>
        
        </div>


    </>
    );
}

export default Home;