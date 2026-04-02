import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [taches, setTaches] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/taches')
      .then(res => setTaches(res.data));
  }, []);

  return (
    <div>
      <h1>Kanban</h1>

      {taches.map(t => (
        <div key={t.id}>
          {t.nom}
        </div>
      ))}
    </div>
  );
}

export default App;