import React from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Angel Durán',
    isFollowing: true,
  },
  {
    userName: 'csc32',
    name: 'Carlos Sanzonetty',
    isFollowing: false,
  },
  {
    userName: 'csc32',
    name: 'Carlos Sanzonetty',
    isFollowing: false,
  },
];
export default function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          userName={userName}
          initialIsFollowing={isFollowing}
          key={userName}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
