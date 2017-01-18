import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import * as employeeActions from '../../actions/employeeActions';
import EmployeeList from './EmployeeList';

class EmployeesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddEmployeePage = this.redirectToAddEmployeePage.bind(this);
  }

  redirectToAddEmployeePage() {
    browserHistory.push('/employee');
  }

  render() {
    return (
      <div>
        <h1>Employees</h1>
        <input type="submit"
               value="Add Employee"
               className="btn btn-primary"
               onClick={this.redirectToAddEmployeePage}/>

        <EmployeeList employees={this.props.employees}/>
      </div>
    );
  }
}

EmployeesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  employees: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    employees: state.employees
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(employeeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesPage);
