const Product = require('../models/Product');

// Create Product
exports.createProduct = async (req, res) => {
  try {
    const { productName, productSku, category, price, inStock } = req.body;

    const product = new Product({
      productName,
      productSku,
      category,
      price,
      inStock,
      lastUpdate: new Date(),
    });

    await product.save();
    console.log('Product saved:', product); // Log saved data
    res.status(201).json({ message: 'Product created successfully', product });
  } catch (error) {
    console.error('Error saving product:', error.message);
    res.status(500).json({ message: 'Error saving product', error: error.message });
  }
};


// Edit Product
exports.editProduct = async (req, res) => {
  console.log("editProduct start");

  const { productSku, ...updates } = req.body;

  try {
    const allowedUpdates = ['productName', 'price', 'category', 'inStock'];
    const filteredUpdates = Object.keys(updates).reduce((acc, key) => {
      if (allowedUpdates.includes(key)) {
        acc[key] = updates[key];
      }
      return acc;
    }, {});

    const product = await Product.findOneAndUpdate(
      { productSku }, // Match the product by productSku
      { $set: filteredUpdates }, // Only apply allowed updates
      { new: true } // Return the updated document
    );

    if (!product) {
      return res.status(400).json({ message: "The product was not found" });
    }

    res.status(200).json({ message: "Edit successful", product });
  } catch (error) {
    console.error("Error in editProduct:", error.message);
    res.status(500).json({ error: error.message });
  }
};


// Delete Product
exports.deleteProduct = async (req, res) => {
  console.log("deleteProduct start");

  const { productSku } = req.body;

  try {
    console.log("productController - productSku", productSku);
    if (!productSku)
      return res.status(400).json({ message: "The productSku was not provided" });

    // Use an object to filter by productSku
    const product = await Product.findOneAndDelete({ productSku });

    if (!product) {
      return res.status(404).json({ message: "The product was not found" });
    }

    res.status(200).json({ message: "Delete successful", product });
  } catch (error) {
    console.error("Error in deleteProduct:", error.message);
    res.status(500).json({ error: error.message });
  }
};

