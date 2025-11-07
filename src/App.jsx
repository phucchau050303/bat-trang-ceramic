import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyCarousel from './components/image/Carousel.jsx'
import ImageButton from './components/image/ImageButton.jsx'
import './App.css'
import ImageGallery from './components/gallery/ImageGallery.jsx';
import './styles/gallery.css';
import ReviewCard from './components/review/ReviewCard.jsx';
import './styles/reviews.css';
import { Button } from 'react-bootstrap'
import SimpleForm from './components/forms/SimpleForm.jsx'

function App() {

  return (
    <>
      <div>
        <div className = "container-fluid p-0">
          <MyCarousel images={[
            { src: "/ceramic1.jpg", alt: "Delicious Dish 1", title: "Welcome to Bat Trang", subtitle: "Discover the beauty of traditional ceramics", cta: "Explore Now", ctaLink: "#explore" },
            { src: "/ceramic2.jpg", alt: "Delicious Dish 2", title: "Welcome to Bat Trang", subtitle: "Discover the beauty of traditional ceramics", cta: "Explore Now", ctaLink: "#explore" },
            { src: "/ceramic3.jpg", alt: "Delicious Dish 3", title: "Welcome to Bat Trang", subtitle: "Discover the beauty of traditional ceramics", cta: "Explore Now", ctaLink: "#explore"  },
          ]} />
        </div>
        <div class = "container mt-2 p-5">
          <div class = "row mt-5 align-items-center justify-content-center ">
            <div class = "col-lg-4 mt-4 mb-4">
              <ImageButton buttonName = "Shop Now" backgroundImageLink = "/ceramic4.jpg" />
            </div>
            <div class = "col-lg-4 mt-4 mb-4">
              <ImageButton buttonName = "Shop Now" backgroundImageLink = "/ceramic4.jpg" />
            </div>
            <div class = "col-lg-4 mt-4 mb-4">
              <ImageButton buttonName = "Shop Now" backgroundImageLink = "/ceramic4.jpg" />
            </div>
          </div>

          <h2 className='text-center mt-5' style={{fontSize: '3rem'}}>Bat Trang Ceramic</h2>

          <div className = "row mt-5 mb-5 p-5" style={{fontSize: '1.2rem'}}>
            <div className = "col-lg-6 col-12">
              <img src='/ceramic5.png' className = "image-intro"></img>
            </div>
            <div className = "col-lg-6 col-12 d-flex flex-column justify-content-center">
              <h2 style={{fontSize: "3rem",}}> HAND MADE CERAMIC </h2>
              <p> Our products are hand-crafted by the most skillful pottery makers with years of 
                experience, ensuring each product has a unique touch</p>
            </div>
          </div>

          <div className = "row mt-5 mb-5 p-5" style={{fontSize: '1.2rem'}}>
            <div className = "col-lg-6 col-12 d-flex flex-column justify-content-center order-lg-0 order-1">
              <h2 style={{fontSize: "3rem",}}> HAND MADE CERAMIC </h2>
              <p> Our products are hand-crafted by the most skillful pottery makers with years of 
                experience, ensuring each product has a unique touch</p>
            </div>            
            <div className = "col-lg-6 col-12 order-lg-1 order-0">
              <img src='/ceramic5.png' className = "image-intro"></img>
            </div>
          </div>    

           <h2 className='text-center mb-5' style={{fontSize: '3rem'}}>See Our Gallery</h2>

          <ImageGallery images={[
            '/ceramic1.jpg','/ceramic7.jpg','/ceramic3.jpg',
            '/ceramic4.jpg','/ceramic5.png','/ceramic6.jpg'
          ]} />      

          <h2 className='text-center mt-5' style={{fontSize: '3rem'}}>What Customer Says about Us</h2>

          <div className="reviews-row mt-5 mb-5">
            <ReviewCard
              avatar="/avatars/user1.jpg"
              title="Love the desgin!"
              excerpt={`"I order a pot from this shop and I absolutely love the de..."`}
              fullText={`I order a pot from this shop and I absolutely love the design! The drawing they put on it was awesome. Definitely worth every penny I spent.`}
              author="Minh Pham"
              date="24/8/2025"
              rating={5}
              bgColor={"#584035ff"}
            />
            <ReviewCard
              avatar="/avatars/user2.jpg"
              title="Fast Delivery"
              excerpt={`"I ordered a vase for my living room and it arrived much fa..."`}
              fullText={`I ordered a vase for my living room and it arrived much faster than I expected. The packaging was secure, and the vase was intact without any damage.`}
              author="Hoang Kim"
              date="5/10/2025"
              rating={5}
              bgColor={"#584035ff"}
            />
            <ReviewCard
              avatar="/avatars/user3.jpg"
              title="The quality is superb"
              excerpt={`"Just received my ceramic mug and the quality is superb. T..."`}
              fullText={`Just received my ceramic mug and the quality is superb. The craftsmanship is evident, and it feels great to hold. Highly recommend this shop for anyone looking for quality ceramics.`}
              author="Duc Nguyen"
              date="1/11/2025"
              rating={5}
              bgColor={"#584035ff"}
            />
          </div>          
        </div>          
        <div className="container-fluid background-cta text-center mt-5 mb-5">
            <img className='background-cta-image' src="/backgrounds/bg1.jpg" alt="" />
            <div className="background-cta-caption">
            <h1>Interested in buying our products?</h1>
            <button href="#" className='cta-btn'>Shop now</button>
            </div>

        </div>
        <div className='container mt-5 mb-5' >
          <h2 className='mb-3' style={{fontSize: '3rem'}}>Contact Us For More Information</h2>
          <SimpleForm />
        </div>
      </div>          
    </>
  )
}

export default App
