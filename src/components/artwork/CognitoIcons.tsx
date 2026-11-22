import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
}

export const NavXpStarIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <path
      d="M10.85 3.57Q12.00 1.50 13.15 3.57L14.95 6.83Q15.59 7.96 16.86 8.21L20.52 8.93Q22.84 9.38 21.23 11.11L18.69 13.83Q17.80 14.79 17.96 16.08L18.41 19.77Q18.70 22.12 16.56 21.12L13.18 19.55Q12.00 19.00 10.82 19.55L7.44 21.12Q5.30 22.12 5.59 19.77L6.04 16.08Q6.20 14.79 5.31 13.83L2.77 11.11Q1.16 9.38 3.48 8.93L7.14 8.21Q8.41 7.96 9.05 6.83Z"
      fill="#86caf9"
      stroke="#68b3ec"
    />
    <path
      d="M11.44 8.52Q12.00 7.50 12.56 8.52L13.45 10.11Q13.76 10.67 14.39 10.80L16.19 11.15Q17.33 11.37 16.53 12.22L15.29 13.56Q14.85 14.03 14.93 14.66L15.15 16.48Q15.29 17.63 14.24 17.14L12.58 16.37Q12.00 16.10 11.42 16.37L9.76 17.14Q8.71 17.63 8.85 16.48L9.07 14.66Q9.15 14.03 8.71 13.56L7.47 12.22Q6.67 11.37 7.81 11.15L9.61 10.80Q10.24 10.67 10.55 10.11Z"
      fill="#cde9fd"
    />
  </svg>
);

export const NavActivityBarsIcon: React.FC<IconProps> = ({ size = 22, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <g>
      <rect x="2.75" y="13" width="5.5" height="8.25" rx="1.6" fill="#8ae8c9" stroke="#6bd0ae" />
      <rect x="4.4" y="14.7" width="1.9" height="4.6" rx=".95" fill="#d7f7ec" />
    </g>
    <g>
      <rect x="9.25" y="8" width="5.5" height="13.25" rx="1.6" fill="#8ae8c9" stroke="#6bd0ae" />
      <rect x="10.9" y="9.7" width="1.9" height="9.6" rx=".95" fill="#d7f7ec" />
    </g>
    <g>
      <rect x="15.75" y="2.75" width="5.5" height="18.5" rx="1.6" fill="#8ae8c9" stroke="#6bd0ae" />
      <rect x="17.4" y="4.45" width="1.9" height="14.85" rx=".95" fill="#d7f7ec" />
    </g>
  </svg>
);

export const NavStreakFlameIcon: React.FC<IconProps> = ({ size = 22, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <path
      d="M14 2.8C13.5 2.3 12.6 2.5 12.5 3.3C12.2 6 10.9 7.6 9.7 8.8C9.4 7.9 8.8 7.2 8 6.8C7.4 6.5 6.7 6.9 6.7 7.6C6.7 9.5 4.75 11.4 4.75 14.9C4.75 18.9 7.9 21.25 12 21.25C16.1 21.25 19.25 18.7 19.25 14.9C19.25 9.9 16.6 5.2 14 2.8Z"
      fill="#ffc94c"
      stroke="#ff931f"
    />
    <path
      d="M12.3 11C11.9 10.6 11.2 10.8 11.1 11.4C10.9 12.7 10.2 13.4 9.4 14.2C8.6 15 8 15.8 8 17C8 18.9 9.7 20 12 20C14.3 20 16 18.8 16 16.9C16 14.6 14.1 12.6 12.3 11Z"
      fill="#ffe173"
    />
  </svg>
);

export const StreakFlameTickIcon: React.FC<IconProps> = ({ size = 34, className }) => (
  <img
    src={`${import.meta.env.BASE_URL}assets/cognito/streak-flame-tick.png`}
    alt=""
    aria-hidden="true"
    width={size}
    height={Math.round(size * (240 / 229))}
    draggable={false}
    className={className}
    style={{ width: size, height: 'auto', display: 'block', flexShrink: 0 }}
  />
);

export const CognitoMoonStarIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <g>
      <path d="M18 5h4" />
      <path d="M20 3v4" />
    </g>
    <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
  </svg>
);

export const CognitoPencilIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <path d="M13 20.5h7.5" />
    <g transform="rotate(45 12 12)">
      <path d="M9.6 3.6a2.4 2.4 0 0 1 4.8 0V16L12 19.8 9.6 16z" />
      <path d="M9.6 6.8h4.8" />
    </g>
  </svg>
);

export const CognitoHouseIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <path d="M5 10v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9" />
    <path d="M10 21v-5a2 2 0 0 1 4 0v5" />
    <g>
      <path d="M3 11.2 12 3.5l9 7.7" />
      <path d="M16 6.9V4h3v5.5" />
    </g>
  </svg>
);

export const CognitoCogIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <g>
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </g>
  </svg>
);

export const CognitoActivityChartIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <path d="M3 3v16a2 2 0 0 0 2 2h16" />
    <path d="M8 17v-3" />
    <path d="M13 17V5" />
    <path d="M18 17V9" />
  </svg>
);

export const CognitoServiceBellIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <path d="M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z" />
    <g>
      <path d="M20 16a8 8 0 1 0-16 0" />
      <g>
        <path d="M10 4h4" />
        <path d="M12 4v4" />
      </g>
    </g>
  </svg>
);

export const CognitoMegaphoneIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <g>
      <path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
      <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14" />
      <path d="M8 6v8" />
    </g>
  </svg>
);

export const CognitoRosetteIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <g>
      <path d="M8.4 13.8 7.2 21.6l4.8-2.7 4.8 2.7-1.2-7.8" />
      <circle cx="12" cy="8.8" r="6.2" />
    </g>
  </svg>
);
