// Form.js

import React, { useState } from 'react';
import '../style.css';

const Form = () => {
  const [formData, setFormData] = useState({
    authenticationKey: '',
    title: '',
    description: '',
    tags: '',
    date: '',
    software: '',
    thumbnail: null,
    sourceFile: null,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'file' ? e.target.files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="form-container">
      <h2>Form Component</h2>
      <form onSubmit={handleSubmit}>
        <div className='container'>
          <div className='width'>
            <div className='tag'>
              <label htmlFor="authenticationKey" className="label">
                Authentication Key:
              </label>
              <input
                type="password"
                id="authenticationKey"
                name="authenticationKey"
                value={formData.authenticationKey}
                onChange={handleChange}
              />
            </div>
            <div className='tag'>
              <label htmlFor="title" className="label">
                Title:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className='tag'>
              <label htmlFor="description" className="label">
                Description:
              </label>
              <textarea
                id="description"
                name="description"
                rows="7"
                value={formData.description}
                placeholder='Description'
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='width'>
            <div className='tag'>
              <label htmlFor="tags" className="label">
                Tags (comma separated):
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
              />
            </div>
            <div className='tag'>
              <label htmlFor="date" className="label">
                Date:
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div className='tag'>
              <label htmlFor="software" className="label">
                Software:
              </label>
              <select
                id="software"
                name="software"
                value={formData.software}
                onChange={handleChange}
              >
                {/* <option value=""></option> */}
                <option value="option1">Sketch</option>
                <option value="option2">Mongoose</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className='upload'>
              <div className='tag'>
                <label htmlFor="thumbnail" className="label">
                  Thumbnail Image:
                </label>
                <input
                  type="file"
                  id="thumbnail"
                  name="thumbnail"
                  onChange={handleChange}
                />
                {/* {formData.thumbnail && (
            <p>Selected File: {formData.thumbnail.name}</p>
          )} */}
              </div>
              <div className='tag'>
                <label htmlFor="sourceFile" className="label">
                  Source File:
                </label>
                <input
                  type="file"
                  id="sourceFile"
                  name="sourceFile"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div id="submit"><button type="submit">Submit</button></div>
        
      </form>
    </div>
  );
};

export default Form;
