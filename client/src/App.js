import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Activity from "./pages/activity/Activity";
import CreateActivity from "./pages/activity/CreateActivity";
import Country from "./pages/country/Country";
import Home from "./pages/home/Home";
import LandingPage from "./pages/landing/LandingPage";

function App() {
  const [isHome, setIsHome] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        {isHome && <Navbar />}
        <Switch>
          <Route
            exact
            path="/"
            render={() => <LandingPage setIsHome={setIsHome} />}
          />
          <Route exact path="/home" component={Home} />
          <Route exact path="/activity" component={Activity} />
          <Route exact path="/create-activity" component={CreateActivity} />
          <Route exact path="/country/:id" component={Country} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
