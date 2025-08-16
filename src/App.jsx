import { Amplify } from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignIn } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';


Amplify.configure(awsconfig);

function App() {
  return (
    <AmplifyAuthenticator>
      <AmplifySignUp
        slot="sign-up"
        formFields={[
          { type: "username" },
          { type: "password" },
          { type: "email" },
          { type: "phone_number" }
        ]}
      />
      <AmplifySignIn slot="sign-in" />
    </AmplifyAuthenticator>
  );
}

export default App;
