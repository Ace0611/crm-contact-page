interface FooterProps {
  onPrevious?: () => void
  onNext?: () => void
}

export default function Footer({ onPrevious, onNext }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer-nav">
        <button className="btn-icon" onClick={onPrevious}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="btn-icon" onClick={onNext}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </footer>
  )
}

