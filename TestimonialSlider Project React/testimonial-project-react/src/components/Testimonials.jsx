import React from 'react'
import { Link } from 'react-router-dom'


const Testimonials = () => {
    
let slideIndex = 1;
showSlides(slideIndex);

function addSlides(index) {
    setTimeout(() =>{
        showSlides(slideIndex += index);
    }, 1000)
  };



function showSlides(index) {
    let i;
    let slide = document.getElementsByClassName("slide");

    if (index > slide.length) { slideIndex = 1 }
    if (index < 1) { slideIndex = slide.length }

    for (i = 0; i < slide.length; i++){
        // slide[i].style.display = "none";
    }
    
    // slide[slideIndex-1].style.display = "block";
};


  return (

    <div className="container">
        <div className="slides">
            <div className="slide">
                <div className="testimonialsFromClient"> <h1>Testimonials from our clients</h1> </div>
                <div className="img"> <img src="/images/womanpinkwarm.jpg" className="image" /> </div>
                <div className="testimonial"> <p>Zeal provides great support and one-on-one attention to their clients. The use of video conferences allows us the opportunity to meet face to face with the team and be involved in each step of the project. They keep in contact with us to make sure we are satisfied at each step. The Thrive team was able to take our vision for our site and make it a reality. </p> </div>
                <div className="apostrophe"> <img src="/images/icons.png" className="icon" /> <img src="/images/icons.png" className="imgAP icon" /> </div>
                <div className="nameAndJob"> 
                    <h5 className="name">Whitney Wells Lewis</h5>
                    <p className="job">Geo-Systems USA</p> 
                </div>
            </div>
            <div className="slide">
                <div className="testimonialsFromClient"> <h1>Testimonials from our clients</h1> </div>
                <div className="img"> <img src="/images/bohemian.jpg" className="image" /> </div>
                <div className="testimonial"> <p>It is a distinct pleasure for me to recommend Zeal Internet Marketing to any and all interested parties. They have been professional, comprehensive and competent throughout the process of our working together. We feel that we have established a relationship with them for years to come. The reaction to our new web site has been overwhelmingly positive; as one commented the site is “FANTASTIC.” The same can be said for our view of Zeal's work for us.</p> </div>
                <div className="apostrophe"> <img src="/images/icons.png" className="icon" /> <img src="/images/icons.png" className="imgAP icon" /> </div>
                <div className="nameAndJob"> 
                    <h5 className="name">Brandon Brien</h5>
                    <p className="job">Demilec (USA), LLC</p> 
                </div>
            </div>
            <div className="slide">
                <div className="testimonialsFromClient"> <h1>Testimonials from our clients</h1> </div>
                <div className="img"> <img src="/images/businesswoman.jpg" className="image" /> </div>
                <div className="testimonial"> <p>The attention to detail with Zeal's professional staff is incredible. The entire team has proven to be very innovative and will work with ideas that I have as well and think of new ways to bring more traffic to our site in ways I would never have considered. Their pricing structure is unique and logical saving me money and achieving measurable results at the same time. I cant recommend Zeal strongly enough and will happily use them for my next business venture as well.</p> </div>
                <div className="apostrophe"><img src="/images/icons.png" className="icon" /> <img src="/images/icons.png" className="imgAP icon" /> </div>
                <div className="nameAndJob"> 
                    <h5 className="name">Melissa Montiel</h5>
                    <p className="job">Downtown Arlington Management</p> 
                </div>
            </div>
            <div className="slide">
                <div className="testimonialsFromClient"> <h1>Testimonials from our clients</h1> </div>
                <div className="img"> <img src="/images/adultman.jpg" className="image" /> </div>
                <div className="testimonial"> <p>I speak for the Mark district when I tell you how pleased we are with the web site you designed for us. The district needed a site that addressed varied aspects of our operation. You have met those needs and then some! We have had nothing but rave comments about the site from those who are closest to it and rely on it the most. I personally want to thank you and your staff for their patience and diligence in promptly meeting each of our requests for the site during its development.</p> </div>
                <div className="apostrophe"> <img src="/images/icons.png" className="icon" /> <img src="/images/icons.png" className="imgAP icon" /> </div>
                <div className="nameAndJob"> 
                    <h5 className="name">Bradley Ross</h5>
                    <p className="job">White Hat Holsters</p> 
                </div>
            </div>
            <div className="slide">
                <div className="testimonialsFromClient"> <h1>Testimonials from our clients</h1> </div>
                <div className="img"> <img src="/images/businesswomanii.jpg" className="image" /> </div>
                <div className="testimonial"> <p>Our site is beautiful! It is easy to navigate. The support has been remarkable for WordPress; if I don’t understand something, or can’t accomplish a task, Zeal is very responsive and they lead me in the correct way. Zeal is an extremely talented web design company. We are amazed from where traffic to our site comes; we are a moderate sized nonprofit and now we are having global visitors.</p> </div>
                <div className="apostrophe"> <img src="/images/icons.png" className="icon" /> <img src="/images/icons.png" className="imgAP icon" /> </div>
                <div className="nameAndJob"> 
                    <h5 className="name">Cathy O’Neal</h5>
                    <p className="job">Pate Capital Group Inc.</p> 
                </div>
            </div>
            <div className="slide">
                <div className="testimonialsFromClient"> <h1>Testimonials from our clients</h1> </div>
                <div className="img"> <img src="/images/isolatedman.jpg" className="image" /> </div>
                <div className="testimonial"> <p>Zeal’s design and web work has provided a vast improvement for our site visits, service inquiries and ease of maintaining. After two years I still receive compliments on the clean and attractive design, easy navigation, and concise information. Our customer growth has increased as well as community awareness. Our thanks to the Thrive team for hearing our needs and then designing a top notch website for us.</p> </div>
                <div className="apostrophe"> <img src="/images/icons.png" className="icon" /> <img src="/images/icons.png" className="imgAP icon" /> </div>
                <div className="nameAndJob"> 
                    <h5 className="name">Craig Pate</h5>
                    <p className="job">Levitt Pavilion Arlington, TX</p> 
                </div>
            </div>
            <Link className="previousBtn" onClick={addSlides(-1)} >&#10094;</Link>
            <Link className="nextBtn" onClick={addSlides(1)} >&#10095;</Link>
        </div>
    </div>
  )
}

export default Testimonials;