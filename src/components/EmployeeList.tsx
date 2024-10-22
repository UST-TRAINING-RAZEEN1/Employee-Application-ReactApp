// src/components/EmployeeList.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Employee } from './Employee';

interface EmployeeListProps {
  employees: Employee[];
  onDeleteEmployee: (id: number) => void;
}

const EmployeeList: React.FC<EmployeeListProps> = ({ employees, onDeleteEmployee }) => {
  return (
    <div>
      
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
      <h2 style={{ margin: 0 }}>Employee List</h2>
        <button style={{ backgroundColor: 'green',  marginLeft: 'auto'  }}>
          <Link to={`/`} style={{ textDecoration: 'none', color: 'inherit' }}>
            Add
          </Link>
        </button>
        
      </div>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Salary</th>
            <th>Date of Joining</th>
            <th>Location</th>
            <th>Manager</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.department}</td>
              <td>{employee.designation}</td>
              <td>{employee.salary}</td>
              <td>{employee.dateOfJoining}</td>
              <td>{employee.location}</td>
              <td>{employee.manager}</td>
              <td>
                <button style={{backgroundColor:'green',marginRight:'10px'}}>
                  <Link to={`/edit/${employee.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    Edit
                  </Link>
                </button>
                <button onClick={() => onDeleteEmployee(employee.id)  }style={{backgroundColor:'red'}}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;

