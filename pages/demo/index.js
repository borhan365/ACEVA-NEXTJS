import emailjs from '@emailjs/browser';
import React, { useEffect, useRef, useState } from 'react';
import { BsCheck2Circle } from 'react-icons/bs';
// import { useNavigate, useSearchParams } from 'react-router-dom';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Loading from '../../components/Loading';
import { client } from '../../lib/client';

function DemoScreen({footers, headers}) {

  const [success, setSuccess] = useState(false); 
  const [loading, setLoading] = useState(false); 

  // const [searchParams, setSearchParams] = useSearchParams()
  // const que = searchParams.get('plan')

  const form = useRef();
  // const navigate = useNavigate()
  const router = useRouter()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_orunkvl', 'template_qysy2fg', form.current, 'FCx4j_tOGW-D-ZBze')
      .then((result) => {
          console.log(result.text);
          setSuccess(true)
      }, (error) => {
          console.log(error.text);
          setSuccess(false)
      });
  };

  useEffect(() => {
    if(success) {
      router.push('/thankyou')
    }
  },[success])

  return (
    <>
      <Layout headers={headers} footers={footers}>
        <section className="demo-section">
          <div className="container">
            {success && <Loading />}
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
                <form ref={form} onSubmit={sendEmail}>
                  <h2>Request a demo</h2>

                  {/* first & last name */}
                  <div className="form-row">

                    {/* first name */}
                    <div className="form-group">
                      <input required type="text" placeholder='First name' name='first_name' />
                    </div>

                    {/* last name */}
                    <div className="form-group">
                      <input required type="text" placeholder='Last name' name='last_name' />
                    </div>
                  </div>

                  {/* companay name */}
                  <div className="form-group">
                    <input required type="text" placeholder='Company name' name='company_name' />
                  </div>

                  {/* Job title */}
                  <div className="form-group">
                    <input required type="text" placeholder='Job title' name='job_title' />
                  </div>

                  {/* email */}
                  <div className="form-group">
                    <input required type="email" placeholder='Email address' name='email_address' />
                  </div>

                  {/* password */}
                  <div className="form-group">
                    <input type="password" placeholder='Password' name='password' />
                  </div>

                  {/* plan */}
                  <input type="text" hidden name='plan' />

                  <div className="form-group">
                    <p>By registering, you confirm that you agree to the storing and processing of your personal data by ACEVA as described in the <Link href="/page">Privacy Statement.</Link> </p>
                  </div>

                  <div className="form-group">
                    <button className="btn demo-submit" type='submit'>Submit </button>
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