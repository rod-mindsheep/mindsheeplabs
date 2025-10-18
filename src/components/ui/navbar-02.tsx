'use client';
import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { BookOpenIcon, InfoIcon, LifeBuoyIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose, DialogDescription } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import type { ComponentProps } from 'react';
import { MagneticButton } from '@/components/ui/magnetic-button';

// Simple logo component for the navbar
const Logo = ({ className, style, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img
    src="/logo.png"
    alt="Logo"
    className={cn('inline-block', className)}
    {...props}
  />
);

// Hamburger icon component
const HamburgerIcon = ({ className, ...props }: React.SVGAttributes<SVGElement>) => (
  <svg
    className={cn('pointer-events-none', className)}
    width="72" // Wider to accommodate longer lines
    height="63" // Matches CONTACT US button height on mobile
    viewBox="0 0 54 48" // Adjusted to allow longer lines
    fill="none"
    stroke="currentColor"
    strokeWidth="3" // Thinner lines
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 8H51" // Moved from y=6 to y=4
      className="transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]"
    />
    <path
      d="M2 24H51" // Unchanged y=12 (center)
      className="transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]"
    />
    <path
      d="M2 40H51" // Moved from y=18 to y=20
      className="transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]"
    />
  </svg>
);

// Types
export interface Navbar02NavItem {
  href?: string;
  label: string;
  submenu?: boolean;
  type?: 'description' | 'simple' | 'icon';
  items?: Array<{
    href: string;
    label: string;
    description?: string;
    icon?: string;
  }>;
}

export interface Navbar02Props extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  logoHref?: string;
  navigationLinks?: Navbar02NavItem[];
  aboutText?: string;
  aboutHref?: string;
  ctaText?: string;
  ctaHref?: string;
  onSignInClick?: () => void;
  onCtaClick?: () => void;
}

// Default navigation links
const defaultNavigationLinks: Navbar02NavItem[] = [
  { href: '#', label: 'Home' },
  { href: '#', label: 'About Us' },
];

