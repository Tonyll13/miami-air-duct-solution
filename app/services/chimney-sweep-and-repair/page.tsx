
import React from "react";
import type { Metadata } from "next";
import CTA from "@/app/components/CTA";
import ServiceHeroWithForm from "@/app/components/ServiceHeroSlider";
import GoogleReviews from "@/app/components/GoogleReviews";
import ThumbtackCarousel from "@/app/components/ThumbtackCarusel";
import ShowMoreGridList from "@/app/components/ShowMoreGridList";
import ChimneyServicesSection from "@/app/components/ChimneyServicesSection";
import { webpageSchema, serviceSchema, breadcrumbSchema } from "@/app/lib/schema";
import JsonLd from "@/app/components/JsonLd";
export const metadata: Metadata = {
  title: "Chimney Sweep And Repair",
  description:
    "Chimney sweep and repair services. Improve safety and performance with professional cleaning and minor repairs.",
  alternates: { canonical: "/services/chimney-sweep-and-repair" },
};


const videos = [
  // ✅ תחליף לוידאוים שלך (YouTube/Vimeo embeds)
  { title: "", src: "https://www.youtube.com/embed/pV23UCd8BzE?si=VXv81-ekL8jeWZwi" },
  { title: "", src: "https://www.youtube.com/embed/HsxMN4NHJak?si=7e1xaSRO7xvj9lm6" },
];

const gallery = [
  // ✅ תחליף לתמונות שלך
  { title: "Chimney cleaning before", src: "/services/chimney-sweep-before.jpeg", alt: "Chimney cleaning before" },
  { title: "Chimney cleaning after", src: "/services/chimney-sweep-after.jpeg", alt: "Chimney cleaning after" },
];

const zipcodes = [
  // Miami-Dade County
  "33101","33122","33125","33126","33127","33128","33129","33130","33131","33132",
  "33133","33134","33135","33136","33137","33138","33139","33140","33141","33142",
  "33143","33144","33145","33146","33147","33149","33150","33154","33155","33156",
  "33157","33160","33161","33162","33165","33166","33167","33168","33169","33172",
  "33173","33174","33175","33176","33177","33178","33179","33180","33181","33182",
  "33183","33184","33185","33186","33187","33189","33190","33193","33194","33196",

  "33010","33012","33013","33014","33015","33016","33018",
  "33030","33031","33032","33033","33034",
  "33054","33055","33056",

  // Broward County
  "33004","33009","33019","33020","33021","33023","33024","33025","33026","33027",
  "33028","33029",
  "33060","33062","33063","33064","33068","33069","33071","33073","33076",

  "33301","33304","33305","33306","33308","33309","33311","33312","33313","33314",
  "33315","33316","33317","33319","33321","33322","33323","33324","33325","33326",
  "33327","33328","33330","33331","33334",

  // Palm Beach County
  "33401","33403","33404","33405","33406","33407","33408","33409","33410","33411",
  "33412","33413","33415","33417","33418","33426","33427","33428","33431","33432",
  "33433","33434","33435","33436","33437","33441","33442","33444","33445","33446",
  "33480","33483","33484","33486","33487","33496"
];


const cities = [
  // ✅ תעדכן לרשימה שלך
  "Boca Raton",
  "Boynton Beach",
  "Delray Beach",
  "Greenacres",
  "Haverhill",
  "Highland Beach",
  "North Palm Beach",
  "Palm Beach",
  "Palm Beach Garden",
  "Palm Beach Shores",
  "Palm Springs",
  "Riviera Beach",
  "Royal Palm Beach",
  "South Palm Beach",
  "West Palm Beach",
  "Aventura",
  "Bal Harbour",
  "Bay Harbor Islands",
  "Coral Gables",
  "Cutler Bay",
  "Doral",
  "Florida City",
  "Golden Beach",
  "Hialeah",
  "Hialeah Gardens",
  "Homestead",
  "Miami",
  "Miami Beach",
  "Miami Gardens",
  "Miami Lakes",
  "Miami Shores",
  "Miami Springs",
  "North Miami",
  "North Miami Beach",
  "Opa-Locka",
  "South Miami",
  "Sunny Isles Beach",
  "Surfside",
  "Sweetwater",
  "Coconut Creek",
  "Cooper City",
  "Coral Springs",
  "Dania Beach",
  "Davie",
  "Deerfield Beach",
  "Fort Lauderdale",
  "Hallandale Beach",
  "Hollywood",
  "Lauderdale",
  "Lauderdale Lakes",
  "Lauderhill",
  "Margate",
  "Miramar",
  "North Lauderdale",
  "Oakland Park",
  "Parkland",
  "Pembroke Park",
  "Pembroke Pines",
  "Plantation",
  "Pompano Beach",
  "Southwest Ranches",
  "Sunrise",
  "Tamarac",
  "West Park",
  "Weston"
];


