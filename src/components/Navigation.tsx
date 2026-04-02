import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Works', path: '/works' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-[20px] flex justify-between items-center px-6 md:px-12 py-6">
      <Link to="/" className="text-xl font-bold tracking-tighter text-on-surface font-headline relative z-50">A.C.A.M.</Link>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-10">
        {navLinks.map((link) => (
          <Link 
            key={link.name}
            to={link.path} 
            className={`${isActive(link.path) ? 'text-tertiary font-bold' : 'text-on-surface-variant hover:text-on-surface'} transition-colors duration-300 font-headline tracking-tight text-sm uppercase`}
          >
            {link.name}
          </Link>
        ))}
        <a href="#contact" className="text-on-surface-variant hover:text-on-surface transition-colors duration-300 font-headline tracking-tight text-sm uppercase">Contact</a>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-on-surface relative z-50 p-2 -mr-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-surface/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 md:hidden transition-all duration-500 custom-bezier ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {navLinks.map((link) => (
          <Link 
            key={link.name}
            to={link.path} 
            onClick={() => setIsMobileMenuOpen(false)} 
            className={`${isActive(link.path) ? 'text-tertiary' : 'text-on-surface hover:text-tertiary'} transition-colors duration-300 font-headline tracking-widest text-xl uppercase font-bold`}
          >
            {link.name}
          </Link>
        ))}
        <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-on-surface hover:text-tertiary transition-colors duration-300 font-headline tracking-widest text-xl uppercase font-bold">Contact</a>
      </div>
    </nav>
  );
}
