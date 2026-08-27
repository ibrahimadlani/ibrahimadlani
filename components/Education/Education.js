"use client";

import { useTheme } from "next-themes";

import { education } from "@/data/education";
import { resumeHref } from "@/lib/resume";
import ArrowLink from "@/components/ui/ArrowLink";
import Section from "@/components/ui/Section";
import EducationItem from "./EducationItem";

/**
 * Academic background section, plus a link to the résumé matching the active
 * theme.
 *
 * Client component only because of that theme-dependent link.
 *
 * @returns {JSX.Element}
 */
const Education = () => {
  const { resolvedTheme } = useTheme();

  return (
    <Section id="education" title="Education" ariaLabel="Education">
      <ol className="group/list">
        {education.map((item) => (
          <EducationItem key={`${item.school}-${item.date}`} {...item} />
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

export default Education;
