import { useState } from 'react';
import type { FormEvent } from 'react';
import { Mail, MapPin, Send, Loader2, CheckCircle2, XCircle, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../../components/common/BrandIcons';
import { profile } from '../../data/profile';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

type FormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string;

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus('loading');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-[var(--color-accent)] text-sm mb-2">
          07. Contact
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
          Let's work together
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-10 max-w-xl">
          Have an opportunity, a project, or just want to say hi? My inbox is open.
        </p>

        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-6">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
            >
              <Mail size={18} />
              {profile.email}
            </a>
            <div className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]">
              <MapPin size={18} />
              {profile.location}
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>

            <a
              href={profile.cvPath}
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--color-border)] text-sm text-[var(--color-text)] hover:bg-[var(--color-bg-secondary)] transition-colors mt-4"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>

          <form onSubmit={handleSubmit} className="md:col-span-3 space-y-4" noValidate>
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-[var(--color-text-secondary)] mb-1.5">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-[var(--color-text)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors"
              />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-mono text-[var(--color-text-secondary)] mb-1.5">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-[var(--color-text)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors"
              />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-mono text-[var(--color-text-secondary)] mb-1.5">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={formData.subject}
                onChange={(e) => handleChange('subject', e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-[var(--color-text)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors"
              />
              {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono text-[var(--color-text-secondary)] mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-[var(--color-text)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
              />
              {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-accent)] text-white font-medium hover:bg-[var(--color-accent-hover)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>

            {status === 'success' && (
              <div className="flex items-center gap-2 text-sm text-green-500">
                <CheckCircle2 size={18} />
                Message sent — I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 text-sm text-red-500">
                <XCircle size={18} />
                Something went wrong. Please email me directly instead.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}