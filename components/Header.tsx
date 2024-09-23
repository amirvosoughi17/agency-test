import React from 'react'

export const Header = ({title = ""} : {title : string}) => {
  return (
    <header className=''>
     <h2>{title}</h2>
    </header>
  )
}
