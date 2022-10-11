import './button.styles.scss';

/*
default
inverted
google sign in

*/

const BUTTON_TYPES_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
}

const Button = ({ children, buttonType }) => {
  return (
    <button
      className={`
        button-container
        ${BUTTON_TYPES_CLASSES[buttonType]}
      `}>
      {children}
    </button>
  )
}

export default Button;
