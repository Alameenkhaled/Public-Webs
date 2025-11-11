export default function ContactPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="flex-grow">
        <div className="flex items-center p-4">
          <div className="flex size-10 shrink-0 items-center justify-center text-text-light dark:text-text-dark">
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </div>
          <h2 className="flex-1 text-center text-lg font-bold leading-tight tracking-[-0.015em] text-text-light dark:text-text-dark pr-10 font-display">
            Contact Us
          </h2>
        </div>
        <main className="px-4 py-6">
          <h1 className="font-display text-text-light dark:text-white tracking-tight text-5xl font-bold leading-tight text-left pb-2">
            Get in Touch
          </h1>
          <p className="text-text-light dark:text-text-dark text-base font-normal leading-normal pb-8">
            For inquiries, collaborations, or commissions, please reach out.
          </p>
          <div className="flex flex-col gap-4">
            <label className="flex flex-col w-full">
              <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">Name</p>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg bg-background-light dark:bg-background-dark text-text-light dark:text-white placeholder:text-text-light/50 dark:placeholder:text-text-dark/50 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark focus:border-primary h-14 p-[15px] text-base font-normal leading-normal"
                placeholder="Enter your name"
              />
            </label>
            <label className="flex flex-col w-full">
              <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">Email Address</p>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg bg-background-light dark:bg-background-dark text-text-light dark:text-white placeholder:text-text-light/50 dark:placeholder:text-text-dark/50 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark focus:border-primary h-14 p-[15px] text-base font-normal leading-normal"
                placeholder="Enter your email"
              />
            </label>
            <label className="flex flex-col w-full">
              <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">Your Message</p>
              <textarea
                className="form-textarea flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg bg-background-light dark:bg-background-dark text-text-light dark:text-white placeholder:text-text-light/50 dark:placeholder:text-text-dark/50 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark focus:border-primary h-36 p-[15px] text-base font-normal leading-normal"
                placeholder="Type your message here..."
              ></textarea>
            </label>
            <div className="pt-4">
              <button className="flex h-14 w-full items-center justify-center rounded-lg bg-primary px-4 text-base font-bold text-white">
                Send Inquiry
              </button>
            </div>
          </div>
          <div className="py-10 text-center">
            <p className="text-text-light dark:text-text-dark text-sm">
              Or email us directly at:{" "}
              <a className="font-semibold text-primary" href="mailto:studio@digitalatelier.com">
                studio@digitalatelier.com
              </a>
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-base font-semibold text-text-light dark:text-text-dark font-display">Follow Our Journey</h3>
            <div className="flex items-center gap-6">
              <a aria-label="Instagram" className="text-text-light dark:text-text-dark" href="#">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"></path>
                </svg>
              </a>
              <a aria-label="Behance" className="text-text-light dark:text-text-dark" href="#">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6,2H18A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2M14.25,10.25H18.5V8.5H14.25V10.25M13.12,15.5C14.06,15.5 14.8,15.22 15.35,14.65C15.9,14.09 16.18,13.34 16.18,12.4H18.5V12.37C18.44,13.56 18,14.56 17.15,15.39C16.3,16.22 15.24,16.63 13.97,16.63C12.5,16.63 11.31,16.21 10.4,15.37C9.5,14.53 9.05,13.42 9.05,12C9.05,10.58 9.5,9.45 10.4,8.62C11.31,7.78 12.5,7.37 13.97,7.37C15.3,7.37 16.36,7.75 17.15,8.53V6H9.37V16.75H11V15.5H13.12M13.75,13.62C13.25,13.62 12.87,13.5 12.62,13.25C12.37,13 12.25,12.63 12.25,12.12C12.25,11.62 12.37,11.25 12.62,11C12.87,10.75 13.25,10.62 13.75,10.62C14.25,10.62 14.62,10.75 14.87,11C15.12,11.25 15.25,11.62 15.25,12.12C15.25,12.63 15.12,13 14.87,13.25C14.62,13.5 14.25,13.62 13.75,13.62Z"></path>
                </svg>
              </a>
              <a aria-label="LinkedIn" className="text-text-light dark:text-text-dark" href="#">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </main>
      </div>
      <footer className="sticky bottom-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-t border-border-light dark:border-border-dark">
        <nav className="flex justify-around items-center h-20 px-4">
          <a className="flex flex-col items-center gap-1 text-text-light/60 dark:text-text-dark/60" href="/gallery">
            <span className="material-symbols-outlined">grid_view</span>
            <span className="text-xs font-medium">Work</span>
          </a>
          <a className="flex flex-col items-center gap-1 text-text-light/60 dark:text-text-dark/60" href="/artist">
            <span className="material-symbols-outlined">info</span>
            <span className="text-xs font-medium">About</span>
          </a>
          <a className="flex flex-col items-center gap-1 text-primary" href="/contact">
            <span className="material-symbols-outlined">mail</span>
            <span className="text-xs font-medium">Contact</span>
          </a>
          <a className="flex flex-col items-center gap-1 text-text-light/60 dark:text-text-dark/60" href="#">
            <span className="material-symbols-outlined">article</span>
            <span className="text-xs font-medium">Journal</span>
          </a>
        </nav>
      </footer>
    </div>
  );
}
