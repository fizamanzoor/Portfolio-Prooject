import React, { useState } from 'react'
import emailjs from 'emailjs-com'

export default function Contact() {
    const [status, setStatus] = useState(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const templateParams = {
            from_name: form.name.value,
            from_email: form.email.value,
            message: form.message.value
        }

        // Replace these with your EmailJS values
        const SERVICE_ID = 'your_service_id'
        const TEMPLATE_ID = 'your_template_id'
        const USER_ID = 'your_user_id'

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
            .then(() => {
                setStatus('SENT')
                form.reset()
            })
            .catch(() => {
                setStatus('ERROR')
            })
    }

    return (
        <section className="container mx-auto px-6 py-14 max-w-3xl">
            <h2 className="text-3xl font-semibold text-tealAccent mb-6">Contact</h2>
            <div className="glass p-6 rounded-xl">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Name</label>
                        <input required name="name" className="mt-2 w-full p-3 rounded border" placeholder="Your name" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input required name="email" type="email" className="mt-2 w-full p-3 rounded border" placeholder="you@example.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Message</label>
                        <textarea required name="message" rows="6" className="mt-2 w-full p-3 rounded border" placeholder="Tell me about your project"></textarea>
                    </div>
                    <div className="flex items-center gap-3">
                        <button type="submit" className="px-5 py-2 rounded bg-tealAccent text-white font-medium">Send Message</button>
                        {status === 'SENT' && <span className="text-sm text-green-600">Message sent — thank you!</span>}
                        {status === 'ERROR' && <span className="text-sm text-red-600">Something went wrong. Try later.</span>}
                    </div>
                </form>
            </div>
        </section>
    )
}
