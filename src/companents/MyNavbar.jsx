import React from "react";
import { Link } from "react-router-dom";
import NavImg from "../img/img1.png"



export default function MyNavbar() {
    return (
        <nav className="navbar navbar-expand-lg  navbar-dark">
            <div className="container-fluid">
                <p>Shakalad</p>
                <p className="navbar-brand">
                    <img src={NavImg} alt="" />
                </p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link>
                            <p className="nav-link active" aria-current="true">Home</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Posts">
                                <p className="nav-link">Posts</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Cars">
                                <p className="nav-link " aria-disabled="true">Cars</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Books">
                               <p className="nav-link " aria-disabled="true">Books</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Users">
                                <p className="nav-link " aria-disabled="true">Users</p>
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-light" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}