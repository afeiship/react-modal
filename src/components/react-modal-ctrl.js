import ReactModal from 'components/react-modal';
import noop from 'noop';

export default class ReactModalCtrl{
  static _instance = null;

  static createInstance(inProps) {
    ReactModalCtrl._instance = ReactModalCtrl._instance || ReactModal.newInstance(inProps);
    return ReactModalCtrl._instance;
  }

  static show(inOptions) {
    return ReactModalCtrl._instance.component.show(inOptions);
  }

  static hide(inCallback) {
    return ReactModalCtrl._instance.component.hide();
  }

  static destory() {
    ReactModalCtrl._instance.destory();
    ReactModalCtrl._instance = null;
  }
}
