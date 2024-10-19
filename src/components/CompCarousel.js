import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles/carousel.css';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


import EventCard from './eventcard';
import quizzing from './images/Comps/quizzing.jpg'
import hack from './images/Comps/hack.jpg'
import surp from './images/Comps/Surp.jpg'
import git from './images/Comps/git.jpg'
import gaming from './images/Comps/gaming.jpg'
import crypt from './images/Comps/Crypt.jpg'
import space from './images/Comps/spacetech.jpg'
import GD from './images/Comps/GD.jpg'
import cubing from './images/Comps/cubing.jpg'
import hardware from './images/Comps/hardware.jpg' 

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
          rotate: 2,
          stretch: 0,
          depth: 80,
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
            <EventCard img={quizzing} members={2} mode='offline' secondaryinfo="The event will feature a series of rounds covering a variety of topics, so be prepared to answer questions on everything from science and technology to history and pop culture." eligibility='IX-XII' info="Do you have what it takes outsmart your opponents and become the ultimate quiz champion? Join us for the LITHIUM Quizzing Extravaganza, where you'll put your knowledge to the test and compete against other trivia enthusiasts." title={"Quiz Blitz"}></EventCard>
        </SwiperSlide>
        <SwiperSlide>
        <div className="overlay"></div>
        <EventCard img={hack} title={"Build"} members={4} info="Are you ready to put your coding skills to the test and create something truly innovative? Join us for LITHIUM Hackathon, our flagship event where u solve real world problems" secondaryinfo='The event will feature an online prelim round where participants will receive a prompt. The top teams will then advance to the offline final round, where they will present their projects to a panel of judges.'></EventCard>
        </SwiperSlide>
        <SwiperSlide>
        <div className="overlay"></div>
          <EventCard id='glitch'img={surp} members='2' info="Ḫ̴͔͚̄̌̑́́e̴̢̗̬̙͚͝a̵͚̞̠͌͛r̸̝̳͓̓͆̾̕k̸͚̪̞̈͝e̵̥͙̟̗͛̍́͆̽n̴̢̧̥̥͑̈́͆͌,̶͖̏̓̀̇̓ ̸̦͉͐ý̶͕͛͊ĕ̴̫͔̝ ̵̛̬̣̘̟̦͆̔̀̐m̵͍̆̈́ȍ̸̖r̸̠̂̊͘͠t̴̂̍́̎͜ǎ̸̡̙͉̏͊͆l̸̨͚͍͎̏̏s̶̞͌,̷͈̠̼͓̏̑̈́ ̴̢̥̗̻̰̐̿̽͝f̴͖̘̱̜͕́͌̅ó̶̟͆̅̀͝r̷̥͗ ̷̘̒͗͗à̸̢̩̫̯̪ ̴͚̪̈́̈́r̸̮͈̳̈̕į̵͖͂̑̐̓d̵̢͎̐̀̊̊̇ͅd̶͇̭̪͔́l̴̢̲̠̘͌̾͐̀̀ě̶̞͈͎̾̊͆̂ ̷̧͖͖̒ḏ̷͖͉̝̒̉͂o̵̼̒t̶̞͕̗̬̄̿͜ẖ̷͙̙̽̉͂ ̴̤͇̙̋̇͒͋̍u̷̞̖͔̔͋͛ṋ̸̓́͋̉̕f̵̭̜̏ö̷̢̦̹̝͕́͗l̷͎͓͎̦͂d̴̹̝̻̟̪̂̒̇̓͠.̷̢̼̟̎͋̄̂̌ ̴̥̤̖̗̆A̵̤̩͓͈͆̔̒ ̸̱̰̀c̴͍͌̅̅̍̿͜ṙ̷̠̮͕͊ý̶̠̉ͅp̴͉̔t̵͕̟̗̊̏̚͠i̶̝̜͎̱̼̐͂̓c̶̝̠̅̎ ̴̪̈́͛c̸̨͖̻̝̰͗̐̏͘h̵̳̗͖̍̓a̶̫͍͖͒ͅl̵͈̀͗̐̒́l̴͓̜͂̍̆ę̴̞̞̮͖́̉͌̚n̷̳̘̉͌́g̷̹̯̲͑̆̍e̸̢̨͖̿̓͝,̵͈̲̣̮̾ ̷̨̞̦̩͐͋͜ȃ̴̝̦̳͉n̵̟̙̒ç̶̖͖͓̈́́i̴̤͖͎̹̩̓̔̐͝e̸͔̐̂n̶̡̞̞͎͓̒̀̂́͊t̶̖̪̂̋ͅ ̸̺̼͙͖̪̇́a̸̡̼̪̯̓͆͘n̵͎͘d̷̬̿̔͜ ̵̗̯̱̿̈b̸̧͉͇̟͛͂̈́ö̵͇̙͕̳́̎̓̋ļ̴̳̹̜̿ḏ̴̢̲͒.̴͍̊̈ ̵̢̼̫͖͉̇S̷̭̅̾̾̅͛ę̴̖̹̋̑̃̾e̴͚͓͖̕ḱ̵̲̕ ̴͛̈́͜t̸͈̖̝̐͂̋̏̓h̷̥̙͐͆̈́̐̅e̵̢̛̪̘̰͍̍̑́ ̸̲̠̔̌̿h̵̟͔̹͊̋͊̈̕͜ͅï̴̘͕͓̝̐ͅd̵͓̥̦̓d̷̨͎̜̪̙̈̕͘ȇ̶͖̘̣̟̂̂n̴̬̽̔͌͠ ̵̰̟̜͖̭̌́t̸͔̣͚̪̀͐̚r̶͕̾͜u̸̺͝t̸̛͕̋̀͠h̴̰͓͇̤̚͜s̷͖̩̮̙̬̎̔́͆͠,̵̳̈́͂͑ ̶̨̛̱̤̤̆̽͑̂͜t̶̡̗̗̯̫̃ĥ̷̥̬̞̀̾͊͜͝ē̵̛͕̺̠̞̦ ̷̢̪͈̮͗s̷̼̤̅̈́̏ȩ̷͇̖̙͗͛̔̎̐c̵̡͇̳̭̔̍̍̄͝r̸̤͔̬̉̄̕e̵͍̓̈́̈̈́̕t̵̠̽͛̃̒̅s̶͓̳̘̮̈́̀̀ ̷̖͍̪̮̏̂͠u̸̢̬̳̅̈́͘ṋ̴̄̓͒́̆ͅt̶͇̙̺̀̾̓ͅŏ̷̫̗͔͜l̷̺̼̙̄̕͠d̵͈̙͋̒̈́͑̆͜.̷̫͇͇̗͚̊ ̵̢͍̱̣̲̌̓̓́̕T̸̼̤̑̅́̄́h̴̟̭̦̃͂̚͝͝e̴̢̦̭̋̄̐͝ ̷̱̫̝̓̿Ļ̸̡̞̤̦͑I̷̛̩̿͌͗ͅT̸̺̞̦͇̱̐H̷̙͕͓̉͗͋̾͝Ì̵͎̌̕͠U̸̜̞̎̃̈̚͜M̵͇̦̙̋̄ ̴̢̳̏̑E̴̬̗̯̹͒͊̎̚n̷̦̈́i̴͕͈̟͚͂̓͌g̴̘̭͉͋̆̀͐m̷͖̝̟̻̉̅̅å̵̞͓̟̗̤͛̀̂,̴̜̃͊̌̀͆ ̶̰̘̼̌i̶̱͑͗t̷̹̬͌̚͘s̸̭͝ ̶̛̬͗̓̊s̶̹̭͒̒͛̒̊ẽ̷̜̪̖c̷̢͒̌̕͝͠r̷̗̎ê̵̳̌͌ṱ̸̥͕̯͈̉̏s̵̤͉͋̀̆ ̸̠̘͂̽̏u̷̮̙̩̣̼͛̈́͊n̴͖̣̙͔̓̂f̴̘̱̅̈́͗̈o̶̟̅̌͌̍l̷͔̓̿d̷̡̙͚̮̑͝.̵̨̲̺̈͝" title={'Surprise'}></EventCard>
        </SwiperSlide>
        <SwiperSlide>
        <div className="overlay"></div>
          <EventCard img={git} eligibility='VI-XII' info='Join us for a special event celebrating women in technology, in collaboration with the Girls in Tech Workshop.At the LITHIUM Luminaries, participants will have the opportunity to showcase the skills and knowledge they gained during the Girls in Tech workshop. Engage in exciting competitions that test your tech abilities and problem-solving skills, connect with other women in tech, and hear from industry leaders and role models.  ' title={"Luminaries "}></EventCard>
        </SwiperSlide>
        <SwiperSlide>
        <div className="overlay"></div>
          <EventCard img={gaming} title={'Gaming'}></EventCard>
        </SwiperSlide>
        <SwiperSlide>
        <div className="overlay"></div>
        <EventCard img={crypt} eligibility='open' members='infiite' mode='online' info="Embark on a thrilling journey of riddles and clues. The LITHIUM Enigma Hunt is a CTF challenge that invites you to decipher ancient mysteries and solve cryptic puzzles. Traverse the labyrinth of challenges, your wit your only guide. " secondaryinfo="The Enigma Hunt will consist of several rounds, each with its own unique challenges and puzzles. Participants will have a limited amount of time to complete each round, and teams will be awarded points based on their performance." title={'Enigma Hunt'}></EventCard>
        </SwiperSlide>
        <SwiperSlide>
        <div className="overlay"></div>
        <EventCard img={space} members='4' secondaryinfo="The event will feature a series of challenges that test your knowledge and creativity, from designing new spacecraft to developing advanced propulsion systems" info="Are you ready to launch your career in space technology? Join us for the LITHIUM Space Tech Challenge, where you'll have the opportunity to collaborate with and challenge other space enthusiasts" title={'Spacetech'}></EventCard>
        </SwiperSlide>
        <SwiperSlide>
          <EventCard img={GD} members={2} mode='offline' secondaryinfo="The GD Extravaganza will feature multiple rounds over two days, focusing on collaborative problem-solving and idea sharing.The participants will be required to work together to find flaws in existing solutions and improve them." eligibility='IX-XII' info="Join us for a captivating group discussion event where you'll have the opportunity to share your ideas, challenge your peers, and develop your critical thinking skills. " title={"Group discussion"}></EventCard>
        </SwiperSlide>
        <SwiperSlide>
          <EventCard img={cubing} members={1} mode='offline' info="Are you ready to put your cubing skills to the test? Join us for our Cubing Competition and see if you have what it takes to be crowned the ultimate speedsolver." title="Cubing" secondaryinfo="The competition will feature timed rounds, multiple categories based on age and experience level. Whether you're a seasoned speedsolver or just starting your cubing journey, this competition is a chance to challenge yourself and demonstrate your skills."></EventCard>
        </SwiperSlide>
        <SwiperSlide>
          <EventCard img={hardware} members={2} mode='offline' title="Hardware" info="Are you ready to put your hardware skills to the test and build the ultimate computer? Join us for our PC Building Competition and compete against other tech enthusiasts to create the fastest, most powerful, and most aesthetically pleasing machine." />
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