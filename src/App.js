import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import News from './Components/News';
import style from './styles/App.css';
import LoadingBar from 'react-top-loading-bar'
import { MODULES, COUNTRY, ROUTES } from './Constant';


const App = () => {

  const [Progress, setProgress] = useState(0)

  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar   //top loading line
          color='#DE4313'
          height={2}
          progress={Progress}
        />
        <div>
          <Switch>
            <Route exact path={ROUTES.MAIN}>
              <News key="gen" country={COUNTRY} category={MODULES.GENERAL.CATEGORY} back={MODULES.GENERAL.BACK}
                setProgress={setProgress} />
            </Route>
            <Route exact path={ROUTES.SPORTS}>
              <News key="spo" country={COUNTRY} category={MODULES.SPORTS.CATEGORY} back={MODULES.SPORTS.BACK}
                setProgress={setProgress} />
            </Route>
            <Route exact path={ROUTES.BUSINESS}>
              <News key="buss" country={COUNTRY} category={MODULES.BUSINESS.CATEGORY} back={MODULES.BUSINESS.BACK}
                setProgress={setProgress} />
            </Route>
            <Route exact path={ROUTES.ENTERTAINMENT}>
              <News key="ent" country={COUNTRY} category={MODULES.ENTERTAINMENT.CATEGORY} back={MODULES.SPORTS.BACK}
                setProgress={setProgress} />
            </Route>
            <Route exact path={ROUTES.HEALTH}>
              <News key="hel" country={COUNTRY} category={MODULES.HEALTH.CATEGORY} back={MODULES.HEALTH.BACK}
                setProgress={setProgress} />
            </Route>
            <Route exact path={ROUTES.TECHNICAL}>
              <News key="tech" country={COUNTRY} category={MODULES.TECHNOLOGY.CATEGORY} back={MODULES.TECHNOLOGY.BACK}
                setProgress={setProgress} />
            </Route>


          </Switch>
        </div>

      </Router>
    </>

  )

}

export default App;
