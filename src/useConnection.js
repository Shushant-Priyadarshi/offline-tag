import { useState, useEffect } from "react";

const useConnection = () => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online",()=>{
      setStatus(true)
    })

    window.addEventListener("offline",()=>{
      setStatus(false)
    })
   
  }, []);

  return status;
};

export default useConnection;
