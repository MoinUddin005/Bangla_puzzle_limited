/* eslint-disable no-unused-vars */
import React from 'react';

const Upcomingevent = () => {
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 pt-10 pb-20'>
            <div className='grid-cols pl-8'>
                <h1 className='uppercase text-3xl font-bold text-sky-800 tracking-widest' >Upcoming event</h1>
            </div>
            <div className='grid-col pt-7'>
                <p>No event Found</p>
            </div>
        </div>
    );
};

export default Upcomingevent;