import { supabase } from "./supabase";

export type Category = "business" | "product";

export interface ProjectDetail {
  id: string;
  category: Category;
  title: string;
  subtitle: string;
  description: string;
  contribution: string;
  techStack: string[];
  features: string[];
  detailUrl: string;
}

export async function getProjects(): Promise<ProjectDetail[]> {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("Failed to fetch projects from Supabase:", error);
    return [];
  }

  return (data ?? []).map((row) => ({
    id: row.id,
    category: row.category,
    title: row.title,
    subtitle: row.subtitle,
    description: row.description,
    contribution: row.contribution,
    techStack: row.tech_stack ?? [],
    features: row.features ?? [],
    detailUrl: row.detail_url ?? "",
  }));
}
