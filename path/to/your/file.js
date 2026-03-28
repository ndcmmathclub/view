const EVENTS = [
  {
    title: 'Math Workshop',
    date: '2026-04-05',
    location: 'Room 101',
    link: { url: 'https://example.com/event1', fallback: 'https://fallback.com/event1' },
  },  // <-- Added comma
  {
    title: 'Calculus Exam',
    date: '2026-04-15',
    location: 'Room 102',
    link: { url: 'https://example.com/event2', fallback: 'https://fallback.com/event2' },
  },  // Add comma if needed
  // More events...
];

const RESOURCES = {
  book: { url: 'https://example.com/book', fallback: 'https://fallback.com/book' },
  website: { url: 'https://example.com/website', fallback: 'https://fallback.com/website' },
  // More resources...
};
