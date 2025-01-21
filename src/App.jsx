import { useState, useEffect } from 'react'
import HomePage from './components/HomePage.jsx'
import Header from './components/Header.jsx'
import FileDisplay from './components/FileDisplay.jsx';
import Information from './components/Information.jsx';
import Transcribing from './components/Transcribing.jsx';

function App() {
  const [file, setFile] = useState(null);
  const [audioStream, setAudioStream] = useState(null);
  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(true);

  const isAudioAvailable = file || audioStream;

  function handleResetAudio() {
    setFile(null);
    setAudioStream(null);
  }

  return (
    <div className='flex flex-col max-w-[1000px] mx-auto w-full'>
      <section className='min-h-screen flex flex-col'>
        <Header></Header>
        {output ? (
          <Information />
        ) : loading ? (
          <Transcribing />
        ) : isAudioAvailable ? (
          <FileDisplay 
          handleResetAudio={handleResetAudio} 
          file={file} 
          audioStream={audioStream}/>
        ) : (
          <HomePage 
          setFile={setFile} 
          setAudioStream={setAudioStream}/>
        )}

      </section>
      <footer>
          
      </footer>
    </div>
  )
}

export default App
