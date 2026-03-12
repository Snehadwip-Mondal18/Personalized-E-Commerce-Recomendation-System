import HeroImg from "../../assets/images/shop/shop-hero.png";

export default function ShopHero() {
  return (
    <>
    <section
      className="h-75 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <div className="text-center text-white">

        <h1 className="text-4xl font-bold">
          Shop Grid 2 Column
        </h1>

        <p className="text-sm mt-2">
          HOME / SHOP GRID 2 COLUMN
        </p>

      </div>
    </section>
    </>
  );
}