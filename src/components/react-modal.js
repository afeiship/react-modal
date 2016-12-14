import './style.scss';
import classNames from 'classnames';
import {Backdrop,BackdropCtrl} from 'react-backdrop';
import appendToDocument from 'react-append-to-document';


class ReactModal extends React.Component{
  static propTypes = {
    cssClass:React.PropTypes.string,
    type:React.PropTypes.string,
    buttons:React.PropTypes.array
  };

  static defaultProps = {
    type:'default',
    header:'Title',
    body:'',
    visible:false,
    buttons:[{
      text:'OK',
      onClick:function(item){
        this.hide();
      }
    },{
      text:'Cancel',
      onClick:function(item){
        this.hide();
      }
    }]
  };

  static newInstance(inProps){
    return appendToDocument(ReactModal,inProps,{
      className:'react-modal-wrapper'
    });
  }

  constructor(props){
    super(props);
    this.state = {
      header:props.header,
      body:props.body,
      visible:props.visible,
      buttons:props.buttons,
      animating:false
    };
  }


  componentWillMount(){
    BackdropCtrl.getInstance();
  }

  show(inOptions){
    this._setVisible(inOptions,true);
  }

  hide(){
    this._setVisible({},false);
  }

  _setVisible(inOptions,inValue){
    var self = this;
    this.setState({
      animating:true
    });
    setTimeout(function(){
      self.setState(
        Object.assign(inOptions,{
          visible:inValue
        })
      );
      inValue ? BackdropCtrl.show() : BackdropCtrl.hide();
    });
  }

  _onTransitionEnd(){
    this.setState({
      animating:false
    });
  }

  render(){
    return (
      <div
        data-visible={this.state.visible}
        data-animating={this.state.animating}
        hidden={!this.state.visible && !this.state.animating}
        onTransitionEnd={this._onTransitionEnd.bind(this)}
        className={classNames('react-modal',this.props.cssClass)}>
        {this.state.header && <div className="react-modal-hd" dangerouslySetInnerHTML={{__html: this.state.header}}></div>}
        {this.state.body && <div className="react-modal-bd" dangerouslySetInnerHTML={{__html: this.state.body}}></div>}
        <div className="react-modal-ft">
          {this.state.buttons.map(function(item,index){
            return <div key={index} className="react-modal-button" onClick={item.onClick.bind(this)}>{item.text}</div>
          }.bind(this))}
        </div>
      </div>
    );
  }
}


export default ReactModal;
