import React from 'react';
import InputField from './InputField';
import Button from './Button';
import SocialLoginButton from './SocialLoginButton';
import Divider from './Divider';
import NavigationArrows from '../../layouts/MainLayout/NavigationArrows';

function LoginForm() {
  return (
    <center>
      <NavigationArrows />
      <form className="flex flex-col p-6 rounded-lg bg-white bg-opacity-30 max-w-[430px] mt-10">
        <header className="flex flex-col self-start text-white">
          <h1 className="text-2xl font-medium tracking-widest text-left">
            Login
          </h1>
          {/* <p className="text-base">Navigating Health Care Together.</p> */}
        </header>
        <main className="flex flex-col mt-6 w-full">
          <InputField
            label="Email Address"
            placeholder="e.g john.doe@sample.com"
            type="email"
          />
          <InputField
            label="Password"
            placeholder="Enter your password"
            type="password"
          />
          <div className="mt-4 text-sm leading-none text-right text-white">
            <a href="#forgot-password" className="hover:underline">
              Forgot Password?
            </a>
          </div>
        </main>
        <Button text="Continue" />
        <Divider />
        <div className="flex gap-2 justify-center items-start mt-2 w-full">
          <SocialLoginButton provider="google" />
          <SocialLoginButton provider="apple" />
        </div>
      </form>
    </center>
  );
}

export default LoginForm;
