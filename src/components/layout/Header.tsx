import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { COMPANY, NAV_LINKS } from '@/constants/company';
import gogreenIcon from '@/assets/logos/gogreen-icon.png';
import { cn } from '@/lib/cn';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-mist/10 bg-deepest">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between px-6 py-3.5 md:px-10 xl:px-16">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src={gogreenIcon} alt="" className="h-8 w-auto" />
          <span className="font-display text-sm font-semibold tracking-tight text-mist">
            {COMPANY.shortName}
            <span className="ml-1 hidden text-mist/50 sm:inline">Agritech</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link, i) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
            >
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    'font-mono text-[11px] uppercase tracking-[0.14em] text-mist/60 transition-colors hover:text-sprout',
                    isActive && 'text-sprout',
                  )
                }
              >
                {link.label}
              </NavLink>
            </motion.div>
          ))}
        </nav>

        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, delay: 0.2 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-sprout px-5 py-2 font-mono text-xs uppercase tracking-[0.14em] text-deepest transition-colors hover:bg-mist"
          >
            Enquire
          </Link>
        </motion.div>

        <motion.button
          className="rounded-full p-1.5 text-mist lg:hidden"
          onClick={() => setOpen((v) => !v)}
          whileTap={{ scale: 0.9 }}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-x-0 top-[57px] bottom-0 z-40 flex flex-col overflow-y-auto bg-deepest px-8 pt-8 lg:hidden"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 26, stiffness: 300 }}
          >
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  <NavLink
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="block border-b border-mist/10 py-4 font-display text-xl font-medium text-mist"
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-full bg-sprout px-5 py-3.5 font-mono text-sm uppercase tracking-[0.14em] text-deepest"
              >
                Enquire
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
