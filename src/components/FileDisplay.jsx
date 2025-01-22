import React from 'react'

function FileDisplay(props) {

    const { audioStream, file, handleResetAudio, handleFormSubmission } = props;

    return (
        <main className='flex-1 flex p-4 flex-col gap-3 sm:gap-4 
        ms:gap-5 min-w-72 w-72 justify-center text-center pb-20 w-fit
         max-w-full mx-auto sm:w-96'>
            <h1 className='font-semibold text-5xl sm:text-6xl md:text-7xl'>
                Your<span className='text-blue-400 bold'>File</span>
            </h1>
            <div className='flex flex-col text-left gap-1 my-4 '>
                <h3 className='font-semibold'>
                     Name:
                </h3>
                <p>
                     {file ? file?.name : 'Custom Audio'}
                </p>
            </div>
            <div className='flex items-center justify-between gap-4'>
                <button onClick={handleResetAudio} className='text-slate-400 
                hover:text-red-600 px-4 py-2 rounded-xl transition duration-200'>
                    Reset
                </button>
                <button onClick={handleFormSubmission} 
                className='specialBtn px-3 py-2 rounded-lg text-blue-400 
                flex items-center gap-2 font-medium'>
                    <p>Transcribe</p><i className="fa-solid fa-pen-fancy"></i>
                </button>
            </div>
        </main>
    )
}

export default FileDisplay