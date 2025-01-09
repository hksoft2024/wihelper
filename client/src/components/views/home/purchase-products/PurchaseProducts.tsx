import productService from "~/services/productService";
import { Product } from "~/types/product";
import ProductsCarousel from "../../products/shared/products-carousel";

const PurchaseProducts = async () => {
	let products: Product[] = [];
	const bestSellingProductsRes = await productService.getBestSellingProducts();

	if (bestSellingProductsRes.is_succeeded) {
		if (bestSellingProductsRes.data.length > 0) {
			products = bestSellingProductsRes.data;
		} else {
			const newestProductsRes = await productService.getTopRatedProducts();

			if (newestProductsRes.is_succeeded) {
				products = newestProductsRes.data;
			}
		}
	}

	return <ProductsCarousel name="best-selling" products={products} />;
};

export default PurchaseProducts;
