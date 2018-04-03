import React from 'react'

import Result from './Result'
    
const ResultList = (props) => {

  return (
    <div id='result-list'>
      <h1>Result List</h1>
      {
        props.results.map((result, index) => {
          {console.log(result.agency_name)}
          if (index === 20){return false}
          return (

            <Result
              result={result}
              key={index}
              index={index} />
          )
        })
      }
    </div>
  )
}

export default ResultList