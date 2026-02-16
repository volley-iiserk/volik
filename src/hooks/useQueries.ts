import { useQuery } from '@tanstack/react-query';
import { supabase } from '../supabaseClient';

// --- Types (Matching your Database) ---

export type Event = {
  id: string;
  title: string;
  description: string | null;
  date: string;
  location: string | null;
  image_url: string | null;
  status: 'upcoming' | 'current' | 'past';
};

export type Person = {
  id: string;
  name: string;
  role: string | null;
  batch: string | null;
  is_alumni: boolean;
  image_url: string | null;
};

export type Announcement = {
  id: string;
  title: string;
  content: string;
  is_pinned: boolean;
  created_at: string;
};

export type GalleryItem = {
  id: string;
  caption: string | null;
  image_url: string;
};

// --- Fetch Functions ---

const fetchEvents = async (): Promise<Event[]> => {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .order('date', { ascending: true });

  if (error) throw new Error(error.message);
  return data || [];
};

const fetchPeople = async (): Promise<Person[]> => {
  const { data, error } = await supabase
    .from('people')
    .select('*')
    .order('name', { ascending: true });

  if (error) throw new Error(error.message);
  return data || [];
};

const fetchAnnouncements = async (): Promise<Announcement[]> => {
  const { data, error } = await supabase
    .from('announcements')
    .select('*')
    .order('is_pinned', { ascending: false }) // Pinned items first
    .order('created_at', { ascending: false }); // Then newest first

  if (error) throw new Error(error.message);
  return data || [];
};

const fetchGallery = async (): Promise<GalleryItem[]> => {
  const { data, error } = await supabase
    .from('gallery')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw new Error(error.message);
  return data || [];
};

// --- Exported Hooks ---

export const useEvents = () => {
  return useQuery({
    queryKey: ['events'],
    queryFn: fetchEvents,
  });
};

export const usePeople = () => {
  return useQuery({
    queryKey: ['people'],
    queryFn: fetchPeople,
  });
};

export const useAnnouncements = () => {
  return useQuery({
    queryKey: ['announcements'],
    queryFn: fetchAnnouncements,
  });
};

export const useGallery = () => {
  return useQuery({
    queryKey: ['gallery'],
    queryFn: fetchGallery,
  });
};
