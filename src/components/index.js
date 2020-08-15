import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import ReactVisible from '@feizheng/react-visible';
import ReactBackdrop from '@feizheng/react-backdrop';

const CLASS_NAME = 'react-modal';

export default class ReactModal extends ReactVisible {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * Abstract visible value.
     */
    value: PropTypes.bool,
    /**
     * If element destroyed when visible to false.
     * In modal case:
     * 1. set the value to true, you need not care z-index
     * 2. If only has one modal, you can set this to false.
     */
    destroyable: PropTypes.bool,
    /**
     * The change handler.
     */
    onChange: PropTypes.func,
    /**
     * Backdrop props or not display backdrop.
     */
    backdrop: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object
    ])
  };

  static defaultProps = {
    onChange: noop,
    destroyable: true
  };

  get visibleElementView() {
    const { className, value, backdrop, destroyable, ...props } = this.props;

    const { hidden } = this.state;
    return ReactDOM.createPortal(
      <React.Fragment>
        <div
          hidden={hidden}
          data-visible={this.state.value}
          onAnimationEnd={this.handleAnimationEnd}
          className={classNames(`webkit-sassui-modal ${CLASS_NAME}`, className)}
          {...props}
        />
        {!!backdrop && <ReactBackdrop value={value} {...backdrop} />}
      </React.Fragment>,
      document.body
    );
  }
}
