'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
    setIsRegisterOpen(false);
  };
  const toggleRegister = () => {
    setIsRegisterOpen(!isRegisterOpen);
    setIsLoginOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.navbar') && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <>
      <nav className="flex items-center justify-between px-16 py-4 border-b shadow-md bg-white z-30 sticky top-0 navbar">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Bars3Icon className="w-16 h-6 cursor-pointer" onClick={toggleMenu} />
          <Link href="/" passHref>
            <div className="w-10 h-10 flex justify-center items-center border rounded-full cursor-pointer">
              <Image
                src="/images/logoV1.jpg"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex items-center w-1/3">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring"
          />
          <button className="ml-2 hover:text-blue-500 transition duration-300 ease-in-out">
            <MagnifyingGlassIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLogin}
            className="text-sm font-medium hover:text-blue-500 transition duration-300 ease-in-out"
          >
            SIGN IN
          </button>
          <HeartIcon className="w-6 h-6 hover:text-red-500 transition duration-300 ease-in-out" />
          <ShoppingCartIcon className="w-6 h-6 hover:text-green-500 transition duration-300 ease-in-out" />
        </div>
      </nav>

      {/* Hamburger Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleMenu}
        >
          <div
            className="absolute top-8 left-0 w-64 bg-white p-6 shadow-md transition-transform transform translate-y-10 duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="space-y-4">
              <NavLink href="/" label="HOME" />
              <NavLink href="/about-website" label="ABOUT WEBSITE" />
              <NavLink href="/about-varranrat" label="ABOUT VARRANRAT T." />
              <NavLink href="/paintings" label="PAINTINGS" />
              <NavLink href="/contact" label="CONTACT" />
              <li>
                <button className="w-full text-lg text-black hover:text-blue-500 transition duration-300 ease-in-out">
                  CHANGE LANGUAGE
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Login Overlay */}
      {isLoginOpen && (
        <Overlay onClick={toggleLogin}>
          <div className="bg-white w-[400px] h-[530px] p-6 rounded-lg shadow-lg relative">
            <CloseButton onClick={toggleLogin} />
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Sign in</h2>
              <button
                onClick={toggleRegister}
                className="px-3 py-1 border border-black rounded-full text-sm font-normal hover:bg-gray-100 transition duration-300 ease-in-out"
              >
                Register
              </button>
            </div>
            <LoginForm />
          </div>
        </Overlay>
      )}

      {/* Register Overlay */}
      {isRegisterOpen && (
        <Overlay onClick={toggleRegister}>
          <div className="bg-white w-[400px] h-[540px] p-6 rounded-lg shadow-lg relative">
            <CloseButton onClick={toggleRegister} />
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Create your account</h2>
              <button
                onClick={toggleLogin}
                className="px-3 py-1 border border-black rounded-full text-sm font-normal hover:bg-gray-100 transition duration-300 ease-in-out"
              >
                Sign in
              </button>
            </div>
            <RegisterForm />
          </div>
        </Overlay>
      )}
    </>
  );
};

const NavLink = ({ href, label }) => (
  <li>
    <Link href={href} passHref>
      <button className="w-full text-lg text-black hover:text-blue-500 transition duration-300 ease-in-out">
        {label}
      </button>
    </Link>
  </li>
);

const Overlay = ({ onClick, children }) => (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 z-30 flex items-center justify-center"
    onClick={onClick}
  >
    <div
      className="w-full max-w-lg p-6 rounded-lg shadow-lg"
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  </div>
);

const CloseButton = ({ onClick }) => (
  <XMarkIcon
    className="w-6 h-6 absolute top-4 right-4 cursor-pointer hover:text-red-500"
    onClick={onClick}
  />
);

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to log in');
      }
      alert('Sign in successful!');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handleSignIn}>
      <InputField
        id="email"
        label="Email*"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        id="password"
        label="Password*"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="w-full bg-black hover:bg-blue-600 text-white py-3 border rounded-full">
        SIGN IN
      </button>
    </form>
  );
};

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstname, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to sign up');
      }
      alert('Sign up successful!');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <InputField
        id="email"
        label="Email*"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        id="firstname"
        label="First name*"
        type="text"
        placeholder="Enter your first name"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
      />
      <InputField
        id="password"
        label="Password*"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="w-full bg-black hover:bg-blue-600 text-white py-3 border rounded-full">
        REGISTER
      </button>
    </form>
  );
};

const InputField = ({ id, label, type, placeholder, value, onChange }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium">
      {label}
    </label>
    <input
      type={type}
      id={id}
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default Navbar;
