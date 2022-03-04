import React from 'react'

export const Footer = () => {
  let footerStyle = {
    marginTop: "20px",
    width: "100%"
  }
  return (
    <footer className='bg-dark text-light py-2' style ={footerStyle}>
      <p className='text-center'>Copyright &copy; mytodoslist.com</p>
    </footer>
  )
}
