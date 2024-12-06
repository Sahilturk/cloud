import React from 'react'
import { CheckIcon } from '@heroicons/react/solid';

const Pricing = () => {
    return (
        <div name='pricing' className='w-full my-24 text-white'>
            <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>
            <div className='max-w-[1240px] mx-auto py-12'>
                <div className='text-center py-8 text-slate-300'>
                    <h2 className='text-3xl uppercase '>Pricing</h2>
                    <h3 className='text-5xl font-bold text-white py-8'>Right Price For Your Research</h3>
                    <p className='text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam explicabo, perferendis accusamus nesciunt, a illum ducimus repudiandae animi corrupti voluptatem provident quas libero sapiente porro obcaecati eius. Laborum, nostrum itaque!</p>
                </div>

                <div className='grid md:grid-cols-2'>

                    <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                        <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
                        <div>
                            <p className='text-6xl font-bold py-4 flex'>$49<span className=' text-xl text-slate-500 flex flex-col justify-end'>/mon</span></p>
                        </div>
                        <p className=' text-2xl py-8 text-slate-500'>
                            Lorem, ipsum dolor sit elit. Hic, architecto iure commodi sint aliquam nemo delectus quibusdam consequatur
                        </p>
                        <div className=' text-2xl'>
                            <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' /> quo nesciunt est nulla?</p>
                            <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' /> quo nesciunt est nulla?</p>
                            <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' /> quo nesciunt est nulla?</p>
                            <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' /> quo nesciunt est nulla?</p>
                            <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' /> quo nesciunt est nulla?</p>
                            <button className=' py-4 my-4 w-full'>Get Started</button>
                        </div>
                    </div>

                    <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                        <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Premium</span>
                        <div>
                            <p className='text-6xl font-bold py-4 flex'>$99<span className=' text-xl text-slate-500 flex flex-col justify-end'>/mon</span></p>
                        </div>
                        <p className=' text-2xl py-8 text-slate-500'>
                            Lorem, ipsum dolor sit elit. Hic, architecto iure commodi sint aliquam nemo delectus quibusdam consequatur
                        </p>
                        <div className=' text-2xl'>
                            <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' /> quo nesciunt est nulla?</p>
                            <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' /> quo nesciunt est nulla?</p>
                            <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' /> quo nesciunt est nulla?</p>
                            <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' /> quo nesciunt est nulla?</p>
                            <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' /> quo nesciunt est nulla?</p>
                            <button className=' py-4 my-4 w-full'>Get Started</button>
                        </div>
                    </div>


                </div>


                
                   


            </div>


        </div>
    )
}

export default Pricing