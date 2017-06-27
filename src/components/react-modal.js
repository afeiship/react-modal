import './style.scss';

import React, {PureComponent} from 'react';

import PropTypes from 'prop-types';
import {ReactBackdrop} from 'react-backdrop';
import ReactConditionManager from 'react-condition-manager';
import ReactDOM from 'react-dom';
import ReactVisible from 'react-visible';
import appendToDocument from 'react-append-to-document';
import classNames from 'classnames';
import measureIt from 'measure-it';
import objectAssign from 'object-assign';

export default class ReactModal extends ReactVisible {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    header: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    body: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    buttons: PropTypes.array,
    buttonsAlign: PropTypes.oneOf(['horizontal', 'vertical']),
    transparent:PropTypes.bool,
    backdropStyle: PropTypes.object
  };

  static defaultProps = {
    className:'',
    transparent:false,
    header: null,
    body: null,
    buttons: [],
    buttonsAlign: 'horizontal',
    backdropStyle: {
      position: 'fixed',
      opacity: 0.6,
      zIndex: 99
    }
  };
  /*===properties end===*/

  static newInstance(inProps) {
    return appendToDocument(ReactModal, inProps, {
      className: 'react-modal-wrapper'
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      className: props.className,
      transparent:props.transparent,
      header: props.header,
      body: props.body,
      buttons: props.buttons,
      buttonsAlign: props.buttonsAlign,
      backdropStyle: props.backdropStyle,
      dimensions: {},
      visible: false,
      hidden: true
    };
  }

  show(inOptions) {
    const {root} = this.refs;
    const rootDom = ReactDOM.findDOMNode(root);
    const options = objectAssign({...this.props}, {hidden: false}, inOptions);
    this.setState(options, () => {
      measureIt(rootDom, (dimensions) => {
        this.setState({dimensions}, () => {
          super.show();
        });
      });
    });
    return this;
  }

  _onTransitionEnd = (inEvent) => {
    const {visible}  = this.state;
    const propertyName = inEvent.propertyName;
    this.setState({animating: false}, () => {
      !visible && this.setState({hidden: true});
      if (!visible || ( propertyName === 'opacity' )) {
        this.execCallback();
      }
    });
  };

  render() {
    const {className,transparent, visible, hidden, animating, header, body, dimensions, buttons, buttonsAlign, backdropStyle} = this.state;
    const {children} = this.props;

    return (
      <div className="react-modal-container">
        <ReactBackdrop style={backdropStyle} visible={visible}/>
        <ReactConditionManager
          ref="root"
          data-visible={visible}
          hidden={hidden}
          data-animating={animating}
          data-transparent={transparent}
          onTransitionEnd={this._onTransitionEnd}
          style={{
            marginTop: `-${dimensions.height / 2}px`,
            marginLeft: `-${dimensions.width / 2}px`
          }}
          className={classNames('react-modal', className)}
          conditionList={[
            !children && header && typeof(header) == 'string',
            !children && header && typeof(header) == 'object',
            !children && body && typeof(body) == 'string',
            !children && body && typeof(body) == 'object',
            !children && buttons.length > 0,
            children
          ]}>
          <header className="react-modal-hd" dangerouslySetInnerHTML={{__html: header}}></header>
          <header className="react-modal-hd">{header}</header>
          <section className="react-modal-bd" dangerouslySetInnerHTML={{__html: body}}></section>
          <section className="react-modal-bd">{body}</section>
          <footer className="react-modal-ft" data-buttons-align={buttonsAlign}>
            {buttons.map((item, index) => {
              return <button key={index} className="react-modal-button"
                             onClick={item.onClick.bind(this)}>{item.text}</button>
            })}
          </footer>
          {children}
        </ReactConditionManager>
      </div>
    );
  }
}
