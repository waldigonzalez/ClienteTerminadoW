import React from "react";

const Nav =()=> {
    return(

        <nav className="navbar navar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/">Inicio</a>
                <button className="navar-toggler"type="button"data-togle="collapse" data-target="#navbarNav">
                 <span className="navbar-toggler-icon"></span>
                 </button>
                 <div className="collapse navbar-collapse" id="navbarNav">
                   <ul className="navbar-nav">
                    <il className="navbar-item">
                        <a className="nav-link" href="/produtos">+Libros</a>
                    </il>
                   </ul>
                 </div>
            </div>
        </nav>
    )
}

export default Nav;