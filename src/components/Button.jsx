import React from 'react';
import styles from './Button.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

console.log(cx('button', 'loading'));

class Button extends React.Component {

  state = {
    loading : false
  };

  render() {

    const {loading} = this.state;

   return (
   <button 
    onClick={this.startLoading}
    className={cx('button', {loading})}
    {...this.props} />
    );
  }

  // 이벤트에 바인딩 되는 함수는 arrow function을 사용해야 this를 사용가능.
  startLoading = () => {
    this.setState({
      loading : true,
    });
    setTimeout(() => {
      this.setState({
        loading : false,
      });
    }, 1000);
  };
}


export default Button;