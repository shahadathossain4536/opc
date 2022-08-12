import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

const UsersData = ({ usersData, setUsersData, isReload }) => {
  useEffect(() => {
    fetch("http://localhost:3005/data")
      .then((res) => res.json())
      .then((data) => setUsersData(data));
  }, [isReload]);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Hobbies</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {usersData.map((userData, index) => (
            <tr>
              <td>
                <input type="checkbox" id="" name="" value="" />
              </td>
              <td>{index + 1}</td>
              <td>{userData.name}</td>
              <td>{userData.phone}</td>
              <td>{userData.email}</td>
              <td>{userData.hobbies}</td>
              <td>
                <button>Update</button>
              </td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UsersData;
