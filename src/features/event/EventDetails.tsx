import { Progress } from '@/components/ui/progress';

const EventDetails = () => {
  return (
    <>
      <div className='max-h-auto w-full rounded-2xl'>
        <div className='card-custom-gradient flex h-full w-full flex-col items-center justify-center gap-6 border-2 border-[#0E464F] p-2'>
          <div className='flex flex-col gap-2'>
            <h1 className='font-road-rage text-center text-5xl font-normal text-[#FAFAFA] capitalize'>
              Techember fest "25
            </h1>
            <p className='font-roboto mx-auto h-16 w-[239px] text-center text-sm leading-normal font-normal text-[#FAFAFA] lg:h-[48px] lg:w-[340px] lg:text-[16px]'>
              Join us for an unforgettable experience at [Event Name]! Secure your spot now.
            </p>
          </div>
          <div className='mx-auto mb-4 flex h-[52px] w-[181px] flex-col items-center lg:w-[360px] lg:flex-row'>
            <p className='font-roboto w-[154px] text-base leading-normal font-normal text-[#FAFAFA]'>
              📍 [Event Location]
            </p>
            <p className='font-roboto w-[184px] text-base leading-normal font-normal text-[#FAFAFA]'>
              March 15, 2025 | 7:00 PM
            </p>
          </div>
        </div>
      </div>
      <Progress />
    </>
  );
};

export default EventDetails;
