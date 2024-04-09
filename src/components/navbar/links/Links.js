import styles from "./links.module.css";
import NavLink from "./navlink/navlink";

export default function Links() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/posts" },
  ];

  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.links}>
      {links.map((link) => (
        <NavLink key={link.name} item={link} />
      ))}
      {session ? (
        <>
          {isAdmin && <NavLink item={{ name: "Admin", path: "/admin" }} />}
          <button className={styles.logout}>Logout</button>
        </>
      ) : (
        <NavLink item={{ name: "Login", path: "/login" }} />
      )}
    </div>
  );
}
