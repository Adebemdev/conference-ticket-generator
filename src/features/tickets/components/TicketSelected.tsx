import { CardContent, Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { TicketOption } from '@/types';
import { useState } from 'react';

const TicketSelected = () => {
  const [selectedTicket, setSelectedTicket] = useState<string | undefined>();
  const [quantity, setQuantity] = useState<string>('1');

  const ticketOptions: TicketOption[] = [
    { type: '10/50', price: 0, description: 'REGULAR ACCESS' },
    { type: '20/50', price: 150, description: 'VIP ACCESS' },
    { type: '30/50', price: 150, description: 'VVIP ACCESS' },
  ];

  return (
    <div className='flex max-w-3xl flex-col items-start lg:max-w-7xl'>
      <div className='w-full space-y-2'>
        <h2 className='font-roboto'>Select Ticket Type:</h2>
        <div className='flex flex-col gap-4 rounded-2xl border-1 border-[#12464E] p-3 lg:flex-row lg:p-4'>
          {ticketOptions.map((ticket) => (
            <Card
              key={ticket.type}
              className={`flex-1 border-1 border-[#197686] ${selectedTicket === ticket.description ? 'bg-[#12464E]' : ''}`}
              onClick={() => setSelectedTicket(ticket.description)}
            >
              <CardContent className='p-4'>
                <div className='font-roboto font-bold text-gray-200'>
                  {ticket.price === 0 ? 'Free' : `$${ticket.price}`}
                </div>
                <div className='font-roboto text-sm text-gray-400'>{ticket.description}</div>
                <div className='font-roboto font-medium text-gray-200'>{ticket.type}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className='font-roboto flex w-full flex-col gap-2 space-y-2 py-4'>
        <div className='w-[100%] px-2 lg:w-[50%]'>
          <h2 className='text-lg font-normal text-gray-200'>Number of Tickets</h2>
        </div>
        <div className='flex-1 py-2'>
          <Select value={quantity} onValueChange={setQuantity}>
            <SelectTrigger className='w-full border-[#197686] text-gray-200'>
              <SelectValue placeholder='Select quantity' />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className='flex w-full flex-col gap-4 font-normal lg:flex-1 lg:flex-row'>
        <Button disabled={!selectedTicket} variant={'outline'} size={'lg'} className='flex-1'>
          Next
        </Button>
        <Button size={'lg'} className='flex-1'>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default TicketSelected;
