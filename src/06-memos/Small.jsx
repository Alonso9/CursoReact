import { memo } from 'react';
export const Small = memo(({ counterVal }) => {
  console.log('Me dibuje!');
  return <>{<small>{counterVal}</small>}</>;
});

/*
 * El memo lo usamos para evitar que edl componente se destruya y se construya cada vez que el padre (un state) se modifique
 * para este ejemplo, se crearon 2 botones, uno que aumenta el contador y otro que solo cambia el state de una varible,
 * si damos click en el de incrementar como pasamos del padre una props y como afecta directamente al hijo eso hace que se destruya
 * y se vuelva a construir, pero el caso del state show que no afecta al hijo, no destruye y construye de nuevo el hijo.
 */
