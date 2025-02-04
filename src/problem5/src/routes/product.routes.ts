import express from "express";
import {
	createProduct,
	getProducts,
	getProductById,
	updateProduct,
	deleteProduct,
} from "../controllers/product.controller";

const router = express.Router();

router.post("/", createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
