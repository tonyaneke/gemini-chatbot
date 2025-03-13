import { motion } from "framer-motion";
import Link from "next/link";

import { LogoGoogle, MessageIcon, VercelIcon } from "./icons";

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-[500px] mt-20 mx-4 md:mx-0"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="border-none bg-muted/50 rounded-2xl p-6 flex flex-col gap-4 text-zinc-500 text-sm dark:text-zinc-400 dark:border-zinc-700">
        <p className="flex flex-row justify-center gap-4 items-center text-zinc-900 dark:text-zinc-50">
          <VercelIcon />
          <span>+</span>
          <MessageIcon />
        </p>
        <p>
          Meet your AI Travel Assistant, powered by Google Gemini technology.
          This intelligent booking agent helps you plan and book your perfect
          trip with ease. Simply chat with the assistant about your travel
          preferences, and it will handle all your booking needs.
        </p>
        <p>
          Our travel assistant can search for flights, find accommodations,
          recommend activities, and complete your reservations—all in one
          conversational interface. Just tell it where you want to go, when
          you're traveling, and what you're looking for.
        </p>
        <p>
          {" "}
          Start your journey by simply typing your travel plans or questions in
          the chat below.
        </p>
      </div>
    </motion.div>
  );
};
