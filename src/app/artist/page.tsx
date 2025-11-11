import Link from "next/link";
import Image from "next/image";

export default function ArtistPage() {
  return (
    <div className="relative w-full flex flex-col group/design-root overflow-x-hidden">
      <div className="relative w-full">
        <div
          className="bg-cover bg-center flex flex-col justify-end min-h-[60vh] md:min-h-[80vh]"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(28, 28, 28, 0.8) 0%, rgba(28, 28, 28, 0) 40%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDeTiv67my98QTYTr9EyfD1t6PuGbZHY3DduDMRt6rl1VhpxaaiqwjTu7-ZMBGxcmOjiUFdz4PiqP8Me1xouacRsSSHMaorh3UJitekgexsfjM-Pu89IubAi_WuFS-U2OeQhm8jXUkqNjQU69e3w4xNAFazukqtwP4btMGdvSSwWlt61k71iaLooT67JK0pN6X7rWtd0KLcgQk_RBPvOiPcEC7_rqdEMDZM8tjFS1JBj-k4yuDTQdRP1q-R8vjiy7iqs8qF6dvCn678")`,
          }}
        >
          <div className="p-6 md:p-12 lg:p-16">
            <h1 className="font-serif text-6xl md:text-8xl font-bold text-white tracking-tight leading-none">
              The Story of the Artist
            </h1>
          </div>
        </div>
      </div>
      <main className="w-full max-w-4xl mx-auto px-6 py-12 md:py-20 space-y-12 md:space-y-20">
        <section>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-accent-light dark:text-accent-dark mb-4 leading-tight">
            Crafting Worlds, One Brushstroke at a Time
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-text-light/80 dark:text-text-dark/80">
            Discover the journey behind the canvas. This is a story of passion, dedication, and the relentless pursuit of beauty in its purest form. From early inspirations drawn from the chaotic harmony of nature to the meticulous, meditative process in the studio, every piece is an invitation to see the world through a different lens.
          </p>
        </section>
        <section>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-accent-light dark:text-accent-dark mb-6 leading-tight">
            Sources of Inspiration
          </h3>
          <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-6 px-6">
            <div className="flex items-stretch gap-4 md:gap-6">
              {inspirationItems.map((item, index) => (
                <div key={index} className="flex h-full flex-1 flex-col gap-3 rounded-lg min-w-60 md:min-w-72">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                    style={{ backgroundImage: `url("${item.image}")` }}
                  ></div>
                  <div>
                    <p className="text-base font-medium leading-normal">{item.title}</p>
                    <p className="text-sm font-normal leading-normal text-text-light/70 dark:text-text-dark/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-accent-light dark:text-accent-dark mb-4 leading-tight">
            The Creative Process
          </h3>
          <p className="text-base md:text-lg leading-relaxed text-text-light/80 dark:text-text-dark/80 mb-6">
            Each creation begins not with a sketch, but with a feeling—a transient moment captured in memory. The process is a dialogue between intention and intuition, where layers of color and texture are built up and stripped away, revealing the final form. This is a glimpse into that sacred space where ideas take shape.
          </p>
          <div className="relative w-full aspect-video bg-background-dark rounded-xl overflow-hidden group">
            <Image
              className="absolute inset-0 w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOKjxtv8TyrBnpRSErbL18eLvIzYLCYhkLRBCNHtNcpkYAmsDC1zJDtN67nbwN1KHDgdoy2SbX3LBLnK_ZpbDr7nq65ZqfK8j2tsGV4O3K5Oy8kRzzWIXUxAdGpml4I9-Ob3IZoKCUAUm933Qe4XiPuHUkeuH5yGFpRBektOCqInRMLhPwxWU1rwChJSN1YXUYoAMFLRKLfptrWInUKX2trCuaKp05k0QfpwskLB1AXbpnxShAVUecbJbBdxERlol7l9g-GOEZ9SzA"
              alt="A still frame from the 'In the Studio' video, showing artist's hands at work on a large canvas."
              fill
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <button className="flex items-center justify-center w-20 h-20 bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-full border border-white/30 transition-transform duration-300 group-hover:scale-110">
                <span className="material-symbols-outlined text-white text-5xl">play_arrow</span>
              </button>
            </div>
            <div className="absolute bottom-0 left-0 p-4">
              <p className="text-white font-bold">In the Studio: A Behind the Brand Film</p>
            </div>
          </div>
        </section>
        <section className="text-center py-10">
          <blockquote className="relative">
            <p className="font-serif text-4xl md:text-5xl italic text-accent-light dark:text-accent-dark leading-snug">
              &quot;Art is not what you see, but what you make others see.&quot;
            </p>
            <cite className="block text-base text-text-light/70 dark:text-text-dark/70 mt-4 not-italic">
              — The Artist
            </cite>
          </blockquote>
        </section>
        <section className="text-center">
          <p className="text-base md:text-lg leading-relaxed text-text-light/80 dark:text-text-dark/80 mb-8">
            The story continues within each piece, a silent testament to the journey from a fleeting thought to a tangible creation. Now, we invite you to step into the gallery and experience the collection firsthand.
          </p>
          <Link
            className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-full text-base transition-colors hover:bg-primary/90"
            href="/gallery"
          >
            Explore the Gallery
          </Link>
        </section>
      </main>
    </div>
  );
}

const inspirationItems = [
    {
        title: "Natural Textures",
        description: "Finding intricate patterns in nature",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjVswsNPZOQXdQwiJrJh4JviOS6FpjjwCuaKd7KnObpeKKsWi_LULhhg9r4BL2EqZq2IrFM9DA1c9BEYFj3QAsdjo0kPYGdT_7YodGEFtuv24_qSGkvg3hXhCi9vgbFKBPi0MsJePMlKyLyOMlnCO0qC60N0953-_O4QbGRPE6l_Seo3Y3wyYFbwae2pthtC0-EuJLenejPWiE39t8DceUfINLxoFGne12OuInq6tiJv33nGQVGEfz6SAN75Y6mUUmL1U4EJZ-LPSJ"
    },
    {
        title: "Light & Shadow",
        description: "The silent, dramatic interplay of illumination",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUsQSJ1j_9brdDF51fIYkr7Vx4oLgCpcQUGC9in9JbbXfXDwirlUnIn-ytLixqy532J6L0ooS9AbsNuZq1oXbv_H1RqW1RIzJN8gtfL2SRyF7Bi6dvt1BwQCNU2lOb2l8mJb7QpfFm8uJ4bFWpWCwG_Ygf42KGPvter3lLsYeB5U5I6Qun4qhr4NnnLiv-DsxlAIZnlm5MLMKeaTE3Qq7oR-uKuRZMrLyCKE94MjmKBzN6YtjQ9YjV24xXV3waXImKvpe2mnssIE_4"
    },
    {
        title: "Ephemeral Forms",
        description: "The fleeting beauty of imperfection",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDK1dpwAJPM6vYyrT9cTiWnEcHHclXEmCpdhC0BZ40A4RUPlxkAIdezt2uKnOVZa-l6nU-pepqArYeeDX_jOQJluRH2O3S4LaRjIE-Pjvjervhf-XV_QQbeHgvl11AVAJMaKXKDPfj6tYK6xnUdfw-9QmzTk0BKPZJSxY8_baGK-UnW2n-wHL-wgwzyP0ML9JXPgUAPG14TESLngq5-j3sovSSnKKudFQnbLOOLF-Bj_d-bkRsSD0c704a_LI2DIL-YSTtZAww3jiyP"
    }
]
