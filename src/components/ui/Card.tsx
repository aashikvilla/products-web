export const CardVariants = {
  REVIEW: "review",
  CATEGORY: "category",
} as const;

type CardProps = {
  title: string;
  description?: string;
  variant?: (typeof CardVariants)[keyof typeof CardVariants]; // This will be 'review' | 'category'
};

function Card({
  title,
  description,
  variant = CardVariants.REVIEW,
}: CardProps) {
  const baseStyles =
    "bg-white p-8 rounded shadow-md hover:shadow-lg transition-shadow mb-6";
  const reviewStyles =
    variant === CardVariants.REVIEW ? "text-xl font-semibold" : "";
  const categoryStyles =
    variant === CardVariants.CATEGORY ? "text-2xl font-bold text-blue-700" : "";

  return (
    <div className={baseStyles}>
      <h3 className={`${reviewStyles} ${categoryStyles}`}>{title}</h3>
      {description && <p>{description}</p>}
    </div>
  );
}

export default Card;
