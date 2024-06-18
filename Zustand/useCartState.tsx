import { Products } from '@/data';
import { create } from 'zustand';

function updateLocalStorage(cartArray: any) {
	localStorage.setItem('cart', JSON.stringify(cartArray));
}

export const useCartState: any = create((set: any) => ({
	cart: [],
	isOpen: 0,
	AddToCart: (pID: any) =>
		set((s: any) => {
			const productToAdd = Products.find((f) => f.ProductID === pID);
			const isProductAlradyAdded = s.cart.find(
				(p: any) => p.ProductID === productToAdd?.ProductID,
			);
			let updatedCart;
			if (isProductAlradyAdded) {
				updatedCart = s.cart.map((item: any, index: any) => {
					if (item.ProductID === isProductAlradyAdded.ProductID) {
						item.qty += 1;
					}
					return item;
				});
			} else {
				updatedCart = [...s.cart, { ...productToAdd, qty: 1 }];
			}
			updateLocalStorage(updatedCart);
			return { cart: updatedCart };
		}),
	RemoveFromCart: (pID: any) =>
		set((s: any) => {
			const updatedCart = s.cart.filter((p: any) => p.ProductID !== pID);
			updateLocalStorage(updatedCart);
			return { cart: updatedCart };
		}),
	cartItemQuantityIncrease: (productId :any) => set((state: any) => {}),
	cartItemQuantityDecrease: (productId:any) => set((state: any) => {}),
	cartDisplayHandler: () =>
		set((s: any) => {
			return { isOpen: s.isOpen > 0 ? 0 : 360 };
		}),
	initCart: (initdata: any) =>
		set((s: any) => {
			return { cart: initdata };
		}),
}));
