'use client';

import { useState } from 'react';
import axios from "axios";

export default function SignupPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        //ici le call api vers /api/auth/signup
        e.preventDefault();
        setMessage('');
        setIsError(false);
       
        try {

            if (formData.name === '' || formData.email === '' || formData.password === '') {
                setMessage('Veuillez remplir tous les champs');
                setIsError(true);
                return;
            }

            const res = await axios.post('/api/auth/signup', formData);
            localStorage.setItem('acessToken', res.data.token);
            setMessage('inscription réussie');
        } catch (err) {
            setIsError(true);
            console.log(err);
            setMessage(err.response?.data?.message || 'Erreur lors de l\'inscription');
        } 



    };

    
        
      
    

    return (
        //ici le front
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-400">Inscription</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="form-group">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Nom
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-1 p-2 w-full text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 p-2 w-full text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Mot de passe
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="mt-1 p-2 w-full text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        S'inscrire
                    </button>
                </form>

                {message && (
                    <div
                        className={`mt-4 p-4 rounded-lg text-center ${
                            isError
                                ? 'bg-red-100 text-red-700 border border-red-400'
                                : 'bg-green-100 text-green-700 border border-green-400'
                        }`}
                        role="alert"
                    >
                        {isError ? '⚠️ ' : '🎉 '}
                        {message}
                    </div>
                )}
            </div>
        </div>
    );
}
