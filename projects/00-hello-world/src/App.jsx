import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  return (
    <section className="App">
      <TwitterFollowCard initialIsFollowing>
        Carlos Sanzonetty
      </TwitterFollowCard>
      <TwitterFollowCard userName="midudev" initialIsFollowing={false}>
        Miguel Angel Durán
      </TwitterFollowCard>
    </section>
  );
}
