import './dev.scss';
import {ReactModal,ReactModalCtrl} from './main';


class App extends React.Component{
  componentDidMount(){
    ReactModalCtrl.createInstance();
  }

  _click(){
    ReactModalCtrl.show({
      header:'React Modal',
      body:'Are you feel good today?',
      buttons:[{
        text:'option1',
        onClick:this._option1.bind(this)
      },{
        text:'option2',
        onClick:function(item){
          console.log('option2',item);
        }
      },{
        text:'CLOSE',
        onClick:function(item){
          ReactModalCtrl.hide();
        }
      }]
    });
  }

  _option1(){
    console.log('option1 action!!!');
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
