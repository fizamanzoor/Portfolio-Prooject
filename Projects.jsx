import React from 'react'
import { projects } from '../data'
import ProjectCard from '../Components/ProjectCard'

export default function Projects() {
    return (
        <section className="container mx-auto px-6 py-14">
            <h2 className="text-3xl font-semibold text-tealAccent mb-8">Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((p, i) => <ProjectCard key={i} project={p} />)}
            </div>
        </section>
    )
}
