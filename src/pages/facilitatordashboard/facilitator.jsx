import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRequests } from '../../redux/feature/requests/requestsSlice';
import image from '../../assets/facilitator 4.jpg';
import { updateRequest } from '../../services/apiService';
import FacilitatorNavbar from '../../components/FacilitatorNavbar';
import Styles from './facilitator.module.css';

const Facilitator = () => {
  const [replies, setReplies] = useState({});
  const dispatch = useDispatch();
  const { requests } = useSelector((state) => state.requests);
  console.log(requests);
  useEffect(() => {
    const initialReplies = {};
    requests.forEach((request) => {
      initialReplies[request.id] = request.feedback || '';
    });
    setReplies(initialReplies);
    dispatch(fetchRequests());
  }, [dispatch]);

  return (
    <div className={Styles.container}>
      <FacilitatorNavbar />
      <div className={Styles.requestContainer}>
        <h2>Requests</h2>
        {requests.map((request) => (
          <div className={Styles.request} key={request.id}>
            <h4>{request.studentname}</h4>
            <div className={Styles.convo}>
              <img src={image} className={Styles.image} width="100px" alt="thumbnail" />
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
                      const reply = replies[request.id];
                      if (!reply || reply === '') return;

                      updateRequest('requests/comment', { feedback: reply, requestid: request.id });
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

export default Facilitator;
