import React from 'react'

export default function About(props) {
  return (
    <div className={`container my-3 text-${props.mode==='light'? 'dark':'light'}`}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sunt nobis eligendi mollitia vitae vero explicabo facere dolor est, dignissimos sequi reprehenderit, minima delectus iure modi facilis saepe quia doloremque? Iste, sit consequuntur! Sint quaerat consequuntur, dolor numquam voluptate dicta.
    </div>
  )
}
