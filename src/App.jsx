import { useState, useEffect, useRef } from 'react'
import HomePage from './components/HomePage.jsx'
import Header from './components/Header.jsx'
import FileDisplay from './components/FileDisplay.jsx';
import Information from './components/Information.jsx';
import Transcribing from './components/Transcribing.jsx';

function App() {
  const [file, setFile] = useState(null);
  const [audioStream, setAudioStream] = useState(null);
  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [finished, setFinished] = useState(false);

  const worker = useRef(null);

  const isAudioAvailable = file || audioStream;

  useEffect(() => {
    if (!worker.current) {
      worker.current = new Worker(new URL(
        './utils/whisper.worker.js', 
        import.meta.url),
        {type: 'module'})
    }

    const onMessageRecieved = async (e) => {
      switch (e.data.type) {
        case 'DOWNLOADING':
          setDownloading(true); 
          console.log('DOWNLOADING');
          break;
        case 'LOADING':
          setLoading(true); 
          console.log('LOADING');
          break;
        case 'RESULT':
          setOutput(e.data.result); 
          console.log('DOWNLOADING');
          break;
        case 'INFERENCE_DONE':
          setFinished(true); 
          console.log('DONE');
          break;
      }
    }

    worker.current.addEventListener('message', onMessageRecieved);

    return () => worker.current.removeEventListener('message', onMessageRecieved);
  }, [])

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
