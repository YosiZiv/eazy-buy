import { useState } from "react";
import axios from "axios";

export default ({ url, method, onSuccess }) => {
  const [requestErrors, setRequestErrors] = useState(null);
  const doRequest = async (body) => {
    try {
      setRequestErrors(null);
      const response = await axios[method](url, body);
      if (onSuccess) {
        onSuccess(response.data);
      }
      return response.data;
    } catch (err) {
      console.log(err);
      setRequestErrors(
        <div className='alert alert-danger'>
          <h4>Ooops....</h4>
          <ul className='my-0'>
            {err.response?.data?.errors?.map((err) => (
              <li key={err.message}>{err.message}</li>
            ))}
          </ul>
        </div>
      );
    }
  };
  return { doRequest, requestErrors };
};
