import React, { useState } from 'react'
import PageBox from '../components/PageBox/PageBox'
import contact from '../data/contact'
import * as validator from 'email-validator';
import ContactItem from '../components/Contact/ContactItem/ContactItem'
import { sendMessage } from '../utils/utils';
import Toast from '../components/Toast/Toast';

export default function Contact() {

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('false');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('false');
  const [message, setMessage] = useState('');
  const [messageTextError, setMessageTextError] = useState('');
  const [messageError, setMessageError] = useState('false');
  const [isClickOnSubmit, setIsClickOnSubmit] = useState('false');
  const [toast, setToast] = useState({ visible: false, message: '', type: 'info' });

  const showToast = (message, type = 'info') => {
    setToast({ visible: true, message, type });

    setTimeout(() => {
      setToast({ visible: false, message: '', type: 'info' });
    }, 3000);
  };
  const submit = (event) => {
    event.preventDefault();
    setIsClickOnSubmit(true);
    setNameError(false);
    setEmailError(false);
    setMessageError(false);
    if (name.trim() === '') {
      setNameError(true)
      setMessageTextError('Please enter your name')
      showToast('Please enter your name ', 'error');
      return
    }
    if (!validator.validate(email)) {
      setEmailError(true)
      setMessageTextError('Please enter valid email')
      showToast('Please enter valid email', 'error');
      return
    }
    if (message.trim() === '') {
      setMessageError(true)
      setMessageTextError('Please enter your message')
      showToast('Please enter your message', 'error');
      return
    }
    if (message.length > 2000) {
      setMessageError(true)
      setMessageTextError('The maximum length of the message is 2000 characters')
      showToast('The maximum length of the message is 2000 characters', 'error');
      return
    }
    sendMessage(name, email, message);
    setName('')
    setEmail('')
    setMessage('')
    showToast('Your message has been successfully sent🙂', 'success');

  }

  return (
    <PageBox title={'Contact'} >
      
      <div className="grid grid-cols-1 xl:grid-cols-3 grid-flow-row gap-4 ">
        <div className="row-span-4 grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-1 grid-flow-row gap-4 ">
          {
            contact.map((item => {
              return (
                <ContactItem key={item.key} {...item}>{item.icon}</ContactItem>
              );
            }))
          }
        </div>
        <div className='col-span-1 xl:col-span-2 xl:mx-4 w-full '>
          <div className='flex flex-col mr-4 gap-4 '>
            <h2 className='text-title text-1xl'>I'm eager to explore opportunities for application development and potential partnerships.</h2>
            <form className='flex flex-col gap-4' onSubmit={(event => { submit(event) })}>

              <div >

                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 text">Name*</label>
                <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Jim'></input>
                {isClickOnSubmit && nameError && (
                  <p className="text-red-500 text-xs italic mt-1">{messageTextError}</p>
                )}
              </div>
              <div >
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 text">Email*</label>
                <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='example@gmail.com'></input>
                {isClickOnSubmit && emailError && (
                  <p className="text-red-500 text-xs italic mt-1">{messageTextError}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 text">Message*</label>
                <textarea id="message" rows="4" value={message} onChange={(event) => setMessage(event.target.value)} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your message here..."></textarea>
                {isClickOnSubmit && messageError && (
                  <p className="text-red-500 text-xs italic mt-1">{messageTextError}</p>
                )}
              </div>
              <Toast message={toast.message} visible={toast.visible} type={toast.type} />
              <button type='submit' className='ring-1 ring-primary rounded-full px-6 py-2 mt-1 w-32
              btn ' >Submit</button>
            </form>
          </div>



        </div>
      </div>
    </PageBox>
  )
}
