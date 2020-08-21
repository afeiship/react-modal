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
    ...ReactVisible.propTypes,
    /**
     * Backdrop props or not display backdrop.
     */
    backdrop: PropTypes.oneOfType([PropTypes.bool, PropTypes.object])
  };

  static defaultProps = {
    ...ReactVisible.defaultProps,
    destroyable: true,
    rootable: true
  };

  get visibleElementView() {
    const {
      className,
      backdrop,
      destroyable,
      onDismiss,
      onPresent,
      rootable,
      ...props
    } = this.props;

    const { hidden, value, children } = this.state;
    const element = (
      <div
        hidden={hidden}
        data-visible={value}
        onAnimationEnd={this.handleAnimationEnd}
        className={classNames(`webkit-sassui-modal ${CLASS_NAME}`, className)}
        {...props}>
        {children}
      </div>
    );

    if (!backdrop) return element;
    return <ReactBackdrop value={value} children={element} {...backdrop} />;
  }
}
