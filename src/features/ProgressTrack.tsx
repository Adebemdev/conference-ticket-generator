import { Progress } from '@/components/ui/progress';

const ProgressTrack = () => {
  return (
    <div className='flex h-[80px] w-full flex-col'>
      <div className='flex h-[68px] w-[287px] flex-col gap-1 lg:w-full lg:flex-row lg:items-center lg:justify-between'>
        <h1 className='w-[287px] text-2xl font-normal text-[#FFFFFF]'>Ticket Selection</h1>
        <div className='flex h-[24px] w-[61px] flex-row items-center gap-6 text-sm'>
          <span className='text-sm text-[#ffff]'>
            Step {1}/{3}
          </span>
        </div>
      </div>
      <Progress value={33} />
    </div>
  );
};

export default ProgressTrack;
