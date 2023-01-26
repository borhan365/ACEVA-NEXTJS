import React from 'react'
import productOne from '../../assets/images/icons/server1.png'
import productTwo from '../../assets/images/icons/server2.png'
import productThree from '../../assets/images/icons/server3.png'
import {Link} from 'react-router-dom'

function DashboardFullContent() {
  return (
    <>
      <div className="dashboard-full-area">
        <div className="dashboard-title">
          <h3>Your Ordered Items</h3>
        </div>
        <table>
          <tr>
            <th className='table-header'>Image</th>
            <th className='table-header'>Product Name</th>
            <th className='table-header'>Status</th>
            <th className='table-header'>Register Date</th>
            <th className='table-header'>Expire Date</th>
          </tr>

          {/* item */}
          <tr>
            <td className='dashboard-list-image'>
              <img src={productOne} alt="product one" />
            </td>
            <td>
              <h2 className='dashboard-list-title'>Starter Hosting Packege</h2>
            </td>
            <td> <span className='dashboard-list-product-status-active'>Active</span></td>
            <td> <span className='dashboard-list-register-date'>22/07/2022</span></td>
            <td> <span className='dashboard-list-expire-date'>22/07/2022</span></td>
          </tr>

          {/* item */}
          <tr>
            <td className='dashboard-list-image'>
              <img src={productThree} alt="product three" />
            </td>
            <td>
              <Link to="/product"><h2 className='dashboard-list-title'>Starter Hosting Packege</h2></Link>
            </td>
            <td> <span className='dashboard-list-product-status-active'>Active</span></td>
            <td> <span className='dashboard-list-register-date'>22/07/2022</span></td>
            <td> <span className='dashboard-list-expire-date'>22/07/2022</span></td>
          </tr>

          {/* item */}
          <tr>
            <td className='dashboard-list-image'>
              <img src={productTwo} alt="product two" />
            </td>
            <td>
              <h2 className='dashboard-list-title'>Starter Hosting Packege</h2>
            </td>
            <td> <span className='dashboard-list-product-status-active'>Active</span></td>
            <td> <span className='dashboard-list-register-date'>22/07/2022</span></td>
            <td> <span className='dashboard-list-expire-date'>22/07/2022</span></td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default DashboardFullContent