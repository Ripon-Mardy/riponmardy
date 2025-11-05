import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export const metadata = {
  title: "Dashboard | MyApp",
  description: "Admin dashboard section of MyApp.",
};

export default function DashboardLayout({ children }) {

      const adminMenus = [
        {
          name: "Dashboard",
          link: "/admin/dashboard",
        },
        {
          name: "Projects",
          link: "/admin/dashboard/projects",
        },
        {
          name: "Skills",
          link: "/admin/dashboard/skills",
        },
        {
          name: "Settings",
          link: "/admin/dashboard/settings",
        },
      ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Header */}
      {/* <header className="bg-white shadow-sm border-b border-gray-200 md:hidden">
        <div className="p-4">
          <h1 className="text-xl font-semibold text-gray-800">MyApp</h1>
        </div>
      </header> */}

      <div className="flex flex-col md:flex-row">
        <Sidebar menu={adminMenus} />

        {/* Main Content */}
        <div className="flex-1 md:ml-64 w-full">
          {/* Desktop Header */}
          <Header menu={adminMenus} />

          {/* Page Content */}
          <main className="p-4 md:p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
