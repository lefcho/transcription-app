import React, { useState } from "react";
import Transcription from "./Transcription";
import Transplation from "./Transplation";

function Information() {

    const [tap, setTap] = useState('transcription');


    return (
    <main className="flex-1 p-4 flex flex-col gap-3 text-center sm:gap-4 justify-center
     pb-20 max-w-prose w-full mx-auto">
      <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl whitespace-nowrap">
        Your <span className="text-blue-400 bold">Transcription</span>
      </h1>

      <div className="grid grid-cols-2 items-center mx-auto bg-white
       shadow rounded-full overflow-hidden">
        <button onClick={() => setTap('transcription')} 
            className={"px-4 py-2 font-medium duration-200 " + 
            (tap === 'transcription' ? 
            'bg-blue-400 text-white' : 'text-blue-400 hover:text-blue-600')}>
            Transcription
        </button>
        <button onClick={() => setTap('translation')} 
            className={"px-4 py-2 font-medium duration-200 " + 
            (tap === 'translation' ? 
            'bg-blue-400 text-white' : 'text-blue-400 hover:text-blue-600')}>
            Translation
        </button>
      </div>
      {tap === 'transcription' ? (
        <Transcription />
      ) : (
        <Transplation />
      )}
    </main>
  );
}

export default Information;
