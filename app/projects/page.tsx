import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution built with Next.js and Supabase",
      tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool for teams",
      tech: ["React", "Node.js", "PostgreSQL", "Socket.io"],
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my work",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      link: "#"
    }
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}