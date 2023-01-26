import React from 'react'
import { client } from '../../lib/client'

function index({footers}) {
  console.log("footer", footers)
  return (
    <div>index</div>
  )
}

export default index

export const getServerSideProps = async () => {
  const query = '*[_type == "footer"]'
  const footers = await client.fetch(query)

  if (!footers.length) {
    return {
      props: {
        footers: [],
      },
    }
  } else {
    return {
      props: {
        footers,
      },
    }
  }
}