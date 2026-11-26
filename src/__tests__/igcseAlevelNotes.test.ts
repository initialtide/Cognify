import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { ALL_COURSES, getCourseById, resolveCourseVariant } from '../data/catalog';
import { NotesViewerPage } from '../pages/study/NotesViewerPage';
import { AppProvider } from '../store/AppContext';
import { CourseDefinition, DiagramKind } from '../types/curriculum';

const REQUIRED_IGCSE_COURSE_IDS = [
  'igcse-biology-cie',
  'igcse-chemistry-cie',
  'igcse-physics-cie',
  'igcse-maths-cie',
  'igcse-business-cie',
  'igcse-computer-science-cie',
  'igcse-economics-cie',
  'igcse-english-language-cie',
  'igcse-english-literature-cie',
  'igcse-geography-cie',
  'igcse-history-cie',
  'igcse-french-cie',
  'igcse-spanish-cie',
] as const;

const REQUIRED_ALEVEL_COURSE_IDS = [
  'a-level-biology-aqa',
  'a-level-chemistry-aqa',
  'a-level-physics-aqa',
  'a-level-maths-edexcel',
  'a-level-psychology-cie-core',
] as const;

const YOUTUBE_ID_REGEX = /^[A-Za-z0-9_-]{11}$/;

const VALID_DIAGRAM_KINDS = new Set<DiagramKind>([
  'eukaryotic-vs-prokaryotic',
  'root-hair-vs-palisade',
  'microscope',
  'atomic-structure',
  'circuit-series-parallel',
  'transverse-wave',
  'bacterial-cell',
  'virus-particle',
  'enzyme-lock-key',
  'osmosis-membrane',
  'mitosis-cycle',
  'ionic-covalent-bonding',
  'exothermic-endothermic',
  'reflex-arc',
  'forces-free-body',
  'multi-store-memory',
  'synaptic-transmission',
  'photosynthesis-chloroplast',
  'quadratic-graph',
  'right-triangle-trig',
  'supply-demand-equilibrium',
  'production-possibility-curve',
  'cpu-fde-architecture',
  'logic-gates-truth',
  'tectonic-plate-margins',
  'break-even-chart',
]);

function assertCourseHasCompleteNotes(course: CourseDefinition) {
  const allSubtopics = course.topics.flatMap((t) => t.subtopics);
  expect(allSubtopics.length, `${course.id} should define subtopics`).toBeGreaterThan(0);

  for (const sub of allSubtopics) {
    expect(sub.hasDeepContent, `${course.id}/${sub.id} should have hasDeepContent: true`).toBe(true);

    const lesson = course.notes[sub.id];
    expect(lesson, `Missing course.notes['${sub.id}'] in ${course.id}`).toBeDefined();
    if (!lesson) continue;

    expect(lesson.subtopicId, `${course.id}/${sub.id} subtopicId mismatch`).toBe(sub.id);
    expect(lesson.cards.length, `${course.id}/${sub.id} should have >= 2 note cards`).toBeGreaterThanOrEqual(2);

    const cardIds = new Set<string>();
    for (const card of lesson.cards) {
      expect(card.title.trim().length, `${course.id}/${sub.id}/${card.id} missing title`).toBeGreaterThan(0);
      cardIds.add(card.id);

      const subsectionBullets =
        card.subsections?.reduce((sum, s) => sum + s.bullets.length, 0) ?? 0;
      expect(
        card.bullets.length + subsectionBullets,
        `${course.id}/${sub.id}/${card.id} has no bullet content`
      ).toBeGreaterThan(0);

      if (card.diagram) {
        expect(
          VALID_DIAGRAM_KINDS.has(card.diagram),
          `${course.id}/${sub.id}/${card.id} uses unsupported diagram '${card.diagram}'`
        ).toBe(true);
      }
      for (const subsection of card.subsections ?? []) {
        if (subsection.diagram) {
          expect(
            VALID_DIAGRAM_KINDS.has(subsection.diagram),
            `${course.id}/${sub.id}/${card.id} subsection uses unsupported diagram '${subsection.diagram}'`
          ).toBe(true);
        }
      }
    }

    expect(
      lesson.checklistPoints.length,
      `${course.id}/${sub.id} should have non-empty checklistPoints`
    ).toBeGreaterThan(0);
    for (const point of lesson.checklistPoints) {
      expect(point.trim().length, `${course.id}/${sub.id} empty checklist point`).toBeGreaterThan(0);
    }

    expect(
      lesson.youtubeId,
      `${course.id}/${sub.id} youtubeId '${lesson.youtubeId}' must be 11 valid characters`
    ).toMatch(YOUTUBE_ID_REGEX);

    expect(
      lesson.timestamps.length,
      `${course.id}/${sub.id} should have >= 3 timestamps`
    ).toBeGreaterThanOrEqual(3);

    for (let i = 0; i < lesson.timestamps.length; i++) {
      const ts = lesson.timestamps[i];
      expect(ts.time.trim().length, `${course.id}/${sub.id} timestamp[${i}] missing time`).toBeGreaterThan(0);
      expect(ts.label.trim().length, `${course.id}/${sub.id} timestamp[${i}] missing label`).toBeGreaterThan(0);
      expect(ts.seconds, `${course.id}/${sub.id} timestamp[${i}] seconds must be >= 0`).toBeGreaterThanOrEqual(0);
      if (i > 0) {
        expect(
          ts.seconds,
          `${course.id}/${sub.id} timestamps must have ascending seconds (${lesson.timestamps[i - 1].seconds} -> ${ts.seconds})`
        ).toBeGreaterThan(lesson.timestamps[i - 1].seconds);
      }
      if (ts.cardId) {
        expect(
          cardIds.has(ts.cardId),
          `${course.id}/${sub.id} timestamp[${i}] references unknown cardId '${ts.cardId}'`
        ).toBe(true);
      }
    }
  }
}

