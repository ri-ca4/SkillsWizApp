import React from 'react'
import { Link } from 'react-router-dom'

const Results = (props) => {
    const {value} = props
  return (
    <div>
        <div>
            results: value is {value}
        </div>
        <button><Link to='/'>Back</Link></button>
    </div>
    )
}

export default Results
