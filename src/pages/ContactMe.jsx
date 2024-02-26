import { useState } from 'react';

const ContactMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);

    if (!name.trim()) {
      setNameError('Name is required');
    } else {
      setNameError('');
    }

    if (!email.trim()) {
      setEmailError('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(email.trim())) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }

    if (!message.trim()) {
      setMessageError('Message is required');
    } else {
      setMessageError('');
    }
  };

  return (
    <div>
      <h1 className='text-input'>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Name"
          className="enter-input" 
        />
        {submitted && !name.trim() && <span className="error-message">{nameError}</span>}
        <br />
        <input
          type="text"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
          className="enter-input" 
        />
        {submitted && !email.trim() && <span className="error-message">{emailError}</span>}
        <br />
        <textarea
          value={message}
          onChange={handleMessageChange}
          placeholder="Leave a message"
          className="message-input" 
        />
        {submitted && !message.trim() && <span className="error-message">{messageError}</span>}
        <br />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ContactMe;