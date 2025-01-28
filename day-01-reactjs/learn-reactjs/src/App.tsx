import AboutPage from "./components/AboutPage";
import Products from "./components/Products";
import Profile from "./components/Profile";

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
    </div>
  );
}