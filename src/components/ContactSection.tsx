// app/components/ContactSection.jsx

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const ContactSection = () => {
  const email = 'rashmiofficial45@gmail.com';

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: email,
      href: `https://mail.google.com/mail/u/0/?view=cm&tf=1&to=${email}`,
    },
{
    icon: Phone,
        label: 'Phone',
            value: '+91 6370984679',
                href: 'tel:+916370984679',
    },
{
    icon: MapPin,
        label: 'Location',
            value: 'Bhubaneswar, India',
                href: 'https://maps.google.com?q=Bhubaneswar',
    },
  ];

const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/rashmiofficial45' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/rashmi-ranjan-parija' },
    { icon: Twitter, label: 'Twitter', href: 'https://x.com/RashmiRaPari264' },
];

    return (
        <section id="contact" className="py-20 bg-muted/20 flex justify-center">
            <div className="max-w-xl w-full">
                <motion.div
                    className="mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-lg text-muted-foreground">
                        Feel free to reach out via email, phone, or connect on social media.
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {contactInfo.map((info, idx) => (
                        <motion.a
                            key={idx}
                            href={info.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-start space-x-4 p-4 bg-card rounded-lg hover:bg-muted/50 transition-transform transform hover:scale-105 text-left"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <info.icon className="w-6 h-6 text-primary" />
                            <div>
                                <p className="font-medium">{info.label}</p>
                                <p className="text-muted-foreground">{info.value}</p>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <motion.div
                    className="flex justify-center space-x-6 mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    {socialLinks.map(({ icon: Icon, href }, idx) => (
                        <motion.a
                            key={idx}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-card hover:bg-muted/50 transition-transform transform hover:scale-110"
                            whileHover={{ y: -4 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <Icon className="w-5 h-5" />
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;

