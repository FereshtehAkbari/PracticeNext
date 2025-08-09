import "@/styles/globals.css";

export const metadata = {
  title: { template: " کتابخانه| %s", default: "کتابخانه" },
  description: "وب اپلیکیشن مدیریت کتابها و کتابخانه",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className="min-h-screen">
      <body>
        <div className="w-full m-auto p-[1rem] xl:max-w-screen-xl">
          {children}
        </div>
      </body>
    </html>
  );
}
