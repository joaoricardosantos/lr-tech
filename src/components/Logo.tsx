type LogoProps = {
  className?: string;
  alt?: string;
  priority?: boolean;
};

const src = `${import.meta.env.BASE_URL}logo.svg`;

export function Logo({
  className,
  alt = "LR TECH",
  priority = false,
}: LogoProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={220}
      height={72}
      className={className}
      decoding="async"
      {...(priority ? { fetchPriority: "high" as const } : { loading: "lazy" as const })}
    />
  );
}
