import { configureStore } from '@reduxjs/toolkit';
import adminrequestsSlice from './feature/adminrequests/adminrequestsSlice';
import requestsSlice from './feature/requests/requestsSlice';
import userSlice from './feature/user/userSlice';
import facilitatorsSlice from './feature/facilitators/facilitatorsSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    adminrequests: adminrequestsSlice,
    requests: requestsSlice,
    facilitators: facilitatorsSlice,
  },
});

export default store;
