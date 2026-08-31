"use client";

import { motion } from "motion/react";
import TypewriterText from "@/components/ui/typewriter-text";
import { cn } from "@/lib/utils";

interface ChatBubbleProps {
  messages: string[];
  timestamp: string;
  type: "user" | "support";
  delay?: number;
  messagesDelay?: number;
  startAnimation?: boolean;
  className?: string;
}

export function getDelayForIndex(
  delay: number,
  index: number,
  messages: string[],
) {
  const previousMessage = messages.reduce((acc, curr, i) => {
    if (i < index) {
      return acc + curr;
    }
    return acc;
  }, "");

  if (index === 0) return delay;

  return previousMessage.length * 50 + 100 + delay;
}

export default function ChatBubble({
  messages,
  timestamp,
  type,
  delay = 0.5,
  messagesDelay = 800,
  startAnimation = true,
  className,
}: ChatBubbleProps) {
  const isUser = type === "user";
  const transformOrigin = isUser ? "top right" : "top left";

  return (
    <div className="relative flex flex-col">
      <motion.div
        initial={{ scaleX: 0.3, scaleY: 0.5 }}
        animate={startAnimation ? { scaleX: 1, scaleY: 1 } : {}}
        style={{ transformOrigin }}
        transition={{ delay }}
        className={cn(
          "relative flex min-h-24 min-w-xs max-w-xl flex-col gap-1 rounded-lg px-4 py-5 text-lg md:min-w-md md:px-7 md:pb-8 md:text-2xl",
          {
            "mr-4 rounded-tr-none bg-[#2E5B4B] md:mr-20": isUser,
            "ml-4 rounded-tl-none bg-[#232C33] md:ml-20": !isUser,
          },
          className,
        )}
      >
        {startAnimation &&
          messages.map((message, i) => (
            <TypewriterText
              key={message}
              delay={getDelayForIndex(messagesDelay, i, messages)}
            >
              {message}
            </TypewriterText>
          ))}
        <motion.span
          initial={{ opacity: 0 }}
          animate={startAnimation ? { opacity: 1 } : {}}
          transition={{ delay }}
          className="absolute right-4 bottom-2 text-base text-foreground/70 md:right-10 md:text-xl"
        >
          {timestamp}
        </motion.span>
      </motion.div>
      <div
        className={cn("absolute h-0 w-0", {
          "top-0 -right-2 border-t-0 border-r-0 border-b-[30px] border-b-transparent border-l-[#2E5B4B] border-l-[30px] md:right-12 md:border-b-[40px] md:border-l-[40px]":
            isUser,
          "top-0 -left-2 border-t-0 border-r-[#232C33] border-r-[30px] border-b-[30px] border-b-transparent border-l-0 md:left-12 md:border-r-[40px] md:border-b-[40px]":
            !isUser,
        })}
      />
    </div>
  );
}
