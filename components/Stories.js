import StoryCard from "./StoryCard";
const stories = [
  {
    name: "Gill",
    src: "/c.jpg",
    profile: "/gill.jpg",
  },
  {
    name: "Bill Gates",
    src: "/bg.webp",
    profile: "/bill.jpeg",
  },
  {
    name: "Jeff Bezoz",
    src: "/amazon.jpeg",
    profile: "/jf.jpg",
  },
  {
    name: "Mark Zuckerberg",
    src: "/meta.webp",
    profile: "/mk.jpg",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        ></StoryCard>
      ))}
    </div>
  );
}

export default Stories;
