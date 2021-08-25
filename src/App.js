import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Planets from './components/Planets';
import People from './components/People';

function App() {
  const [page , setpage] = useState ('planets');

  return (
    <div className="App">
      <h1>Star war Info</h1>
      <Navbar setPage={setpage} />

      <div className="content">
        { page === 'planets' ? <Planets /> : <People />}

      </div>
     
    </div>
  );
}

export default App;
