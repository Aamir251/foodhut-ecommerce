
import React from "react";
import PropTypes from 'prop-types';

const Rating = ({ value, color }) => {
  return (
    <p className='my-3.5'>
      <span>
        <i style = {{color}} className = {value >= 1 ? 'fas fa-star' : value >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'}> </i>
      </span>
      <span>
        <i style = {{color}} className = {value >= 2 ? 'fas fa-star' : value >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'}> </i>
      </span>
      <span>
        <i style = {{color}} className = {value >= 3 ? 'fas fa-star' : value >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'}> </i>
      </span>
      <span>
        <i style = {{color}} className = {value >= 4 ? 'fas fa-star' : value >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'}> </i>
      </span>
      <span>
        <i style = {{color}} className = {value >= 5 ? 'fas fa-star' : value >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'}> </i>
      </span>

      {/* <span className='text-gray-400'> {text && text} </span> */}
    </p>
  )
}

Rating.defaultProps = {
  color : "gray"
}

Rating.propTypes = {
  value : PropTypes.number.isRequired,
  color : PropTypes.string
}

export default Rating;