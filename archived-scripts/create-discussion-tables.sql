-- Clarity Release Database Schema
-- Tables for guide discussions, requests, and weekly digests

-- Guide Comments (Discussion System)
create table if not exists guide_comments (
  id uuid primary key default gen_random_uuid(),
  guide_slug text not null,
  user_handle text,
  body text not null,
  parent_id uuid references guide_comments on delete cascade,
  upvotes int default 0,
  is_flagged boolean default false,
  is_expert boolean default false,
  created_at timestamptz default now()
);

create index if not exists guide_comments_guide_created
on guide_comments (guide_slug, created_at desc);

create index if not exists guide_comments_parent
on guide_comments (parent_id);

-- Guide Requests (Request a Guide feature)
create table if not exists guide_requests (
  id uuid primary key default gen_random_uuid(),
  topic text not null,
  category text,
  votes int default 1,
  email text,
  status text default 'queued', -- queued | processing | ready | published
  created_at timestamptz default now()
);

create index if not exists guide_requests_status
on guide_requests (status, votes desc);

-- Weekly Digests
create table if not exists weekly_digests (
  id uuid primary key default gen_random_uuid(),
  week_start date not null,
  html text not null,
  created_at timestamptz default now()
);

create index if not exists weekly_digests_week
on weekly_digests (week_start desc);
