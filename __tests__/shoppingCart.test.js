import ShoppingCart from '../src/ShoppingCart';

const shoppingCart = new ShoppingCart();

const singleCartItem = {
	1: {
		id: 1,
		name: 'Lamicall Adjustable Phone Stand For Desk',
		price: '240.00',
		thumbnail: '/image/product-small-a.jpg',
		quantity: 1
	}
};

const cartItems = {
	1: {
		id: 1,
		name: 'Lamicall Adjustable Phone Stand For Desk',
		price: '240.00',
		thumbnail: '/image/product-small-a.jpg',
		quantity: 1
	},
	2: {
		id: 2,
		name: 'JBL Everest Elite 700 Headphones',
		price: 129,
		thumbnail: '/image/product-small-b.jpg',
		quantity: 1
	}
};

describe('Shopping Cart', () => {
	it('addItem method should add item to cart', () => {
		const addedItemOnce = shoppingCart.addItem(cartItems[1], 1);
		const addedItemTwice = shoppingCart.addItem(cartItems[1], 1);
		const addedAnotherItem = shoppingCart.addItem(cartItems[2], 1);
		expect(addedAnotherItem).toEqual({
			1: {
				id: 1,
				name: 'Lamicall Adjustable Phone Stand For Desk',
				price: '240.00',
				thumbnail: '/image/product-small-a.jpg',
				quantity: 2
			},
			2: {
				id: 2,
				name: 'JBL Everest Elite 700 Headphones',
				price: 129,
				thumbnail: '/image/product-small-b.jpg',
				quantity: 1
			}
		});
	});
	it('removeItem method should remove item from cart', () => {
		const removeItem = shoppingCart.removeItem(cartItems[1], 1);
		expect(removeItem).toEqual('Removed 1');
	});
	it('should calculate total number of items in cart', () => {
		const cartTotal = shoppingCart.numberOfItemsInCart();
		expect(cartTotal).toEqual(2);
	});
	it('should return a message when an attempt is made to remove an item that is not in the cart', () => {
		const removeItem = shoppingCart.removeItem(singleCartItem, 2);
		expect(removeItem).toEqual('This item is not in your cart');
	});
});
