import Header from '@/components/Header';
import RegistrationForm from '@/components/RegistrationForm';
import ContactForm from '@/components/ContactForm';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          poster="https://images.unsplash.com/photo-1542252187-251f4ac34e54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfGFsbHx8fHx8fHx8fDE3MTk1ODk2ODN8&ixlib=rb-4.0.3&q=80&w=1080"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-futuristic-dubai-buildings-4491-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10"></div>
        <div className="relative z-20 flex flex-col h-full">
          <Header />
          <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
            <div className="flex flex-col gap-6 max-w-4xl">
              <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
                Fractional Ownership. A Digital Twist.
              </h1>
              <h2 className="text-white/80 text-base sm:text-lg md:text-xl font-normal leading-normal max-w-2xl mx-auto">
                Real Estate for Everyone, One Digital Dirham at a Time.
              </h2>
              <div className="mt-4">
                <RegistrationForm />
              </div>
            </div>
          </main>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 animate-bounce-slow">
            <span className="material-symbols-outlined">south</span>
          </div>
        </div>
      </div>
      <section className="bg-gradient-to-b from-background-light to-background-dark py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-gray-900 dark:text-white text-4xl sm:text-5xl font-bold tracking-tighter leading-tight mb-6">
              A World Where Real Estate Isn&apos;t an Exclusive Club.
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl leading-relaxed">
              Oweleen is dismantling the old guard. By tokenizing high-value properties, we&apos;re not just offering investment opportunities; we&apos;re architecting a new, inclusive financial ecosystem. Our platform makes coveted real estate assets liquid, accessible, and transparently traded, empowering a new generation of investors.
            </p>
          </div>
          <div className="flex justify-center items-center h-96">
            <Image
              alt="3D animation of a luxury villa deconstructing into glowing digital cubes"
              className="w-full max-w-md h-auto object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBS-PvbKMU3BiqzTp32OGYXsbIGhlDZ36V89BtRtrn1SXqv8vQOXh3eYnCo-gDE_Bhmd0GCg8kpS1rNFTzW-_WJqUzxdgj4VS-iI6-Fd4JGO7uQwIcw6LULnqGdm2sphZyaBqmwiY_9yvZifqKTrxMdEJ_7ByI-TGP2CZf7jGwPIR4Bvf_FN2ECGV_IyLda5C3PjCm5x_uusmPZXsN8CClVh2gQYth84tUKL5wO8P4ABqY-Zi4xtWde_zaPEDTSwoLfidZvB3C1p-I"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
      <section className="bg-background-dark py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
