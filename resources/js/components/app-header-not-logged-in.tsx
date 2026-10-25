import { Breadcrumbs } from '@/components/breadcrumbs';
import { Icon } from '@/components/icon';
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
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { dashboard } from '@/routes';
import { type BreadcrumbItem, type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { BookOpen, ChevronDown, Folder, LayoutGrid, Menu, Search } from 'lucide-react';
import AppLogoIcon from './app-logo-icon';
import { it } from 'node:test';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const mainNavItems: NavItem[] = [
    {
        title: "Log In",
        href: "/login",
        icon: LayoutGrid
    },
    {
        title: "Registration",
        href: "/register",
        icon: LayoutGrid
    },
    {
        title: 'Contact',
        href: '/contact',
        icon: LayoutGrid,
    },
    {
        title: 'View Database',
        href: '',
        icon: Folder,
        children: [
            {
                title: "Inventor",
                href: "/show/inventors",
                icon: LayoutGrid
            },
            {
                title: "Inventions",
                href: "/show/inventions",
                icon: LayoutGrid
            }
        ]
    },
    {
        title: 'Diagram',
        href: '/diagram',
        icon: LayoutGrid,
    },
];

const rightNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

const activeItemStyles = 'text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100';

interface AppHeaderProps {
    breadcrumbs?: BreadcrumbItem[];
}

export function AppHeaderNotLoggedIn({ breadcrumbs = [] }: AppHeaderProps) {
    const page = usePage();
    return (
        <>
            <div className="border-b border-sidebar-border/80">
                <div className="mx-auto flex h-16 items-center px-4 md:max-w-7xl">
                    {/* Mobile Menu */}
                    <div className="lg:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="mr-2 h-[34px] w-[34px]">
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="flex h-full w-64 flex-col items-stretch justify-between bg-sidebar">
                                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                                <SheetHeader className="flex justify-start text-left">
                                    <AppLogoIcon className="h-6 w-6 fill-current text-black dark:text-white" />
                                </SheetHeader>
                                <div className="flex h-full flex-1 flex-col space-y-4 p-4">
                                    <div className="flex h-full flex-col justify-between text-sm">
                                        <div className="flex flex-col space-y-4">
                                            {mainNavItems.map((item) =>
                                                item.children ? (
                                                    <Collapsible key={item.title}>
                                                        <CollapsibleTrigger className="flex w-full items-center justify-between py-2 font-medium">
                                                            <div className="flex items-center gap-2">
                                                                {item.icon && <Icon iconNode={item.icon} className="h-5 w-5" />}
                                                                <span>{item.title}</span>
                                                            </div>

                                                            <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                                                        </CollapsibleTrigger>

                                                        <CollapsibleContent className="mt-2 ml-7 flex flex-col gap-2">
                                                            {item.children.map((ch) => (
                                                                <Link
                                                                    key={ch.title}
                                                                    href={ch.href}
                                                                    className="text-muted-foreground hover:text-foreground"
                                                                >
                                                                    {ch.title}
                                                                </Link>
                                                            ))}
                                                        </CollapsibleContent>
                                                    </Collapsible>
                                                ) : (
                                                    <Link key={item.title} href={item.href} className="flex items-center space-x-2 font-medium">
                                                        {item.icon && <Icon iconNode={item.icon} className="h-5 w-5" />}
                                                        <span>{item.title}</span>
                                                    </Link>
                                                ),
                                            )}
                                        </div>

                                        <div className="flex flex-col space-y-4">
                                            {rightNavItems.map((item) => (
                                                <a
                                                    key={item.title}
                                                    href={typeof item.href === 'string' ? item.href : item.href.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center space-x-2 font-medium"
                                                >
                                                    {item.icon && <Icon iconNode={item.icon} className="h-5 w-5" />}
                                                    <span>{item.title}</span>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="ml-6 hidden h-full items-center space-x-6 lg:flex">
                        <NavigationMenu className="flex h-full items-stretch">
                            <NavigationMenuList className="flex h-full items-stretch space-x-2">
                                {mainNavItems.map((item: NavItem, index) => {
                                    if (item.children)
                                        return (
                                            <NavigationMenuItem key={index} className="relative flex h-full items-center">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="ghost" className="h-9 px-3">
                                                            {item.icon && <Icon iconNode={item.icon} className="mr-2 h-4 w-4" />}
                                                            {item.title}
                                                        </Button>
                                                    </DropdownMenuTrigger>

                                                    <DropdownMenuContent>
                                                        {item.children.map((ch) => (
                                                            <div key={ch.title}>
                                                                <Link
                                                                    href={ch.href}
                                                                    className={cn(
                                                                        navigationMenuTriggerStyle(),
                                                                        page.url === (typeof item.href === 'string' ? ch.href : ch.href) &&
                                                                            activeItemStyles,
                                                                        'h-9 cursor-pointer px-3',
                                                                    )}
                                                                >
                                                                    {ch.icon && <Icon iconNode={ch.icon} className="mr-2 h-4 w-4" />}
                                                                    {ch.title}
                                                                </Link>
                                                                <br></br>
                                                            </div>
                                                        ))}
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </NavigationMenuItem>
                                        );
                                    else
                                        return (
                                            <NavigationMenuItem key={index} className="relative flex h-full items-center">
                                                <Link
                                                    href={item.href}
                                                    className={cn(
                                                        navigationMenuTriggerStyle(),
                                                        page.url === (typeof item.href === 'string' ? item.href : item.href.url) && activeItemStyles,
                                                        'h-9 cursor-pointer px-3',
                                                    )}
                                                >
                                                    {item.icon && <Icon iconNode={item.icon} className="mr-2 h-4 w-4" />}
                                                    {item.title}
                                                </Link>
                                                {page.url === item.href && (
                                                    <div className="absolute bottom-0 left-0 h-0.5 w-full translate-y-px bg-black dark:bg-white"></div>
                                                )}
                                            </NavigationMenuItem>
                                        );
                                })}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    <div className="ml-auto flex items-center space-x-2">
                        <div className="relative flex items-center space-x-1">
                            <Button variant="ghost" size="icon" className="group h-9 w-9 cursor-pointer">
                                <Search className="!size-5 opacity-80 group-hover:opacity-100" />
                            </Button>
                            <div className="hidden lg:flex">
                                {rightNavItems.map((item) => (
                                    <TooltipProvider key={item.title} delayDuration={0}>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <a
                                                    href={typeof item.href === 'string' ? item.href : item.href.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group ml-1 inline-flex h-9 w-9 items-center justify-center rounded-md bg-transparent p-0 text-sm font-medium text-accent-foreground ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                                                >
                                                    <span className="sr-only">{item.title}</span>
                                                    {item.icon && <Icon iconNode={item.icon} className="size-5 opacity-80 group-hover:opacity-100" />}
                                                </a>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>{item.title}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {breadcrumbs.length > 1 && (
                <div className="flex w-full border-b border-sidebar-border/70">
                    <div className="mx-auto flex h-12 w-full items-center justify-start px-4 text-neutral-500 md:max-w-7xl">
                        <Breadcrumbs breadcrumbs={breadcrumbs} />
                    </div>
                </div>
            )}
        </>
    );
}
