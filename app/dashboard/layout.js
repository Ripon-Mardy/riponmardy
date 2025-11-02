import Sidebar from "./components/Sidebar";

export const metadata = {
  title: "Ripon - Dashboard",
  description: "Developer",
};

export default function RootLayout({ childred }) {
  return (
    <div className="bg-gray-100">
     
      <div className="flex">
        <Sidebar/>
        {childred}
      </div>
    </div>
  );
}
