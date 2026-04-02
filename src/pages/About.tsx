import { User, Quote } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      {/* Core Identity / Skills */}
      <section className="py-12 md:py-24 bg-surface-container-low">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-tertiary font-headline font-bold text-xs tracking-[0.2em] uppercase mb-4">Core Identity</h2>
            <p className="text-4xl md:text-6xl font-headline font-bold text-on-surface tracking-tight">The Creative Architect.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Main Bio */}
            <div className="md:col-span-8 bg-surface-container p-10 md:p-16 flex flex-col justify-between group hover:bg-surface-container-high transition-colors duration-500 custom-bezier">
              <div>
                <User className="text-tertiary mb-8" size={32} />
                <h3 className="text-3xl font-headline font-bold text-on-surface mb-6">A Driven Professional</h3>
                <p className="text-on-surface-variant text-lg leading-[1.6] font-body max-w-2xl">
                  Based in Indonesia, I am adept at leading teams and fostering collaboration. My background as Chairperson of OSIS has honed my leadership management and persuasive public speaking skills. I thrive at the intersection of technical execution and creative direction.
                </p>
              </div>
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-tertiary font-bold text-sm mb-1">Location</div>
                  <div className="text-on-surface font-medium">Indonesia</div>
                </div>
                <div>
                  <div className="text-tertiary font-bold text-sm mb-1">Language</div>
                  <div className="text-on-surface font-medium">English Proficient</div>
                </div>
                <div>
                  <div className="text-tertiary font-bold text-sm mb-1">Expertise</div>
                  <div className="text-on-surface font-medium">Leadership</div>
                </div>
                <div>
                  <div className="text-tertiary font-bold text-sm mb-1">Focus</div>
                  <div className="text-on-surface font-medium">Multimedia Arts</div>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="md:col-span-4 bg-surface-container-highest p-10 md:p-16 flex flex-col justify-center text-center relative overflow-hidden">
              <Quote className="text-secondary opacity-20 absolute top-8 left-8" size={120} />
              <p className="text-xl italic font-body text-secondary-fixed-dim leading-[1.6] relative z-10">
                "Leadership is not about being in charge. It is about taking care of those in your charge while pushing the boundaries of creativity."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
