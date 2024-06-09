import Home from "@/components/Home/Home";
// import Navbar from "@/components/Navbar/Navbar";

export default function RootLayout({ children }) {
  return (
    <section className="flex md:gap-5">
      <Home />
      <div className="w-full">
        {/* <Navbar /> */}
        {children}
      </div>
    </section>
  );
}
