// =====================================================
// utils.js
// MISIÓN: funciones pequeñas de ayuda que uso en varios archivos.
// =====================================================

// Convierte un número en un precio bonito.
// Ejemplo: 24.9 -> "24,90 €"
export function formatearPrecio(numero) {
  let texto = numero.toFixed(2);   // 24.9 -> "24.90" (siempre 2 decimales)
  texto = texto.replace(".", ","); // "24.90" -> "24,90" (en España se usa coma)
  return texto + " €";             // le pego el símbolo del euro
}
