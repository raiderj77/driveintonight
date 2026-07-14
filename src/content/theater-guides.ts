export type TheaterGuide = {
  reviewedAt: string;
  seoDescription: string;
  summary: string;
  editorialNote: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
  };
  quickFacts: Array<{ label: string; value: string }>;
  sections: Array<{ heading: string; paragraphs: string[] }>;
  visitChecklist: string[];
  faqs: Array<{ question: string; answer: string }>;
  sources: Array<{ label: string; url: string; note: string }>;
  limitations: string;
};

export const theaterGuides: Record<string, TheaterGuide> = {
  'pennsylvania/shankweilers-drive-in': {
    reviewedAt: '2026-07-13',
    seoDescription:
      "Plan a first visit to Shankweiler's Drive-In in Orefield, Pennsylvania. Review current admission guidance, FM audio, arrival tips, theater rules, history, and official sources.",
    summary:
      "Shankweiler's is a strong choice for moviegoers who want the practical fun of a modern drive-in and the atmosphere of a genuine cinema landmark. The Orefield theater dates to 1934, operates year-round, and pairs first-run or repertory programming with a traditional double-feature format.",
    editorialNote:
      "This is an independent desk-researched visitor guide, not a first-person review. DriveInTonight checked the theater's official website, policy page, history, and current events information on July 13, 2026. The theater did not pay for or approve this guide.",
    address: {
      street: '4540 Shankweiler Road',
      city: 'Orefield',
      state: 'PA',
      postalCode: '18069',
    },
    quickFacts: [
      {
        label: 'Admission model',
        value:
          'Tickets are sold per person and normally cover both movies in the advertised double feature.',
      },
      {
        label: 'Posted admission',
        value:
          'The official FAQ listed $12 for adults, $8 for children under 12, and free admission for children age 3 and younger when reviewed.',
      },
      {
        label: 'Movie audio',
        value:
          'Tune a working vehicle or portable FM radio to 90.7. Phone streaming and Bluetooth-only speakers do not receive the local broadcast.',
      },
      {
        label: 'Arrival',
        value:
          'The box office typically opens about two hours before showtime. The theater recommends arriving early because popular programs can sell out.',
      },
      {
        label: 'Weather',
        value:
          'The drive-in generally operates rain or shine, with closures possible for severe weather or heavy snow.',
      },
      {
        label: 'Payment',
        value:
          'The official FAQ says major credit cards, Apple Pay, Google Pay, and Cash App are accepted.',
      },
    ],
    sections: [
      {
        heading: 'Why this drive-in is worth the trip',
        paragraphs: [
          "The history is not decorative marketing here. Wilson Shankweiler opened the theater in April 1934, making it Pennsylvania's first drive-in and the second drive-in opened in the United States. The official history traces how the property survived storm damage, changes in ownership, several generations of sound technology, and the industry's move to digital projection.",
          "Current owners Matthew McClanahan and Lauren McChesney purchased the theater in 2022 and expanded it to year-round operation. That makes Shankweiler's unusual among seasonal drive-ins: the programming can extend beyond a standard summer weekend, while the basic experience remains recognizable—park facing the screen, tune an FM radio, visit the snack bar, and stay for a second feature.",
          'The practical appeal is just as important as the history. Online tickets are available for most programs, admission commonly includes both advertised films, and the theater publishes clear first-visit policies. Special events and repertory screenings can differ from a standard double feature, so use the official event listing for the exact program you plan to attend.',
        ],
      },
      {
        heading: 'How to plan a smooth first visit',
        paragraphs: [
          'Start with the official event page, not a third-party showtime listing. Drive-in schedules depend on sunset, film-booking windows, weather, and special programming. Confirm the date, gate time, feature order, ratings, ticket availability, and whether the event has any one-night-only conditions before leaving home.',
          'Bring a real FM receiver and test it before the trip. The theater broadcasts on 90.7 FM, but a streaming app cannot substitute for a radio because the audio is transmitted locally. A portable battery-powered radio is the safest backup if you are unsure how long your vehicle can run accessories without draining the battery. Staff can assist with a jump-start, but avoiding the problem is better than solving it after the second feature.',
          'Know how to turn off every exterior light on your vehicle. Headlights, daytime running lights, brake lights, and an elevated open hatch can block or distract nearby viewers. High-profile vehicles may be directed to designated rows. If you watch from an open hatch, the theater requires it to be tied down to roof level; the snack bar keeps rope available.',
        ],
      },
      {
        heading: 'Food, seating, children, and pets',
        paragraphs: [
          'The full-service snack bar opens with the gates and generally remains open until the second feature begins. The theater discourages outside food and does not allow outside delivery. Buying concessions also supports the operation of an independent theater, so plan a snack-bar budget even if you eat before arriving.',
          'Chairs and blankets belong in front of your vehicle rather than beside it, and each vehicle receives one parking space. Grilling, cooking, and open flames are prohibited. Children should remain supervised throughout the evening; a dark parking field has moving vehicles before and after the show.',
          'Friendly dogs are permitted if they remain leashed, quiet, and under control, and owners must clean up after them. A busy sold-out movie night may still be stressful for a noise-sensitive animal. The official rules are the final authority if a special event publishes different conditions.',
        ],
      },
      {
        heading: 'What the listing can and cannot tell you',
        paragraphs: [
          "Shankweiler's own pages are the best source for prices, films, gate times, ticket status, accessibility questions, and temporary policy changes. DriveInTonight's role is to organize the stable planning information and explain what a first-time visitor should verify—not to replace the box office.",
          'The map coordinates and address can get you to the property, but they cannot predict traffic, lot capacity, weather, sightlines from a particular parking space, or whether a screening will sell out. Arriving early preserves more options and leaves time to ask staff where your vehicle should park.',
        ],
      },
    ],
    visitChecklist: [
      'Check the official event page on the day of your visit.',
      'Buy online tickets when offered for the selected program.',
      'Bring a working FM radio; 90.7 FM is the published theater frequency.',
      'Learn how to disable your vehicle lights without leaving the engine running.',
      'Pack a battery backup or portable radio for a long double feature.',
      'Arrive early, especially for weekends, classics, and special events.',
      'Review the current food, pet, hatchback, and re-entry rules.',
      'Carry a payment method accepted by the theater and verify current prices.',
    ],
    faqs: [
      {
        question: "Is Shankweiler's Drive-In open all year?",
        answer:
          'The theater says it expanded to year-round operation in 2022. Individual dates can still be affected by severe weather, heavy snow, private activity, or the published event calendar, so confirm the specific screening before traveling.',
      },
      {
        question: 'Does one ticket include both movies?',
        answer:
          'For a standard double feature, the official FAQ says admission is per person and includes both movies. Special events may use different formats or pricing, so the event listing controls.',
      },
      {
        question: 'How do you hear the movie?',
        answer:
          'The published frequency is 90.7 FM. Use a vehicle radio or a portable radio with an FM receiver. Bluetooth speakers and phone radio apps do not tune the theater broadcast.',
      },
      {
        question: 'Can you bring outside food or have food delivered?',
        answer:
          'The theater discourages outside food and does not allow outside food delivery. Its full-service snack bar opens with the gates and generally operates until the second feature begins.',
      },
      {
        question: 'Are dogs allowed?',
        answer:
          'Friendly dogs are allowed under the published policy if they are leashed, non-disruptive, and cleaned up after. Check the rules for the particular event before bringing a pet.',
      },
      {
        question: 'What happens if the car battery dies?',
        answer:
          'The official FAQ asks visitors to notify a snack-bar attendant; staff can provide a jump-start during intermission or after the program. Using accessory mode correctly or bringing a portable radio lowers the risk.',
      },
    ],
    sources: [
      {
        label: "Shankweiler's official website",
        url: 'https://www.shankweilers.com/',
        note: 'Current programming, location, operating model, and ticket links.',
      },
      {
        label: 'Official policies and FAQ',
        url: 'https://www.shankweilers.com/rules',
        note: 'Admission, FM frequency, arrival guidance, payment, food, weather, vehicle, and pet rules.',
      },
      {
        label: 'Official theater history',
        url: 'https://www.shankweilers.com/history',
        note: 'Opening date, ownership timeline, technical milestones, and year-round expansion.',
      },
      {
        label: 'Official events calendar',
        url: 'https://www.shankweilers.com/events',
        note: 'Current screenings, special events, gate times, and event-specific ticket links.',
      },
    ],
    limitations:
      'Prices, schedules, policies, accessibility arrangements, and weather decisions can change after the review date. This guide does not confirm same-day operation, remaining ticket inventory, or conditions on the property. Verify time-sensitive details with the theater before traveling.',
  },
};

export function getTheaterGuide(state: string, slug: string): TheaterGuide | undefined {
  return theaterGuides[`${state}/${slug}`];
}
