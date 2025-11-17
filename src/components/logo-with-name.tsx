import Image from "next/image";
import Link from "next/link";

interface LogoWithNameProps {
  size?: "sm" | "md" | "lg";
  showName?: boolean;
  href?: string;
  className?: string;
}

export function LogoWithName({
  size = "md",
  showName = true,
  href = "/",
  className = ""
}: LogoWithNameProps) {
  const sizeClasses = {
    sm: { image: "h-5 w-5", text: "text-base" },
    md: { image: "h-6 w-6", text: "text-lg" },
    lg: { image: "h-8 w-8", text: "text-xl" },
  };

  const content = (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/logo.svg"
        width={24}
        height={24}
        className={`${sizeClasses[size].image} invert dark:invert-0`}
        alt="Templata"
      />
      {showName && (
        <span className={`${sizeClasses[size].text} font-sans font-semibold tracking-wide`}>
          Templata
        </span>
      )}
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
