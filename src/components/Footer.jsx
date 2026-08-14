export default function Footer() {
  return (
    <footer className="site-footer">
      <p>Designed and developed for Raya Sesan Firdaus &copy; {new Date().getFullYear()}</p>
      <p>Portfolio focused on data, AI applications, and analytics projects.</p>
      <nav aria-label="Footer links">
        <a href="#top">Back to top</a>
        <a href="https://github.com/rayasesan" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/rayasesann" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </nav>
    </footer>
  );
}
