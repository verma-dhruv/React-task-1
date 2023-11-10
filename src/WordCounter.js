import React, { useState } from 'react';

const WordCounter = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div>
      <textarea
        placeholder="Type here..."
        value={text}
        onChange={handleChange}
        style={{ width: '100%', minHeight: '100px' }}
      />
      <p>Word Count: {wordCount}</p>
    </div>
  );
};

export default WordCounter;
