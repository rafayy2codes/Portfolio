import React from 'react';
import my_picture from '../assets/my_picture.png';

const Image = () => {
    return (
        <div className='flex justify-end'>
            <div className='w-1/2'>
                <img className='max-w-full h-auto' src={my_picture} alt='My Picture' />
            </div>
        </div>
    );
};

export default Image;
