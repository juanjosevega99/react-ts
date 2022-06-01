import React, { useEffect, useState } from 'react';
import './App.css';

interface Sub {
  nick: string;
  avatar: string;
  subMonths: number;
  description?: string;
}

interface AppState {
  subs: Sub[]
  newSubsNumber: number
}

const INITIAL_STATE = [
  {
    nick: 'juanjoxd',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=test',
    description: 'is moderator'
  },
  {
    nick: 'aletaxd',
    subMonths: 7,
    avatar: 'https://i.pravatar.cc/150?u=aletaxd'
  }
];

function App() {
  const [subs, setsSubs] = useState<AppState['subs']>([]);
  const [newSubsNumber, setNewSubsNumber] = useState<AppState['newSubsNumber']>(0)

  useEffect(() => {
    setsSubs(INITIAL_STATE);
  }, []);

  return (
    <div className="App">
      <h1>juan subs</h1>
      <ul>
        {subs.map(sub => {
          return (
            <li key={sub.nick}>
              <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
              <h4>
                {sub.nick} (<small>{sub.subMonths}</small>)
              </h4>
              <p>{sub.description?.substring(0, 100)}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
