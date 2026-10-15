// Estado y lógica de la cesta (sin tocar el DOM)
import { products } from './data.js';

let cart = [];   // estado privado del módulo: solo se modifica con las funciones exportadas

export const getCart  = () => cart;
export const getCount = () => cart.reduce((sum, i) => sum + i.qty, 0);
export const getTotal = () => cart.reduce((sum, i) => sum + i.qty * i.price, 0);

// Mete un disco en la cesta, o suma 1 si ya está. Devuelve el producto añadido.
export function addItem(id){
  const product = products.find(p => p.id === id);
  const existing = cart.find(i => i.id === id);
  if(existing){ existing.qty += 1; } else { cart.push({ ...product, qty:1 }); }
  return product;
}

// Sube o baja la cantidad; si llega a 0 se quita
export function changeQty(id, delta){
  const item = cart.find(i => i.id === id);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0) removeItem(id);
}

export function removeItem(id){
  cart = cart.filter(i => i.id !== id);
}

export function clearCart(){
  cart = [];
}
