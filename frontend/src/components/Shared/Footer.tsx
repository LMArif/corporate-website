import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-[1440px] px-16 py-20">
        {/* Top content */}
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-4">
              <Image
                src="/images/logo1.png"
                alt="Alliance Sourcing BD"
                width={54}
                height={54}
                className="object-contain"
              />

              <div className="leading-[1.05]">
                <p className="text-[18px] font-semibold">ALLIANCE</p>
                <p className="text-[18px] font-semibold">SOURCING BD</p>
              </div>
            </div>

            {/* Address */}
            <div className="mt-10">
              <h4 className="text-[20px] font-semibold">Address</h4>
              <p className="mt-3 text-[18px] leading-8 text-white/85">
                Asha Plaza (2nd floor), Hemayetpur, Savar, Dhaka, Bangladesh.
              </p>
            </div>

            {/* Contact */}
            <div className="mt-10">
              <h4 className="text-[20px] font-semibold">Contact</h4>

              <div className="mt-3 space-y-2 text-[18px] text-white/85">
                <p>01716054044</p>
                <p>faroque71@gmail.com</p>
              </div>
            </div>

            {/* Social icons */}
            <div className="mt-10 flex items-center gap-5 text-[22px]">
              <FaFacebookF className="cursor-pointer transition hover:text-blue-400" />
              <FaInstagram className="cursor-pointer transition hover:text-pink-400" />
              <FaXTwitter className="cursor-pointer transition hover:text-gray-300" />
              <FaLinkedinIn className="cursor-pointer transition hover:text-blue-500" />
              <FaYoutube className="cursor-pointer transition hover:text-red-500" />
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col items-end">
            <h3 className="text-[40px] font-semibold">Quick Links</h3>

            <div className="mt-10 space-y-6 text-right">
              <Link
                href="/about"
                className="block text-[22px] text-white/85 transition hover:text-white"
              >
                About us
              </Link>

              <Link
                href="/services"
                className="block text-[22px] text-white/85 transition hover:text-white"
              >
                Our services
              </Link>

              <Link
                href="/factory"
                className="block text-[22px] text-white/85 transition hover:text-white"
              >
                Factory network
              </Link>

              <Link
                href="/quality"
                className="block text-[22px] text-white/85 transition hover:text-white"
              >
                Quality control
              </Link>

              <Link
                href="/contact"
                className="block text-[22px] text-white/85 transition hover:text-white"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-white/10" />

        {/* Bottom row */}
        <div className="mt-8 flex flex-col gap-6 text-[18px] text-white/70 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Alliance Sourcing BD</p>

          <div className="flex flex-wrap gap-8">
            <Link href="#" className="hover:text-white">
              Privacy policy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms of service
            </Link>
            <Link href="#" className="hover:text-white">
              Cookie settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}