"use client";

import Nav from "@/components/Nav";
/* CSS */
import styles from "@/styles/page.module.css";

/* Components */

export default function Home() {
  return (
    <main>
      <Nav/>
      <h1>Verify page</h1>
      <p>
        This page is intended to verify that Redux state is persisted across
        page navigations.
      </p>
    </main>
  );
}
