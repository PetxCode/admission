
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeScreen from "./component/HomeScreen";
import "antd/dist/antd.css"
import Home from "./component/Home";
import Review from "./component/Review";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomeScreen}  />
          <Route path="/review" exact component={Review}  />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
