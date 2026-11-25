"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TrainingSection from "@/components/TrainingSection";
import ObjectivesSection from "@/components/ObjectivesSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CvModal from "@/components/CvModal";
import ProjectModal, { ProjectData } from "@/components/ProjectModal";

export default function Home() {
  const [cvOpen, setCvOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-gray-200 selection:bg-lime-300 selection:text-neutral-950 overflow-x-hidden">
      {/* Navigation */}
      <Navbar onOpenCv={() => setCvOpen(true)} />

      {/* Main Sections */}
      <main className="flex-1 flex flex-col">
        {/* Hero */}
        <Hero />

        {/* About */}
        <AboutSection />

        {/* Credentials & Training */}
        <TrainingSection />

        {/* Certification Roadmap */}
        <ObjectivesSection />

        {/* Technical Stack */}
        <SkillsSection />

        {/* Featured Projects */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <CvModal isOpen={cvOpen} onClose={() => setCvOpen(false)} />
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
