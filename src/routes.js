import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import EmployeesPage from './components/employee/EmployeesPage';
import ManageEmployeePage from './components/employee/ManageEmployeePage'; //eslint-disable-line import/no-named-as-default
import AboutPage from './components/about/AboutPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={AboutPage}/>
    <Route path="employees" component={EmployeesPage}/>
    <Route path="employee/:id" component={ManageEmployeePage}/>
    <Route path="employee" component={ManageEmployeePage}/>
  </Route>
);
