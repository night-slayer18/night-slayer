import clsx from "clsx";
import React from "react";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "@/components/Bounded";
import { isFilled } from "@prismicio/client";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaCode, FaSpotify, FaDiscord } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <Bounded as="footer" className="text-slate-600">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 sm:flex-row ">
        <div className="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start">
          <Link
            href="/"
            className="text-xl font-extrabold tracking-tighter text-slate-100 transition-colors duration-150 hover:text-yellow-400"
          >
            {settings.data.name}
          </Link>
          <span
            className="hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline"
            aria-hidden={true}
          >
            /
          </span>
          <p className=" text-sm text-slate-300 ">
            © {new Date().getFullYear()} {settings.data.name}
          </p>
        </div>
        <div className="socials inline-flex justify-center sm:justify-end">
          {isFilled.link(settings.data.github_link) && (
            <PrismicNextLink
              field={settings.data.github_link}
              className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
              aria-label={settings.data.name + " on GitHub"}
            >
              <FaGithub />
            </PrismicNextLink>
          )}
          {isFilled.link(settings.data.twitter_link) && (
            <PrismicNextLink
              field={settings.data.twitter_link}
              className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
              aria-label={settings.data.name + " on Twitter"}
            >
              <FaTwitter />
            </PrismicNextLink>
          )}
          {isFilled.link(settings.data.linkedin_link) && (
            <PrismicNextLink
              field={settings.data.linkedin_link}
              className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
              aria-label={settings.data.name + " on LinkedIn"}
            >
              <FaLinkedin />
            </PrismicNextLink>
          )}
          {isFilled.link(settings.data.instagram_link) && (
            <PrismicNextLink
              field={settings.data.instagram_link}
              className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
              aria-label={settings.data.name + " on Instagram"}
            >
              <FaInstagram/>
            </PrismicNextLink>
          )}
          {isFilled.link(settings.data.portfolio_link) && (
            <PrismicNextLink
              field={settings.data.portfolio_link}
              className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
              aria-label={settings.data.name + " on Website"}
            >
              <FaCode />
            </PrismicNextLink>
          )}
          {isFilled.link(settings.data.email_link) && (
            <PrismicNextLink
              field={settings.data.email_link}
              className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
              aria-label={settings.data.name + " on Website"}
            >
              <IoIosMail />
            </PrismicNextLink>
          )}
          {isFilled.link(settings.data.spotify_link) && (
            <PrismicNextLink
              field={settings.data.spotify_link}
              className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
              aria-label={settings.data.name + " on Website"}
            >
              <FaSpotify />
            </PrismicNextLink>
          )}
          {isFilled.link(settings.data.discord_link) && (
            <PrismicNextLink
              field={settings.data.discord_link}
              className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
              aria-label={settings.data.name + " on Website"}
            >
              <FaDiscord />
            </PrismicNextLink>
          )}

        </div>
      </div>
    </Bounded>
  );
}