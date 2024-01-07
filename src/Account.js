import React from "react";
import { useSelector } from "react-redux";

/* If we want to bring state from redux is, Redux will provide one Hook that is useSelector,
By using this useSelector hook we can bring our state data from redux store to our component */

/* When we are calling this hook, we need to give call back function as a input parameter */

const Account = () => {
  let data = useSelector((state) => {
    return state;
  });
  return (
    <>
      <div className="container">
        <h1 className="text-success" style={{ color: "#007FFF" }}>
          Account Details
        </h1>
        <table>
          <thead>
            <tr>
              <th>Balance</th>
              <th>User Name</th>
              <th>Mobile</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{data.balance}</td>
              <td>{data.fullName}</td>
              <td>{data.mobileNo}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Account;
