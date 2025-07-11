import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="App">
      <h1 className="text-3xl text-indigo-300">Welcome to My React App</h1>
      <p>This is a simple React application.</p>
    </div>
  );
};

export default App;
