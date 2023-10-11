import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRequests } from '../../redux/feature/requests/requestsSlice';
import AdminNavbar from '../../components/AdminNavbar';
import Styles from './Admin.module.css';

const Admin = () => {
  const dispatch = useDispatch();
  const { requests } = useSelector((state) => state.requests);
  console.log(requests);
  useEffect(() => {
    dispatch(fetchRequests());
  }, []);

  return (
    <div className="container">
      <AdminNavbar />
      <div className={Styles.requestContainer}>
        <h2 className={Styles.title}>Requests</h2>
        <table className={Styles.table}>
          <thead className={Styles.thead}>
            <tr className={Styles.tr}>
              <th className={Styles.th}>Student Name</th>
              <th className={Styles.th}>Comment</th>
              <th className={Styles.th}>Feedback</th>
              <th className={Styles.th}>Facilitator Name</th>
            </tr>
          </thead>
          <tbody className={Styles.tbody}>
            {requests.map((request) => (
              <tr key={request.id}>
                <td>{request.studentname}</td>
                <td>{request.comment}</td>
                <td>{request.feedback}</td>
                <td>{request.facilitatorname}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
