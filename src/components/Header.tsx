import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <Link href="/">
            <p className="font-display text-xl font-bold tracking-normal">Digital Atelier</p>
          </Link>
        </div>
        <div className="flex items-center justify-end">
          <button className="flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-transparent text-text-light dark:text-text-dark transition-transform duration-300 hover:scale-110">
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
