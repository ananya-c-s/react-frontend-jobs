import React from 'react'
const Card = ({children,bg}) => {
  return (
     <div class={`${bg} p-6 rounded-lg shadow-md`}>
        {children}
    </div>
  )
}

export default Card