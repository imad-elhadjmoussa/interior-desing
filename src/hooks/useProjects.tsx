import { useEffect, useState } from "react";
import type { Project } from "../types/projectType";
import { contentfulClient } from "../lib/contentful";


export function useProjects() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        async function fetchProjects() {
            try {
                setLoading(true);

                const response = await contentfulClient.getEntries({
                    content_type: import.meta.env.VITE_CONTENT_FULL_PROJECT_TYPE_ID,
                });

                const data: Project[] = response.items.map((item: any) => ({
                    id: item.sys.id,
                    title: item.fields.title,
                    category: item.fields.category,
                    year: item.fields.year,
                    description: item.fields.description,

                    image: item.fields.image
                        ? `https:${item.fields.image.fields.file.url}`
                        : "",

                    gallery: item.fields.gallery
                        ? item.fields.gallery.map(
                            (image: any) => `https:${image.fields.file.url}`
                        )
                        : [],
                }));

                setProjects(data);
            } catch (err) {
                setError(
                    err instanceof Error
                        ? err
                        : new Error("Failed to fetch projects")
                );
            } finally {
                setLoading(false);
            }
        }

        fetchProjects();
    }, []);

    return {
        projects,
        loading,
        error,
    };
}