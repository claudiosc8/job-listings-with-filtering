import React, {useState} from 'react';
import Logo from './images/logo.svg'
import IconDocument from './images/icon-document.svg'
import IconFolder from './images/icon-folder.svg'
import IconUpload from './images/icon-upload.svg'
import './App.css';

function App() {

  const [usage] = useState({
    min:0,
    max:1000,
    used:815
  })


  return (
    <div className="container">
      <div id='data-storage-component'>
      <div className='section two-fifth'>
        <div className='content'>
          <img src={Logo} alt='Fylo Logo' />
          <div id='buttons'>
            <div className='button'><img src={IconDocument} alt='Documents' /></div>
            <div className='button'><img src={IconFolder} alt='Documents' /></div>
            <label htmlFor='upload' className='button'><img src={IconUpload} alt='Documents' /></label><input type='file' id='upload' />
          </div>
        </div>
      </div>
      <div className='section three-fifth'>
        <div className='content'>
          <div id='space-left'><span>{usage.max - usage.used}</span> GB left</div>
          <span className='description'>You've used <strong>{usage.used + ' GB'}</strong> of your storage</span>
          <div className='progress-bar-outer'>
            <div className='progress-bar-inner' style={{width:(usage.used * 100 / 1000) +'%'}}></div>
          </div>
          <div className='range'><span>{usage.min + ' GB'}</span><span>{usage.max + ' GB'}</span></div>
        </div>
      </div>
      </div>
    </div>
  );

}

export default App;
