"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted ? resolvedTheme === "dark" : true;
  const nextTheme = isDark ? "light" : "dark";

  return (
    <Button
      aria-label={mounted ? `Switch to ${nextTheme} mode` : "Toggle color theme"}
      title={mounted ? `Switch to ${nextTheme} mode` : "Toggle color theme"}
      variant="outline"
      size="sm"
      onClick={() => setTheme(nextTheme)}
      className="h-10 w-10 px-0"
      disabled={!mounted}
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
