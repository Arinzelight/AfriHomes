import React from 'react'
import search from '../assets/images/search.png';

export default function Filter() {
  return (
    <div className='flex flex-col gap-4'>
        <h1 className='font-light text-2xl'>Search results for <b>Lagos</b></h1>
        <div className=''>
            <div className='flex flex-col gap-2'>
                <label htmlFor='city' className='text-xs'>Location</label>
                <input type='text' id='city' name='city' placeholder='City Location' className='border border-gray-300 h-10 rounded-sm px-3'/>
            </div>
        </div>
        <div className='flex justify-between gap-5 flex-wrap'>
        <div className='flex flex-col gap-2'>
                <label htmlFor='type' className='text-xs'>Type</label>
                <select name='type' id='type' className='w-24 p-4 text-xs border border-gray-300 rounded-sm'>
                    <option value="buy">Buy</option>
                    <option value="rent">Rent</option>
                </select>
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor='property' className='text-xs'>Property</label>
                <select name='property' id='property' className='w-24 p-4 text-xs border border-gray-300 rounded-sm'>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="land">Land</option>
                </select>
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor='minPrice' className='text-xs'>Min Price</label>
                <input type='number' id='minPrice' name='minPrice' placeholder='' className='w-24 p-3 border border-gray-300 rounded-sm'/>
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor='maxPrice' className='text-xs'>Max Price</label>
                <input type='number' id='maxPrice' name='maxPrice' placeholder='' className='w-24 p-3 border border-gray-300 rounded-sm'/>
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor='bedroom' className='text-xs'>Bedroom</label>
                <input type='text' id='bedroom' name='bedroom' placeholder='any' className='w-24 p-3 border border-gray-300 rounded-sm'/>
            </div>
            <button className='w-24 p-3 border-none cursor-pointer bg-orange-00 rounded-sm'>
                <img src={search} alt='search' className='w-6 h-6'/> 
            </button>
        </div>
    </div>
  )
}