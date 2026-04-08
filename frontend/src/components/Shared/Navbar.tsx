import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white">
      <div className="mx-auto flex h-[92px] max-w-[1440px] items-center justify-between px-12">
        {/* Left logos */}
        <div className="flex items-center gap-6">
          {/* Logo 1 */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo1.png"
              alt="Alliance Sourcing BD"
              width={48}
              height={48}
              className="object-contain"
            />
            <div className="leading-[1.05]">
              <p className="text-[20px] font-semibold tracking-tight text-black">
                ALLIANCE
              </p>
              <p className="text-[20px] font-semibold tracking-tight text-black">
                SOURCING BD
              </p>
            </div>
          </Link>

          {/* Divider */}
          <div className="h-10 w-px bg-gray-300" />

          {/* Logo 2 */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo2.png"
              alt="Alliance Apparels Ltd"
              width={48}
              height={48}
              className="object-contain"
            />
            <div className="leading-[1.05]">
              <p className="text-[20px] font-semibold tracking-tight text-black">
                ALLIANCE
              </p>
              <p className="text-[20px] font-semibold tracking-tight text-black">
                APPARELS LTD.
              </p>
            </div>
          </div>
        </div>

        {/* Center menu */}
        <ul className="flex items-center gap-14">
          <li>
            <Link
              href="/"
              className="text-[20px] font-medium transition hover:text-[#4A90E2]"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="text-[20px] font-medium text-black transition hover:text-[#4A90E2]"
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              href="/buying-house"
              className="text-[20px] font-medium text-black transition hover:text-[#4A90E2]"
            >
              Buying House
            </Link>
          </li>

          <li>
            <Link
              href="/factory"
              className="text-[20px] font-medium text-black transition hover:text-[#4A90E2]"
            >
              Factory &amp; Machinery
            </Link>
          </li>
        </ul>

        {/* Right button */}
        <Link
          href="/contact"
          className="rounded-[10px] bg-[#4A90E2] px-10 py-5 text-[20px] font-medium text-white transition hover:bg-[#3b82d6]"
        >
          Contact US
        </Link>
      </div>
    </nav>
  );
}