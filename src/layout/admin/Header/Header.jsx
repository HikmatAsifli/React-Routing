import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary custom-navbar">
      <div className="container">
        <a className="navbar-brand" href="/">Admin</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/admin">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/users">Users</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  to="/admin/add">Add Product</Link>
            </li>
          </ul>
        </div>
        <form class="justify-content-end">
          <button class="btn btn-outline-success me-2" type="button">Login</button>
          <button class="btn btn-sm btn-outline-secondary" type="button">Register</button>
        </form>
      </div>
    </nav>
  )
}

export default Header