// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomepageDocumentDataSlicesSlice = HeroSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Name field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Github Link field in *Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.github_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  github_link: prismic.LinkField;

  /**
   * Linkedin Link field in *Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.linkedin_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  linkedin_link: prismic.LinkField;

  /**
   * Instagram Link field in *Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.instagram_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  instagram_link: prismic.LinkField;

  /**
   * Portfolio Link field in *Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.portfolio_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  portfolio_link: prismic.LinkField;

  /**
   * Twitter Link field in *Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.twitter_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  twitter_link: prismic.LinkField;

  /**
   * Email Link field in *Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.email_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  email_link: prismic.LinkField;

  /**
   * Spotify Link field in *Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.spotify_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  spotify_link: prismic.LinkField;

  /**
   * Discord Link field in *Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.discord_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  discord_link: prismic.LinkField /**
   * Meta Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_title
   * - **Tab**: SEO and Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: SEO and Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * OG Image field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.og_image
   * - **Tab**: SEO and Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  og_image: prismic.KeyTextField;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes = HomepageDocument | SettingsDocument;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * First Name field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.first_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  first_name: prismic.KeyTextField;

  /**
   * Last Name field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.last_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  last_name: prismic.KeyTextField;

  /**
   * Tag Line field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.tag_line
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tag_line: prismic.KeyTextField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      AllDocumentTypes,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
    };
  }
}
