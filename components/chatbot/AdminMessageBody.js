import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineDelete, AiOutlineUser } from 'react-icons/ai'
import { BiVolumeMute } from 'react-icons/bi'
import { BsCameraVideo, BsFillCameraVideoFill, BsFillEmojiSmileFill, BsXLg } from 'react-icons/bs'
import { FaTelegramPlane, FaTimes, FaVideo } from 'react-icons/fa'
import { HiPlus } from 'react-icons/hi'
import { MdAttachFile, MdCall, MdVideoCall } from 'react-icons/md'
import { VscArchive } from 'react-icons/vsc'
import book from '../../assets/images/icons/book.png'
import bot from '../../assets/images/icons/robot.png'
import x from '../../assets/images/icons/x.png'
import robot from "../../assets/images/peoples/online-agent.jpg"
import logo from '../../assets/images/wipdata-logo.png'

// product images
import { FiMoreVertical, FiPhoneCall, FiSearch } from 'react-icons/fi'
import happyChat from '../../assets/images/peoples/happy-chat.jpg'

import billingIcon from '../../assets/images/icons/billing.png'
import helpIcon from '../../assets/images/icons/book.png'
import installIcon from '../../assets/images/icons/install.png'
import chatbotIcon from '../../assets/images/icons/robot.png'
import settingIcon from '../../assets/images/icons/setting.png'
import useIcon from '../../assets/images/icons/use.png'

function AdminMessageBody() {
  
  const [callToggle, setCallToggle] = useState(true);
  const [searchToggle, setSearchToggle] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const [whichIcon, setWhichIcon] = useState('');
  const [sticky, setSticky] = useState(window.scrollY); 
  const [bodyClick, setBodyClick] = useState(window);

  const windowBodyClick = () => {
    setBodyClick(window)
  }

  useEffect(() => {
    window.addEventListener('click', windowBodyClick)
    return () => window.removeEventListener('click', windowBodyClick)
  }, [])

  const stickyChatHeader = () => {
    setSticky(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', stickyChatHeader)
    return () => window.removeEventListener('scroll', stickyChatHeader)
  }, [])

  const isScrolled = sticky >= 0

  const searchRef = useRef(null);
  const chatRef = useRef(null); 

  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, []);

  // call cancle
  const callModel = (iconName) => {
    setCallToggle(!callToggle);
    setWhichIcon(iconName)
  }

  return (
    <>
      <div className="chatbox-wrapper">

        {/* call model */}
        <div className={callToggle ? "call-model-container" : "call-model-container active"}>
          <div className='call-model-wrapper'>
            <div className='call-user-avatar'>
              <img src={happyChat} alt="user on call" />
            </div>
            {/* user name */}
            <div className='call-user-content'>
              <h2>Doris Brown</h2>
              <p>Start { whichIcon == "audio" && "Audio" || whichIcon == "video" && "Video" } Call</p>
            </div>
            {/* user actions */}
            <div className='call-user-actions'>
              <div className='call-user-icon' onClick={callModel}>
                <FaTimes />
              </div>
              <div className='call-user-icon'>
              {whichIcon=="audio"&&<MdCall /> || whichIcon=="video" && <FaVideo />}
              {}
              </div>
            </div>
          </div>
        </div>

          {/* chatbot widget wrapper */}
          <div className="chatbox">
            
            {/* chat header */}
            <div className={isScrolled ? "chatbot-widget-header chatbox-header active" : "chatbot-widget-header chatbox-header"}>

              {/* agent presence */}
              <div className="chatbot-widget-agent-precence">

                {/* agent left side */}
                <div className="chatbot-widget-header-left">
                  {/* agent avatar */}
                  <div className="chatbot-recipient-avatar chatbox-recipient-avatar">
                      <img src={robot} alt="agent avatar" />
                      <div className="online-status"></div>
                  </div>

                  {/* agent details */}
                  <div className="chatbot-widget-recipient-details chatbox-recipient-details">
                    <p>Chat with</p>
                    <h3>Jassica Smith</h3>
                  </div>
                </div>

                {/* agent right side options */}
                <div className="chatbot-widget-header-right">

                  {/* visibility hidden */}
                  {/* search */}
                  <div className={searchToggle ? 'search-model active' : 'search-model'}>
                    <input ref={searchRef} placeholder='Search here...' />
                    <FiSearch className='search-model-search-icon' />
                    <BsXLg onClick={() => setSearchToggle(!searchToggle)} />
                  </div>

                  {/* dropdown menu */}
                  <div className={menuToggle ? 'dropdown-menu-wrapper active' : 'dropdown-menu-wrapper'}>
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

                  {/* chatbot credit */}
                  <div className='chatbot-creator chatbox-creator'>
                    <p>Powered by</p>
                    <a href="https://www.wipdata.com/" target="_blank" rel="noreferrer">
                      <img src={logo} alt="site logo" />
                    </a>
                  </div>

                  <div className='chatbox-header-right-options'>
                    {/* search */}
                    <div className='chatbox-header-icon' onClick={() => setSearchToggle(!searchToggle)}>
                      <FiSearch />
                    </div>

                    {/* audio call */}
                    <div className='chatbox-header-icon' onClick={()=>callModel('audio')}>
                      <FiPhoneCall />
                    </div>

                    {/* video call */}
                    <div className="chatbox-header-icon" onClick={()=>callModel('video')}>
                      <BsCameraVideo />
                    </div>

                    <div className='chatbox-header-icon' onClick={() => setMenuToggle(!menuToggle)}>
                      { !menuToggle ? <FiMoreVertical /> : <img src={x} alt="cancle" /> } 
                    </div>

                    <div className='chatbox-header-icon desktop-hide'>
                      <BsXLg />
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* chat conversation group body */}
            <div className="chat-conversation-wrapper chatbox-conversation">
              <ul ref={chatRef} className='message-body'>

                {/* plain text bubble */}
                <li className='message-bubble-agent'>
                  <span>Hi, I'm WipData Chatbot</span>
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
                {/* <li className="message-product-carousel">
                  <MessageProduct />
                </li> */}

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

                {/* message by visitor */}
                <li className="message-bubble-visitor">
                  <span>Yes, Please.</span>
                </li>

                {/* message by agent */}
                <li className="message-bubble-agent">
                  <span>Ok I'm transferning to Anna.</span>
                </li>

                {/* message by agent */}
                <li className="message-bubble-agent">
                  <img src={bot} alt="rob" />
                  <span>Hi, This is Anna. How would you like to personalize your order?</span>
                </li>

              </ul>
            </div>

            {/* chat footer */}
            <div className="chatbot-footer chatbox-footer">
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
      </div>
    </>
  )
}

export default AdminMessageBody