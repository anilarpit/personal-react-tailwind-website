export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <p className="text-muted-foreground">
                    Hi! I'm a Computer Science graduate from the University of Waterloo with a specialization 
                    in Artificial Intelligence.
                    </p>
                    <p className="text-muted-foreground">
                    I’m passionate about solving meaningful problems through 
                    software — whether it's building intelligent systems, designing robust backend 
                    architectures, or developing full-stack applications from the ground up.
                    </p>
                    <p className="text-muted-foreground">
                    My academic 
                    journey and internships have given me hands-on experience in machine learning, software 
                    engineering, and deploying scalable solutions. I'm always eager to learn, collaborate, 
                    and create technology that makes a real-world difference.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button"> Get In Touch </a>
                        <a href="/Arpit-Anil-Resume.pdf" download="Arpit_Resume.pdf" 
                        className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"> Download Resume</a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                <img 
                    src="photo.jpg"
                    alt="photo"
                    className="rounded-full object-cover gradient-border p-6 card-hover"
                />
                </div>
            </div>
            </div>
        </section>
    );
};