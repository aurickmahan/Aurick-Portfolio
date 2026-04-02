export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <div className="text-2xl font-black text-on-surface font-headline mb-4">A.C.A.M.</div>
          <p className="text-on-surface-variant font-body text-sm leading-[1.6] max-w-md">
            © 2026 Abednego Cofan Aurick Mahan. All rights reserved. Professional portfolio showcasing excellence in leadership and creative direction.
          </p>
        </div>
        <div className="flex flex-col md:items-end gap-2">
          <div className="text-tertiary font-bold text-sm tracking-[0.2em] uppercase mb-2">Surabaya, Indonesia</div>
          <a href="mailto:aurickmahan2008@gmail.com" className="text-on-surface-variant hover:text-on-surface transition-colors text-sm">aurickmahan2008@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}
