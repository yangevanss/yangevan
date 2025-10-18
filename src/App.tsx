import { Squircle } from "@squircle-js/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
  ItemActions,
} from "@/components/ui/item";
import { ScrollArea } from "@/components/ui/scroll-area";

// import noise from "@/assets/noise.webp";
import avatar from "@/assets/avatar.webp";

function App() {
  return (
    <>
      {/* <span
        className="pointer-events-none fixed inset-0 mix-blend-hard-light"
        style={{
          backgroundImage: `url(${noise})`,
        }}
      ></span> */}
      <ScrollArea>
        <div className="h-screen">
          <div className="pt-20 pb-40">
            <div className="container max-w-2xl">
              <div>
                <div className="flex items-start gap-4">
                  <Squircle cornerRadius={6} cornerSmoothing={1}>
                    <Avatar className="rounded-none">
                      <AvatarImage src={avatar} alt="Evan Yang" />
                      <AvatarFallback>EY</AvatarFallback>
                    </Avatar>
                  </Squircle>
                  <div className="flex flex-col gap-6">
                    <div className="font-medium">
                      <h1 className="leading-none">Evan Yang</h1>
                      <p className="text-muted-foreground">Frontend Engineer</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">
                        Enjoy building beautiful user interfaces, thinking about
                        user experience, and exploring the latest technologies.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="my-16">
                  <Separator variant="gradient"></Separator>
                </div>
              </div>

              <div className="flex flex-col gap-32">
                <section className="flex flex-col gap-8">
                  <p className="font-medium">Experience</p>
                  <div className="relative">
                    <span className="bg-foreground/30 absolute top-1 left-1.5 z-[-1] h-full w-[1px] [mask-image:linear-gradient(to_bottom,#fff,#fff_60%,transparent_100%)]"></span>
                    <ul className="flex flex-col gap-8">
                      <li className="flex items-start gap-10">
                        <div className="text-muted-foreground before:bg-primary before:border-primary flex w-1/7 shrink-0 items-start gap-4 text-sm font-medium whitespace-nowrap before:mt-1 before:block before:size-3 before:shrink-0 before:rounded-full before:border">
                          Now
                        </div>
                        <div className="flex w-full flex-col gap-4">
                          <div className="flex flex-col items-start gap-2">
                            <Button
                              variant="link"
                              size="icon"
                              className="text-foreground flex size-auto justify-start text-base leading-none font-medium"
                              asChild
                            >
                              <a
                                href="https://kkcompany.com"
                                target="_blank"
                                rel="noreferrer"
                              >
                                KKCompany
                              </a>
                            </Button>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              Developing and maintaining custom OTT streaming
                              platforms.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="flex items-start gap-10">
                        <div className="text-muted-foreground before:bg-secondary flex w-1/7 shrink-0 items-start gap-4 text-sm font-medium whitespace-nowrap before:mt-1 before:block before:size-3 before:shrink-0 before:rounded-full before:border">
                          2025
                        </div>
                        <div className="flex w-full flex-col gap-4">
                          <div className="flex flex-col items-start gap-2">
                            <Button
                              variant="link"
                              size="icon"
                              className="text-foreground flex size-auto justify-start text-base leading-none font-medium"
                              asChild
                            >
                              <a
                                href="https://www.catchplay.com"
                                target="_blank"
                                rel="noreferrer"
                              >
                                CATCHPLAY
                              </a>
                            </Button>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              Responsible for video player development and
                              optimization, CATCHPLAY website refactoring and
                              maintenance, and Fanloop platform development.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="flex items-start gap-10">
                        <div className="text-muted-foreground before:bg-secondary flex w-1/7 shrink-0 items-start gap-4 text-sm font-medium whitespace-nowrap before:mt-1 before:block before:size-3 before:shrink-0 before:rounded-full before:border">
                          2022
                        </div>
                        <div className="flex w-full flex-col gap-4">
                          <div className="flex flex-col items-start gap-2">
                            <Button
                              variant="link"
                              size="icon"
                              className="text-foreground flex size-auto justify-start text-base leading-none font-medium"
                              asChild
                            >
                              <a
                                href="https://blockstudio.tw"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Block Studio
                              </a>
                            </Button>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              Developed custom dynamic websites, handled
                              full-stack development, performance optimization,
                              SEO, and ongoing maintenance.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </section>

                <section className="flex flex-col gap-8">
                  <p className="font-medium">Side Projects</p>
                  <div className="flex flex-col gap-6">
                    <Item variant="outline">
                      <ItemContent>
                        <ItemTitle>Mewdio</ItemTitle>
                        <ItemDescription>
                          A global online radio platform for everyone
                        </ItemDescription>
                      </ItemContent>
                      <ItemActions>
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href="https://www.mewdio.app"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Open
                          </a>
                        </Button>
                      </ItemActions>
                    </Item>

                    <Item variant="outline">
                      <ItemContent>
                        <ItemTitle>Convertors</ItemTitle>
                        <ItemDescription>
                          Fast, Beautiful, and Accurate Conversion Experience
                        </ItemDescription>
                      </ItemContent>
                      <ItemActions>
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href="https://www.convertors.app"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Open
                          </a>
                        </Button>
                      </ItemActions>
                    </Item>

                    <Item variant="outline">
                      <ItemContent>
                        <ItemTitle>Translate Audio</ItemTitle>
                        <ItemDescription>
                          Immediately translate website audio from any languages
                        </ItemDescription>
                      </ItemContent>
                      <ItemActions>
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href="https://chromewebstore.google.com/detail/translate-audio/biigkeablonfnliejoccopfpmeeobnmo"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Open
                          </a>
                        </Button>
                      </ItemActions>
                    </Item>
                  </div>
                </section>

                <section className="flex flex-col gap-8">
                  <p className="font-medium">Tools</p>
                  <div>
                    <Badge variant="outline" className="mb-4">
                      Now
                    </Badge>
                    <ul className="flex flex-col gap-1 pl-1">
                      <li className="flex gap-4">
                        <div className="text-muted-foreground min-w-[120px] font-medium">
                          Frontend
                        </div>
                        <div className="text-sm tracking-wide">
                          React, Next.js, Tailwind CSS
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="text-muted-foreground min-w-[120px] font-medium">
                          Backend
                        </div>
                        <div className="text-sm tracking-wide">
                          Node.js, Payload, Supabase
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="text-muted-foreground min-w-[120px] font-medium">
                          UI / Animation
                        </div>
                        <div className="text-sm tracking-wide">
                          shadcn/ui, motion
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="text-muted-foreground min-w-[120px] font-medium">
                          Develop
                        </div>
                        <div className="text-sm tracking-wide">
                          Vite, Turborepo, Docker
                        </div>
                      </li>
                    </ul>
                  </div>
                  <Separator></Separator>
                  <div>
                    <Badge variant="outline" className="mb-4">
                      Past
                    </Badge>
                    <ul className="flex flex-col gap-1 pl-1">
                      <li className="flex gap-4">
                        <div className="text-muted-foreground min-w-[120px] font-medium">
                          Frontend
                        </div>
                        <div className="text-sm tracking-wide">
                          Vue.js, Nuxt, Scss
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="text-muted-foreground min-w-[120px] font-medium">
                          Backend
                        </div>
                        <div className="text-sm tracking-wide">
                          PHP, Wordpress, Strapi
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="text-muted-foreground min-w-[120px] font-medium">
                          UI / Animation
                        </div>
                        <div className="text-sm tracking-wide">
                          GSAP, Three.js
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="text-muted-foreground min-w-[120px] font-medium">
                          Develop
                        </div>
                        <div className="text-sm tracking-wide">
                          Webpack, Rollup
                        </div>
                      </li>
                    </ul>
                  </div>
                </section>

                <section className="flex flex-col gap-8">
                  <p className="font-medium">Contact</p>
                  <div className="flex flex-col items-start">
                    <Button variant="link" asChild>
                      <a
                        href="mailto:yangevanss@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="p-0!"
                      >
                        yangevanss@gmail.com
                      </a>
                    </Button>
                    <Button variant="link" asChild>
                      <a
                        href="https://github.com/yangevanss"
                        target="_blank"
                        rel="noreferrer"
                        className="p-0!"
                      >
                        Github
                      </a>
                    </Button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </>
  );
}

export default App;
