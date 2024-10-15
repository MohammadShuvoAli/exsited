import Link from "next/link";
import Image from "next/image";
import { Settings } from "@/lib/meta";

export function Logo() {
    return (
      <Link href="/" className="flex items-center gap-2.5">
        <Image 
          src={Settings.siteicon}
          alt={`${Settings.title} main logo`}
          width={100}
          height={100}
          loading="lazy"
          decoding="async"
        />
        {/* <h1 className="text-md font-semibold">{Settings.title}</h1> */}
      </Link>
    );
}