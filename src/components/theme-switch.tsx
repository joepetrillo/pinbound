"use client";

import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTheme } from "@wrksz/themes/client";

import { Button } from "@/components/ui/button";

const ICON_STROKE_WIDTH = 2;

export const ThemeSwitch = () => {
  const { resolvedTheme, setTheme, forcedTheme } = useTheme();

  const handleClick = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      aria-label="Toggle theme"
      disabled={forcedTheme !== undefined}
      onClick={handleClick}
      size="icon"
      variant="ghost"
    >
      <HugeiconsIcon
        aria-hidden
        className="size-6 dark:hidden"
        icon={Sun03Icon}
        strokeWidth={ICON_STROKE_WIDTH}
      />
      <HugeiconsIcon
        aria-hidden
        className="hidden size-6 dark:block"
        icon={Moon02Icon}
        strokeWidth={ICON_STROKE_WIDTH}
      />
    </Button>
  );
};
