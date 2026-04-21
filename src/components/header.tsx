import { Link, useRouterState } from "@tanstack/react-router";

export default function Header() {
	const routerState = useRouterState();
	const currentPath = routerState.location.pathname;

	const links = [
		{ to: "/", label: "Home" },
		{ to: "/services", label: "Services" },
		{ to: "/docs", label: "Docs" },
	] as const;

	const isActive = (path: string) => {
		if (path === "/") return currentPath === "/";
		return currentPath.startsWith(path);
	};

	return (
		<header className="border-ink border-b">
			<div className="mx-auto w-full max-w-5xl px-4 py-3">
				<div className="flex items-center justify-between gap-4">
					{/* Logo */}
					<Link to="/" className="flex items-center gap-2 no-underline">
						<span className="font-mono text-base font-bold tracking-tight">GNEISS LAB</span>
					</Link>

					{/* Navigation - pill buttons with shadow */}
					<nav className="flex items-center gap-1">
						{links.map(({ to, label }) => {
							const active = isActive(to);
							return (
								<Link
									key={to}
									to={to}
									className={`border-ink bg-cream text-ink hover:bg-ink hover:text-cream border px-3 py-1 font-mono text-xs transition-all`}
									style={{
										boxShadow: "2px 2px 0 0 var(--ink)",
									}}
								>
									{active && <span className="mr-1">●</span>}
									{label}
								</Link>
							);
						})}
					</nav>
				</div>
			</div>
		</header>
	);
}
