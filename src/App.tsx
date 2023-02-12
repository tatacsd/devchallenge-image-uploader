import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="container text-cyan-300">
        <h1>Image Uploader</h1>
      </div>
    </div>
  );
}

export default App;
