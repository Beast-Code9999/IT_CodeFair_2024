import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://xxnkabobexmawjsrohim.supabase.co'; // Supabase project URL
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4bmthYm9iZXhtYXdqc3JvaGltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA1Mjc3MDYsImV4cCI6MjA0NjEwMzcwNn0.y_5UhvdMuE-oGbpy9gu7xzDKTh_PNY83_7J2WsefY5M'; // Supabase project API key

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
