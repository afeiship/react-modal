import ReactModal from 'components/react-modal';
import noop from 'noop';

let instance;

export default class ReactModalCtrl {
  static createInstance(inProps) {
    instance = instance || ReactModal.newInstance(inProps);
    return instance;
  }

  static show(inOptions,inCallback){
    instance.component.show(inOptions,inCallback || noop);
  }

  static hide(inCallback){
    instance.component.hide(inCallback || noop);
  }

  static destory(){
    instance.destory();
    instance=null;
  }
}
