import AboutPage from "./components/AboutPage";
import EventHandler from "./components/EventHandler";
import Products from "./components/Products";
import Profile from "./components/Profile";
import MyCounterButton from "./components/UseState";

function MyButton() {
  return (
    <button>Click Me</button>
  );
}

export default function App() {
  return (
    <div>
      <h1>Button Example :: First React Component</h1>
      <MyButton />
      <AboutPage />
      <Profile />
      <Products />
      <EventHandler />
      <MyCounterButton />
    </div>
  );
}