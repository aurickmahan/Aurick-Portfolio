import { ArrowRight, Smartphone, AtSign } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="bg-surface-container-low p-12 md:p-24 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface tracking-tighter leading-[1.1] mb-10">
              Let's create something <span className="text-secondary italic">meaningful</span> together.
            </h2>
            <a href="mailto:aurickmahan2008@gmail.com" className="inline-flex items-center gap-4 text-tertiary text-xl font-bold font-headline group">
              Start a conversation
              <ArrowRight className="transition-transform duration-500 custom-bezier group-hover:translate-x-2" />
            </a>
          </div>
          
          <div className="relative z-10 flex flex-col gap-6 w-full md:w-auto">
            <a href="https://wa.me/6285230567278" target="_blank" rel="noopener noreferrer" className="p-8 bg-surface-container ghost-border flex items-center gap-6 group hover:bg-surface-container-high transition-colors duration-500">
              <Smartphone className="text-secondary" size={28} />
              <div>
                <div className="text-xs text-on-surface-variant uppercase tracking-[0.2em] font-bold mb-1">Direct Line</div>
                <div className="text-on-surface font-headline text-lg">+62 852-3056-7278</div>
              </div>
            </a>
            <a href="https://instagram.com/yyolikk" target="_blank" rel="noopener noreferrer" className="p-8 bg-surface-container ghost-border flex items-center gap-6 group hover:bg-surface-container-high transition-colors duration-500">
              <AtSign className="text-secondary" size={28} />
              <div>
                <div className="text-xs text-on-surface-variant uppercase tracking-[0.2em] font-bold mb-1">Social</div>
                <div className="text-on-surface font-headline text-lg">@yyolikk</div>
              </div>
            </a>
          </div>
          
          {/* Subtle background gradient */}
          <div className="absolute right-0 bottom-0 w-2/3 h-full bg-gradient-to-tl from-secondary-container/20 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
