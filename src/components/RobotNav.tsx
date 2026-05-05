import { Link, useRouterState } from '@tanstack/react-router';

const navLinks = [
  { to: '/', label: 'Overview' },
  { to: '/design', label: 'Design' },
  { to: '/specs', label: 'Specs' },
  { to: '/team', label: 'Team' },
] as const;

export function RobotNav() {
  const router = useRouterState();
  const pathname = router.location.pathname;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-apple-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-10 h-16">
        {/* Logo — Byte to Bin company logo */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img
            src="https://static.step1.dev/01e940865853981d53afa6ed3a99b246"
            alt="Byte to Bin"
            className="h-10 w-10 object-contain ring-1 ring-apple-border rounded-full p-0.5"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col leading-none">
            <span className="text-[13px] font-bold tracking-tight text-apple-text uppercase">Byte to Bin</span>
            <span className="text-[10px] text-apple-muted tracking-widest font-medium uppercase mt-0.5">RoboSort-M1</span>
          </div>
        </Link>

        {/* Navigation links */}
        <nav className="flex items-center gap-2">
          {navLinks.map(({ to, label }) => {
            const isActive = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`px-5 py-2 text-[13px] font-medium rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-apple-text text-white'
                    : 'text-apple-muted hover:text-apple-text hover:bg-apple-bg'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
