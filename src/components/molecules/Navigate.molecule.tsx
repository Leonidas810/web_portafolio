"use client";
import Link from "next/link";
import { Button, Icon } from "@/atoms/";
import { useState } from "react";

export const Navigate = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpenMenu = () => {
    setIsOpen((p) => !p);
  };

  return (
    <div className="absolute top-6 left-1/2 transition-transform -translate-x-1/2">
      <Button className={isOpen ? "visible" : "invisible"} variant="ghost">
        <Link href="/resume">Resume</Link>
      </Button>
      <Button onClick={onOpenMenu} variant="ghost">
        <Icon name="menu" />
      </Button>
      <Button className={isOpen ? "visible" : "invisible"} variant="ghost">
        <Link href="/projects">Projects</Link>
      </Button>
    </div>
  );
};
