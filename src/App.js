import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { Provider } from "react-redux";
import { store } from "./store";
import Editor from "./components/Editor";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <NavBar />
        <Editor />
      </Provider>
    </div>
  );
}

export default App;
