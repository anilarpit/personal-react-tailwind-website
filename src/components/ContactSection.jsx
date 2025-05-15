import { Linkedin, LinkedinIcon, Mail, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export const ContactSection = () => {
    return (<section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:">
                Get In <span className="text-primary"> Touch </span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Open to opportunities in software development and AI/ML — 
                happy to collaborate on innovative projects or join a great team!
            </p>

            <div className="pt-8">
            {/*<h3 className="text-2xl font-semibold mb-6">Contact Information </h3>*/}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium"> Email </h4>
                                <a href="mailto:arpit.anil@uwaterloo.ca" className="text-muted-foreground hover:text-primary transition-colors">
                                arpit.anil@uwaterloo.ca
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Phone className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium"> Phone </h4>
                                <a href="tel:+16479498920" className="text-muted-foreground hover:text-primary transition-colors">
                                +1 (647) 949-8920
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <LinkedinIcon className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium"> LinkedIn </h4>
                                <a href="https://www.linkedin.com/in/arpitanil/" className="text-muted-foreground hover:text-primary transition-colors">
                                https://www.linkedin.com/in/arpitanil/
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>);
};