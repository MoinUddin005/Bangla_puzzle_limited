/* eslint-disable no-unused-vars */
import React from "react";

const Address = () => {
  return (
    <div className="container py-8">
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14610.059367731295!2d90.4009475!3d23.7290134!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2290178cf2c42315!2sBangladesh%20Shishu%20Academy!5e0!3m2!1sen!2sbd!4v1675940906085!5m2!1sen!2sbd"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <h5 className="uppercase  text-2xl font-bold">Present Address</h5>
            <p>
              Present Address- Bangladesh Shishu Academy ,<br /> Doyel Chattor,
              Shabag, Dhaka-1000
            </p>
          </div>
          <div>
          <h5 className="uppercase  text-2xl font-bold">Permanent  Address</h5>
            <p>
              Permanent Address- Mymensingh District <br /> Mymensingh,
              Bangladesh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
