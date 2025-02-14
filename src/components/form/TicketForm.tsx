import { Progress } from '../ui/progress';
import { CloudDownload } from 'lucide-react';

const TicketForm = () => {
  return (
    <form className='mx-auto flex max-w-4xl flex-col gap-6 rounded-2xl border-2 border-[#0E464F] bg-[#041E23] p-6 text-white lg:p-8'>
      {/* Progress tracking  */}
      <div className='flex w-full flex-col'>
        <div className='mb-2 flex w-full items-center lg:justify-between'>
          <div>
            <h1 className='w-[240px] flex-1 text-2xl font-normal text-[#FFFFFF]'>
              Attendee Details
            </h1>
          </div>
          <div className='flex'>
            <span className='text-sm text-[#ffff]'>
              Step {2}/{3}
            </span>
          </div>
        </div>
        <Progress value={70} />
      </div>

      <div className='max-h-auto w-full rounded-2xl'>
        <div className='relative flex h-full w-full flex-col gap-6 rounded-2xl border-2 border-[rgb(14,70,79)] py-16'>
          <h1 className='px-8'>Upload profile photo</h1>
          <div className='mx-auto h-30 w-md bg-[#0000002a] p-20'>
            <div className='border-[rgba(36, 160, 181, 0.5)] absolute top-0 left-0 mb-4 flex h-[200px] w-[200px] translate-x-80 translate-y-24 flex-col items-center justify-center rounded-2xl border-4 bg-[#0E464F]'>
              <CloudDownload className='h-10 w-10 text-center' />
            </div>
          </div>
        </div>
      </div>
      <Progress />
    </form>
  );
};

export default TicketForm;
