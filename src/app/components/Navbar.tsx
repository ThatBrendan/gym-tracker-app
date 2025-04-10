import Link from "next/link";

const NavBar = () => (
  <nav className="flex flex-row items-center px-20 py-4">
    <div className="basis-1/4">
      <Link href="/">
        <p className="text-white text-2xl overline decoration-cyan-500 decoration-4">
          Gym Tracker
        </p>
      </Link>
    </div>
    <ul className="flex space-x-4 basis-3/4 flex justify-evenly">
      <li>
        <Link href="/">
          <p className="text-white">Home</p>
        </Link>
      </li>
      <li>
        <Link href="/tracker">
          <p className="text-white">Tracker</p>
        </Link>
      </li>
      <li>
        <Link href="/profile">
          <p className="text-white">Profile</p>
        </Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
