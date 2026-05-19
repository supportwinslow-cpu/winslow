import products from "../products";
import ProductClient from "./ProductClient";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;

  return <ProductClient slug={slug} />;
}