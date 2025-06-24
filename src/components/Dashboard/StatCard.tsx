import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowUp, ArrowDown } from 'lucide-react';

export interface StatCardProps {
  /** The main title of the stat card. */
  title: string;
  /** The large value displayed on the card. */
  value: string;
  /** The amount of change, e.g., "3.2%" or "122". */
  change: string;
  /** The direction of the change. */
  changeType: 'increase' | 'decrease';
  /** A description of the change period, e.g., "vs last month". */
  description: string;
  /** The lucide-react icon element to display. */
  icon: React.ReactElement;
  /** Tailwind classes for the icon container background and color. */
  iconContainerClassName?: string;
  /** Optional additional class names for the card. */
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  changeType,
  description,
  icon,
  iconContainerClassName,
  className,
}) => {
  const isIncrease = changeType === 'increase';
  const changeColor = isIncrease ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400';
  const ChangeIcon = isIncrease ? ArrowUp : ArrowDown;

  return (
    <Card className={cn('bg-card', className)}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="mt-1 text-4xl font-bold tracking-tight text-foreground">
              {value}
            </p>
            <div className="mt-2 flex items-center gap-1 text-sm">
              <ChangeIcon className={cn('h-4 w-4', changeColor)} />
              <span className={cn('font-semibold', changeColor)}>{change}</span>
              <span className="ml-1 text-muted-foreground">{description}</span>
            </div>
          </div>
          <div
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-lg',
              iconContainerClassName
            )}
          >
            {React.cloneElement(icon, { className: 'h-5 w-5' })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
