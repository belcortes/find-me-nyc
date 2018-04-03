import React from 'react'
    
const Result = (props) => {

  return (
    <div id="result-item">
      <h2>Result</h2>
      <p>{props.result.agency_name}</p>
    </div>
  )
}

export default Result