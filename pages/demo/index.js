import emailjs from '@emailjs/browser';
import React, { useEffect, useRef, useState } from 'react';
import { BsCheck2Circle } from 'react-icons/bs';
// import { useNavigate, useSearchParams } from 'react-router-dom';
import moment from 'moment';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Oval } from 'react-loader-spinner';
import Layout from '../../components/Layout';
import { client } from '../../lib/client';

function DemoScreen({footers, headers}) {

  const [success, setSuccess] = useState(false); 
  const [loading, setLoading] = useState(false); 

  const [name, setName] = useState("")
  const [email_address, setEmail] = useState("")
  const [company_name, setCompany] = useState("")
  const [phone_number, setPhone] = useState("")
  const [plan, setPlan] = useState("")
  const [date, setDate] = useState(moment().format("LLLL"))

  // const [searchParams, setSearchParams] = useSearchParams()
  // const que = searchParams.get('plan')

  const form = useRef();
  // const navigate = useNavigate()
  const router = useRouter()

  const {plan:queryPlan} = router.query

  const sendEmail = async (e) => {
    e.preventDefault();
      try {
      setLoading(true)
      emailjs.sendForm('service_afz61tq', 'template_azgg7ca', form.current, 'UFaW8CeHmKHyt44KQ')
      .then((result) => {
          console.log(result.text);
          setLoading(false)
          setSuccess(true)
      }, (error) => {
          console.log(error.text);
          setSuccess(false)
          setLoading(false)
      });
      
    } catch (error) {
      console.log(error)
    }

    // send data into google sheet
    try {
      fetch('/api/sheetApi', {
        method: 'POST',
        // body: JSON.stringify(data),
        body: JSON.stringify({name, email_address, phone_number, company_name, plan, date}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.log("Google sheet append error", error)
    }
  };


  useEffect(() => {
    if(success) {
      router.push('/thankyou')
    }
    if(queryPlan === undefined) {
      setPlan("Not choose")
    } else {
      setPlan(queryPlan)
    }
    
  },[success, loading, queryPlan, plan])
  
  return (
    <>
      <Layout title="Demo" headers={headers} footers={footers}>
        <section className="demo-section">
          <div className="container">
            {/* {success && <Loading />} */}
            <div className="demo-wrapper">

              {/* content */}
              <div className="demo-content">
                <h1>See ACEVA in action!</h1>
                <h2>In this demo, we’ll show you how you can:</h2>

                {/* wrapper */}
                <div className="demo-list-wrapper">

                  {/* item */}
                  <div className="demo-list-item">

                    {/* icon */}
                    <div className="demo-list-thumb">
                      <BsCheck2Circle />
                    </div>

                    {/* content */}
                    <div className="demo-list-content">
                      <h3> Build Intelligent Virtual Assistants</h3>
                      <p>Amplify engagement, increase conversions, and deliver delightful experiences to your customers across popular messaging channels</p>
                    </div>
                  </div>

                  {/* item */}
                  <div className="demo-list-item">

                    {/* icon */}
                    <div className="demo-list-thumb">
                      <BsCheck2Circle />
                    </div>

                    {/* content */}
                    <div className="demo-list-content">
                      <h3> Use Powerful Analytics</h3>
                      <p>Tap into actionable insights that help you analyze conversations and improve customer satisfaction</p>
                    </div>
                  </div>

                  {/* item */}
                  <div className="demo-list-item">

                    {/* icon */}
                    <div className="demo-list-thumb">
                      <BsCheck2Circle />
                    </div>

                    {/* content */}
                    <div className="demo-list-content">
                      <h3> Drive Meaningful and Measurable Outcomes</h3>
                      <p>Improve key CX metrics to drive customer retention & increase the Lifetime value</p>
                    </div>
                  </div>

                </div>

                  {/* <div className="demo-brand-wrapper">
                    <h2>Trusted by the World's Leading Brands</h2>
                      <div className="demo-brand_wrap">

                        <div className="brand_item demo-brand-item">
                          <img src={brand1} alt="chatimize" />
                        </div>

                      </div>
                  </div> */}
                  
              </div>

              {/* form */}
              <div className="form-wrapper">
                <form ref={form} onSubmit={(e) => sendEmail(e)}>
                  <h2>Request a demo</h2>

                  {/* name */}
                  <div className="form-group">
                    <input onChange={(e) => setName(e.target.value)} required type="text" placeholder='Full name' name='name' />
                  </div>

                  {/* companay name */}
                  <div className="form-group">
                    <input required onChange={(e) => setCompany(e.target.value)} type="text" placeholder='Company name' name='company_name' />
                  </div>

                  {/* email */}
                  <div className="form-group">
                    <input required onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email address' name='email_address' />
                  </div>

                  {/* number */}
                  <div className="form-group">
                    <input onChange={(e) => setPhone(e.target.value)} type="number" placeholder='Mobile number' name='phone_number' />
                  </div>

                  {/* plan */}
                  <input type="text" readOnly value={plan} hidden name='plan' />
                  <input type="text" readOnly value={date} hidden name='date' />

                  <div className="form-group">
                    <p>By registering, you confirm that you agree to the storing and processing of your personal data by ACEVA as described in the <Link href="/page">Privacy Statement.</Link> </p>
                  </div>

                  <div className="form-group">
                    <button className="btn demo-submit" type='submit'>
                      
                      {loading ? 
                        <Oval
                          height={20}
                          width={20}
                          color="white"
                          visible={true}
                          ariaLabel='oval-loading'
                          secondaryColor="white"
                          strokeWidth={4}
                          strokeWidthSecondary={4}
                        /> : "Submit"}  
                    </button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default DemoScreen

export async function getServerSideProps() {

  const headerQuery = '*[_type == "header"]'
  const footerQuery = '*[_type == "footer"]'

  const headers = await client.fetch(headerQuery)
  const footers = await client.fetch(footerQuery)

  return {
    props: {
      headers,
      footers
    }
  }
}