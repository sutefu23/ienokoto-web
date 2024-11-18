// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import CatchTop from "~/img/top/top_catch.jpg";
import CatchReform from "~/img/catch_reform.jpg";
import CatchReproduction from "~/img/catch_reproduction.jpg";
import CatchLearn from "~/img/catch_learn.jpg";
import CatchConsult from "~/img/catch_consult.jpg";
import CatchStaff from "~/img/catch_staff.jpg";
import CatchRinovation from "~/img/catch_staff.jpg";
export const SITE_TITLE =
  "福岡県太宰府市のリフォーム会社イエノコト|大野城市・春日市・筑紫野市のリフォームも対応";
export const SITE_DESCRIPTION =
  "太宰府市のリフォーム会社。お客様の暮らしやすさを女性スタッフがご提案。春日市、筑紫野市、大野城市のリフォームも対応。台所、キッチンからお風呂、洗面所、脱衣所収納まで。女性の専門スタッフが丁寧にヒアリング。口コミ、事例紹介など。リフォームだけではなく、片付け等生活に関するご相談にも応じています。";
export const PAGES = {
  HOME: {
    slug: "/",
    title: "ホーム",
    className: "home",
    catchImage: CatchTop,
  },
  REFORM: {
    slug: "/reform",
    title: "リフォーム",
    className: "reform",
    catchImage: CatchReform,
  },
  REPRODUCTION: {
    slug: "/reproduction",
    title: "古民家再生",
    className: "reproduction",
    catchImage: CatchReproduction,
  },
  CONSULT: {
    slug: "/consult",
    title: "家のコト相談窓口",
    className: "consult",
    catchImage: CatchConsult,
  },
  LEARN: {
    slug: "/learn",
    title: "暮らしを学ぶ",
    className: "learn",
    catchImage: CatchLearn,
  },
  STAFF: {
    slug: "/staff",
    title: "イエノコトのスタッフ",
    className: "staff",
    catchImage: CatchStaff,
  },
} as const satisfies {
  [key: string]: {
    slug: string;
    title: string;
    className: string;
    catchImage: string;
  };
};
export const PageKeys = Object.keys(PAGES) as (keyof typeof PAGES)[];
export type PageKey = (typeof PageKeys)[number];
