import { useState, KeyboardEventHandler, useEffect, useRef } from 'react';
import { redirect } from 'react-router-dom';

import Router from '../Router';

import './index.css'

import frame from '../assets/frame.png'
import tv_static from '../assets/static.gif'

function App() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(true);

  const frameRef = useRef<HTMLInputElement>(null);



  useEffect(() => {
    (frameRef.current as any).focus();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(()=> {
    if (input.length === 3) {
      getAction(input);
      setInput('');
    }
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
      <img src={frame} />
      <div className="content">
        {loading ? (
          <img className="w-full h-full" src={tv_static}/>
        ) : (
          <Router />
        )}
      </div>
    </div>
  )
}

export default App
