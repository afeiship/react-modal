# react-modal
> Modal components for react(alert/confirm &amp; the common modal components).


## size:
 + 16K	react-modal.js
 + 68K	react-modal.js.map

## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install


## properties:
```javascript
  static propTypes = {
    className:PropTypes.string,
    header:PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    body:PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    theme:PropTypes.oneOf(['ios','tranparent']),
    buttons:PropTypes.array,
    backdropStyle:PropTypes.object
  };

  static defaultProps = {
    header:null,
    body:null,
    theme:'ios',
    buttons:[],
    backdropStyle:{
      position:'fixed',
      opacity:0.6,
      zIndex:99
    }
  };
```


## usage:
```javascript
import {ReactModal,ReactModalCtrl} from 'react-modal';
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

  _click6(){
    this.refs.mdl.show();
  }

  _random(){
    this.setState({radom:Math.random()*10})
  }

  render(){
    return (
      <div className="hello-react-modal">
        <button onClick={this._click1.bind(this)}>TEST MODAL</button>
        <button onClick={this._click2.bind(this)}>TEST MODAL-  body</button>
        <button onClick={this._click3.bind(this)}>No Style</button>
        <button onClick={this._click4.bind(this)}>IOS Alert4</button>
        <button onClick={this._click5.bind(this)}>utils Alert4</button>
        <button onClick={this._click6.bind(this)}>Inine Modal</button>


        <ReactModal ref='mdl'>
          <p>I a inline modal.</p>
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

```

## todo:
+ [ ] remove theme properies
+ [ ] refator body & children part.
