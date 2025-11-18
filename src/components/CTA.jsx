export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-tr from-sky-600 to-cyan-500 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Ready for the cleanest catch?</h2>
            <p className="mt-3 text-white/90 max-w-xl">
              Tell us what you need for home or wholesale. We’ll get back within one business day with availability and pricing.
            </p>
          </div>
          <form className="bg-white/10 rounded-2xl p-6 backdrop-blur border border-white/20">
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="w-full rounded-xl px-4 py-2.5 bg-white/90 text-slate-900 placeholder-slate-500 focus:outline-none" />
              <input type="email" placeholder="Email" className="w-full rounded-xl px-4 py-2.5 bg-white/90 text-slate-900 placeholder-slate-500 focus:outline-none" />
            </div>
            <input type="text" placeholder="What are you looking for?" className="mt-4 w-full rounded-xl px-4 py-2.5 bg-white/90 text-slate-900 placeholder-slate-500 focus:outline-none" />
            <textarea placeholder="Quantity, cuts, delivery window..." rows={4} className="mt-4 w-full rounded-xl px-4 py-2.5 bg-white/90 text-slate-900 placeholder-slate-500 focus:outline-none" />
            <button type="button" className="mt-4 inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 font-medium hover:bg-slate-800">
              Send request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
