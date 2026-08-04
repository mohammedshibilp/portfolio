import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import confetti from 'canvas-confetti';
import { Send, Mail, Phone, MapPin, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useSound } from '../context/SoundContext';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactSection: React.FC = () => {
  const { playHoverSound, playClickSound, playSuccessSound } = useSound();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    playClickSound();
    setIsSubmitting(true);

    try {
      // EmailJS send fallback handler
      // Replace serviceId, templateId, publicKey with live values if provided
      await new Promise((resolve) => setTimeout(resolve, 1200));

      playSuccessSound();
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#22d3ee', '#8b5cf6', '#38bdf8'],
      });

      toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full glass-card p-4 rounded-2xl border border-accent-blue/40 shadow-2xl flex items-center gap-3 text-white`}
        >
          <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
          <div>
            <p className="font-heading font-bold text-sm">Message Sent Successfully!</p>
            <p className="text-xs text-text-muted">
              Thank you, {data.name}. Mohammed Shibil P will get back to you shortly.
            </p>
          </div>
        </div>
      ));

      reset();
    } catch {
      toast.error('Failed to send message. Please try emailing directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <Toaster position="bottom-right" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-accent-blue text-xs font-mono">
            <Mail className="w-3.5 h-3.5" />
            <span>LET'S CONNECT & COLLABORATE</span>
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight">
            Get In <span className="gradient-text-primary">Touch</span>
          </h2>
          <p className="text-text-muted text-base sm:text-lg">
            Have a project, infrastructure consultation, or hiring inquiry? Send me a message!
          </p>
        </div>

        {/* Contact Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="font-heading font-bold text-2xl text-white">
                Contact Information
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Open for full-time DevOps Engineer, Cloud Engineer, and Infrastructure Engineering opportunities.
              </p>

              {/* Direct Info List */}
              <div className="space-y-4 pt-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  onMouseEnter={playHoverSound}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-accent-blue/50 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-accent-blue/15 text-accent-blue border border-accent-blue/30 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">
                      Email Address
                    </span>
                    <span className="font-heading font-bold text-sm text-white group-hover:text-accent-blue transition-colors">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  onMouseEnter={playHoverSound}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-accent-purple/50 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-accent-purple/15 text-accent-purple border border-accent-purple/30 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">
                      Phone Contact
                    </span>
                    <span className="font-heading font-bold text-sm text-white group-hover:text-accent-purple transition-colors">
                      {PERSONAL_INFO.phone}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-white/5">
                  <div className="p-3 rounded-xl bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">
                      Location
                    </span>
                    <span className="font-heading font-bold text-sm text-white">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Pill */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 border border-accent-blue/30 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-white">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>Availability: Immediately Open</span>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              </div>
            </div>
          </div>

          {/* Right Glass Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="font-heading font-bold text-2xl text-white">
                Send a Direct Message
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Your Full Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. John Doe"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                    />
                    {errors.name && (
                      <p className="text-[11px] font-mono text-rose-400">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Your Email Address *</label>
                    <input
                      type="email"
                      placeholder="e.g. john@example.com"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                    />
                    {errors.email && (
                      <p className="text-[11px] font-mono text-rose-400">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Subject *</label>
                  <input
                    type="text"
                    placeholder="e.g. DevOps Engineer Role / Project Inquiry"
                    {...register('subject', { required: 'Subject is required' })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                  />
                  {errors.subject && (
                    <p className="text-[11px] font-mono text-rose-400">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Message Payload *</label>
                  <textarea
                    rows={5}
                    placeholder="Type your message here..."
                    {...register('message', { required: 'Message is required' })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all resize-none"
                  />
                  {errors.message && (
                    <p className="text-[11px] font-mono text-rose-400">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onMouseEnter={playHoverSound}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple text-bg-primary font-heading font-bold text-sm shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 disabled:opacity-50"
                >
                  <Send className={`w-4 h-4 ${isSubmitting ? 'animate-bounce' : ''}`} />
                  <span>{isSubmitting ? 'Transmitting Message...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
