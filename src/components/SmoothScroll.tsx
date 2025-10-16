import { ReactNode } from 'react';
import { useLenis } from '@/hooks/use-lenis';

interface SmoothScrollProps {
  children: ReactNode;
}

export const SmoothScroll = ({ children }: SmoothScrollProps) => {
  useLenis();
  return <>{children}</>;
};
