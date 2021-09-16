import React, { Component } from 'react'
import MyContext from './MyContext';
import PropTypes from 'prop-types';

class Provider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, side) {
    this.setState({
      cars: {
        ...this.state.cars,
        [car]: side,
      },
    });
  };

  render () {
    const { children } = this.props;
    
    const context = {
      ...this.state,
      moveCar: this.moveCar,
    };
    
    return (
      <MyContext.Provider value = { context }>
        { children }
      </MyContext.Provider>
    )
  }
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;