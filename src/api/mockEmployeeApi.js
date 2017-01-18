import delay from './delay';

const employees = [
  {
    id:1,
    empid: "4235",
    title: "Sr. Lead Engineering",
    name : "Neeraj Ojha",
    dob: "5 NOV 1983",
    gender: "Male"
  },
  {
    id:2,
    empid: "5678",
    title: "Consultant Engineering",
    name : "Kunal Gupta",
    dob: "6 JUL 1982",
    gender: "Male"
  },
   {
    id :3,
    empid: "4379",
    title: "Sr. Consultant Engineering",
    name : "Rajender Sehgal",
    dob: "6 AUG 1981",
    gender: "Male"
  },
   {
    id:4,
    empid: "5849",
    title: "Consultant Engineering",
    name : "Sheshnath Kumar",
    dob: "10 JAN 1984",
    gender: "Male"
  },
   {
    id:5,
    empid: "3456",
    title: "Sr. Manager Engineering",
    name : "Vibhu Shekhar",
    dob: "8 DEC 1976",
    gender: "Male"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (employee) => {
  return replaceAll(employee.title, ' ', '-');
};

class EmployeeApi {
  static getAllEmployees() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], employees));
      }, delay);
    });
  }

  static saveEmployee(employee) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        if (employee.id) {
          const existingEmployeeIndex = employees.findIndex(a => a.id == employee.id);
          employees.splice(existingEmployeeIndex, 1, employee);
        } else {
          employee.id = generateId(employee);
          employees.push(employee);
        }

        resolve(Object.assign({}, employee));
      }, delay);
    });
  }

  static deleteEmployee(employeeId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfEmployeeToDelete = employees.findIndex(employee => {
          employee.employeeId == employeeId;
        });
        employees.splice(indexOfEmployeeToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default EmployeeApi;
