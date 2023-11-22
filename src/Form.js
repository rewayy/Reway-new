// SimpleForm.js
import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Form.css"; // Import the CSS file
import india from  "./components/india.png";

const SimpleForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    address: "India",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "your_service_id";
    const templateId = "your_template_id";
    const publicKey = "your_public_key";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "Web Wizard",
      message: formData.message,
      address: formData.address,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response);
        setFormData({
          name: "",
          email: "",
          message: "",
          address: "India",
        });
      })
      .catch((error) => {
        console.log("FAILED...", error);
      });
  };

  return (
    <div className="container">
      <h1>Contact US</h1>
      
      
      <div className="form-container">
          <div className="right">
             <img  className='indian' src={india} alt="india"/>
          </div>
          <div className="left">
          <div className="form1">
          <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
          className="form__input"
        />
       <br/>
       <br/><br/>
       

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="form__input"
        />
       <br/><br/><br/>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Message"
          className="form__input"
        ></textarea>
        <br/><br/><br/><br/>

        <label style={{ textAlign: 'left', display: 'block', marginBottom: '10px' }}>Address</label>
        <select
  required
  id="address"
  name="address"
  className="form__input"
  value={formData.address}
  onChange={handleInputChange}
>
  <option value="Andhra Pradesh">Andhra Pradesh</option>
  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
  <option value="Assam">Assam</option>
  <option value="Bihar">Bihar</option>
  <option value="Chhattisgarh">Chhattisgarh</option>
  <option value="Goa">Goa</option>
  <option value="Gujarat">Gujarat</option>
  <option value="Haryana">Haryana</option>
  <option value="Himachal Pradesh">Himachal Pradesh</option>
  <option value="Jharkhand">Jharkhand</option>
  <option value="Karnataka">Karnataka</option>
  <option value="Kerala">Kerala</option>
  <option value="Madhya Pradesh">Madhya Pradesh</option>
  <option value="Maharashtra">Maharashtra</option>
  <option value="Manipur">Manipur</option>
  <option value="Meghalaya">Meghalaya</option>
  <option value="Mizoram">Mizoram</option>
  <option value="Nagaland">Nagaland</option>
  <option value="Odisha">Odisha</option>
  <option value="Punjab">Punjab</option>
  <option value="Rajasthan">Rajasthan</option>
  <option value="Sikkim">Sikkim</option>
  <option value="Tamil Nadu">Tamil Nadu</option>
  <option value="Telangana">Telangana</option>
  <option value="Tripura">Tripura</option>
  <option value="Uttar Pradesh">Uttar Pradesh</option>
  <option value="Uttarakhand">Uttarakhand</option>
  <option value="West Bengal">West Bengal</option>
  <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
  <option value="Chandigarh">Chandigarh</option>
  <option value="Dadra and Nagar Haveli and Daman and Diu">
    Dadra and Nagar Haveli and Daman and Diu
  </option>
  <option value="Lakshadweep">Lakshadweep</option>
  <option value="Delhi">Delhi</option>
  <option value="Puducherry">Puducherry</option>
</select>

        <button type="submit">Submit</button>
      </form>
      </div>
          </div>



      </div>
    </div>
  );
};

export default SimpleForm;
