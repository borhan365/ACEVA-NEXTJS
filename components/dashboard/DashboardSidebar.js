import React from 'react'
import avatar from '../../assets/images/wipdata-logo.png'
import SocialMedia from '../../components/SocialMedia'

function DashboardSidebar() {
  return (
    <>
      <div className="dashboard-sidebar">
        <div className="dashboard-profile">
          <img src={avatar} alt="" />
        </div>
        <div className="dashboard-sidebar-content">
          <h2>Md Borhan Uddin</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ullam placeat saepe eum ducimus iure rerum nemo ratione numquam corrupti.</p>
          <div className="footer-item-social dashboard-sidebar-social-media">
            <SocialMedia />
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardSidebar