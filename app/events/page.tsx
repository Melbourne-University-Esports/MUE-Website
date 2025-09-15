import React, { Suspense } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { fetchEventsInfo } from '../components/api/fetchEventsInfo';
import { fetchMostRecentEventsNotionUpdate } from '../components/api/fetchMostRecentEventsNotionUpdate';
import EventsPageContent from '../components/events/EventsPageContent';
import WeeklyOnlineEvents from '../components/events/WeeklyOnlineEvents';

export const metadata = {
  title: 'Events | MUE',
  description: 'Check out MUE\'s upcoming and past events!',
  openGraph: {
    title: 'Events | MUE',
    description: 'Check out MUE\'s upcoming and past events!',
    url: '/events',
    siteName: 'Melbourne University Esports',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Events | MUE",
    description: 'Check out MUE\'s upcoming and past events!',
  },
};

export const revalidate = 0;

const EventsPage: React.FC = async () => {
  const data = await fetchEventsInfo();
  const now = new Date();

  const mostRecentUpdate = await fetchMostRecentEventsNotionUpdate();
  const lastUpdatedAt = new Date(mostRecentUpdate).toLocaleString('en-GB', {
    timeZone: 'Australia/Sydney',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });

  const upcomingEvents = data.filter(event => new Date(event.endDate ?? '') >= now);
  const pastEvents = data.filter(event => new Date(event.endDate ?? '') < now).sort((a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime()).slice(0, 3);


  return (
    <>
      <Navbar />
      <EventsPageContent
        upcomingEvents={upcomingEvents}
        pastEvents={pastEvents}
        lastUpdatedAt={lastUpdatedAt}
      />
      <WeeklyOnlineEvents />
      <Footer />
    </>
  );
};

export default EventsPage;
