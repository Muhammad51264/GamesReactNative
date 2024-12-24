import React, { Fragment } from "react";
import { getMostCommonGames } from "../../api/gamesService";
import { View } from "react-native";
import DefaultText from "../shared/DefaultText/DefaultText";
import styles from "./MostCommonGames.styles";
import Carousel from "../Carousel/Carousel";
import SimpleCard from "../SimpleCard/SimpleCard";

function MostCommonGames() {
  // const games = getMostCommonGames();
  // console.log(games);

  const games = [
    {
      id: 3498,
      slug: "grand-theft-auto-v",
      name: "Grand Theft Auto V",
      released: "2013-09-17",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
      rating: 4.47,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: "exceptional",
          count: 4182,
          percent: 59.13,
        },
        {
          id: 4,
          title: "recommended",
          count: 2309,
          percent: 32.65,
        },
        {
          id: 3,
          title: "meh",
          count: 449,
          percent: 6.35,
        },
        {
          id: 1,
          title: "skip",
          count: 133,
          percent: 1.88,
        },
      ],
      ratings_count: 6965,
      reviews_text_count: 63,
      added: 21631,
      added_by_status: {
        yet: 537,
        owned: 12534,
        beaten: 6088,
        toplay: 610,
        dropped: 1126,
        playing: 736,
      },
      metacritic: 92,
      playtime: 74,
      suggestions_count: 439,
      updated: "2024-12-24T04:01:56",
      user_game: null,
      reviews_count: 7073,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 541497,
            image_background:
              "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
          },
          released_at: "2013-09-17",
          requirements_en: {
            minimum:
              "Minimum:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1, Windows Vista 64 Bit Service Pack 2* (*NVIDIA video card recommended if running Vista OS)Processor: Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom 9850 Quad-Core Processor (4 CPUs) @ 2.5GHzMemory: 4 GB RAMGraphics: NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)Storage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes: Over time downloadable content and programming changes will change the system requirements for this game.  Please refer to your hardware manufacturer and www.rockstargames.com/support for current compatibility information. Some system components such as mobile chipsets, integrated, and AGP graphics cards may be incompatible. Unlisted specifications may not be supported by publisher.     Other requirements:  Installation and online play requires log-in to Rockstar Games Social Club (13+) network; internet connection required for activation, online play, and periodic entitlement verification; software installations required including Rockstar Games Social Club platform, DirectX , Chromium, and Microsoft Visual C++ 2008 sp1 Redistributable Package, and authentication software that recognizes certain hardware attributes for entitlement, digital rights management, system, and other support purposes.     SINGLE USE SERIAL CODE REGISTRATION VIA INTERNET REQUIRED; REGISTRATION IS LIMITED TO ONE ROCKSTAR GAMES SOCIAL CLUB ACCOUNT (13+) PER SERIAL CODE; ONLY ONE PC LOG-IN ALLOWED PER SOCIAL CLUB ACCOUNT AT ANY TIME; SERIAL CODE(S) ARE NON-TRANSFERABLE ONCE USED; SOCIAL CLUB ACCOUNTS ARE NON-TRANSFERABLE.  Partner Requirements:  Please check the terms of service of this site before purchasing this software.",
            recommended:
              "Recommended:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1Processor: Intel Core i5 3470 @ 3.2GHz (4 CPUs) / AMD X8 FX-8350 @ 4GHz (8 CPUs)Memory: 8 GB RAMGraphics: NVIDIA GTX 660 2GB / AMD HD 7870 2GBStorage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes:",
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 187,
            name: "PlayStation 5",
            slug: "playstation5",
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 1171,
            image_background:
              "https://media.rawg.io/media/games/b4a/b4adf80c36e267b35acc3497ed2af19c.jpg",
          },
          released_at: "2013-09-17",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 186,
            name: "Xbox Series S/X",
            slug: "xbox-series-x",
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 1026,
            image_background:
              "https://media.rawg.io/media/games/ffe/ffed87105b14f5beff72ff44a7793fd5.jpg",
          },
          released_at: "2013-09-17",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: "PlayStation 4",
            slug: "playstation4",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6873,
            image_background:
              "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
          },
          released_at: "2013-09-17",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 16,
            name: "PlayStation 3",
            slug: "playstation3",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3167,
            image_background:
              "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
          },
          released_at: "2013-09-17",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 14,
            name: "Xbox 360",
            slug: "xbox360",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2805,
            image_background:
              "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
          },
          released_at: "2013-09-17",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: "Xbox One",
            slug: "xbox-one",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5672,
            image_background:
              "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg",
          },
          released_at: "2013-09-17",
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: "PC",
            slug: "pc",
          },
        },
        {
          platform: {
            id: 2,
            name: "PlayStation",
            slug: "playstation",
          },
        },
        {
          platform: {
            id: 3,
            name: "Xbox",
            slug: "xbox",
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 184421,
          image_background:
            "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
        },
      ],
      stores: [
        {
          id: 290375,
          store: {
            id: 3,
            name: "PlayStation Store",
            slug: "playstation-store",
            domain: "store.playstation.com",
            games_count: 8009,
            image_background:
              "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg",
          },
        },
        {
          id: 438095,
          store: {
            id: 11,
            name: "Epic Games",
            slug: "epic-games",
            domain: "epicgames.com",
            games_count: 1365,
            image_background:
              "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg",
          },
        },
        {
          id: 290376,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 104541,
            image_background:
              "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
          },
        },
        {
          id: 290377,
          store: {
            id: 7,
            name: "Xbox 360 Store",
            slug: "xbox360",
            domain: "marketplace.xbox.com",
            games_count: 1915,
            image_background:
              "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
          },
        },
        {
          id: 290378,
          store: {
            id: 2,
            name: "Xbox Store",
            slug: "xbox-store",
            domain: "microsoft.com",
            games_count: 4903,
            image_background:
              "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 233006,
          image_background:
            "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
        },
        {
          id: 40847,
          name: "Steam Achievements",
          slug: "steam-achievements",
          language: "eng",
          games_count: 42372,
          image_background:
            "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg",
        },
        {
          id: 7,
          name: "Multiplayer",
          slug: "multiplayer",
          language: "eng",
          games_count: 39626,
          image_background:
            "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        },
        {
          id: 40836,
          name: "Full controller support",
          slug: "full-controller-support",
          language: "eng",
          games_count: 20091,
          image_background:
            "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg",
        },
        {
          id: 13,
          name: "Atmospheric",
          slug: "atmospheric",
          language: "eng",
          games_count: 35490,
          image_background:
            "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
        },
        {
          id: 42,
          name: "Great Soundtrack",
          slug: "great-soundtrack",
          language: "eng",
          games_count: 3415,
          image_background:
            "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
        },
        {
          id: 24,
          name: "RPG",
          slug: "rpg",
          language: "eng",
          games_count: 22968,
          image_background:
            "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg",
        },
        {
          id: 18,
          name: "Co-op",
          slug: "co-op",
          language: "eng",
          games_count: 12594,
          image_background:
            "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
        },
        {
          id: 36,
          name: "Open World",
          slug: "open-world",
          language: "eng",
          games_count: 8145,
          image_background:
            "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg",
        },
        {
          id: 411,
          name: "cooperative",
          slug: "cooperative",
          language: "eng",
          games_count: 5553,
          image_background:
            "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
        },
        {
          id: 8,
          name: "First-Person",
          slug: "first-person",
          language: "eng",
          games_count: 33604,
          image_background:
            "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
        },
        {
          id: 149,
          name: "Third Person",
          slug: "third-person",
          language: "eng",
          games_count: 12611,
          image_background:
            "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
        },
        {
          id: 4,
          name: "Funny",
          slug: "funny",
          language: "eng",
          games_count: 26240,
          image_background:
            "https://media.rawg.io/media/games/ffe/ffed87105b14f5beff72ff44a7793fd5.jpg",
        },
        {
          id: 37,
          name: "Sandbox",
          slug: "sandbox",
          language: "eng",
          games_count: 7457,
          image_background:
            "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
        },
        {
          id: 123,
          name: "Comedy",
          slug: "comedy",
          language: "eng",
          games_count: 13249,
          image_background:
            "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg",
        },
        {
          id: 150,
          name: "Third-Person Shooter",
          slug: "third-person-shooter",
          language: "eng",
          games_count: 3700,
          image_background:
            "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg",
        },
        {
          id: 62,
          name: "Moddable",
          slug: "moddable",
          language: "eng",
          games_count: 995,
          image_background:
            "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg",
        },
        {
          id: 144,
          name: "Crime",
          slug: "crime",
          language: "eng",
          games_count: 2994,
          image_background:
            "https://media.rawg.io/media/screenshots/4f4/4f4722571e32954af43a4508607c1748.jpg",
        },
        {
          id: 62349,
          name: "vr mod",
          slug: "vr-mod",
          language: "eng",
          games_count: 17,
          image_background:
            "https://media.rawg.io/media/screenshots/1bb/1bb3f78f0fe43b5d5ca2f3da5b638840.jpg",
        },
      ],
      esrb_rating: {
        id: 4,
        name: "Mature",
        slug: "mature",
      },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
        },
        {
          id: 1827221,
          image:
            "https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg",
        },
        {
          id: 1827222,
          image:
            "https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg",
        },
        {
          id: 1827223,
          image:
            "https://media.rawg.io/media/screenshots/f95/f9518b1d99210c0cae21fc09e95b4e31.jpg",
        },
        {
          id: 1827225,
          image:
            "https://media.rawg.io/media/screenshots/a5c/a5c95ea539c87d5f538763e16e18fb99.jpg",
        },
        {
          id: 1827226,
          image:
            "https://media.rawg.io/media/screenshots/a7e/a7e990bc574f4d34e03b5926361d1ee7.jpg",
        },
        {
          id: 1827227,
          image:
            "https://media.rawg.io/media/screenshots/592/592e2501d8734b802b2a34fee2df59fa.jpg",
        },
      ],
    },
    {
      id: 3328,
      slug: "the-witcher-3-wild-hunt",
      name: "The Witcher 3: Wild Hunt",
      released: "2015-05-18",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
      rating: 4.65,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: "exceptional",
          count: 5253,
          percent: 76.8,
        },
        {
          id: 4,
          title: "recommended",
          count: 1118,
          percent: 16.35,
        },
        {
          id: 3,
          title: "meh",
          count: 292,
          percent: 4.27,
        },
        {
          id: 1,
          title: "skip",
          count: 177,
          percent: 2.59,
        },
      ],
      ratings_count: 6730,
      reviews_text_count: 76,
      added: 21232,
      added_by_status: {
        yet: 1144,
        owned: 12494,
        beaten: 4941,
        toplay: 804,
        dropped: 966,
        playing: 883,
      },
      metacritic: 92,
      playtime: 43,
      suggestions_count: 681,
      updated: "2024-12-24T07:31:51",
      user_game: null,
      reviews_count: 6840,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 186,
            name: "Xbox Series S/X",
            slug: "xbox-series-x",
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 1026,
            image_background:
              "https://media.rawg.io/media/games/ffe/ffed87105b14f5beff72ff44a7793fd5.jpg",
          },
          released_at: "2015-05-18",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 187,
            name: "PlayStation 5",
            slug: "playstation5",
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 1171,
            image_background:
              "https://media.rawg.io/media/games/b4a/b4adf80c36e267b35acc3497ed2af19c.jpg",
          },
          released_at: "2015-05-18",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 5,
            name: "macOS",
            slug: "macos",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 105436,
            image_background:
              "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg",
          },
          released_at: "2015-05-18",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: "PlayStation 4",
            slug: "playstation4",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6873,
            image_background:
              "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
          },
          released_at: "2015-05-18",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 7,
            name: "Nintendo Switch",
            slug: "nintendo-switch",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5566,
            image_background:
              "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg",
          },
          released_at: "2015-05-18",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 541497,
            image_background:
              "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
          },
          released_at: "2015-05-18",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: "Xbox One",
            slug: "xbox-one",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5672,
            image_background:
              "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg",
          },
          released_at: "2015-05-18",
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: "PC",
            slug: "pc",
          },
        },
        {
          platform: {
            id: 2,
            name: "PlayStation",
            slug: "playstation",
          },
        },
        {
          platform: {
            id: 3,
            name: "Xbox",
            slug: "xbox",
          },
        },
        {
          platform: {
            id: 5,
            name: "Apple Macintosh",
            slug: "mac",
          },
        },
        {
          platform: {
            id: 7,
            name: "Nintendo",
            slug: "nintendo",
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 184421,
          image_background:
            "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
        },
        {
          id: 5,
          name: "RPG",
          slug: "role-playing-games-rpg",
          games_count: 58206,
          image_background:
            "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg",
        },
      ],
      stores: [
        {
          id: 354780,
          store: {
            id: 5,
            name: "GOG",
            slug: "gog",
            domain: "gog.com",
            games_count: 6525,
            image_background:
              "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
          },
        },
        {
          id: 3565,
          store: {
            id: 3,
            name: "PlayStation Store",
            slug: "playstation-store",
            domain: "store.playstation.com",
            games_count: 8009,
            image_background:
              "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg",
          },
        },
        {
          id: 305376,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 104541,
            image_background:
              "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
          },
        },
        {
          id: 312313,
          store: {
            id: 2,
            name: "Xbox Store",
            slug: "xbox-store",
            domain: "microsoft.com",
            games_count: 4903,
            image_background:
              "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
          },
        },
        {
          id: 676022,
          store: {
            id: 6,
            name: "Nintendo Store",
            slug: "nintendo",
            domain: "nintendo.com",
            games_count: 9099,
            image_background:
              "https://media.rawg.io/media/games/25c/25c4776ab5723d5d735d8bf617ca12d9.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 233006,
          image_background:
            "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
        },
        {
          id: 40836,
          name: "Full controller support",
          slug: "full-controller-support",
          language: "eng",
          games_count: 20091,
          image_background:
            "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg",
        },
        {
          id: 13,
          name: "Atmospheric",
          slug: "atmospheric",
          language: "eng",
          games_count: 35490,
          image_background:
            "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
        },
        {
          id: 42,
          name: "Great Soundtrack",
          slug: "great-soundtrack",
          language: "eng",
          games_count: 3415,
          image_background:
            "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
        },
        {
          id: 24,
          name: "RPG",
          slug: "rpg",
          language: "eng",
          games_count: 22968,
          image_background:
            "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg",
        },
        {
          id: 118,
          name: "Story Rich",
          slug: "story-rich",
          language: "eng",
          games_count: 23569,
          image_background:
            "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        },
        {
          id: 36,
          name: "Open World",
          slug: "open-world",
          language: "eng",
          games_count: 8145,
          image_background:
            "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg",
        },
        {
          id: 149,
          name: "Third Person",
          slug: "third-person",
          language: "eng",
          games_count: 12611,
          image_background:
            "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
        },
        {
          id: 64,
          name: "Fantasy",
          slug: "fantasy",
          language: "eng",
          games_count: 29604,
          image_background:
            "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg",
        },
        {
          id: 37,
          name: "Sandbox",
          slug: "sandbox",
          language: "eng",
          games_count: 7457,
          image_background:
            "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
        },
        {
          id: 97,
          name: "Action RPG",
          slug: "action-rpg",
          language: "eng",
          games_count: 7595,
          image_background:
            "https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg",
        },
        {
          id: 41,
          name: "Dark",
          slug: "dark",
          language: "eng",
          games_count: 16800,
          image_background:
            "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
        },
        {
          id: 44,
          name: "Nudity",
          slug: "nudity",
          language: "eng",
          games_count: 7248,
          image_background:
            "https://media.rawg.io/media/games/bee/bee483efadcf9d7e657e52184316a34e.jpg",
        },
        {
          id: 336,
          name: "controller support",
          slug: "controller-support",
          language: "eng",
          games_count: 293,
          image_background:
            "https://media.rawg.io/media/games/0b3/0b34647c42271600399b93d19b10f1aa.jpg",
        },
        {
          id: 145,
          name: "Choices Matter",
          slug: "choices-matter",
          language: "eng",
          games_count: 6417,
          image_background:
            "https://media.rawg.io/media/games/d8f/d8f3b28fc747ed6f92943cdd33fb91b5.jpeg",
        },
        {
          id: 40,
          name: "Dark Fantasy",
          slug: "dark-fantasy",
          language: "eng",
          games_count: 4700,
          image_background:
            "https://media.rawg.io/media/games/a6c/a6ccd34125c594abf1a9c9821b9a715d.jpg",
        },
        {
          id: 192,
          name: "Mature",
          slug: "mature",
          language: "eng",
          games_count: 3698,
          image_background:
            "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
        },
        {
          id: 66,
          name: "Medieval",
          slug: "medieval",
          language: "eng",
          games_count: 6990,
          image_background:
            "https://media.rawg.io/media/games/ccd/ccd40e8f86c0ae10a082b610d31d4475.jpg",
        },
        {
          id: 82,
          name: "Magic",
          slug: "magic",
          language: "eng",
          games_count: 10102,
          image_background:
            "https://media.rawg.io/media/games/330/330952c1726bbb56fc3b9f8a8c83ab1d.jpg",
        },
        {
          id: 218,
          name: "Multiple Endings",
          slug: "multiple-endings",
          language: "eng",
          games_count: 9690,
          image_background:
            "https://media.rawg.io/media/games/214/2140885d34e3a3398b45036e5d870971.jpg",
        },
      ],
      esrb_rating: {
        id: 4,
        name: "Mature",
        slug: "mature",
      },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        },
        {
          id: 30336,
          image:
            "https://media.rawg.io/media/screenshots/1ac/1ac19f31974314855ad7be266adeb500.jpg",
        },
        {
          id: 30337,
          image:
            "https://media.rawg.io/media/screenshots/6a0/6a08afca95261a2fe221ea9e01d28762.jpg",
        },
        {
          id: 30338,
          image:
            "https://media.rawg.io/media/screenshots/cdd/cdd31b6b4a687425a87b5ce231ac89d7.jpg",
        },
        {
          id: 30339,
          image:
            "https://media.rawg.io/media/screenshots/862/862397b153221a625922d3bb66337834.jpg",
        },
        {
          id: 30340,
          image:
            "https://media.rawg.io/media/screenshots/166/166787c442a45f52f4f230c33fd7d605.jpg",
        },
        {
          id: 30342,
          image:
            "https://media.rawg.io/media/screenshots/f63/f6373ee614046d81503d63f167181803.jpg",
        },
      ],
    },
    {
      id: 4200,
      slug: "portal-2",
      name: "Portal 2",
      released: "2011-04-18",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
      rating: 4.6,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: "exceptional",
          count: 4063,
          percent: 69.63,
        },
        {
          id: 4,
          title: "recommended",
          count: 1468,
          percent: 25.16,
        },
        {
          id: 3,
          title: "meh",
          count: 169,
          percent: 2.9,
        },
        {
          id: 1,
          title: "skip",
          count: 135,
          percent: 2.31,
        },
      ],
      ratings_count: 5782,
      reviews_text_count: 36,
      added: 20204,
      added_by_status: {
        yet: 639,
        owned: 12813,
        beaten: 5604,
        toplay: 385,
        dropped: 608,
        playing: 155,
      },
      metacritic: 95,
      playtime: 11,
      suggestions_count: 559,
      updated: "2024-12-24T04:00:59",
      user_game: null,
      reviews_count: 5835,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 16,
            name: "PlayStation 3",
            slug: "playstation3",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3167,
            image_background:
              "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
          },
          released_at: "2011-04-18",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 541497,
            image_background:
              "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
          },
          released_at: "2011-04-18",
          requirements_en: null,
          requirements_ru: {
            minimum:
              "Core 2 Duo/Athlon X2 2 ГГц,1 Гб памяти,GeForce 7600/Radeon X800,10 Гб на винчестере,интернет-соединение",
            recommended:
              "Core 2 Duo/Athlon X2 2.5 ГГц,2 Гб памяти,GeForce GTX 280/Radeon HD 2600,10 Гб на винчестере,интернет-соединение",
          },
        },
        {
          platform: {
            id: 14,
            name: "Xbox 360",
            slug: "xbox360",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2805,
            image_background:
              "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
          },
          released_at: "2011-04-18",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 6,
            name: "Linux",
            slug: "linux",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 78176,
            image_background:
              "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg",
          },
          released_at: "2011-04-18",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 5,
            name: "macOS",
            slug: "macos",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 105436,
            image_background:
              "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg",
          },
          released_at: "2011-04-18",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: "Xbox One",
            slug: "xbox-one",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5672,
            image_background:
              "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg",
          },
          released_at: "2011-04-18",
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: "PC",
            slug: "pc",
          },
        },
        {
          platform: {
            id: 2,
            name: "PlayStation",
            slug: "playstation",
          },
        },
        {
          platform: {
            id: 3,
            name: "Xbox",
            slug: "xbox",
          },
        },
        {
          platform: {
            id: 5,
            name: "Apple Macintosh",
            slug: "mac",
          },
        },
        {
          platform: {
            id: 6,
            name: "Linux",
            slug: "linux",
          },
        },
      ],
      genres: [
        {
          id: 2,
          name: "Shooter",
          slug: "shooter",
          games_count: 59541,
          image_background:
            "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg",
        },
        {
          id: 7,
          name: "Puzzle",
          slug: "puzzle",
          games_count: 97320,
          image_background:
            "https://media.rawg.io/media/games/948/948fe7f00b6cba8472f5ecd07a455077.jpg",
        },
      ],
      stores: [
        {
          id: 465889,
          store: {
            id: 2,
            name: "Xbox Store",
            slug: "xbox-store",
            domain: "microsoft.com",
            games_count: 4903,
            image_background:
              "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
          },
        },
        {
          id: 13134,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 104541,
            image_background:
              "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
          },
        },
        {
          id: 4526,
          store: {
            id: 3,
            name: "PlayStation Store",
            slug: "playstation-store",
            domain: "store.playstation.com",
            games_count: 8009,
            image_background:
              "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg",
          },
        },
        {
          id: 33916,
          store: {
            id: 7,
            name: "Xbox 360 Store",
            slug: "xbox360",
            domain: "marketplace.xbox.com",
            games_count: 1915,
            image_background:
              "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 233006,
          image_background:
            "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
        },
        {
          id: 40847,
          name: "Steam Achievements",
          slug: "steam-achievements",
          language: "eng",
          games_count: 42372,
          image_background:
            "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg",
        },
        {
          id: 7,
          name: "Multiplayer",
          slug: "multiplayer",
          language: "eng",
          games_count: 39626,
          image_background:
            "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        },
        {
          id: 40836,
          name: "Full controller support",
          slug: "full-controller-support",
          language: "eng",
          games_count: 20091,
          image_background:
            "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg",
        },
        {
          id: 40849,
          name: "Steam Cloud",
          slug: "steam-cloud",
          language: "eng",
          games_count: 20315,
          image_background:
            "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
        },
        {
          id: 13,
          name: "Atmospheric",
          slug: "atmospheric",
          language: "eng",
          games_count: 35490,
          image_background:
            "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
        },
        {
          id: 7808,
          name: "steam-trading-cards",
          slug: "steam-trading-cards",
          language: "eng",
          games_count: 7568,
          image_background:
            "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
        },
        {
          id: 18,
          name: "Co-op",
          slug: "co-op",
          language: "eng",
          games_count: 12594,
          image_background:
            "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
        },
        {
          id: 118,
          name: "Story Rich",
          slug: "story-rich",
          language: "eng",
          games_count: 23569,
          image_background:
            "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        },
        {
          id: 411,
          name: "cooperative",
          slug: "cooperative",
          language: "eng",
          games_count: 5553,
          image_background:
            "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
        },
        {
          id: 8,
          name: "First-Person",
          slug: "first-person",
          language: "eng",
          games_count: 33604,
          image_background:
            "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
        },
        {
          id: 32,
          name: "Sci-fi",
          slug: "sci-fi",
          language: "eng",
          games_count: 20186,
          image_background:
            "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
        },
        {
          id: 30,
          name: "FPS",
          slug: "fps",
          language: "eng",
          games_count: 13848,
          image_background:
            "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg",
        },
        {
          id: 9,
          name: "Online Co-Op",
          slug: "online-co-op",
          language: "eng",
          games_count: 6330,
          image_background:
            "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
        },
        {
          id: 4,
          name: "Funny",
          slug: "funny",
          language: "eng",
          games_count: 26240,
          image_background:
            "https://media.rawg.io/media/games/ffe/ffed87105b14f5beff72ff44a7793fd5.jpg",
        },
        {
          id: 189,
          name: "Female Protagonist",
          slug: "female-protagonist",
          language: "eng",
          games_count: 13513,
          image_background:
            "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg",
        },
        {
          id: 123,
          name: "Comedy",
          slug: "comedy",
          language: "eng",
          games_count: 13249,
          image_background:
            "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg",
        },
        {
          id: 75,
          name: "Local Co-Op",
          slug: "local-co-op",
          language: "eng",
          games_count: 5647,
          image_background:
            "https://media.rawg.io/media/games/226/2262cea0b385db6cf399f4be831603b0.jpg",
        },
        {
          id: 11669,
          name: "stats",
          slug: "stats",
          language: "eng",
          games_count: 5247,
          image_background:
            "https://media.rawg.io/media/games/93e/93ee6101e1c943732f06080dddb0fe4c.jpg",
        },
        {
          id: 40852,
          name: "Steam Workshop",
          slug: "steam-workshop",
          language: "eng",
          games_count: 1598,
          image_background:
            "https://media.rawg.io/media/games/fd6/fd6a1eecd3ec0f875f1924f3656b7dd9.jpg",
        },
        {
          id: 25,
          name: "Space",
          slug: "space",
          language: "eng",
          games_count: 43328,
          image_background:
            "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
        },
        {
          id: 40838,
          name: "Includes level editor",
          slug: "includes-level-editor",
          language: "eng",
          games_count: 1974,
          image_background:
            "https://media.rawg.io/media/games/c11/c11a0b92b4c28f2e0db489f430142653.jpg",
        },
        {
          id: 40833,
          name: "Captions available",
          slug: "captions-available",
          language: "eng",
          games_count: 1413,
          image_background:
            "https://media.rawg.io/media/games/c6b/c6bd26767c1053fef2b10bb852943559.jpg",
        },
        {
          id: 40834,
          name: "Commentary available",
          slug: "commentary-available",
          language: "eng",
          games_count: 281,
          image_background:
            "https://media.rawg.io/media/games/764/7648a8802fae5247298d775c85e9535f.jpg",
        },
        {
          id: 87,
          name: "Science",
          slug: "science",
          language: "eng",
          games_count: 1827,
          image_background:
            "https://media.rawg.io/media/games/bda/bdab2603c0dc67268d0610449bc7df16.jpg",
        },
      ],
      esrb_rating: {
        id: 2,
        name: "Everyone 10+",
        slug: "everyone-10-plus",
      },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
        },
        {
          id: 99018,
          image:
            "https://media.rawg.io/media/screenshots/221/221a03c11e5ff9f765d62f60d4b4cbf5.jpg",
        },
        {
          id: 99019,
          image:
            "https://media.rawg.io/media/screenshots/173/1737ff43c14f40294011a209b1012875.jpg",
        },
        {
          id: 99020,
          image:
            "https://media.rawg.io/media/screenshots/b11/b11a2ae0664f0e8a1ef2346f99df26e1.jpg",
        },
        {
          id: 99021,
          image:
            "https://media.rawg.io/media/screenshots/9b1/9b107a790909b31918ebe2f40547cc85.jpg",
        },
        {
          id: 99022,
          image:
            "https://media.rawg.io/media/screenshots/d05/d058fc7f7fa6128916c311eb14267fed.jpg",
        },
        {
          id: 99023,
          image:
            "https://media.rawg.io/media/screenshots/415/41543dcc12dffc8e97d85a56ad42cda8.jpg",
        },
      ],
    },
    {
      id: 4291,
      slug: "counter-strike-global-offensive",
      name: "Counter-Strike: Global Offensive",
      released: "2012-08-21",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
      rating: 3.56,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: "recommended",
          count: 1659,
          percent: 46.57,
        },
        {
          id: 3,
          title: "meh",
          count: 928,
          percent: 26.05,
        },
        {
          id: 5,
          title: "exceptional",
          count: 574,
          percent: 16.11,
        },
        {
          id: 1,
          title: "skip",
          count: 401,
          percent: 11.26,
        },
      ],
      ratings_count: 3526,
      reviews_text_count: 27,
      added: 17995,
      added_by_status: {
        yet: 267,
        owned: 13904,
        beaten: 1073,
        toplay: 78,
        dropped: 2049,
        playing: 624,
      },
      metacritic: 81,
      playtime: 64,
      suggestions_count: 599,
      updated: "2024-12-23T19:03:55",
      user_game: null,
      reviews_count: 3562,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 541497,
            image_background:
              "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
          },
          released_at: "2012-08-21",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows® 7/Vista/XP<br></li><li><strong>Processor:</strong> Intel® Core™ 2 Duo E6600 or AMD Phenom™ X3 8750 processor or better<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> Video card must be 256 MB or more and should be a DirectX 9-compatible with support for Pixel Shader 3.0<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 15 GB available space</li></ul>',
          },
          requirements_ru: {
            minimum:
              "Сore 2 Duo/Athlon x2 64 1.8 ГГц,2 Гб памяти,GeForce 8800/Radeon X9800,7.6 Гб на винчестере,интернет-соединение",
            recommended:
              "Core 2 Duo E6600/Phenom X3 8750,4 Гб памяти,GeForce 480 GTX/Radeon HD 6970,7.6 Гб на винчестере,интернет-соединение",
          },
        },
        {
          platform: {
            id: 6,
            name: "Linux",
            slug: "linux",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 78176,
            image_background:
              "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg",
          },
          released_at: "2012-08-21",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 14,
            name: "Xbox 360",
            slug: "xbox360",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2805,
            image_background:
              "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
          },
          released_at: "2012-08-21",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 16,
            name: "PlayStation 3",
            slug: "playstation3",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3167,
            image_background:
              "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
          },
          released_at: "2012-08-21",
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: "PC",
            slug: "pc",
          },
        },
        {
          platform: {
            id: 2,
            name: "PlayStation",
            slug: "playstation",
          },
        },
        {
          platform: {
            id: 3,
            name: "Xbox",
            slug: "xbox",
          },
        },
        {
          platform: {
            id: 6,
            name: "Linux",
            slug: "linux",
          },
        },
      ],
      genres: [
        {
          id: 2,
          name: "Shooter",
          slug: "shooter",
          games_count: 59541,
          image_background:
            "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg",
        },
      ],
      stores: [
        {
          id: 4619,
          store: {
            id: 3,
            name: "PlayStation Store",
            slug: "playstation-store",
            domain: "store.playstation.com",
            games_count: 8009,
            image_background:
              "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg",
          },
        },
        {
          id: 11489,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 104541,
            image_background:
              "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
          },
        },
        {
          id: 49169,
          store: {
            id: 7,
            name: "Xbox 360 Store",
            slug: "xbox360",
            domain: "marketplace.xbox.com",
            games_count: 1915,
            image_background:
              "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 40847,
          name: "Steam Achievements",
          slug: "steam-achievements",
          language: "eng",
          games_count: 42372,
          image_background:
            "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg",
        },
        {
          id: 7,
          name: "Multiplayer",
          slug: "multiplayer",
          language: "eng",
          games_count: 39626,
          image_background:
            "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        },
        {
          id: 40836,
          name: "Full controller support",
          slug: "full-controller-support",
          language: "eng",
          games_count: 20091,
          image_background:
            "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg",
        },
        {
          id: 7808,
          name: "steam-trading-cards",
          slug: "steam-trading-cards",
          language: "eng",
          games_count: 7568,
          image_background:
            "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
        },
        {
          id: 18,
          name: "Co-op",
          slug: "co-op",
          language: "eng",
          games_count: 12594,
          image_background:
            "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
        },
        {
          id: 411,
          name: "cooperative",
          slug: "cooperative",
          language: "eng",
          games_count: 5553,
          image_background:
            "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
        },
        {
          id: 8,
          name: "First-Person",
          slug: "first-person",
          language: "eng",
          games_count: 33604,
          image_background:
            "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
        },
        {
          id: 30,
          name: "FPS",
          slug: "fps",
          language: "eng",
          games_count: 13848,
          image_background:
            "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg",
        },
        {
          id: 9,
          name: "Online Co-Op",
          slug: "online-co-op",
          language: "eng",
          games_count: 6330,
          image_background:
            "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
        },
        {
          id: 80,
          name: "Tactical",
          slug: "tactical",
          language: "eng",
          games_count: 5607,
          image_background:
            "https://media.rawg.io/media/games/9c4/9c47f320eb73c9a02d462e12f6206b26.jpg",
        },
        {
          id: 11669,
          name: "stats",
          slug: "stats",
          language: "eng",
          games_count: 5247,
          image_background:
            "https://media.rawg.io/media/games/93e/93ee6101e1c943732f06080dddb0fe4c.jpg",
        },
        {
          id: 40852,
          name: "Steam Workshop",
          slug: "steam-workshop",
          language: "eng",
          games_count: 1598,
          image_background:
            "https://media.rawg.io/media/games/fd6/fd6a1eecd3ec0f875f1924f3656b7dd9.jpg",
        },
        {
          id: 157,
          name: "PvP",
          slug: "pvp",
          language: "eng",
          games_count: 10248,
          image_background:
            "https://media.rawg.io/media/games/8fc/8fc59e74133fd8a8a436b7e2d0fb36c2.jpg",
        },
        {
          id: 62,
          name: "Moddable",
          slug: "moddable",
          language: "eng",
          games_count: 995,
          image_background:
            "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg",
        },
        {
          id: 70,
          name: "War",
          slug: "war",
          language: "eng",
          games_count: 9574,
          image_background:
            "https://media.rawg.io/media/games/f14/f1422eacab98c5f85a5123da4e9d9e89.jpg",
        },
        {
          id: 40837,
          name: "In-App Purchases",
          slug: "in-app-purchases",
          language: "eng",
          games_count: 2937,
          image_background:
            "https://media.rawg.io/media/games/447/4470c1e76f01acfaf5af9c207d1c1c92.jpg",
        },
        {
          id: 77,
          name: "Realistic",
          slug: "realistic",
          language: "eng",
          games_count: 6999,
          image_background:
            "https://media.rawg.io/media/screenshots/ca8/ca840f2a8ebfc74aac1688367dc1f903.jpg",
        },
        {
          id: 11,
          name: "Team-Based",
          slug: "team-based",
          language: "eng",
          games_count: 1764,
          image_background:
            "https://media.rawg.io/media/games/179/179245a3693049a11a25b900ab18f8f7.jpg",
        },
        {
          id: 131,
          name: "Fast-Paced",
          slug: "fast-paced",
          language: "eng",
          games_count: 10615,
          image_background:
            "https://media.rawg.io/media/screenshots/12e/12ee2600684863837596c0dbb1923fca.jpg",
        },
        {
          id: 81,
          name: "Military",
          slug: "military",
          language: "eng",
          games_count: 2082,
          image_background:
            "https://media.rawg.io/media/games/9af/9af24c1886e2c7b52a4a2c65aa874638.jpg",
        },
        {
          id: 170,
          name: "Competitive",
          slug: "competitive",
          language: "eng",
          games_count: 1201,
          image_background:
            "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
        },
        {
          id: 40856,
          name: "Valve Anti-Cheat enabled",
          slug: "valve-anti-cheat-enabled",
          language: "eng",
          games_count: 105,
          image_background:
            "https://media.rawg.io/media/games/78d/78dfae12fb8c5b16cd78648553071e0a.jpg",
        },
        {
          id: 73,
          name: "e-sports",
          slug: "e-sports",
          language: "eng",
          games_count: 80,
          image_background:
            "https://media.rawg.io/media/games/cc7/cc77035eb972f179f5090ee2a0fabd99.jpg",
        },
        {
          id: 245,
          name: "Trading",
          slug: "trading",
          language: "eng",
          games_count: 1273,
          image_background:
            "https://media.rawg.io/media/screenshots/da8/da840a45bceef305e577525e31c2a6c4_uIQGg3p.jpg",
        },
      ],
      esrb_rating: {
        id: 4,
        name: "Mature",
        slug: "mature",
      },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        },
        {
          id: 81644,
          image:
            "https://media.rawg.io/media/screenshots/ff1/ff16661bb15f7969b44f6c4118870e44.jpg",
        },
        {
          id: 81645,
          image:
            "https://media.rawg.io/media/screenshots/41b/41bb769d247412eac3336dec934aed72.jpg",
        },
        {
          id: 81646,
          image:
            "https://media.rawg.io/media/screenshots/754/754545acdbf71f56e8902a07c7d20696.jpg",
        },
        {
          id: 81647,
          image:
            "https://media.rawg.io/media/screenshots/fd8/fd873cab4c66db0b8e85d8a66e940074.jpg",
        },
        {
          id: 81648,
          image:
            "https://media.rawg.io/media/screenshots/7db/7db2954f7908b6749c36a5f3c9052f65.jpg",
        },
        {
          id: 81649,
          image:
            "https://media.rawg.io/media/screenshots/337/337a3e98b5933f456a2b37b59fab5f39.jpg",
        },
      ],
    },
    {
      id: 5286,
      slug: "tomb-raider",
      name: "Tomb Raider (2013)",
      released: "2013-03-05",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
      rating: 4.06,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: "recommended",
          count: 2396,
          percent: 60.4,
        },
        {
          id: 5,
          title: "exceptional",
          count: 1020,
          percent: 25.71,
        },
        {
          id: 3,
          title: "meh",
          count: 432,
          percent: 10.89,
        },
        {
          id: 1,
          title: "skip",
          count: 119,
          percent: 3,
        },
      ],
      ratings_count: 3937,
      reviews_text_count: 14,
      added: 17343,
      added_by_status: {
        yet: 690,
        owned: 11417,
        beaten: 4294,
        toplay: 279,
        dropped: 548,
        playing: 115,
      },
      metacritic: 86,
      playtime: 10,
      suggestions_count: 656,
      updated: "2024-12-24T11:16:48",
      user_game: null,
      reviews_count: 3967,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 18,
            name: "PlayStation 4",
            slug: "playstation4",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6873,
            image_background:
              "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
          },
          released_at: "2013-03-05",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 16,
            name: "PlayStation 3",
            slug: "playstation3",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3167,
            image_background:
              "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
          },
          released_at: "2013-03-05",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 14,
            name: "Xbox 360",
            slug: "xbox360",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2805,
            image_background:
              "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
          },
          released_at: "2013-03-05",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 5,
            name: "macOS",
            slug: "macos",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 105436,
            image_background:
              "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg",
          },
          released_at: "2013-03-05",
          requirements_en: {
            minimum:
              "Minimum:\r\n\r\nOS: macOS 10.9.1\r\n\r\nProcessor: 2.0GHz Intel or greater\r\n\r\nMemory: 4GB\r\n\r\nGraphics: 512Mb AMD 4850, 512Mb Nvidia 650M, Intel HD4000\r\n\r\nHard Drive: 14GB",
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 541497,
            image_background:
              "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
          },
          released_at: "2013-03-05",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong>Windows XP / Windows Vista / Windows 7<br>\t</li><li><strong>Processor:</strong>1.8 GHz Processor<br>\t</li><li><strong>Memory:</strong>512 MB RAM<br>\t</li><li><strong>Graphics:</strong>3D graphics card compatible with DirectX 9<br>\t</li><li><strong>DirectX®:</strong>9.0<br>\t</li><li><strong>Hard Drive:</strong>2 GB HD space</li></ul>',
          },
          requirements_ru: {
            minimum: "i486-100, 8 Мб",
            recommended: "Pentium 166, 16 Мб",
          },
        },
        {
          platform: {
            id: 1,
            name: "Xbox One",
            slug: "xbox-one",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5672,
            image_background:
              "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg",
          },
          released_at: "2013-03-05",
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: "PC",
            slug: "pc",
          },
        },
        {
          platform: {
            id: 2,
            name: "PlayStation",
            slug: "playstation",
          },
        },
        {
          platform: {
            id: 3,
            name: "Xbox",
            slug: "xbox",
          },
        },
        {
          platform: {
            id: 5,
            name: "Apple Macintosh",
            slug: "mac",
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 184421,
          image_background:
            "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
        },
        {
          id: 6,
          name: "Fighting",
          slug: "fighting",
          games_count: 11761,
          image_background:
            "https://media.rawg.io/media/games/a32/a32c9c299488ca99afc3fcea605a7718.jpg",
        },
      ],
      stores: [
        {
          id: 33824,
          store: {
            id: 7,
            name: "Xbox 360 Store",
            slug: "xbox360",
            domain: "marketplace.xbox.com",
            games_count: 1915,
            image_background:
              "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
          },
        },
        {
          id: 13151,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 104541,
            image_background:
              "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
          },
        },
        {
          id: 5640,
          store: {
            id: 3,
            name: "PlayStation Store",
            slug: "playstation-store",
            domain: "store.playstation.com",
            games_count: 8009,
            image_background:
              "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg",
          },
        },
        {
          id: 218233,
          store: {
            id: 8,
            name: "Google Play",
            slug: "google-play",
            domain: "play.google.com",
            games_count: 17107,
            image_background:
              "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
          },
        },
        {
          id: 79036,
          store: {
            id: 4,
            name: "App Store",
            slug: "apple-appstore",
            domain: "apps.apple.com",
            games_count: 75577,
            image_background:
              "https://media.rawg.io/media/games/7a4/7a45e4cdc5b07f316d49cf147b083b27.jpg",
          },
        },
        {
          id: 713685,
          store: {
            id: 11,
            name: "Epic Games",
            slug: "epic-games",
            domain: "epicgames.com",
            games_count: 1365,
            image_background:
              "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 233006,
          image_background:
            "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
        },
        {
          id: 7,
          name: "Multiplayer",
          slug: "multiplayer",
          language: "eng",
          games_count: 39626,
          image_background:
            "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        },
        {
          id: 40836,
          name: "Full controller support",
          slug: "full-controller-support",
          language: "eng",
          games_count: 20091,
          image_background:
            "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg",
        },
        {
          id: 13,
          name: "Atmospheric",
          slug: "atmospheric",
          language: "eng",
          games_count: 35490,
          image_background:
            "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
        },
        {
          id: 24,
          name: "RPG",
          slug: "rpg",
          language: "eng",
          games_count: 22968,
          image_background:
            "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg",
        },
        {
          id: 149,
          name: "Third Person",
          slug: "third-person",
          language: "eng",
          games_count: 12611,
          image_background:
            "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
        },
        {
          id: 6,
          name: "Exploration",
          slug: "exploration",
          language: "eng",
          games_count: 25227,
          image_background:
            "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg",
        },
        {
          id: 193,
          name: "Classic",
          slug: "classic",
          language: "eng",
          games_count: 1803,
          image_background:
            "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg",
        },
        {
          id: 189,
          name: "Female Protagonist",
          slug: "female-protagonist",
          language: "eng",
          games_count: 13513,
          image_background:
            "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg",
        },
        {
          id: 15,
          name: "Stealth",
          slug: "stealth",
          language: "eng",
          games_count: 6575,
          image_background:
            "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
        },
        {
          id: 69,
          name: "Action-Adventure",
          slug: "action-adventure",
          language: "eng",
          games_count: 18102,
          image_background:
            "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg",
        },
        {
          id: 150,
          name: "Third-Person Shooter",
          slug: "third-person-shooter",
          language: "eng",
          games_count: 3700,
          image_background:
            "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg",
        },
        {
          id: 74,
          name: "Retro",
          slug: "retro",
          language: "eng",
          games_count: 42584,
          image_background:
            "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg",
        },
        {
          id: 110,
          name: "Cinematic",
          slug: "cinematic",
          language: "eng",
          games_count: 2599,
          image_background:
            "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
        },
        {
          id: 269,
          name: "Quick-Time Events",
          slug: "quick-time-events",
          language: "eng",
          games_count: 707,
          image_background:
            "https://media.rawg.io/media/games/34e/34ecf9a17fbd9344b0bd8f044ca3f277.jpg",
        },
        {
          id: 126,
          name: "Dinosaurs",
          slug: "dinosaurs",
          language: "eng",
          games_count: 1757,
          image_background:
            "https://media.rawg.io/media/screenshots/83e/83ec6107288567671f6008d9a05fab7e.jpg",
        },
        {
          id: 306,
          name: "Lara Croft",
          slug: "lara-croft",
          language: "eng",
          games_count: 14,
          image_background:
            "https://media.rawg.io/media/games/e6b/e6b025951f9a72673f41c0588fb85758.jpg",
        },
      ],
      esrb_rating: {
        id: 4,
        name: "Mature",
        slug: "mature",
      },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
        },
        {
          id: 99160,
          image:
            "https://media.rawg.io/media/screenshots/4f9/4f9d5efdecfb63cb99f1baa4c0ceb3bf.jpg",
        },
        {
          id: 99161,
          image:
            "https://media.rawg.io/media/screenshots/80f/80f373082b2a74da3f9c3fe2b877dcd0.jpg",
        },
        {
          id: 99162,
          image:
            "https://media.rawg.io/media/screenshots/a87/a8733e877f8fbe45e4a727c22a06aa2e.jpg",
        },
        {
          id: 99163,
          image:
            "https://media.rawg.io/media/screenshots/3f9/3f91678c6805a76419fa4ea3a045a909.jpg",
        },
        {
          id: 99164,
          image:
            "https://media.rawg.io/media/screenshots/417/4170bf07be43a8d8249193883f87f1c1.jpg",
        },
        {
          id: 99165,
          image:
            "https://media.rawg.io/media/screenshots/2a4/2a4250f83ad9e959d8b4ca9376ae34ea.jpg",
        },
      ],
    },
    {
      id: 13536,
      slug: "portal",
      name: "Portal",
      released: "2007-10-09",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
      rating: 4.5,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: "exceptional",
          count: 2899,
          percent: 60.12,
        },
        {
          id: 4,
          title: "recommended",
          count: 1631,
          percent: 33.82,
        },
        {
          id: 3,
          title: "meh",
          count: 192,
          percent: 3.98,
        },
        {
          id: 1,
          title: "skip",
          count: 100,
          percent: 2.07,
        },
      ],
      ratings_count: 4781,
      reviews_text_count: 28,
      added: 17217,
      added_by_status: {
        yet: 455,
        owned: 10922,
        beaten: 5084,
        toplay: 274,
        dropped: 401,
        playing: 81,
      },
      metacritic: 90,
      playtime: 4,
      suggestions_count: 302,
      updated: "2024-12-24T04:01:36",
      user_game: null,
      reviews_count: 4822,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 5,
            name: "macOS",
            slug: "macos",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 105436,
            image_background:
              "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg",
          },
          released_at: "2007-10-09",
          requirements_en: {
            minimum:
              "<strong>Minimum: </strong>OS X version Leopard 10.5.8, Snow Leopard 10.6.3, 1GB RAM, NVIDIA GeForce 8 or higher, ATI X1600 or higher, or Intel HD 3000 or higher Mouse, Keyboard, Internet Connection",
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 541497,
            image_background:
              "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
          },
          released_at: "2007-10-09",
          requirements_en: {
            minimum:
              "<p><strong>Minimum: </strong>1.7 GHz Processor, 512MB RAM, DirectX&reg; 8.1 level Graphics Card (Requires support for SSE), Windows&reg; 7 (32/64-bit)/Vista/XP, Mouse, Keyboard, Internet Connection</p>\r\n\t\t\t<p><strong>Recommended: </strong>Pentium 4 processor (3.0GHz, or better), 1GB RAM, DirectX&reg; 9 level Graphics Card, Windows&reg; 7 (32/64-bit)/Vista/XP, Mouse, Keyboard, Internet Connection</p>",
          },
          requirements_ru: {
            minimum:
              "Pentium 4/Athlon XP 1.7 ГГц,512 Мб памяти,3D-ускоритель со 128 Мб памяти,7.5 Гб на винчестере,Интернет-соединение 128 Кб/c",
            recommended:
              "Core 2 Duo/Athlon 64 3 ГГц,1 Гб памяти,3D-ускоритель с 512 Мб памяти,12 Гб на винчестере,Интернет-соединение 512 Кб/c",
          },
        },
        {
          platform: {
            id: 21,
            name: "Android",
            slug: "android",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 52407,
            image_background:
              "https://media.rawg.io/media/games/6d3/6d33014a4ed48a19c30a77ead5a0f62e.jpg",
          },
          released_at: "2007-10-09",
          requirements_en: {
            minimum: "4.4 and up",
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 16,
            name: "PlayStation 3",
            slug: "playstation3",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3167,
            image_background:
              "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
          },
          released_at: "2007-10-09",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 14,
            name: "Xbox 360",
            slug: "xbox360",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2805,
            image_background:
              "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
          },
          released_at: "2007-10-09",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 6,
            name: "Linux",
            slug: "linux",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 78176,
            image_background:
              "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg",
          },
          released_at: "2007-10-09",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 7,
            name: "Nintendo Switch",
            slug: "nintendo-switch",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5566,
            image_background:
              "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg",
          },
          released_at: "2007-10-09",
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: "PC",
            slug: "pc",
          },
        },
        {
          platform: {
            id: 2,
            name: "PlayStation",
            slug: "playstation",
          },
        },
        {
          platform: {
            id: 3,
            name: "Xbox",
            slug: "xbox",
          },
        },
        {
          platform: {
            id: 8,
            name: "Android",
            slug: "android",
          },
        },
        {
          platform: {
            id: 5,
            name: "Apple Macintosh",
            slug: "mac",
          },
        },
        {
          platform: {
            id: 6,
            name: "Linux",
            slug: "linux",
          },
        },
        {
          platform: {
            id: 7,
            name: "Nintendo",
            slug: "nintendo",
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 184421,
          image_background:
            "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
        },
        {
          id: 7,
          name: "Puzzle",
          slug: "puzzle",
          games_count: 97320,
          image_background:
            "https://media.rawg.io/media/games/948/948fe7f00b6cba8472f5ecd07a455077.jpg",
        },
      ],
      stores: [
        {
          id: 14890,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 104541,
            image_background:
              "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
          },
        },
        {
          id: 40973,
          store: {
            id: 8,
            name: "Google Play",
            slug: "google-play",
            domain: "play.google.com",
            games_count: 17107,
            image_background:
              "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 233006,
          image_background:
            "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
        },
        {
          id: 40847,
          name: "Steam Achievements",
          slug: "steam-achievements",
          language: "eng",
          games_count: 42372,
          image_background:
            "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg",
        },
        {
          id: 13,
          name: "Atmospheric",
          slug: "atmospheric",
          language: "eng",
          games_count: 35490,
          image_background:
            "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
        },
        {
          id: 42,
          name: "Great Soundtrack",
          slug: "great-soundtrack",
          language: "eng",
          games_count: 3415,
          image_background:
            "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
        },
        {
          id: 118,
          name: "Story Rich",
          slug: "story-rich",
          language: "eng",
          games_count: 23569,
          image_background:
            "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        },
        {
          id: 8,
          name: "First-Person",
          slug: "first-person",
          language: "eng",
          games_count: 33604,
          image_background:
            "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
        },
        {
          id: 32,
          name: "Sci-fi",
          slug: "sci-fi",
          language: "eng",
          games_count: 20186,
          image_background:
            "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
        },
        {
          id: 40845,
          name: "Partial Controller Support",
          slug: "partial-controller-support",
          language: "eng",
          games_count: 12564,
          image_background:
            "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
        },
        {
          id: 30,
          name: "FPS",
          slug: "fps",
          language: "eng",
          games_count: 13848,
          image_background:
            "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg",
        },
        {
          id: 4,
          name: "Funny",
          slug: "funny",
          language: "eng",
          games_count: 26240,
          image_background:
            "https://media.rawg.io/media/games/ffe/ffed87105b14f5beff72ff44a7793fd5.jpg",
        },
        {
          id: 193,
          name: "Classic",
          slug: "classic",
          language: "eng",
          games_count: 1803,
          image_background:
            "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg",
        },
        {
          id: 189,
          name: "Female Protagonist",
          slug: "female-protagonist",
          language: "eng",
          games_count: 13513,
          image_background:
            "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg",
        },
        {
          id: 123,
          name: "Comedy",
          slug: "comedy",
          language: "eng",
          games_count: 13249,
          image_background:
            "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg",
        },
        {
          id: 40838,
          name: "Includes level editor",
          slug: "includes-level-editor",
          language: "eng",
          games_count: 1974,
          image_background:
            "https://media.rawg.io/media/games/c11/c11a0b92b4c28f2e0db489f430142653.jpg",
        },
        {
          id: 40833,
          name: "Captions available",
          slug: "captions-available",
          language: "eng",
          games_count: 1413,
          image_background:
            "https://media.rawg.io/media/games/c6b/c6bd26767c1053fef2b10bb852943559.jpg",
        },
        {
          id: 111,
          name: "Short",
          slug: "short",
          language: "eng",
          games_count: 57882,
          image_background:
            "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
        },
        {
          id: 114,
          name: "Physics",
          slug: "physics",
          language: "eng",
          games_count: 20014,
          image_background:
            "https://media.rawg.io/media/games/23d/23d78acedbb5f40c9fb64e73af5af65d.jpg",
        },
        {
          id: 148,
          name: "Dark Humor",
          slug: "dark-humor",
          language: "eng",
          games_count: 3235,
          image_background:
            "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
        },
        {
          id: 40834,
          name: "Commentary available",
          slug: "commentary-available",
          language: "eng",
          games_count: 281,
          image_background:
            "https://media.rawg.io/media/games/764/7648a8802fae5247298d775c85e9535f.jpg",
        },
        {
          id: 40839,
          name: "Includes Source SDK",
          slug: "includes-source-sdk",
          language: "eng",
          games_count: 63,
          image_background:
            "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg",
        },
        {
          id: 87,
          name: "Science",
          slug: "science",
          language: "eng",
          games_count: 1827,
          image_background:
            "https://media.rawg.io/media/games/bda/bdab2603c0dc67268d0610449bc7df16.jpg",
        },
      ],
      esrb_rating: {
        id: 3,
        name: "Teen",
        slug: "teen",
      },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
        },
        {
          id: 115793,
          image:
            "https://media.rawg.io/media/screenshots/99e/99e94bd55eb75fa6e75c3dcbb1a570b2.jpg",
        },
        {
          id: 115794,
          image:
            "https://media.rawg.io/media/screenshots/2f0/2f0297a46934d9fa914c626902b1ce20.jpg",
        },
        {
          id: 115795,
          image:
            "https://media.rawg.io/media/screenshots/3b3/3b3713fbca6194dfc4d6e8a8d006d354.jpg",
        },
        {
          id: 115796,
          image:
            "https://media.rawg.io/media/screenshots/c6f/c6f9afc3e4dd51068b22f04acbc6ca99.jpg",
        },
        {
          id: 115797,
          image:
            "https://media.rawg.io/media/screenshots/748/74841207eec76ebc7fc03210168bfb7e.jpg",
        },
        {
          id: 115798,
          image:
            "https://media.rawg.io/media/screenshots/e72/e7256b4caedf099bcb8ebd332f892334.jpg",
        },
      ],
    },
    {
      id: 12020,
      slug: "left-4-dead-2",
      name: "Left 4 Dead 2",
      released: "2009-11-17",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
      rating: 4.09,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: "recommended",
          count: 1773,
          percent: 53.36,
        },
        {
          id: 5,
          title: "exceptional",
          count: 1045,
          percent: 31.45,
        },
        {
          id: 3,
          title: "meh",
          count: 379,
          percent: 11.41,
        },
        {
          id: 1,
          title: "skip",
          count: 126,
          percent: 3.79,
        },
      ],
      ratings_count: 3301,
      reviews_text_count: 12,
      added: 17143,
      added_by_status: {
        yet: 386,
        owned: 12737,
        beaten: 2548,
        toplay: 115,
        dropped: 1206,
        playing: 151,
      },
      metacritic: 89,
      playtime: 9,
      suggestions_count: 597,
      updated: "2024-12-24T04:13:11",
      user_game: null,
      reviews_count: 3323,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 5,
            name: "macOS",
            slug: "macos",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 105436,
            image_background:
              "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg",
          },
          released_at: "2009-11-17",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 6,
            name: "Linux",
            slug: "linux",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 78176,
            image_background:
              "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg",
          },
          released_at: "2009-11-17",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 541497,
            image_background:
              "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
          },
          released_at: "2009-11-17",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows® 7 32/64-bit / Vista 32/64 / XP<br></li><li><strong>Processor:</strong> Pentium 4 3.0GHz<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> Video card with 128 MB, Shader model 2.0. ATI X800, NVidia 6600 or better<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 13 GB available space<br></li><li><strong>Sound Card:</strong> DirectX 9.0c compatible sound card</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows® 7 32/64-bit / Vista 32/64 / XP<br></li><li><strong>Processor:</strong> Intel core 2 duo 2.4GHz<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> Video Card Shader model 3.0. NVidia 7600, ATI X1600 or better<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 13 GB available space<br></li><li><strong>Sound Card:</strong> DirectX 9.0c compatible sound card</li></ul>',
          },
          requirements_ru: {
            minimum:
              "Pentium 4/Athlon 64 3 ГГц,1 Гб памяти,GeForce 6600/Radeon X800,7.5 Гб на винчестере",
            recommended:
              "Core 2 Duo/Athlon 64 X2 2.4 ГГц,2 Гб памяти,GeForce 7600/Radeon X1600,7.5 Гб на винчестере",
          },
        },
        {
          platform: {
            id: 14,
            name: "Xbox 360",
            slug: "xbox360",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2805,
            image_background:
              "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
          },
          released_at: "2009-11-17",
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: "PC",
            slug: "pc",
          },
        },
        {
          platform: {
            id: 3,
            name: "Xbox",
            slug: "xbox",
          },
        },
        {
          platform: {
            id: 5,
            name: "Apple Macintosh",
            slug: "mac",
          },
        },
        {
          platform: {
            id: 6,
            name: "Linux",
            slug: "linux",
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 184421,
          image_background:
            "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
        },
        {
          id: 2,
          name: "Shooter",
          slug: "shooter",
          games_count: 59541,
          image_background:
            "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg",
        },
      ],
      stores: [
        {
          id: 13208,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 104541,
            image_background:
              "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
          },
        },
        {
          id: 34000,
          store: {
            id: 7,
            name: "Xbox 360 Store",
            slug: "xbox360",
            domain: "marketplace.xbox.com",
            games_count: 1915,
            image_background:
              "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 233006,
          image_background:
            "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
        },
        {
          id: 40847,
          name: "Steam Achievements",
          slug: "steam-achievements",
          language: "eng",
          games_count: 42372,
          image_background:
            "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg",
        },
        {
          id: 7,
          name: "Multiplayer",
          slug: "multiplayer",
          language: "eng",
          games_count: 39626,
          image_background:
            "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        },
        {
          id: 40836,
          name: "Full controller support",
          slug: "full-controller-support",
          language: "eng",
          games_count: 20091,
          image_background:
            "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg",
        },
        {
          id: 40849,
          name: "Steam Cloud",
          slug: "steam-cloud",
          language: "eng",
          games_count: 20315,
          image_background:
            "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
        },
        {
          id: 7808,
          name: "steam-trading-cards",
          slug: "steam-trading-cards",
          language: "eng",
          games_count: 7568,
          image_background:
            "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
        },
        {
          id: 18,
          name: "Co-op",
          slug: "co-op",
          language: "eng",
          games_count: 12594,
          image_background:
            "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
        },
        {
          id: 411,
          name: "cooperative",
          slug: "cooperative",
          language: "eng",
          games_count: 5553,
          image_background:
            "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
        },
        {
          id: 8,
          name: "First-Person",
          slug: "first-person",
          language: "eng",
          games_count: 33604,
          image_background:
            "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
        },
        {
          id: 16,
          name: "Horror",
          slug: "horror",
          language: "eng",
          games_count: 46092,
          image_background:
            "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
        },
        {
          id: 30,
          name: "FPS",
          slug: "fps",
          language: "eng",
          games_count: 13848,
          image_background:
            "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg",
        },
        {
          id: 9,
          name: "Online Co-Op",
          slug: "online-co-op",
          language: "eng",
          games_count: 6330,
          image_background:
            "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
        },
        {
          id: 26,
          name: "Gore",
          slug: "gore",
          language: "eng",
          games_count: 6026,
          image_background:
            "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg",
        },
        {
          id: 1,
          name: "Survival",
          slug: "survival",
          language: "eng",
          games_count: 9453,
          image_background:
            "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
        },
        {
          id: 75,
          name: "Local Co-Op",
          slug: "local-co-op",
          language: "eng",
          games_count: 5647,
          image_background:
            "https://media.rawg.io/media/games/226/2262cea0b385db6cf399f4be831603b0.jpg",
        },
        {
          id: 80,
          name: "Tactical",
          slug: "tactical",
          language: "eng",
          games_count: 5607,
          image_background:
            "https://media.rawg.io/media/games/9c4/9c47f320eb73c9a02d462e12f6206b26.jpg",
        },
        {
          id: 11669,
          name: "stats",
          slug: "stats",
          language: "eng",
          games_count: 5247,
          image_background:
            "https://media.rawg.io/media/games/93e/93ee6101e1c943732f06080dddb0fe4c.jpg",
        },
        {
          id: 40852,
          name: "Steam Workshop",
          slug: "steam-workshop",
          language: "eng",
          games_count: 1598,
          image_background:
            "https://media.rawg.io/media/games/fd6/fd6a1eecd3ec0f875f1924f3656b7dd9.jpg",
        },
        {
          id: 63,
          name: "Zombies",
          slug: "zombies",
          language: "eng",
          games_count: 10621,
          image_background:
            "https://media.rawg.io/media/games/4cb/4cb463b5588adc672124fb041f09e91c.jpg",
        },
        {
          id: 62,
          name: "Moddable",
          slug: "moddable",
          language: "eng",
          games_count: 995,
          image_background:
            "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg",
        },
        {
          id: 17,
          name: "Survival Horror",
          slug: "survival-horror",
          language: "eng",
          games_count: 8973,
          image_background:
            "https://media.rawg.io/media/games/974/974342a3959981a17bdbbff2fd7f97b0.jpg",
        },
        {
          id: 43,
          name: "Post-apocalyptic",
          slug: "post-apocalyptic",
          language: "eng",
          games_count: 4310,
          image_background:
            "https://media.rawg.io/media/games/a79/a79d2fc90c4dbf07a8580b19600fd61d.jpg",
        },
        {
          id: 40833,
          name: "Captions available",
          slug: "captions-available",
          language: "eng",
          games_count: 1413,
          image_background:
            "https://media.rawg.io/media/games/c6b/c6bd26767c1053fef2b10bb852943559.jpg",
        },
        {
          id: 5,
          name: "Replay Value",
          slug: "replay-value",
          language: "eng",
          games_count: 1867,
          image_background:
            "https://media.rawg.io/media/games/8e6/8e699e91cf77c2060b6d515e2135b1b1.jpg",
        },
        {
          id: 11,
          name: "Team-Based",
          slug: "team-based",
          language: "eng",
          games_count: 1764,
          image_background:
            "https://media.rawg.io/media/games/179/179245a3693049a11a25b900ab18f8f7.jpg",
        },
        {
          id: 40856,
          name: "Valve Anti-Cheat enabled",
          slug: "valve-anti-cheat-enabled",
          language: "eng",
          games_count: 105,
          image_background:
            "https://media.rawg.io/media/games/78d/78dfae12fb8c5b16cd78648553071e0a.jpg",
        },
        {
          id: 40834,
          name: "Commentary available",
          slug: "commentary-available",
          language: "eng",
          games_count: 281,
          image_background:
            "https://media.rawg.io/media/games/764/7648a8802fae5247298d775c85e9535f.jpg",
        },
        {
          id: 40839,
          name: "Includes Source SDK",
          slug: "includes-source-sdk",
          language: "eng",
          games_count: 63,
          image_background:
            "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg",
        },
      ],
      esrb_rating: {
        id: 4,
        name: "Mature",
        slug: "mature",
      },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        },
        {
          id: 99748,
          image:
            "https://media.rawg.io/media/screenshots/4c0/4c043fd1a5ff78900483f2e82580fea0.jpg",
        },
        {
          id: 99749,
          image:
            "https://media.rawg.io/media/screenshots/c90/c9071628c238fbc20b366e2413dd8b4a.jpg",
        },
        {
          id: 99750,
          image:
            "https://media.rawg.io/media/screenshots/e29/e293b0f98092b8c0dbe24d66846088bb.jpg",
        },
        {
          id: 99751,
          image:
            "https://media.rawg.io/media/screenshots/168/16867bc76b385eb0fb749e41f7ada93d.jpg",
        },
        {
          id: 99752,
          image:
            "https://media.rawg.io/media/screenshots/fb9/fb917e562f311f48ff8d27632bd29a80.jpg",
        },
        {
          id: 99753,
          image:
            "https://media.rawg.io/media/screenshots/5f2/5f2ca569912add2a211b20ba3f576b97.jpg",
        },
      ],
    },
    {
      id: 5679,
      slug: "the-elder-scrolls-v-skyrim",
      name: "The Elder Scrolls V: Skyrim",
      released: "2011-11-11",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
      rating: 4.43,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: "exceptional",
          count: 2726,
          percent: 57.57,
        },
        {
          id: 4,
          title: "recommended",
          count: 1490,
          percent: 31.47,
        },
        {
          id: 3,
          title: "meh",
          count: 424,
          percent: 8.95,
        },
        {
          id: 1,
          title: "skip",
          count: 95,
          percent: 2.01,
        },
      ],
      ratings_count: 4686,
      reviews_text_count: 34,
      added: 16279,
      added_by_status: {
        yet: 508,
        owned: 9805,
        beaten: 3813,
        toplay: 424,
        dropped: 1333,
        playing: 396,
      },
      metacritic: 94,
      playtime: 46,
      suggestions_count: 609,
      updated: "2024-12-24T04:03:16",
      user_game: null,
      reviews_count: 4735,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 541497,
            image_background:
              "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
          },
          released_at: "2011-11-11",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br>\t\t\t\t\t\t\t\t<ul class="bb_ul"><li><strong>OS:</strong> Windows 7/Vista/XP PC (32 or 64 bit)<br>\t\t\t\t\t\t\t\t</li><li><strong>Processor:</strong> Dual Core 2.0GHz or equivalent processor<br>\t\t\t\t\t\t\t\t</li><li><strong>Memory:</strong> 2GB System RAM<br>\t\t\t\t\t\t\t\t</li><li><strong>Hard Disk Space:</strong> 6GB free HDD Space<br>\t\t\t\t\t\t\t\t</li><li><strong>Video Card:</strong> Direct X 9.0c compliant video card with 512 MB of RAM<br>\t\t\t\t\t\t\t\t</li><li><strong>Sound:</strong> DirectX compatible sound card<br>\t\t\t\t\t\t\t\t</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br>\t\t\t\t\t\t\t\t<ul class="bb_ul"><li><strong>Processor:</strong> Quad-core Intel or AMD CPU<br>\t\t\t\t\t\t\t\t</li><li><strong>Memory:</strong> 4GB System RAM<br>\t\t\t\t\t\t\t\t</li><li><strong>Video Card:</strong> DirectX 9.0c compatible NVIDIA or AMD ATI video card with 1GB of RAM (Nvidia GeForce GTX 260 or higher; ATI Radeon 4890 or higher)<br>\t\t\t\t\t\t\t\t</li></ul>',
          },
          requirements_ru: {
            minimum:
              "Core 2 Duo/Athlon X2 2 ГГц,2 Гб памяти,GeForce 8800/Radeon X1900,6 Гб на винчестере",
            recommended:
              "Core 2 Quad/Phenom X4 2.5 ГГц,4 Гб памяти,GeForce GTX 260/Radeon HD 4890,6 Гб на винчестере",
          },
        },
        {
          platform: {
            id: 186,
            name: "Xbox Series S/X",
            slug: "xbox-series-x",
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 1026,
            image_background:
              "https://media.rawg.io/media/games/ffe/ffed87105b14f5beff72ff44a7793fd5.jpg",
          },
          released_at: "2011-11-11",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 187,
            name: "PlayStation 5",
            slug: "playstation5",
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 1171,
            image_background:
              "https://media.rawg.io/media/games/b4a/b4adf80c36e267b35acc3497ed2af19c.jpg",
          },
          released_at: "2011-11-11",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: "Xbox One",
            slug: "xbox-one",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5672,
            image_background:
              "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg",
          },
          released_at: "2011-11-11",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: "PlayStation 4",
            slug: "playstation4",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6873,
            image_background:
              "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
          },
          released_at: "2011-11-11",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 7,
            name: "Nintendo Switch",
            slug: "nintendo-switch",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5566,
            image_background:
              "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg",
          },
          released_at: "2011-11-11",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 14,
            name: "Xbox 360",
            slug: "xbox360",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2805,
            image_background:
              "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
          },
          released_at: "2011-11-11",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 16,
            name: "PlayStation 3",
            slug: "playstation3",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3167,
            image_background:
              "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
          },
          released_at: "2011-11-11",
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: "PC",
            slug: "pc",
          },
        },
        {
          platform: {
            id: 2,
            name: "PlayStation",
            slug: "playstation",
          },
        },
        {
          platform: {
            id: 3,
            name: "Xbox",
            slug: "xbox",
          },
        },
        {
          platform: {
            id: 7,
            name: "Nintendo",
            slug: "nintendo",
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 184421,
          image_background:
            "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
        },
        {
          id: 5,
          name: "RPG",
          slug: "role-playing-games-rpg",
          games_count: 58206,
          image_background:
            "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg",
        },
      ],
      stores: [
        {
          id: 6037,
          store: {
            id: 3,
            name: "PlayStation Store",
            slug: "playstation-store",
            domain: "store.playstation.com",
            games_count: 8009,
            image_background:
              "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg",
          },
        },
        {
          id: 15144,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 104541,
            image_background:
              "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
          },
        },
        {
          id: 32919,
          store: {
            id: 6,
            name: "Nintendo Store",
            slug: "nintendo",
            domain: "nintendo.com",
            games_count: 9099,
            image_background:
              "https://media.rawg.io/media/games/25c/25c4776ab5723d5d735d8bf617ca12d9.jpg",
          },
        },
        {
          id: 49792,
          store: {
            id: 7,
            name: "Xbox 360 Store",
            slug: "xbox360",
            domain: "marketplace.xbox.com",
            games_count: 1915,
            image_background:
              "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 233006,
          image_background:
            "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
        },
        {
          id: 40847,
          name: "Steam Achievements",
          slug: "steam-achievements",
          language: "eng",
          games_count: 42372,
          image_background:
            "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg",
        },
        {
          id: 40849,
          name: "Steam Cloud",
          slug: "steam-cloud",
          language: "eng",
          games_count: 20315,
          image_background:
            "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
        },
        {
          id: 13,
          name: "Atmospheric",
          slug: "atmospheric",
          language: "eng",
          games_count: 35490,
          image_background:
            "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
        },
        {
          id: 7808,
          name: "steam-trading-cards",
          slug: "steam-trading-cards",
          language: "eng",
          games_count: 7568,
          image_background:
            "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
        },
        {
          id: 42,
          name: "Great Soundtrack",
          slug: "great-soundtrack",
          language: "eng",
          games_count: 3415,
          image_background:
            "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
        },
        {
          id: 24,
          name: "RPG",
          slug: "rpg",
          language: "eng",
          games_count: 22968,
          image_background:
            "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg",
        },
        {
          id: 118,
          name: "Story Rich",
          slug: "story-rich",
          language: "eng",
          games_count: 23569,
          image_background:
            "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        },
        {
          id: 36,
          name: "Open World",
          slug: "open-world",
          language: "eng",
          games_count: 8145,
          image_background:
            "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg",
        },
        {
          id: 8,
          name: "First-Person",
          slug: "first-person",
          language: "eng",
          games_count: 33604,
          image_background:
            "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
        },
        {
          id: 149,
          name: "Third Person",
          slug: "third-person",
          language: "eng",
          games_count: 12611,
          image_background:
            "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
        },
        {
          id: 40845,
          name: "Partial Controller Support",
          slug: "partial-controller-support",
          language: "eng",
          games_count: 12564,
          image_background:
            "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
        },
        {
          id: 64,
          name: "Fantasy",
          slug: "fantasy",
          language: "eng",
          games_count: 29604,
          image_background:
            "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg",
        },
        {
          id: 37,
          name: "Sandbox",
          slug: "sandbox",
          language: "eng",
          games_count: 7457,
          image_background:
            "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
        },
        {
          id: 97,
          name: "Action RPG",
          slug: "action-rpg",
          language: "eng",
          games_count: 7595,
          image_background:
            "https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg",
        },
        {
          id: 40852,
          name: "Steam Workshop",
          slug: "steam-workshop",
          language: "eng",
          games_count: 1598,
          image_background:
            "https://media.rawg.io/media/games/fd6/fd6a1eecd3ec0f875f1924f3656b7dd9.jpg",
        },
        {
          id: 468,
          name: "role-playing",
          slug: "role-playing",
          language: "eng",
          games_count: 1612,
          image_background:
            "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
        },
        {
          id: 62,
          name: "Moddable",
          slug: "moddable",
          language: "eng",
          games_count: 995,
          image_background:
            "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg",
        },
        {
          id: 121,
          name: "Character Customization",
          slug: "character-customization",
          language: "eng",
          games_count: 5391,
          image_background:
            "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
        },
        {
          id: 40,
          name: "Dark Fantasy",
          slug: "dark-fantasy",
          language: "eng",
          games_count: 4700,
          image_background:
            "https://media.rawg.io/media/games/a6c/a6ccd34125c594abf1a9c9821b9a715d.jpg",
        },
        {
          id: 66,
          name: "Medieval",
          slug: "medieval",
          language: "eng",
          games_count: 6990,
          image_background:
            "https://media.rawg.io/media/games/ccd/ccd40e8f86c0ae10a082b610d31d4475.jpg",
        },
        {
          id: 82,
          name: "Magic",
          slug: "magic",
          language: "eng",
          games_count: 10102,
          image_background:
            "https://media.rawg.io/media/games/330/330952c1726bbb56fc3b9f8a8c83ab1d.jpg",
        },
        {
          id: 205,
          name: "Lore-Rich",
          slug: "lore-rich",
          language: "eng",
          games_count: 1611,
          image_background:
            "https://media.rawg.io/media/games/8fc/8fc59e74133fd8a8a436b7e2d0fb36c2.jpg",
        },
        {
          id: 215,
          name: "Dragons",
          slug: "dragons",
          language: "eng",
          games_count: 2705,
          image_background:
            "https://media.rawg.io/media/games/729/729822a7ac978607241a310677c7775d.jpg",
        },
      ],
      esrb_rating: {
        id: 4,
        name: "Mature",
        slug: "mature",
      },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
        },
        {
          id: 118307,
          image:
            "https://media.rawg.io/media/screenshots/3bd/3bd2710bd1ffb6664fdea7b83afd067e.jpg",
        },
        {
          id: 118308,
          image:
            "https://media.rawg.io/media/screenshots/d4e/d4e9b13f54748584ccbd6f998094dade.jpg",
        },
        {
          id: 118309,
          image:
            "https://media.rawg.io/media/screenshots/599/59946a630e9c7871003763d63184404a.jpg",
        },
        {
          id: 118310,
          image:
            "https://media.rawg.io/media/screenshots/c5d/c5dad426038d7d12f933eedbeab48ff3.jpg",
        },
        {
          id: 118311,
          image:
            "https://media.rawg.io/media/screenshots/b32/b326fa01c82db82edd41ed299886ee44.jpg",
        },
        {
          id: 118312,
          image:
            "https://media.rawg.io/media/screenshots/091/091e95b49d5a22de036698fc731395a2.jpg",
        },
      ],
    },
  ];
  return (
    <View style={styles.container}>
      <DefaultText style={{ fontWeight: "bold", fontSize: 24 }}>
        Most Common Games
      </DefaultText>

      <Carousel>
        {games.map((game) => (
          <Fragment key={game.id}>
            <SimpleCard
              name={game.name}
              image={game.background_image}
              id={game.id}
              rating={game.rating}
            />
          </Fragment>
        ))}
      </Carousel>
    </View>
  );
}

export default MostCommonGames;
