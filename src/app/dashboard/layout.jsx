import Dasboard from "@/components/Dasboard/Dasboard";

export default function RootLayout({ children }) {
    return (
      <section className="flex">
      <Dasboard/>
          {children}
      </section>
    );
  }