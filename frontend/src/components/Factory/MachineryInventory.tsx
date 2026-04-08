export default function MachineryInventory() {
  const machines = [
    ["01", "Cutting Machine 10”", "KM", "03"],
    ["02", "Cutting Machine 8”", "KM", "03"],
    ["03", "Cutting Machine 6”", "Open", "01"],
    ["04", "Band Knife Machine", "Open", "01"],
    ["05", "End Cutting Machine", "Eastman", "02"],
    ["06", "Fabric Inspection Machine", "Open", "01"],
    ["07", "Fusing Machine", "Open", "02"],
    ["08", "Drill Machine", "Open", "02"],
    ["09", "Numbering Machine", "Open", "05"],
  ];

  return (
    <section className="bg-white px-6 pb-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-5xl font-semibold">
          Our Machinery Inventory
        </h2>

        <p className="mt-6 text-center text-gray-600">
          Cutting Machinery
        </p>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4">SL No.</th>
                <th className="px-6 py-4">Machine Name</th>
                <th className="px-6 py-4">Brand</th>
                <th className="px-6 py-4">Quantity</th>
              </tr>
            </thead>

            <tbody>
              {machines.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="px-6 py-4">{item[0]}</td>
                  <td className="px-6 py-4">{item[1]}</td>
                  <td className="px-6 py-4">{item[2]}</td>
                  <td className="px-6 py-4">{item[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
