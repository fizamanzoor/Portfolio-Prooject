import React from 'react'
import Hero from '../Components/Hero'
import { skills } from '../data'
import { motion } from 'framer-motion'

export default function Home() {
    return (
        <div>
            <Hero />
            <section className="container mx-auto px-6 py-10">
                <h2 className="text-3xl font-semibold text-center text-tealAccent mb-8">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skills.map((s, idx) => (
                        <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass p-4 rounded-xl text-center">
                            <div className="font-medium">{s}</div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    )
}
