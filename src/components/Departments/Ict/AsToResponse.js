import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AsToResponse() {
  const { taskid, userid } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const AssignedTask = async () => {
      const response = await fetch(
        `http://localhost:8080/task/${taskid}/${userid}`
      );
      if (!response.ok) {
        console.log("Something went wrong");
      }
      const data = await response.json();

      console.log(data);
      setIsLoading(false);
    };

    AssignedTask();
  }, [taskid, userid]);
  return (
    <>
      <div>{isLoading && <h4>Loading...</h4>}</div>
      <div>{!isLoading && <h1>The Response</h1>}</div>
    </>
  );
}

export default AsToResponse;
