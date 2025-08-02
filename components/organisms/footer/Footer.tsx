import { Container } from "@/components/atoms/grid/Grid";

export default function Footer() {
  return (
    <footer className="py-4 lg:py-10 bg-[var(--dark-blue-200)] text-white">
      <Container>
        <p className="text-center">
          Cybersive &copy; 2025 | All rights reserved
        </p>
      </Container>
    </footer>
  );
}
