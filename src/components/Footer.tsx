import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-background-light dark:border-zinc-800 dark:bg-background-dark">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col items-center gap-8">
          <p className="font-display text-2xl font-bold">Digital Atelier</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/gallery" className="hover:text-accent transition-colors">Gallery</Link>
            <Link href="/artist" className="hover:text-accent transition-colors">Artist</Link>
            <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-500">© 2024 Digital Atelier. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
