'use client';

import { useState } from 'react';

export default function HomePage() {
  const [url, setUrl] = useState('');

  return (
    <main style={{ padding: '2rem' }}>
      <h1>🎵 Share Your Favorite Song</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Paste YouTube or Spotify link here"
        style={{ width: '100%', padding: '1rem', fontSize: '1rem' }}
      />
      <a
        href={`/api/frame?url=${encodeURIComponent(url)}`}
        target="_blank"
        style={{
          display: 'inline-block',
          marginTop: '1rem',
          padding: '1rem 2rem',
          backgroundColor: '#7f5af0',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
        }}
      >
        🚀 Generate Frame
      </a>
    </main>
  );
}