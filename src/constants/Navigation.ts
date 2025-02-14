export const NAVIGATION_ITEMS = [
  {
    label: 'Events',
    path: '/events',
    permission: 'view_events',
  },
  {
    label: 'My Tickets',
    path: '/my-tickets',
    permission: 'view_my-tickets',
  },
  {
    label: 'About Projects',
    path: '/about-projects',
    permission: 'view_about-projects',
  },
] as const;
