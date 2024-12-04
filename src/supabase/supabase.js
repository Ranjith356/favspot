/* eslint-disable no-undef */
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://gnslfybjowmccafsakws.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imduc2xmeWJqb3dtY2NhZnNha3dzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQzMjMwODIsImV4cCI6MjAzOTg5OTA4Mn0.2wHZ7ZpRfP_NbszRE99pK7NT0OUlu9wRg2OjuWPiOqo"
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase