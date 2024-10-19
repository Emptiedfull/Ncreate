import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles/carousel.css';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


import EventCard from './eventcard';


import intro from './images/workshops/intro.png'
import safety from './images/workshops/safety.jpg'
import ai from './images/workshops/ai.jpg'
import git from './images/workshops/git.jpg'
import compute from './images/workshops/compute.jpg'
import figma from './images/workshops/figma.jpg'

function Carousel() {
  return (
    <div className="container">
    
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
            <div className="overlay"></div>
            <EventCard members={1} mode="offline" secondaryinfo="In this workshop, you'll learn the basics of a popular programming language-Python, understand fundamental coding concepts, and create your first simple programs.No prior experience required" img={intro} title={"Intro to Coding"} info="Are you curious about the world of coding but don't know where to start? Join us for our introductory coding workshop and take your first steps into the exciting realm of programming."></EventCard>
        </SwiperSlide>
        <SwiperSlide>
        <div className="overlay"></div>
          <EventCard members={1} mode="offline" img={safety} title='Safety in the cayberspace' secondaryinfo="You will understand various common threats and practical measures to safeguard against them. In these ever changing landscape of dangerous cyberspace, it is imperative one must remain updated with the latest developments to protect oneself. Join these workshop to learn from leaders of the fiel" info="Are you concerned about online security and want to learn how to protect yourself from cyber threats? Join us for our Cybersecurity Fundamentals workshop and gain the knowledge and skills to stay safe in the digital world."  alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
        <div className="overlay"></div>
          <EventCard members={1} mode="offline" img={ai} title={"Ai and Ai Applications"} info={"Are u a begineer machine learning student or ai enthusiast wanting to take your AI skills to the next level? Join us for our advanced AI workshop and learn how to develop scalable and ready-to-use AI applications."} secondaryinfo={"In this workshop, you'll explore advanced AI techniques and algorithms, learn how to design and build scalable AI architectures, understand the challenges and best practices for deploying AI applications, and develop a practical AI project from start to finish."}/>
        </SwiperSlide>
        <SwiperSlide>
        <div className="overlay"></div>
         <EventCard members={1} mode="offline" img={git} title={"Girls in Tech"} info={"Are you a young woman looking to break into the exciting world of technology? Join us for our Girls in Tech workshop and discover your potential as a tech innovator."} secondaryinfo={"In this workshop, you'll explore various career paths in technology, gain hands-on experience with coding, design, and other tech skills, network with inspiring women in tech, and develop confidence and leadership skills. This workshop is in collabration with our flagship event Luminaries, an all girls hackathon that will be held at day 2 where you would put the skills from your workshop into use."} />
        </SwiperSlide>
        <SwiperSlide>
        <div className="overlay"></div>
          <EventCard members={1} mode="offline" img={compute} title={"Distributed computation"} info="Are you interested in learning how to harness the power of distributed systems? Join us for our Distributed Computing workshop and gain a deep understanding of distributed systems concepts, architectures, and applications." secondaryinfo=" This workshop is designed for individuals who have a strong foundation in programming and are interested in exploring the complexities of distributed systems."/>
        </SwiperSlide>
        <SwiperSlide>
        <div className="overlay"></div>
          <EventCard members={1} mode="offline" img={figma} title={"Mastering Figma: A Comprehensive Design Workshop"} info={"Are you ready to unlock your creative potential with Figma? Join us for our comprehensive Figma workshop and learn how to design stunning user interfaces and convert your designs into high-quality prototypes."} secondaryinfo="In this workshop, you'll discover essential tools and features of Figma, create beautiful and functional user interfaces, master designing for different platforms and devices, understand the process of converting designs into interactive prototypes" />
        </SwiperSlide>
        

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Carousel;