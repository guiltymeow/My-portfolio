import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start ml-20 mr-20"
          }
        >
          <h2 style={{ color: 'red' }} className="text-xl md:text-2xl text-left w-full capitalize">
            A Little About Me
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            Hi! I'm Maikho Amante aslo known as GuiltyMeow, a passionate developer with 1 year of experience in mobile app development and 6 months of experience in web development.
            Over the past year, I've had the opportunity to create user-friendly and efficient mobile applications, focusing on seamless performance and intuitive design.
            In addition to my mobile development skills, I have also honed my web development skills, where I've worked with various frontend and backend technologies to build dynamic and responsive websites.
            I’m always eager to learn new technologies and expand my skill set, and I’m excited to contribute to projects that bring innovative solutions to life.
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent ml-20 mr-20"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl" style={{ color: 'red' }}>
            7+<sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent ml-20 mr-20"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl" style={{ color: 'red' }}>
            1+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0 ml-20 mr-20"}
        >
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=guiltymeow&theme=transparent&hide_border=true&title_color=FF0000&text_color=FFFFFF&icon_color=FEFE5B&text_bold=true"
            alt="GUILTYMEOW"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0 ml-20 mr-20"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com?user=guiltymeow&theme=dark&hide_border=true&currStreakNum=FF0000&ring=FF0000&background=EB545400&currStreakLabel=FFFFFF"
            alt="GUILTYMEOW"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full ml-20 mr-20"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=java,js,threejs,vscode,figma,firebase,git,github,css,html,jquery,mysql,nextjs,nodejs,npm,react,tailwind,vercel,vite,yarn,aws,cloudflare`}
            alt="Tech stack icons"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
