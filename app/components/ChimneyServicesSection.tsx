

type ServiceCard = {
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
};


const services: ServiceCard[] = [
  {
    title: "Chimney Sweep",
    description:
      "Annual chimney sweeping is essential for protecting your home from fire and air quality hazards. Over time, soot and creosote build up inside the chimney flue, restricting airflow and significantly increasing the risk of chimney fires. Our professional chimney sweep service removes hazardous buildup, restores proper draft, and helps ensure your fireplace operates safely and efficiently throughout the year.",
    imageSrc: "/chimney/before-1.1.jpg",
    alt: "Chimney sweep",
  },
  {
    title: "Chimney & Fireplace Repair",
    description:
      "Heat exposure, seasonal use, and moisture can cause cracks and structural damage to your chimney and fireplace. These issues may allow water intrusion, weaken masonry, damage the flue liner, and accelerate creosote accumulation. Our chimney and fireplace repair services address damaged mortar, liners, and structural components to restore safety and prevent costly long-term damage.",
    imageSrc: "/chimney/before-2.jpg",
    alt: "Chimney repair",
  },
  {
    title: "Chimney Inspection",
    description:
      "A yearly chimney inspection helps identify hidden fire, health, and structural hazards before they become serious problems. Many chimney issues develop gradually and remain unnoticed without a professional evaluation. Our chimney inspection service provides a thorough assessment of your chimney, flue, and fireplace to ensure safe operation and compliance with current safety standards.",
    imageSrc: "/chimney/before-3.jpg",
    alt: "Chimney inspection",
  },
  {
    title: "Rain Cap Installation",
    description:
      "A chimney rain cap protects your chimney from water intrusion, debris, leaves, and animals. Without proper protection, moisture can damage the flue liner, promote mold growth, and accelerate structural deterioration. Our chimney rain cap installation and replacement service helps keep your chimney protected, code-compliant, and in proper working condition year-round.",
    imageSrc: "/chimney/before-4.jpg",
    alt: "Rain cap installation",
  },
];


export default function ChimneyServicesSection() {
  return (
    <section className="px-2 py-8 lg:relative lg:left-1/2 lg:right-1/2 lg:-ml-[50vw] lg:-mr-[50vw] lg:w-screen">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900">
            Our Chimney Services
          </h2>
        </div>
<div className="chimneyGrid">

        
          {services.map((s) => (
            <article
              key={s.title}
              className="min-w-0 rounded-lg border border-zinc-200 bg-white p-2"
            >
              <div className="relative h-[250px] w-full overflow-hidden rounded-md bg-zinc-100">
                <img
                  src={s.imageSrc}
                  alt={s.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <h3 className="mt-4 text-base font-bold text-zinc-900">{s.title}</h3>
             <p className="mt-2 text-sm leading-6 text-zinc-600 break-words">

                {s.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

