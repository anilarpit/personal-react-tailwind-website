import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [

    {name: "Python", level: 95, category: "languages"},
    {name: "C/C++", level: 95, category: "languages"},
    {name: "C#", level: 80, category: "languages"},
    {name: "Kotlin", level: 85, category: "languages"},
    {name: "Java", level: 70, category: "languages"},
    {name: "JavaScript", level: 70, category: "languages"},
    {name: "TypeScript", level: 70, category: "languages"},
    {name: "Bash", level: 80, category: "languages"},
    {name: "SQL", level: 90, category: "languages"},

    {name: "Pytorch", level: 90, category: "AI/ML"},
    {name: "TensorFlow", level: 80, category: "AI/ML"},
    {name: "Scikit-Learn", level: 90, category: "AI/ML"},
    {name: "Hugging Face", level: 90, category: "AI/ML"},
    {name: "Pytesseract", level: 90, category: "AI/ML"},
    {name: "AWS Bedrock", level: 90, category: "AI/ML"},
    {name: "LLaMa", level: 80, category: "AI/ML"},
    {name: "Anthropic Claude", level: 80, category: "AI/ML"},
    {name: "Mistral", level: 80, category: "AI/ML"},

    {name: "Flask", level: 80, category: "Backend"},
    {name: "Node.js", level: 70, category: "Backend"},
    {name: "JavaFX", level: 85, category: "Backend"},
    {name: "AWS S3", level: 90, category: "Backend"},
    {name: "AWS Redshift", level: 95, category: "Backend"},
    {name: "AWS Glue", level: 85, category: "Backend"},
    {name: "AWS EC2", level: 90, category: "Backend"},

    {name: "HTML/CSS", level: 95, category: "Frontend"},
    {name: "React", level: 70, category: "Frontend"},
    {name: "Tailwind", level: 70, category: "Frontend"},
    {name: "Bootstrap", level: 70, category: "Frontend"},

    {name: "Git/Github/Gitlab", level: 95, category: "tools"},
    {name: "Docker", level: 90, category: "tools"},

];

const categories = ["All", "languages", "Frontend", "Backend", "AI/ML"]

export const SkillSection = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const filteredSkills = skills.filter(
        (skill) => activeCategory === "All" || skill.category === activeCategory
    );

    return (<section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skills </span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button 
                    key={key}
                    onClick={() => setActiveCategory(category)} 
                    className={
                        cn("px-5 py-2 rounded-full transition-colore duration-300 capitalize",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-forefround hover:bd-secondary"
                        )}>
                            {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease_out" 
                            style={{width: skill.level + "%"}}/>
                        </div>
                        <div className="text-right mt-1">
                            <span>{skill.level}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    );
};