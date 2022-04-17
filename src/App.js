import './App.css';
import Introduction from "./Introduction"
import Five_Steps from "./five_steps"
import Sign_Up from "./signup";
import FootNote from "./footnote"
import {initializeApp} from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxerr9qh8viGiaxBc2M1zGHN7SER1BPqM",
  authDomain: "catalyst-website-a12de.firebaseapp.com",
  projectId: "catalyst-website-a12de",
  storageBucket: "catalyst-website-a12de.appspot.com",
  messagingSenderId: "100778747021",
  appId: "1:100778747021:web:3f72ea178c620819f3aec4",
  measurementId: "G-1V390G9D6H"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
  return (
    <div id="body">
      <Introduction />
      <Five_Steps />
      <Sign_Up db={db}/>
      <FootNote />
    </div>
  );
}

export default App;
