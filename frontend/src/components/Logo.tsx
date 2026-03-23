import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

export const Logo = ({ className }: Props) => {
  return (
    <img
      src="/logo.png" // Update this path if your logo is in a different location
      alt="logo"
      className={cn('logo', className)}
    />
  );
};
