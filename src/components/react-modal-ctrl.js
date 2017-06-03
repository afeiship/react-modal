import ReactModal from 'components/react-modal';
import noop from 'noop';

export default class {
  static _instance = null;

  static createInstance(inProps) {
    this._instance = this._instance || ReactModal.newInstance(inProps);
    return this._instance;
  }

  static show(inOptions, inCallback) {
    this._instance.component.show(inOptions, inCallback || noop);
  }

  static hide(inCallback) {
    this._instance.component.hide(inCallback || noop);
  }

  static destory() {
    this._instance.destory();
    this._instance = null;
  }
}
