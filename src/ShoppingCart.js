import { calculatePriceAfterDiscount } from './helper';

class ShoppingCart {
	constructor() {
		this.total = 0;
		this.items = sessionStorage.sonoma ? JSON.parse(sessionStorage.sonoma) : {};
	}

	addItem(item, quantity) {
		const {
			id, name, discount, price, thumbnail
		} = item;
		if (id in this.items) {
			if (this.items[id].quantity < 6) {
				this.items[id] = {
					id,
					name,
					price: discount ? calculatePriceAfterDiscount(discount, price) : price,
					thumbnail,
					quantity: this.items[id].quantity + 1
				};
			}
		} else {
			this.items[id] = {
				id,
				name,
				price: discount ? calculatePriceAfterDiscount(discount, price) : price,
				thumbnail,
				quantity,
			};
		}

		return this.items;
	}

	removeItem(item, quantity) {
		const { id } = item;

		if (id in this.items) {
			if ((this.items[id].quantity <= quantity) || quantity === 0) {
				delete this.items[id];
			}

			this.items[id].quantity -= 1;
			return `Removed ${quantity}`;
		}
		return 'This item is not in your cart';
	}

	numberOfItemsInCart() {
		return Object.keys(this.items)
			.map(item => this.items[item].quantity)
			.reduce((a, b) => a + b, 0);
	}
}

export default ShoppingCart;
