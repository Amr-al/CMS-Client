'use client';

import { useState, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { links } from './links';

export default function DropMenu({ classes }: { classes?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenChange = useCallback((open: boolean) => {
    setIsMenuOpen(open);
  }, []);

  return (
    <div className={classes}>
      <DropdownMenu open={isMenuOpen} onOpenChange={handleOpenChange}>
        <DropdownMenuTrigger asChild>
          {isMenuOpen ? (
            <X className='w-7 h-7' />
          ) : (
            <Menu className='w-7 h-7' />
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className={cn(`w-[14rem] mt-2.5 ${isMenuOpen ? '' : 'hidden'}`)}
        >
          {links.map((link) => (
            <Link
              href={`${link.href}`}
              className='block w-full'
              key={link.label}
            >
              <DropdownMenuItem>
                <DropdownMenuLabel className='font-normal text-base'>
                  {link.label}
                </DropdownMenuLabel>
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
