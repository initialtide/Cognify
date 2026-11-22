import React from 'react';
import { SubjectIconId } from '../../types/curriculum';

const BASE = import.meta.env.BASE_URL;

const SUBJECT_BADGE_SRC: Record<SubjectIconId, string> = {
  biology: `${BASE}assets/cognito/subject-badges/biology.svg`,
  chemistry: `${BASE}assets/cognito/subject-badges/chemistry.svg`,
  physics: `${BASE}assets/cognito/subject-badges/physics.svg`,
  maths: `${BASE}assets/cognito/subject-badges/maths.svg`,
  'combined-science': `${BASE}assets/cognito/subject-badges/envscience.svg`,
  business: `${BASE}assets/cognito/subject-badges/business.svg`,
  'computer-science': `${BASE}assets/cognito/subject-badges/computer-science.svg`,
  economics: `${BASE}assets/cognito/subject-badges/economics.svg`,
  'english-language': `${BASE}assets/cognito/subject-badges/english-language.svg`,
  'english-literature': `${BASE}assets/cognito/subject-badges/english-literature.svg`,
  psychology: `${BASE}assets/cognito/subject-badges/psychology.svg`,
  geography: `${BASE}assets/cognito/subject-badges/geography.svg`,
  history: `${BASE}assets/cognito/subject-badges/history.svg`,
  french: `${BASE}assets/cognito/subject-badges/french.svg`,
  german: `${BASE}assets/cognito/subject-badges/german.svg`,
  spanish: `${BASE}assets/cognito/subject-badges/spanish.svg`,
  rs: `${BASE}assets/cognito/subject-badges/rs.svg`,
  languages: `${BASE}assets/cognito/subject-badges/french.svg`,
  sociology: `${BASE}assets/cognito/subject-badges/sociology.svg`,
  'further-maths': `${BASE}assets/cognito/subject-badges/maths.svg`,
  pe: `${BASE}assets/cognito/subject-badges/pe.svg`,
  'design-technology': `${BASE}assets/cognito/subject-badges/design-technology.svg`,
  'food-nutrition': `${BASE}assets/cognito/subject-badges/food-nutrition.svg`,
};

export const SubjectIcon: React.FC<{
  icon: SubjectIconId;
  size?: number;
}> = ({ icon, size = 44 }) => {
  return (
    <img
      src={SUBJECT_BADGE_SRC[icon] ?? SUBJECT_BADGE_SRC.biology}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      draggable={false}
      style={{
        width: size,
        height: size,
        objectFit: 'contain',
        display: 'block',
        flexShrink: 0,
      }}
    />
  );
};
