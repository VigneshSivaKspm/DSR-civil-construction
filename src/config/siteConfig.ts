export interface SiteConfig {
  brand: string;
  domain: string;
  primaryPhone: {
    display: string;
    tel: string;
    numberOnly: string;
  };
  secondaryPhone: {
    display: string;
    tel: string;
    numberOnly: string;
  };
  whatsapp: {
    enabled: boolean;
    number?: string;
    defaultMessage?: string;
  };
  primaryAction: string;
  navLinks: Array<{ label: string; path: string }>;
}

export const siteConfig: SiteConfig = {
  brand: "DSR Civil Constructions",
  domain: "dsrcivilconstructions.in",
  primaryPhone: {
    display: "+91 73732 12354",
    tel: "tel:+917373212354",
    numberOnly: "7373212354",
  },
  secondaryPhone: {
    display: "+91 90803 46867",
    tel: "tel:+919080346867",
    numberOnly: "9080346867",
  },
  whatsapp: {
    enabled: true,
    number: "917373212354",
    defaultMessage: "Hello DSR Civil Constructions, I would like to discuss my plot and building project.",
  },
  primaryAction: "Discuss my project",
  navLinks: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ],
};