export default function Page() {
  return (
    <>
    <JsonLd
  data={webpageSchema({
    urlPath: "/services/chimney-sweep-and-repair",
    name: "Chimney Sweep & Repair",
    description: "Chimney sweep and repair services for safer operation, better venting, and reduced buildup.",
  })}
/>

<JsonLd
  data={serviceSchema({
    urlPath: "/services/chimney-sweep-and-repair",
    name: "Chimney Sweep & Repair",
    serviceType: "Chimney Cleaning",
    description: "Chimney sweep and repair services for safer operation, better venting, and reduced buildup.",
    areaServed: ["Miami-Dade County, FL", "Broward County, FL", "Palm Beach County, FL"],
  })}
/>

<JsonLd
  data={breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Chimney Sweep & Repair", path: "/services/chimney-sweep-and-repair" },
  ])}
/>

    <ServiceHeroWithForm
                title="Chimney Sweep And Repair"
                description="Chimney sweep and repair services. Improve safety and performance with professional cleaning and minor repairs."
                slides={[
                  { src: "/services/air-duct-cleaning.jpg", alt: "Air duct cleaning in Miami" },
                  { src: "/services/dryer-vent-cleaning.jpeg", alt: "Duct inspection" },
                  { src: "/services/chimney.jpeg", alt: "Professional equipment" },
                  { src: "/services/attic-insulation.jpeg", alt: "Professional equipment" },
                  { src: "/services/commercial-duct.jpeg", alt: "Professional equipment" },
                ]}
                badges={["Satisfaction Guaranteed", "Fast scheduling", "Bonded & Insured"]}
              />
              <ChimneyServicesSection />

     {/* 1) Short explanation (quick intro) */}
<section className="svcSection">
  <div className="container">
    <div className="svcGrid2">

      {/* LEFT CONTENT */}
      <div>
        <h2 className="svcH2">Miami Chimney &amp; Fireplace Experts</h2>

        <p className="svcP">
          In Miami and South Florida, chimneys are exposed year-round to high humidity,
          rain, salt air, and temperature changes. Even if your fireplace is not used
          often, moisture and weather conditions can slowly damage the chimney structure,
          flue liner, and masonry. When the fireplace is in use, wood combustion and heat
          place additional stress on the internal system.
        </p>

        <h3 className="svcH3">
          Why Annual Chimney Cleaning and Inspection Is Important in Miami
        </h3>

        <p className="svcP">
          An annual chimney sweep and inspection in Miami helps identify early signs of
          damage before they turn into expensive repairs. Small cracks, liner issues, and
          creosote buildup are much easier and more affordable to fix when detected early.
          Without regular maintenance, these issues can worsen and lead to serious safety
          and structural problems.
        </p>

        <h3 className="svcH3">Benefits of Annual Chimney Service in Miami</h3>

        <ul className="svcList">
          <li>
            <strong>Reduce fire hazards:</strong> Professional chimney cleaning removes creosote
            buildup from the flue liner before it hardens and becomes highly flammable. Regular
            inspections also help identify small cracks or defects that could increase the risk
            of chimney fires—especially during the cooler months.
          </li>
          <li>
            <strong>Reduce health risks:</strong> A properly cleaned and inspected chimney helps
            prevent carbon monoxide buildup and improves ventilation inside your home. This is
            especially important for Miami homes, where poor airflow combined with humidity can
            increase indoor air quality concerns.
          </li>
          <li>
            <strong>Protect your home’s structure:</strong> Your chimney is a structural element
            located on the roof. Damage caused by moisture, cracked masonry, or a failing flue
            liner can affect not only the chimney but also the surrounding roof structure. Routine
            chimney inspections in Miami help protect your property from long-term water damage and
            costly repairs.
          </li>
        </ul>

        <p className="svcP">
          A chimney is an active fire system inside your home. In a climate like Miami, regular
          professional chimney maintenance is one of the best ways to protect your home, your
          health, and your investment.
        </p>

        <p className="svcP">
          <strong>📍 Serving Miami and the surrounding South Florida area.</strong>
        </p>

        <div className="svcKpis">
          <div className="svcKpi">
            <div className="svcKpiNum"></div>
            <div className="svcKpiText"></div>
          </div>
          <div className="svcKpi">
            <div className="svcKpiNum"></div>
            <div className="svcKpiText"></div>
          </div>
          <div className="svcKpi">
            <div className="svcKpiNum"></div>
            <div className="svcKpiText"></div>
          </div>
        </div>
      </div>

      {/* RIGHT CARD */}
      <div className="svcCard">
        {/* Optional: you can place a CTA, phone, badges, or service highlights here */}
      </div>

    </div>
  </div>
</section>


      {/* 2) Videos */}
