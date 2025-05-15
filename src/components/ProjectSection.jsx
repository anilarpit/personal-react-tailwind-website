import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Mentorship Inclusivity Assistant",
        description: "Mentorship is one of the most powerful strategies to decrease the gender gap in tech. But how can we do a better job of providing support?",
        image: "/projects/Project1.png",
        tags: ["C#", "Google Vision", "JavaScript", "SQL"],
        demoUrl: "https://devpost.com/software/mia-pa1d8c",
        githubUrl: "https://github.com/a8-s/VenusHacks",
    },
    {
        id: 2,
        title: "My-Reviser",
        description: "A revision companion that stores what you want to revise and provides them based on the level of importance. It also gives you motivation whenever you revise.",
        image: "/projects/Project2.png",
        tags: ["Bootstrap", "HTML/CSS", "Django", "Python"],
        demoUrl: "https://devpost.com/software/my-revisor",
        githubUrl: "https://github.com/anilarpit/RU-Hackathon",
    },
];

export const ProjectSection = () => {
    return (
    <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured <span className="text-primary"> Projects</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my projects.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div>
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span key={tag.id} className="px-2 py-1 text-xs font-medium rounded-full border bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        
                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a href={project.demoUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <ExternalLink size={20}/>
                                </a>
                                <a href={project.githubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <Github  size={20}/>
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/anilarpit">
                    Check My Github <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>);
};