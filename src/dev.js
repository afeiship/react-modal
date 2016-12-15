import './dev.scss';
import {ReactModal,ReactModalCtrl} from './main';

class Body extends React.Component{
  render(){
    return (
      <div className="cus-body">
        <p><span className="bd">Hi Man!</span></p>
        <p>I am from <strong className="bd">Baidu</strong></p>
        <p><img src="http://www.baidu.com/img/bd_logo1.png" width="270" height="129" /></p>
      </div>
    );
  }
}


class App extends React.Component{
  componentDidMount(){
    ReactModalCtrl.createInstance();
  }

  _click(){
    ReactModalCtrl.show({
      header:'Customize <b style="color:#F00">Modal</b>',
      body:'Are you feel <b>good</b> today?',
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


  _click2(){
    ReactModalCtrl.show({
      header:'<b>Title</b><span style="color:#F00">With Color</span>',
      body:<Body />,
      buttons:[]
    });
  }

  _option1(){
    console.log('option1 action!!!');
  }

  render(){
    return (
      <div className="hello-react-modal">
        <button onClick={this._click.bind(this)}>TEST MODAL</button>
        <button onClick={this._click2.bind(this)}>TEST MODAL- Component body</button>
      </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
