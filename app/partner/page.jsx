'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Validation from '../../utils/partnerValidation.jsx';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Partner() {

    const router = useRouter();

    const [values, setValues] = useState({
        fname: '',
        lname: '',
        gender: '',
        email: '',
        address: '',
        phone: '',
        sponsor: ''
    });

    const [errors, setErrors] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault();

        setErrors(Validation(values));

        if(errors.fname === "" && errors.lname === "" && errors.gender === "" && errors.email === "" && errors.address === "" && errors.phone === "" && errors.sponsor === "") {
            axios.post("/api/partner", values)
            .then(res => {
                router.push('/');
            })
            .catch(err => console.log(err));
        }
    };

    return (
        <div className='flex flex-col justify-center font-serif items-center w-screen h-screen max-h-max'>
            <div className='p-3 bg-white rounded w-80'>
                <form action='' onSubmit={handleSubmit} className='max-h-max h-screen my-4'>
                    <div className='text-xl flex justify-center items-center'>
                    <h1 className='mt-4'>REGISTER AS A PARTNER</h1>

                    </div>
                    <div className='mb-3 mt-3'>
                        <input className='w-full border-2 border-neutral-200 p-2 my-2' type='text' name='fname' placeholder='First Name' 
                        onChange={(event => setValues({...values, fname:event.target.value}))}/>
                        {errors.fname && <span className='text-red-600'>{errors.fname}</span>}
                    </div>

                    <div className='mb-3 mt-3'>
                        <input className='w-full border-2 border-neutral-200 p-2 my-2' type='text' name='lname' placeholder='Second Name' 
                        onChange={(event => setValues({...values, lname:event.target.value}))}/>
                        {errors.lname && <span className='text-red-600'>{errors.lname}</span>}
                    </div>

                    <div className='mb-3 mt-3'>
                        <input className='w-full border-2 border-neutral-200 p-2 my-2' type='text' name='gender' placeholder='Gender' 
                        onChange={(event => setValues({...values, gender:event.target.value}))}/>
                        {errors.gender && <span className='text-red-600'>{errors.gender}</span>}
                    </div>

                    <div className='mb-3 mt-3'>
                        <input className='w-full border-2 border-neutral-200 p-2 my-2' type='email' name='email' placeholder='Email' 
                        onChange={(event => setValues({...values, email:event.target.value}))}/>
                        {errors.email && <span className='text-red-600'>{errors.email}</span>}
                    </div>

                    <div className='mb-3'>
                        <input className='w-full border-2 border-neutral-200 p-2 my-2'  type='text' name='address' placeholder='Enter Address' 
                        onChange={(event => setValues({...values, address:event.target.value}))}/>
                        {errors.address && <span className='text-red-600'>{errors.address}</span>}
                    </div>

                    <div className='mb-3'>
                        <input className='w-full border-2 border-neutral-200 p-2 my-2'  type='text' name='phone' placeholder='Enter Phone Number' 
                        onChange={(event => setValues({...values, phone:event.target.value}))}/>
                        {errors.phone && <span className='text-red-600'>{errors.phone}</span>}
                    </div>

                    <div className='mb-3'>
                        <input className='w-full border-2 border-neutral-200 p-2 my-2'  type='text' name='sponsor' placeholder='Become A Sponsor? (Yes or No)' 
                        onChange={(event => setValues({...values, sponsor:event.target.value}))}/>
                        {errors.sponsor && <span className='text-red-600'>{errors.sponsor}</span>}
                    </div>

                    <button type='submit' className='w-full bg-brightRed text-white hover:bg-red-500 rounded-lg border-2 my-2 py-2'>Register</button>
                </form>
            </div>
        </div>
    )
}
