import { useState, KeyboardEventHandler, useEffect, useRef } from 'react';
import { redirect } from 'react-router-dom';

import Router from '../Router';

import './index.css'

import frame from '../assets/frame.webp'
import tv_static from '../assets/static.webm'

function App() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [isStatic, setStatic] = useState(true);

  const frameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setStatic(false);
    }, 2000);
  }, [loading]);

  useEffect(() => {
    (frameRef.current as any).focus();
  }, []);

  useEffect(()=> {
    if (input.length === 3) {
      getAction(input);
      setInput('');
    }
    setTimeout(() => {
      setInput('');
    }, 1000);
  }, [input]);

  const onKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Shift') {
      return;
    }
    setInput(input + e.key);
  };

  const getAction = (code:string) => {
    switch (code) {
      case '400':
        window.open('https://github.com/defless', '_blank')?.focus();
        break;
      case '885':
        window.open('https://www.linkedin.com/in/simon-deflesschouwer-6812a0172/', '_blank')?.focus();
        break;
      case '620':
        window.open('https://www.turfomania.fr/', '_blank')?.focus();
        break;
      case '900':
        window.open('https://www.raspaille.fr', '_blank')?.focus();
        break;
      case '895':
        window.open('https://youtu.be/etc5E8A8HlY', '_blank')?.focus();
        break;
      case '897':
        window.open('https://arbaletes.com/accueil', '_blank')?.focus();
        break;
      case '807':
        window.open('https://www.leclubargent.com/wp-content/uploads/2017/07/annonce-leboncoin.jpg', '_blank')?.focus();
        break;
      case '700':
        window.open('https://chakal.vercel.app/', '_blank')?.focus();
        break;
      case '880':
        redirect('/komencamarche');
        break;
      default:
        break;
    }
  };

  return (
    <div ref={frameRef} className="frame" tabIndex={0} onKeyDown={onKeyDown}>
      <img src={frame} onLoad={() => setLoading(false)}/>
      <div className="content">
        {!loading && isStatic && (
          <video muted autoPlay loop width="250">
            <source src={tv_static} type="video/webm" />
          </video>
        )}
        {(!isStatic && (<Router />) )}
      </div>
    </div>
  )
}

export default App
