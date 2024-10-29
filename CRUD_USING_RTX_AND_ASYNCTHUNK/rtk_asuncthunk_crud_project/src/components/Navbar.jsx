import React from 'react'

function Navbar() {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className='container-fluid'>
  <a className="navbar-brand" href="#">TRK</a>

  <div className="collapse navbar-collapse">
    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link" href='#'>Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href='#' >All Post</a>
      </li>
    </ul>

      <input className="form-control mr-sm-2 w-50" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </div>
  </div>
</nav>
    </>
  )
}

export default Navbar