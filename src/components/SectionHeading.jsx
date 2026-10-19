import { WAYPOINTS } from '../itinerary';

/**
 * En-tête de section, dans la colonne de gauche : le numéro d'étape puis le
 * titre. Le numéro porte `data-waypoint`, que la nav lit pour savoir où l'on
 * en est.
 */
const SectionHeading = ({ id, title }) => {
  const number = String(WAYPOINTS.findIndex((w) => w.id === id) + 1).padStart(2, '0');

  return (
    <div className="section-head">
      <div className="lg:sticky lg:top-28">
        <span data-waypoint={id} className="font-mono text-xs text-accent tabular-nums">{number}</span>
        <h2 className="mt-2 text-2xl font-medium tracking-[-0.02em] text-ink">{title}</h2>
      </div>
    </div>
  );
};

export default SectionHeading;
