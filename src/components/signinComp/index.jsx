import React from 'react';
import AccountEntryPanel from '@Components/accountEntryPanel';
import NavigateToSignUp from './NavigateToSignUp';
import SignInForm from './SignInForm';

export default function() {
  return (
    <div>
      Sign in comp
      <AccountEntryPanel
        leftComp={<SignInForm />}
        rightComp={<NavigateToSignUp />}
      />
      hi
    </div>
  );
}
