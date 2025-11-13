import React from 'react'
import { experience } from '../data'
import { motion } from 'framer-motion'

export default function About() {
    return (
        <section className="container mx-auto px-6 py-14">
            <h2 className="text-3xl font-semibold text-tealAccent mb-6">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="glass p-6 rounded-xl">
                    <p className="text-slate-700">
                        I’m a passionate and dedicated developer from Karachi, Pakistan with practical experience in React.js, Node.js and full-stack development. I enjoy building intuitive and performant web applications and continuously learning new technologies.
                    </p>
                    <ul className="mt-4 space-y-2 text-slate-600">
                        <li><strong>Education:</strong> BSc Computer Science, Mohammad Ali Jinnah University (2020-2024)</li>
                        <li><strong>Languages:</strong> English, Urdu</li>
                        <li><strong>Tools:</strong> VSCode, Git, GitHub, MySQL</li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Experience</h3>
                    <div className="space-y-4">
                        {experience.map((exp, i) => (
                            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="glass p-4 rounded-lg border">
                                <div className="font-semibold">{exp.role} — <span className="text-tealAccent">{exp.company}</span></div>
                                <div className="text-sm text-slate-600">{exp.date}</div>
                                <ul className="mt-2 list-disc ml-5 text-slate-700">
                                    {exp.details.map((d, idx) => <li key={idx}>{d}</li>)}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
