import EmployeeApi from '../api/mockEmployeeApi';
import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadEmployeesSuccess(employees) {
  return {type: types.LOAD_EMPLOYEES_SUCCESS, employees};
}

export function createEmployeeSuccess(employee) {
  return {type: types.CREATE_EMPLOYEE_SUCCESS, employee};
}

export function updateEmployeeSuccess(employee) {
  return {type: types.UPDATE_EMPLOYEE_SUCCESS, employee};
}

export function loadEmployees() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return EmployeeApi.getAllEmployees().then(employees => {
      dispatch(loadEmployeesSuccess(employees));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveEmployee(employee) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return EmployeeApi.saveEmployee(employee).then(employee => {
      employee.id ? dispatch(updateEmployeeSuccess(employee)) : dispatch(createEmployeeSuccess(employee));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
