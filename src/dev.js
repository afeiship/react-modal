import './dev.scss';

import {ReactModal, ReactModalCtrl} from './main';

//http://www.baidu.com/img/bd_logo1.png

class Utils {
  static alert(){
    ReactModalCtrl.createInstance({
      backdropOptions:{
        zIndex:11,
        opacity:0.1
      }
    });


    ReactModalCtrl.show({
      header: null,
      body: 'test....',
      buttons: [{
        text: 'OK',
        onClick: function(){
          ReactModalCtrl.hide(()=>{
            console.log('hide...')
          })
        }
      }]
    },function(){
      console.log('show...')
    })
  }
}
class Body extends React.Component{
  _click(){
    ReactModalCtrl.hide();
  }
  render(){
    return (
      <div className="cus-body">
        <p><span className="bd">Hi Man!</span></p>
        <p>I am from <strong className="bd">Baidu</strong></p>
        <p><img onClick={this._click.bind(this)} src="http://img4.cache.netease.com/photo/0001/2017-04-17/CI77983Q00AO0001.jpg" /></p>
      </div>
    );
  }
}


class App extends React.Component{
  componentDidMount(){
    console.log('will / did..');
    ReactModalCtrl.createInstance({
      backdropOptions:{
        zIndex:11,
        opacity:0.1
      }
    });
  }

  _click1(){
    ReactModalCtrl.show({
      header:'Customize <b style="color:#F00">Modal</b>',
      body:'Are you feel <b>good</b> today?',
      theme:'ios',
      buttons:[
        {
          text: 'option1',
          onClick: function() {}
        }, {
          text: 'option2',
          onClick: function(item) {
            console.log('option2', item);
          }
        }, {
          text: 'CLOSE',
          onClick: function(item) {
            ReactModalCtrl.hide(function(){
              console.log('after hde...')
            });
          }
        }
      ]
    },()=>{
      console.log('after shown.....')
    });
  }


  _click2(){
    console.log('click2....');
    ReactModalCtrl.show({
      header:'<b>Title</b><span style="color:#F00">With Color</span>',
      body:<Body />,
      buttons:[]
    });
  }

  _click3(){
    console.log('click3....');
    ReactModalCtrl.show({
      header:'IOS Settings',
      body:'Are you sure to change this one?',
      theme:'transparent',
      buttons:[{
        text:'OK',
        onClick:function(item){
          ReactModalCtrl.hide();
        }
      }]
    });
  }

  _click4(){
    ReactModalCtrl.show({
      header:null,
      body:'NO header content.',
      buttons:[{
        text:'OK',
        onClick:function(item){
          ReactModalCtrl.hide();
        }
      }]
    });
  }

  _click5(){
    Utils.alert();
  }

  render(){
    return (
      <div className="hello-react-modal">
        <button onClick={this._click1.bind(this)}>TEST MODAL</button>
        <button onClick={this._click2.bind(this)}>TEST MODAL-  body</button>
        <button onClick={this._click3.bind(this)}>No Style</button>
        <button onClick={this._click4.bind(this)}>IOS Alert4</button>
        <button onClick={this._click5.bind(this)}>utils Alert4</button>
      </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
