import Icon from "../components/Icon";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center justify-center space-y-6 py-20 text-center animate-fade-in">
      <p className="font-serif text-[7rem] leading-none tracking-tight text-gradient">404</p>
      <div className="space-y-2">
        <h1 className="font-serif text-3xl tracking-tight text-fg">Page not found</h1>
        <p className="text-sm leading-relaxed text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
      </div>
      <Link id="not-found-back-btn" href="/" className="btn btn-ghost">
        <Icon name="ArrowLeft" size={15} />
        Back to home
      </Link>
    </div>
  );
}
