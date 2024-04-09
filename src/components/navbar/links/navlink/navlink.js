"use client";

import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";

export default function NavLink({ item }) {
  const pathName = usePathname();

  return (
    <div>
      {" "}
      <Link
        key={item.name}
        href={item.path}
        className={`${styles.container} ${
          pathName === item.path ? styles.active : ""
        }`}
      >
        {item.name}
      </Link>
    </div>
  );
}
