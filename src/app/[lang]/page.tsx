import Button from "@/components/ui/Button";
import { getDictionary } from "../../../getDictionary";
import { Locale } from "../../../i18n-config";
import Card, { CardVariants } from "@/components/ui/Card";
import Image from "next/image";

interface IHomepage {
  params: { lang: Locale };
}

export default async function HomePage({ params: { lang } }: IHomepage) {
  const dictionary = await getDictionary(lang);
  const { heroSection, categories, reviews, subHeadings } = dictionary;

  return (
    <>
      <div className="bg-gray-100 min-h-screen ">
        {/* Hero Section */}
        <section className="bg-blue-500 text-white py-16 relative">
          <Image
            fill
            src={heroSection.image.src}
            alt={heroSection.image.alt}
            className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
          />
          <div className="relative z-10 text-center">
            <h1 className="text-4xl font-bold mb-4">{heroSection.title}</h1>
            <p className="text-xl mb-8">{heroSection.description}</p>
            <Button text={heroSection.button} />
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 px-10">
          <h2 className="text-3xl font-bold text-center mb-8">
            {subHeadings.category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Card
                key={category}
                variant={CardVariants.CATEGORY}
                title={category}
              />
            ))}
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-4 px-10">
          <h2 className="text-3xl font-bold text-center mb-8">
            {subHeadings.review}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Card
                key={review.title}
                variant={CardVariants.REVIEW}
                title={review.title}
                description={review.descrption}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