describe('IGCSE & A-Level Notes, Videos & Catalog Coverage', () => {
  it('registers all required IGCSE and A-Level courses in ALL_COURSES', () => {
    for (const id of REQUIRED_IGCSE_COURSE_IDS) {
      const course = ALL_COURSES.find((c) => c.id === id);
      expect(course, `Required IGCSE course '${id}' missing from ALL_COURSES`).toBeDefined();
      expect(course?.qualification).toBe('igcse');
      expect(course?.pastPapersOnly).not.toBe(true);
      const officialPdfs = (course?.pastPapers ?? []).filter((p) =>
        Boolean(p.questionPaperUrl?.startsWith('https://www.cambridgeinternational.org/Images/'))
      );
      expect(
        officialPdfs.length,
        `${id} should include official Cambridge International PDF past/specimen papers`
      ).toBeGreaterThanOrEqual(4);
    }

    for (const id of REQUIRED_ALEVEL_COURSE_IDS) {
      const course = ALL_COURSES.find((c) => c.id === id);
      expect(course, `Required A-Level course '${id}' missing from ALL_COURSES`).toBeDefined();
      expect(course?.qualification).toBe('a-level');
      expect(course?.pastPapersOnly).not.toBe(true);
      const officialPdfs = (course?.pastPapers ?? []).filter((p) =>
        Boolean(p.questionPaperUrl?.startsWith('https://www.cambridgeinternational.org/Images/'))
      );
      expect(
        officialPdfs.length,
        `${id} should include official Cambridge International PDF past/specimen papers`
      ).toBeGreaterThanOrEqual(6);
    }
  });

  it('has complete, rich notes, valid YouTube IDs, and >=3 ascending timestamps for EVERY IGCSE subtopic', () => {
    const igcseCourses = ALL_COURSES.filter(
      (c) => c.qualification === 'igcse' && !c.pastPapersOnly
    );
    expect(igcseCourses.length).toBeGreaterThanOrEqual(REQUIRED_IGCSE_COURSE_IDS.length);

    for (const course of igcseCourses) {
      assertCourseHasCompleteNotes(course);
    }
  });

  it('has complete, rich notes, valid YouTube IDs, and >=3 ascending timestamps for EVERY A-Level subtopic', () => {
    const alevelCourses = ALL_COURSES.filter(
      (c) => c.qualification === 'a-level' && !c.pastPapersOnly
    );
    expect(alevelCourses.length).toBeGreaterThanOrEqual(REQUIRED_ALEVEL_COURSE_IDS.length);

    for (const course of alevelCourses) {
      assertCourseHasCompleteNotes(course);
    }
  });

  it('has zero missing subtopic notes across GCSE courses with topics too', () => {
    const gcseCourses = ALL_COURSES.filter(
      (c) => c.qualification === 'gcse' && !c.pastPapersOnly && c.topics.length > 0
    );
    expect(gcseCourses.length).toBeGreaterThan(0);

    for (const course of gcseCourses) {
      assertCourseHasCompleteNotes(course);
    }
  });

  it('preserves IGCSE and A-Level content bundles in resolveCourseVariant and getCourseById', () => {
    const igBio = resolveCourseVariant('igcse', 'biology', 'oxford-aqa', 'Extended');
    expect(igBio.qualification).toBe('igcse');
    expect(igBio.topics[0]?.subtopics[0]?.id).toBe('igbio-1-1');
    expect(getCourseById(igBio.id)?.topics[0]?.subtopics[0]?.id).toBe('igbio-1-1');

    const alPsych = resolveCourseVariant('a-level', 'psychology', 'edexcel', 'A-Level');
    expect(alPsych.qualification).toBe('a-level');
    expect(alPsych.topics[0]?.subtopics[0]?.id.startsWith('al-psy-')).toBe(true);
    expect(getCourseById(alPsych.id)?.topics[0]?.subtopics[0]?.id.startsWith('al-psy-')).toBe(true);

    const alChem = resolveCourseVariant('a-level', 'chemistry', 'ocr-a', 'A-Level');
    expect(alChem.qualification).toBe('a-level');
    expect(alChem.topics[0]?.subtopics[0]?.id.startsWith('al-chem-')).toBe(true);
  });

  it('renders A-Level Psychology notes with embedded video and interactive timestamps', () => {
    const routes = React.createElement(
      Routes,
      null,
      React.createElement(Route, {
        path: '/course/:courseId/notes',
        element: React.createElement(NotesViewerPage),
      }),
      React.createElement(Route, {
        path: '/course/:courseId/notes/:subtopicId',
        element: React.createElement(NotesViewerPage),
      })
    );

    const { container } = render(
      React.createElement(
        AppProvider,
        null,
        React.createElement(
          MemoryRouter,
          { initialEntries: ['/course/a-level-psychology-cie-core/notes'] },
          routes
        )
      )
    );

    // Embedded YouTube iframe present
    const iframe = container.querySelector('iframe.cognito-video-iframe');
    expect(iframe).toBeInTheDocument();
    expect(iframe?.getAttribute('src')).toContain('https://www.youtube.com/embed/');

    // Show timestamps toggle switch is ON by default and clickable timestamps highlight on click
    const toggleSwitch = screen.getByRole('switch', { name: /Show timestamps/i });
    expect(toggleSwitch).toHaveAttribute('aria-checked', 'true');

    const rows = container.querySelectorAll('.cognito-timestamp-row');
    expect(rows.length).toBeGreaterThanOrEqual(3);

    const secondSeekBtn = rows[1].querySelector('button.cognito-timestamp-seek') as HTMLButtonElement;
    expect(secondSeekBtn).toBeTruthy();
    fireEvent.click(secondSeekBtn);
    expect(rows[1]).toHaveAttribute('data-active', 'true');

    // Toggle timestamps off and back on cleanly
    fireEvent.click(toggleSwitch);
    expect(toggleSwitch).toHaveAttribute('aria-checked', 'false');
    expect(container.querySelectorAll('.cognito-timestamp-row').length).toBe(0);
    fireEvent.click(toggleSwitch);
    expect(toggleSwitch).toHaveAttribute('aria-checked', 'true');
    expect(container.querySelectorAll('.cognito-timestamp-row').length).toBeGreaterThanOrEqual(3);
  });

  it('renders IGCSE Biology 1.2 Variety of Living Organisms matching Cognito layout, diagrams, and pills', () => {
    const routes = React.createElement(
      Routes,
      null,
      React.createElement(Route, {
        path: '/course/:courseId/notes/:subtopicId',
        element: React.createElement(NotesViewerPage),
      })
    );

    const { container } = render(
      React.createElement(
        AppProvider,
        null,
        React.createElement(
          MemoryRouter,
          { initialEntries: ['/course/igcse-biology-cie/notes/igbio-1-2'] },
          routes
        )
      )
    );

    expect(screen.getByRole('heading', { name: /1\.2 - Variety of Living Organisms/i })).toBeInTheDocument();
    expect(screen.getAllByText(/Outside your course/i).length).toBe(3);
    expect(screen.getByText(/COMMON MISTAKE/i)).toBeInTheDocument();
    expect(screen.getByText(/KEY TERMS/i)).toBeInTheDocument();
    expect(screen.getByText(/END OF NOTES/i)).toBeInTheDocument();
    expect(screen.getByText(/1\.3 - Species & Naming/i)).toBeInTheDocument();

    // Pastel inline SVG diagrams (bacterial-cell, virus-particle, eukaryotic-vs-prokaryotic)
    const diagrams = container.querySelectorAll('.cognito-diagram-inline svg, svg');
    expect(diagrams.length).toBeGreaterThanOrEqual(3);

    // Interactive glossary pill
    const parasitePill = screen.getByRole('button', { name: /^parasite$/i });
    fireEvent.click(parasitePill);
    expect(screen.getByText(/obtaining resources at the host/i)).toBeInTheDocument();

    // Key terms recall hint disappears as soon as one definition is unblurred
    expect(screen.getByText(/TRY TO RECALL EACH DEFINITION, THEN TAP IT TO CHECK/i)).toBeInTheDocument();
    const firstKeyTermRow = container.querySelector('.key-terms-row') as HTMLElement;
    expect(firstKeyTermRow).toBeTruthy();
    fireEvent.click(firstKeyTermRow);
    expect(screen.queryByText(/TRY TO RECALL EACH DEFINITION, THEN TAP IT TO CHECK/i)).not.toBeInTheDocument();
  });
});
