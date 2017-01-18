import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const EmployeeListRow = ({employee}) => {
  return (
    <tr>
      <td><Link to={'/employee/' + employee.id}>{employee.name}</Link></td>
      <td>{employee.title}</td>
      <td>{employee.dob}</td>
      <td>{employee.gender}</td>
    </tr>
  );
};

EmployeeListRow.propTypes = {
  employee: PropTypes.object.isRequired
};

export default EmployeeListRow;
