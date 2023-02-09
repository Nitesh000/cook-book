import axios from "axios";

const useSendReq = (url: string, inputs: {}) => {
  const sendReq = async () => {
    const data = await axios.post(url, inputs);
    console.log(data);
    return data;
  };
  const data = sendReq();
  return data;
};

export default useSendReq;
