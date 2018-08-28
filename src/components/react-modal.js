import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';

const OBJECT = 'object';
const EMPTY_OBJECT = {};

export default class extends React.Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    backdrop: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object
    ])
  };

  static defaultProps = {
    className: '',
    value: false,
    onChange: noop,
    backdrop: true
  };
  /*===properties end===*/

  constructor(inProps) {
    const { value } = inProps;
    super(inProps);
    this.state = {
      value,
      hidden: !value
    };
  }

  componentWillReceiveProps(inProps) {
    const { value } = inProps;
    if (value !== this.state.value) {
      if (value) {
        this.setState({ hidden: false })
      }
      this.setState({ value });
    }
  }

  present() {
    this.setState({ hidden: false, value: true })
  }

  dismiss() {
    this.setState({ value: false });
  }

  _onAnimationEnd = () => {
    const { value } = this.state;
    const { onChange } = this.props;
    if (!value) {
      this.setState({ hidden: true })
    }
    onChange({ target: { value } });
  };

  render() {
    const { className, backdrop, backdropProps, ...props } = this.props;
    const { value, hidden } = this.state;
    const bakcdropProps = typeof backdrop === OBJECT ? backdrop : EMPTY_OBJECT;

    return (
      <Fragment>
        <div
          hidden={hidden}
          data-visible={value}
          onAnimationEnd={this._onAnimationEnd}
          className={classNames('webkit-sassui-modal react-modal', className)}
          {...props}
        />

        {
          !!backdrop && (
            <div
              hidden={hidden}
              data-visible={value}
              onAnimationEnd={this._onAnimationEnd}
              className="webkit-sassui-backdrop react-modal-backdrop"
              {...bakcdropProps}
            />
          )
        }
      </Fragment>
    );
  }
}

