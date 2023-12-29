import { useTheme } from "next-themes";
import styles from "./component.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function ThemesMenu() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <button
      className={styles.div}
      onClick={(e) => setTheme(resolvedTheme == "dark" ? "light" : "dark")}
    >
      {mounted && (
        <Image
          src={`/images/theme-${resolvedTheme}-icon.svg`}
          fill
          alt={`theme ${resolvedTheme} icon`}
          className={styles.svg}
          fetchPriority="high"
        />
      )}
    </button>
  );
}
