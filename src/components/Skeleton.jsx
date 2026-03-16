import React from 'react'
import './skeleton.css'
const Skeleton = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton title"></div>
      <div className="skeleton text"></div>
      <div className="skeleton text short"></div>
    </div>
  )
}

export default Skeleton;