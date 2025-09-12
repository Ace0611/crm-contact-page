interface FooterProps {
  onPrevious?: () => void
  onNext?: () => void
}

export default function Footer({ onPrevious }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Navigation Button */}
        <button className="btn-nav" onClick={onPrevious}>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <div className="nav-divider"></div>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </footer>
  )
}

