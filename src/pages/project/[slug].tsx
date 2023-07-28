"use client";

import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProjectDetails from '@/components/ProjectDetails';
import Head from 'next/head';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

export default function ProjectPage() {
  const [project, setProject] = useState<IProjectItem | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<IProjectItem[]>(`${window.location.origin}/api/project`);
        const foundProject = response.data.find((item: IProjectItem) => item.slug === slug);

        if (foundProject) {
          setIsLoading(false);
          setProject(foundProject);
        } else {
          // Handle the case where the project with the given slug doesn't exist.
          setIsLoading(false);
          setProject(null);
        }
      } catch (error) {
        alert('Error while fetching project details.');
        console.log(error);
      }
    }

    if (router.isReady && slug) {
      fetchData();
    }
  }, [router.isReady, slug]);

  console.log(project);

  if (!project && !isLoading) return (
    <>
      <div style={{ minHeight: '90vh', minWidth: '100%', display: "flex", alignItems: "center" }}>
        <p>Loading...</p>
      </div>
      <Footer />
    </>
  );

  if (!project) return (
    <>
      <div style={{ minHeight: '90vh', minWidth: '100%', display: "flex", alignItems: "center", justifyContent: 'center' }}>
        <p>Project Not Found</p>
      </div>
      <Footer />
    </>
  )

  return (
    <>
      <Head>
        <title>{project.name}</title>
        <meta name='description' content={project.description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <ProjectDetails project={project} loading={isLoading} />
    </>
  )
}
