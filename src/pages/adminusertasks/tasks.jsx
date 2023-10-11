import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import image from '../../assets/facilitator 4.jpg';
import { updateRequest } from '../../services/apiService';
import { fetchAdminrequests } from '../../redux/feature/adminrequests/adminrequestsSlice';
import AdminNavbar from '../../components/AdminNavbar';
import Styles from './task.module.css';

const Tasks = () => {
  const [replies, setReplies] = useState({});
  const dispatch = useDispatch();
  const { adminrequests } = useSelector((state) => state.adminrequests);
  console.log(adminrequests);
  useEffect(() => {
    const initialReplies = {};
    adminrequests.forEach((request) => {
      initialReplies[request.id] = request.feedback || '';
    });
    setReplies(initialReplies);
    dispatch(fetchAdminrequests());
  }, []);

  return (
    <div className={Styles.container}>
      <AdminNavbar />
      <div className={Styles.requestContainer}>
        <h2>Issues</h2>
        {adminrequests.map((request, index) => (
          <div className={Styles.request} key={request.id}>
            <h4>{request.studentname}</h4>
            <div className={Styles.convo}>
              <img className={Styles.image} width="100px" src={image} alt="thumbnail" />
              <div className="div">
                <p className={Styles.userrequest}>{`request:  ${request.comment}`}</p>
                <p className={Styles.reply}>
                  reply:
                  <input
                    type="text"
                    value={replies[request.id] || request.feedback}
                    onChange={(e) => {
                      const updatedReplies = { ...replies };
                      updatedReplies[request.id] = e.target.value;
                      setReplies(updatedReplies);
                    }}
                  />
                  <button
                    type="submit"
                    onClick={() => {
                      const reply = replies[index];
                      console.log(reply);
                      if (!reply || reply === '') return;

                      updateRequest('tasks/comment', { feedback: reply, taskid: request.id });
                    }}
                  >
                    Send
                  </button>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