// Navbar component
export const Navbar02 = React.forwardRef<HTMLElement, Navbar02Props>(
  (
    {
      className,
      logo = <Logo />,
      logoHref = '#',
      navigationLinks = defaultNavigationLinks,
      aboutText = 'ABOUT',
      aboutHref = '#signin',
      ctaText = 'CONTACT US',
      ctaHref = '#get-started',
      onSignInClick,
      onCtaClick,
      ...props
    },
    ref
  ) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
      const checkWidth = () => {
        if (containerRef.current) {
          const width = containerRef.current.offsetWidth;
          setIsMobile(width < 768); // 768px is md breakpoint
        }
      };
      checkWidth();
      const resizeObserver = new ResizeObserver(checkWidth);
      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }
      return () => {
        resizeObserver.disconnect();
      };
    }, []);

    // Combine refs
    const combinedRef = React.useCallback(
      (node: HTMLElement | null) => {
        containerRef.current = node;
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref]
    );

    const renderIcon = (iconName: string) => {
      switch (iconName) {
        case 'BookOpenIcon':
          return <BookOpenIcon size={16} className="text-foreground opacity-60" aria-hidden={true} />;
        case 'LifeBuoyIcon':
          return <LifeBuoyIcon size={16} className="text-foreground opacity-60" aria-hidden={true} />;
        case 'InfoIcon':
          return <InfoIcon size={16} className="text-foreground opacity-60" aria-hidden={true} />;
        default:
          return null;
      }
    };

    return (
      <header
        ref={combinedRef}
        className={cn(
          'pt-4 md:pt-10 sticky top-0 z-50 w-full md:px-10 px-6 [&_*]:no-underline',
          className
        )}
        {...props}
      >
        <div className="flex justify-between items-center w-full gap-4 mx-auto md:px-20 py-2 md:py-4 min-h-[64px]">
          {/* Left side */}
          <div className="flex items-center gap-2">
            {/* Main nav */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={(e) => e.preventDefault()}
                className="flex items-center gap-1 space-x-2 transition-colors cursor-pointer md:gap-4 text-primary hover:text-primary/90"
              >
                <div className="text-2xl">
                  <Logo className="w-[35px] h-[35px] md:w-[55px] md:h-[55px]" />
                </div>
                <span className="text-[20px] md:text-[30px] uppercase text-white font-bold leading-none">
                  MindsheepLabs
                </span>
              </button>
            </div>
          </div>
          {/* Right side */}
          <div className="flex items-center justify-end gap-2 md:gap-6">
            <a
              // variant="ghost"
              // size="sm"
              className="text-sm hidden md:flex font-medium font-roboto text-[25px]"
              onClick={(e) => {
                e.preventDefault();
                if (onSignInClick) onSignInClick();
              }}
            >
              {aboutText}
            </a>
            {/* <a
              // size="sm"
              className="flex items-center justify-items-center md:rounded-[15px] rounded-[5px] font-roboto md:text-[25px] text-[13px] font-normal px-4 shadow-sm bg-gradient-to-r from-[#1A00D7] to-[#D700F3] md:h-[57px] md:w-[191px] w-[85px] h-[33px]"
              onClick={(e) => {
                e.preventDefault();
                if (onCtaClick) onCtaClick();
              }}
            >
              {ctaText}
            </a> */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                  <MagneticButton
                    onClick={(e) => {
                      e.preventDefault();
                      setIsDialogOpen(true);
                    }}
                    className="flex cursor-pointer items-center justify-center 
                      md:rounded-[15px] rounded-[5px] font-roboto 
                      md:text-[25px] text-[13px] font-normal px-4 
                      shadow-sm bg-gradient-to-r from-[#1A00D7] to-[#D700F3] 
                      md:h-[60px] md:w-[190px] w-[100px] h-[33px] 
                      shrink-0 whitespace-nowrap"
                  >
                    <span className="inline-block px-1">{ctaText}</span>
                  </MagneticButton>
              </DialogTrigger>

              <DialogContent className="p-6 mx-auto bg-white md:max-w-lg max-w-70vw rounded-xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-black">
                    Join Mindsheep Labs
                  </DialogTitle>
                  <DialogDescription className="text-gray-700">
                    We collaborate with agencies ready to rewire how they create, automate,
                    and scale using AI. Tell us a bit about your goals so we can explore the
                    right fit.
                  </DialogDescription>
                </DialogHeader>

                <form className="flex flex-col gap-4 mt-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="p-3 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D700F3] outline-none"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="p-3 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D700F3] outline-none"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Your Agency / Company Name"
                    className="p-3 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D700F3] outline-none"
                  />

                  <select
                    className="p-3 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D700F3] outline-none"
                    required
                  >
                    <option value="">What do you want to explore?</option>
                    <option>Creative Automation (AI imagery, videos, influencers)</option>
                    <option>Operational AI (proposal writing, workflows, reports)</option>
                    <option>Data & Stack Integration (Google Ads, CRM, Meta)</option>
                    <option>AI-Powered Service Expansion</option>
                    <option>Other / Not Sure Yet</option>
                  </select>

                  <textarea
                    placeholder="Tell us what challenges or goals you’re exploring with AI..."
                    className="p-3 text-black border border-gray-300 rounded-md h-28 resize-none focus:ring-2 focus:ring-[#D700F3] outline-none"
                  ></textarea>

                  <DialogFooter className="flex justify-end gap-3 mt-2">
                    <DialogClose asChild>
                      <Button
                        variant="outline"
                        className="px-5 py-2 text-black border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100"
                      >
                        Cancel
                      </Button>
                    </DialogClose>
                    <Button
                      type="submit"
                      className="w-full px-6 py-2 text-white bg-gradient-to-r from-[#1A00D7] to-[#D700F3] rounded-md font-semibold cursor-pointer"
                    >
                      Submit
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
            {/* Mobile menu trigger */}
            {isMobile && (
              <Popover open={menuOpen} onOpenChange={setMenuOpen}>
                <PopoverTrigger asChild>
                  <Button
                    className="group h-[40px] w-[33px] md:hidden hover:bg-accent hover:text-accent-foreground z-[60] flex items-center justify-center"
                    variant="ghost"
                    size="icon"
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    {menuOpen ? (
                      // “X” icon when menu is open
                      <svg
                        width="33"
                        height="33"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    ) : (
                      <HamburgerIcon className="h-[63px] w-[33px]" />
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  align="start"
                  className="z-[1000] w-screen h-screen top-0 left-0 border-none p-0 text-white justify-start bg-gradient-to-br from-[#011d53] to-[#070029]"
                >
                  {/* Optional close button */}
                  <div className="absolute top-4 right-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white"
                      onClick={() => setMenuOpen(false)}
                    >
                      <svg
                        width="33"
                        height="33"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </Button>
                  </div>
                  <NavigationMenu className="w-full mt-0">
                    <NavigationMenuList className="flex-col items-start gap-0 text-left">
                      {navigationLinks.map((link, index) => (
                        <NavigationMenuItem key={index} className="w-full">
                          {link.submenu ? (
                            <>
                              <div className="text-muted-foreground px-2 py-1.5 text-xs font-medium">
                                {link.label}
                              </div>
                              <ul>
                                {link.items?.map((item, itemIndex) => (
                                  <li key={itemIndex}>
                                    <button
                                      onClick={(e) => e.preventDefault()}
                                      className="flex items-center w-full px-3 py-2 text-sm font-medium no-underline transition-colors rounded-md cursor-pointer hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    >
                                      {item.label}
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </>
                          ) : (
                            <button
                              onClick={(e) => e.preventDefault()}
                              className="flex items-center w-full px-3 py-2 text-sm font-medium no-underline transition-colors rounded-md cursor-pointer hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              {link.label}
                            </button>
                          )}
                          {/* Add separator between different types of items */}
                          {index < navigationLinks.length - 1 &&
                            ((!link.submenu && navigationLinks[index + 1].submenu) ||
                              (link.submenu && !navigationLinks[index + 1].submenu) ||
                              (link.submenu &&
                                navigationLinks[index + 1].submenu &&
                                link.type !== navigationLinks[index + 1].type)) && (
                              <div
                                role="separator"
                                aria-orientation="horizontal"
                                className="w-full h-px my-1 -mx-1 bg-border"
                              />
                            )}
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenu>
                </PopoverContent>
              </Popover>
            )}
          </div>
        </div>
      </header>
    );
  }
);

Navbar02.displayName = 'Navbar02';

// ListItem component for navigation menu items
const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & {
    title: string;
    href?: string;
    icon?: string;
    type?: 'description' | 'simple' | 'icon';
    children?: React.ReactNode;
  }
>(({ className, title, children, icon, type, ...props }, ref) => {
  const renderIconComponent = (iconName?: string) => {
    if (!iconName) return null;
    switch (iconName) {
      case 'BookOpenIcon':
        return <BookOpenIcon className="w-5 h-5" />;
      case 'LifeBuoyIcon':
        return <LifeBuoyIcon className="w-5 h-5" />;
      case 'InfoIcon':
        return <InfoIcon className="w-5 h-5" />;
      default:
        return null;
    }
  };
  return (
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        onClick={(e) => e.preventDefault()}
        className={cn(
          'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer',
          className
        )}
        {...props}
      >
        {type === 'icon' && icon ? (
          <div className="flex items-start space-x-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0 bg-muted">
              {renderIconComponent(icon)}
            </div>
            <div className="space-y-1">
              <div className="text-base font-medium leading-tight">{title}</div>
              {children && (
                <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
                  {children}
                </p>
              )}
            </div>
          </div>
        ) : (
          <>
            <div className="text-base font-medium leading-none">{title}</div>
            {children && (
              <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
                {children}
              </p>
            )}
          </>
        )}
      </a>
    </NavigationMenuLink>
  );
});

ListItem.displayName = 'ListItem';

export { Logo, HamburgerIcon };