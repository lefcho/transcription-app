import React from 'react'

function FileDisplay(props) {

    const { audioStream, file, handleResetAudio } = props;

    return (
        <main className='flex-1 flex p-4 flex-col gap-3 sm:gap-4 
        ms:gap-5 justify-center text-center pb-20'>
            <h1 className='font-semibold text-5xl sm:text-6xl md:text-7xl'>
                Your<span className='text-blue-400 bold'>File</span>
            </h1>
            <div className='flex mx-auto flex-col text-left gap-1 '>
                <h3 className='font-semibold'>
                     Name:
                </h3>
                <p>
                     {file.name}
                </p>
            </div>
            <div className='flex items-center justify-between gap-4'>
                <button className='text-slate-400 hover:bg-red-600 
                hover:text-white px-4 py-2 rounded-xl transition duration-200'>
                    Reset
                </button>
                <button className='specialBtn px-4 py-2 rounded-lg text-blue-400 '>
                    <p>Transcribe</p>
                </button>
            </div>
        </main>
    )
}

export default FileDisplay