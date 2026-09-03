import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M20.5 3.5A11.9 11.9 0 0 0 12.1 0C5.5 0 .1 5.4.1 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6A11.9 11.9 0 0 0 12.1 24c6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.6-8.5zM12.1 22a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.9 9.9 0 1 1 12.1 22zm5.7-7.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6 0-.3-.2-1.2-.4-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.6-.4z"
      />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 21s7-5.4 7-11.2A7 7 0 1 0 5 9.8C5 15.6 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <circle cx="12" cy="9.5" r="2.2" fill="currentColor" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
      <path d="M12 7v5.2L15.2 15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="m10 1.8 2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.4l-4.94 2.61.94-5.5-4-3.9 5.53-.8L10 1.8Z"
      />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 3 5 6v5.5c0 4.4 2.9 8.4 7 9.5 4.1-1.1 7-5.1 7-9.5V6l-7-3Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="m9.5 12 1.8 1.8 3.7-3.8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="17.5" r="1" fill="currentColor" />
    </svg>
  );
}
