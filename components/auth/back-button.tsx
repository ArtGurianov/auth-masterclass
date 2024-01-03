"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface AuthBackButtomProps {
  href: string;
  label: string;
}

export const AuthBackButton = ({ href, label }: AuthBackButtomProps) => {
  return (
    <Button
      variant="link"
      className="font-normal w-full"
      size="sm"
      asChild
    >
      <Link href={href}>
        {label}
      </Link>
    </Button>
  );
}
