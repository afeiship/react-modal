import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';

export default class extends React.Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    visible: PropTypes.bool,
    onChange: PropTypes.func,
    backdrop: PropTypes.bool,
    backdropProps: PropTypes.object,
  };

  static defaultProps = {
    className: '',
    visible: false,
    backdrop: true,
    backdropProps: {},
    onChange: noop
  };
  /*===properties end===*/

  constructor(inProps) {
    super(inProps);
    const { visible } = inProps;
    this.state = {
      visible,
      hidden: !visible
    };
  }

  componentWillReceiveProps(inProps) {
    const { visible } = inProps;
    if (visible !== this.state.visible) {
      if (visible) {
        this.setState({ hidden: false })
      }
      this.setState({ visible });
    }
  }

  present() {
    this.setState({ hidden: false, visible: true })
  }

  dismiss() {
    this.setState({ visible: false });
  }

  _onAnimationEnd = () => {
    const { visible } = this.state;
    const { onChange } = this.props;
    if (!visible) {
      this.setState({ hidden: true })
    }
    onChange({ target: { value: visible }});
  };

  render() {
    const { visible, className, backdrop, backdropProps, ...props } = this.props;
    const { hidden } = this.state;

    return (
      <Fragment>
        <div
          hidden={hidden}
          data-visible={this.state.visible}
          onAnimationEnd={this._onAnimationEnd}
          className={classNames('webkit-sassui-modal react-modal', className)}
          {...props} />

        {
          backdrop && (
            <div
              hidden={hidden}
              data-visible={this.state.visible}
              onAnimationEnd={this._onAnimationEnd}
              className="webkit-sassui-backdrop react-modal-backdrop"
              {...backdropProps}
            />
          )
        }
      </Fragment>
    );
  }
}

