"use client";

import { useTheme } from "next-themes";

import { experiences } from "@/data/experience";
import { resumeHref } from "@/lib/resume";
import ArrowLink from "@/components/ui/ArrowLink";
import Section from "@/components/ui/Section";
import ExperienceItem from "./ExperienceItem";

/**
 * Work experience section, plus a link to the résumé matching the active theme.
 *
 * Client component only because of that theme-dependent link.
 *
 * @returns {JSX.Element}
 */
const Experience = () => {
  const { resolvedTheme } = useTheme();

  return (
    <Section id="experience" title="Experience" ariaLabel="Work experience">
      <ol className="group/list">
        {experiences.map((experience) => (
          <ExperienceItem
            key={`${experience.company}-${experience.date}`}
            {...experience}
          />
        ))}
      </ol>
      <ArrowLink
        href={resumeHref(resolvedTheme)}
        lead="View Full"
        tail="Résumé"
        ariaLabel="View Full Résumé (opens in a new tab)"
        external
      />
    </Section>
  );
};

export default Experience;
