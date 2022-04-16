import './App.css';
import Introduction from "./Introduction"
import Five_Steps from "./five_steps"
import Sign_Up from "./signup";
import FootNote from "./footnote"
function App() {
  return (
    <div id="body">
      <Introduction />
      <Five_Steps />
      <Sign_Up />
      <FootNote />
    </div>
  );
}

export default App;
