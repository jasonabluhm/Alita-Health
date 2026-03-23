import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

export const Logo = ({ className }: Props) => {
  return (
    <img
      src="/logo_light.svg"
      alt="Alita Health Logo"
      className={cn('logo', className)}
    />
  );
};

export default Logo;
