import React, { useEffect, useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { AiOutlineDelete, AiOutlineFullscreen } from 'react-icons/ai'
import { BiVolumeMute } from 'react-icons/bi'
import { BsFillChatRightTextFill, BsFillEmojiSmileFill, BsThreeDotsVertical, BsXLg } from 'react-icons/bs'
import { FaTelegramPlane } from 'react-icons/fa'
import { HiPlus } from 'react-icons/hi'
import { IoIosArrowDown } from 'react-icons/io'
import { MdAttachFile } from 'react-icons/md'
import { VscArchive } from 'react-icons/vsc'
import MessageProduct from '../../components/MessageProduct'

const book = '../../assets/images/icons/book.png'
const bot = '../../assets/images/icons/robot.png'
const robot = "../../assets/images/peoples/online-agent.jpg"
const logo = '../../assets/images/wipdata-logo.png'

// product images
const x = '../../assets/images/icons/x.png'

const billingIcon = '../../assets/images/icons/billing.png'
const helpIcon = '../../assets/images/icons/book.png'
const installIcon = '../../assets/images/icons/install.png'
const chatbotIcon = '../../assets/images/icons/robot.png'
const settingIcon = '../../assets/images/icons/setting.png'
const useIcon = '../../assets/images/icons/use.png'

function Chatbot() {

  const audioUrl = '/assets/mp3/message.mp3'

  // let audio = new Audio(audioUrl)

  const [toggle, setToggle] = useState(false); 
  const [resize, setResize] = useState(false);
  const [formToggle, setFormToggle] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const [width, setWidth] = useState(typeof window != "undefined" && window.innerWidth); 

  const mobileViewport = () => {
    if(typeof window != "undefined") {
      setWidth(window.innerWidth)
    }
  }

  useEffect(() => {
    if(typeof window != "undefined") {
      window.addEventListener('resize', mobileViewport)
      return () => window.removeEventListener('resize', mobileViewport)
    }
  }, [])

  const isMobile = width <= 768

  const handleToggle = (e) => {
    setToggle(!toggle);

    // play notification sound
    // if(!toggle) {
    //   startSound();
    // }
  }

  // resize handler
  const handleResize = () => {
    setResize(!resize)
  }

  // play massege notification
  // const startSound = () => {
  //   audio.play()
  // }

  const handleSubmit = (e) => e.preventDefault(); 

  return (
    <>
      <section className='chatbot-section'>
      <div className={resize ? "chatbot-widget-wrapper full-screen" : "chatbot-widget-wrapper"}>

          {/* chatbot widget wrapper */}
          <div className={toggle ? "chatbot-widget active" : "chatbot-widget"}>

            {/* user contact form */}
            <form onSubmit={handleSubmit} className={!formToggle ? "chatbot-user-form active" : "chatbot-user-form"}>
              <div className='chatbot-notices'>
                <p>We are here to answer any pre-purchase inquiries! For post-purchase support, please submit a support ticket by visiting https://support.wipdata.com.</p>
                <BsXLg onClick={() => setFormToggle(!formToggle)} className='close-user-register-form'/>
              </div>
              <div className='form-curve'>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="viewBox">
                  <path d="M0.00,49.98 C254.51,72.06 306.43,22.41 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" className="path">
                  </path>
                </svg>
              </div>
              <div className='chatbot-user-form-wrap'>
                <div className='form-group'>
                  <label>Full name</label>
                  <input className='input-control' placeholder='Your full name' />
                </div>
                <div className='form-group'>
                  <label>Email Address</label>
                  <input className='input-control' placeholder='Email address' />
                </div>
                <div className='form-group'>
                  <label>Full name</label>
                  <textarea className='input-control-textarea' placeholder='Descriptions'></textarea>
                </div>
                <button onClick={() => setFormToggle(!formToggle)} className='chatbot-user-form-submit-button'>Submit</button>
              </div>
            </form>
            
            {/* chat header */}
            <div className="chatbot-widget-header">

              {/* dropdown menu */}
              <div className={menuToggle ? 'dropdown-menu-wrapper chatbot-dropdown active' : 'dropdown-menu-wrapper chatbot-dropdown'}>
                  <ul>
                    <li>
                      <span>Archive</span> 
                      <VscArchive />
                    </li>
                    <li>
                      <span>Muted</span> 
                      <BiVolumeMute />
                    </li>
                    <li>
                      <span>Delete</span> 
                      <AiOutlineDelete />
                    </li>
                  </ul>
              </div>

              {/* agent presence */}
              <div className="chatbot-widget-agent-precence">

                {/* agent left side */}
                <div className="chatbot-widget-header-left">
                  {/* agent avatar */}
                  <div className="chatbot-recipient-avatar">
                      <img src={robot} alt="agent avatar" />
                      <div className="online-status"></div>
                  </div>

                  {/* agent details */}
                  <div className="chatbot-widget-recipient-details">
                    <p>Chat with</p>
                    <h3>Jassica Smith</h3>
                  </div>
                </div>

                {/* agent right side options */}
                <div className="chatbot-widget-header-right">

                  {/* chatbot credit */}
                  <div className='chatbot-creator'>
                    <p>Powered by</p>
                    <a href="https://www.wipdata.com/" target="_blank" rel="noreferrer">
                      <img src={logo} alt="site logo" />
                    </a>
                  </div>

                  <div className='chatbot-widget-header-right-options'>
                    {/* options */}
                    <div className='chatbot-widget-options' onClick={() => setMenuToggle(!menuToggle)}>
                      {!menuToggle ? <BsThreeDotsVertical /> : <BsXLg className='cross-chatbot-dropdown' />}
                    </div>

                    {/* resize */}
                    <div className='chatbot-widget-minimize' onClick={handleResize}>
                      <AiOutlineFullscreen />
                    </div>

                    {/* minimize */}
                    <div className="chatbot-widget-minimize" onClick={handleToggle}>
                      <IoIosArrowDown />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* chat conversation group body */}
            <div className="chat-conversation-wrapper">
              {/* message body */}
              <ul className='message-body'>

                {/* plain text bubble */}
                <li className='message-bubble-agent'>
                  <span>{"Hi, I'm WipData Chatbot"}</span>
                  <img src={bot} alt="bot" />
                </li>
                {/* <div className="messageTimestamp fade-enter-done">Yesterday, 20:00</div> */}

                <li className='message-bubble-agent'>
                  <span>Before we begin, please choose one of the topics. What would you like to explore?</span>
                </li>
                
                {/* buttons  */}
                <li className='message-bubble-agent clear-style-message'>
                  <div className="message-auto-suggest-buttons">
                    {/* item */}
                    <button className='suggest-btn'>
                      <img src={helpIcon} alt="📚" />
                      <span>Help Center</span>
                    </button>
                    {/* item */}
                    <button className='suggest-btn'>
                      <img src={billingIcon} alt="💰" />
                      <span>Billing</span>
                    </button>
                    {/* item */}
                    <button className='suggest-btn'>
                      <img src={installIcon} alt="💻" />
                      <span>Installations</span>
                    </button>
                    {/* item */}
                    <button className='suggest-btn'>
                      <img src={chatbotIcon} alt="🤖" />
                      <span>Chatbots</span>
                    </button>
                    {/* item */}
                    <button className='suggest-btn'>
                      <img src={useIcon} alt="👨‍💻" />
                      <span>Using WipBot</span>
                    </button>
                    {/* item */}
                    <button className='suggest-btn'>
                      <img src={settingIcon} alt="⚙️" />
                      <span>Settings</span>
                    </button>
                  </div>
                </li>


                {/* message by visitor */}
                <li className="message-bubble-visitor">
                  <img src={book} alt="book" />
                  <span>Help Center</span>
                </li>

                {/* message by visitor */}
                <li className="message-bubble-visitor">
                  <span>Can I book new room?</span>
                </li>

                {/* plain text bubble */}
                <li className='message-bubble-agent'>
                  <span>Sure, Here is our available rooms. Please click and <button className='btn'>Book now</button></span>
                </li>

                {/* time slot */}
                <li className="message-day-slot">
                  <div className='message-day-slot-wrap'>
                    <span className="message-day-slot-item">1</span>
                    <span className="message-day-slot-item">2</span>
                    <span className="message-day-slot-item">3</span>
                    <span className="message-day-slot-item">4</span>
                    <span className="message-day-slot-item">5</span>
                    <span className="message-day-slot-item">6+</span>
                  </div>
                </li>

                {/* message by visitor */}
                <li className="message-bubble-visitor">
                  {/* <img src={book} alt="book" /> */}
                  <span>Show me the popular products</span>
                </li>

                {/* plain text bubble */}
                <li className='message-bubble-agent'>
                  <span>Here is last 30 days most popular sales products</span>
                </li>

                {/* babble typing... */}
                <li className="message-bubble-agent">
                  <span className="tying">Typing</span>
                  <span className="animate-typing">
                    <span className="dot ms-1"></span>
                    <span className="dot ms-1"></span>
                    <span className="dot ms-1"></span>
                  </span>
                </li>

                {/* product carousel */}
                <li className="message-product-carousel">
                  <MessageProduct />
                </li>

                {/* message by agent */}
                <li className="message-bubble-agent">
                  {/* <img src={book} alt="book" /> */}
                  <span>Thanks for your recent purchase. We hope you love it. If you do, would you considar posting an online review? This helps us to continue providing great products and help potential buyers to make confident decision.</span>
                </li>

                {/* message by agent */}
                <li className="message-bubble-agent">
                  {/* <img src={book} alt="book" /> */}
                  <span>Please leave a review about our store on Facebook 😊<a href='https://www.facebook.com/WipData/'>https://www.facebook.com/WipData/ </a></span>
                </li>

                {/* message by visitor */}
                <li className="message-bubble-visitor">
                  {/* <img src={book} alt="book" /> */}
                  <span>What is your office hours?</span>
                </li>

                {/* message by agent */}
                <li className="message-bubble-agent">
                  {/* <img src={book} alt="book" /> */}
                  <span>Here is our office hour</span>
                </li>

                {/* time slot */}
                <li className="message-day-slot">
                  <div className='message-day-slot-wrap'>
                    <span className="message-day-slot-item">Saturday</span>
                    <span className="message-day-slot-item">SunDay</span>
                    <span className="message-day-slot-item">Monday</span>
                    <span className="message-day-slot-item">Tusday</span>
                    <span className="message-day-slot-item">Wednesday</span>
                    <span className="message-day-slot-item">Thusday</span>
                    <span className="message-day-slot-item">Friday</span>
                  </div>
                </li>

                {/* message by agent */}
                <li className="message-bubble-agent">
                  {/* <img src={book} alt="book" /> */}
                  <span>Would you like to personalize your order with gift option or customer engraving?</span>
                </li>

                {/* time slot */}
                <li className="message-day-slot">
                  <div className='message-day-slot-wrap'>
                    <span className="message-day-slot-item active">Yes, Please</span>
                    <span className="message-day-slot-item">No thanks</span>
                  </div>
                </li>

                {/* message by agent */}
                <li className="message-bubble-agent">
                  <span>Hey there! We’re excited to help you out. Let us know your email address so that we can follow up in case we get disconnected.</span>
                </li>

                {/* message by agent */}
                <li className='message-bubble-agent visitor-email'>
                  <div className="message-visitor-email">
                    <input type="text" placeholder='Email address' />
                    <button className='message-visitor-email-button'>Submit</button>
                  </div>
                </li>

                {/* message by agent */}
                <li className="message-bubble-agent">
                  <span>Thank for the submitting and subscribing our email. </span>
                </li>

                {/* message by visitor */}
                <li className="message-bubble-visitor">
                  <span>Yes, Please.</span>
                </li>

                {/* message by agent */}
                <li className="message-bubble-agent">
                  <span>{"Ok I'm transferning to Anna."}</span>
                </li>

                {/* message by agent */}
                <li className="message-bubble-agent">
                  <img src={bot} alt="rob" />
                  <span>Hi, This is Anna. How would you like to personalize your order?</span>
                </li>

              </ul>
            </div>

            {/* chat footer */}
            <div className="chatbot-footer">
              <div className="chatbot-footer-input-box">
                <input type="text" placeholder='Start conversation...' />
                <button className='chatbot-send-message-button'>
                  <FaTelegramPlane />
                </button>
              </div>
              <div className="chatbot-footer-options">
                <HiPlus />
                <MdAttachFile />
                <BsFillEmojiSmileFill />
              </div>
            </div>
          </div>

          {/* chatbot open icon && if resize is true the hide chatbot icon */}
          { resize ? "" : <div className='chatbot-icon' onClick={handleToggle}>
            {toggle ? <img src={x} alt="x" /> : <BsFillChatRightTextFill />}
          </div> }
          <ReactAudioPlayer
            src="/assets/mp3/message.mp3"
            controls
            className='audio-hidden'
          />
      </div>
      </section>
    </>
  )
}

export default Chatbot