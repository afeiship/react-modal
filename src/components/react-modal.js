import './style.scss';
import classNames from 'classnames';
import React,{PropTypes,PureComponent} from 'react';
import {ReactBackdropCtrl} from 'react-backdrop';
import appendToDocument from 'react-append-to-document';
import measureIt from 'measure-it';
import ReactVisible from 'react-visible';

export default class ReactModal extends ReactVisible{
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
    visible:PropTypes.bool,
    theme:PropTypes.oneOf(['ios','tranparent']),
    buttons:PropTypes.array,
    backdropStyle:PropTypes.object
  };

  static defaultProps = {
    header:null,
    body:null,
    visible:false,
    theme:'ios',
    buttons:[],
    backdropStyle:{
      opacity:0.6
    }
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
      theme:props.theme,
      visible:props.visible,
      buttons:props.buttons,
      dimensions:{},
      hidden:!props.visible,
      shouldMeasure:true,
      animating:false
    };
    this._timer = null;
  }

  componentWillMount(){
    ReactBackdropCtrl.createInstance({
      style:this.props.backdropStyle
    });
  }

  show(inOptions,inCallback){
    const {root} = this.refs;
    const options = Object.assign({},this.props,inOptions);
    ReactBackdropCtrl.show();
    this.setState( options ,()=>{
      measureIt(root,(dimensions) => {
        this.setState({ dimensions });
        super.show(inCallback);
      });
    });
  }

  hide(inCallback){
    super.hide(inCallback);
    ReactBackdropCtrl.hide();
  }

  render(){
    const {visible,hidden,theme,animating,header,body,dimensions,buttons} = this.state;
    return (
      <div
        ref="root"
        data-visible={visible}
        hidden={hidden}
        data-theme={theme}
        data-animating={animating}
        data-header={header}
        data-height={dimensions.height}
        onTransitionEnd={this._onTransitionEnd}
        style={{
          marginTop:`-${dimensions.height/2}px`,
          marginLeft:`-${dimensions.width/2}px`
        }}
        className={classNames('react-modal',this.props.className,{'no-header':!header},{'no-footer':buttons.length==0})}>
        {header && typeof(header)=='string' && <div className="react-modal-hd" dangerouslySetInnerHTML={{__html: header}}></div>}
        {header && typeof(header)=='object' && <div className="react-modal-hd">{header}</div>}

        {body && typeof(body)=='string' && <div className="react-modal-bd" dangerouslySetInnerHTML={{__html: body}}></div>}
        {body && typeof(body)=='object' && <div className="react-modal-bd">{body}</div>}

        {buttons.length>0 && (
          <div className="react-modal-ft">
            {buttons.map((item,index)=>{
              return <div key={index} className="react-modal-button" onClick={item.onClick.bind(this)}>{item.text}</div>
            })}
          </div>
        )}
      </div>
    );
  }
}
