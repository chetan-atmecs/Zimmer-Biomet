import React from 'react';
import InputField from './InputField';

function RegistrationForm() {
  const inputFields = [
    { label: 'Name', placeholder: 'Enter name' },
    { label: 'Email Address', placeholder: 'e.g john.doe@sample.com', type: 'email' },
    { label: 'Password', placeholder: 'Enter your password', type: 'password' },
    { label: 'Confirm Password', placeholder: 'Enter your password', type: 'password' },
  ];

  const stylebutton = {
    borderRadius: '8px',
    background: 'linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)',
    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.20)',
    padding: '20px',
    color: '#fff',
    textAlign: 'center',
  };

  return (
    <form className="flex flex-col self-center p-6 mt-30 max-w-full rounded-lg bg-white bg-opacity-30 w-[430px] max-md:px-5 max-md:mt-10">
      <header className="flex flex-col self-start text-white">
        <h1 className="text-2xl font-medium tracking-widest">Registration</h1>
        <p className="text-base">Your Trusted Companion in Cancer Care.</p>
      </header>
      <div className="flex flex-col w-full">
        {inputFields.map((field, index) => (
          <InputField key={index} {...field} />
        ))}
      </div>
      <div className="flex flex-col mt-6 w-full">
        <button
        style={stylebutton}
          type="submit"
          className="flex justify-center items-center w-full text-sm font-medium leading-none text-white uppercase whitespace-nowrap rounded-lg shadow-[0px_0px_4px_rgba(0,0,0,0.2)] py-4 pr-4 pl-3"
        >
          continue
        </button>
        <p className="mt-2 text-xs text-center text-white">
          By creating an account, I agree with Terms & conditions and Privacy policy.
        </p>
      </div>
    </form>
  );
}

export default RegistrationForm;