"use client";
import { useState, useEffect } from 'react';

export const UseActiveSection = () => {
    const [activeSection, setActiveSection] = useState('main');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['main', 'menu', 'about', 'contact'];
            const navHeight = 80;

            let currentSection = 'main';

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const elementTop = rect.top + window.pageYOffset;
                    const scrollPosition = window.pageYOffset + navHeight + 100; 

                    if (scrollPosition >= elementTop) {
                        currentSection = sectionId;
                    }
                }
            }

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); 

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return activeSection;
};