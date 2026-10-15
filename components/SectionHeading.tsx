interface SectionHeadingProps {
  index: string;
  label: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
}

// Page header: numbered mono eyebrow, serif display title, optional lede.
export default function SectionHeading({
  index,
  label,
  title,
  description,
  action,
}: SectionHeadingProps) {
  return (
    <header className="space-y-5">
      <div className="flex items-center gap-3">
        <span className="eyebrow text-accent!">{index}</span>
        <span className="h-px w-8 bg-line-strong" />
        <span className="eyebrow">{label}</span>
      </div>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-fg md:text-5xl">
          {title}
        </h2>
        {action}
      </div>
      {description && (
        <p className="max-w-2xl text-[15px] leading-relaxed text-muted">
          {description}
        </p>
      )}
    </header>
  );
}

export function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-serif text-2xl tracking-tight text-fg md:text-[1.75rem]">
      {children}
    </h3>
  );
}
