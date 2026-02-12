import ProfileCard from "./components/ProfileCard.jsx";

const PROFILES = [
  {
    id: "monkey-d-luffy",
    name: "Monkey D. Luffy",
    role: "Straw Hat Captain",
    description:
      "A rubber-powered pirate who chases freedom and refuses to back down.",
    quote: "I’m gonna be King of the Pirates!",
    color: "#d84b4b",
  },
  {
    id: "satoru-gojo",
    name: "Satoru Gojo",
    role: "Limitless Sorcerer",
    description:
      "Bends space with precision, watching over the next generation of fighters.",
    quote: "When it comes to you, I’m pretty confident.",
    color: "#3b82f6",
  },
  {
    id: "naruto-uzumaki",
    name: "Naruto Uzumaki",
    role: "Hidden Leaf Hero",
    description:
      "A spirited ninja who wins hearts with grit, hope, and ramen energy.",
    quote: "Believe it!",
    color: "#f59e0b",
  },
  {
    id: "ichigo-kurosaki",
    name: "Ichigo Kurosaki",
    role: "Soul Reaper",
    description:
      "Protects the living and the dead with a blade forged from resolve.",
    quote: "If I don’t fight, who will?",
    color: "#8b5cf6",
  },
];

export default function App() {
  return (
    <div className="page">
      <header className="page__header">
        <p className="eyebrow">Project 1</p>
        <h1>Interactive Anime Profile Card System</h1>
        <p className="subtitle">
          Hello World
        </p>
      </header>

      <section className="cards">
        {PROFILES.map((profile) => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            role={profile.role}
            description={profile.description}
            quote={profile.quote}
            color={profile.color}
          />
        ))}
      </section>
    </div>
  );
}
