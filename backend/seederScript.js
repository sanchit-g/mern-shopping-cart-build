require('dotenv').config();

const productsData = require('./data/products');
const connectDB = require('./config/db');
const Product = require('./models/Product');

connectDB();

const importData = async () => {
	try {
		// Delete all the products that are currently in Database
		await Product.deleteMany({});

		// Insert Products in Database
		await Product.insertMany(productsData);

		console.log('Data Import Successful');
		process.exit();
	} catch (error) {
		console.error('Error with data import');
		process.exit(1);
	}
};

importData();
