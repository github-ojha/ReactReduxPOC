import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as employeeActions from '../../actions/employeeActions';
import EmployeeForm from './EmployeeForm';
import toastr from 'toastr';

export class ManageEmployeePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      employee: Object.assign({}, this.props.employee),
      errors: {},
      saving: false
    };

    this.saveEmployee = this.saveEmployee.bind(this);
    this.updateEmployeeState = this.updateEmployeeState.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.employee.id != nextProps.employee.id) {
      // Necessary to populate form when existing employee is loaded directly.
      this.setState({employee: Object.assign({}, nextProps.employee)});
    }
  }

  updateEmployeeState(event) {
    const field = event.target.name;
    let employee = this.state.employee;
    employee[field] = event.target.value;
    return this.setState({employee: employee});
  }

  employeeFormIsValid() {
    //TODO implement validations if any
    return true;
  }

  saveEmployee(event) {
    event.preventDefault();

    if (!this.employeeFormIsValid()) {
      return;
    }

    this.setState({saving: true});
    this.props.actions.saveEmployee(this.state.employee)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Employee saved.');
    this.context.router.push('/employees');
  }

  render() {
    return (
      <EmployeeForm
        employee={this.state.employee}
        onChange={this.updateEmployeeState}
        onSave={this.saveEmployee}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

ManageEmployeePage.propTypes = {
  employee: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ManageEmployeePage.contextTypes = {
  router: PropTypes.object
};

function getEmployeeById(employees, id) {
  const employee = employees.filter(employee => employee.id == id);
  if (employee) return employee[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const employeeId = ownProps.params.id; // from the path `/employee/:id`

  let employee = {id: '', title: '', name: '', dob: '', gender: ''};

  if (employeeId && state.employees.length > 0) {
    employee = getEmployeeById(state.employees, employeeId);
  }

  return {
    employee: employee
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(employeeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageEmployeePage);
