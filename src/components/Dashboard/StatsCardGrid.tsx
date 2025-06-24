import React from 'react';
import StatCard, { StatCardProps } from './StatCard';
import { DollarSign, Users, Activity } from 'lucide-react';

// For cleaner typing of our data array
type StatData = Omit<StatCardProps, 'className'>;

const StatsCardGrid: React.FC = () => {
  // CRITICAL: Define dummy data directly in the component
  const statsData: StatData[] = [
    {
      title: 'Monthly Recurring Revenue',
      value: '£48,320',
      change: '3.2%',
      changeType: 'increase' as const,
      description: 'vs last month',
      icon: <DollarSign />,
      iconContainerClassName: 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400',
    },
    {
      title: 'Active Users',
      value: '1,245',
      change: '122',
      changeType: 'increase' as const,
      description: 'this week',
      icon: <Users />,
      iconContainerClassName: 'bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-400',
    },
    {
      title: 'Churn Rate',
      value: '1.8%',
      change: '0.2%',
      changeType: 'decrease' as const,
      description: 'vs last month',
      icon: <Activity />,
      iconContainerClassName: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/50 dark:text-yellow-400',
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
      {statsData.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          change={stat.change}
          changeType={stat.changeType}
          description={stat.description}
          icon={stat.icon}
          iconContainerClassName={stat.iconContainerClassName}
        />
      ))}
    </div>
  );
};

export default StatsCardGrid;
