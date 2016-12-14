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
      header:'Title',
      body:'',
      visible:false
    };
  }


  componentWillMount(){
    BackdropCtrl.getInstance({
      opacity:0.4
    });
  }

  show(inOptions){
    this.setState(
      Object.assign(inOptions,{
        visible:true
      })
    );
    BackdropCtrl.show();
  }

  hide(){
    this.setState({
      visible:false
    });
    BackdropCtrl.hide();
  }

  render(){
    return (
      <div
        data-visible={this.state.visible}
        className={classNames('react-modal',this.props.cssClass)}>
        {this.state.header && <div className="react-modal-hd" dangerouslySetInnerHTML={{__html: this.state.header}}></div>}
        {this.state.body && <div className="react-modal-bd" dangerouslySetInnerHTML={{__html: this.state.body}}></div>}
        <div className="react-modal-ft">
          {this.props.buttons.map(function(item,index){
            return <div key={index} className="react-modal-button" onClick={item.onClick.bind(this)}>{item.text}</div>
          }.bind(this))}
        </div>
      </div>
    );
  }
}


export default ReactModal;
