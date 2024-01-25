import { Button } from 'bootstrap'
import React, { useState } from 'react'

export default function Curd() {
  const [submit, setsubmit] = useState('')
  return (
    <div>
      
      <Button onClick ={setsubmit}>SIGN IN</Button>
    </div>
  )
}
