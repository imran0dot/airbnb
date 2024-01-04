'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import image from '@/public/images/airbnb.png'

const Logo = () => {
    return (
        <Link href="/">
            <Image
                alt='logo'
                className='hidden md:block cursor-pointer'
                height="100"
                width="100"
                src={image}
            /></Link>
    );
};

export default Logo;