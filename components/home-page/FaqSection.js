import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import { useState } from 'react'
import Image from 'next/image'
const appThumb = '/assets/images/bg/app-bg.png'

const faq = [
  {
    question: 'What is a chatbot and how it works?',
    answer: 'A chatbot is a computer program that can simulate human communication via text chats. Chatbots are programmed with the elements of artificial intelligence to recognize elements of speech and engage in simple tasks based on the triggers. Many chatbots can be integrated with messaging apps or websites.'
  },
  {
    question: 'What are chatbots used for?',
    answer: 'Chatbots are used in online conversations, usually replacing a human operator of a live chat. They can be a powerful tool to engage your website visitors, answer FAQs, generate leads, and save abandoned carts.'
  },
  {
    question: 'Who offers the best chatbots?',
    answer: 'The best chatbot is the one that fully addresses your specific needs. When choosing a chatbot for your website, you must ask yourself: What integrations am I the most interested in? In which scenarios do I want to use the chatbot? How advanced does the chatbot need to be? Once you have your answers, you’ll be able to choose the best chatbot builder for you.'
  },
  {
    question: 'Are chatbots free?',
    answer: 'No, But we provide customize plans to suit your needs.'
  },
  {
    question: 'Do I need to know coding to build a chatbot?',
    answer: 'You don’t need any coding skills to build chatbots. With an advanced customer service platform, like ACEVA, you can easily create and customize chatbots by yourself, without coding.'
  },
  {
    question: 'How to make a chatbot?',
    answer: 'As soon as you have your ACEVA account, our technical consultant will go through your business needs and provide a suitable chatbot solution.'
  },
  {
    question: 'What are the benefits of using chatbots?',
    answer: 'Increased sales, better lead generation and nurturing, 24/7 automated customer support, and lower customer service costs are the main benefits of using a chatbot. Additionally, a chatbot on your website can increase customer engagement and increase team productivity.'
  },
]

function FaqSection() {

  const [activeFaq, setActiveFaq] = useState(null);

  const toggle = (index) => {
    if(index === activeFaq) {
      setActiveFaq(null)
    } else {
      setActiveFaq(index)
    } 
  }

  return (
    <section className='app-progress-section faq-section'>
      <div className="container">

        {/* title */}
        <div className='section-title'>
          {/* <span className='sub-title purple-color'>FAQ</span> */}
          <h2>Frequently asked questions</h2>
        </div>

        <div className="app-progress-wrapper faq-container">

          {/* thumb */}
          <div className="app-progress-thumb">
            <Image fill objectFit='contain' src={appThumb} alt="app thumb" />
          </div>

          <div className="faq-wrapper">

            {/* item */}
            {
              faq?.map((item, index) => (
                <div key={index} className={activeFaq === index ? "faq-item active" : "faq-item"}>
                  <div className="faq-title" onClick={() => toggle(index)}>
                    <h2>{item.question}</h2>
                    <AiOutlinePlus />
                  </div>
                  <div className="faq-description">
                    <p>{item.answer}</p>
                  </div>
                </div>   
              ))
            }         
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqSection