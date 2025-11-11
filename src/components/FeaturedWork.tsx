const featuredWorks = [
  {
    title: "Kinetic Dreams",
    category: "Digital Sculpture",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFYIqXoFQ_6KPlASBH7Mwm7kbua7_tIdoFOoxivXiBvOs-9AzVJt6Z9dwC2ujsFhBmvvC5H1ZDYeMK_j9QZ39Fah05Cy4m48-MqE87hucOiqZyvK7KQqod4g6PtzYnUDul7Zn21jWSBSLZ4_8VDPkipgpyAaqq7b37L-nF1bnnYqzUNDftuwqnASc4JPUYPQK6iROR6gCfLfslOQQtpEJC-fHvCX08d3uFiXJJk8SdXVxSB-yU1F48NKm-Cl0ivPzPI4XNnJZ5EPHs",
  },
  {
    title: "Ethereal Echoes",
    category: "Generative Art",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCX10t7duRMorpap8RAdi8RNmVfAD0M9bC2PAbdVP0vwptVNPaYUqIUjNw5w5opQOGtjIZjuEJCH8jVbf5lzt-Jwh6X9Nwn3nasI1nrtxmGL3L46KDDDgu5vo4vYoyzs15TI5VcHsyewQppE51N7vA931TdZxSJtJgDg89bvmKbq9rbRZTFTOM4zx8yEmnBiH-Fvgh3_UbaSgYbELjgCCTM7vDDMWMbzvqiadPnTKOaiP368hIcL_fIrZ5stpwiRvqwOy3oqDFoHpvJ",
  },
];

export default function FeaturedWork() {
  return (
    <section className="py-12 overflow-hidden">
      <h2 className="font-display text-4xl font-bold leading-tight tracking-tight px-4 pb-4 pt-5">Featured Work</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-4">
        {featuredWorks.map((work, index) => (
          <div
            key={index}
            className="flex aspect-[4/3] flex-col justify-end gap-3 rounded-xl bg-cover bg-center p-4 transform transition-transform duration-500 hover:scale-105"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%), url("${work.image}")`,
            }}
          >
            <h3 className="font-display w-4/5 text-2xl font-bold leading-tight text-white line-clamp-3">{work.title}</h3>
            <p className="text-sm text-white/90">{work.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
