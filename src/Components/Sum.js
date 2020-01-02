import React from 'react';
import PropTypes from 'prop-types';
 
function Sum(props) {
  return <h1> { props.a } + {props.b} = {props.a + props.b} </h1>;
}
Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default Sum;

// class ClickCounter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {clicks: 0};
//   }

//   render() {
//     return <div onClick={() =>
//     { this.setState({clicks: this.state.clicks + 1}); }}>
//     this div has been clicked { this.state.clicks } times.
//     </div>
//   }
// }

// export default ClickCounter;