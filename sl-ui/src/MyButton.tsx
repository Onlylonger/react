import React from 'react'

interface MyButtonProps {
  type?: 'primary'
}

export const MyButton: React.FC<MyButtonProps> = ({ type }) => {
  return (
    <button className="my-button flex text-red-500">
      my button: type {type}
    </button>
  )
}
