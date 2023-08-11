import { useState } from "react";

export default function UseState() {
  const [show, setShow] = useState(false);
  const storageJobs = localStorage.getItem("jobs");
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(JSON.parse(storageJobs) ?? []);

  const handleSubmit = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job];
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);
      return newJobs;
    });
    setJob("");
  };
  return (
    <>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && (
        <div style={{ padding: 30 }}>
          <input value={job} onChange={(e) => setJob(e.target.value)} />
          <button onClick={handleSubmit}>Add</button>

          {jobs.map((job, index) => (
            <li key={index}>{job}</li>
          ))}
        </div>
      )}
    </>
  );
}
