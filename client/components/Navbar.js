import React, { Component } from 'react';
import { Link } from 'react-router-dom';;

class Navbar extends Component {
  render() {
    return (
      <div>
        <h1> Shake and Stir </h1>
        <nav>
          <div>
            <Link to='/home'> Home </Link>
          </div>
        </nav>
        <hr />
      </div>
    )
  }
}

export default Navbar