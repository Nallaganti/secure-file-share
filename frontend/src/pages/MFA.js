import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MFA = () => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const verifyMFA = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post("http://127.0.0.1:8000/auth/mfa/", { code }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate("/dashboard");
    } catch (error) {
      console.error("MFA verification failed", error);
    }
  };

  return (
    <div>
      <h2>Enter MFA Code</h2>
      <input type="text" placeholder="Enter 6-digit code" value={code} onChange={(e) => setCode(e.target.value)} />
      <button onClick={verifyMFA}>Verify</button>
    </div>
  );
};

export default MFA;
