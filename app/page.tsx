import HomeClient from "./HomeClient";
import { getProjects } from "./lib/projects";

export const revalidate = 60;

export default async function Home() {
  const projects = await getProjects();
  return <HomeClient projects={projects} />;
}
