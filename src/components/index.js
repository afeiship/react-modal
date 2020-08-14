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
     * The change handler.
     */
    onChange: PropTypes.func,
    /**
     * If element destroyed when visible to false.
     */
    destroyable: PropTypes.bool,
    /**
     * Backdrop props or not display backdrop.
     */
    backdrop: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object,
    ]),
  };

  static defaultProps = {
    onChange: noop,
    destroyable: false
  };

  get visibleElementView() {
    const {
      className,
      destroyable,
      value,
      backdrop,
      ...props
    } = this.props;

    const { hidden } = this.state;
    return ReactDOM.createPortal(
      [
        <div
          key="modal"
          hidden={hidden}
          data-visible={this.state.value}
          onAnimationEnd={this.handleAnimationEnd}
          className={classNames(`webkit-sassui-modal ${CLASS_NAME}`, className)}
          {...props}
        />,
        !!backdrop && (
          <ReactBackdrop key="backdrop" value={value} {...backdrop} />
        )
      ],
      document.body
    );
  }
}
