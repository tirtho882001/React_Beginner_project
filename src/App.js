import React, { useState } from "react";
import Title from "./components/Title";


function App() {

  const [name, setName] = useState('Sign');
  const [date, setDate] = useState('DOB');

  return (
    <div className="container-fluid">
      <h1 className="text-center">Signature app</h1>
      <Title text={name} />
      <Title text={date} />
      <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was popularised
        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and scrambled
        it to make a standard dummy text ever since the 1500s, when an unknown printer took a galley
      </p>
      <div className="d-flex input-boxes" >
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
    </div>
  );
}

export default App;