<section className="svcSection">
  <div className="container">
    <div className="svcHeadRow">
      <h2 className="svcH2">This videos will help you learn more.</h2>
      <p className="svcP svcPmuted"></p>
    </div>

    <div className="svcVideoGrid">
      {videos.map((v, i) => (
        <div key={`${v.src}-${i}`} className="svcVideoCard">
          <div className="svcVideoFrame">
            <iframe
              src={v.src}
              title={v.title || `video-${i + 1}`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {v.title ? <div className="svcVideoTitle">{v.title}</div> : null}
        </div>
      ))}
    </div>
  </div>
</section>


     {/* 3) More explanation (details / bullets) */}
<section className="svcSection">
  <div className="container">
    <div className="svcGrid2">

      {/* LEFT CARD */}
      <div className="svcCard">
        <h3 className="svcH3">Which Type of Chimney Do You Have?</h3>

        <p className="svcP">
          There are two main types of chimney systems every homeowner should be familiar with.
          Using the wrong fuel for your chimney type can lead to serious damage and safety risks.
        </p>

        <h4 className="svcH4">Masonry Chimneys (Brick &amp; Mortar)</h4>

        <p className="svcP">
          Masonry chimneys are built from brick and mortar and are typically lined with a clay
          or stainless steel flue liner. These chimneys are designed to handle high temperatures
          and are suitable for burning natural firewood when properly maintained.
        </p>

        <p className="svcP">
          With the correct liner and regular inspections, masonry chimneys provide safe and
          reliable performance for wood-burning fireplaces.
        </p>

        <h4 className="svcH4">Factory-Built / Metal Chimneys</h4>

        <p className="svcP">
          Factory-built or metal chimneys are often constructed from metal or refractory cement
          and may use aluminum or specialized liners. These systems are not designed for
          wood-burning fires and are intended for gas appliances, flame systems, or approved
          artificial logs only.
        </p>

        <p className="svcMini">
          Burning wood in a chimney that is not designed for it can cause severe damage to the
          flue liner, chimney structure, and surrounding areas, creating serious fire and safety
          hazards. If you’re unsure which type of chimney you have, a professional inspection can
          help ensure safe operation.
        </p>
      </div>

      {/* RIGHT CARD */}
      <div className="svcCard">
        <h3 className="svcH3">Our Professional Chimney Cleaning &amp; Inspection Process</h3>

        <p className="svcP">
          Anyone can claim to clean a chimney, but delivering high-quality, clean, and damage-free
          service requires experience and attention to detail. Our goal is not only to clean your
          chimney, but also to leave your home exactly as clean as we found it.
        </p>

        <ul className="svcList">
          <li>Protecting the hearth area with heavy-duty blankets</li>
          <li>
            Sealing the fireplace opening with a secure nylon containment system to prevent dust
            or debris from escaping
          </li>
          <li>
            Brushing and cleaning the chimney flue from the roof or from inside the home,
            depending on accessibility and chimney design
          </li>
          <li>
            Careful debris removal to maintain a clean and safe indoor environment
          </li>
        </ul>

        <p className="svcP">
          Our annual chimney inspection package is designed to identify potential hazards before
          they become costly or dangerous problems.
        </p>

        <ul className="svcList">
          <li>Basic fireplace cleaning</li>
          <li>
            Type 1 chimney inspection covering all accessible components of the chimney system
          </li>
          <li>Smoke shelf and smoke chamber inspection with basic cleaning</li>
          <li>Damper inspection, basic cleaning, and operational testing</li>
        </ul>

        <p className="svcMini">
          Annual chimney inspections help ensure proper airflow, safe operation, and long-term
          protection of your chimney and fireplace system.
        </p>
      </div>

    </div>
  </div>
</section>




   {/* 4) Photos */}
<section className="svcSection">
  <div className="container">
    <div className="svcHeadRow">
      <h2 className="svcH2">Pictures from recent jobs for example.</h2>
      <p className="svcP svcPmuted"></p>
    </div>

    <div className="jobGallery">
      {gallery.map((g) => (
        <figure key={g.src} className="jobImage">
          <img src={g.src} alt={g.alt} loading="lazy" />
        </figure>
      ))}
    </div>
  </div>
</section>


      {/* 5) Local tip search */}
      <section className="svcSection">
        <div className="container">
          <div className="svcTip">
            <h2 className="svcH2">Local search tip</h2>
            <p className="svcP">
              If you’re comparing options, try searching:
              <span className="svcChip">“air duct cleaning near me”</span>
              <span className="svcChip">“duct cleaning Miami”</span>
              <span className="svcChip">“dryer vent cleaning Miami”</span>
              and check photos + recent reviews, not just the price.
            </p>
          </div>
        </div>
      </section>

      {/* 6) Reviews */}
      <section className="svcSection">
        <div className="container">
          <h2 className="svcH2">From our clients</h2>
          <div className="svcReviewsWrap">
            <GoogleReviews />
            <ThumbtackCarousel />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        heading="Need Chimney Sweep in Miami or the metro?"
        text="Call (786) 275-7826 for availability or request a quote online."
      />
       {/* 7) Zipcodes */}
      <section className="svcSection">
        <div className="container">
          <h2 className="svcH2">Zipcodes we serve</h2>
         <ShowMoreGridList items={zipcodes} initialRows={5} />


        </div>
      </section>

      {/* 8) Cities */}
      <section className="svcSection">
        <div className="container">
          <h2 className="svcH2">Cities we serve</h2>
          <ShowMoreGridList items={cities} initialRows={5} />


        </div>
      </section>
    </>
  );
}
