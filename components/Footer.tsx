import { footerInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer>
      <span className="footer-logo">{footerInfo.name}</span>
      <span>
        {footerInfo.location} · {footerInfo.email} · {footerInfo.year}
      </span>
    </footer>
  );
}