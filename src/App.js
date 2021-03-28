import React, { Component, Fragment } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import NotFoundPage from './common/notFoundPage';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
	      <BrowserRouter>
	      	<Fragment>
	      		<Header />
	      		<Switch>
			    		<Route path='/' exact component={Home} />
			    		<Route path='/detail/:id' exact component={Detail} />
			    		<Route path='*' exact component={NotFoundPage} />
		    		</Switch>
		    	</Fragment>
	      </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
