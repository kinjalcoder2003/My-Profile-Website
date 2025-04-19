// src/components/Contact.jsx
import React, { useState } from 'react';
import { Form, Input, Button, notification } from 'antd';
import '../App.css'; // Make sure this is imported if not already
import emailjs from 'emailjs-com';

const Contact = () => {

 const [messageStatus, setMessageStatus] = useState(null); 

  // Form submission handler
  const onFinish = async (values) => {
    if (!values.name || !values.email || !values.message) {
      setMessageStatus({
        type: "error",
        message: "All fields are required. Please fill in all the fields.",
      });
      return; 
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(values.email)) {
      setMessageStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return; 
    }

    try {
      await emailjs.send(
        "service_dem6o8d",//service
        "template_hibgpmd"//template
        , 
                {
          name: values.name,
          email: values.email,
          message: values.message,
        },
        "-uWJ8hWP215V4R7UE" //public key
      )

      setMessageStatus({
        type: "success",
        message: "Your message has been sent to Kinjal Joshi.",
      });

      notification.success({
        message: "Message Sent Successfully",
        description: "Your message has been sent to Kinjal Joshi.",
        placement: "topRight",
        duration: 3,
      });
    } catch (error) {
      setMessageStatus({
        type: "error",
        message: "There was an issue sending your message. Please try again.",
        
      });

      notification.error({
        message: "Message Failed",
        description: "There was an issue sending your message. Please try again.",
        placement: "topRight",
        duration: 3,
      });
    }
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
            {/* Show custom status message above the Submit button */}
        {messageStatus && (
          <div
            style={{
              backgroundColor: messageStatus.type === "success" ? "#4CAF50" : "#f44336",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            {messageStatus.message}
          </div>
        )}
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
