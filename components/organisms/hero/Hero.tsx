import Image from "next/image";

import { Col, Container, Row } from "@/components/atoms/grid/Grid";
import Headline from "@/components/atoms/headline/Headline";
import { PiUsersThree } from "react-icons/pi";

export default function Hero() {
  return (
    <article className="hero relative pt-10 md:pt-0">
      <div className="hero__style-round-first" />
      <div className="hero__style-round-second" />
      <div className="hero__style-round-third" />
      <Container>
        <Row className="flex-col md:flex-row md:gap-4 md:items-center">
          <Col className="md:basis-1/2">
            <Headline
              tag="h1"
              className="mb-3 text-[var(--dark-blue-200)!important]"
            >
              Welcome to Our Training Academy!
            </Headline>
            <p className="mb-3">
              Unlock your potential in the dynamic world of cybersecurity with
              our expert-led training programs and comprehensive hands-on
              training designed to equip you with the knowledge and practical
              experience needed to excel.
            </p>
          </Col>
          <Col className="md:basis-1/2">
            <div className="w-[80%] mx-auto pt-10 relative text-center">
              <div className="hero__image-round-first" />
              <div className="hero__image-round-second" />
              <div className="absolute bg-white rounded-2xl p-4 flex z-[10] gap-4 bottom-10 left-0 shadow-2xl">
                <PiUsersThree className="text-5xl text-[var(--blue-100)]" />
                <div className="text-left space-y-2">
                  <Headline tag="h2" className="leading-6">
                    1200+
                  </Headline>
                  <p>Active students</p>
                </div>
              </div>
              <Image
                src="/img/academy-1.png"
                alt="Happy Student"
                width={300}
                height={300}
                className="inline-block rounded-lg w-[300px] md:w-[350px] xl:w-[400px] 2xl:w-[500px] z-[5] relative"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </article>
  );
}
