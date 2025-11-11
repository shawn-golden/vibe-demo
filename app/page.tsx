'use client';

import { useState } from 'react';



export default function Home() {

  const [input, setInput] = useState('');

  const [result, setResult] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);



  async function handleSend() {

    setLoading(true);

    setResult(null);

    const res = await fetch('/api/echo', {

      method: 'POST',

      headers: { 'Content-Type': 'application/json' },

      body: JSON.stringify({ input }),

    });

    const data = await res.json();

    setResult(JSON.stringify(data));

    setLoading(false);

  }



  return (

    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: 24 }}>

      <div style={{ maxWidth: 540, width: '100%', display: 'grid', gap: 12 }}>

        <h1 style={{ margin: 0 }}>Vibe Coding Demo</h1>

        <input

          value={input}

          onChange={(e) => setInput(e.target.value)}

          placeholder="Type something…"

          style={{ padding: 12, fontSize: 16, border: '1px solid #ccc', borderRadius: 8 }}

        />

        <button

          onClick={handleSend}

          disabled={loading}

          style={{

            padding: '12px 16px',

            fontSize: 16,

            borderRadius: 8,

            border: '1px solid #333',

            background: loading ? '#eee' : '#fff',

            cursor: loading ? 'default' : 'pointer'

          }}

        >

          {loading ? 'Sending…' : 'Send to /api/echo'}

        </button>

        <pre style={{ background: '#f7f7f7', padding: 12, borderRadius: 8, minHeight: 80 }}>

{result ?? 'Response will appear here…'}

        </pre>

      </div>

    </main>

  );

}
