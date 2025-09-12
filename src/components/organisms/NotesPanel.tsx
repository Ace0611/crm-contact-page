interface Note {
  id: string
  content: string
  timestamp: string
  author?: string
}

interface NotesPanelProps {
  notes?: Note[]
  className?: string
}

const mockNotes: Note[] = [
  {
    id: '1',
    content: 'Aaron Site Inspection completed. Heavy moss buildup on north side, moderate algae staining. Customer very satisfied with quote presentation. Chose premium package. Payment processed via credit card. Mentioned neighbor also needs service.',
    timestamp: '2 hours ago'
  },
  {
    id: '2',
    content: 'Customer mentioned that his pet has anxiety issues during grooming. Requested a specific time slot with less crowd. Make sure to allocate a calm handler for the session.',
    timestamp: '2 hours ago'
  },
  {
    id: '3',
    content: 'Discussed package upgrade options. Customer is considering the premium monthly grooming plan. Follow up in one week to check on their decision and offer any needed clarification, unless there is a change in course.',
    timestamp: '2 hours ago'
  }
]

export default function NotesPanel({ notes = mockNotes, className = '' }: NotesPanelProps) {
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
        {notes.map((note) => (
          <div key={note.id} className="note-card">
            <div className="note-content">
              <p>{note.content}</p>
            </div>
            <div className="note-timestamp">
              {note.timestamp}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

