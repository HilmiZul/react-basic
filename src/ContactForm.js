import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailError: false,
      pesan: '',
      pesanError: false,
      btnDisable: true,
    }
  }

  cekEmail(event) {
    const inputVal = event.target.value;
    const isEmpty = inputVal.length < 1;
    this.setState({
      email: inputVal,
      emailError: isEmpty,
      btnDisable: false,
    });
    // jika input email kosong / kurang dari 1
    // maka button disabled
    if (this.state.emailError) {
      this.setState({btnDisable: true})
    } else {
      this.setState({btnDisable: true})
    }
  }

  cekPesan(event) {
    const inputVal = event.target.value;
    const isEmpty = inputVal.length < 1;
    this.setState({
      pesan: inputVal,
      pesanError: isEmpty,
      btnDisable: false,
    });

    if (inputVal.length < 1) {
      this.setState({
        btnDisable: true
      })
    } else {
      this.setState({btnDisable: false})
    }
  }

  render() {
    let emailErrorText;
    let pesanErrorText;
    if (this.state.emailError) {
      emailErrorText = (
        <p className="alert alert-danger">
          email ga boleh kosong...
        </p>
      );
    }

    if (this.state.pesanError) {
      pesanErrorText = (
        <p className="alert alert-danger">
          pesan ga obleh kosong...
        </p>
      );
    }
    return (
      <form>
        <div className="form-group">
          <input 
            onChange={(event) => {this.cekEmail(event)}}
            type="email" 
            className="form-control" 
            placeholder="email" 
          />
          {emailErrorText}
        </div>
        <div className="form-group">
          <textarea 
            onChange={(event) => {this.cekPesan(event)}}
            className="form-control" 
            rows="5" 
            placeholder="tinggalkan pesan..." 
          />
          {pesanErrorText}
        </div>
        {/* i'm stuck in btn disabled 😫 */}
        <button className="btn btn-info">Kirim</button>
      </form>
    );
  }
}

export default Contact;