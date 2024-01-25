import React from 'react'
import ChildComponent from './ChildComponent';

export default function ParentComponent() {

  const dataToSend = 'Hello from Parent!';



  return (
    <div>
      <div>
        <h2>Parent Component</h2>
        {/* Pass data to the child component using props */}
        <ChildComponent dataFromParent={dataToSend} />
      </div>
    </div>
  )
}
