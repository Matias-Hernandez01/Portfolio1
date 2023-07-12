import { error } from 'console';
import { Landing } from '../../view';
import style from './ContactComponent.module.css';
import React, { ChangeEvent, useState } from 'react';

interface form {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactComponent = () => {
  const [form, setForm] = useState<form>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<form>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const formChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name: string = event.target.name;
    const value: string = event.target.value;
    setForm({ ...form, [event.target.name]: event.target.value });
    validator(name, value);
  };

  const onSend = () => {}; //!RECIBE FORM Y LO ENVIA !

  const validator = (name: string, value: string) => {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (name === 'name' && !value.length) {
      setErrors({
        ...errors,
        name: 'Required field',
      });
    } else if (name === 'nombre') {
      setErrors({
        ...errors,
        name: '',
      });
    }
    if (name === 'email' && !regexEmail.test(value)) {
      setErrors({
        ...errors,
        email: 'wrong mail format',
      });
    } else if (name === 'email') {
      setErrors({
        ...errors,
        email: '',
      });
    }
    if (name === 'subject' && !value.length) {
      setErrors({
        ...errors,
        subject: 'Fiel required',
      });
    } else if (name === 'subject') {
      setErrors({ ...errors, subject: '' });
    }

    if (name === 'message' && !value.length) {
      setErrors({
        ...errors,
        message: 'Required field',
      });
    } else if (name === 'message') {
      setErrors({ ...errors, message: '' });
    }
  };

  console.log(errors);

  return (
    <div className={style.mainContainer}>
      <div className={style.landinContainer}>
        <Landing />
      </div>
      <div className={style.formContainer}>
        <div className={style.containerTitle}>
          <h1 className={style.title}>Contact:</h1>
        </div>
        <div className={style.containerContact}>
          <h1 className={style.textInfo}>Email</h1>
          <h3 className={style.span}>matias2k00@gmail.com</h3>
          <h1 className={style.textInfo}>Location</h1>
          <h3 className={style.span2}>Buenos Aires-Argentina</h3>
          <h1 className={style.textInfo}>Phone</h1>
          <h3 className={style.span3}>(+54)1162732692</h3>
        </div>
        <div>
          <h1 className={style.titleSend}>Send me an email</h1>
        </div>
        <div className={style.formulario}>
          <form className={style.form} onSubmit={() => onSend}>
            <div className={style.inputContainer}>
              <input
                placeholder='Name'
                className={style.inputExtras}
                name='name'
                onChange={formChange}
              />
            </div>
            <div className={style.inputContainer}>
              <input
                placeholder='Email'
                className={style.inputExtras}
                name='email'
                onChange={formChange}
              />
            </div>
            <div className={style.inputContainer}>
              <input
                placeholder='Subject'
                className={style.inputExtras}
                name='subject'
                onChange={formChange}
              />
            </div>
            <div className={style.inputContainer}>
              <input
                placeholder='Message'
                className={style.input}
                name='message'
                onChange={formChange}
              />
            </div>
            <div className={style.buttonContainer}>
              <button
                className={style.buttonSend}
                disabled={
                  !form.name || !form.email || !form.subject || !form.message
                }
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactComponent;
