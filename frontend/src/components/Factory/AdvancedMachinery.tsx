import Image from "next/image";

export default function AdvancedMachinery() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm text-gray-500">Machinery</p>

        <h2 className="mt-4 text-5xl font-semibold">
          Advanced Machinery
        </h2>

        <p className="mt-4 text-gray-600">
          We invest in the latest industry 4.0 technology to reduce waste and
          maximize efficiency.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Left image */}
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/images/needle-machine.jpg"
              alt="Needle detector machine"
              width={600}
              height={500}
              className="h-[420px] w-full object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-black/40 p-4 text-left text-white text-2xl font-semibold">
              NEEDLE DETECTOR MACHINE
            </div>
          </div>

          {/* Right image */}
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/images/thread-machine.jpg"
              alt="Thread sucking machine"
              width={600}
              height={500}
              className="h-[420px] w-full object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-black/40 p-4 text-left text-white text-2xl font-semibold">
              THREAD SUCKING MACHINE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}