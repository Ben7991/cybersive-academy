import { CourseType, Filters } from "./Course.types";

const COURSES: Array<CourseType> = [
  {
    image: "/img/course-1.jpg",
    title: "Defensive Security Analyst Level I",
    category: "defense",
    description:
      "Build a strong foundation in cybersecurity defense, covering essential concepts and practical techniques to protect systems and data.",
  },
  {
    image: "/img/course-2.jpg",
    title: "Defensive Security Analyst Level II",
    category: "defense",
    description:
      "Advance your defensive capabilities with deeper dives into threat detection, incident response, and security architecture.",
  },
  {
    image: "/img/course-3.jpg",
    title: "Defensive Security Analyst Level III",
    category: "defense",
    description:
      "Master advanced defensive strategies, including complex attack analysis, sophisticated countermeasure implementation, and security posture optimization.",
  },
  {
    image: "/img/course-4.jpg",
    title: "Security Operations Engineer I",
    category: "operations",
    description:
      "Learn the fundamentals of security operations, including monitoring, analysis, and basic incident handling within a Security Operations Center (SOC) environment.",
  },
  {
    image: "/img/course-5.jpg",
    title: "Security Operations Engineer II",
    category: "operations",
    description:
      "Develop advanced skills in managing and optimizing security operations, focusing on automation, threat intelligence integration, and advanced incident management.",
  },
  {
    image: "/img/course-6.jpg",
    title: "Offensive Security Analyst Level I",
    category: "offensive",
    description:
      "Explore the world of ethical hacking and penetration testing, covering reconnaissance, vulnerability scanning, and initial exploitation techniques, teaching you how to think like an attacker to better defend systems.",
  },
  {
    image: "/img/course-7.jpg",
    title: "Offensive Security Analyst Level II",
    category: "offensive",
    description:
      "Advance your offensive security skills with deeper dives into advanced exploitation, post-exploitation techniques, privilege escalation, Active Directory attack and defense, and AWS Pentesting, along with red teaming methodologies.",
  },
];

export const filterCourses = (filter: Filters) => {
  if (filter === "all") {
    return COURSES;
  }

  return COURSES.filter((course) => course.category === filter);
};
