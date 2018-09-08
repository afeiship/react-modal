import './dev.scss';

import ReactModal from './main';

/*===example start===*/
// install: npm install afeiship/react-modal --save
// import : import ReactModal from 'react-modal'

class ChildView extends React.Component {

  get title() {
    return Math.random();
  }

  render(){
    return this.title;
  }
}

class App extends React.Component {
  state = {
    value: false,
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
        <button onClick={this.onShow} style={{position:'relative',zIndex:10}}>ShowModel</button>
        <ReactModal destroyable onChange={this._onChange} className="my-modal" ref={md => this.md = md}>
          <h1>I am the title {this.title}</h1>
          <ChildView/>
          <button onClick={this.onHide}>Hide Me</button>
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
