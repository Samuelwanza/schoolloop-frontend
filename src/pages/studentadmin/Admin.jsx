import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StudentNavbar from '../../components/StudentNavbar';
import image from '../../assets/facilitator 2.jpg';
import { fetchAdminrequests } from '../../redux/feature/adminrequests/adminrequestsSlice';
import Styles from './Admin.module.css';

const Admin = () => {
  const dispatch = useDispatch();
  const { adminrequests } = useSelector((state) => state.adminrequests);
  console.log(adminrequests);
  useEffect(() => {
    dispatch(fetchAdminrequests());
  }, []);

  return (
    <div className={Styles.container}>
      <StudentNavbar />
      <div className={Styles.requestContainer}>
        <h2>Issues</h2>
        {adminrequests.map((request) => (
          <div className={Styles.request} key={request.id}>
            <h4>{request.facilitatorname}</h4>
            <div className={Styles.convo}>
              <img src={image} className={Styles.image} width="100px" alt="thumbnail" />
              <div className="div">
                <p className={Styles.userrequest}>{`request:${request.comment}`}</p>
                <p className={Styles.reply}>{`reply:${request.feedback ? request.feedback : ''}`}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
