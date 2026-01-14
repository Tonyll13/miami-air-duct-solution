import React from "react";
import type { Metadata } from "next";
import CTA from "@/app/components/CTA";
import ServiceHeroWithForm from "@/app/components/ServiceHeroSlider";
import GoogleReviews from "@/app/components/GoogleReviews";
import ThumbtackCarousel from "@/app/components/ThumbtackCarusel";
import ShowMoreGridList from "@/app/components/ShowMoreGridList";

export const metadata: Metadata = {
  title: "Commercial Duct Cleaning",
  description:
    "Commercial duct cleaning in Miami for offices, retail, and facilities. Improve airflow, support indoor air quality, and help HVAC systems run efficiently.",
  alternates: { canonical: "/services/commercial-duct-cleaning" },
};

const videos = [
  // ✅ תחליף לוידאוים שלך (YouTube/Vimeo embeds)
  { title: "", src: "https://www.youtube.com/embed/p_ajUB-KsC0?si=ox2BtHfk3kgc22Ui" },
  { title: "", src: "https://www.youtube.com/embed/Z_G5FvmBGQ4?si=uuFnWYitK2jsI6hM" },
];

const gallery = [
  // ✅ תחליף לתמונות שלך
  { title: "Commercial duct cleaning before", src: "/services/commercial-duct-before.jpeg", alt: "Commercial duct cleaning before" },
  { title: "Commercial duct cleaning after", src: "/services/commercial-duct-after.jpeg", alt: "Commercial duct cleaning after" },
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
        title="Commercial Duct Cleaning"
        description="Commercial duct cleaning for offices, retail, and facilities—focused on airflow, indoor air quality, and efficient HVAC operation in Miami."
        slides={[
          { src: "/services/air-duct-cleaning.jpg", alt: "Commercial duct cleaning in Miami" },
          { src: "/services/dryer-vent-cleaning.jpeg", alt: "Commercial HVAC vent inspection" },
          { src: "/services/chimney.jpeg", alt: "Professional equipment" },
          { src: "/services/attic-insulation.jpeg", alt: "Facility maintenance support" },
          { src: "/services/commercial-duct.jpeg", alt: "Commercial duct cleaning service" },
        ]}
        badges={["Satisfaction Guaranteed", "Fast scheduling", "Bonded & Insured"]}
      />

      {/* 1) Short explanation (quick intro) */}
      <section className="svcSection">
        <div className="container">
          <div className="svcGrid2">

            {/* LEFT CONTENT */}
            <div>
              <h2 className="svcH2">Commercial Duct Cleaning in Miami &amp; Surrounding Areas</h2>

              <p className="svcP">
                We provide professional commercial air duct cleaning for businesses across Miami, Florida and the surrounding
                metro area. Clean ductwork supports better airflow, healthier indoor environments, and more consistent HVAC
                performance—especially in high-traffic commercial spaces.
              </p>

              <h3 className="svcH3">Why commercial duct cleaning matters</h3>

              <p className="svcP">
                In commercial buildings, HVAC systems run longer hours, circulate higher volumes of air, and often pull in more
                dust and debris from daily foot traffic. Over time, buildup inside duct lines and supply/return pathways can restrict
                airflow, create uneven cooling, and contribute to indoor air quality concerns for staff and customers.
              </p>

              <p className="svcP">
                In Miami’s humid climate, routine HVAC maintenance is even more important. When airflow is reduced, systems can work
                harder to maintain temperature, which may increase operating costs and lead to avoidable wear on equipment.
              </p>

              <h3 className="svcH3">Key benefits of commercial duct cleaning</h3>

              <ul className="svcList">
                <li>Improved airflow and more consistent temperature control</li>
                <li>Cleaner indoor environment for employees, tenants, and customers</li>
                <li>Support for HVAC efficiency and reduced system strain</li>
                <li>Better performance in high-traffic or dust-prone spaces</li>
                <li>Helpful for move-ins, renovations, and property turnover</li>
              </ul>

              <h3 className="svcH3">How often should commercial ducts be cleaned?</h3>

              <p className="svcP">
                Many businesses schedule commercial duct cleaning every <strong>12–24 months</strong>, depending on building usage,
                occupancy, and the condition of the HVAC system. Facilities with heavy foot traffic, frequent renovations, or special
                indoor air requirements may benefit from more frequent inspections.
              </p>

              <p className="svcP">
                A professional inspection helps confirm whether cleaning is needed and what scope makes sense for your layout and
                operation schedule.
              </p>
            </div>

            {/* RIGHT CARD */}
            <div className="svcCard">
              <h3 className="svcH3">Trusted Commercial Duct Cleaning in Miami</h3>

              <p className="svcP">
                We work with offices, retail spaces, property managers, and facility teams across Miami. Our process is designed to
                reduce disruption, maintain cleanliness, and deliver clear recommendations based on what we find.
              </p>

              <ul className="svcList">
                <li>Offices, retail, and multi-unit properties</li>
                <li>Scope based on layout, access, and system type</li>
                <li>Scheduling options to reduce downtime</li>
                <li>Serving Miami and the surrounding metro area</li>
              </ul>

              <p className="svcMini">
                Contact us to request a commercial estimate and schedule an inspection.
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
              <h3 className="svcH3">Common signs your commercial ducts may need cleaning</h3>

              <p className="svcP">
                Commercial HVAC systems can hide airflow issues until comfort problems or operational complaints appear.
                If your building hasn’t been inspected recently, these signs may indicate it’s time to evaluate the ductwork.
              </p>

              <p className="svcP">
                We recommend a professional inspection at least once every <strong>12–24 months</strong> for most commercial
                properties. Consider an earlier inspection if you notice:
              </p>

              <ul className="svcList">
                <li>Uneven cooling/heating across offices, suites, or zones</li>
                <li>Reduced airflow from vents compared to normal performance</li>
                <li>Dust buildup around supply registers and returns</li>
                <li>Musty odors or lingering indoor air concerns</li>
                <li>Recent renovation, construction, or tenant turnover</li>
              </ul>

              <p className="svcMini">
                An inspection helps confirm the right scope and prevents unnecessary work or disruption.
              </p>
            </div>

            {/* RIGHT CARD */}
            <div className="svcCard">
              <h3 className="svcH3">Our commercial duct cleaning approach</h3>

              <p className="svcP">
                We provide commercial duct cleaning services designed for real-world business schedules. The scope is based on your
                HVAC layout, access points, and operational needs—so cleaning is targeted, efficient, and minimizes disruption.
              </p>

              <p className="svcP">
                For many projects, we coordinate work around business hours or low-traffic times when possible, and we keep the work
                area controlled and professional from start to finish.
              </p>

              <ul className="svcList">
                <li>System evaluation and scope planning based on layout and access</li>
                <li>Controlled cleaning methods focused on airflow pathways and buildup</li>
                <li>Optional HEPA vacuum support to help limit airborne dust</li>
                <li>Clear findings and recommendations for next steps</li>
              </ul>

              <p className="svcMini">
                Our goal is cleaner airflow, better HVAC performance, and a smoother experience for your team and tenants.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4) Photos */}
      <section className="svcSection">
        <div className="container">
          <div className="svcHeadRow">
            <h2 className="svcH2">THIS IS BAD. </h2>
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
              If you’re comparing vendors, try searching:
              <span className="svcChip">“commercial duct cleaning near me”</span>
              <span className="svcChip">“commercial duct cleaning Miami”</span>
              <span className="svcChip">“commercial HVAC duct cleaning”</span>
              and look for recent photos, clear scope details, and reviews from businesses—not just the lowest price.
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
        heading="Need commercial duct cleaning in Miami or the metro?"
        text="Call (786) 275-7826 for scheduling options or request a commercial quote online."
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
