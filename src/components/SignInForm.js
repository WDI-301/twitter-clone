import { useState } from "react";

const SignInForm = (props) => {
  const { setUser } = props;

  const [signInForm, setSignInForm] = useState({ userName: '', profilePhotoUrl: ''});

  console.log('signInForm: ', signInForm)

  return (
    <div>
      <div>
        <div><label>Username:</label></div>
        <input value={signInForm.userName} onChange={(event) => {
          const { value } = event.target;

          setSignInForm({ ...signInForm,  userName: value });
        }} />
      </div>
      <div>
        <div><label>Profile photo:</label></div>
        <input value={signInForm.profilePhotoUrl} onChange={(event) => {
          const { value } = event.target;

          setSignInForm({ ...signInForm,  profilePhotoUrl: value });
        }} />
      </div>
      <div>
        <button onClick={() => setUser(signInForm)}>Sign In</button>
      </div>
      <div></div>
    </div>
  )
};

export default SignInForm;