'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoImage from '../../components/images/logo1.png';
import reception2Image from '../../components/images/reception2.png';
import roles1Image from '../../components/images/roles1.jpg';
import vteam2Image from '../../components/images/vteam2.png';
import nutritionImage from '../../components/images/nutrition.jpg';
import injuryImage from '../../components/images/injury.jpg';
import setgoalsImage from '../../components/images/setgoals.jpg';


import Anime from '../../components/Anime.jsx';

export default function MediaPage() {
    
    return (
        <div className="relative mx-auto">

            {/* Navbar */}
            <nav className="fixed w-full mt-0 top-0 mx-auto px-6 bg-gray-300">

                {/* Flex Container */}
                <div className="flex items-center justify-between rounded-3xl px-4 pb-2 -mx-4">

                    {/* Logo */}
                    <div className="flex space-x-6 mt-4 ml-24 ">
                        <div>
                            <Image className='rounded-full w-24 flex h-24' src={logoImage} alt="Logo goes here" />
                        </div>
                        <div className='text-lg font-serif'>
                            <h1>UGANDA</h1> 
                            <h1>SWAMP VOLLEYBALL</h1>
                            <h1>ASSOCIATION</h1>
                        </div>
                    </div>

                    {/* Menue Items */}
                    <div className="hidden text-lg font-medium font-serif space-x-10 items-center md:mr-20 md:flex">                        
                        <Link href="/" className='hover:text-brightRed'>Home</Link>                        
                        <Link href="/articles" className='hover:text-brightRed'>Articles</Link>                        
                        <Link href="/events" className='hover:text-brightRed'>Events/Tournaments</Link>
                        <Link href="/gallery" className='hover:text-brightRed'>Gallery</Link>
                        <Link href="/media" className='text-brightRed'>USVA Media</Link>
                        
                    </div>

                    {/* Hamburger Icon */}
                    <button id="menu-btn" onClick={Anime} className="block hamburger md:hidden outline-none">
                       <span className="hamburger-top"></span> 
                       <span className="hamburger-middle"></span> 
                       <span className="hamburger-bottom"></span> 
                    </button>
                </div>

                {/* Mobile Menue */}
                <div className="md:hidden">
                    <div id="menu" className="absolute flex-col items-center 
                    self-end hidden rounded-3xl py-4 mt-2 space-y-2 font-bold 
                    bg-gray-300 sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">                        
                        <Link href="/" className='hover:text-brightRed'>Home</Link>                                        
                        <Link href="/articles" className='hover:text-brightRed'>Articles</Link>                                        
                        <Link href="/events" className='hover:text-brightRed'>Events/Tournaments</Link>                      
                        <Link href="/gallery" className='hover:text-brightRed'>Gallery</Link>
                        <Link href="/media" className='text-brightRed'>USVA Media</Link>                      
                    </div>
                </div>
            </nav>

            {/* Live Stream Section */}
            <section className='my-2 px-2 mt-32 font-serif'>
                <h1 className="text-xl font-bold text-center py-2">LIVE STREAM</h1>
                <hr className='py-2'/>
                <div className="flex md:space-y-0 md:justify-center md:space-x-4">
                    <div className="flex flex-col justify-center rounded-lg space-x-4 md:w-1/2">
                        <div className='flex justify-center py-2'>
                            <Image src={reception2Image} alt="" className='flex h-80 w-96 rounded-lg'/>
                        </div>
                        <div className='space-y-2'>
                            <h1 className='text-xl font-bold '>
                                Mastering Volleyball Techniques: Essential Tips for Players.
                            </h1>
                            <p>
                                Volleyball is a dynamic sport that requires mastering various 
                                techniques to excel on the court. To become a skilled player, 
                                it's essential to focus on the fundamentals. Start by perfecting 
                                your serving technique, which includes mastering different types 
                                of serves such as the float serve, topspin serve, and jump serve. 
                                Practice accurate passing and setting to facilitate successful attacks. 
                                {/* Develop strong attacking skills, including spiking, tipping, and roll shots. 
                                Additionally, work on your blocking and defensive skills to become a well-rounded player. 
                                Remember to pay attention to footwork, body positioning, and communication with your teammates. 
                                With dedicated practice and a focus on technique, you can master the essential skills of volleyball. */}
                            
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Articles Section */}
            <section className='my-2 px-2 mt-6 font-serif'>
                <h1 className="text-xl font-bold text-center py-6">YOUTUBE VIDEOS</h1>
                <hr className='py-2'/>
                <div className="flex flex-col py-8 space-y-4 md:space-y-0 md:flex-row md:justify-center md:space-x-4">
                    <div className="flex justify-center bg-white rounded-lg space-x-4 md:w-1/2">
                        <Image src={reception2Image} alt="" className='w-56 h-56 rounded-lg'/>
                        <div className='space-y-2'>
                            <h1 className='text-xl font-bold '>
                                Mastering Volleyball Techniques: Essential Tips for Players.
                            </h1>
                            <p>
                                Volleyball is a dynamic sport that requires mastering various 
                                techniques to excel on the court. To become a skilled player, 
                                it's essential to focus on the fundamentals. Start by perfecting 
                                your serving technique, which includes mastering different types 
                                of serves such as the float serve, topspin serve, and jump serve. 
                                Practice accurate passing and setting to facilitate successful attacks. 
                                
                            </p>
                        </div>
                    </div>

                    <div className="flex bg-white rounded-lg space-x-4 md:w-1/2">
                        <Image src={roles1Image} alt="" className='h-56 w-56 rounded-lg'/>
                        <div className='space-y-2'>
                            <h1 className='text-xl font-bold '>
                            Understanding Volleyball Positions and Roles on the Court.
                            </h1>
                            <p>
                                Volleyball is a team sport that relies on the cooperation and coordination of 
                                players in various positions. Each position has a specific role and responsibilities 
                                on the court. The setter is like the quarterback, responsible for setting up attacking 
                                opportunities for their teammates. 
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col py-4 space-y-4 md:space-y-0 md:flex-row md:justify-center md:space-x-4">
                    <div className="flex justify-center bg-white rounded-lg space-x-4 md:w-1/2">
                        <Image src={vteam2Image} alt="" className='w-56 h-56 rounded-lg'/>
                        <div className='space-y-2'>
                            <h1 className='text-xl font-bold '>
                                Building a Strong Volleyball Team: Strategies for Success.
                            </h1>
                            <p>
                                Building a strong volleyball team goes beyond individual skills. 
                                It requires teamwork, communication, and a positive team culture. 
                                Start by fostering a supportive environment where players trust 
                                and respect one another. Encourage open communication to facilitate 
                                effective on-court coordination. 
                            </p>
                        </div>
                    </div>

                    <div className="flex bg-white rounded-lg space-x-4 md:w-1/2">
                        <Image src={nutritionImage} alt="" className='h-56 w-56 rounded-lg'/>
                        <div className='space-y-2'>
                            <h1 className='text-xl font-bold '>
                                Nutrition Tips for Volleyball Players: Fueling Your Performance.
                            </h1>
                            <p>
                                Proper nutrition plays a vital role in fueling performance and 
                                optimizing recovery for volleyball players. Start by maintaining 
                                a balanced diet that includes a variety of nutrient-dense foods 
                                such as lean proteins, whole grains, fruits, vegetables, and 
                                healthy fats. 
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col py-4 space-y-4 md:space-y-0 md:flex-row md:justify-center md:space-x-4">
                    <div className="flex justify-center bg-white rounded-lg space-x-4 md:w-1/2">
                        <Image src={injuryImage} alt="" className='w-56 h-56 rounded-lg'/>
                        <div className='space-y-2'>
                            <h1 className='text-xl font-bold '>
                                Injury Prevention in Volleyball: Exercises and Best Practices.
                            </h1>
                            <p>
                                Injuries are a common concern in volleyball, but with proper 
                                prevention strategies, you can minimize the risk. Start by 
                                incorporating a comprehensive warm-up routine that includes 
                                dynamic stretching, mobility exercises, and activation drills. 
                                </p>
                        </div>
                    </div>

                    <div className="flex bg-white rounded-lg space-x-4 md:w-1/2">
                        <Image src={setgoalsImage} alt="" className='h-56 w-56 rounded-lg'/>
                        <div className='space-y-2'>
                            <h1 className='text-xl font-bold '>
                                Setting Goals in Volleyball: A Path to Improvement.
                            </h1>
                            <p>
                                Setting goals is a crucial aspect of personal and team development 
                                in volleyball. Start by setting specific, measurable, achievable 
                                goals that can be achieved together as a team.
                            
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 mt-4 pr-16 md:pr-0">               

                {/* Flex Section */}
                <div className="flex flex-col-reverse justify-between px-6 py-10 mt-6 my-4 space-y-8 md:mr-40 md:flex-row md:space-y-0">

                    {/* Logo */}
                    <div className="flex justify-center ml-16 md:space-y-0 md:ml-6">
                        <div>
                            <Image className='rounded-full w-48 h-48 border-white flex items-center md:ml-16' src={logoImage} alt="Logo goes here" />
                        </div>
                    </div>

                    {/* List Container */}
                    <div className="flex justify-around space-x-32">
                        <div className="hidden flex-col space-y-3 text-white md:flex">                            
                            <Link href="/" className="hover:text-brightRed">Home</Link>
                            <Link href="articles" className="hover:text-brightRed">Articles</Link>
                            <Link href="/events" className="hover:text-brightRed">Events/Tournaments</Link>
                            
                        </div>

                        <div className="flex flex-col space-y-2 text-white">
                            <Link href="/media" className="hover:text-brightRed">Media</Link>
                            <Link href="/gallery" className="hover:text-brightRed">Gallery</Link>
                        </div>

                        {/* Contacts */}
                        <div className="flex flex-col space-y-1 text-gray-500">
                            <h2 className='text-xl text-gray-200'>Contacts:</h2>
                            <div className='flex flex-col'>
                                <h6 className='text-gray-400'>Mr. Andrew</h6>
                                +256753820513<br/>
                                +256780659679
                                <h6 className='text-gray-400'>Ms. Flavia</h6>
                                +256775818208<br/>                                
                                <h6 className='text-gray-400'>Mr. Kassujja</h6>
                                +256778569282<br/>                                
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex justify-center text-amber-700 pb-4 ml-20 md:ml-0">
                    Copyright &copy;USVA 2023, All Rights Reserved
                </div>
            </footer>
        </div>
    )
};
