import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StudentNavbar from '../../components/StudentNavbar';
import { fetchRequests } from '../../redux/feature/requests/requestsSlice';
import image from '../../assets/facilitator 4.jpg';
import Styles from './student.module.css';

const Student = () => {
  const dispatch = useDispatch();
  const { requests } = useSelector((state) => state.requests);
  console.log(requests);
  useEffect(() => {
    dispatch(fetchRequests());
  }, []);

  return (
    <div className={Styles.container}>
      <StudentNavbar />
      <div className={Styles.requestContainer}>
        <h2>Requests</h2>
        {requests.map((request) => (
          <div className={Styles.request} key={request.id}>
            <h4>{request.facilitatorname}</h4>
            <div className={Styles.convo}>
              <img src={image} className={Styles.image} width="100px" alt="thumbnail" />
              <div className="div">
                <p className={Styles.userrequest}>{`request:  ${request.comment}`}</p>
                <p className={Styles.reply}>{`reply:${request.feedback ? request.feedback : ''}`}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Student;
