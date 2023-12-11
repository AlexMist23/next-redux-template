"use client";

/* Core */
import Link from "next/link";
import { usePathname } from "next/navigation";

/* CSS */
import styles from "./nav.module.css";

export default function Nav() {
  const pathname = usePathname();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className={styles.nav}>
      {navItems.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={`${styles.link} ${
            pathname === item.path ? styles.active : ""
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
