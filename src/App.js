import React, { Fragment } from 'react';
import LanguageSelect from './components/LanguageSelect';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Portugues from './components/Portugues';
import { Reset } from 'styled-reset';

const App = () => {
  const str = 'hello';
  return (
    <Fragment>
      <Reset />
      <Router>
        <Switch>
          <Route path='/' exact component={LanguageSelect} />
          <Route path='/pt' exact component={Portugues} />
        </Switch>
      </Router>
      {console.log(str.length)}
    </Fragment>
  );
};

export default App;
