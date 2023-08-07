'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Validation from '../../utils/subscribeValidation.jsx';
import axios from 'axios';
import { useRouter } from 'next/router';
import { redirect } from 'next/dist/server/api-utils/index.js';

export default function SubscribePage() {

    // const router = useRouter();

    const [values, setValues] = React.useState({
        fname: '',
        lname: '',
        gender: '',
        email: '',
        category: ''
    });
    
    const [errors, setErrors] = React.useState({})

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    };

    const handleSubmit = async(event) => {

        event.preventDefault();
        setErrors(Validation(values));

        if(errors.fname === "" && errors.lname === "" && errors.gender === "" && errors.email === "" && errors.category === "") {
            try {
                const router = useRouter();
                await axios.post('/api/member', values).then(() => {
                    router.push('/');
                }).catch((error) => {
                    console.error(error.message);
                });
            } catch (error) {
                console.error(error.message);
            } 
        }

    };

    return (
        <div className='flex justify-center font-serif items-center h-screen bg-gray-200'>
            <div className='p-3 bg-white rounded w-80'>
                <form action='' onSubmit={handleSubmit}>
                    <div className='text-xl flex justify-center items-center'>
                    <h1>REGISTER AS A MEMBER</h1>

                    </div>
                    <div className='mb-3 mt-3'>
                        <input className='w-full border-2 border-neutral-200 p-2 my-2' type='text' name='fname' placeholder='First Name' 
                        onChange={handleInput}/>
                        {errors.fname && <span className='text-red-600'>{errors.fname}</span>}
                    </div>

                    <div className='mb-3 mt-3'>
                        <input className='w-full border-2 border-neutral-200 p-2 my-2' type='text' name='lname' placeholder='Second Name' 
                        onChange={handleInput}/>
                        {errors.lname && <span className='text-red-600'>{errors.lname}</span>}
                    </div>

                    <div className='mb-3 mt-3'>
                        <input className='w-full border-2 border-neutral-200 p-2 my-2' type='text' name='gender' placeholder='Gender' 
                        onChange={handleInput}/>
                        {errors.gender && <span className='text-red-600'>{errors.gender}</span>}
                    </div>

                    <div className='mb-3 mt-3'>
                        <input className='w-full border-2 border-neutral-200 p-2 my-2' type='email' name='email' placeholder='Email' 
                        onChange={handleInput}/>
                        {errors.email && <span className='text-red-600'>{errors.email}</span>}
                    </div>

                    <div className='mb-3'>
                        <input className='w-full border-2 border-neutral-200 p-2 my-2'  type='text' name='category' placeholder='(e.g Player, Sponsor, other specify...)' 
                        onChange={handleInput}/>
                        {errors.category && <span className='text-red-600'>{errors.category}</span>}
                    </div>

                    <button type='submit' className='w-full bg-brightRed text-white hover:bg-red-500 rounded-lg border-2 my-2 py-2'>Register</button>
                </form>
            </div>
        </div>
    )
}