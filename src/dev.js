import './dev.scss';

import {ReactModal, ReactModalCtrl} from './main';

/*===example start===*/
// install: npm install afeiship/react-modal --save
// import : import {ReactModal, ReactModalCtrl} from 'react-modal'


class Body extends React.Component{
  _click(){
    //http://img4.cache.netease.com/photo/0001/2017-04-17/CI77983Q00AO0001.jpg
    //https://www.google.co.jp/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png
    //http://cms-bucket.nosdn.127.net/a6831f1374a243e2a7262476a430a96b20170424090100.jpeg
    ReactModalCtrl.hide();
  }
  render(){
    return (
      <div className="cus-body">
        <p><span className="bd">Hi Man!</span></p>
        <p>I am from <strong className="bd">Baidu</strong></p>
        <p><img onClick={this._click.bind(this)} src="http://cms-bucket.nosdn.127.net/a6831f1374a243e2a7262476a430a96b20170424090100.jpeg" /></p>
      </div>
    );
  }
}


class App extends React.Component{
  state = {
    radom:'123'
  };
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
      className:'my-modal',
      header:'Customize <b style="color:#F00">Modal</b>',
      body:'Are you feel <b>good</b> today?',
      theme:'ios',
      backdropStyle:{
        opacity:0.2
      },
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
    // console.log('click2....');
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

  _click6(){
    this.refs.mdl.show();
  }

  _random(){
    this.setState({radom:Math.random()*10})
  }

  _click7(){
    ReactModalCtrl.show({
      body:'I am a vertical buttons modal.',
      buttonsAlign:'vertical',
      buttons:[{
        text:'OK',
        onClick:function(item){
          console.log('ok!');
          ReactModalCtrl.hide();
        }
      },{
        text:'Wait?',
        onClick:function(item){
          console.log('wait!',item);
          ReactModalCtrl.hide();
        }
      },{
        text:'What?',
        onClick:function(item){
          console.log('What?!',item);
          ReactModalCtrl.hide();
        }
      },{
        text:'Cancel?',
        onClick:function(item){
          console.log('cancel!',item);
          ReactModalCtrl.hide();
        }
      }]
    });
  }


  render(){
    return (
      <div className="hello-react-modal">
        <button onClick={this._click1.bind(this)}>TEST MODAL</button>
        <button onClick={this._click2.bind(this)}>TEST MODAL - Load Image</button>
        <button onClick={this._click3.bind(this)}>No Style</button>
        <button onClick={this._click4.bind(this)}>IOS Alert4</button>
        <button onClick={this._click6.bind(this)}>Inine Modal</button>
        <button onClick={this._click7.bind(this)}>Button Vertical Alignment</button>


        <ReactModal ref='mdl' transparent>
          <p>I a inline modal.</p>
          <p>I am a transparent one.</p>
          <section>
            So,you can Customize by yourself;
          </section>
          <p>Random data:{this.state.radom}</p>
          <button style={{background:"#007aff"}}  onClick={this._random.bind(this)}>Random the data</button>
          <button style={{background:"#f60"}} onClick={()=>{
            this.refs.mdl.hide();
          }}>close me!</button>
        </ReactModal>
      </div>
    );
  }
}
/*===example end===*/


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
