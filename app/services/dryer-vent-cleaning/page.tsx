
import React from "react";
import type { Metadata } from "next";
import CTA from "@/app/components/CTA";
import ServiceHeroWithForm from "@/app/components/ServiceHeroSlider";
import GoogleReviews from "@/app/components/GoogleReviews";
import ThumbtackCarousel from "@/app/components/ThumbtackCarusel";
import ShowMoreGridList from "@/app/components/ShowMoreGridList";

export const metadata: Metadata = {
  title: "Dryer Vent Cleaning",
  description:
    "Dryer vent cleaning in Miami to help reduce fire risk and improve dryer efficiency. Fast scheduling and clear communication.",
  alternates: { canonical: "/services/dryer-vent-cleaning" },
};

const videos = [
  // ✅ תחליף לוידאוים שלך (YouTube/Vimeo embeds)
  { title: "", src: "https://www.youtube.com/embed/gdNTcChFkBY?si=Ci1eG6CeH4meqETz" },
];

const gallery = [
  // ✅ תחליף לתמונות שלך
  { title: "Dryer vent cleaning before", src: "/services/miami_air_duct_solution_dryer_vent_cleaning_from_exhaust.jpeg", alt: "Dryer vent cleaning before" },
  { title: "Dryer vent cleaning after", src: "/services/miami_air_duct_solution_dryer_vent_cleaning_from_attic.jpeg", alt: "Dryer vent cleaning after" },
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
      {/* HERO */}
      <ServiceHeroWithForm
        title="Dryer Vent Cleaning"
        description="Dryer vent cleaning in Miami and the metro to help reduce fire risk and improve dryer efficiency. Fast scheduling and clear communication."
        slides={[
          { src: "/services/air-duct-cleaning.jpg", alt: "Air duct cleaning in Miami" },
          { src: "/services/dryer-vent-cleaning.jpeg", alt: "Dryer vent cleaning in Miami" },
          { src: "/services/chimney.jpeg", alt: "Chimney cleaning in Miami" },
          { src: "/services/attic-insulation.jpeg", alt: "Attic Insulation in Miami" },
          { src: "/services/commercial-duct.jpeg", alt: "commercial Air duct cleaning in Miami" },
        ]}
        badges={["Satisfaction Guaranteed", "Fast scheduling", "Bonded & Insured"]}
      />

    {/* 1) Short explanation (quick intro) */}
<section className="svcSection">
  <div className="container">
    <div className="svcGrid2">

      {/* LEFT CONTENT */}
      <div>
        <h2 className="svcH2">
          Professional Dryer Vent Cleaning Services in Miami, FL
        </h2>

        <p className="svcP">
          We provide professional dryer vent cleaning services for residential
          homes and commercial properties throughout Miami, Florida and the
          surrounding metro area. Proper dryer vent maintenance is essential
          for safety, efficiency, and indoor air quality.
        </p>

        <h3 className="svcH3">Why dryer vent cleaning is important</h3>

        <p className="svcP">
          Clogged dryer vents are one of the leading causes of residential
          fires in the United States. Each time you use your dryer, lint,
          dust, and pet dander are pulled into the dryer vent system. Over
          time, this buildup restricts airflow and creates serious safety
          risks.
        </p>

        <p className="svcP">
          When airflow is blocked, hot air has no proper way to exit the
          system. As a result, the dryer works harder, drying times increase,
          energy usage goes up, and excess heat builds inside the vent. Lint
          buildup can ignite within seconds, especially in gas dryers where
          fire risk is even higher.
        </p>

        <h3 className="svcH3">Key benefits of professional dryer vent cleaning</h3>

        <ul className="svcList">
          <li>Improved dryer efficiency and faster drying cycles</li>
          <li>Reduced fire risk caused by lint buildup and overheating</li>
          <li>Lower health and safety hazards, especially with gas dryers</li>
          <li>Extended lifespan of your dryer by reducing system strain</li>
          <li>Lower energy costs due to improved airflow</li>
        </ul>

        <h3 className="svcH3">How often should dryer vent cleaning be done?</h3>

        <p className="svcP">
          For most households, dryer vent cleaning should be performed at
          least once per year. If your dryer is used frequently — such as in
          large households, rental properties, or commercial settings — we
          recommend inspecting the dryer vent every <strong>6–8 months</strong>.
        </p>

        <p className="svcP">
          Routine inspections help catch lint buildup early, prevent safety
          hazards, and keep your dryer operating efficiently.
        </p>
      </div>

      {/* RIGHT CARD */}
      <div className="svcCard">
        <h3 className="svcH3">Trusted Dryer Vent Cleaning in Miami</h3>

        <p className="svcP">
          Our experienced technicians use professional-grade equipment to
          thoroughly inspect and clean your dryer vent system. We focus on
          improving airflow, reducing fire hazards, and protecting your
          property.
        </p>

        <ul className="svcList">
          <li>Residential & commercial dryer vent cleaning</li>
          <li>Professional inspection and airflow assessment</li>
          <li>Fire hazard prevention</li>
          <li>Serving Miami and the surrounding metro area</li>
        </ul>

        <p className="svcMini">
          Contact us today to schedule a dryer vent inspection or professional
          cleaning service.
        </p>
      </div>

    </div>
  </div>
</section>


      {/* 2) Videos */}
<section className="svcSection">
  <div className="container">
    <div className="svcHeadRow">
      <h2 className="svcH2">This video will help you learn more.</h2>
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
        <h3 className="svcH3">Our professional dryer vent cleaning process</h3>

        <p className="svcP">
          We provide thorough and professional dryer vent cleaning services throughout
          Miami and the surrounding metro area. Our process is designed to safely remove
          lint and debris, restore proper airflow, and reduce fire hazards.
        </p>

        <h4 className="svcH4">Levels of dryer vent clogging we identify</h4>

        <ul className="svcList">
          <li>
            <strong>Level 1 – Partial lint buildup near the dryer:</strong><br />
            The most common condition. Lint accumulates close to the dryer connection.
            In most cases, professional brush cleaning from behind the dryer (up to 10 ft)
            is sufficient to restore proper airflow.
          </li>

          <li>
            <strong>Level 2 – Obstruction inside the vent (bird nests or debris):</strong><br />
            Blockages located deeper inside the vent line, often caused by bird nests or
            external debris. Cleaning may require exterior or mid-line access to safely
            remove the obstruction.
          </li>

          <li>
            <strong>Level 3 – Severe or complete blockage (90% or more):</strong><br />
            Heavy lint accumulation causing extreme airflow restriction. This condition
            presents a serious fire hazard and requires an advanced cleaning approach
            based on vent configuration and severity.
          </li>
        </ul>

        <p className="svcMini">
          Our technicians evaluate each situation carefully and apply the correct method
          to ensure safe and complete dryer vent cleaning.
        </p>
      </div>

      {/* RIGHT CARD */}
      <div className="svcCard">
        <h3 className="svcH3">How our dryer vent cleaning works</h3>

        <p className="svcP">
          Our process begins behind the dryer to ensure proper access and cleanliness:
        </p>

        <ul className="svcList">
          <li>Carefully disconnect the flexible dryer duct</li>
          <li>Thoroughly clean the flex duct</li>
          <li>Vacuum and clean the laundry area behind the dryer if needed</li>
        </ul>

        <p className="svcP">
          Next, we insert a professional-grade brush connected to a drill directly into
          the dryer vent line. The brush is extended up to 10 feet toward the exterior
          exhaust point, ensuring lint, debris, and buildup are fully removed while
          keeping dust and mess to a minimum.
        </p>

        <h4 className="svcH4">What’s included in our dryer vent cleaning package</h4>

        <ul className="svcList">
          <li>Professional dryer vent cleaning using a powerful brush (per one vent)</li>
          <li>Full inspection of your air duct system and furnace</li>
          <li>Free inspection of attic insulation or chimney (one of each, upon request)</li>
          <li>Airflow performance test after cleaning</li>
          <li>Laundry room cleaning behind the dryer only</li>
        </ul>

        <p className="svcMini">
          Routine dryer vent maintenance helps reduce fire risks, improve dryer efficiency,
          lower energy costs, and extend the lifespan of your appliance.
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
        heading="Need Dryer Vent Cleaning in Miami or the metro?"
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
