import { Link } from "@tanstack/react-router";

export default function Header() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/docs", label: "Docs" },
  ] as const;

  return (
    <header className="border-b">
      <div className="mx-auto flex w-full max-w-5xl flex-row items-center justify-between px-4 py-3">
        <nav className="flex items-center gap-4 text-sm">
          {links.map(({ to, label }) => {
            return (
              <Link className="underline-offset-4 hover:underline" key={to} to={to}>
                {label}
              </Link>
            );
          })}
        </nav>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">minilab</p>
      </div>
    </header>
  );
}
