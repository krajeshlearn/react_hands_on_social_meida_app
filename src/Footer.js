import React from 'react'

const Footer = () => {
  var date =  new Date();
  return (
    <footer className='Footer'>
      <p>Copyright &copy; {date.getFullYear()}</p>
    </footer>
  )
}

export default Footer