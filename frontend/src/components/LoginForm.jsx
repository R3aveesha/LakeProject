import axios from "axios";
import React from "react";

const LoginForm = () => {

    const handleSubmit = async () => {
        const res = await axios.post(Login, formData)
    }
  return (
    <div>
      <form onSubmit={handleSubmit} method="post">
        <input type="submit" value="" />
      </form>
    </div>
  );
};

export default LoginForm;
