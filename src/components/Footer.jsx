import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6">
        <SocialLinks />
        <p className="text-sm opacity-60">
          &copy; {new Date().getFullYear()} Gabriel Machado
        </p>
      </div>
    </footer>
  );
}
