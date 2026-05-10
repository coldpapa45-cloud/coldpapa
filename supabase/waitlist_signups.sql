create extension if not exists pgcrypto;

create table if not exists public.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  name text,
  trading_experience text check (trading_experience in ('Beginner', 'Active', 'Pro')),
  interested_assets text[] not null default '{}',
  source text not null default 'landing_page',
  referrer text,
  user_agent text,
  created_at timestamptz not null default now()
);

alter table public.waitlist_signups enable row level security;

create policy "Service role can manage waitlist signups"
on public.waitlist_signups
for all
using (auth.role() = 'service_role')
with check (auth.role() = 'service_role');
