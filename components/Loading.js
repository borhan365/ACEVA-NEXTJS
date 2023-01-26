import React from 'react'

function Loading() {
  return (
    <div className="xui-loader xui-loader-small xui-button--loader xui-loader-retain-layout" role="progressbar">
      <div className="xui-loader--dot"></div>
      <div className="xui-loader--dot"></div>
      <div className="xui-loader--dot"></div>
    </div>
  )
}

export default Loading