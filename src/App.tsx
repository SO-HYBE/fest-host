import React, { useEffect } from 'react';
import './App.css';
import head from './images/head.png';
import main from './videos/ultima.mp4';
import foot from './images/main.png';
import intro from './images/intro.jpg';
import eventt from './images/opaci.png';
import event2 from './images/opaci2.png'
import ScrollButton from './components/ScrollButton';
import Aos from 'aos';
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    Aos.init({duration: 3000});
  }, []);

  const handleEventScroll = () => {
    const eventer = document.getElementById('event-sec');
    if (eventer) {
      eventer.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const handleAboutScroll = () => {
    const abouter  = document.getElementById('about-sec');    
    if (abouter) {
      abouter.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const handleContactScroll = () =>  {
    const contacter = document.getElementById('contact-sec');    
    if (contacter) {
      contacter.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  return (
      <div className='App scroll-smooth'>

        <ScrollButton />

        <div className='header relative w-full fixed z-[3]'>
            <ul className='flex flex-row pt-6 pb-6'>
            <li className='basis-1/4 align-bottom text-center self-center' ><a href='#' id='home' className='text-slate-400 hover:text-white hover:font-bold rounded-l-lg hover:tracking-widest'>Home</a></li>
              <li className='basis-1/4 align-bottom text-center self-center	'><a onClick={handleEventScroll}  id='events' className='cursor-pointer text-slate-400 hover:text-white hover:font-bold  decoration-2 hover:tracking-widest'>Events</a></li>
              <a href="/fest-host/">
              <img src={head} className='basis-1/2 scale-80 hover:opacity-80 hover:scale-85 transition duration-300 ease-in-out ' alt="" />
              </a>
              <li className='basis-1/4 align-bottom text-center self-center	'><a onClick={handleAboutScroll} id='about' className='cursor-pointer text-slate-400 hover:text-white hover:font-bold hover:tracking-widest'>About</a></li>
              <li className='basis-1/4 align-bottom text-center self-center	'><a onClick={handleContactScroll} id='contact' className='cursor-pointer text-slate-400 hover:text-white hover:font-bold  rounded-r-lg hover:tracking-widest' >Contact Us</a></li>
            </ul>
        </div>
          <h3 className='headt absolute left-0 top-[20vw] z-[1] w-full h-[20rem] whitespace-pre'>
          <div className='flex flex-row ml-[15vw]'>
          <span className='font-semibold text-[2vw] text-white inline-block self-center w-50'>WELCOME </span>
          <span className='font-semibold text-[2vw] text-white inline-block self-center w-50'>TO </span>
          <span className='font-semibold text-[2vw] text-white inline-block self-center w-50'>THE</span>
          </div>
          <br />
          <div className='flex flex-col justify-center'>
          <span className='font-bold text-[10vw] text-white inline-block ml-[25vw]'>"EXTRA</span>
          <span className='font-bold text-[10vw] text-white inline-block text-center'>ORDINARY"</span>
          <br />
          </div>
          <div className='flex flex-row justify-center text-center'>
          <span className='font-bold text-[3vw] text-mid-gray inline-block whitespace-pre'>AN </span>
          <span className='font-bold text-[3vw] text-mid-gray inline-block whitespace-pre'>EXCEPTIONAL </span>
          <span className='font-bold text-[3vw] text-mid-gray inline-block whitespace-pre'>EVENT </span>
          <span className='font-bold text-[3vw] text-mid-gray inline-block whitespace-pre'>MANAGMENT </span>
          <span className='font-bold text-[3vw] text-mid-gray inline-block whitespace-pre'>AGENCY</span>          
          </div>
          </h3>
        <div className='bg-clip-padding w-full whitespace-pre' >
          <video autoPlay loop muted plays-inline="true" id='video' className='opacity-50 self-center w-full relative z-0'> <source src={main} type='video/mp4' /></video>
        </div>
        <div className='intro flex flex-row justify-center mt-[6.25rem] mb-[6.25rem]' id='about-sec'>
          <div className='flex flex-col justify-around items-center w-[60vw]'>
            <h5 data-aos="fade-up" className='text-center text-4xl font-bold mb-[1.25rem] transition duration-100  ease-out'>Who Are We?</h5>

            <h4 data-aos="fade-up" className='intro-p transition duration-150  ease-out'>
              We Have Been Happily Serving Customers For Over 30 Years
            </h4>

            <p data-aos="fade-up" className='infot mx-10 text-xl text-center transition duration-400  ease-out w-50'>Welcome to Festival International Event
                Association, a dynamic and innovative
                start-up that provides comprehensive event
                management and ticket booking services.
                Our goal is to revolutionize the way events
                are organized and attended by providing
                seamless and hassle-free experiences to
                both event organizers and attendees.</p>
          </div>
        </div>
        <div 
        className='image-bg dark-overlay flex flex-row justify-center items-center'
        style={{backgroundImage: `url(${eventt})`}}        
        >   <h2 className='parat text-[13vw]'>AWESOME</h2>
        </div>                  
        <div className='column px-8 pt-[6.25rem] pb-[0.625rem]' id='event-sec'>
            <h2 className='events-header'>UPCOMING EVENTS.</h2>
        </div>
        <section className='events flex mb-[5vw]'>
          <div className='basis-1/2 pl-[2.5vw] pr-[2.4vw] mb-[2.5rem] event1'>
              <h3 className='title1'>CDL MAJOR III TOURNAMENT</h3>
              <p className='event-desc'>Experience the Major III Tournament live in person at the Esports Stadium Arlington in Arlington TX. All 12 League teams will compete across four days of insane action to be crowned Major III Champion.</p>
              <ul className='event-list'>
                <li className='event-list-date'>MARCH 9 - 12</li>
                <li className='event-list-location'>ESPORTS STADIUM ARLINGTON, ARLINGTON TX</li>
              </ul>
          </div>
          <div className='basis-1/2 pl-[2.5vw] pr-[2.4vw] mb-[2.5rem] event2'>
              <h3 className='title2'>LONGINES GLOBAL CHAMPIONS TOUR - DOHA</h3>
              <p className='event-desc'>Al Shaqab is the stunning world-renowned venue that plays host to the electrifying launchpad to the 2023 LGCT and GCL season in the modern city of Doha, Qatar.</p>
              <ul className='event-list '>
                <li className='event-list-date'>MARCH 2 - 4</li>
                <li className='event-list-location'>Longines Arena at Al Shaqab</li>
              </ul>
          </div>
        </section>
        <div 
        className='image-bg dark-overlay flex flex-row justify-center items-center'
        style={{backgroundImage: `url(${event2})`}}        
        >   <h2 className='parat text-[13vw]'>EVENTS</h2>
        </div>
        <footer className='w-full flex items-center justify-center bg-black mt-[3.75rem]' id='contact-sec'>
        <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
            <div className="w-full text-7xl font-bold">
                <h1 className="w-full md:w-2/3">How can we help you. get
                    in touch</h1>
            </div>
            <div className="flex mt-8 flex-col md:flex-row md:justify-between" >
                <p className="w-full md:w-2/3 text-gray-400">We would love the chance to speak with you about your event requirements. Tell us what is on your mind and we will make sure that someone from Better Event reaches out to answer your question.</p>
                <div className="w-44 pt-6 md:pt-0">
                    <a href='#' className="bg-red-500 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center hover:text-black hover:bg-white transition duration-300 ease-in-out">Contact US</a>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex mt-24 mb-12 flex-row justify-between items-center">
                    <a href='#' className='w-[6.25rem] h-[6.25rem]'><img src={foot} alt="event managment agency"/></a>
                    <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase align-bottom">About</a>
                    <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase align-bottom">Services</a>
                    <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase align-bottom">Why us</a>
                    <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">Contact</a>
                    <div className="flex flex-row space-x-8 items-center justify-between">
                        <a>
                            <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.89782 12V6.53514H5.67481L5.93895 4.39547H3.89782V3.03259C3.89782 2.41516 4.06363 1.99243 4.91774 1.99243H6V0.0847928C5.47342 0.0262443 4.94412 -0.00202566 4.41453 0.000112795C2.84383 0.000112795 1.76542 0.994936 1.76542 2.82122V4.39147H0V6.53114H1.76928V12H3.89782Z" fill="white"/>
                            </svg>                            
                        </a>
                        <a href='https://www.instagram.com/flawlessproductions.agency/'>
                            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.99536 2.91345C5.17815 2.91345 4.39441 3.23809 3.81655 3.81594C3.2387 4.3938 2.91406 5.17754 2.91406 5.99475C2.91406 6.81196 3.2387 7.5957 3.81655 8.17356C4.39441 8.75141 5.17815 9.07605 5.99536 9.07605C6.81257 9.07605 7.59631 8.75141 8.17417 8.17356C8.75202 7.5957 9.07666 6.81196 9.07666 5.99475C9.07666 5.17754 8.75202 4.3938 8.17417 3.81594C7.59631 3.23809 6.81257 2.91345 5.99536 2.91345ZM5.99536 7.99586C5.46446 7.99586 4.9553 7.78496 4.57989 7.40955C4.20448 7.03415 3.99358 6.52499 3.99358 5.99408C3.99358 5.46318 4.20448 4.95402 4.57989 4.57861C4.9553 4.20321 5.46446 3.99231 5.99536 3.99231C6.52626 3.99231 7.03542 4.20321 7.41083 4.57861C7.78624 4.95402 7.99714 5.46318 7.99714 5.99408C7.99714 6.52499 7.78624 7.03415 7.41083 7.40955C7.03542 7.78496 6.52626 7.99586 5.99536 7.99586Z" fill="white"/>
                                <path d="M9.19863 3.51848C9.59537 3.51848 9.91698 3.19687 9.91698 2.80013C9.91698 2.4034 9.59537 2.08179 9.19863 2.08179C8.8019 2.08179 8.48029 2.4034 8.48029 2.80013C8.48029 3.19687 8.8019 3.51848 9.19863 3.51848Z" fill="white"/>
                                <path d="M11.6821 2.06975C11.5279 1.67138 11.2921 1.30961 10.99 1.00759C10.6879 0.705576 10.326 0.469972 9.92759 0.31586C9.46135 0.140842 8.9688 0.0462069 8.4709 0.0359839C7.82919 0.00799638 7.62594 0 5.99867 0C4.37139 0 4.16282 -6.70254e-08 3.52643 0.0359839C3.02891 0.0456842 2.53671 0.140339 2.07108 0.31586C1.67255 0.469792 1.31059 0.705333 1.00844 1.00737C0.706289 1.30941 0.47061 1.67127 0.316526 2.06975C0.141474 2.53595 0.0470554 3.02855 0.0373167 3.52643C0.00866281 4.16748 0 4.37072 0 5.99867C0 7.62594 -4.96485e-09 7.83319 0.0373167 8.4709C0.0473123 8.96935 0.14127 9.46113 0.316526 9.92825C0.471042 10.3266 0.70695 10.6883 1.00918 10.9903C1.3114 11.2923 1.6733 11.5279 2.07175 11.6821C2.5365 11.8642 3.0289 11.9656 3.52777 11.982C4.16948 12.01 4.37272 12.0187 6 12.0187C7.62728 12.0187 7.83585 12.0187 8.47223 11.982C8.97008 11.9719 9.46262 11.8775 9.92892 11.7028C10.3272 11.5483 10.689 11.3125 10.9911 11.0104C11.2932 10.7083 11.529 10.3466 11.6835 9.94825C11.8587 9.48179 11.9527 8.99 11.9627 8.49156C11.9913 7.85051 12 7.64727 12 6.01932C12 4.39138 12 4.18481 11.9627 3.54709C11.9549 3.04216 11.86 2.54237 11.6821 2.06975ZM10.8705 8.42159C10.8662 8.80562 10.7961 9.18608 10.6633 9.54642C10.5632 9.80555 10.41 10.0409 10.2135 10.2372C10.017 10.4336 9.78162 10.5867 9.52243 10.6866C9.16608 10.8188 8.78967 10.8889 8.4096 10.8938C7.77654 10.9231 7.59796 10.9305 5.97468 10.9305C4.35007 10.9305 4.18414 10.9305 3.53909 10.8938C3.15921 10.8892 2.78298 10.8191 2.42692 10.6866C2.16683 10.5873 1.93048 10.4345 1.73316 10.2381C1.53584 10.0417 1.38194 9.80605 1.28143 9.54642C1.15045 9.18995 1.08039 8.81398 1.07419 8.43425C1.04554 7.8012 1.03887 7.62261 1.03887 5.99933C1.03887 4.37539 1.03887 4.20946 1.07419 3.56375C1.0785 3.17993 1.14859 2.7997 1.28143 2.43958C1.48467 1.91382 1.90116 1.5 2.42692 1.29876C2.78316 1.16691 3.15928 1.09682 3.53909 1.09151C4.17281 1.06286 4.35073 1.05486 5.97468 1.05486C7.59862 1.05486 7.76522 1.05486 8.4096 1.09151C8.7897 1.09609 9.16617 1.1662 9.52243 1.29876C9.7816 1.39889 10.017 1.55211 10.2134 1.74858C10.4099 1.94504 10.5631 2.18041 10.6633 2.43958C10.7942 2.79606 10.8643 3.17203 10.8705 3.55175C10.8992 4.18547 10.9065 4.36339 10.9065 5.98734C10.9065 7.61062 10.9065 7.78521 10.8778 8.42226H10.8705V8.42159Z" fill="white"/>
                            </svg>    
                        </a>
                        <a>
                            <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.7355 1.415C12.6616 1.14357 12.517 0.896024 12.3162 0.697014C12.1154 0.498004 11.8654 0.354468 11.5911 0.280692C10.5739 0.00450089 6.5045 4.87928e-06 6.5045 4.87928e-06C6.5045 4.87928e-06 2.43578 -0.00449139 1.41795 0.259496C1.14379 0.336667 0.894302 0.482233 0.693428 0.68222C0.492554 0.882207 0.347041 1.1299 0.270859 1.40152C0.00259923 2.40737 9.51671e-07 4.49358 9.51671e-07 4.49358C9.51671e-07 4.49358 -0.0025972 6.59006 0.263714 7.58564C0.413109 8.13609 0.851549 8.57094 1.40885 8.71931C2.43643 8.9955 6.49476 9 6.49476 9C6.49476 9 10.5641 9.00449 11.5813 8.74115C11.8557 8.6675 12.106 8.52429 12.3073 8.32569C12.5086 8.12709 12.6539 7.87996 12.729 7.60876C12.998 6.60355 12.9999 4.51798 12.9999 4.51798C12.9999 4.51798 13.0129 2.42086 12.7355 1.415ZM5.20282 6.42628L5.20607 2.57244L8.58823 4.50257L5.20282 6.42628Z" fill="white"/>
                            </svg>                            
                        </a>
                    </div>
                </div>
                <hr className="border-gray-600"/>
                <p className="w-full text-center my-12 text-gray-600">Copyright © 2023 Festival International Events Association</p>
            </div>
        </div>
        </footer>


      </div>
    )
}

export default App; 