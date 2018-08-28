# react-modal
> Modal components for react(alert/confirm &amp; the common modal components).

## size:
 + 16K	react-modal.js
 + 68K	react-modal.js.map


## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    visible: PropTypes.bool,
    backdrop: PropTypes.bool,
    backdropProps: PropTypes.object,
  };

  static defaultProps = {
    className: '',
    visible: false,
    backdrop: true,
    backdropProps: {}
  };
  
```

## usage:
```jsx
// install: npm install afeiship/react-modal --save
// import : import ReactModal from 'react-modal'

class App extends React.Component {
  state = {
    visible: false
  }

  onShow = e => {
    this.md.present();
  };

  onHide = e => {
    this.md.dismiss();
  };

  render() {
    return (
      <div className="hello-react-modal">
        <button onClick={this.onShow}>ShowModel</button>

        <ReactModal className="my-modal" ref={md => this.md = md}>
          <h1>I am the title</h1>
          <button onClick={this.onHide}>test modal</button>
        </ReactModal>
      </div>
    )
  }
}


```


## todo:
+ [x] remove theme properies
+ [ ] refator body & children part.
+ [ ] load image from out of GTW will not success.
