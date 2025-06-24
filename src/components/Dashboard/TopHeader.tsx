import React from 'react';
import { Bell, Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

const TopHeader: React.FC = () => {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b bg-background px-6">
      {/* Left Section */}
      <Button variant="ghost" size="icon" className="lg:hidden">
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle Menu</span>
      </Button>
      {/* This empty div is a spacer to push the right content over when the menu button is hidden on larger screens */}
      <div className="hidden lg:block"></div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1 top-1 flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500"></span>
          </span>
          <span className="sr-only">Notifications</span>
        </Button>
        
        <Separator orientation="vertical" className="h-8" />

        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            <AvatarImage src="https://i.pravatar.cc/150?u=eleanorvance" alt="Eleanor Vance" />
            <AvatarFallback>EV</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium text-foreground">Eleanor Vance</p>
            <p className="text-xs text-muted-foreground">Data Analyst</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
