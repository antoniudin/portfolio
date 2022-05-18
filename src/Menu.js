import React from 'react'

export default function Menu(props) {
  return (
    <div className={`${props.menu}==false? 'menu':'redmenu'`}>
        <a href="#about">03. About</a>
        <a href="#skills">04. Skills</a>
      </div>
  )
}
