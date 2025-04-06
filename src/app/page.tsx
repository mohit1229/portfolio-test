"use client";

import React from "react";
import { DefaultPageLayout } from "@/ui/layouts/DefaultPageLayout";
import { Button } from "@/ui/components/Button";
import {
  FeatherDownload,
  FeatherMail,
  FeatherGithub,
  FeatherExternalLink,
  FeatherAward,
  FeatherLinkedin,
  FeatherTwitter,
} from "@subframe/core";
import { Badge } from "@/ui/components/Badge";
import { IconWithBackground } from "@/ui/components/IconWithBackground";
import { TextField } from "@/ui/components/TextField";
import { TextArea } from "@/ui/components/TextArea";
import { IconButton } from "@/ui/components/IconButton";
import Image from "next/image";
import Link from "next/link";

// Social Links
const socialLinks = {
  github: "https://github.com/mohit1229",
  linkedin: "https://www.linkedin.com/in/mohit-kumar-85b6a7300",
  // twitter: "https://twitter.com/your-twitter",
  email: "https://kumarmohiiit123@gmail.com",
};

// Projects Data
const projects = [
 
  {
    title: "SyntaxContest",
    description:
      "Full Stack Next.js project to track different Coding Contests from Leetcode, Codeforces, CodeChef and more. Also provides user-specific bookmarks and Google Calendar Reminder Integration",
    image:
      "/syntaxImg.png",
    tech: ["Next.js","Typescript", "PostgreSQL", "Prisma"],
    github: "https://github.com/your-github/ai-task-manager",
    demo: "https://syntaxcontest.vercel.app/",
  },
  {
    title:"Simple Task Managment",
    description:"A Full Stack Task Managment App",
    image:"/task.png",
    tech:["React","MongoDB","Node.js"],
    github:"https://github.com/mohit1229/task-mgmnt/",
    demo:"https://task-mgmnt-alpha.vercel.app/"
  },
  {
    title:"KoinX Main Dashboard",
    description:"Created the main dashboard of KoinX leveraging different API endpoints",
    image:"/koinximg.png",
    tech:["React"],
    github:"https://github.com/mohit1229/koinx/",
    demo:"https://koinxfrontendassign.vercel.app/"
  },
];

