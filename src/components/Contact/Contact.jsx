import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Input } from "@material-tailwind/react";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kii1kqo', 'template_h3vo3qf', form.current, '_qQ0NXg3oFA4OibvK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
<>

    <form ref={form} className='w-full border p-10 grid grid-cols-1 gap-10'>

        <Input size='lg' label='Nom' required/>
        <Input size='lg' label='Email' type='email' required/>
    </form>
</>
  );
};

export default Contact