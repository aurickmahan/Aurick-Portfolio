import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-6 md:px-12 mb-32 max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 z-10">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-tertiary"></div>
              <span className="text-tertiary font-headline font-bold text-xs tracking-[0.2em] uppercase">Independent Director & Leader</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-headline font-extrabold tracking-tighter text-on-surface leading-[0.85] mb-8">
              ABEDNEGO<br />COFAN.
            </h1>
            <p className="max-w-xl text-on-surface-variant text-lg md:text-xl leading-[1.6] font-body mb-12">
              Bridging the gap between technical mastery and creative vision. Indonesian-based multidisciplinary professional specializing in leadership, cinematic storytelling, and digital architecture.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/works" className="bg-secondary text-on-secondary px-8 py-4 rounded-md font-bold text-sm hover:scale-[1.02] transition-transform duration-500 custom-bezier flex items-center gap-3">
                View Portfolio <ArrowRight size={18} />
              </Link>
              <button className="bg-transparent ghost-border text-on-surface px-8 py-4 rounded-md font-bold text-sm hover:bg-primary-container transition-colors duration-500 custom-bezier">
                Download CV
              </button>
            </div>
          </div>
          
          <div className="md:col-span-5 relative hidden md:block">
            <div className="aspect-[3/4] bg-surface-container-lowest overflow-hidden rounded-sm relative group">
              <img 
                src="/aurick.jpg" 
                alt="Portrait" 
                className="w-full h-full object-cover grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 custom-bezier"
              />
              {/* Gradient Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-60"></div>
            </div>
            {/* Floating Element */}
            <div className="absolute -bottom-8 -left-12 bg-surface-container-highest p-8 shadow-[0_24px_48px_rgba(0,0,0,0.5)] z-20">
              <div className="text-tertiary font-headline font-black text-5xl mb-1">07.02</div>
              <div className="text-on-surface-variant text-xs font-bold uppercase tracking-[0.2em]">Est. 2008</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
