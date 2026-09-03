import { trustPoints } from "../data/site";
import { PhoneIcon, ShieldIcon, StarIcon } from "../icons";

const icons = [StarIcon, ShieldIcon, PhoneIcon];

export function TrustBar() {
  return (
    <div className="border-y border-white/10 bg-ink-soft">
      <ul className="page-wrap grid gap-6 py-6 md:grid-cols-3 md:gap-8 md:py-7">
        {trustPoints.map((point, index) => {
          const Icon = icons[index] ?? StarIcon;
          return (
            <li key={point.label} className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-gold/40 text-gold">
                <Icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-display text-sm font-semibold text-white">
                  {point.label}
                </span>
                <span className="text-sm text-white/65">{point.detail}</span>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
