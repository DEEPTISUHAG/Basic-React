import React from 'react'

export default function ChildComponent(props) {

  return (
    <div>ChildComponent
        <div>
      <h2>Child Component</h2>
      {/* Access the data passed from the parent component using props */}
      <p>Data from Parent: {props.dataFromParent}</p>
    </div>
    </div>
  )
}
