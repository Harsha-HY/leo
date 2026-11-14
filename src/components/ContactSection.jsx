import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, MessageSquare, Building2 } from 'lucide-react';
import { pptData } from '../data/pptData';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Partnership / Grant Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({
        name: '',
        email: '',
        phone: '',
        subject: 'Partnership / Grant Inquiry',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-zinc-700 bg-zinc-100 border border-zinc-200 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Contact Desk</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
            Connect & Collaborate
          </h2>
          <p className="mt-3 text-base text-zinc-600 leading-relaxed">
            Reach out to our leadership and project team in Tirupati for CSR partnerships, research collaborations, donor due-diligence, or general inquiries.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left: Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white border border-zinc-200 shadow-xs">
            <h3 className="text-lg font-bold text-zinc-950 mb-1">
              Send an Official Message
            </h3>
            <p className="text-xs text-zinc-500 mb-5">
              We review and respond to communications within 24 to 48 business hours.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-zinc-50 border border-zinc-200 text-center space-y-2 animate-fadeIn">
                <CheckCircle2 className="w-10 h-10 text-zinc-900 mx-auto" />
                <h4 className="text-base font-bold text-zinc-950">Thank You for Connecting</h4>
                <p className="text-xs text-zinc-600">
                  Your message has been sent to our administrative team at Tirupati. We will follow up with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-zinc-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-50 border border-zinc-200 focus:border-zinc-900 focus:bg-white focus:outline-none text-xs text-zinc-950 placeholder-zinc-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="name@organization.org"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-50 border border-zinc-200 focus:border-zinc-900 focus:bg-white focus:outline-none text-xs text-zinc-950 placeholder-zinc-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-zinc-700 mb-1">
                      Contact Phone
                    </label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+91 98480 00000"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-50 border border-zinc-200 focus:border-zinc-900 focus:bg-white focus:outline-none text-xs text-zinc-950 placeholder-zinc-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-700 mb-1">
                      Area of Inquiry
                    </label>
                    <select
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-50 border border-zinc-200 focus:border-zinc-900 focus:bg-white focus:outline-none text-xs text-zinc-950 transition-colors"
                    >
                      <option>CSR Grant / Institutional Funding</option>
                      <option>Child Education & Anganwadi Support</option>
                      <option>Anti-Bonded Labour Casework & Legal Aid</option>
                      <option>Natural Farming & APIIATP Collaboration</option>
                      <option>Project DROP Plastic Recycling</option>
                      <option>Volunteering / Research</option>
                      <option>General Information</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-700 mb-1">
                    Your Message / Proposal *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe your inquiry, project proposal, or interest..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-50 border border-zinc-200 focus:border-zinc-900 focus:bg-white focus:outline-none text-xs text-zinc-950 placeholder-zinc-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-full text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 transition-all flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Message to PPT Desk</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Info */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-zinc-100 text-zinc-900">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-zinc-500 font-semibold block">
                    Central Secretariate
                  </span>
                  <h4 className="text-base font-bold text-zinc-950">
                    Tirupati Head Office
                  </h4>
                </div>
              </div>

              <div className="space-y-3 text-xs text-zinc-700">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Door No: 13-42, L.B. Nagar</strong><br />
                    Tirupati, Chittoor District, Andhra Pradesh – 517502, India
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-zinc-500 shrink-0" />
                  <div>
                    <span>Landline: <strong>(0877) 2244392</strong></span><br />
                    <span>Mobile: <strong>+91 98482 42394</strong></span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-zinc-500 shrink-0" />
                  <div>
                    <span className="font-mono text-zinc-900">{pptData.organization.emailPrimary}</span><br />
                    <span className="font-mono text-zinc-500">{pptData.organization.emailSecondary}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 pt-2 border-t border-zinc-100 text-zinc-500">
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  <span>Working Hours: Mon – Sat, 9:30 AM to 6:00 PM IST</span>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-xs space-y-2 text-xs">
              <span className="text-[10px] font-mono text-zinc-500 uppercase font-semibold block">
                Statutory Summary
              </span>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-zinc-600">
                <div>
                  <span className="text-zinc-400 block">Trust Reg:</span>
                  <span className="font-mono font-medium text-zinc-900">24/83</span>
                </div>
                <div>
                  <span className="text-zinc-400 block">PAN No:</span>
                  <span className="font-mono font-medium text-zinc-900">AAATP8682K</span>
                </div>
                <div>
                  <span className="text-zinc-400 block">FCRA No:</span>
                  <span className="font-mono font-medium text-zinc-900">010140011</span>
                </div>
                <div>
                  <span className="text-zinc-400 block">NITI Aayog:</span>
                  <span className="font-mono font-medium text-zinc-900">AP/2013/0068300</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
