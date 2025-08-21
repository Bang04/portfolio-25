import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

        if (form.current) {
            const SERVICE_ID = "service_0d3fvty";
            const TEMPLATE_ID = "template_nozjzpe";
            const PUBLIC_KEY = "";

             emailjs
                .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
                    publicKey: PUBLIC_KEY,
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error: any) => {
                        console.log('FAILED...', error.text);
                    },
                );
        } else {
            console.log('Form reference is null.');
        }
    };

    return (
        <div className="w-full min-h-100 bg-[#8490c8]">
             <div className="text-lg font-semibold text-center">Contact</div>

            <form ref={form} onSubmit={sendEmail}>
                <div className="flex justify-center ">
                <div className='flex flex-col items-center max-w-xl boarder border-red-200 shadow-lg rounded-md gap-y-6 '>
                    <input type="text" name="name" className='w-3/4 text-gray-500 bg-gray-50 rounded-md p-2' placeholder='user name' required/>
                    <input type="email" name="email"  className='w-3/4 text-gray-500 bg-gray-50 rounded-md p-2' placeholder='your email' required/>
                    <textarea name="message"  className='w-3/4 text-gray-500 bg-gray-50 rounded-md p-2' placeholder='message'/>
                    <input type="submit" value="Send"  className='text-white bg-black  px-5 py-1 rounded-md'/>
                </div>
                </div>
               
            </form>
        </div>
    );
};