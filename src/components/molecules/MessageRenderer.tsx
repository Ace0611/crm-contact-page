import Avatar from '../atoms/Avatar'
import type { Message } from '../../types'

interface MessageRendererProps {
  message: Message
}

export default function MessageRenderer({ message }: MessageRendererProps) {
  const renderEmailMessage = () => (
    <div className="message message-email">
      <div className="message-header">
        <div className="message-sender">
          <img 
            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face" 
            alt={message.sender.name}
            className="message-avatar"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
              if (nextElement) nextElement.style.display = 'flex';
            }}
          />
          <div className="avatar-fallback" style={{ display: 'none' }}>
            <Avatar name={message.sender.avatar} size="md" />
          </div>
          <div className="sender-info">
            <div className="sender-name">{message.sender.name}</div>
            {message.sender.recipient && (
              <div className="message-to">{message.sender.recipient}</div>
            )}
          </div>
        </div>
        <div className="message-meta">
          <span className="message-time">{message.timestamp}</span>
          {message.actions && (
            <div className="message-actions">
              {message.actions.map((action, index) => (
                <button key={index} className={`action-btn ${action.type}`}>
                  {action.type === 'star' && (
                    <svg className="w-4 h-4" fill={action.filled ? "#fbbf24" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  )}
                  {action.type === 'reply' && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                    </svg>
                  )}
                  {action.type === 'more' && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="message-content">
        <p>{message.content.text}</p>
        {message.content.cta && (
          <a href="#" className="cta-link">{message.content.cta.text}</a>
        )}
      </div>
      {message.footer?.replyButton && (
        <div className="message-footer">
          <button className="btn-reply">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
            </svg>
            Reply
          </button>
        </div>
      )}
    </div>
  )

  const renderWhatsAppMessage = () => (
    <div className="message-whatsapp-container">
      <div className="whatsapp-avatar">
        <Avatar name={message.sender.avatar} size="md" />
        <div className="whatsapp-indicator">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </div>
      </div>
      <div className="message-whatsapp-bubble">
        <div className="whatsapp-sender">{message.sender.name}</div>
        <div className="whatsapp-content">{message.content.text}</div>
        <div className="whatsapp-time">{message.timestamp}</div>
      </div>
    </div>
  )

  return message.type === 'email' ? renderEmailMessage() : renderWhatsAppMessage()
}
