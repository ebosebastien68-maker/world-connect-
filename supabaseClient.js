// On importe la fonction 'createClient' depuis le CDN de Supabase
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// Les données de connexion pour votre projet "World Connect"
const SUPABASE_URL = 'https://nmqzrouoeopanloskkvi.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tcXpyb3VvZW9wYW5sb3Nra3ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5MjgxMDgsImV4cCI6MjA3NDUwNDEwOH0.uUQKccu3O5-S2vD7Kde00Zjs2UlT7J2IThjPeAX_Q_0';

// On crée le client Supabase et on l'exporte pour le rendre disponible aux autres fichiers
export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
