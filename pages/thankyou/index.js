import Link from 'next/link';
import React from 'react';
import Layout from '../../components/Layout';
import { client } from '../../lib/client';

const successIcon = '/assets/images/icons/mail.png';

function ThankYouScreen({headers, footers}) {
  
  return (
    <>
      <Layout headers={headers} footers={footers}>
        <div className="success-wrapper">

          <div className="success-content">
            <div className="success-icon">
              <img src={successIcon} alt="icon" />
            </div>
            <h2>Success</h2>
            <p>your message has been successfully send.</p>
          </div>
          <Link href="/"><button className='btn success-btn'>Go to Home</button></Link>
        </div>
      </Layout>
    </>
  )
}

export default ThankYouScreen

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