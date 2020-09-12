import React from 'react';

class Header extends React.Component {
  render() {
    let title = "Hello, World!";
    let subtitle = "Selamat datang di Dunia Pemrograman";
    let subtitle2 = "Pelajaran";
    return(
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-info">{title}</h1>
            <p>{subtitle}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="page-header mt-5">
              <h3>{subtitle2}</h3>
              <hr />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;