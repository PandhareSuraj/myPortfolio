"use client";

import { useEffect, useMemo, useState } from "react";

export function TypingEffect({ words }: { words: string[] }) {
  const safeWords = useMemo(() => words.filter(Boolean), [words]);
  const [wordIndex, setWordIndex] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = safeWords[wordIndex] ?? "";
    const doneTyping = !deleting && letterCount === current.length;
    const doneDeleting = deleting && letterCount === 0;
    const delay = doneTyping ? 1300 : deleting ? 45 : 80;

    const timeout = window.setTimeout(() => {
      if (doneTyping) {
        setDeleting(true);
        return;
      }
      if (doneDeleting) {
        setDeleting(false);
        setWordIndex((index) => (index + 1) % safeWords.length);
        return;
      }
      setLetterCount((count) => count + (deleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [deleting, letterCount, safeWords, wordIndex]);

  return (
    <span className="text-primary">
      {safeWords[wordIndex]?.slice(0, letterCount)}
      <span className="ml-1 inline-block h-8 w-px translate-y-1 bg-primary" />
    </span>
  );
}
