import { ReactNode } from 'react';

export interface MainLayoutProps {
  children: ReactNode;
}

export interface TicketOption {
  type: string;
  price: number;
  description: string;
}

interface TicketDetail {
  type: string;
  price: number;
  description: string;
}

export interface FormInputItem {
  id: number;
  headertext?: string;
  eventText?: string;
  eventdescription?: string;
  eventlocstion?: string;
  eventdate?: string;
  ticketText?: string;
  ticketDetails?: TicketDetail[];
  ticketNumber?: string;
  arraynumer?: number[];
}
