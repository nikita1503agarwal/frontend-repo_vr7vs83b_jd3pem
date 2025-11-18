import { Fish, ShieldCheck, Truck } from "lucide-react";

const features = [
  {
    icon: Fish,
    title: "Morning‑caught freshness",
    desc: "Sourced at dawn, packed by noon, at your door by tomorrow.",
  },
  {
    icon: ShieldCheck,
    title: "Sustainability first",
    desc: "Certified partners and full traceability for every order.",
  },
  {
    icon: Truck,
    title: "Cold‑chain delivery",
    desc: "Vacuum sealed, ice‑packed, and temperature monitored end‑to‑end.",
  },
];

export default function Features() {
  return (
    <section id="quality" className="py-20 bg-gradient-to-b from-white to-sky-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center">Why choose BlueFin</h2>
        <p className="mt-3 text-slate-600 text-center max-w-2xl mx-auto">
          Every fillet meets strict handling standards so your meals are clean, safe, and delicious.
        </p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                <Icon size={24} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900 text-lg">{title}</h3>
              <p className="mt-1 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
