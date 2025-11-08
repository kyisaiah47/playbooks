export interface CalendarEvent {
  id: string;
  title: string;
  description?: string | null;
  all_day?: boolean | null;
  start_time: string;
  end_time?: string | null;
  user_id: string;
  track_id?: string | null;
  created_at?: string;
  updated_at?: string;
}
