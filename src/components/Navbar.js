import React from'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <Link to="/" className="navbar-brand" >Form Full</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Form List</Link>
              </li>

              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create Form</Link>
              </li>             

            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;