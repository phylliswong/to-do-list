import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase-utils';
import SignUpForm from '../sign-up-form/sign-up-form.component';

import './sign-in.styles.scss';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }
  
  return (
    <div className='signin-container'>
      <h1>I am the sign in page</h1>
      <button onClick={logGoogleUser}>
        Sign in with Google Popup
      </button>
      <SignUpForm />
    </div>
  )

}

export default SignIn;
