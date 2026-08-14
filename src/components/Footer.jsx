export default function Footer() {
  return (
    <footer className="border-t border-r-steel py-7">
      <div className="max-w-[1100px] mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-r-steel text-[12px]">&copy; {new Date().getFullYear()} Raya Sesan Firdaus</p>
        <p className="text-r-steel text-[12px]">Built with code, data & curiosity.</p>
      </div>
    </footer>
  );
}
