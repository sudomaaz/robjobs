import React from "react";

const Table = ({ name, experience, resume }) => {
  const resumeUrl = "/resumes/" + resume;
  return (
    <tr>
      <td>{name}</td>
      <td>{experience}</td>
      <td>
        <a href={resumeUrl} target="_blank" rel="noreferrer">
          {resume}
        </a>
      </td>
    </tr>
  );
};

export default Table;
