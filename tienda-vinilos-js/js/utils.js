// Formatea un número como precio: 24.9 → "24,90 €"
export function formatPrice(n){
  return n.toFixed(2).replace('.', ',') + ' €';
}
