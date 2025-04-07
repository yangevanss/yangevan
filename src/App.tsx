import { useState, useEffect } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import { Keynote } from "@/components/Keynote";

// import noise from "@/assets/noise.webp";
import avatar from "@/assets/avatar.webp";

function App() {
  const [openKeynote, setOpenKeynote] = useState(false);

  useEffect(() => {
    const keydownHandler = (e: KeyboardEvent) => {
      if (e.metaKey && e.key === "k" && !e.repeat) {
        e.preventDefault();

        setOpenKeynote((prev) => !prev);
      }
    };

    window.addEventListener("keydown", keydownHandler);

    return () => {
      window.removeEventListener("keydown", keydownHandler);
    };
  }, []);

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
                <div className="flex gap-4">
                  <Avatar>
                    <AvatarImage src={avatar} alt="Evan Yang" />
                    <AvatarFallback>EY</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-6">
                    <div className="font-medium">
                      <h1 className="leading-none">Evan Yang</h1>
                      <p className="text-muted-foreground">Frontend Engineer</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">
                        喜歡開發美觀的使用介面，思考使用者體驗，以及追尋最新技術。
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
                  <p className="font-serif font-medium">Experience</p>
                  <div className="relative">
                    <span className="bg-foreground/30 absolute top-1 left-1.5 z-[-1] h-full w-[1px] [mask-image:linear-gradient(to_bottom,#fff,#fff_60%,transparent_100%)]"></span>
                    <ul className="flex flex-col gap-6">
                      <li className="flex items-start gap-10">
                        <div className="text-muted-foreground before:bg-secondary flex items-start gap-4 text-sm font-medium whitespace-nowrap before:mt-1 before:block before:size-3 before:rounded-full before:border">
                          - 2025
                        </div>
                        <div className="flex w-full flex-col gap-4">
                          <div className="flex flex-col items-start gap-3">
                            <Button
                              variant="link"
                              size="icon"
                              className="text-foreground flex size-auto justify-start text-base leading-none font-medium"
                              asChild
                            >
                              <a
                                href="https://www.catchplay.com/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                CATCHPLAY
                              </a>
                            </Button>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline">React</Badge>
                              <Badge variant="outline">Next.js</Badge>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              負責影片播放器的開發與效能優化，以及網站日常重構與維護工作，同時也協助
                              Fanloop 平台的開發專案。
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="flex items-start gap-10">
                        <div className="text-muted-foreground before:bg-secondary flex items-start gap-4 text-sm font-medium whitespace-nowrap before:mt-1 before:block before:size-3 before:rounded-full before:border">
                          - 2022
                        </div>
                        <div className="flex w-full flex-col gap-4">
                          <div className="flex flex-col items-start gap-3">
                            <Button
                              variant="link"
                              size="icon"
                              className="text-foreground flex size-auto justify-start text-base leading-none font-medium"
                              asChild
                            >
                              <a
                                href="https://blockstudio.tw/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Block Studio
                              </a>
                            </Button>
                            <div className="flex items-center gap-3">
                              <Badge variant="outline">Vue.js</Badge>
                              <Badge variant="outline">Nuxt</Badge>
                              <Badge variant="outline">Wordpress</Badge>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              專注開發客製化動態網站，涵蓋前後端開發、網站效能與
                              SEO
                              優化等工作，同時負責維護客戶網站並提供定期更新服務。
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </section>

                <section className="flex flex-col gap-8">
                  <p className="font-serif font-medium">Projects</p>
                  <div className="flex flex-col gap-6">
                    <a
                      href="https://www.convertors.app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Card className="hover:bg-muted transition-[background] duration-300">
                        <CardHeader>
                          <div className="flex flex-col gap-2">
                            <CardTitle>Convertors</CardTitle>
                            <CardDescription>
                              快速、美觀、準確的轉換體驗
                            </CardDescription>
                          </div>
                        </CardHeader>
                      </Card>
                    </a>
                    <a
                      href="https://chromewebstore.google.com/detail/translate-audio/biigkeablonfnliejoccopfpmeeobnmo"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Card className="hover:bg-muted transition-[background] duration-300">
                        <CardHeader>
                          <div className="flex flex-col gap-2">
                            <CardTitle>Translate Audio</CardTitle>
                            <CardDescription>
                              輕鬆翻譯網頁上的語音
                            </CardDescription>
                          </div>
                        </CardHeader>
                      </Card>
                    </a>
                  </div>
                </section>

                <section className="flex flex-col gap-8">
                  <p className="font-serif font-medium">Tools</p>
                  <div>
                    <Badge variant="outline" className="mb-4">
                      Now
                    </Badge>
                    <ul className="flex flex-col gap-2 pl-1">
                      <li className="flex gap-4">
                        <div className="text-muted-foreground min-w-[120px] font-medium">
                          Frontend
                        </div>
                        <div className="tracking-wide">
                          React, Next.js, Tailwind CSS
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="text-muted-foreground min-w-[120px] font-medium">
                          Backend
                        </div>
                        <div className="tracking-wide">
                          Node.js, Payload, Supabase
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="text-muted-foreground min-w-[120px] font-medium">
                          UI / Animation
                        </div>
                        <div className="tracking-wide">shadcn/ui, motion</div>
                      </li>
                      <li className="flex gap-4">
                        <div className="text-muted-foreground min-w-[120px] font-medium">
                          Develop
                        </div>
                        <div className="tracking-wide">
                          Vite, Turborepo, Docker
                        </div>
                      </li>
                    </ul>
                  </div>
                  <Separator variant="gradient"></Separator>
                  <div>
                    <Badge variant="outline" className="mb-4">
                      Past
                    </Badge>
                    <ul className="flex flex-col gap-2 pl-1">
                      <li className="flex gap-4">
                        <div className="text-muted-foreground min-w-[120px] font-medium">
                          Frontend
                        </div>
                        <div className="tracking-wide">Vue.js, Nuxt, Scss</div>
                      </li>
                      <li className="flex gap-4">
                        <div className="text-muted-foreground min-w-[120px] font-medium">
                          Backend
                        </div>
                        <div className="tracking-wide">
                          PHP, Wordpress, Strapi
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="text-muted-foreground min-w-[120px] font-medium">
                          UI / Animation
                        </div>
                        <div className="tracking-wide">GSAP, Three.js</div>
                      </li>
                      <li className="flex gap-4">
                        <div className="text-muted-foreground min-w-[120px] font-medium">
                          Develop
                        </div>
                        <div className="tracking-wide">Webpack, Rollup</div>
                      </li>
                    </ul>
                  </div>
                </section>

                <section className="flex flex-col gap-8">
                  <p className="font-serif font-medium">Contact</p>
                  <div className="flex flex-col items-start">
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
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
      <Dialog open={openKeynote} onOpenChange={setOpenKeynote}>
        <DialogContent className="w-full! max-w-[90cqmax]! focus-visible:outline-none">
          <Keynote></Keynote>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default App;
