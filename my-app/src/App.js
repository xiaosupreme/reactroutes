import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Loginform from './Loginform';
import home from './home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Loginform} />
        
      </Routes>
    </Router>
  );
};

export default App;
