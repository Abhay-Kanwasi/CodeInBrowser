import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="text-center">
          <a className="navbar-brand">
            <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '24px', fontWeight: 'bold', color: '#ffffff' }}>
              Welcome to CodeInBrowser
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