function PortfolioShowcaseHub() {
  return (
    <DefaultPageLayout>
      <div className="container max-w-none flex h-full w-full flex-col items-start gap-12 py-12 overflow-auto">
        {/* Top Section */}
        <div className="flex w-full flex-col items-center justify-center gap-12 px-6 py-24">
          <div className="flex w-full max-w-[1024px] flex-col items-center justify-center gap-6">
            <div className="relative flex h-36 w-36 flex-none overflow-hidden rounded-full bg-brand-100">
              <Image
                className="absolute h-36 w-36 object-cover"
                src="https://www.pngplay.com/wp-content/uploads/13/Programmer-PNG-HD-Quality.png"
                alt="Profile picture of Mohit Developer"
                width={144}
                height={144}
              />
            </div>
            <div className="flex flex-col items-center gap-4">
              <span className="text-[56px] font-semibold leading-[62px] text-default-font">
                Mohit Kumar
              </span>
              <span className="text-center text-[21px] font-medium text-subtext-color max-w-[576px]">
                Full Stack Developer specializing in modern web technologies and creative solutions
              </span>
              <div className="flex items-center gap-4">
                <Link href={"https://drive.google.com/drive/folders/1IiTNm7DKd3vQIokyBuwK2SzQ7UJZ2kQO?usp=sharing"}><Button
                  size="large"
                  icon={<FeatherDownload />}
                
                >
                  Download Resume
                </Button></Link>
                
                <Button
                  variant="neutral-secondary"
                  size="large"
                  icon={<FeatherMail />}
                  onClick={() => window.open(socialLinks.email)}
                >
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center px-6 py-24 bg-gradient-to-b from-transparent via-neutral-100 to-transparent">
          <div className="flex w-full max-w-[1024px] flex-col items-start gap-16">
            <div className="flex w-full flex-wrap items-end gap-12">
              <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex h-2 w-4 flex-none flex-col items-start gap-2 rounded-full bg-brand-600" />
                  <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                    About Me
                  </span>
                </div>
                <span className="w-full font-['Inter'] text-[56px] font-[600] leading-[62px] text-default-font -tracking-[0.04em]">
                  Passionate about creating impactful solutions
                </span>
              </div>
              <span className="grow shrink-0 basis-0 font-['Inter'] text-[17px] font-[500] leading-[24px] text-subtext-color -tracking-[0.01em]">
                 I focus on
                building scalable and efficient applications. I&#39;m constantly
                learning and adapting to new technologies while maintaining a
                strong foundation in software engineering principles.
              </span>
            </div>
            <div className="flex w-full flex-col items-start gap-12">
              <span className="text-heading-2 font-heading-2 text-default-font">
                Technical Skills
              </span>
              <div className="flex w-full flex-wrap items-start gap-2">
                <Badge>JavaScript</Badge>
                <Badge>TypeScript</Badge>
                <Badge>React</Badge>
                <Badge>Node.js</Badge>
                <Badge>Python</Badge>
                <Badge>Next.js</Badge>
                <Badge variant="neutral">C++</Badge>
                <Badge variant="neutral">MongoDB</Badge>
                <Badge variant="neutral">PostgreSQL</Badge>
                <Badge variant="neutral">Prisma</Badge>

                <Badge variant="neutral">TailwindCSS</Badge>
                <Badge variant="neutral">Git</Badge>



              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        {/* Projects Section */}
<div className="flex w-full flex-col items-center px-6 py-24">
  <div className="flex w-full max-w-[1024px] flex-col items-start gap-12">
    <span className="text-heading-1 font-heading-1 text-default-font">
      Featured Projects
    </span>
    <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col items-center overflow-hidden rounded-2xl shadow-[0px_4px_16px_-4px_#0000000a]"
        >
          <Image
            className="h-full w-full object-cover"
            src={project.image}
            alt={`${project.title} preview`}
            width={1024}
            height={256}
          />
          <div className="flex flex-col items-start gap-4 bg-default-background px-8 py-6 w-full">
            <div>
              <span className="text-heading-2 font-heading-2 text-default-font">
                {project.title}
              </span>
              <p className="text-body font-body text-subtext-color">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <Badge key={idx} variant="neutral">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="brand-secondary"
                icon={<FeatherGithub />}
                onClick={() => window.open(project.github)}
              >
                View Code
              </Button>
              <Button
                variant="neutral-secondary"
                icon={<FeatherExternalLink />}
                onClick={() => window.open(project.demo)}
              >
                Live Demo
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


        {/* Contact Section */}
        <div className="flex w-full flex-col items-center px-6 py-24">
          <div className="flex w-full max-w-[1024px] flex-col items-start gap-12">
            <span className="text-heading-1 font-heading-1 text-default-font">
              Get in Touch
            </span>
            <div className="flex w-full flex-wrap items-start gap-12">
              {/* <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-start gap-6">
                <TextField variant="filled" label="Name">
                  <TextField.Input placeholder="Your name" value="" onChange={() => {}} />
                </TextField>
                <TextField variant="filled" label="Email">
                  <TextField.Input placeholder="Your email" value="" onChange={() => {}} />
                </TextField>
                <TextArea variant="filled" label="Message">
                  <TextArea.Input placeholder="Your message" value="" onChange={() => {}} />
                </TextArea>
                <Button size="large" onClick={() => {}}>
                  Send Message
                </Button>
              </div> */}
              <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-start gap-6">
                <div className="flex items-center gap-4">
                  <IconButton
                    icon={<FeatherGithub />}
                    onClick={() => window.open(socialLinks.github)}
                  />
                  <IconButton
                    icon={<FeatherLinkedin />}
                    onClick={() => window.open(socialLinks.linkedin)}
                  />
                  {/* <IconButton
                    icon={<FeatherTwitter />}
                    onClick={() => window.open(socialLinks.twitter)}
                  /> */}
                  <IconButton
                    icon={<FeatherMail />}
                    onClick={() => window.open(socialLinks.email)}
                  />
                </div>
                <span className="text-body font-body text-subtext-color">
                  Feel free to reach out through any of these channels. I&#39;m always open to discussing new projects and opportunities.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultPageLayout>
  );
}

export default PortfolioShowcaseHub;
