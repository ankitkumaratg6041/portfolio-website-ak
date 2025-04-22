import Image from "next/image";
import authorImage from "@/public/images/authors/akki.jpeg";

export default function Intro() {
  return (
    <section className=" flex items-center gap-x-10 gap-y-4 pb-24 md:flex-row">
      <div className="mt-2 flex-1 md:mt-0">
        <h1 className="title no-underline">Hey, I&#39;m Ankit.</h1>
        <p className="mt-3 font-light text-muted-foreground">
          I&#39;m a Full Stack Developer based in Lethbridge, Canada. I&#39;m
          passionate about learning new technologies and sharing knowledge with
          others. I am equipped with this tech stack: React, Next.js, Node.js,
          Express, MongoDB, and Tailwind CSS. I love to build web applications
          that are user-friendly and efficient. I also enjoy writing about
          technology and sharing my experiences with others. I believe in
          continuous learning and improvement, and I am always looking for new
          challenges to tackle.
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
