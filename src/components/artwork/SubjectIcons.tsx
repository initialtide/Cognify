import React from 'react';
import { SubjectIconId } from '../../types/curriculum';

const SUBJECT_BADGE_SRC: Record<SubjectIconId, string> = {
  biology: '/assets/cognito/subject-badges/biology.svg',
  chemistry: '/assets/cognito/subject-badges/chemistry.svg',
  physics: '/assets/cognito/subject-badges/physics.svg',
  maths: '/assets/cognito/subject-badges/maths.svg',
  'combined-science': '/assets/cognito/subject-badges/envscience.svg',
  business: '/assets/cognito/subject-badges/business.svg',
  'computer-science': '/assets/cognito/subject-badges/computer-science.svg',
  economics: '/assets/cognito/subject-badges/economics.svg',
  'english-language': '/assets/cognito/subject-badges/english-language.svg',
  'english-literature': '/assets/cognito/subject-badges/english-literature.svg',
  psychology: '/assets/cognito/subject-badges/psychology.svg',
  geography: '/assets/cognito/subject-badges/geography.svg',
  history: '/assets/cognito/subject-badges/history.svg',
  french: '/assets/cognito/subject-badges/french.svg',
  german: '/assets/cognito/subject-badges/german.svg',
  spanish: '/assets/cognito/subject-badges/spanish.svg',
  rs: '/assets/cognito/subject-badges/rs.svg',
  languages: '/assets/cognito/subject-badges/french.svg',
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
