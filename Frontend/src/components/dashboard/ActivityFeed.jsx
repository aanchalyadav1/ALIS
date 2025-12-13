const activities = [
  {
    time: "2 min ago",
    text: "VerificationAgent validated PAN & income documents"
  },
  {
    time: "5 min ago",
    text: "UnderwritingAgent approved loan eligibility (Low Risk)"
  },
  {
    time: "8 min ago",
    text: "SanctionAgent generated loan approval summary"
  },
  {
    time: "12 min ago",
    text: "User initiated Home Loan inquiry (₹35L)"
  }
];

export default function ActivityFeed() {
  return (
    <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/10">
      <h3 className="text-lg font-semibold mb-4">
        System Activity Feed
      </h3>

      <ul className="space-y-4">
        {activities.map((a, i) => (
          <li
            key={i}
            className="flex items-start gap-3 border-l border-cyan-400/40 pl-4"
          >
            <span className="text-xs opacity-50 w-20">
              {a.time}
            </span>
            <span className="text-sm">
              {a.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
