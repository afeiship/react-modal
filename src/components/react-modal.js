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
    destroyable: PropTypes.bool,
    backdrop: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object
    ])
  };

  static defaultProps = {
    className: '',
    value: false,
    onChange: noop,
    backdrop: true,
    destroyable: false
  };
  /*===properties end===*/

  constructor(inProps) {
    const { value, destroyable } = inProps;
    super(inProps);
    this.state = {
      value,
      hidden: !value,
      destroyValue: true
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
    this.setState({ destroyValue: true, hidden: false, value: true })
  }

  dismiss() {
    this.setState({ value: false });
  }

  updateDestroyValue() {
    const { destroyable } = this.props;
    const { value } = this.state;
    this.setState({
      destroyValue: destroyable ? value : true
    });
  }

  _onAnimationEnd = () => {
    const { value } = this.state;
    if (!value) {
      this.setState({ hidden: true });
    }
    this.updateDestroyValue();
    this.props.onChange({ target: { value } });
  };

  render() {
    const { className, destroyable, backdrop, backdropProps, ...props } = this.props;
    const { value, hidden, destroyValue } = this.state;
    const bakcdropProps = typeof backdrop === OBJECT ? backdrop : EMPTY_OBJECT;

    return (
      destroyValue && <Fragment>
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
              className="webkit-sassui-backdrop react-modal-backdrop"
              {...bakcdropProps}
            />
          )
        }
      </Fragment>
    );
  }
}

