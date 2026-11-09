import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Files starting with "_" are ignored, so _example.md files never show on the site.
const md = (dir: string) => glob({ pattern: '**/[^_]*.md', base: `./src/content/${dir}` });

const projects = defineCollection({
  loader: md('projects'),
  schema: z.object({
    code: z.string(),             // ERC, LUN, MCX
    name: z.string(),
    summary: z.string(),          // one line, shown under the name
    organiser: z.string(),
    location: z.string(),
    website: z.string().url(),
    disciplines: z.array(z.string()),
    stats: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    image: z.string().optional(),       // path under public/, e.g. /images/rf-01-cad.jpg
    imageCaption: z.string().optional(),
    order: z.number(),
  }),
});

const team = defineCollection({
  loader: md('team'),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    project: z.enum(['ERC', 'LUN', 'MCX', 'GEN']),
    course: z.string().optional(),
    photo: z.string().optional(),       // path under public/, e.g. /images/team/jane.jpg
    linkedin: z.string().url().optional(),
    order: z.number().default(100),
  }),
});

const sponsors = defineCollection({
  loader: md('sponsors'),
  schema: z.object({
    name: z.string(),
    tier: z.string(),                   // e.g. FOUNDING SPONSOR
    website: z.string().url().optional(),
    logo: z.string().optional(),        // path under public/, white or single-colour logo
    order: z.number().default(100),
  }),
});

const sections = defineCollection({
  loader: md('sections'),
  schema: z.object({ title: z.string() }),
});

export const collections = { projects, team, sponsors, sections };
