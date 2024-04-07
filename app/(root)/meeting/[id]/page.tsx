import React from 'react'

// Note: Param name is same as folder param name -> id
const Meeting = ({ params }: { params: { id: string } }) => {
  return (
    <div>Meeting Room: #{params.id}</div>
  )
}

export default Meeting