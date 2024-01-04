'use client'
import React from 'react';
import Image from 'next/image';
import avaterPlaceholder from '@/public/images/placeholder.jpg'

const Avatar= () => {
    return (
        <Image
            className='rounded-full'
            height='30'
            width='30'
            alt='avater'
            src={avaterPlaceholder} />
    );
};

export default Avatar;