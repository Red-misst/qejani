import Image from "next/image";
const CategoryItem = ({ imageSrc, altText, categoryName }) => (
  <a href="#">
    <div className="relative cursor-pointer">
      <Image
        height={1000}
        width={1280}
        className="mx-auto h-300 w-auto brightness-50 duration-300 hover:brightness-100"
        src={imageSrc}
        alt={altText}
      />

      <p className="pointer-events-none absolute top-1/2 left-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 text-center text-white lg:text-xl">
        {categoryName}
      </p>
    </div>
  </a>
);

export default CategoryItem;
