import React, { useState } from "react";

export const WeatherForm = ({onChangeCity}) => {
  const [city, setCity] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if(city.length>3){
      onChangeCity(city);
    }
    
  };
  return (
    <form onSubmit={handleSubmit} className="pt-4">
      <div className="container weatherForm">
        <h3>Digite la ciudad</h3>
        <div className="input row">
          <div className="col-9" style={{paddingLeft: "0"}}>
            <input
              type="text"
              className="form-control"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <button className="btn btn-primary col-3" type="submit">
            Buscar
          </button>
        </div>
      </div>
    </form>
  );
};
