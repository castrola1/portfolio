"use client"

import React from 'react'
import { Navbar } from '@/components'
import Link from 'next/link'



// import React from 'react'

const page = () => {
  return (
    <div className=''>
      <Navbar />
      <div className="container ">

        <h1 className='h-[70vh]'>Welcome to future developing</h1>
        <div className='flex items-center w-full flex-col'>

          <p className=''>Lais Castro | Creative Developer</p>
          <a href="/about">
            <button type="button" className="btn btn-primary btn-lg bg-blue-500 rounded-lg px-7 py-3 text-white font-bold flex">Learn more</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default page
