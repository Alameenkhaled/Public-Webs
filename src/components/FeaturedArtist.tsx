import Image from "next/image";

export default function FeaturedArtist() {
  return (
    <section className="bg-background-light py-12 dark:bg-background-dark overflow-hidden">
      <div className="p-4">
        <div className="flex flex-col gap-8 rounded-xl bg-[#EDEDEB] p-6 dark:bg-[#2A2A2A] md:flex-row md:items-center">
          <div className="w-full md:w-1/3">
            <Image
              alt="Portrait of a modern artist in their studio"
              className="aspect-square w-full rounded-full object-cover md:rounded-xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFFCt9J3WZMNViyJ09wgLz_ARqS38x-cr6f8MsorfbEFM326r7U-xjBhzvo-voG0_6tNHcUUnSpIffM1JipSlMMEppweDDfHLZL6863aeMRIQnBSxa-QM9iC2TKD3zi1epXIreQWXj1bPhNbu5FHPFZxyXPLc6hEZswXczJEY_4F0uXxzzB-77lzPtW-dLarkcEn34bktHlS-Sjz1R-1SlckpG7njw_sjY43RoweaUOBuzbuzlRFQnuCtl0oWyPGAqVyJmilDIyli9"
              width={400}
              height={400}
            />
          </div>
          <div className="flex flex-col gap-4 text-center md:w-2/3 md:text-left">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">Featured Artist</p>
            <h3 className="font-display text-5xl font-bold leading-tight tracking-tight">Alex Chen</h3>
            <p className="text-base text-gray-700 dark:text-gray-300">
              A visionary in digital abstraction, Alex Chen blends traditional techniques with algorithmic art to explore the boundaries of perception. His work is a journey through color, form, and emotion.
            </p>
            <div className="mt-4">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-accent text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-accent-hover transition-all duration-300 hover:scale-105">
                <span className="truncate">View Portfolio</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
