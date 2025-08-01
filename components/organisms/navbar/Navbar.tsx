"use client";

import Link from "next/link";

import Button from "@/components/atoms/button/Button";
import { Container, Row } from "@/components/atoms/grid/Grid";
import AppLogo from "@/components/molecules/app-logo/AppLogo";

export default function Navbar() {
  return (
    <nav className="py-3 md:py-5">
      <Container>
        <Row className="justify-between items-center">
          <Link href="/" className="block">
            <AppLogo />
          </Link>
          <Button
            el="button"
            variant="primary"
            className="inline-block px-4 cursor-pointer"
          >
            Inquire now
          </Button>
        </Row>
      </Container>
    </nav>
  );
}
