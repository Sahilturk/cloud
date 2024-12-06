import React from 'react'
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2'>
        <div className=' max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'> 

            <div>
                <h6 className='font-bold uppercase pt-2'>Solution</h6>
                <ul>
                    <li className=' py-1'>Marketing</li>
                    <li className=' py-1'>Marketing</li>
                    <li className=' py-1'>Marketing</li>
                    <li className=' py-1'>Marketing</li>
                    <li className=' py-1'>Marketing</li>
                </ul>
            </div>

            <div>
                <h6 className='font-bold uppercase pt-2'>Support</h6>
                <ul>
                    <li className=' py-1'>Marketing</li>
                    <li className=' py-1'>Marketing</li>
                    <li className=' py-1'>Marketing</li>
                    <li className=' py-1'>Marketing</li>
                    <li className=' py-1'>Marketing</li>
                </ul>
            </div>

            <div>
                <h6 className='font-bold uppercase pt-2'>Company</h6>
                <ul>
                    <li className=' py-1'>Marketing</li>
                    <li className=' py-1'>Marketing</li>
                    <li className=' py-1'>Marketing</li>
                    <li className=' py-1'>Marketing</li>
                    <li className=' py-1'>Marketing</li>
                </ul>
            </div>

            <div>
                <h6 className='font-bold uppercase pt-2'>Legal</h6>
                <ul>
                    <li className=' py-1'>Marketing</li>
                    <li className=' py-1'>Marketing</li>
                    <li className=' py-1'>Marketing</li>
                    <li className=' py-1'>Marketing</li>
                    <li className=' py-1'>Marketing</li>
                </ul>
            </div>

            <div className=' col-span-2 pt-8 md:pt-2'>
                <p className=' font-bold uppercase'>Subscribe to our News letter</p>
                <p className=' py-4'>Lorem, ipsum dolor ndis iste quibusdam esse optio cupiditate nisi illum.</p>

                <form className=' flex flex-col sm:flex-row'>
                    <input className=' w-full p-2 mr-4 rounded-md mb-4 text-black' type="email" placeholder='ABC@email.com' />
                    <button className=' p-2 mb-4'>Subscribe</button>
                </form>

            </div>

        </div>

        <div className=' flex pt-4 max-w-[1240px] m-auto justify-between sm: flex-row3 text-center text-gray-500'>
            <p>2024 Workflow , LLC ,All Right Reserved</p>
            <div className=' flex justify-between sm:max-w-[300px] text-2xl gap-4'>
                <FaFacebook/>
                <FaGithub/>
                <FaInstagram/>
                <FaTwitch/>
                <FaTwitter/>
            </div>
        </div>

    </div>
  )
}

export default Footer