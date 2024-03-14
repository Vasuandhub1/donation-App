import React from "react";
import makewar from "./Make War & Hunger History-00048.jpeg"
import savlon from "./Savlon Healthy Hands Chalk Sticks.jpeg"
import quote from "./quote.jpg"
import download from "./download (1).jpeg"
import "./styyl.css"
import "./script"




export function Home(){
    return (
        <>
    <img src={savlon} alt="" class="mainimg"/>
    <div class="main">
        <div class="page1">
            <h1>GIVE.LOVE.REPEAT</h1>
            <h2>MAKE YOUR DONATION</h2>
            <p>“It’s easier to take than to give. It’s nobler to give than to take. The thrill of taking lasts a day. The thrill of giving lasts a lifetime.</p>
        </div>
        <div class="page2">
           <div class="scroller">
            <div class="scroller-in">
                <h4>GIVING</h4>
                <h4>OPENS </h4>
                <h4>THE</h4>
                <h4>WAY</h4>
                <h4>FOR</h4>
                <h4>RECEIVING</h4>
                
            </div>
            <div class="scroller-in">
                <h4>GIVING</h4>
                <h4>OPENS </h4>
                <h4>THE</h4>
                <h4>WAY</h4>
                <h4>FOR</h4>
                <h4>RECEIVING</h4>
            </div>
           </div>
           <div class="about-us">
            <img src={makewar} alt=""/>
            <div class="about-us-in">
                <h3>About Us</h3>
                <p>"At Smart Donation, we believe in the power of giving to create a positive impact on society. Our platform connects donors with charitable organizations, NGOs, and causes that align with their values. We strive to make the donation process transparent and accessible, ensuring that every contribution, no matter how small, makes a difference.</p>
            </div>
             <img src={download} alt=""/>
           </div>
              <div class="cards-container">
                <div class="card" id="card1">
                   
                   <div class="overlay">
                    <h4>MEDICINAL</h4>
                    <p>"Medicines for the Body, Love for the Soul: Donate Today!"</p>
                    <p>"From Health to Happiness: Donate for a Better Tomorrow!"</p>
                   </div>
                </div>
                <div class="card" id="card2">
                     <div class="overlay">
                        <h4>CHARITY </h4>
                        <p>"Together, We Can: Charity, Community, Change!"</p>
                     </div>
                </div>
                <div class="card" id="card3">
                    <div class="overlay">
                        <h4>NGOs</h4>
                    <p>"Hope in Action: Support NGOs, Transform Communities!"</p>
                    </div>
                </div>
              </div>
               
              <div class="green-div">
                <h4>“Join us in making a positive impact: Donate today!”</h4>
              </div>
               <div class="quote">
                   <img src={quote} alt="" class="qimg"/>
                    <div class="quotepara"><p>" Giving Is Not Just About Making a Donation. It Is About Making A Difference. "</p></div>
               </div>
               <footer class="footer">
                {/* <div class="foot1">
                    <input type="text" placeholder="Sign Up"/>
                    <button>Sign Up</button>
                </div> */}
                {/* <div class="profile">
                    <div class="Profilelogo"> 
                        <div class="circle"></div>
                        <i class="fa-solid fa-user"></i>
                    </div>
                    <div class="profilesignin">  
                        <p>Sign Up</p>
                        <form id="signup-form">
                            <input type="text" placeholder="Username" class="signup-input" required/>
                            <input type="password" placeholder="Password" class="signup-input" required/>
                            <button type="submit">Sign Up</button>
                        </form>
                        <p>Already have an account? <a href="login.html" id="login-link">Login</a></p>
                    </div>
                </div>
                 */}
                {/* <div class="profile" id="login-form">
                    <div class="Profilelogo"> 
                        <div class="circle"></div>
                        <i class="fa-solid fa-user"></i>
                    </div>
                    <div class="profilesignin">  
                        <p>Login</p>
                        <form id="login-form">
                            <input type="text" placeholder="Username" class="login-input" required/>
                            <input type="password" placeholder="Password" class="login-input" required/>
                            <button type="submit">Login</button>
                        </form>
                        <p>Don't have an account? <a href="#" id="signup-link">Sign Up</a></p>
                    </div>
                </div> */}
                
                <div class="foot2">
                    <p>
                        We are India's most trusted and transparent crowdfunding platform, with a vision to create a social impact. Our unique model allows people from across the globe to donate towards raising funds for products required by NGOs and charities in India, which are then delivered to them by us.
                    </p>
                </div>

                <div class="foot3">
                    <div class="foot31">
                       <div class="location">
                        <i class="fa-solid fa-location-dot"></i>
                        <h3>Location</h3>
                       </div>
                       <h4>Office adress , India</h4>
                       <h5 class="add">MVPF+77W, Khandwa Rd, Indrapuri Colony, Bhanwar Kuwa, Indore, Madhya Pradesh 452001</h5>
                    </div>
                    <div class="foot32"> 
                        <div class="contact-us">
                            <i class="fa-solid fa-phone-volume"></i>
                             <h3>Contact Us</h3>
                            

                        </div>
                        +91 1234567890
                    </div>
                    <div class="foot33">
                        <div class="gmail">
                            <i class="fa-solid fa-envelope"></i>
                            <h3>Cdgi@gmail.com</h3>
                        </div>
                    </div>
                    <div class="foot34">
                        <h3>Discover </h3>
                        <ul>
                            <li><a href="#" class="anc">Home</a></li>
                            <li><a href="#" class="anc">About Us</a></li>
                            <li><a href="#" class="anc">Donate Now</a></li>

                        </ul>
                    </div>
                </div>

                <div class="copyright">
                    © 1996-2024, Amazon.com, Inc. or its affiliates
                </div>
                
                </footer>
        </div>
    </div>
        </>
    )
}