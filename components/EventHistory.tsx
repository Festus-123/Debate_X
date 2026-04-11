"use client"

const EventHistory = () => {
  const events = [
    {
      title: "AI vs Humanity",
      result: "Winners: 'Yet to be reealed'",
      date: "April 2026",
    },
    {
      title: "Crypto Regulation",
      result: "Winners: 'yet to be revealed'",
      date: "Upcoming",
    },
  ];

  return (
    <div className="mt-20 w-full">
      <h2 className="text-xl md:text-3xl font-bold mb-6">Debate History</h2>

      <div className="grid gap-4">
        {events.map((event, index) => (
          <div
            key={index}
            className="p-4  border border-purple-600 rounded-lg"
          >
            <h3 className=" font-semibold">{event.title}</h3>
            <p className="text-gray-600 text-sm">{event.date}</p>
            <p className="text-purple-400">{event.result}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventHistory