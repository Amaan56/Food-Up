import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button
      className={`${styles.button} ${
        props.type === 'outline'
          ? styles['button-outline']
          : styles['button-normal']
      }`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
