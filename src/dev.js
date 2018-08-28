import './dev.scss';

import ReactModal from './main';

/*===example start===*/
// install: npm install afeiship/react-modal --save
// import : import ReactModal from 'react-modal'

class App extends React.Component {
  state = {
    visible: false
  }

  onShow = e => {
    this.md.present();
  };

  onHide = e => {
    this.md.dismiss();
  };

  _onChange = e =>{
    console.log(e.target.value);
  };

  render() {
    return (
      <div className="hello-react-modal">
        <button onClick={this.onShow}>ShowModel</button>

        <ReactModal onChange={this._onChange} className="my-modal" ref={md => this.md = md}>
          <h1>I am the title</h1>
          <button onClick={this.onHide}>test modal</button>
        </ReactModal>
      </div>
    )
  }
}

/*===example end===*/


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
