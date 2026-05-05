export type NavLink = { href: string; label: string };

export const primaryNav: NavLink[] = [
  { href: "/services", label: "Services" },
  { href: "/approach", label: "Approach" },
  { href: "/work", label: "Selected Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const footerNav: NavLink[] = [
  { href: "/services", label: "Services" },
  { href: "/approach", label: "Approach" },
  { href: "/work", label: "Selected Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const brand = {
  name: "Hypernym",
  tagline:
    "Knowledge maps and ontologies for companies whose models need to know what they know.",
  email: "studio@hypernym.co",
  location: "Brooklyn · Berlin",
  established: 2024,
};
