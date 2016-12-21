import './style.scss';
import classNames from 'classnames';
import {BackdropCtrl} from 'react-backdrop';
import appendToDocument from 'react-append-to-document';
import Measure from 'react-measure';


class ReactModal extends React.Component{
  static propTypes = {
    cssClass:React.PropTypes.string,
    buttons:React.PropTypes.array,
    backdropOptions:React.PropTypes.object,
  };

  static defaultProps = {
    header:'Title',
    body:'',
    visible:false,
    backdropOptions:{
      style:{
        opacity:0.7
      }
    },
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
      dimensions:{},
      shouldMeasure:true,
      visible:props.visible,
      buttons:props.buttons,
      animating:false
    };
  }


  componentWillMount(){
    BackdropCtrl.getInstance(this.props.backdropOptions);
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
      <Measure
        whitelist={['width','height']}
        shouldMeasure={this.state.shouldMeasure}
        onMeasure={(dimensions) => {
            this.setState({
              dimensions:dimensions,
              shouldMeasure:false
            })
          }}>
      <div
        data-visible={this.state.visible}
        data-animating={this.state.animating}
        hidden={!this.state.visible && !this.state.animating}
        onTransitionEnd={this._onTransitionEnd.bind(this)}
        data-height={this.state.dimensions.height}
        style={{
          marginTop:`-${this.state.dimensions.height/2}px`,
          marginLeft:`-${this.state.dimensions.width/2}px`
        }}
        className={classNames('react-modal',this.props.cssClass,{'no-header':!this.state.header},{'no-footer':this.state.buttons.length==0})}>
        {typeof(this.state.header)=='string' && <div className="react-modal-hd" dangerouslySetInnerHTML={{__html: this.state.header}}></div>}
        {typeof(this.state.header)=='object' && <div className="react-modal-hd">{this.state.header}</div>}

        {typeof(this.state.body)=='string' && <div className="react-modal-bd" dangerouslySetInnerHTML={{__html: this.state.body}}></div>}
        {typeof(this.state.body)=='object' && <div className="react-modal-bd">{this.state.body}</div>}

        {this.state.buttons.length>0 && <div className="react-modal-ft">
          {this.state.buttons.map(function(item,index){
            return <div key={index} className="react-modal-button" onClick={item.onClick.bind(this)}>{item.text}</div>
          }.bind(this))}
        </div>}
      </div>
    </Measure>
    );
  }
}


export default ReactModal;
