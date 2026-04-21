import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownContent({ content }: { content: string }) {
	return (
		<div className="prose-gneiss text-ink space-y-5 text-sm leading-relaxed">
			<ReactMarkdown
				remarkPlugins={[remarkGfm]}
				components={{
					h2: ({ children }) => (
						<h2 className="border-ink mt-10 border-b pb-2 font-mono text-lg font-semibold tracking-wide">
							{children}
						</h2>
					),
					h3: ({ children }) => (
						<h3 className="mt-8 font-mono text-base font-semibold">{children}</h3>
					),
					h4: ({ children }) => (
						<h4 className="text-ink-muted mt-6 font-mono text-sm font-semibold tracking-wide uppercase">
							{children}
						</h4>
					),
					p: ({ children }) => <p className="text-ink/90 text-sm leading-relaxed">{children}</p>,
					ul: ({ children }) => <ul className="list-none space-y-2 pl-0">{children}</ul>,
					ol: ({ children }) => <ol className="list-none space-y-2 pl-0">{children}</ol>,
					li: ({ children }) => (
						<li className="text-ink/90 flex gap-2 text-sm leading-relaxed">
							<span className="text-ink-muted font-mono" aria-hidden="true">
								—
							</span>
							<span>{children}</span>
						</li>
					),
					blockquote: ({ children }) => (
						<blockquote className="border-ink text-ink-muted border-l-2 pl-4 text-sm italic">
							{children}
						</blockquote>
					),
					a: ({ href, children }) => (
						<a
							className="decoration-ink-muted hover:decoration-ink font-medium underline underline-offset-4 transition-colors"
							href={href}
							target={href?.startsWith("http") ? "_blank" : undefined}
							rel={href?.startsWith("http") ? "noreferrer" : undefined}
						>
							{children}
						</a>
					),
					code: ({ className, children, ...props }) => {
						// Inline code
						if (!className) {
							return (
								<code className="sku-badge mx-0.5 whitespace-nowrap" {...props}>
									{children}
								</code>
							);
						}

						// Code block
						return (
							<code
								className="border-ink bg-paper block overflow-x-auto border p-4 font-mono text-xs leading-relaxed"
								{...props}
							>
								{children}
							</code>
						);
					},
					pre: ({ children }) => <pre className="overflow-x-auto">{children}</pre>,
					table: ({ children }) => (
						<div className="overflow-x-auto">
							<table className="table-catalog">{children}</table>
						</div>
					),
					thead: ({ children }) => <thead>{children}</thead>,
					tbody: ({ children }) => <tbody>{children}</tbody>,
					tr: ({ children }) => <tr>{children}</tr>,
					th: ({ children }) => (
						<th className="border-ink border-b-2 px-3 py-2 text-left font-mono text-xs font-semibold tracking-wide uppercase">
							{children}
						</th>
					),
					td: ({ children }) => (
						<td className="border-border-light text-ink/90 border-b px-3 py-2 align-top text-sm">
							{children}
						</td>
					),
					hr: () => <hr className="section-divider my-8" />,
					strong: ({ children }) => <strong className="text-ink font-semibold">{children}</strong>,
					em: ({ children }) => <em className="text-ink-muted italic">{children}</em>,
				}}
			>
				{content}
			</ReactMarkdown>
		</div>
	);
}
