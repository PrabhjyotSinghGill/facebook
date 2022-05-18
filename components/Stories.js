import StoryCard from "./StoryCard";
const stories = [
    {
        name:"Gill",
        src:"/c.jpg",
        profile:"/gill.jpg",
    },
    {
        name:"Bill Gates",
        src:"/d.jpg",
        profile:"https://links.papareact.com/zvy",
    },
    {
        name:"Bill Gates",
        src:"/f.jpg",
        profile:"https://links.papareact.com/zvy",
    },
    {
        name:"Bill Gates",
        src:"/a.jpg",
        profile:"https://links.papareact.com/zvy",
    },
    
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