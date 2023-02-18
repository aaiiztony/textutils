import React from 'react';
import PropTypes from 'prop-types'


const About = (props) => {
  return (
    <div className= {`text-${props.mode==='white'?'dark':'white'} text-center mx-auto my-5`}>
     <h2>Hi, This is Tony learning React</h2>
      <p>We'll be there soon!</p>
    </div>
  )
}
About.propTypes = {
  mode: PropTypes.string,
};
export default About
