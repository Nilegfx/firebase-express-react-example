import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';


const App = () => {
  let [name, setName] = useState('');

  useEffect(() => {
    fetch('/api/name').then(r=>r.json()).then(({name}) =>{
      setName(name)
    })
  })

  return (
    <div className="App">
      {name}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
