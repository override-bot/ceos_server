export interface CartItem {
    productId: string,
    quantity: number
}
export interface CartRequest {
    cartId: string,
    items: CartItem[]
}
export interface SuperCartRequest {
    carts: CartRequest[]
}
