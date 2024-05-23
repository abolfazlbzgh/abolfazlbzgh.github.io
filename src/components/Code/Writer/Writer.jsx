import React from 'react'
import CloseIcon from '../../Icons/CloseIcon'
import { useNavigate } from 'react-router-dom';

export default function Writer({ creatorImage, creatorName, createTime }) {


    // const history = useHistory();
    const navigate = useNavigate();

    const handleClose = () => {
        navigate(-1);
    };
    return (
        <div className='flex flex-col w-full '>
            <div className='flex w-full justify-between items-center   '>

                <div className='flex justify-start items-center gap-4'>
                    <img src={creatorImage} alt="Profile" className=' w-14 h-14 rounded-full bg-primary object-cover ' />

                    <div className='flex flex-col justify-start items-start gap-1'>
                        <h2 className='text-title text-xl font-bold'>{creatorName}</h2>
                        <h3 className='text text-base'> {createTime}</h3>

                    </div>
                </div>

                <div className='rounded-full p-2 cursor-pointer w-10 h-10 transition-all shadow-sm btn flex items-center justify-center dark:btnDark' onClick={handleClose}>
                    <CloseIcon />
                </div>

            </div>


            <div className='w-full rounded-full gradient mt-1 mb-4 h-[1px]'></div>
        </div>

    )
}
