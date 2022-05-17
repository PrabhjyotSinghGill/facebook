import StoryCard from "./StoryCard";
const stories = [
    {
        name:"Gill",
        src:"/gill.jpg",
        profile:"/gill.jpg",
    },
    {
        name:"Musk",
        src:"https://links.papareact.com/4zn",
        profile:"https://links.papareact.com/kxk",
    },
    {
        name:"Bill Gates",
        src:"https://links.papareact.com/4u4",
        profile:"https://links.papareact.com/zvy",
    }
]

function Stories() {
    return <div className="flex justify-center space-x-3 mx-auto">
        {
            stories.map((story) =>(
                <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile}></StoryCard>
            ))
        }
    </div>;
}

export default Stories;