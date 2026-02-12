
import React, { Suspense, lazy } from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import ParticlesBackground from "../components/ParticlesBackground/ParticlesBackground.jsx";
import Footer from '../components/Footer/Footer.jsx';
import Loader from '../components/Loader/Loader.jsx';

const Hero = lazy(() => import("../components/Hero/Hero.jsx"));
const AboutSection = lazy(() => import("../components/About/AboutSection.jsx"));
const Skills = lazy(() => import("../components/Skills/Skills.jsx"));
const Projects = lazy(() => import("../components/Projects/Projects.jsx"));
const Contact = lazy(() => import("../components/Contact/Contact.jsx"));
const Timeline = lazy(() => import("../components/Timeline/Timeline.jsx"));
const Courses = lazy(() => import("../components/Courses/Courses.jsx"));

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="fixed inset-0 -z-10">
                <ParticlesBackground />
            </div>
            <Suspense fallback={<Loader />}>
                <Hero />
                <AboutSection />
                <Timeline />
                <Courses />
                <Skills />
                <Projects />
                <Contact />
            </Suspense>

            <Footer />
        </>
    );
}
