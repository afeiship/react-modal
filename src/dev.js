import './dev.scss';
import {ReactModal,ReactModalCtrl} from './main';


class App extends React.Component{
  componentDidMount(){
    ReactModalCtrl.createInstance();
  }

  _click(){
    ReactModalCtrl.show({
      header:'React Modal',
      body:'Are you feel good today?'
    });
  }

  render(){
    return (
      <div className="hello-react-modal">
        <button onClick={this._click.bind(this)}>TEST MODAL</button>
      </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
