import axios from 'axios'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { AiOutlineDelete } from 'react-icons/ai'
import { BiVolumeMute } from 'react-icons/bi'
import { BsFillChatRightTextFill } from 'react-icons/bs'
import { FaTelegramPlane } from 'react-icons/fa'
import { MdRefresh } from 'react-icons/md'
import { VscArchive } from 'react-icons/vsc'
import { Oval, ThreeDots } from 'react-loader-spinner'

const book = '../../assets/images/icons/book.png'
const bot = '../../assets/images/icons/robot.png'
const robot = "../../assets/images/aceva.png"
const logo = '../../assets/images/wipdata-logo.png'

// product images
const x = '../../assets/images/icons/x.png'

function Chatbot() {

  const [toggle, setToggle] = useState(false); 
  const [resize, setResize] = useState(false);
  const [formToggle, setFormToggle] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const [width, setWidth] = useState(typeof window != "undefined" && window.innerWidth); 
  const [chat, setChat] = useState([])
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const chatRef = useRef(null); 

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" })
    error && toast('Error')
  }, [message, chat])

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

  const handleSendMessage = async (e, msg) => {
    e?.preventDefault()
    if (!message && !msg) {
      console.log('retrun from onsubmit')
      return
    }
    setLoading(true)
    const data = { message: message || msg };
    // const config = {
    //   headers: {
    //     'Content-Type' : "application/json"
    //   }
    // }
    await axios.post(`https://aibotapis.azurewebsites.net/api/openAi/website`, data).then( res => {
       console.log(res)
       setChat([...chat, {bot: res.data, user: message}])
       setMessage('')
       setLoading(false)
      }).catch( error => {
        setLoading(false)
        console.log(error)
        setError(true)
        return Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message,
        })
      })
  }

  return (
    <>
      <section className='chatbot-section'>
      <div className={resize ? "chatbot-widget-wrapper full-screen" : "chatbot-widget-wrapper"}>

          {/* chatbot widget wrapper */}
          <div className={toggle ? "chatbot-widget active" : "chatbot-widget"}>

            {/* user contact form */}
            {/* <form onSubmit={handleSubmit} className={!formToggle ? "chatbot-user-form active" : "chatbot-user-form"}>
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
            </form> */}
            
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
                    <h3>ACEVA</h3>
                  </div>
                </div>

                {/* agent right side options */}
                <div className="chatbot-widget-header-right">

                  {/* chatbot credit */}
                  {/* <div className='chatbot-creator'>
                    <p>Powered by</p>
                    <a href="https://www.wipdata.com/" target="_blank" rel="noreferrer">
                      <img src={logo} alt="site logo" />
                    </a>
                  </div> */}

                  <div className='chatbot-widget-header-right-options'>
                    {/* options */}
                    {/* <div className='chatbot-widget-options' onClick={() => setMenuToggle(!menuToggle)}>
                      {!menuToggle ? <BsThreeDotsVertical /> : <BsXLg className='cross-chatbot-dropdown' />}
                    </div> */}

                    {/* refresh icon */}
                    <div className='chatbot-widget-minimize display-block desktop-hide'>
                      <MdRefresh onClick={() => setChat([])}/>
                    </div>

                    {/* resize */}
                    {/* <div className='chatbot-widget-minimize' onClick={handleResize}>
                      <AiOutlineFullscreen />
                    </div> */}

                    {/* minimize */}
                    <div /*className="chatbot-widget-minimize"*/ onClick={handleToggle}>
                      {/* <IoIosArrowDown /> */} <img src={x} style={{width:'15px', margin:'0 0 2px 5px'}} alt="x" />
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
                {
                  chat?.map((item, mIndex) => (
                  <Fragment key={mIndex}>
                      {/* message by visitor */}
                      <li className="message-bubble-visitor">
                        <span>{item.user}</span>
                      </li>
                     <li className='message-bubble-agent'>
                      <span>{item.bot.text}</span>
                    </li>
                  </Fragment>
                  ))
                }
                  {
                    loading &&   <ThreeDots 
                    height="35" 
                    width="40" 
                    radius="2"
                    color="grey" 
                    ariaLabel="three-dots-loading"
                    visible={true}
                    />
                  }

                  <li className='useref-li' ref={chatRef}></li>
              </ul>
            </div>

            {/* chat footer */}
            <form onSubmit={handleSendMessage}>
                <div className="chatbot-footer chatbox-footer">
                  <div className="chatbot-footer-input-box">
                    <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder='Start conversation...' />
                    <button className='chatbot-send-message-button'>
                      {loading ? <Oval
                                    height={20}
                                    width={20}
                                    color="white"
                                    visible={true}
                                    ariaLabel='oval-loading'
                                    secondaryColor="white"
                                    strokeWidth={4}
                                    strokeWidthSecondary={4}
                                  /> : <FaTelegramPlane />}
                    </button>
                  </div>
                </div>
              </form>
          </div>

          {/* chatbot open icon && if resize is true the hide chatbot icon */}
          { (resize || toggle) ? "" : <div className='chatbot-icon' onClick={handleToggle}>
            {/* {toggle ? <img src={x} alt="x" /> : } */} <BsFillChatRightTextFill />
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