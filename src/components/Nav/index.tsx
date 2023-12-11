"use client";

/* Core */
import Link from "next/link";
import { usePathname } from "next/navigation";

/* CSS */
import styles from "./nav.module.css";

export default function Nav() {
  const pathname = usePathname();

  const navItems = [
    { path: "/verify", label: "Home" },
    { path: "/verify", label: "About" },
    { path: "/verify", label: "Contact" },
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
