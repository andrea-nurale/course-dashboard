import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline"

export const validateEmail = /[^\s@]+@[^\s@]+\.[^\s@]+/

export const ROUTES = {
  login: "/",
  home: "/home",
  users: "/users",
  customers: "/customers",
}

export const SIDEBAR = [
  { name: "Dashboard", href: ROUTES.home, icon: HomeIcon, current: true },
  { name: "Team", href: ROUTES.users, icon: UsersIcon, current: false },
  { name: "Projects", href: ROUTES.customers, icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
]
