import Image from "next/image";
import authorImage from "@/public/images/authors/akki.jpeg";

export default function Intro() {
  return (
    <section className=" flex items-center gap-x-10 gap-y-4 pb-24 md:flex-row">
      <div className="mt-2 flex-1 md:mt-0">
        <h1 className="title no-underline">Hey, I&#39;m Ankit.</h1>
        <p className="mt-3 font-light text-muted-foreground">
          Hey, I’m Ankit Kumar — a Full Stack Developer and Data Analyst who
          loves turning ideas into real-world applications and data into
          meaningful insights.
          <br />
          <br />I build modern web apps using{" "}
          <strong>
            React, Next.js, Node.js, Express, MongoDB, and Tailwind CSS
          </strong>
          , and when I’m not busy crafting user-friendly interfaces or building
          APIs, you’ll find me deep in data — writing{" "}
          <strong>SQL queries</strong>, working with{" "}
          <strong>NoSQL databases</strong>, analyzing trends with{" "}
          <strong>Python</strong>, and creating dashboards in{" "}
          <strong>Power BI and Excel</strong>.
          <br />
          <br />
          I’m big on writing clean, tested code (thanks to <strong>Jest</strong>
          ), managing projects with <strong>Jira</strong>, and working in{" "}
          <strong>Agile teams</strong>. I'm also levelling up my skills in{" "}
          <strong>DSA</strong> (daily grind 💻) and diving into{" "}
          <strong>AWS</strong> to get cloud-ready ☁️.
          <br />
          <br />
          Whether it’s frontend finesse, backend logic, or data storytelling — I
          love building things that work well and make sense. I'm all about
          continuous growth, learning by doing, and helping others along the
          way.
          <br />
          <br />
          👉 Check out my projects on{" "}
          <a
            href="https://github.com/ankitkumaratg6041"
            target="_blank"
            className="underline"
          >
            GitHub
          </a>
          &nbsp;|&nbsp; 🔗 Let’s connect on{" "}
          <a
            href="https://www.linkedin.com/in/ankitkumaratg/"
            target="_blank"
            className="underline"
          >
            LinkedIn
          </a>
        </p>
      </div>
      <div className="relative">
        <Image
          className="flex-1 rounded-lg grayscale"
          src={authorImage}
          alt="Hamed Bahram"
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  );
}
