import { Link } from "../../link/link.component";

export const HeaderNavigation = () => {
  return (
    <ul className="flex gap-4 font-bold">
      <li>
        <Link href="/" className="hover:underline">
          Home
        </Link>
      </li>
      <li>
        <Link href="/characters" className="hover:underline">
          Characters
        </Link>
      </li>
      <li>
        <Link href="/locations" className="hover:underline">
          Locations
        </Link>
      </li>
    </ul>
  );
};
