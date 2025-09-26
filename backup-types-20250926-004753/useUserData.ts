'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

// Hook for managing user template sessions
export function useTemplateSessions() {
  const { data: session } = useSession();
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSessions = async () => {
    if (!session?.user?.id) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/user-data/sessions');
      if (!response.ok) {
        throw new Error('Failed to fetch sessions');
      }
      
      const data = await response.json();
      setSessions(data.sessions);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch sessions');
    } finally {
      setLoading(false);
    }
  };

  const createSession = async (templateId: string, title: string) => {
    if (!session?.user?.id) return null;
    
    try {
      const response = await fetch('/api/user-data/sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ templateId, title }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to create session');
      }
      
      const data = await response.json();
      await fetchSessions(); // Refresh the list
      return data.session;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create session');
      return null;
    }
  };

  const updateSession = async (
    sessionId: string, 
    updates: { progress?: number; currentSection?: string; isCompleted?: boolean; metadata?: any }
  ) => {
    if (!session?.user?.id) return null;
    
    try {
      const response = await fetch(`/api/user-data/sessions/${sessionId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update session');
      }
      
      const data = await response.json();
      await fetchSessions(); // Refresh the list
      return data.session;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update session');
      return null;
    }
  };

  useEffect(() => {
    if (session?.user?.id) {
      fetchSessions();
    }
  }, [session?.user?.id]);

  return {
    sessions,
    loading,
    error,
    fetchSessions,
    createSession,
    updateSession,
  };
}

// Hook for managing user responses to prompts
export function useUserResponses() {
  const { data: session } = useSession();
  
  const saveResponse = async (responseData: {
    sessionId: string;
    templateId: string;
    sectionId: string;
    promptId: string;
    response: string;
    metadata?: any;
  }) => {
    if (!session?.user?.id) return null;
    
    try {
      const response = await fetch('/api/user-data/responses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(responseData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to save response');
      }
      
      const data = await response.json();
      return data.response;
    } catch (err) {
      console.error('Failed to save response:', err);
      return null;
    }
  };

  return { saveResponse };
}

// Hook for managing saved resources
export function useSavedResources() {
  const { data: session } = useSession();
  const [savedResources, setSavedResources] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSavedResources = async () => {
    if (!session?.user?.id) return;
    
    setLoading(true);
    try {
      const response = await fetch('/api/user-data/resources');
      if (response.ok) {
        const data = await response.json();
        setSavedResources(data.savedResources);
      }
    } catch (err) {
      console.error('Failed to fetch saved resources:', err);
    } finally {
      setLoading(false);
    }
  };

  const saveResource = async (resourceData: {
    templateId: string;
    resourceId: string;
    title: string;
    userNotes?: string;
  }) => {
    if (!session?.user?.id) return false;
    
    try {
      const response = await fetch('/api/user-data/resources', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(resourceData),
      });
      
      if (response.ok) {
        await fetchSavedResources(); // Refresh the list
        return true;
      }
    } catch (err) {
      console.error('Failed to save resource:', err);
    }
    
    return false;
  };

  const unsaveResource = async (resourceId: string) => {
    if (!session?.user?.id) return false;
    
    try {
      const response = await fetch(`/api/user-data/resources?resourceId=${resourceId}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        await fetchSavedResources(); // Refresh the list
        return true;
      }
    } catch (err) {
      console.error('Failed to unsave resource:', err);
    }
    
    return false;
  };

  useEffect(() => {
    if (session?.user?.id) {
      fetchSavedResources();
    }
  }, [session?.user?.id]);

  return {
    savedResources,
    loading,
    saveResource,
    unsaveResource,
    fetchSavedResources,
  };
}