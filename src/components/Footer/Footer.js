import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Container from '../ui/Container';

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          &copy; {new Date().getFullYear()} Stefanos Poulimas
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Skelly-debug"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-paper"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/stefanos-poulimas-a57029250/?originalSubdomain=gr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-paper"
          >
            <FaLinkedin />
          </a>
        </div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Built with Next.js
        </p>
      </Container>
    </footer>
  );
}
