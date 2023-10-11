import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { postRequest } from '../../services/apiService';
import { fetchFacilitators } from '../../redux/feature/facilitators/facilitatorsSlice';
import StudentNavbar from '../../components/StudentNavbar';
import Styles from './Request.module.css';

const Request = () => {
  const navigate = useNavigate();
  const [facilitator, setFacilitator] = useState('2');
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const { facilitators } = useSelector((state) => state.facilitators);
  console.log(facilitators);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!comment || comment === '') {
      return;
    }
    console.log(facilitator);
    if (!facilitator || facilitator === '') {
      return;
    }
    postRequest('requests/comment', { comment, facilitatorid: facilitator });
    navigate('/student/facilitators');
  };
  useEffect(() => {
    dispatch(fetchFacilitators());
  }, []);

  return (
    <div className="container">
      <StudentNavbar />
      <div className={Styles.Container}>
        <h2>Request</h2>
        <form className={Styles.formContainer} onSubmit={onSubmit}>
          {/*eslint-disable */}
          <label htmlFor="facilitator">Facilitator</label>
          <select
            name="facilitator"
            id="facilitator"
            value={facilitator}

            onChange={(e) =>
              setFacilitator(e.target.value)
            }
          >
            {facilitators.map((facilitator) => {
                return(
              <option key={facilitator.id} value={facilitator.id}>{facilitator.name}</option>)
            })}
          </select>
          <label htmlFor="comment">Comment</label>
          <input
            type="text"
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          {/* eslint-enable */}
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Request;
