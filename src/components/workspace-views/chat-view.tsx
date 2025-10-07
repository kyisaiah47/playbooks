"use client"

import { useState } from "react"
import { IconRobot, IconUser, IconSend } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Message {
  id: string;
  type: 'prompt' | 'response';
  content: string;
  category?: string;
}

export function ChatView() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'prompt',
      content: 'What are your main goals for the next year?',
      category: 'Getting Started'
    }
  ]);
  const [currentResponse, setCurrentResponse] = useState('');

  const handleSendResponse = () => {
    if (!currentResponse.trim()) return;

    setMessages([
      ...messages,
      {
        id: Date.now().toString(),
        type: 'response',
        content: currentResponse
      },
      {
        id: (Date.now() + 1).toString(),
        type: 'prompt',
        content: 'How do you plan to achieve these goals?',
        category: 'Planning'
      }
    ]);
    setCurrentResponse('');
  };

  return (
    <div className="flex flex-col h-full">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex gap-3 ${message.type === 'response' ? 'flex-row-reverse' : ''}`}>
            {/* Avatar */}
            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
              message.type === 'prompt' ? 'bg-primary' : 'bg-muted'
            }`}>
              {message.type === 'prompt' ? (
                <IconRobot className="w-5 h-5 text-primary-foreground" />
              ) : (
                <IconUser className="w-5 h-5 text-muted-foreground" />
              )}
            </div>

            {/* Message Content */}
            <div className={`flex-1 max-w-[80%] ${message.type === 'response' ? 'text-right' : ''}`}>
              {message.category && (
                <Badge variant="outline" className="mb-2">
                  {message.category}
                </Badge>
              )}
              <Card className={`p-4 ${
                message.type === 'prompt'
                  ? 'bg-muted/50'
                  : 'bg-primary/10 border-primary/20'
              }`}>
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
              </Card>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="border-t p-4 bg-background">
        <div className="flex gap-2">
          <Textarea
            value={currentResponse}
            onChange={(e) => setCurrentResponse(e.target.value)}
            placeholder="Type your response..."
            className="min-h-[80px] resize-none"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendResponse();
              }
            }}
          />
          <Button
            onClick={handleSendResponse}
            disabled={!currentResponse.trim()}
            className="self-end"
          >
            <IconSend className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Press Enter to send, Shift+Enter for new line
        </p>
      </div>
    </div>
  );
}
