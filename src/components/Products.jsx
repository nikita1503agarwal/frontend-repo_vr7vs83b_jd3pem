const products = [
  {
    name: "Norwegian Salmon",
    price: "$22/lb",
    img: "https://images.unsplash.com/photo-1604908554027-912bf4ff3d19?q=80&w=1400&auto=format&fit=crop",
    badge: "Best Seller",
  },
  {
    name: "Wild Tuna",
    price: "$28/lb",
    img: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "Sea Bass Fillet",
    price: "$26/lb",
    img: "https://images.unsplash.com/photo-1611175341534-5b0eab9e035d?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "Mackerel",
    price: "$14/lb",
    img: "https://images.unsplash.com/photo-1603456487438-c6f3f8874610?q=80&w=1400&auto=format&fit=crop",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Signature Cuts</h2>
            <p className="mt-2 text-slate-600">Curated favorites, trimmed and pin‑boned by our expert team.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-full bg-slate-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-slate-800">Request wholesale</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.name} className="group rounded-2xl overflow-hidden border border-slate-200 bg-white">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900">{p.name}</h3>
                  <span className="text-sky-700 font-medium">{p.price}</span>
                </div>
                {p.badge && (
                  <span className="mt-2 inline-flex items-center px-2 py-0.5 rounded-full bg-sky-100 text-sky-700 text-xs font-medium">{p.badge}</span>
                )}
                <div className="mt-4">
                  <button className="w-full inline-flex items-center justify-center rounded-xl bg-sky-600 text-white px-4 py-2.5 font-medium hover:bg-sky-700 transition">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
