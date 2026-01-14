import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaYelp,
  FaGoogle
} from "react-icons/fa";
import { SiThumbtack } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="footerWrap">
      <div className="container footerInner">
        <div className="footerGrid">
          <div className="footerLeft">
            <div className="footerBrand">Miami Air Duct Solution</div>
            <p className="footerText">
              Professional duct & ventilation services with a focus on safety, air quality, and
              clear communication.
            </p>

            <p className="footerLine">
              <span className="footerLabel">Phone:</span>{" "}
              <a href="tel:+17862757826">(786) 275-7826</a>
            </p>
            <p></p>
            <p className="footerLine">
              <span className="footerLabel">Email:</span>{" "}
              <a href="mailto:miamiairductsolution@gmail.com">miamiairductsolution@gmail.com</a>
            </p>
            <p></p>
            <div className="footerMap">
  <iframe
    title="Miami Air Duct Solution Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1299328.3059116255!2d-79.97838143302253!3d25.904957125382428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x62cdeced65140bc5%3A0x12102545e7db4f6d!2sMiami%20Air%20Duct%20Solution!5e0!3m2!1sen!2sus!4v1767238640561!5m2!1sen!2sus"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>

          </div>

          <div className="footerRight">
            <div className="footerTitle">Quick Links</div>
            <ul className="footerLinks">
              <li><Link className="footerLink" href="/services/air-duct-cleaning">Air Duct Cleaning</Link></li>
              <li><Link className="footerLink" href="/services/dryer-vent-cleaning">Dryer Vent Cleaning</Link></li>
              <li><Link className="footerLink" href="/services/commercial-duct-cleaning">Commercial Duct Cleaning</Link></li>
              <li><Link className="footerLink" href="/contact">Contact</Link></li>
              <li><Link className="footerLink" href="/faqs">FAQ&apos;S</Link></li>
            </ul>
          </div>
          <div className="footerSocialIcons">
  <a href="https://www.facebook.com/profile.php?id=61586163473838" target="_blank" aria-label="Facebook">
    <FaFacebookF />
  </a>

  <a href="https://www.instagram.com/miamiairductsolution/" target="_blank" aria-label="Instagram">
    <FaInstagram />
  </a>

  <a href="https://www.tiktok.com/@miamiairductsolution?lang=en" target="_blank" aria-label="TikTok">
    <FaTiktok />
  </a>

  <a href="https://www.youtube.com/@Miamiairductsolutions" target="_blank" aria-label="YouTube">
    <FaYoutube />
  </a>

  <a href="https://www.thumbtack.com/fl/hollywood/duct-cleaning/miami-air-duct-solution/service/565059617257209864?from_native_webview=true&supports_redirect_ttevent=true&native_app_name=com.thumbtack.wingtip&native_app_build=11657&native_app_version=437.0&native_os_version=26.1&native_device_type=iPhone15%2C2" target="_blank" aria-label="Thumbtack">
    <SiThumbtack />
  </a>

  <a href="https://www.yelp.com/biz/miami-air-duct-solution-miramar?osq=Miami+Air+Duct+Solution" target="_blank" aria-label="Yelp">
    <FaYelp />
  </a>

  <a href="https://www.google.com/maps/place/Miami+Air+Duct+Solution/@26.0029808,-80.5910876,10z/data=!3m1!4b1!4m6!3m5!1s0x62cdeced65140bc5:0x12102545e7db4f6d!8m2!3d26.0033545!4d-80.261429!16s%2Fg%2F11yp5pcc39?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" aria-label="Google">
    <FaGoogle />
  </a>
</div>

        </div>

        <div className="footerBottom">
          © {new Date().getFullYear()} Miami Air Duct Solution. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
