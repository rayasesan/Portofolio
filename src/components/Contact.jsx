import { useState } from 'react';

export default function Contact() {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    e.target.reset();
    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  return (
    <>
      <section id="contact" className="py-20 lg:py-24 border-t border-r-steel relative overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{ background: 'radial-gradient(ellipse 50% 50% at 50% 80%, rgba(239,68,68,0.04), transparent 70%)' }}
        ></div>
        
        <div className="relative z-10 max-w-[1100px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="reveal">
              <p className="text-r-red text-[9px] font-bold tracking-[0.25em] uppercase mb-2">04 / Contact</p>
              <h2 className="text-white font-black text-3xl lg:text-5xl uppercase tracking-tight leading-[0.9] mb-5">
                Looking for an<br />AI Engineer?
              </h2>
              <div className="red-bar mb-5"></div>
              <p className="text-r-light text-xs leading-relaxed max-w-sm mb-8">
                Currently seeking AI Engineering or Machine Learning internship opportunities. Let's talk about how I can contribute to your team.
              </p>
              
              <div className="space-y-4">
                <a href="mailto:rayasesan@gmail.com" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded bg-r-red/10 flex items-center justify-center group-hover:bg-r-red/20 transition-all group-hover:scale-110">
                    <span className="iconify text-r-red" data-icon="lucide:mail" data-width="15"></span>
                  </div>
                  <div>
                    <p className="text-white text-[11px] font-semibold">rayasesan@gmail.com</p>
                    <p className="text-r-steel text-[9px]">Email</p>
                  </div>
                </a>
                
                <a href="https://linkedin.com/in/rayasesann" target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded bg-r-red/10 flex items-center justify-center group-hover:bg-r-red/20 transition-all group-hover:scale-110">
                    <span className="iconify text-r-red" data-icon="lucide:linkedin" data-width="15"></span>
                  </div>
                  <div>
                    <p className="text-white text-[11px] font-semibold">linkedin.com/in/rayasesann</p>
                    <p className="text-r-steel text-[9px]">LinkedIn</p>
                  </div>
                </a>
                
                <a href="https://github.com/rayasesan" target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded bg-r-red/10 flex items-center justify-center group-hover:bg-r-red/20 transition-all group-hover:scale-110">
                    <span className="iconify text-r-red" data-icon="lucide:github" data-width="15"></span>
                  </div>
                  <div>
                    <p className="text-white text-[11px] font-semibold">github.com/rayasesan</p>
                    <p className="text-r-steel text-[9px]">GitHub</p>
                  </div>
                </a>
                
                <a href="https://wa.me/6281398116769" target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded bg-r-red/10 flex items-center justify-center group-hover:bg-r-red/20 transition-all group-hover:scale-110">
                    <span className="iconify text-r-red" data-icon="lucide:message-circle" data-width="15"></span>
                  </div>
                  <div>
                    <p className="text-white text-[11px] font-semibold">+62 813-9811-6769</p>
                    <p className="text-r-steel text-[9px]">WhatsApp</p>
                  </div>
                </a>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="reveal bg-r-gray border border-r-steel rounded p-6 lg:p-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-[8px] font-bold tracking-[0.2em] uppercase text-r-silver block mb-1.5">Name *</label>
                  <input type="text" required placeholder="Your name" className="w-full bg-r-dark border border-r-steel text-white text-xs px-3 py-2.5 rounded placeholder:text-r-steel transition-colors" />
                </div>
                <div>
                  <label className="text-[8px] font-bold tracking-[0.2em] uppercase text-r-silver block mb-1.5">Email *</label>
                  <input type="email" required placeholder="you@company.com" className="w-full bg-r-dark border border-r-steel text-white text-xs px-3 py-2.5 rounded placeholder:text-r-steel transition-colors" />
                </div>
              </div>
              <div className="mb-4">
                <label className="text-[8px] font-bold tracking-[0.2em] uppercase text-r-silver block mb-1.5">Opportunity *</label>
                <select required className="w-full bg-r-dark border border-r-steel text-white text-xs px-3 py-2.5 rounded appearance-none cursor-pointer transition-colors pr-8">
                  <option value="">Select type</option>
                  <option value="ai">AI Engineering Internship</option>
                  <option value="ml">ML Internship</option>
                  <option value="ds">Data Science Internship</option>
                  <option value="collab">Collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-5">
                <label className="text-[8px] font-bold tracking-[0.2em] uppercase text-r-silver block mb-1.5">Message *</label>
                <textarea required rows="4" placeholder="Tell me about the opportunity..." className="w-full bg-r-dark border border-r-steel text-white text-xs px-3 py-2.5 rounded placeholder:text-r-steel resize-none transition-colors"></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-r-red hover:bg-r-red-light text-black text-[10px] font-black tracking-[0.18em] uppercase py-3.5 rounded transition-all hover:scale-[1.02]" 
                style={{ boxShadow: '0 0 25px rgba(239,68,68,0.2)' }}
              >
                Send Message
              </button>
              <p className="text-r-steel text-[8px] text-center mt-3">Usually respond within 24 hours</p>
            </form>
          </div>
        </div>
      </section>

      {/* Toast Notification */}
      <div 
        className={`toast-msg fixed bottom-5 right-5 z-[70] bg-r-gray border border-r-red/30 rounded px-5 py-3 flex items-center gap-3 ${showToast ? 'show' : ''}`} 
        style={{ boxShadow: '0 0 20px rgba(239,68,68,0.15)' }}
      >
        <span className="iconify text-r-red" data-icon="lucide:check-circle" data-width="16"></span>
        <div>
          <p className="text-white text-[11px] font-bold">Message Sent!</p>
          <p className="text-r-silver text-[9px]">I'll get back to you soon.</p>
        </div>
        <button onClick={() => setShowToast(false)} className="text-r-steel hover:text-white transition-colors ml-2" aria-label="Close">
          <span className="iconify" data-icon="lucide:x" data-width="13"></span>
        </button>
      </div>
    </>
  );
}
