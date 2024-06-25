import React from "react";

export const Info = ({ data }) => {
  return (
    <>
      <div className="container info">
        <h4>
          {data.location.name} {data.location.country}
        </h4>
        <div className="information">
          <div className="infoIcon">
            <div>
              <img
                className="icon"
                src={`http:${data.current.condition.icon}`}
                alt={`http:${data.current.condition.text}`}
              />
            </div>
            <div className="gradosYtext">
              <div className="grados">{data.current.temp_c}º</div>
              <div>{data.current.condition.text}</div>
            </div>
          </div>
          <div className="fechaHora">
            <h5 >Fecha: {data.location.localtime.substring(0, 10)}</h5>
            <h5 >Hora: {data.location.localtime.substring(11, 17)}</h5>
          </div>
        </div>
        <div>
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15719.066539948917!2d${data.location.lon}!3d${data.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1718941596765!5m2!1ses!2sco`}
            width="600"
            height="450"
            style={{ border: 0, borderRadius: 10 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};
