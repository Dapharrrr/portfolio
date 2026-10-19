/* Étapes du portfolio, dans l'ordre de la page. La nav et les en-têtes de
 * section lisent tous ces mêmes données. */
export const WAYPOINTS = [
  { id: 'a-propos', name: 'À propos' },
  { id: 'competences', name: 'Compétences' },
  { id: 'experience', name: 'Expérience' },
  { id: 'education', name: 'Formation' },
  { id: 'demos', name: 'Démos' },
  { id: 'contact', name: 'Contact' },
];

// Hauteur de la ligne de lecture, en fraction de la fenêtre : une étape est
// atteinte quand son numéro passe au-dessus.
export const PROBE = 0.55;

/** Étape courante, lue directement sur les numéros d'étape du DOM. */
export const readRoute = () => {
  const markers = WAYPOINTS.map(({ id }) => document.querySelector(`[data-waypoint="${id}"]`));
  if (markers.some((el) => !el)) return null;

  const probe = window.innerHeight * PROBE;
  // Le contact est trop près du bas de page pour toujours franchir la ligne :
  // la fin du scroll vaut arrivée.
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

  let index = -1;
  markers.forEach((el, i) => {
    const rect = el.getBoundingClientRect();
    if (rect.top + rect.height / 2 <= probe) index = i;
  });
  if (atBottom) index = WAYPOINTS.length - 1;

  return { index };
};
