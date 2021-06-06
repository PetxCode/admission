
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeScreen from "./component/HomeScreen";
import "antd/dist/antd.css"
import Home from "./component/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomeScreen}  />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
