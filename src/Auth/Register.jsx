import React, { useState } from 'react'
import { useRegisterUserMutation } from '../Apis/UserApi';
import { useNavigate } from 'react-router-dom'; 

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    re_password: ''
  });

  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [createUser] = useRegisterUserMutation()

  const handleSubmit = async(e) => {
    e.preventDefault();

    // if (!username || !email || !password || !re_password) {
    //   setError('All fields are required');
    //   return;
    // }else{
        try {
          const response = await createUser(formData).unwrap()
          if(response){
            setSuccess(true)
            setFormData({email:"", username:"", password:""})
            navigate("/login") 
            console.log(response)  
          }
          
        } catch (err) {
          if (err?.data?.error) {
            alert(`Error: ${err.data.error}`);
          } else {
            alert("user already present or invalid credentials");
            console.error(err);
            setSuccess(false)
          }
        }
  };


  return (
    <div className="max-w-md mx-auto mt-50 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Register</h2>

      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
      {success ? (
        <div className="text-green-500 text-center mb-4">
          Registration successful!
        </div>
      ) : (
        <div className="text-red-600 text-center mb-4">
          User already exist!
        </div>
      )}

      <form onSubmit={handleSubmit}>
        
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Confirm password
          </label>
          <input
            type="password"
            name="re_password"
            value={formData.re_password}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register
