import React from "react";

type Props = {
  titre: String;
  sousTitre: String;
};

export default function Hero({ titre, sousTitre }: Props) {
  return (
    <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
      <div className="flex-1 space-y-4">
        <h1 className="inline-block font-heading font-title text-4xl tracking-tight lg:text-5xl">
          {titre}
        </h1>
        <p className="text-xl text-muted-foreground font-text">{sousTitre}</p>
      </div>
    </div>
  );
}
