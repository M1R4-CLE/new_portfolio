'use client'

import { SocialIcon } from '../../app/back_end/portfolio_back_end'

export default function Contact({ openContactModal, socials }) {
  return (
    <section id="contact" className="mt-10 scroll-mt-32">
      <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 shadow-2xl shadow-black/10 backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr]">
        <div className="p-8 md:p-10">
          <h2 className="text-4xl font-semibold">Let us help you.</h2>
          <p className="mt-3 text-lg text-stone-300">
            Reach out for an exploratory conversation.
          </p>

          <button
            type="button"
            onClick={openContactModal}
            className="mt-8 inline-flex rounded-full bg-emerald-400 px-6 py-3 font-semibold text-black transition hover:bg-emerald-300"
          >
            Contact Us
          </button>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div>
              <strong className="text-sm uppercase tracking-[0.25em] text-emerald-400">
                Phone
              </strong>
              <p className="mt-2 leading-7">09948086975</p>
            </div>
            <div>
              <strong className="text-sm uppercase tracking-[0.25em] text-emerald-400">
                Email
              </strong>
              <p className="mt-2 leading-7">
                daryllmasapa21@gmail.com
                <br />
                daryllmasapa@gmail.com
              </p>
            </div>
            <div>
              <strong className="text-sm uppercase tracking-[0.25em] text-emerald-400">
                Social
              </strong>
              <div className="mt-3 flex flex-wrap gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    title={social.label}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/15 text-xs font-bold uppercase transition hover:border-emerald-400 hover:text-emerald-400"
                  >
                    <SocialIcon icon={social.icon} className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative min-h-[22rem] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,215,0,0.55),transparent_25%),radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.22),transparent_18%),linear-gradient(140deg,#7f4f24,#c58f53,#f5deb3)]" />
          <div className="absolute inset-[12%] rounded-[2rem] border border-white/20 bg-white/10 backdrop-blur-md" />
          <div className="absolute bottom-[-10%] left-[8%] h-40 w-40 rounded-full bg-black/20 blur-2xl" />
          <div className="absolute right-[-6%] top-[10%] h-52 w-52 rounded-full bg-white/15 blur-3xl" />
        </div>
      </div>
    </section>
  )
}
