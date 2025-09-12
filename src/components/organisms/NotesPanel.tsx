import { useNotesData } from '../../hooks/useNotesData'
import type { Note } from '../../types'

interface NotesPanelProps {
  className?: string
}

export default function NotesPanel({ className = '' }: NotesPanelProps) {
  const { data: notesData, isLoading, error } = useNotesData()

  if (isLoading) {
    return (
      <div className={`notes-panel ${className}`}>
        <div className="panel-header">
          <h3>Notes</h3>
          <div className="panel-actions">
            <button className="btn-add">+ Add</button>
            <button className="btn-icon">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div className="notes-list">
          <div className="loading">Loading notes...</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={`notes-panel ${className}`}>
        <div className="panel-header">
          <h3>Notes</h3>
          <div className="panel-actions">
            <button className="btn-add">+ Add</button>
            <button className="btn-icon">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div className="notes-list">
          <div className="error">Error loading notes: {error.message}</div>
        </div>
      </div>
    )
  }

  const notes = notesData?.notes || []

  return (
    <div className={`notes-panel ${className}`}>
      <div className="panel-header">
        <h3>Notes</h3>
        <div className="panel-actions">
          <button className="btn-add">+ Add</button>
          <button className="btn-icon">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <div className="notes-list">
        {notes.map((note: Note) => (
          <div key={note.id} className="note-card">
            <div className="note-content">
              <p>{note.content}</p>
            </div>
            <div className="note-meta">
              <div className="note-timestamp">{note.timestamp}</div>
              {note.author && (
                <div className="note-author">by {note.author}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

