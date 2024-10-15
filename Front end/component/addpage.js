// src/components/AddPage.js

import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AddPage() {
  const [formData, setFormData] = useState({
    cardtitle: '',
    description: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleReset = (event) => {
    event.preventDefault();
    setFormData({ cardtitle: '', description: '', image: '' }); // Reset form data
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/blogapp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      alert(result.message);
      handleReset(event); // Reset the form after submission
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting the form.');
    }
  };

  return (
    <div>
      <h2>Add Blog Content</h2>
      <i>Make sure to write correct information!</i>
        
      <Form id="addForm" onSubmit={handleSubmit}>
        <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Card Title</Form.Label>
          <Form.Control
            as="textarea"
            rows={1}
            name="cardtitle"
            value={formData.cardtitle}
            onChange={handleChange}
          />
        </Form.Group>
        
        <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea2">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </Form.Group>
        
        <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea3">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </Form.Group>

        <div className="mb-3">
          <Button variant="primary" type="submit" className="me-2">
            Submit
          </Button>
          <Button variant="secondary" onClick={handleReset}>
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AddPage;
