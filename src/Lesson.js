import React from 'react';

class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isModalOpen: false};
  }

  bukaModal() {
    this.setState({isModalOpen: true});
    console.log('modal should be open...');
  }

  tutupModal() {
    this.setState({isModalOpen: false});
  }

  render() {
    let modal;
    if (this.state.isModalOpen === true) {
      modal = (
        <div className="modal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{ this.props.name }</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div className="modal-footer">
                <button
                  className='modal-close-btn'
                  onClick={() => this.tutupModal()}
                >
                Tutup
              </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="col-md-3">
        <div className="card">
          <div className="card-body" onClick={() => {this.bukaModal()}}>
            <p className="text-center">{ this.props.name }</p>
            <img src={ this.props.image } alt="" />
          </div>
        </div>
        {modal}
      </div>
    )
  }
}

export default Lesson;