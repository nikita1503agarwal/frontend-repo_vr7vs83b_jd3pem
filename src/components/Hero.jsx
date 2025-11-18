import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      {/* Background graphics */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-24 w-[600px] h-[600px] rounded-full bg-sky-400/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 w-[600px] h-[600px] rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.08),transparent_50%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="py-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900"
          >
            Fresh, Sustainable Seafood delivered to your door
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-lg text-slate-600 max-w-xl"
          >
            We source directly from responsible fisheries every morning so you get the cleanest, tastiest catch — never frozen, always traceable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#products" className="inline-flex items-center rounded-full bg-sky-600 text-white px-6 py-3 font-medium shadow-lg shadow-sky-600/30 hover:bg-sky-700 transition">
              Shop Signature Cuts
            </a>
            <a href="#quality" className="inline-flex items-center rounded-full border border-slate-300 text-slate-700 px-6 py-3 font-medium hover:bg-slate-50 transition">
              Our Quality Promise
            </a>
          </motion.div>

          <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
            <div>
              <span className="font-semibold text-slate-900">100% traceable</span> from boat to box
            </div>
            <div>
              <span className="font-semibold text-slate-900">Next‑day</span> delivery in most cities
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-slate-200 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1508170754725-6f7b60fe27b9?q=80&w=1600&auto=format&fit=crop"
              alt="Fresh fish on ice"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl ring-1 ring-slate-200 p-4">
            <p className="text-slate-900 font-semibold">MSC Certified</p>
            <p className="text-slate-600 text-sm">From responsible fisheries</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
