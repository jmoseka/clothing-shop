import React from 'react';
import { signInWithGooglePopup } from '../../../utils/firebase/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <button type="button" onClick={logGoogleUser}>Sign in with Google </button>
    </div>
  );
};

export default SignIn;
