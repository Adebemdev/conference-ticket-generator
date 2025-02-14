import { FormInputItem } from '@/types';

type FormInput = FormInputItem[];

export const formInput: FormInput = [
  {
    id: 1,
    headertext: 'Ticket Selection',
    eventText: 'Techember fest "25',
    eventdescription:
      'Join us for an unforgettable experience at [Event Name]! Secure your spot now.',
    eventlocstion: ' 📍 [Event Location]',
    eventdate: 'March 15, 2025 | 7:00 PM',
    ticketText: 'Select Ticket Type:',
    ticketDetails: [
      { type: '10/50', price: 0, description: 'REGULAR ACCESS' },
      { type: '20/50', price: 150, description: 'VIP ACCESS' },
      { type: '30/50', price: 150, description: 'VVIP ACCESS' },
    ],
    ticketNumber: 'Number of Tickets',
    arraynumer: [1, 2, 3, 4, 5],
  },
  {
    id: 1,
  },
  {
    id: 3,
  },
];
