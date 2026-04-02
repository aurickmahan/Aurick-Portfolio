export default function Works() {
  return (
    <div className="pt-32 pb-24">
      {/* Selected Works - Asymmetric Gallery */}
      <section className="py-12 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <h2 className="text-tertiary font-headline font-bold text-xs tracking-[0.2em] uppercase mb-4">Portfolio 2024</h2>
            <h3 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter text-on-surface">Selected Works</h3>
          </div>
          <div className="h-[1px] w-24 bg-secondary hidden md:block mb-4"></div>
        </div>

        <div className="space-y-40">
          {/* Project 1 */}
          <article className="relative group">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-center">
              <div className="md:col-span-9 overflow-hidden bg-surface-container-lowest aspect-video relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2056&auto=format&fit=crop" 
                  alt="Stage Production" 
                  className="w-full h-full object-cover opacity-70 grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000 custom-bezier"
                />
              </div>
              <div className="md:col-span-4 md:-ml-32 z-20 mt-8 md:mt-0">
                <div className="p-10 md:p-12 bg-surface-container-highest shadow-[0_24px_48px_rgba(0,0,0,0.5)]">
                  <span className="text-tertiary font-body text-xs tracking-[0.2em] uppercase mb-6 block">Leadership</span>
                  <h4 className="text-3xl md:text-4xl font-headline font-bold mb-6 text-on-surface">Student Council Chairperson</h4>
                  <p className="text-on-surface-variant mb-8 leading-[1.6] font-body">
                    Frateran Cup XXV: Leading a massive team to execute a landmark regional competition. Strategic planning, logistics, and high-stakes decision making.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-[1px] w-8 bg-outline-variant"></div>
                    <span className="text-secondary font-bold text-sm italic">Executive Lead</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Project 2 */}
          <article className="relative group">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-center">
              <div className="md:col-span-4 md:col-start-2 z-20 mb-8 md:mb-0 order-2 md:order-1">
                <div className="p-10 md:p-12 bg-surface-container shadow-[0_24px_48px_rgba(0,0,0,0.5)] md:-mr-32 relative">
                  <span className="text-tertiary font-body text-xs tracking-[0.2em] uppercase mb-6 block">Screenwriting</span>
                  <h4 className="text-3xl md:text-4xl font-headline font-bold mb-6 text-on-surface">Short Film 'Bebek'</h4>
                  <p className="text-on-surface-variant mb-10 leading-[1.6] font-body">
                    Developing a narrative centered on local nuances and character-driven drama. A study in pacing, dialogue, and atmospheric storytelling.
                  </p>
                  <button className="bg-transparent ghost-border text-on-surface px-6 py-3 rounded-md font-bold text-sm hover:bg-primary-container transition-colors duration-500 custom-bezier">
                    View Script Summary
                  </button>
                </div>
              </div>
              <div className="md:col-span-8 overflow-hidden bg-surface-container-lowest aspect-[4/3] relative z-10 order-1 md:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=2070&auto=format&fit=crop" 
                  alt="Typewriter" 
                  className="w-full h-full object-cover opacity-70 grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000 custom-bezier"
                />
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
