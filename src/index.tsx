import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import RoutingUsers from './Routing/RoutingUsers'


const App = () => (
  <BrowserRouter>
     <RoutingUsers/>
  </BrowserRouter> 
);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

if (module.hot !== undefined) {
  module.hot.accept();
}
