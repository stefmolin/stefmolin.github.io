import type VolunteerExperience from '../interfaces/volunteer';

const VOLUNTEER_EXPERIENCES: VolunteerExperience[] = [
  {
    date: '2026-07-15',
    title: 'On-site volunteer at EuroPython 2026',
    description: 'Room manager work throughout the conference',
    where: 'Kraków, Poland',
    duration: 3,
  },
  {
    date: '2026-06-06',
    title: 'Proposal reviewer for PyConES 2026',
    description: 'Reviewed talk and workshop proposals in English and Spanish',
    duration: 2,
  },
  {
    date: '2026-05-18',
    title: 'Proposal reviewer for PyCon Greece 2026',
    description: 'Reviewed talk and workshop proposals',
    duration: 2,
  },
  {
    date: '2026-05-13',
    title: 'On-site volunteer at PyCon US 2026',
    description: 'Green room support and PSF booth work throughout the conference',
    where: 'Long Beach, USA',
    duration: 8,
  },
  {
    date: '2026-05-10',
    title: 'PyCon Portugal 2026 program committee',
    description: 'Reviewed proposals and helped select the final schedule',
    duration: 6,
  },
  {
    date: '2026-03-18',
    title: 'Proposal reviewer for SciPy 2026',
    description: 'Reviewed talk and tutorial proposals',
    duration: 2,
  },
  {
    date: '2025-10-28',
    title: 'PyLadiesCon 2025 program committee',
    description: 'Reviewed and corrected captioning for pre-recorded English and Spanish talks',
    link: {
      linkClass: 'external',
      resourceLink: 'https://2025.conference.pyladies.com/en/volunteers/',
      text: 'Visit website',
    },
    duration: 20,
  },
  {
    date: '2025-04-16',
    title: 'PyCon Portugal 2025 program committee',
    description: 'Reviewed proposals and helped select the final schedule',
    duration: 3,
  },
  {
    date: '2025-03-28',
    title: 'Proposal reviewer for EuroSciPy 2025',
    description: 'Reviewed talk and tutorial proposals',
    duration: 2,
  },
  {
    date: '2024-06-14',
    title: 'PyCon Portugal 2024 program committee',
    description:
      'Coordinated the proposal review and selection phase as team leader, in addition to reviewing proposals myself',
    link: {
      linkClass: 'internal',
      resourceLink: {
        contentClass: 'blog',
        slug: '/blog/updates/2024/conference-program-committee/',
      },
      text: 'Read blog post',
    },
    duration: 10,
  },
];

export default VOLUNTEER_EXPERIENCES;
