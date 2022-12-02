import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useState } from "react";

export function Header() {
  const router = useRouter();

  const [menuOpen, setMenu] = React.useState(false);

  const pathHome = router.pathname == "/";
  const pathSearch = router.pathname == "/search";
  const pathContact = router.pathname == "/contact";

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <button onClick={() => router.push("/")} className={styles.title}>
          <h1> Proto-Capitação</h1>
        </button>

        <div
          className={`${styles.navigation} ${menuOpen ? styles.sideBar : ""}`}
        >
          <button
            onClick={() => router.push("/")}
            className={`${styles.buttonNav} ${pathHome ? styles.isPath : ""} `}
          >
            Home
          </button>
          <button
            onClick={() => router.push("/search")}
            className={`${styles.buttonNav} ${pathSearch ? styles.isPath : ""}`}
          >
            Buscar
          </button>
        </div>

        <button
          className={`${menuOpen ? styles.close : ""} ${styles.hamburguer} `}
          onClick={() => setMenu(!menuOpen)}
        >
          <span className={styles.bar1} />
          <span className={styles.bar2} />
          <span className={styles.bar3} />
        </button>
      </div>
    </div>
  );
}
