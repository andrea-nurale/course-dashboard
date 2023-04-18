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
  calendar: "/calendar",
  documents: "/documents",
  reports: "/reports",
}

export const SIDEBAR = [
  { name: "Dashboard", href: ROUTES.home, icon: HomeIcon, current: true },
  { name: "Users", href: ROUTES.users, icon: UsersIcon, current: false },
  { name: "Customers", href: ROUTES.customers, icon: FolderIcon, current: false },
  { name: "Calendar", href: ROUTES.calendar, icon: CalendarIcon, current: false },
  { name: "Documents", href: ROUTES.documents, icon: DocumentDuplicateIcon, current: false },
  { name: "Reports", href: ROUTES.reports, icon: ChartPieIcon, current: false },
]
