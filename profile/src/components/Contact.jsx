// src/components/Contact.jsx
import React from 'react';
import { Form, Input, Button } from 'antd';
import '../App.css'; // Make sure this is imported if not already

const Contact = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
    alert("Message sent successfully!");
  };

  return (
    <div id="contact">
      <div className="contact-wrapper">
        <h1>Contact Me</h1>
        <Form
          layout="vertical"
          onFinish={onFinish}
          className="contact-form"
        >
          <Form.Item
            label="Your Name"
            name="name"
            rules={[{ required: false, message: 'Please enter your name' }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: false, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email' }
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Message"
            name="message"
            rules={[{ required: false, message: 'Please enter your message' }]}
          >
            <Input.TextArea rows={3} placeholder="Type your message here..." />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Send Message
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
