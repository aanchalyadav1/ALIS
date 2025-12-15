import { useState } from "react";
import { motion } from "framer-motion";

export default function ProfileDetailsCard({ profile, onSave }) {
  const [form, setForm] = useState(profile);

  const update = (key, value) =>
    setForm({ ...form, [key]: value });

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="lg:col-span-2 rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur"
    >
      <h2 className="text-lg font-medium text-white mb-4">
        Personal Details
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          ["name", "Full Name"],
          ["email", "Email"],
          ["phone", "Phone"],
          ["city", "City"],
          ["employment", "Employment"],
          ["loanPurpose", "Loan Purpose"],
        ].map(([key, label]) => (
          <input
            key={key}
            value={form[key]}
            onChange={(e) => update(key, e.target.value)}
            placeholder={label}
            className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-400/50"
          />
        ))}
      </div>

      <div className="mt-5">
        <button
          onClick={() => onSave(form)}
          className="px-6 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 transition text-black font-medium"
        >
          Save Profile
        </button>
      </div>
    </motion.div>
  );
}
