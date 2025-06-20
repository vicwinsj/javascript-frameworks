import React, { useState, useEffect } from "react";
import {
  ContactContainer,
  ContactForm,
  ContactInput,
  ContactMessage,
  LabelAndInput,
  ErrorMessage,
} from "./ContactStyles";
import { AlternateButton } from "../../components/Button/Button";

const ContactPage = () => {
  useEffect(() => {
    document.title = "Fyke | Contact Us";
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters";
    }

    if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (formData.body.trim().length < 3) {
      newErrors.body = "Message must be at least 3 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setFormData({ fullName: "", subject: "", email: "", body: "" });
    }
  };

  return (
    <ContactContainer>
      <h1>Contact Us</h1>
      <ContactForm onSubmit={handleSubmit}>
        {/* Name */}
        <LabelAndInput>
          <label htmlFor="fullName">Name</label>
          <ContactInput
            id="fullName"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            style={errors.fullName ? { borderColor: "red" } : {}}
          />
          {errors.fullName && <ErrorMessage>{errors.fullName}.</ErrorMessage>}
        </LabelAndInput>

        {/* Email */}
        <LabelAndInput>
          <label htmlFor="email">Email</label>
          <ContactInput
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={errors.email ? { borderColor: "red" } : {}}
          />
          {errors.email && <ErrorMessage>{errors.email}.</ErrorMessage>}
        </LabelAndInput>

        {/* Subject */}
        <LabelAndInput>
          <label htmlFor="subject">Subject</label>
          <ContactInput
            id="subject"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            style={errors.subject ? { borderColor: "red" } : {}}
          />
          {errors.subject && <ErrorMessage>{errors.subject}.</ErrorMessage>}
        </LabelAndInput>

        {/* Message Body */}
        <LabelAndInput>
          <label htmlFor="body">Message</label>
          <ContactMessage
            id="body"
            as="textarea"
            name="body"
            value={formData.body}
            onChange={handleChange}
            style={errors.body ? { borderColor: "red" } : {}}
          ></ContactMessage>
          {errors.body && <ErrorMessage>{errors.body}.</ErrorMessage>}
        </LabelAndInput>

        {/* Submit Button */}
        <AlternateButton type="submit">Submit</AlternateButton>
      </ContactForm>

      {submitted && <p>Message sent successfully!</p>}
    </ContactContainer>
  );
};

export default ContactPage;
