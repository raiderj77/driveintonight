import type { TheaterGuide } from '@/content/theater-guides';

type TheaterGuideProps = {
  guide: TheaterGuide;
  theaterName: string;
};

export function TheaterGuideContent({ guide, theaterName }: TheaterGuideProps) {
  const reviewedLabel = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'long',
    timeZone: 'UTC',
  }).format(new Date(`${guide.reviewedAt}T00:00:00Z`));

  return (
    <section className="verified-guide" aria-labelledby="verified-guide-title">
      <div className="container">
        <header className="verified-guide__header">
          <p className="section-label">Source-verified visitor guide</p>
          <h2 id="verified-guide-title">PLAN YOUR VISIT TO {theaterName.toUpperCase()}</h2>
          <p className="verified-guide__summary">{guide.summary}</p>
          <p className="verified-guide__review">
            Reviewed <time dateTime={guide.reviewedAt}>{reviewedLabel}</time>. {guide.editorialNote}
          </p>
        </header>

        <div className="verified-guide__facts" aria-label="Quick planning facts">
          {guide.quickFacts.map((fact) => (
            <div className="verified-guide__fact" key={fact.label}>
              <h3>{fact.label}</h3>
              <p>{fact.value}</p>
            </div>
          ))}
        </div>

        <div className="verified-guide__body">
          <div>
            {guide.sections.map((section) => (
              <section className="verified-guide__section" key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>

          <aside className="verified-guide__checklist" aria-labelledby="visit-checklist-title">
            <h2 id="visit-checklist-title">Before you leave</h2>
            <ul>
              {guide.visitChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a
              href={guide.sources[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-neon"
            >
              Check the official site
              <span aria-hidden="true">↗</span>
            </a>
          </aside>
        </div>

        <section className="verified-guide__faq" aria-labelledby="guide-faq-title">
          <p className="section-label">First-visit questions</p>
          <h2 id="guide-faq-title">{theaterName.toUpperCase()} FAQ</h2>
          {guide.faqs.map((faq) => (
            <details className="faq-item" key={faq.question}>
              <summary>{faq.question}</summary>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </section>

        <div className="verified-guide__evidence">
          <section aria-labelledby="guide-sources-title">
            <h2 id="guide-sources-title">Sources</h2>
            <p>
              We use first-party theater pages for changeable visitor information. Each link opens the
              source used during the review.
            </p>
            <ul>
              {guide.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noopener noreferrer">
                    {source.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  <span>{source.note}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="verified-guide__limitations" aria-labelledby="guide-limitations-title">
            <h2 id="guide-limitations-title">Limitations</h2>
            <p>{guide.limitations}</p>
          </section>
        </div>
      </div>
    </section>
  );
}
