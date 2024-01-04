'use client'
import React, { useState } from 'react';
import Modal from './Modal';
import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc'
import useRegisterModal from '@/app/hooks/useRegisterModal';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import Heading from '../Heading';
import Input from '../input/Input';
import toast from 'react-hot-toast';
import Button from '../Button';

const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios.post('/api/register', data)
            .then(() => {
                registerModal.onClose();
            })
            .catch(error => toast.error('Something went wrong!'))
            .finally(() => {
                setIsLoading(false);
            })
    }

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Heading
                title='Welcome to Airbnb'
                subTitle='Create an account!'
            />
            <Input
                id='name'
                label='Name'
                error={errors}
                disabled={isLoading}
                register={register}
                required
                type='text'
            />
            <Input
                id='email'
                label='Email'
                error={errors}
                disabled={isLoading}
                register={register}
                required
                type='text'
            />
            <Input
                id='password'
                label='Password'
                error={errors}
                disabled={isLoading}
                register={register}
                required
                type='password'
            />
        </div>
    )

    const footerContent = (
        <div className='flex flex-col gap-4 mt-3'>
            <hr />
            <Button
                outline
                label='Continue with Google'
                icon={FcGoogle}
                onClick={() => { }} />
            <Button
                outline
                label='Continue with Github'
                icon={AiFillGithub}
                onClick={() => { }} />

            <div className='text-neutral-500 text-center mt-4 font-light'>

                <div className='flex flex-row items-center gap-2 justify-center'>
                    <div>
                        Already have an account ?
                    </div>

                    <div
                        onClick={registerModal.onClose}
                        className='text-neutral-800 cursor-pointer hover:underline'>
                        Login
                    </div>
                </div>
            </div>
        </div>
    )



    return (
        <div>
            <Modal
                disable={isLoading}
                isOpen={registerModal.isOpen}
                title='Register'
                actionLabel='Continue'
                onClose={registerModal.onClose}
                onSubmit={handleSubmit(onSubmit)}
                body={bodyContent}
                footer={footerContent}
            />

        </div>
    );
};

export default RegisterModal;