import React, { useState } from "react";
import {
  IdentityModal,
  useIdentityContext,
} from "react-netlify-identity-widget";
import "react-netlify-identity-widget/styles.css";
import "@reach/tabs/styles.css";

const Index = () => {
  const identity = useIdentityContext();
  const [dialog, setDialog] = useState(false);

console.log(identity);
  return (
    <>
      {identity && identity.isLoggedIn && (
        <pre>{JSON.stringify(identity, null, 2)}</pre>
      )}
      <div style={{ margin: `auto`, textAlign: `center` }}>
        TODO: build a subscription logic
      </div>
      <h1>Sign up for a premium tool</h1>
      <p>get your subscription today and get all the good stuff</p>
      {!dialog && <button onClick={() => setDialog(true)}>Log in</button>}
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
        onLogin={(user) => console.log("hello ", user?.user_metadata)}
        onSignup={(user) => console.log("welcome ", user?.user_metadata)}
        // onLogout={() => console.log("bye ", name)}
      />
    </>
  );
};

export default Index;
