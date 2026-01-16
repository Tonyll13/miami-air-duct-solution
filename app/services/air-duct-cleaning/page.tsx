
import React from "react";
import type { Metadata } from "next";
import CTA from "@/app/components/CTA";
import ServiceHeroWithForm from "@/app/components/ServiceHeroSlider";
import GoogleReviews from "@/app/components/GoogleReviews";
import ThumbtackCarousel from "@/app/components/ThumbtackCarusel";
import ShowMoreGridList from "@/app/components/ShowMoreGridList";
import JsonLd from "@/app/components/JsonLd";
import { serviceSchema, breadcrumbSchema, webpageSchema } from "@/app/lib/schema";
export const metadata: Metadata = {
  title: "Air Duct Cleaning",
  description:
    "Air duct cleaning in Miami to improve airflow and indoor comfort. Inspection-first recommendations and professional service.",
  alternates: { canonical: "/services/air-duct-cleaning" },
};

const videos = [
  // ✅ תחליף לוידאוים שלך (YouTube/Vimeo embeds)
  { title: "", src: "https://www.youtube.com/embed/p_ajUB-KsC0?si=ox2BtHfk3kgc22Ui" },
  { title: "", src: "https://www.youtube.com/embed/Z_G5FvmBGQ4?si=uuFnWYitK2jsI6hM" },
];

const gallery = [
  // ✅ תחליף לתמונות שלך
  { title: "Air duct cleaning before", src: "/services/air-duct-cleaning-before.jpeg", alt: "Air duct cleaning before" },
  { title: "Air duct cleaning after", src: "/services/air-duct-cleaning-after.jpeg", alt: "Air duct cleaning after" },
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
    urlPath: "/services/air-duct-cleaning",
    name: "Air Duct Cleaning",
    description: "Air duct cleaning in Miami to improve airflow and indoor comfort.",
  })}
/>

<JsonLd
  data={serviceSchema({
    urlPath: "/services/air-duct-cleaning",
    name: "Air Duct Cleaning",
    description: "Air duct cleaning in Miami to improve airflow and indoor comfort.",
    areaServed: ["Miami-Dade County, FL", "Broward County, FL", "Palm Beach County, FL"],
  })}
/>

<JsonLd
  data={breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Air Duct Cleaning", path: "/services/air-duct-cleaning" },
  ])}
/>

      {/* HERO */}
      <ServiceHeroWithForm
        title="Air Duct Cleaning"
        description="Built-up dust and debris can restrict airflow and reduce comfort. We focus on practical, inspection-first service and clear next steps."
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
          Professional Air Duct Cleaning in Miami & Surrounding Areas
        </h2>

        <p className="svcP">
          We proudly serve residential and commercial properties throughout
          Miami, Florida and the surrounding metro area, providing professional
          air duct cleaning services focused on indoor air quality, system
          efficiency, and long-term protection.
        </p>

        <h3 className="svcH3">
          Why should you schedule professional air duct cleaning?
        </h3>

        <p className="svcP">
          Air duct cleaning plays an important role in maintaining healthy
          indoor air quality. Over time, dust, debris, allergens, and
          contaminants can accumulate inside your duct system. Dirty air ducts
          may contribute to indoor air pollution and can aggravate allergies,
          asthma, and other respiratory sensitivities.
        </p>

        <p className="svcP">
          Scheduling professional air duct cleaning every <strong>12 months</strong>. 
          helps reduce these risks and supports a cleaner, healthier indoor
          environment for your home or business.
        </p>

        <p className="svcP">
          Another key reason to keep your air ducts clean is HVAC system
          performance and efficiency. When ductwork is neglected for long
          periods, buildup can restrict airflow and place extra strain on your
          system. In some cases, dirt and debris may contribute to evaporator
          coil blockage, forcing your air conditioner or furnace to work harder,
          reducing efficiency, and increasing utility costs.
        </p>

        <h3 className="svcH3">How can you prevent these issues?</h3>

        <ul className="svcList">
          <li>Replace HVAC air filters every <strong>1–2 months</strong></li>
          <li>Schedule professional system inspections and air duct cleaning every <strong>12 months</strong></li>
          <li>Address airflow issues early with the help of experienced technicians</li>
        </ul>

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
        <h3 className="svcH3">Never had your air ducts professionally cleaned?</h3>

        <p className="svcP">
          If you’ve never scheduled air duct cleaning before, now is the right time to start.
          Don’t wait for problems to appear — schedule a professional inspection today.
        </p>

        <p className="svcP">
          Your HVAC system and air ducts should be inspected by experienced professionals at least once every
          <strong> 12 months</strong>. If your system hasn’t been serviced in over a year,
          watch for the following warning signs:
        </p>

        <ul className="svcList">
          <li>Ongoing allergies or respiratory irritation (dust, mold, or mildew buildup)</li>
          <li>Musty or stale odors inside your home or office</li>
          <li>New or worsening asthma symptoms</li>
          <li>Reduced airflow from vents compared to previous performance</li>
          <li>Uneven cooling or heating throughout the property</li>
        </ul>

        <p className="svcMini">
          If you recognize one or more of these signs, it’s recommended to schedule an inspection as soon as possible.
        </p>
      </div>

      {/* RIGHT CARD */}
      <div className="svcCard">
        <h3 className="svcH3">Our professional air duct cleaning process</h3>

        <p className="svcP">
          We provide all-in-one air duct cleaning services for both residential and commercial properties.
          Our process is designed to improve indoor air quality, restore proper airflow,
          and help prevent future HVAC issues.
        </p>

        <p className="svcP">
          Each air duct is cleaned individually for a flat, transparent price,
          with a full-system inspection included to identify potential concerns early.
        </p>

        <ul className="svcList">
          <li>
            HEPA vacuum cleaning option to remove loose dust and debris without spreading contamination
          </li>
          <li>
            Deep cleaning option using professional rotary brushes to remove sticky dust,
            construction debris, mildew, and hard surface buildup
          </li>
          <li>
            Detailed inspection of air ducts and HVAC system with clear findings and photos when needed
          </li>
          <li>
            Improved indoor air quality, airflow, and HVAC efficiency
          </li>
        </ul>

        <p className="svcMini">
          Routine air duct maintenance helps protect your system, prevent breakdowns,
          and extend the lifespan of your heating and cooling equipment.
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
        heading="Need air duct cleaning in Miami or the metro?"
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
