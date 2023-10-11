import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postRequest } from '../../services/apiService';
import StudentNavbar from '../../components/StudentNavbar';
import Styles from './AdminRequest.module.css';

const AdminRequest = () => {
  const navigate = useNavigate();
  const [comment, setComment] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    if (!comment || comment === '') {
      return;
    }
    postRequest('tasks/comment', { comment });
    navigate('/student/admin');
  };
  useEffect(() => {
  }, []);

  return (
    <div className="container">
      <StudentNavbar />
      <div className={Styles.Container}>
        <h2>Request</h2>
        <form className={Styles.formContainer} onSubmit={onSubmit}>
          {/* eslint-disable */}
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

export default AdminRequest;
