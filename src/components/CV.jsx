import { useEffect } from 'react';
import { ArrowLeft, Download, ExternalLink } from 'lucide-react';
import cvPdf from '../assets/CV-Raphael-Dubost.pdf';

const FILE_NAME = 'CV-Raphael-Dubost.pdf';

const CV = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="mx-auto flex max-w-[860px] flex-col gap-6">

        <div className="flex flex-wrap items-center justify-between gap-3">
          <a
            href="#a-propos"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-semibold text-body no-underline transition-colors hover:text-accent"
          >
            <ArrowLeft size={16} />
            Retour au portfolio
          </a>
          <a
            href={cvPdf}
            download={FILE_NAME}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-[var(--t-on-accent)] no-underline transition-transform hover:scale-105"
          >
            <Download size={16} />
            Télécharger le PDF
          </a>
        </div>

        {/* Visionneuse : le contenu de repli sert si le navigateur n'affiche pas les PDF en ligne */}
        <object
          data={`${cvPdf}#view=FitH`}
          type="application/pdf"
          className="hidden h-[1123px] w-full rounded-2xl border border-line bg-surface shadow-[var(--t-card-shadow)] md:block"
          aria-label="CV de Raphaël Dubost"
        >
          <div className="flex h-full flex-col items-center justify-center gap-4 p-10 text-center">
            <p className="text-body">Ce navigateur n&apos;affiche pas les PDF directement.</p>
            <a href={cvPdf} target="_blank" rel="noreferrer" className="font-semibold text-accent">
              Ouvrir le CV dans un nouvel onglet
            </a>
          </div>
        </object>

        {/* Sur mobile, l'embed PDF est peu fiable : on propose l'ouverture native */}
        <a
          href={cvPdf}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-3 rounded-2xl border border-line bg-surface p-10 text-center no-underline shadow-[var(--t-card-shadow)] md:hidden"
        >
          <ExternalLink size={28} className="text-accent" />
          <span className="font-display text-xl text-ink">Ouvrir le CV</span>
          <span className="text-sm text-muted">PDF · 1 page</span>
        </a>
      </div>
    </div>
  );
};

export default CV;
