import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

const email = 'pjanai.m.s@gmail.com';

function EmailClipboard() {
  const [isCopied, setIsCopied] = useState(false);

  const clickboardEmal = () => {
    navigator.clipboard.writeText(email).then(
      () => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1000);
      },
      () => {
        /* clipboard write failed */
      }
    );
  };
  return (
    <button className='email' onClick={clickboardEmal}>
      <h4>{isCopied ? 'copiado' : email}</h4>
      {isCopied ? <Check /> : <Copy />}
    </button>
  );
}

export default EmailClipboard;
