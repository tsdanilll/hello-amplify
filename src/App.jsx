import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsconfig);

export default function App() {
  return (
    <Authenticator
      signUpAttributes={['email', 'phone_number']}
      formFields={{
        signUp: {
          username: { label: 'Username', placeholder: 'yourname' },
          password: { label: 'Password' },
          email: { label: 'Email' },
          phone_number: { label: 'Phone number' },
        },
      }}
    >
      {({ user, signOut }) => (
        <main style={{ padding: 24 }}>
          <h1>hi {user?.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}
