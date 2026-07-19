-- Run this once in the Supabase SQL Editor (Dashboard -> SQL Editor -> New query)

create table if not exists projects (
  id text primary key,
  category text not null check (category in ('business', 'product')),
  title text not null,
  subtitle text not null,
  description text not null,
  contribution text not null,
  tech_stack text[] not null default '{}',
  features text[] not null default '{}',
  detail_url text,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

alter table projects enable row level security;

-- Anyone (using the publishable key) can read projects; only you (via the
-- Supabase dashboard, which uses your login and bypasses RLS) can write.
create policy "Public can read projects"
  on projects for select
  using (true);
