"use client";

import { useState } from "react";

import { Col, Container, Row } from "@/components/atoms/grid/Grid";
import { Course, MobileFilter, Tabs } from "./Course.partials";
import { filterCourses } from "./Course.util";
import { Filters } from "./Course.types";
import SectionHeading from "@/components/molecules/section-heading/SectionHeading";

export default function Courses() {
  const [activeFilter, setActiveFilter] = useState<Filters>("all");
  const filteredCourses = filterCourses(activeFilter);

  return (
    <article className="py-15 md:py-10 xl:py-15">
      <Container>
        <Row className="flex-row justify-between items-center mb-4 md:mb-5 xl:mb-10">
          <SectionHeading text="Our Courses" />
          <MobileFilter
            activeFilter={activeFilter}
            onSetFilter={setActiveFilter}
          />
          <Tabs activeFilter={activeFilter} onSetFilter={setActiveFilter} />
        </Row>
        <Row className="flex-col gap-4 md:flex-row md:flex-wrap xl:gap-8 items-stretch">
          {filteredCourses.map((course) => (
            <Col className="md:basis-[31.5%]" key={course.image}>
              <Course {...course} />
            </Col>
          ))}
        </Row>
      </Container>
    </article>
  );
}
