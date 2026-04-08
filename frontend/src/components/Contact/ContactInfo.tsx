export default function ContactInfo() {
  return (
    <div className="space-y-10">
      <div>
        <h3 className="text-xl font-semibold">Email</h3>
        <p className="mt-2 text-gray-600">Send us a message</p>
        <p className="mt-2 text-black">
          faroque@alliancesourcingbd.com
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Phone</h3>
        <p className="mt-2 text-gray-600">Call us directly</p>
        <p className="mt-2 text-black">+880 1700 000000</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Office</h3>
        <p className="mt-2 text-gray-600">Dhaka, Bangladesh</p>
        <p className="mt-2 text-black">Get directions →</p>
      </div>
    </div>
  );
}