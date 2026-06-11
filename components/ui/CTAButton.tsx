import Link from "next/link";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark";
};

export function CTAButton({
  href,
  children,
  variant = "primary"
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={`cta-button cta-${variant}`}
    >
      {children}
    </Link>
  );
}
