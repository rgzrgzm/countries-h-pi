import React from "react";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search country" />

        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Form;
