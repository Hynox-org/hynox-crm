"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaFolder, FaChartBar, FaStore, FaSearch, FaUserCircle,
  FaCog, FaPlusCircle, FaHome, FaPhone, FaFileAlt,
  FaTasks, FaCalendarAlt, FaChartLine, FaClipboardList
} from "react-icons/fa";

export default function Sidebar({
  sidebarOpen,
  subLayerOpen,
}: {
  sidebarOpen: boolean;
  subLayerOpen: boolean;
}) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const router = useRouter();

  const menuItems = [
    {
      id: "modules",
      icon: <FaFolder />,
      label: "Modules",
      subItems: [
        { name: "Home", icon: <FaHome />, path: "/dashboard/crm/home" },
        { name: "Leads", icon: <FaClipboardList />, path: "/dashboard/crm/lead" },
        { name: "Contacts", icon: <FaUserCircle />, path: "/dashboard/crm/contact" },
        { name: "Accounts", icon: <FaFileAlt />, path: "/dashboard/crm/account" },
        { name: "Deals", icon: <FaChartLine />, path: "/dashboard/crm/deal" },
        { name: "Calls", icon: <FaPhone />, path: "/dashboard/crm/call" },
        { name: "Tasks", icon: <FaTasks />, path: "/dashboard/crm/task" },
        { name: "Meetings", icon: <FaCalendarAlt />, path: "/dashboard/crm/meeting" },
        // { name: "Campaigns", icon: <FaFolder />, path: "/dashboard/crm/campaign" },
        // { name: "Documents", icon: <FaFileAlt />, path: "/dashboard/crm/document" },
        // { name: "Visits", icon: <FaFolder />, path: "/dashboard/crm/visit" },
        // { name: "Projects", icon: <FaProjectDiagram />, path: "/dashboard/crm/project" },
      ],
    },
    {
      id: "analytics",
      icon: <FaChartBar />,
      label: "Analytics",
      subItems: [
        { name: "Reports", path: "/dashboard/crm/report" },
        { name: "Folders", path: "/dashboard/crm/folder" },
        { name: "All Reports" },
        { name: "My Reports" },
        { name: "Favorites" },
        { name: "Recently Viewed" },
        { name: "Recently Deleted" },
        { name: "Account and Contact Reports" },
        { name: "Deal Reports" },
        { name: "Lead Reports" },
        // { name: "Campaign Reports"},
        // { name: "Case and Solution Reports"},
        // { name: "Product Reports" },
        // { name: "Vendor Reports"},
        // { name: "Quote Reports"},
        // { name: "Sales Order Reports"},
        // { name: "Purchase Order Reports" },
        // { name: "Invoice Reports" },
        // { name: "Sales Metrics Reports"},
        { name: "Email Reports" },
        { name: "Meeting Reports" },
      ],
    },
    { id: "marketplace", icon: <FaStore />, label: "Marketplace" },
    { id: "search", icon: <FaSearch />, label: "Search" },
  ];

  const bottomItems = [
    { id: "profile", icon: <FaUserCircle />, label: "Profile", path: "/profile" },
    { id: "setup", icon: <FaCog />, label: "Settins", path: "/setup" },
    { id: "addnew", icon: <FaPlusCircle />, label: "Add New", path: "/add-new" },
  ];

  const handleSubItemClick = (path: string) => {
    if (path) router.push(path);
  };

  if (!sidebarOpen) {
    //  Entire sidebar hidden on small screens
    return null;
  }

  return (
    <div className="flex h-screen">
      {/* Main Sidebar */}
      <div className="w-16 bg-gray-900 text-white flex flex-col justify-between items-center py-4 transition-all duration-300">
        <div className="flex flex-col items-center space-y-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveMenu(activeMenu === item.id ? null : item.id)}
              className={`text-2xl p-2 rounded-md hover:bg-gray-700 transition ${
                activeMenu === item.id ? "bg-gray-700" : ""
              }`}
            >
              {item.icon}
            </button>
          ))}
        </div>

        <div className="flex flex-col items-center space-y-6 pb-4">
          {bottomItems.map((item) => (
            <button
              key={item.id}
              onClick={() => router.push(item.path)}
              className="text-2xl p-2 rounded-md hover:bg-gray-700 transition"
            >
              {item.icon}
            </button>
          ))}
        </div>
      </div>

      {/* Sublayer (Expandable Sidebar Panel) */}
      <div
        className={`transition-all duration-300 bg-white shadow-lg overflow-hidden ${
          subLayerOpen && activeMenu ? "w-56" : "w-0"
        }`}
      >
        {subLayerOpen && activeMenu && (
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">
              {menuItems.find((i) => i.id === activeMenu)?.label}
            </h2>
            <ul className="space-y-2">
              {menuItems
                .find((i) => i.id === activeMenu)
                ?.subItems?.map((sub, index) => (
                  <li
                    key={index}
                    onClick={() => handleSubItemClick(sub.path)}
                    className="cursor-pointer flex items-center space-x-2 p-1 rounded-md hover:bg-gray-100"
                  >
                    <span className="text-gray-600">{sub.icon}</span>
                    <span className="text-gray-800 text-sm">{sub.name}</span>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
