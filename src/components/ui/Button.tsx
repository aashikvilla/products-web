"use client";
export const ButtonVariants = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
} as const;
type ButtonProps = {
  text: string;
  onClick?: () => void;
  variant?: (typeof ButtonVariants)[keyof typeof ButtonVariants]; // This will be 'primary' | 'secondary'
};

function Button({
  text,
  onClick,
  variant = ButtonVariants.PRIMARY,
}: ButtonProps) {
  const baseStyles =
    "px-8 py-3 rounded-full font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-md";
  const primaryStyles =
    "bg-white text-blue-700 hover:bg-gray-200 focus:ring-blue-400";
  const secondaryStyles =
    "bg-blue-700 text-white hover:bg-blue-600 focus:ring-blue-400";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${
        variant === ButtonVariants.PRIMARY ? primaryStyles : secondaryStyles
      }`}
    >
      {text}
    </button>
  );
}

export default Button;
