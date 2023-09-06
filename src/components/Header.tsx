import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header>
      <div>
        <Link href="/">
          <h2>i18n News Reader</h2>
        </Link>

        <LanguageSwitcher />
      </div>
    </header>
  );
}
