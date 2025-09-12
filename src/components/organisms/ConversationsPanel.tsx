import { useState } from 'react'
import Avatar from '../atoms/Avatar'

interface ConversationsPanelProps {
  className?: string
}

export default function ConversationsPanel({ className = '' }: ConversationsPanelProps) {
  const [isConversationsCollapsed, setIsConversationsCollapsed] = useState(false)
  return (
    <div className={`conversations-panel ${className}`}>
      <div className="panel-header">
        <div className="header-left">
          <svg className="w-4 h-4 conversations-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <h3>Conversations</h3>
        </div>
        <button 
          className="collapse-btn"
          onClick={() => setIsConversationsCollapsed(!isConversationsCollapsed)}
          aria-label={isConversationsCollapsed ? 'Expand Conversations' : 'Collapse Conversations'}
        >
          <svg 
            className={`w-4 h-4 transition-transform ${isConversationsCollapsed ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <div className={`conversations-content ${isConversationsCollapsed ? 'collapsed' : ''}`}>
        <div className="conversations-list">
        {/* Conversation Thread 1 */}
        <div className="conversation-thread">
          <div className="thread-header">
            <h4>Set up a new time to follow up on the mail chain issue that we talked about the...</h4>
            <svg className="w-4 h-4 expand-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </div>
          <div className="thread-indicator">
            <span className="indicator-number">3</span>
          </div>
          
          {/* Email Message */}
          <div className="message message-email">
            <div className="message-header">
              <div className="message-sender">
                <Avatar name="OJ" size="lg" />
                <span>Olivia John</span>
                <span className="message-to">To: Me</span>
              </div>
              <div className="message-meta">
                <span className="message-time">5 min ago</span>
                <div className="message-actions">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                  </svg>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="message-content">
              <p>Hey John, You Order has reached. Your Urban Wellness LLP order has arrived in your city. Click the button below to track your order in real-time. Arriving on Tuesday, November 19th.</p>
              <button className="btn-track">Track Your Order</button>
            </div>
            <div className="message-footer">
              <button className="btn-reply">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                </svg>
                Reply
              </button>
            </div>
          </div>
        </div>
        {/* WhatsApp Message */}
        <div className="message-whatsapp-container">
            <div className="whatsapp-avatar">
              <Avatar name="OJ" size="md" />
              <div className="whatsapp-indicator">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </div>
            </div>
            <div className="message-whatsapp-bubble">
              <div className="whatsapp-sender">Olivia</div>
              <div className="whatsapp-content">Please let me know</div>
              <div className="whatsapp-time">11:44 AM</div>
            </div>
          </div>

        {/* Conversation Thread 2 */}
        <div className="conversation-thread">
          <div className="thread-header">
            <h4>Set up a new time to follow up on the mail chain issue that we talked about the...</h4>
            <svg className="w-4 h-4 expand-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </div>
          <div className="thread-indicator">
            <span className="indicator-number">3</span>
          </div>
          
          <div className="message message-email">
            <div className="message-header">
              <div className="message-sender">
                <Avatar name="OJ" size="lg" />
                <span>Olivia John</span>
                <span className="message-to">To: Me</span>
              </div>
              <div className="message-meta">
                <span className="message-time">5 min ago</span>
                <div className="message-actions">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                  </svg>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="message-content">
              <p>Hey John, You Order has reached. Your Urban Wellness LLP order has arrived in your city. Click the button below to track your order in real-time. Arriving on Tuesday, November 19th.</p>
              <button className="btn-track">Track Your Order</button>
            </div>
            <div className="message-footer">
              <button className="btn-reply">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                </svg>
                Reply
              </button>
            </div>
          </div>
        </div>

        {/* Typing Indicator */}
        <div className="typing-indicator">
          <div className="typing-icon">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <span>Olivia is typing</span>
          <div className="typing-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="message-input">
        <div className="input-container">
          <div className="input-left-icons">
            <svg className="w-4 h-4 mail-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <svg className="w-3 h-3 chevron-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div className="input-divider"></div>
          <input type="text" placeholder="Type your message..." />
          <div className="input-actions">
            <button className="btn-icon btn-purple">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2z"/>
                <path d="M8 8l1 3L8 14l3-1L14 8l-3 1L8 8z"/>
                <path d="M16 16l0.5 1.5L18 18l-1.5 0.5L16 20l-0.5-1.5L14 18l1.5-0.5L16 16z"/>
              </svg>
            </button>
            <button className="btn-icon btn-send">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
