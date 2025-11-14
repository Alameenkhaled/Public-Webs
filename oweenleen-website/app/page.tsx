import ContactForm from "@/components/ContactForm";
import RegistrationForm from "@/components/RegistrationForm";

export default function Home() {
  return (
    <main>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Video Background */}
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
          {/* TopNavBar */}
          <header className="w-full absolute top-0 left-0 px-4 sm:px-10 lg:px-20 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-4 text-white">
                <div className="size-6">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_6_543)">
                      <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z"></path>
                      <path
                        clipRule="evenodd"
                        d="M7.24189 26.4066C7.31369 26.4411 7.64204 26.5637 8.52504 26.3738C9.59462 26.1438 11.0343 25.5311 12.7183 24.4963C14.7583 23.2426 17.0256 21.4503 19.238 19.238C21.4503 17.0256 23.2426 14.7583 24.4963 12.7183C25.5311 11.0343 26.1438 9.59463 26.3738 8.52504C26.5637 7.64204 26.4411 7.31369 26.4066 7.24189C26.345 7.21246 26.143 7.14535 25.6664 7.1918C24.9745 7.25925 23.9954 7.5498 22.7699 8.14278C20.3369 9.32007 17.3369 11.4915 14.4142 14.4142C11.4915 17.3369 9.32007 20.3369 8.14278 22.7699C7.5498 23.9954 7.25925 24.9745 7.1918 25.6664C7.14534 26.143 7.21246 26.345 7.24189 26.4066ZM29.9001 10.7285C29.4519 12.0322 28.7617 13.4172 27.9042 14.8126C26.465 17.1544 24.4686 19.6641 22.0664 22.0664C19.6641 24.4686 17.1544 26.465 14.8126 27.9042C13.4172 28.7617 12.0322 29.4519 10.7285 29.9001L21.5754 40.747C21.6001 40.7606 21.8995 40.931 22.8729 40.7217C23.9424 40.4916 25.3821 39.879 27.0661 38.8441C29.1062 37.5904 31.3734 35.7982 33.5858 33.5858C35.7982 31.3734 37.5904 29.1062 38.8441 27.0661C39.879 25.3821 40.4916 23.9425 40.7216 22.8729C40.931 21.8995 40.7606 21.6001 40.747 21.5754L29.9001 10.7285ZM29.2403 4.41187L43.5881 18.7597C44.9757 20.1473 44.9743 22.1235 44.6322 23.7139C44.2714 25.3919 43.4158 27.2666 42.252 29.1604C40.8128 31.5022 38.8165 34.012 36.4142 36.4142C34.012 38.8165 31.5022 40.8128 29.1604 42.252C27.2666 43.4158 25.3919 44.2714 23.7139 44.6322C22.1235 44.9743 20.1473 44.9757 18.7597 43.5881L4.41187 29.2403C3.29027 28.1187 3.08209 26.5973 3.21067 25.2783C3.34099 23.9415 3.8369 22.4852 4.54214 21.0277C5.96129 18.0948 8.43335 14.7382 11.5858 11.5858C14.7382 8.43335 18.0948 5.9613 21.0277 4.54214C22.4852 3.8369 23.9415 3.34099 25.2783 3.21067C26.5973 3.08209 28.1187 3.29028 29.2403 4.41187Z"
                        fillRule="evenodd"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_6_543">
                        <rect fill="white" height="48" width="48"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">
                  Oweleen
                </h2>
              </div>
              <nav className="hidden lg:flex items-center gap-6 xl:gap-9">
                <a className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors" href="#vision">THE VISION</a>
                <a className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors" href="#portfolios">PORTFOLIOS</a>
                <a className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors" href="#">ECOSYSTEM</a>
                <a className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors" href="#">THE FUTURE</a>
                <a className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors" href="#about">ABOUT US</a>
                <a className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors" href="#contact">CONTACT US</a>
                <a className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors" href="#faq">FAQ</a>
                <a className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors" href="#">BLOG/INSIGHTS</a>
                <a className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors" href="#testimonials">TESTIMONIALS</a>
              </nav>
              <div className="flex items-center gap-2">
                <button className="hidden sm:flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-white/10 hover:bg-white/20 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors backdrop-blur-sm">
                  <span className="truncate">Login/Sign Up</span>
                </button>
                <button className="lg:hidden flex items-center justify-center h-10 w-10 text-white">
                  <span className="material-symbols-outlined" data-icon="">
                    menu
                  </span>
                </button>
              </div>
            </div>
          </header>
          {/* Hero Section */}
          <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
            <div className="flex flex-col gap-6 max-w-4xl">
              <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
                Fractional Ownership. A Digital Twist.
              </h1>
              <h2 className="text-white/80 text-base sm:text-lg md:text-xl font-normal leading-normal max-w-2xl mx-auto">
                Real Estate for Everyone, One Digital Dirham at a Time.
              </h2>
              <div className="mt-4">
                <a href="#portfolios" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary hover:bg-primary/90 text-white text-base font-bold leading-normal tracking-[0.015em] mx-auto transition-transform hover:scale-105">
                  <span className="truncate">Our Portfolio</span>
                </a>
              </div>
            </div>
          </main>
          {/* Scroll Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 animate-bounce-slow">
            <span className="material-symbols-outlined" data-icon="">
              south
            </span>
          </div>
        </div>
      </div>
      <section id="vision" className="bg-gradient-to-b from-background-light to-background-dark py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-gray-900 dark:text-white text-4xl sm:text-5xl font-bold tracking-tighter leading-tight mb-6">
              A World Where Real Estate Isn't an Exclusive Club.
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl leading-relaxed">
              Oweleen is dismantling the old guard. By tokenizing high-value
              properties, we're not just offering investment opportunities;
              we're architecting a new, inclusive financial ecosystem. Our
              platform makes coveted real estate assets liquid, accessible, and
              transparently traded, empowering a new generation of investors.
            </p>
          </div>
          <div className="flex justify-center items-center h-96">
            <img
              alt="3D animation of a luxury villa deconstructing into glowing digital cubes"
              className="w-full max-w-md h-auto object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBS-PvbKMU3BiqzTp32OGYXsbIGhlDZ36V89BtRtrn1SXqv8vQOXh3eYnCo-gDE_Bhmd0GCg8kpS1rNFTzW-_WJqUzxdgj4VS-iI6-Fd4JGO7uQwIcw6LULnqGdm2sphZyaBqmwiY_9yvZifqKTrxMdEJ_7ByI-TGP2CZf7jGwPIR4Bvf_FN2ECGV_IyLda5C3PjCm5x_uusmPZXsN8CClVh2gQYth84tUKL5wO8P4ABqY-Zi4xtWde_zaPEDTSwoLfidZvB3C1p-I"
            />
          </div>
        </div>
      </section>
      <section id="portfolios" className="bg-background-dark py-20 sm:py-32 overflow-hidden">
        <div className="max-w-none mx-auto">
          <div className="pl-4 sm:pl-6 lg:pl-8">
            <h2 className="text-white text-4xl sm:text-5xl font-bold tracking-tighter leading-tight mb-4">
              Our Portfolios
            </h2>
            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-3xl">
              Diversified investment portfolios tailored to your financial
              ambitions and values.
            </p>
          </div>
          <div className="mt-16">
            <div className="horizontal-scrolling-wrapper pl-4 sm:pl-6 lg:pl-8 space-x-8">
              <div className="flex-shrink-0 w-[300px] h-[450px] sm:w-[350px] sm:h-[525px] rounded-xl overflow-hidden relative group">
                <img
                  alt="Digital matrix and abstract code visuals"
                  className="absolute inset-0 w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFvtnZogey5VNAG_U94x8_u1Bvilu_uKj6E-rUcFlE7q4yMWySXZEUntgGg_Dd0w9XJ72GSB-XfxbpTz4xE_FzENKadpDwjBfiQARQ9W_bsEXtzUTs7-4mZyWu2oNT18_anyxY6IkwRfqolutPtCy_m_oPDH7sLM_vvJQGcdEnUtCl0mWyaraug4gVHOab_SwQfOq5983NnKUkAbHvEsPtUoYoyBDiiTRkXFObX9jBbAwm7zne7Z0BxgTQntRphTp3dwfK_Eu8qps"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3
                    className="text-white text-3xl font-bold uppercase tracking-[0.2em] glitch-text"
                    data-text="ALPHA"
                  >
                    ALPHA
                  </h3>
                  <p className="text-white/80 mt-2">
                    High-risk, high-reward ventures into emerging digital real
                    estate markets.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 w-[300px] h-[450px] sm:w-[350px] sm:h-[525px] rounded-xl overflow-hidden relative group">
                <img
                  alt="Community gathering in a modern, sustainable co-living space"
                  className="absolute inset-0 w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtYGxlBpVIkLIdcpIYbOU57d9bJ9vYiXz_B0HEnYE62HWwLtAresjFCs5hfNpHSPYlE4X0P856DQDM1PQaDeom6R5_935if5T-c5fO6qtsq85-RS3uCOssXAjpiHzbssqnyLOZwpf4Sx40sSycfkyxNJap7vFgocxVyNMqv-0YUCkCwQ58ojfDS22f_Ul_JOPVQCCwKvD0SSyOevP-i-vyNSt-h0qC3SEDPgJD7NJLVoSIEqEhXzezDhV76LsC0FK-CrQQLd-8SDc"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-white text-3xl font-bold">
                    Impact Portfolio
                  </h3>
                  <p className="text-white/80 mt-2">
                    Invest in properties that generate social and environmental
                    good alongside financial returns.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 w-[300px] h-[450px] sm:w-[350px] sm:h-[525px] rounded-xl overflow-hidden relative group">
                <img
                  alt="Sleek, metallic interior of a luxury skyscraper penthouse"
                  className="absolute inset-0 w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6KprlmTeqixP-CDlLLOoIBSkFjDHZnIKUrKxbms8nqV0quyHQ4ji-Unan2vznUbFdG6kqYgg1aRuc7btrerAPZk1uMPfAes80huG8-GfjixYT9KLN_otc9RfsYhvozydD09dxVsNdvogsPD7_VHZsrcTWtl6-ArrNd1hsYcQbalq0reak-UqIa6fgbHjqco6SVqiBrfHXZmGREVgpSdBY_S8Pi76w1IWhoaJIrOQQqO6THOPgtDodKWpddnI9R3jFv9ZP8UQGeRE"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-white text-3xl font-bold">
                    Diamond Portfolio
                  </h3>
                  <p className="text-white/80 mt-2">
                    Premium, iconic real estate in the world's most
                    sought-after locations.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 w-[300px] h-[450px] sm:w-[350px] sm:h-[525px] rounded-xl overflow-hidden relative group">
                <img
                  alt="Lush vertical gardens on a futuristic eco-friendly building"
                  className="absolute inset-0 w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqQdMGJImA7jD053SKE6WX6F0suyFu4E7ZdfRK0ci7dFXeX8b0KUXMY_oGmWp6i0UKaGGTHu4J1R9O_3qfxRDBiGhosw07Kl2su4_vpX7I3Y8E_NTtMjLwD5eiTKJblaucG_704EnNRMM_zHxpt0plktwzT28s7NArd5cWr8aPt1nIJDIXF2iKNCe-o1-MZvMf90B1dM2b_R68J2l9AlbVXLgwgVLVimo5-Spws1i9Qktbvs_YsOaSPurTSb9LyG1bPWgwEe7zk7A"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-white text-3xl font-bold">
                    Green Finance
                  </h3>
                  <p className="text-white/80 mt-2">
                    Sustainable properties certified for energy efficiency and
                    environmental design.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 w-[300px] h-[450px] sm:w-[350px] sm:h-[525px] rounded-xl overflow-hidden relative group mr-4 sm:mr-6 lg:mr-8">
                <img
                  alt="Sun-drenched, modern family home with a pool"
                  className="absolute inset-0 w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5aVFJe_6tAPd6lq5fR7LGkpiimq1O9TWp7Vb53xz966mRwcVTOh_IvgpZm7rdeknu0uq8S3Gc9HZVD4X50GuaqNK85mxeDma5Ms38jkAdeyXLKR9u_2HCd94OcP6JpmUvTgYEC20Ckj56uOb8kP0-BgtgDMfpXkQgrvOQy_OwgjCnblFwGpgvBs0-K6D7UzerProyM46BJPkKzWPqlpHOnzk2gKyLFFtzXIlQb-JWbAn4h6qALsLnubAr-rfvvAKeIH4hY5y8oUU"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-white text-3xl font-bold">
                    H. Homes Portfolio
                  </h3>
                  <p className="text-white/80 mt-2">
                    Curated selection of high-yield residential properties for
                    long-term growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Section */}
      <section id="about" className="bg-background-light dark:bg-background-dark py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="@container">
            <div className="flex flex-col gap-8 px-4 py-10 @[864px]:flex-row @[864px]:items-center">
              <div className="flex flex-col gap-6 text-center @[864px]:text-left @[864px]:w-1/2">
                <div className="flex flex-col gap-2">
                  <h1 className="text-[#111318] dark:text-white text-4xl font-bold leading-tight tracking-tighter @[480px]:text-5xl">
                    Our Vision: Real Estate, Reimagined.
                  </h1>
                  <h2 className="text-slate-600 dark:text-slate-300 text-sm font-normal leading-normal @[480px]:text-base">
                    Oweleen is revolutionizing real estate investment through
                    blockchain, AI, and tokenization. We're on a mission to
                    democratize the market, making it transparent, accessible,
                    and rewarding for everyone.
                  </h2>
                </div>
                <button className="flex self-center @[864px]:self-start min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-white text-sm font-bold leading-normal tracking-wide @[480px]:text-base">
                  <span className="truncate">
                    Explore Investment Opportunities
                  </span>
                </button>
              </div>
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-1/2"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBHEs6pHs4lWUIBj1aBDdH8MA0GyTa8Mtr-GH5RjkTdXhPtPck16_5k6JC6jjk-wyub9RhEc9P2KjK_rWcZNwBH1mYsk2-YyQZyOSrTBpceUTvZkHR6mItvfygG5-_r0Jy4UgiyUp6Ald9GXQlQIKPyQPvLuNGtiHJnLBVPe5J-5sNf-ERpPYLPmhUgW09sQtRxGS-7V_8nkPOydSLF3OlSvubYhoVgISgWPcSCQ4qbB6ESPhQNtEH0uLyPgoYTRQZM-o7D1iLUn8k')",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      {/* Transition to Dark Section */}
      <div className="bg-gradient-to-b from-background-light to-[#161625] dark:from-background-dark dark:to-[#161625]">
        {/* Team Section */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 xl:px-0">
          <div className="max-w-4xl mx-auto">
            <div className="layout-content-container flex flex-col flex-1">
              <h2 className="text-[#111318] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 text-center">
                The Minds Behind the Mission
              </h2>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-4 p-4">
                <div
                  className="group relative bg-cover bg-center flex flex-col gap-3 rounded-lg justify-end p-4 aspect-[3/4] overflow-hidden"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDkbwQjfhQiVPQS0su2yLW4Y10a5ktqiNc12jUg0N6F80h5WgKUu8_4i8vg-IXLxedEzG1EJ5AFyOZofQbi6nVpGLxjHQ0gWSSVI9UbbSB8GCBqTCscdwTlDWBYhVQJJKZIF5rX23O6FD60jrMsNR-pTBaE0ebZY1b8LsYePWdCusQvLeFeZuKaBvoQRQ25hPMy5ysd9t0Gq3-eHWDjzPJjm8GTtm1sVDMM2dhwpfMS6YUBQzyh8_tHTGVoiCOFKbaa8C89bZawjMY')",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <p className="text-white text-base font-bold leading-tight line-clamp-3">
                      Alex Chen
                    </p>
                    <p className="text-white/80 text-sm">CEO & Founder</p>
                  </div>
                </div>
                <div
                  className="group relative bg-cover bg-center flex flex-col gap-3 rounded-lg justify-end p-4 aspect-[3/4] overflow-hidden"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAq_ceyBkIbLt1Q9pmh_aaQooKst-YonMaPtz4tPYhgt64YYRGgfWedHnTBz5yGz5pZIb7E8Kh3g9xxdm1C6Q7OSPsxaQB7JcgkeapfltS9OdGtaZYptq4VvPBGU2FSxXTRUBgHGL_q7D5EeaXLg73RspiNCrqeu8dJndgLVaP_Ql7GQnyAsj0LlWSjH1VHpoSLtsezpiak_KpqqIucyCB7LglixRWyhDHoW3RDuR96zSXXbvUyRCbx6Ony0_mXTd0E7TpsvrtNjd8')",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <p className="text-white text-base font-bold leading-tight line-clamp-3">
                      Brenda Smith
                    </p>
                    <p className="text-white/80 text-sm">Head of Blockchain</p>
                  </div>
                </div>
                <div
                  className="group relative bg-cover bg-center flex flex-col gap-3 rounded-lg justify-end p-4 aspect-[3/4] overflow-hidden"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBk-ZUvUd4GnI2G1Zayzt3EFLuQ64QRklvhlRunknFYm6ljRGAgf4jbwAUWfaOf0Id7ZdZXk8sfcKyDCWQIvQcM2kpIkFbbuN1F_kO9FS-l_C7hkR_s9qN5Kz-CT_t33oqQUd94mRHrD8Aklc7gYEVELXAsBjRuNnFCWYzez9MklgNY7_KezF4_g2THicg9BH1LvHYHEgGH4RhJLBK4DK48Mx9a-PPBWeCn3eGJR5ZJM2A52llVpEWM6DeptD_FA6L4yZO-LSVWjcY')",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <p className="text-white text-base font-bold leading-tight line-clamp-3">
                      Carlos Gomez
                    </p>
                    <p className="text-white/80 text-sm">Lead AI Engineer</p>
                  </div>
                </div>
                <div
                  className="group relative bg-cover bg-center flex flex-col gap-3 rounded-lg justify-end p-4 aspect-[3/4] overflow-hidden"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCqUlpXd_Q4DdB43OfEOz_QXFrDMoOdOZTsl1-OmCK6ey6m3t1HrlhDFtDFw5LKfUfPdGvCsGBU4VJ3n86z_tMU8XjB9717Df_Nk3nnOTXPcVRG_l0AcEnHwJzC-wBf65ArBR2TdJKP6aj2bAjhsawkHwOaF7BkycwIlcPgmN_-KBJRUjkxaR1Sclmw2pLD-hTJZCVAQKRdmQRz2rQVRpFE7Ty44eR9jlv7jVgK5K3wrFzo5gCXlOMJEbJEK3cYePMGh3vvewKb9WU')",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <p className="text-white text-base font-bold leading-tight line-clamp-3">
                      Dana White
                    </p>
                    <p className="text-white/80 text-sm">
                      Chief Marketing Officer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Technology Section */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 xl:px-0 bg-[#161625] text-[#E0E0E0]">
          <div className="max-w-4xl mx-auto">
            <div className="layout-content-container flex flex-col flex-1">
              <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 text-center">
                The Technology That Powers Us
              </h2>
              <div className="flex flex-col p-4 gap-3">
                <details
                  className="flex flex-col rounded-lg border border-white/20 bg-white/5 px-[15px] py-[7px] group"
                  open
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                    <p className="text-white text-sm font-medium leading-normal">
                      Blockchain Technology
                    </p>
                    <div className="text-white group-open:rotate-180 transition-transform">
                      <span className="material-symbols-outlined">
                        expand_more
                      </span>
                    </div>
                  </summary>
                  <p className="text-slate-400 text-sm font-normal leading-normal pb-2">
                    Our platform is built on a secure and transparent
                    blockchain, ensuring every transaction is immutable and
                    verifiable, providing unparalleled trust for our investors.
                  </p>
                </details>
                <details className="flex flex-col rounded-lg border border-white/20 bg-white/5 px-[15px] py-[7px] group">
                  <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                    <p className="text-white text-sm font-medium leading-normal">
                      Artificial Intelligence
                    </p>
                    <div className="text-white group-open:rotate-180 transition-transform">
                      <span className="material-symbols-outlined">
                        expand_more
                      </span>
                    </div>
                  </summary>
                  <p className="text-slate-400 text-sm font-normal leading-normal pb-2">
                    Leveraging AI, we analyze market trends and property data
                    to identify high-potential investments, providing you with
                    data-driven insights to maximize your returns.
                  </p>
                </details>
                <details className="flex flex-col rounded-lg border border-white/20 bg-white/5 px-[15px] py-[7px] group">
                  <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                    <p className="text-white text-sm font-medium leading-normal">
                      Asset Tokenization
                    </p>
                    <div className="text-white group-open:rotate-180 transition-transform">
                      <span className="material-symbols-outlined">
                        expand_more
                      </span>
                    </div>
                  </summary>
                  <p className="text-slate-400 text-sm font-normal leading-normal pb-2">
                    We convert real estate assets into digital tokens,
                    enabling fractional ownership. This allows you to invest
                    in high-value properties with any amount, making real
                    estate accessible to all.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* CTA Section */}
      <section className="bg-[#161625] text-white px-4 py-20 sm:px-6 lg:px-8 xl:px-0">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Ready to Reshape Real Estate?
          </h2>
          <p className="mt-4 text-slate-300">
            Join our community and be a part of the future of real estate
            investment.
          </p>
          <div className="mt-8 flex justify-center">
            <RegistrationForm />
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section id="testimonials" className="bg-background-light dark:bg-background-dark py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="flex justify-center">
            <div className="layout-content-container flex flex-col max-w-4xl flex-1 text-center items-center">
              <h1 className="text-text-light dark:text-text-dark tracking-tight text-4xl md:text-5xl font-bold leading-tight">
                Real Voices. Real Results. Our Community Speaks.
              </h1>
              <p className="mt-4 max-w-2xl text-subtext-light dark:text-subtext-dark text-lg font-normal leading-relaxed">
                Discover the impact Oweleen has had on our community. Read
                stories from early investors and pilot program participants who
                are shaping the future with us.
              </p>
            </div>
          </div>
          {/* Featured Testimonial Carousel */}
          <div className="w-full">
            <div className="flex overflow-x-auto snap-x snap-mandatory [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden py-8">
              <div className="flex items-stretch gap-8 mx-auto">
                <div className="flex h-full flex-col gap-6 text-center bg-card-light dark:bg-card-dark rounded-xl p-8 shadow-sm w-full max-w-sm sm:max-w-md snap-center flex-shrink-0">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full flex self-center w-20 h-20"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDLpIFQQYwzkxKE8iZ3H4Nq3Fhut7JMV42gTOyj-YXfPti_yw8H9TE8EMPtzh_HbtcRanas3oM550RV7cQ4Jxb8g20JWD6dK2z5sWk3eRXTsLK8MaXAHkB4fAmspqGG_8T0ImsOdMUCvtYFpJl2gO3hF1LK3Q8fJt1Sxubg4N8x5fa_PmS0DqAyw9bTPZtiBEnXWmXU3GpqDtbkwg4IzXtfBdDXhBIsh8eTAXiy-D3OIIOrzBJmguSsrfQk9AqVRrA2wpLA4pI8FkU')",
                    }}
                  ></div>
                  <div>
                    <p className="text-text-light dark:text-text-dark text-lg font-medium leading-relaxed">
                      "Oweleen transformed my investment strategy. The clarity
                      and data provided are unparalleled. It's a must-have tool
                      for any serious investor."
                    </p>
                    <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal mt-4">
                      Sarah L., Early Investor
                    </p>
                  </div>
                </div>
                <div className="flex h-full flex-col gap-6 text-center bg-card-light dark:bg-card-dark rounded-xl p-8 shadow-sm w-full max-w-sm sm:max-w-md snap-center flex-shrink-0">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full flex self-center w-20 h-20"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCR9Jf6w4SqzjPMwFfVRDomuYCO4qKTgxk2Z_kiVN45psUkPmYNLnTfyJfCuvIL7tJozAEzNYfSFMGM9mKYWoVXEHtRJmMLoEzrDMPQj80TwPwIIocVSV6PzwtYMhQqsHXTZyjw8vGsDOZnUVVVn_DyXeqyTGln8KKelvvMCTXPF8WbpaKTBxOCpqPCVxSnjoQY11h84ha7mF4SVZMVfakLgNgvuiMBCsV7bVv0wwL9KDDPi0olbtqmqjzIdVUP5W_D3osYw9D3D9A')",
                    }}
                  ></div>
                  <div>
                    <p className="text-text-light dark:text-text-dark text-lg font-medium leading-relaxed">
                      "Joining the pilot program was a game-changer. The
                      platform is not only powerful but also incredibly
                      intuitive and easy to navigate."
                    </p>
                    <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal mt-4">
                      Mark Chen, Pilot Program Participant
                    </p>
                  </div>
                </div>
                <div className="flex h-full flex-col gap-6 text-center bg-card-light dark:bg-card-dark rounded-xl p-8 shadow-sm w-full max-w-sm sm:max-w-md snap-center flex-shrink-0">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full flex self-center w-20 h-20"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCP7rUVfnNEepaaEvS4cSZPO7wcdSTBDn31jmpfO9z_EHcAQ6dL5HYv0QVYM1q-zq5-w0sNF7s08bHaedcGgMGpEiX-45kh3Q1VUlCgClqpkmhTZVUHVK9ajtE3DeQzFWZkerEBN4nWepScjQ4rC9XTzNvRpGrgNoc9uuxVO_BO4xXaO-1YYMA9TM-6jZWKN3YEes6Q9yHAHzUMIgmAcrBOLUHLOAh4TWjd0gDMcIQ_parmFZs_jS5CexbNZReDXstwqps4ECY2V30')",
                    }}
                  ></div>
                  <div>
                    <p className="text-text-light dark:text-text-dark text-lg font-medium leading-relaxed">
                      "The community and support at Oweleen are just as
                      valuable as the financial insights. It feels like we're
                      all building the future together."
                    </p>
                    <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal mt-4">
                      Emily Rodriguez, Community Member
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Video Testimonials Section */}
          <div className="flex justify-center">
            <div className="layout-content-container flex flex-col max-w-5xl flex-1">
              <h2 className="text-text-light dark:text-text-dark text-3xl font-bold leading-tight tracking-tight text-center pb-8">
                See the Impact in Action
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div
                  className="bg-cover bg-center flex flex-col rounded-xl justify-center items-center aspect-video group"
                  style={{
                    backgroundImage:
                      "linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 40%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDdcTE_dcj8glg8zVn4mDwL2H6eEj0QwjnDpmpZWzAOywCaWTEJemplmEan2c68nGh9tO-zFluBdvgkpE2lY9qSc8lM-EBzftIz7z9o_0HL963a2f-cbK36kAmVgy-TzS8AaLpZBf5jfr9p6krqhj9VXWjroFkAwtVfDj8X6MqsijWL9HcwL078Dy7I378GF8_GEC679OXbtz_uCh7MHSfN_kxI6AKN39ILONmgHU6DFZyp6LFyrA1leaPZUroCdJADWwOMSP5PjKg')",
                  }}
                >
                  <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                    <span
                      className="material-symbols-outlined text-white text-4xl"
                      data-icon="play_arrow"
                    >
                      play_arrow
                    </span>
                  </div>
                </div>
                <div
                  className="bg-cover bg-center flex flex-col rounded-xl justify-center items-center aspect-video group"
                  style={{
                    backgroundImage:
                      "linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 40%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuC3qiSabQ_cbNR6oz-NkpuzIhzDjJpI-CWcUedUw4sREwP-VhzUDIgn0avTz1U6JCwis7Cy3bbBtVNhvemI54roDambZ0VT6EkR8WF2DD3icaCxRhdK1y7Lich0xluDIhHQTd0t3iLpja_ITQ3kGAqYxVUO9jSz2JmLeaZ1OGPuxm2B6RYT8av8fc17cNqkgJuKBuzgi0SxRdC1jTO8cc9hXl70Al4NUqkzDk5Zs_UK20rlliY0ctRCIWPrXCnAZE2t1zywWuwJduc')",
                  }}
                >
                  <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                    <span
                      className="material-symbols-outlined text-white text-4xl"
                      data-icon="play_arrow"
                    >
                      play_arrow
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Success Story Cards */}
          <div className="flex justify-center">
            <div className="layout-content-container flex flex-col max-w-5xl flex-1">
              <h2 className="text-text-light dark:text-text-dark text-3xl font-bold leading-tight tracking-tight text-center pb-8">
                In-depth Success Stories
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex flex-col bg-card-light dark:bg-card-dark p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-text-light dark:text-text-dark">
                    An Investor's Journey
                  </h3>
                  <p className="text-subtext-light dark:text-subtext-dark mt-2 flex-grow">
                    Follow the story of how an early investor leveraged
                    Oweleen's analytics to achieve a 25% portfolio growth in
                    their first six months.
                  </p>
                  <a
                    className="text-primary font-semibold mt-4 inline-flex items-center gap-2 group"
                    href="#"
                  >
                    Read Full Story{" "}
                    <span
                      className="material-symbols-outlined transition-transform group-hover:translate-x-1"
                      data-icon="arrow_forward"
                    >
                      arrow_forward
                    </span>
                  </a>
                </div>
                <div className="flex flex-col bg-card-light dark:bg-card-dark p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-text-light dark:text-text-dark">
                    From Beta to Pro
                  </h3>
                  <p className="text-subtext-light dark:text-subtext-dark mt-2 flex-grow">
                    A pilot program participant shares their experience, from
                    initial feedback to becoming a power user of the platform.
                  </p>
                  <a
                    className="text-primary font-semibold mt-4 inline-flex items-center gap-2 group"
                    href="#"
                  >
                    Read Full Story{" "}
                    <span
                      className="material-symbols-outlined transition-transform group-hover:translate-x-1"
                      data-icon="arrow_forward"
                    >
                      arrow_forward
                    </span>
                  </a>
                </div>
                <div className="flex flex-col bg-card-light dark:bg-card-dark p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-text-light dark:text-text-dark">
                    Community-Driven Innovation
                  </h3>
                  <p className="text-subtext-light dark:text-subtext-dark mt-2 flex-grow">
                    Discover how feedback from our community members directly
                    led to the development of our most popular new features.
                  </p>
                  <a
                    className="text-primary font-semibold mt-4 inline-flex items-center gap-2 group"
                    href="#"
                  >
                    Read Full Story{" "}
                    <span
                      className="material-symbols-outlined transition-transform group-hover:translate-x-1"
                      data-icon="arrow_forward"
                    >
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Call to Action Section */}
          <div className="flex justify-center">
            <div className="layout-content-container flex flex-col max-w-4xl flex-1 text-center items-center">
              <h2 className="text-text-light dark:text-text-dark text-3xl font-bold leading-tight tracking-tight">
                Ready to Start Your Own Success Story?
              </h2>
              <p className="mt-4 max-w-2xl text-subtext-light dark:text-subtext-dark text-lg font-normal leading-relaxed">
                Join a growing community of forward-thinking investors and help
                shape the future of finance.
              </p>
              <div className="mt-8 flex gap-4">
                <button className="bg-primary text-white font-semibold py-3 px-6 rounded-lg shadow-sm hover:opacity-90 transition-opacity">
                  Join Our Growing Community
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section id="faq" className="bg-background-light dark:bg-background-dark py-20 sm:py-32">
        <div className="layout-content-container flex flex-col w-full max-w-4xl flex-1 gap-8 md:gap-12 mx-auto">
          {/* PageHeading */}
          <div className="flex flex-col gap-3 text-center">
            <h1 className="text-gray-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg font-normal leading-normal max-w-2xl mx-auto">
              Have a question? We're here to help. Find answers to common
              queries about our services, technology, and your account below.
            </p>
          </div>
          {/* SearchBar */}
          <div className="px-4 py-3">
            <label className="flex flex-col min-w-40 h-14 w-full">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm">
                <div className="text-gray-500 dark:text-gray-400 flex bg-white dark:bg-background-dark items-center justify-center pl-4 rounded-l-xl border-y border-l border-gray-200 dark:border-gray-800">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white dark:bg-background-dark h-full placeholder:text-gray-500 dark:placeholder:text-gray-500 px-4 text-base font-normal leading-normal border-y border-r border-gray-200 dark:border-gray-800"
                  placeholder="Search for answers..."
                />
              </div>
            </label>
          </div>
          {/* Chips */}
          <div className="flex justify-center gap-3 p-3 overflow-x-auto">
            <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/20 dark:bg-primary/30 px-5 text-primary dark:text-white">
              <p className="text-sm font-medium leading-normal">General</p>
            </button>
            <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 px-5">
              <p className="text-gray-800 dark:text-gray-300 text-sm font-medium leading-normal">
                Investment
              </p>
            </button>
            <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 px-5">
              <p className="text-gray-800 dark:text-gray-300 text-sm font-medium leading-normal">
                Technology
              </p>
            </button>
            <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 px-5">
              <p className="text-gray-800 dark:text-gray-300 text-sm font-medium leading-normal">
                Account & Security
              </p>
            </button>
          </div>
          {/* Accordions */}
          <div className="flex flex-col p-4">
            <details className="flex flex-col border-b border-b-gray-200 dark:border-b-gray-800 py-3 group">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 list-none">
                <p className="text-gray-900 dark:text-white text-base font-medium leading-normal">
                  What is Oweleen?
                </p>
                <div className="text-gray-700 dark:text-gray-400 group-open:rotate-180 transition-transform duration-300">
                  <span className="material-symbols-outlined">
                    expand_more
                  </span>
                </div>
              </summary>
              <div className="overflow-hidden transition-all duration-300 ease-in-out max-h-0 group-open:max-h-screen">
                <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-relaxed pt-2 pb-2">
                  Oweleen is a cutting-edge platform designed to simplify and
                  democratize investment opportunities. We leverage technology
                  to provide accessible, transparent, and efficient financial
                  services to a broad range of users.
                </p>
              </div>
            </details>
            <details
              className="flex flex-col border-b border-b-gray-200 dark:border-b-gray-800 py-3 group"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 list-none">
                <p className="text-gray-900 dark:text-white text-base font-medium leading-normal">
                  How do I create an account?
                </p>
                <div className="text-gray-700 dark:text-gray-400 group-open:rotate-180 transition-transform duration-300">
                  <span className="material-symbols-outlined">
                    expand_more
                  </span>
                </div>
              </summary>
              <div className="overflow-hidden transition-all duration-300 ease-in-out max-h-screen group-open:max-h-screen">
                <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-relaxed pt-2 pb-2">
                  To create an account, click the 'Sign Up' button in the
                  top-right corner of the page. You will be prompted to enter
                  your email address and create a password. Follow the on-screen
                  instructions to complete your profile setup.
                </p>
              </div>
            </details>
            <details className="flex flex-col border-b border-b-gray-200 dark:border-b-gray-800 py-3 group">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 list-none">
                <p className="text-gray-900 dark:text-white text-base font-medium leading-normal">
                  What investment options are available?
                </p>
                <div className="text-gray-700 dark:text-gray-400 group-open:rotate-180 transition-transform duration-300">
                  <span className="material-symbols-outlined">
                    expand_more
                  </span>
                </div>
              </summary>
              <div className="overflow-hidden transition-all duration-300 ease-in-out max-h-0 group-open:max-h-screen">
                <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-relaxed pt-2 pb-2">
                  We offer a diverse range of investment options, including
                  stocks, bonds, ETFs, and alternative investments. Our
                  platform provides detailed information on each option to help
                  you make informed decisions that align with your financial
                  goals.
                </p>
              </div>
            </details>
            <details className="flex flex-col border-b border-b-gray-200 dark:border-b-gray-800 py-3 group">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 list-none">
                <p className="text-gray-900 dark:text-white text-base font-medium leading-normal">
                  Is my data secure?
                </p>
                <div className="text-gray-700 dark:text-gray-400 group-open:rotate-180 transition-transform duration-300">
                  <span className="material-symbols-outlined">
                    expand_more
                  </span>
                </div>
              </summary>
              <div className="overflow-hidden transition-all duration-300 ease-in-out max-h-0 group-open:max-h-screen">
                <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-relaxed pt-2 pb-2">
                  Absolutely. We prioritize the security of your data with
                  industry-standard encryption, multi-factor authentication,
                  and regular security audits. Your personal and financial
                  information is protected at all times.
                </p>
              </div>
            </details>
            <details className="flex flex-col border-b-0 border-b-gray-200 dark:border-b-gray-800 py-3 group">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 list-none">
                <p className="text-gray-900 dark:text-white text-base font-medium leading-normal">
                  How can I contact support?
                </p>
                <div className="text-gray-700 dark:text-gray-400 group-open:rotate-180 transition-transform duration-300">
                  <span className="material-symbols-outlined">
                    expand_more
                  </span>
                </div>
              </summary>
              <div className="overflow-hidden transition-all duration-300 ease-in-out max-h-0 group-open:max-h-screen">
                <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-relaxed pt-2 pb-2">
                  Our support team is available 24/7. You can reach us
                  through the "Contact Us" page, via email at
                  support@oweleen.com, or by using the live chat feature on our
                  website.
                </p>
              </div>
            </details>
          </div>
          {/* CTA Section */}
          <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-gray-100 dark:bg-gray-900/50 p-8 mt-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Still have questions?
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Can't find the answer you're looking for? Our team is here to
              help.
            </p>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 mt-2">
              <span className="truncate">Contact Us</span>
            </button>
          </div>
        </div>
      </section>
      {/* Contact Us Section */}
      <section id="contact" className="bg-background-light dark:bg-background-dark py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Page Heading Component */}
          <div className="text-center mb-12">
            <h1 className="text-gray-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
              Get In Touch. Let's Build the Future Together.
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg font-normal leading-normal mt-4 max-w-3xl mx-auto">
              We're excited to hear from you. Whether you have a question about
              our services, a project proposal, or just want to say hello,
              please feel free to reach out using the form below.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3 bg-white dark:bg-background-dark/50 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
              <ContactForm />
            </div>
            {/* Contact Details & Socials */}
            <div className="lg:col-span-2 space-y-12">
              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Other Ways to Connect
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 size-12 bg-primary/10 dark:bg-primary/20 text-primary rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 dark:text-gray-200">
                        Email
                      </p>
                      <a
                        className="text-gray-600 dark:text-gray-400 hover:text-primary"
                        href="mailto:contact@oweleen.com"
                      >
                        contact@oweleen.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 size-12 bg-primary/10 dark:bg-primary/20 text-primary rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined">call</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 dark:text-gray-200">
                        Phone
                      </p>
                      <a
                        className="text-gray-600 dark:text-gray-400 hover:text-primary"
                        href="tel:+1234567890"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 size-12 bg-primary/10 dark:bg-primary/20 text-primary rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined">
                        location_on
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 dark:text-gray-200">
                        Address
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        123 Future Drive, Tech City, 45678
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Social Media */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Follow Our Journey
                </h3>
                <div className="flex items-center gap-4">
                  <a
                    className="flex size-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary/10 hover:dark:bg-primary/20 hover:text-primary transition-colors"
                    href="#"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 21.999v-5.694c0-2.793-1.122-3.957-3.376-3.957-1.576 0-2.348.83-2.736 1.636h-.039v-1.38H12v8.395h3.999v-4.9c0-1.29.248-2.54 1.83-2.54 1.554 0 1.577 1.47 1.577 2.62v4.82h3.999zM7.004 9.382H3.001V22h4.003V9.382zm2.002-5.38a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                    </svg>
                  </a>
                  <a
                    className="flex size-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary/10 hover:dark:bg-primary/20 hover:text-primary transition-colors"
                    href="#"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.55v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.5 20.33 8.79c0-.19 0-.38-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                    </svg>
                  </a>
                  <a
                    className="flex size-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary/10 hover:dark:bg-primary/20 hover:text-primary transition-colors"
                    href="#"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.085-.62-.054-1.348.09-1.972.193-.865.92-3.882.92-3.882s-.23-.46-.23-1.14c0-1.07.62-1.87 1.4-1.87.66 0 1-.49.9-1.07-.02-.27-.17-.67-.25-.92-.1-.28-.08-.37.15-.55.27-.2.65-.8.98-1.03.38-.27.48-.52.34-1-.13-.44-.45-1.33-.61-1.84-.19-.58.09-.7.42-.48.95.66 1.46 2.19 1.46 3.41 0 1.94-1.21 3.42-2.88 3.42-1.13 0-1.95-.87-1.7-1.93.16-.67.48-1.37.68-1.85.23-.52.31-.7.21-1.13-.15-.62-.64-1.46-1.57-1.46-1.41 0-2.55 1.47-2.55 3.3 0 1.22.42 2.22 1 2.87-.12.48-.42 1.63-.53 2.06-.15.58-.58 1.12-1.02 1.52.26 3.32 2.69 5.8 5.75 5.8 3.51 0 6.33-2.6 6.33-6.52 0-3.1-2.12-5.41-5.11-5.41-1.97 0-3.37 1.41-3.37 3.06 0 .7.25 1.22.56 1.62.1.12.11.21.08.34-.08.38-.27.94-.31 1.12-.05.21-.11.28-.26.17-.67-.47-1.1-1.45-1.1-2.42 0-2 1.47-4.14 4.43-4.14 2.5 0 4.26 1.83 4.26 4.41 0 2.94-1.62 5.1-3.9 5.1-1.16 0-1.8-.93-1.54-2.04.3-.96.88-2.1.88-2.84 0-.87-.46-1.59-1.42-1.59-.97 0-1.68.99-1.68 2.24 0 .84.3 1.44.3 1.44s-1.28 5.4-1.5 6.34c-.26 1.09-1.44 2.4-1.44 2.4 0 0 .54 2.14.71 2.7.27.87.63.98.63.98a7.53 7.53 0 005.81-2.02c1.9-2.11 1.15-5.51.92-6.53z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
