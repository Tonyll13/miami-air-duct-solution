
import React from "react";
import type { Metadata } from "next";
import CTA from "@/app/components/CTA";
import ServiceHeroWithForm from "@/app/components/ServiceHeroSlider";
import GoogleReviews from "@/app/components/GoogleReviews";
import ThumbtackCarousel from "@/app/components/ThumbtackCarusel";
import ShowMoreGridList from "@/app/components/ShowMoreGridList";
import { webpageSchema, serviceSchema, breadcrumbSchema } from "@/app/lib/schema";
import JsonLd from "@/app/components/JsonLd";

export const metadata: Metadata = {
  title: "Attic Insulation Services",
  description:
    "Attic insulation services to improve comfort and energy efficiency. Inspection-first guidance and clear next steps.",
  alternates: { canonical: "/services/attic-insulation-services" },
};


const videos = [
  // ✅ תחליף לוידאוים שלך (YouTube/Vimeo embeds)
  { title: "", src: "https://www.youtube.com/embed/4mD7u9wFsQI?si=9YmBqRKPmA4S2Hib" },
];

const gallery = [
  // ✅ תחליף לתמונות שלך
  { title: "Attic insulation before", src: "/services/attic-insulation-1.jpeg", alt: "Attic insulation before" },
  { title: "Attic insulation after", src: "/services/attic-insulation-2.jpeg", alt: "Attic insulation after" },
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
    <><JsonLd
  data={webpageSchema({
    urlPath: "/services/attic-insulation-services",
    name: "Attic Insulation Services",
    description: "Attic insulation services to improve comfort, reduce energy loss, and support HVAC efficiency.",
  })}
/>

<JsonLd
  data={serviceSchema({
    urlPath: "/services/attic-insulation-services",
    name: "Attic Insulation Services",
    serviceType: "Attic Insulation",
    description: "Attic insulation services to improve comfort, reduce energy loss, and support HVAC efficiency.",
    areaServed: ["Miami-Dade County, FL", "Broward County, FL", "Palm Beach County, FL"],
  })}
/>

<JsonLd
  data={breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Attic Insulation Services", path: "/services/attic-insulation-services" },
  ])}
