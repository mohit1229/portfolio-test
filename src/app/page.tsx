"use client";

import React from "react";
import { DefaultPageLayout } from "@/ui/layouts/DefaultPageLayout";
import { Button } from "@/ui/components/Button";
import { FeatherDownload } from "@subframe/core";
import { FeatherMail } from "@subframe/core";
import { Badge } from "@/ui/components/Badge";
import { FeatherGithub } from "@subframe/core";
import { FeatherExternalLink } from "@subframe/core";
import { IconWithBackground } from "@/ui/components/IconWithBackground";
import { FeatherAward } from "@subframe/core";
import { TextField } from "@/ui/components/TextField";
import { TextArea } from "@/ui/components/TextArea";
import { IconButton } from "@/ui/components/IconButton";
import { FeatherLinkedin } from "@subframe/core";
import { FeatherTwitter } from "@subframe/core";
import Image from "next/image";

function PortfolioShowcaseHub() {
  return (
    <DefaultPageLayout>
      <div className="container max-w-none flex h-full w-full flex-col items-start gap-12 py-12 overflow-auto">
        <div className="flex w-full flex-col items-center justify-center gap-12 px-6 py-24">
          <div className="flex w-full max-w-[1024px] flex-col items-center justify-center gap-6">
            <div className="flex h-36 w-36 flex-none flex-col items-center justify-center gap-2 overflow-hidden rounded-full bg-brand-100 relative">
              <Image
                className="h-36 w-36 flex-none object-cover absolute"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5"
                alt="Profile picture of John Developer"
                width={144}
                height={144}
              />
            </div>
            <div className="flex flex-col items-center gap-4">
              <span className="font-['Inter'] text-[56px] font-[600] leading-[62px] text-default-font -tracking-[0.04em]">
                John Developer
              </span>
              <span className="max-w-[576px] font-['Inter'] text-[21px] font-[500] leading-[28px] text-subtext-color text-center -tracking-[0.03em]">
                Full Stack Developer specializing in modern web technologies and
                creative solutions
              </span>
              <div className="flex items-center gap-4">
                <Button
                  size="large"
                  icon={<FeatherDownload />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Download Resume
                </Button>
                <Button
                  variant="neutral-secondary"
                  size="large"
                  icon={<FeatherMail />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
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
                With over 5 years of experience in web development, I focus on
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
                <Badge>AWS</Badge>
                <Badge variant="neutral">Docker</Badge>
                <Badge variant="neutral">MongoDB</Badge>
                <Badge variant="neutral">PostgreSQL</Badge>
                <Badge variant="neutral">GraphQL</Badge>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center px-6 py-24">
          <div className="flex w-full max-w-[1024px] flex-col items-start gap-12">
            <span className="text-heading-1 font-heading-1 text-default-font">
              Featured Projects
            </span>
            <div className="flex w-full flex-wrap items-start gap-6">
              <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-center self-stretch overflow-hidden rounded-2xl shadow-[0px_4px_16px_-4px_#0000000a]">
                <Image
                  className="h-64 w-full flex-none object-cover"
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
                  alt="E-commerce Platform project preview"
                  width={1024}
                  height={256}
                />
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-4 bg-default-background px-8 py-6">
                  <div className="flex w-full flex-col items-start gap-2">
                    <span className="text-heading-2 font-heading-2 text-default-font">
                      E-commerce Platform
                    </span>
                    <span className="text-body font-body text-subtext-color">
                      Full-stack e-commerce solution with real-time inventory
                      management
                    </span>
                  </div>
                  <div className="flex flex-wrap items-start gap-2">
                    <Badge variant="neutral">React</Badge>
                    <Badge variant="neutral">Node.js</Badge>
                    <Badge variant="neutral">MongoDB</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="brand-secondary"
                      icon={<FeatherGithub />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      View Code
                    </Button>
                    <Button
                      variant="neutral-secondary"
                      icon={<FeatherExternalLink />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-center self-stretch overflow-hidden rounded-2xl shadow-[0px_4px_16px_-4px_#0000000a]">
                <Image
                  className="h-64 w-full flex-none object-cover"
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                  alt="AI Task Manager project preview"
                  width={1024}
                  height={256}
                />
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-4 bg-default-background px-8 py-6">
                  <div className="flex w-full flex-col items-start gap-2">
                    <span className="text-heading-2 font-heading-2 text-default-font">
                      AI Task Manager
                    </span>
                    <span className="text-body font-body text-subtext-color">
                      Smart task management system with AI-powered
                      prioritization
                    </span>
                  </div>
                  <div className="flex flex-wrap items-start gap-2">
                    <Badge variant="neutral">Python</Badge>
                    <Badge variant="neutral">TensorFlow</Badge>
                    <Badge variant="neutral">FastAPI</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="brand-secondary"
                      icon={<FeatherGithub />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      View Code
                    </Button>
                    <Button
                      variant="neutral-secondary"
                      icon={<FeatherExternalLink />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center px-6 py-24 bg-gradient-to-b from-transparent via-neutral-100 to-transparent">
          <div className="flex w-full max-w-[1024px] flex-col items-start gap-12">
            <span className="text-heading-1 font-heading-1 text-default-font">
              Education
            </span>
            <div className="flex w-full flex-col items-start gap-6">
              <div className="flex w-full items-start gap-4 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6">
                <IconWithBackground size="large" icon={<FeatherAward />} />
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2">
                  <span className="text-heading-2 font-heading-2 text-default-font">
                    Master of Computer Science
                  </span>
                  <span className="text-body font-body text-subtext-color">
                    Stanford University • 2018 - 2020
                  </span>
                </div>
              </div>
              <div className="flex w-full items-start gap-4 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6">
                <IconWithBackground size="large" icon={<FeatherAward />} />
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2">
                  <span className="text-heading-2 font-heading-2 text-default-font">
                    Bachelor of Engineering
                  </span>
                  <span className="text-body font-body text-subtext-color">
                    MIT • 2014 - 2018
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center px-6 py-24">
          <div className="flex w-full max-w-[1024px] flex-col items-start gap-12">
            <span className="text-heading-1 font-heading-1 text-default-font">
              Get in Touch
            </span>
            <div className="flex w-full flex-wrap items-start gap-12">
              <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-start gap-6">
                <TextField
                  className="h-auto w-full flex-none"
                  variant="filled"
                  label="Name"
                  helpText=""
                >
                  <TextField.Input
                    placeholder="Your name"
                    value=""
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {}}
                  />
                </TextField>
                <TextField
                  className="h-auto w-full flex-none"
                  variant="filled"
                  label="Email"
                  helpText=""
                >
                  <TextField.Input
                    placeholder="Your email"
                    value=""
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {}}
                  />
                </TextField>
                <TextArea
                  className="h-auto w-full flex-none"
                  variant="filled"
                  label="Message"
                  helpText=""
                >
                  <TextArea.Input
                    placeholder="Your message"
                    value=""
                    onChange={(
                      event: React.ChangeEvent<HTMLTextAreaElement>
                    ) => {}}
                  />
                </TextArea>
                <Button
                  size="large"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Send Message
                </Button>
              </div>
              <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-start gap-6">
                <div className="flex items-center gap-4">
                  <IconButton
                    icon={<FeatherGithub />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                  <IconButton
                    icon={<FeatherLinkedin />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                  <IconButton
                    icon={<FeatherTwitter />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                  <IconButton
                    icon={<FeatherMail />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                </div>
                <span className="text-body font-body text-subtext-color">
                  Feel free to reach out through any of these channels. I&#39;m
                  always open to discussing new projects and opportunities.
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