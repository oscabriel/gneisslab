import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="prose-gneiss space-y-5 text-sm leading-relaxed text-ink">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h2 className="mt-10 border-b border-ink pb-2 font-mono text-lg font-semibold tracking-wide">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-8 font-mono text-base font-semibold">{children}</h3>
          ),
          h4: ({ children }) => (
            <h4 className="mt-6 font-mono text-sm font-semibold uppercase tracking-wide text-ink-muted">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="text-sm leading-relaxed text-ink/90">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="list-none space-y-2 pl-0">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-none space-y-2 pl-0">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="flex gap-2 text-sm leading-relaxed text-ink/90">
              <span className="font-mono text-ink-muted" aria-hidden="true">
                —
              </span>
              <span>{children}</span>
            </li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-2 border-ink pl-4 text-sm italic text-ink-muted">
              {children}
            </blockquote>
          ),
          a: ({ href, children }) => (
            <a
              className="font-medium underline decoration-ink-muted underline-offset-4 transition-colors hover:decoration-ink"
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
                <code
                  className="sku-badge mx-0.5 whitespace-nowrap"
                  {...props}
                >
                  {children}
                </code>
              );
            }

            // Code block
            return (
              <code
                className="block overflow-x-auto border border-ink bg-paper p-4 font-mono text-xs leading-relaxed"
                {...props}
              >
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="overflow-x-auto">{children}</pre>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto">
              <table className="table-catalog">{children}</table>
            </div>
          ),
          thead: ({ children }) => (
            <thead>{children}</thead>
          ),
          tbody: ({ children }) => <tbody>{children}</tbody>,
          tr: ({ children }) => <tr>{children}</tr>,
          th: ({ children }) => (
            <th className="border-b-2 border-ink px-3 py-2 text-left font-mono text-xs font-semibold uppercase tracking-wide">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border-b border-border-light px-3 py-2 align-top text-sm text-ink/90">
              {children}
            </td>
          ),
          hr: () => <hr className="section-divider my-8" />,
          strong: ({ children }) => (
            <strong className="font-semibold text-ink">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-ink-muted">{children}</em>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
