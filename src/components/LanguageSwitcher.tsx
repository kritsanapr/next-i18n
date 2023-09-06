import React from "react";

type Props = {};

export default function LanguageSwitcher({}: Props) {
  return (
    <div>
      <select>
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
}
