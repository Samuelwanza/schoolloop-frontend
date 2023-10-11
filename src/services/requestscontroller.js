const requestsubmissionstatus = (url, data, apirequest) => {
  try {
    const status = apirequest(url, data);
    console.log(status);
  } catch (error) {
    console.log('error message:', error.message);
  }
};
export default requestsubmissionstatus;
