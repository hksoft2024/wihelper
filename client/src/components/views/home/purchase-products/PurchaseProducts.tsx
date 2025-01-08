import productService from "~/services/productService";
import { Product } from "~/types/product";
import ProductsCarousel from "../../products/shared/products-carousel";

const PurchaseProducts = async () => {
	let products: Product[] = [];
	const res = await productService.getBestSellingProducts();

	if (res.is_succeeded) {
		products = res.data;
	}

	return <ProductsCarousel name="best-selling" products={products} />;
};

export default PurchaseProducts;
