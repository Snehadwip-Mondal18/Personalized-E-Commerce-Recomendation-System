import ShopHero from "../../components/shop/ShopHero";
import ShopSidebar from "../../components/shop/ShopSidebar";
import ShopToolbar from "../../components/shop/ShopToolbar";
import ShopProductGrid from "../../components/shop/ShopProductGrid";
// import Pagination from "../../components/shop/Pagination";

export default function Shop() {
  return (
    <>
      <ShopHero />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">

          {/* Sidebar */}
          <div>
            <ShopSidebar />
          </div>

          {/* Products */}
          <div className="md:col-span-3">

            <ShopToolbar />

            <ShopProductGrid />

            {/* <Pagination /> */}

          </div>

        </div>
      </section>
    </>
  );
}