"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaTachometerAlt,
  FaBoxOpen,
  FaUsers,
  FaShoppingCart,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const menuItems = [
  {
    title: "Dashboard",
    href: "/admin/dashboard/page",
    icon: FaTachometerAlt,
  },
  {
    title: "Products",
    href: "/admin/products",
    icon: FaBoxOpen,
  },
  {
    title: "Orders",
    href: "/admin/orders",
    icon: FaShoppingCart,
  },
  {
    title: "Customers",
    href: "/admin/customers",
    icon: FaUsers,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: FaCog,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-gray-900 text-white shadow-xl">

      {/* Logo */}
      <div className="border-b border-gray-700 p-6">
        <h1 className="text-2xl font-bold">
          <span className="text-yellow-400">Galle</span>Style
        </h1>
        <p className="text-sm text-gray-400">Admin Panel</p>
      </div>

      {/* Navigation */}
      <nav className="mt-6 flex flex-col gap-2 px-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 transition ${
                pathname === item.href
                  ? "bg-yellow-500 text-black"
                  : "hover:bg-gray-800"
              }`}
            >
              <Icon size={18} />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="absolute bottom-5 w-full px-4">
        <button className="flex w-full items-center gap-3 rounded-lg bg-red-600 px-4 py-3 hover:bg-red-700">
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </aside>
  );
}