/>
<ServiceHeroWithForm
            title="Attic Insulation Services"
            description="Proper attic insulation can help stabilize indoor temperatures and reduce energy waste.
            We help you understand options based on your home’s needs."
            slides={[
              { src: "/services/air-duct-cleaning.jpg", alt: "Air duct cleaning in Miami" },
              { src: "/services/dryer-vent-cleaning.jpeg", alt: "Duct inspection" },
              { src: "/services/chimney.jpeg", alt: "Professional equipment" },
              { src: "/services/attic-insulation.jpeg", alt: "Professional equipment" },
              { src: "/services/commercial-duct.jpeg", alt: "Professional equipment" },
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
          Professional Attic Insulation Services in Miami, FL
        </h2>

        <p className="svcP">
          We provide professional attic insulation services for residential and commercial
          properties throughout Miami, Florida and the surrounding South Florida area.
          Proper attic insulation plays a critical role in indoor comfort, energy efficiency,
          and long-term HVAC performance—especially in hot and humid climates like Miami.
        </p>

        <h3 className="svcH3">Why attic insulation is important in Miami</h3>

        <p className="svcP">
          In South Florida, extreme heat, high humidity, and constant air conditioning place
          heavy demand on your home’s insulation system. Poor or outdated attic insulation
          allows heat to enter the living space, forcing your HVAC system to work harder and
          increasing energy costs.
        </p>

        <p className="svcP">
          Proper attic insulation helps regulate indoor temperatures, reduce heat transfer,
          and prevent moisture-related issues such as condensation and mold growth. Homes
          with inadequate insulation often experience uneven cooling, hot spots, and
          higher utility bills.
        </p>

        <h3 className="svcH3">Key benefits of professional attic insulation</h3>

        <ul className="svcList">
          <li>Improved indoor comfort and consistent temperatures</li>
          <li>Lower energy bills by reducing HVAC workload</li>
          <li>Better moisture control in humid Miami conditions</li>
          <li>Reduced strain on air conditioning systems</li>
          <li>Enhanced indoor air quality and home efficiency</li>
        </ul>

        <h3 className="svcH3">How often should attic insulation be inspected?</h3>

        <p className="svcP">
          Attic insulation should be inspected every <strong>12–24 months</strong>, or sooner
          if you notice rising energy bills, uneven indoor temperatures, or signs of moisture
          or mold in the attic space.
        </p>

        <p className="svcP">
          Routine inspections help identify insulation gaps, compression, or moisture damage
          before they impact your comfort and energy efficiency.
        </p>
      </div>

      {/* RIGHT CARD */}
      <div className="svcCard">
        <h3 className="svcH3">Trusted Attic Insulation Services in Miami</h3>

        <p className="svcP">
          Our experienced technicians assess your attic space and recommend the right
          insulation solution based on your home’s structure, usage, and Miami climate
          conditions. We focus on improving comfort, efficiency, and long-term protection.
        </p>

        <ul className="svcList">
          <li>Residential & commercial attic insulation</li>
          <li>Professional attic inspection and evaluation</li>
          <li>Energy efficiency and heat reduction solutions</li>
          <li>Serving Miami and surrounding South Florida areas</li>
        </ul>

        <p className="svcMini">
          Contact us today to schedule an attic insulation inspection or professional service.
        </p>
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
        <h3 className="svcH3">Our professional attic insulation process</h3>

        <p className="svcP">
          We provide complete attic insulation services throughout Miami and the surrounding
          metro area. Our process is designed to improve thermal performance, reduce energy
          loss, and protect your home from heat and moisture intrusion.
        </p>

        <h4 className="svcH4">Common attic insulation issues we identify</h4>

        <ul className="svcList">
          <li>
            <strong>Insufficient insulation levels:</strong><br />
            Older homes often lack the recommended insulation depth needed to handle Miami’s
            heat. Low insulation levels allow excessive heat transfer into the living space.
          </li>

          <li>
            <strong>Compressed or damaged insulation:</strong><br />
            Insulation that has settled, compressed, or absorbed moisture loses effectiveness
            and can no longer properly regulate temperature.
          </li>

          <li>
            <strong>Air leaks and insulation gaps:</strong><br />
            Gaps around attic penetrations allow hot air and humidity to enter, reducing
            efficiency and increasing cooling costs.
          </li>
        </ul>

        <p className="svcMini">
          Our technicians evaluate your attic carefully and recommend the correct insulation
          solution based on your home’s needs and usage.
        </p>
      </div>

      {/* RIGHT CARD */}
      <div className="svcCard">
        <h3 className="svcH3">How our attic insulation service works</h3>

        <p className="svcP">
          Our attic insulation service begins with a detailed inspection of your attic space:
        </p>

        <ul className="svcList">
          <li>Inspect existing insulation levels and condition</li>
          <li>Identify air leaks, heat transfer points, and moisture concerns</li>
          <li>Recommend insulation upgrades or replacement when needed</li>
        </ul>

        <p className="svcP">
          Based on the inspection results, we install or upgrade insulation using
          professional-grade materials designed to perform in South Florida’s climate.
          Our installation process is clean, efficient, and focused on long-term results.
        </p>

        <h4 className="svcH4">What’s included in our attic insulation service</h4>

        <ul className="svcList">
          <li>Professional attic insulation inspection</li>
          <li>Installation or upgrade of insulation materials (as recommended)</li>
          <li>Air sealing assessment to reduce energy loss</li>
          <li>Improved thermal performance and indoor comfort</li>
          <li>Cleaner, more efficient attic environment</li>
        </ul>

        <p className="svcMini">
          Proper attic insulation helps lower energy costs, improve comfort year-round,
          and protect your home from heat and moisture damage.
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
        heading="Need Attic Insulation in Miami or the metro?"
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
