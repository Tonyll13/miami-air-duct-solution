import Link from "next/link";
import Image from "next/image";

const items = [
  
  {
    title: "Air Duct Cleaning",
    href: "/services/air-duct-cleaning",
    image: "/services/air-duct-cleaning.jpg",
    desc: "Remove built-up dust and debris from your duct system to improve airflow and indoor comfort.",
  },
  {
    title: "Dryer Vent Cleaning",
    href: "/services/dryer-vent-cleaning",
    image: "/services/dryer-vent-cleaning.jpeg",
    desc: "Reduce fire risk and help your dryer run more efficiently with a clear vent line.",
  },
  {
    title: "Chimney Sweep And Repair",
    href: "/services/chimney-sweep-and-repair",
    image: "/services/chimney.jpeg",
    desc: "Improve safety and performance with professional chimney cleaning and repairs.",
  },
  {
    title: "Attic Insulation Services",
    href: "/services/attic-insulation-services",
    image: "/services/attic-insulation.jpeg",
    desc: "Boost energy efficiency and comfort with properly installed attic insulation solutions.",
  },
  {
    title: "Commercial Duct Cleaning",
    href: "/services/commercial-duct-cleaning",
    image: "/services/commercial-duct.jpeg",
    desc: "Keep your business ventilation system clean, compliant, and working efficiently.",
  },
];


export default function ServiceGrid() {
  return (
    <section className="section">
      <div className="container">
        <div className="sectionTitle">
          <div>
            <h2>Our Core Services</h2>
            <p>We're a full-service duct cleaning company serving residential and commercial clients in Miami and the surrounding area.</p>
          </div>
        </div>

        <div className="serviceGrid">

          {items.map((x) => (
            <Link key={x.href} href={x.href} className="card serviceCard">
              <div className="serviceImage">
                <Image
                  src={x.image}
                  alt={x.title}
                  fill
                  sizes="(max-width: 200px) 100vw, 33vw"
                />
              </div>

              <h3>{x.title}</h3>
              <p>{x.desc}</p>
              <div className="mini">Learn more →</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}