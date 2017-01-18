import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const EmployeeForm = ({employee, onSave, onChange, saving, errors}) => {

  const allEmployeeTitles = [ {value:"Sr. Lead Engineering", text : "Sr. Lead Engineering"},
                              {value:"Consultant Engineering", text : "Consultant Engineering"},
                              {value:"Sr. Manager Engineering", text : "Sr. Manager Engineering"},
                              {value:"Sr. Consultant Engineering", text : "Sr. Consultant Engineering"}];

  return (
    <form>
      <h1>Add/Edit Employee</h1>
      <TextInput
        name="name"
        label="Name"
        value={employee.name}
        onChange={onChange}
        error={errors.name}/>

      <SelectInput
        name="title"
        label="Title"
        value={employee.title}
        defaultOption="Select Title"
        options={allEmployeeTitles}
        onChange={onChange} error={errors.title}/>

      <TextInput
        name="dob"
        label="DOB"
        value={employee.dob}
        onChange={onChange}
        error={errors.dob}/>

      <TextInput
        name="gender"
        label="Gender"
        value={employee.gender}
        onChange={onChange}
        error={errors.gender}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

EmployeeForm.propTypes = {
  employee: PropTypes.object.isRequired,
  allEmployeeTitles: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default EmployeeForm;
