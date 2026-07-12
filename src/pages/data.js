let rawData = [
  ["Timestamp", "Your team", "Category", "Anime Name", "Upload your screenshot", "Column 1"],
  ["7/11/2026 21:41:47", "Team 4", "22) Music note", "Your Lie in April", "https://drive.google.com/open?id=17GmwAOxy3pqClvhR44tfFpIniY9TMs7H", "IMG_1313 - Justin Chang.png"],
  ["7/11/2026 21:42:10", "Team 4", "2) At least 2 characters in the sky/airborne/falling", "Konosuba ", "https://drive.google.com/open?id=1z4bDJsHeqrPUp_4nuy3um0NUhb_tCA2f", "IMG_7486 - Joshua Chan.png"],
  ["7/11/2026 21:43:09", "Team 3", "2) At least 2 characters in the sky/airborne/falling", "Yofukashi no Uta", "https://drive.google.com/open?id=1uekiD_bUKiVvawe_Rpsgw8NwNv6AUh0t", "IMG_8044 - Jonathan Tong.jpeg"],
  ["7/11/2026 21:44:21", "Team 4", "19) Gun", "Cowboy Bepop", "https://drive.google.com/open?id=1n_dPsRndUjo0uumLfTmpP4O16J7HgIoX", "IMG_1314 - Justin Chang.png"],
  ["7/11/2026 21:44:28", "Team 1", "3) At least 3 birds flying", "Kaguya sama", "https://drive.google.com/open?id=1aWJO5dOt2WbkKzXt-BjlTYIkGPlxcm5r", "IMG_1297 - Matthew Tang.png"],
  ["7/11/2026 21:44:48", "Team 1", "14) Chibi-styled character (stylized/exaggerated)", "Made in abyss", "https://drive.google.com/open?id=1wP8j__jzbAESfGaLTOByehnBbz4fJDyZ", "IMG_3426 - Matt White.png"],
  ["7/11/2026 21:46:18", "Team 3", "3) At least 3 birds flying", "Haikyuu S3", "https://drive.google.com/open?id=17eg8-7dVShfKVs4lV-gKNriRVSLZVI6y", "IMG_6229 - Emily Gao.png"],
  ["7/11/2026 21:46:23", "Team 3", "5) Character blushing", "Toradora", "https://drive.google.com/open?id=17oaznhIH3FJmkKMsRmgLpF3U7zkl1Qam", "IMG_8045 - Jonathan Tong.jpeg"],
  ["7/11/2026 21:46:35", "Team 1", "4) At least 5 distinct hair colors", "Quintessential quintuplets ", "https://drive.google.com/open?id=1wdKuPj08SSlgHaDPtWC99S1FJhOQUhqh", "IMG_3427 - Matt White.png"],
  ["7/11/2026 21:46:54", "Team 1", "17) Glass shatter/pieces of broken glass", "Summertime rendering", "https://drive.google.com/open?id=1wS4VNf26VhR1KEZvFdO40ZKRadp9x6oF", "Screenshot_20260711_214606_YouTube - Kevin C.jpg"],
  ["7/11/2026 21:47:02", "Team 2", "4) At least 5 distinct hair colors", "Quintessential quintuplets", "https://drive.google.com/open?id=11wCIR1eIZtu4lVQ7ZcA8v56iDgi4Hps-", "Screenshot_20260711-214523 - Cameron Hui.png"],
  ["7/11/2026 21:47:26", "Team 1", "6) Character crying/tears in eyes", "Clannad after story", "https://drive.google.com/open?id=1wRogpbiXx5rt2-EPYc4HYC9hj6imo5kL", "IMG_1298 - Matthew Tang.jpeg"],
  ["7/11/2026 21:48:14", "Team 3", "8) Character falling into water/underwater", "Nagi no Asukara", "https://drive.google.com/open?id=1H_YOG8v7DJuX246zaPF1PjZeVxNTAieQ", "IMG_8046 - Jonathan Tong.jpeg"],
  ["7/11/2026 21:48:16", "Team 3", "7) Character doing a dance", "Assassination Classroom", "https://drive.google.com/open?id=1iiDEym0dpyw51dKto9CEEjbAlyGtg_Fv", "IMG_4516 - Nathan Yee.png"],
  ["7/11/2026 21:48:25", "Team 1", "13) Chess board/chess piece", "Death note ", "https://drive.google.com/open?id=1QPJcG2-UC2-xr5ABA90he03qSKZHH1xS", "IMG_3428 - Matt White.png"],
  ["7/11/2026 21:48:45", "Team 4", "24) The moon", "Assassin classroom", "https://drive.google.com/open?id=1PwLN8Wo1TmL6LA4zxstVu9XMAPDuqevu", "IMG_1315 - Justin Chang.png"],
  ["7/11/2026 21:49:22", "Team 1", "8) Character falling into water/underwater", "Naruto shippuden", "https://drive.google.com/open?id=1w7aqfreaCSIf8D4o5NxYb7CEb8fNj9YM", "IMG_1299 - Matthew Tang.png"],
  ["7/11/2026 21:49:29", "Team 3", "24) The moon", "Black butler", "https://drive.google.com/open?id=13i35RawgPcCjgCJogyL8dS3qsOQBFHKq", "IMG_6230 - Emily Gao.png"],
  ["7/11/2026 21:49:44", "Team 1", "1) An anime that deserves more attention (show title card)", "Ranking of kings", "https://drive.google.com/open?id=1O2MTxCfukI_fe--8PoZrkiauD1hS3IHU", "Screenshot_20260711_214914_YouTube - Kevin C.jpg"],
  ["7/11/2026 21:49:55", "Team 1", "11) Character wearing a scarf", "Jjk ", "https://drive.google.com/open?id=1RyAurLbKHRd-yjJLpH6TLKbZNjhlDxyo", "IMG_3429 - Matt White.png"],
  ["7/11/2026 21:50:37", "Team 2", "3) At least 3 birds flying", "Hunter X hunter season 1", "https://drive.google.com/open?id=1zfDCyIF86PJkHUAvyIva5DtRXHc-rI-s", "IMG_6385 - Ethan Cope.png"],
  ["7/11/2026 21:50:50", "Team 1", "7) Character doing a dance", "Mashle", "https://drive.google.com/open?id=1WlENhTirR7NUbKukFlqFD992Zwy0HX6i", "IMG_1300 - Matthew Tang.png"],
  ["7/11/2026 21:51:09", "Team 1", "19) Gun", "Angel beats", "https://drive.google.com/open?id=1fD8huUcC7MAhKBLDKuJqHtZ5FFMhJUkL", ""],
  ["7/11/2026 21:51:10", "Team 3", "9) Character in a school classroom", "Classroom of the elite", "https://drive.google.com/open?id=1pWCZac6K8hd0IMMmZJkU400XVRAXlIwj", "IMG_6231 - Emily Gao.png"],
  ["7/11/2026 21:51:22", "Team 3", "13) Chess board/chess piece", "No Game no Life", "https://drive.google.com/open?id=1CZdgma3QAJjohxBDEjRgSZJXKM1lXww7", "IMG_8047 - Jonathan Tong.jpeg"],
  ["7/11/2026 21:51:32", "Team 4", "7) Character doing a dance", "Free!", "https://drive.google.com/open?id=1daKH79Gu5fFylhXmPriOtXFAhwig0t9A", "IMG_7489 - Joshua Chan.png"],
  ["7/11/2026 21:51:56", "Team 1", "19) Gun", "Black lagoon", "https://drive.google.com/open?id=1cHAkdJ9OquaNWMEJ_pFOkFJ-bb88IjFR", "IMG_3431 - Matt White.png"],
  ["7/11/2026 21:51:58", "Team 1", "25) Water bottle", "Yowamushi pedal", "https://drive.google.com/open?id=1ggGK8nRdi_73asXOUPjdIgBTY0JZxHFw", "IMG_1301 - Matthew Tang.jpeg"],
  ["7/11/2026 21:52:29", "Team 1", "18) Grayscale frame", "Toaru no kagaku railgun", "https://drive.google.com/open?id=19ocnNgXXVfF7kRx7DI2j2J7aP4T0zm-I", "Screenshot_20260711_215150_YouTube - Kevin C.jpg"],
  ["7/11/2026 21:52:30", "Team 4", "12) Character with ice powers using said powers", "Hero Academia", "https://drive.google.com/open?id=1vdxqKoMg7W4MqyXtRFk6pENAmSiLDGgH", "IMG_1316 - Justin Chang.png"],
  ["7/11/2026 21:52:59", "Team 3", "14) Chibi-styled character (stylized/exaggerated)", "Hitman Reborn", "https://drive.google.com/open?id=12s0XB_Ic3CsiSVjPSPafOPb1c0FQUwKy", "Screenshot_20260711_215208_Chrome - Peter.jpg"],
  ["7/11/2026 21:53:04", "Team 3", "12) Character with ice powers using said powers", "My Hero Academia", "https://drive.google.com/open?id=1ASBmyjZpRkUrS7-2T3eyNNY25q-HG-lN", "IMG_4517 - Nathan Yee.png"],
  ["7/11/2026 21:53:30", "Team 4", "3) At least 3 birds flying", "Haikyuu", "https://drive.google.com/open?id=1OHskKNUpQXmT4xtfbTsTdOTI9I89Kveu", "IMG_6751 - Vinx Chen.jpeg"],
  ["7/11/2026 21:53:37", "Team 2", "8) Character falling into water/underwater", "Free!", "https://drive.google.com/open?id=1tGkuvGpbAThB1P8zDVoyUQ-JPsRBX9EY", "Screenshot_20260711_215301_Chrome - Bryan Song.jpg"],
  ["7/11/2026 21:54:14", "Team 3", "10) Character reaching/pointing upward", "Apothecary diaries", "https://drive.google.com/open?id=1r6IsaA2o4gPldkgVcF1Vm5ho7chBaZeE", "IMG_6232 - Emily Gao.png"],
  ["7/11/2026 21:54:24", "Team 2", "2) At least 2 characters in the sky/airborne/falling", "Jjk", "https://drive.google.com/open?id=1Ie6hih2eML2JMKJNbcMAZQWlIoMCErOz", "Screenshot_20260711-215359 - Cameron Hui.png"],
  ["7/11/2026 21:54:37", "Team 1", "9) Character in a school classroom", "Classroom of the Elite", "https://drive.google.com/open?id=14Ju6GOlO_0TIA4jOwuCEe32PdNY9I5Tc", "IMG_1302 - Matthew Tang.png"],
  ["7/11/2026 21:54:45", "Team 3", "15) Electricity sparks", "Pokemon", "https://drive.google.com/open?id=17nJlrJReIt8w2dG81QggU3UwxF_VjTwM", "Screenshot_20260711_215410_Chrome - Peter.jpg"],
  ["7/11/2026 21:55:01", "Team 3", "11) Character wearing a scarf", "Attack on Titan", "https://drive.google.com/open?id=1x8pkOc6W43FH2CHofRILV5XiuyLpGM_7", "IMG_8048 - Jonathan Tong.png"],
  ["7/11/2026 21:55:08", "Team 2", "9) Character in a school classroom", "Classroom of the elite \n", "https://drive.google.com/open?id=1XvkUezdvqG6kjTjpJ3MSemWidkwngQnh", "IMG_6386 - Ethan Cope.png"],
  ["7/11/2026 21:55:08", "Team 1", "23) Sunglasses", "Durarara", "https://drive.google.com/open?id=1VaEAevsc-VnoTRyTGC250yvZeLLPyUKl", "Screenshot_20260711_215417_YouTube - Kevin C.jpg"],
  ["7/11/2026 21:55:12", "Team 1", "12) Character with ice powers using said powers", "MHA", "https://drive.google.com/open?id=1e8kDtUGQw23Cn3iKCi5QtvLzhoAC9_jy", "IMG_1303 - Matthew Tang.jpeg"],
  ["7/11/2026 21:55:44", "Team 2", "10) Character reaching/pointing upward", "Sao", "https://drive.google.com/open?id=1hRWq1r6cdaPxfp3b4bUNNAIlskiJ8jhU", "Screenshot_20260711-215523 - Cameron Hui.png"],
  ["7/11/2026 21:56:13", "Team 4", "3) At least 3 birds flying", "haikyuu", "https://drive.google.com/open?id=1_qyEilWcMz6qJaaJCWdk_Mp2Y7cfY1z0", "IMG_6752 - Vinx Chen.jpeg"],
  ["7/11/2026 21:56:55", "Team 3", "16) Fireworks", "why Raeliana Went to the Dukes Mansion", "https://drive.google.com/open?id=1KIpp5aRE43aJzbOfeQ3m80vrMPWVS_na", "IMG_4518 - Nathan Yee.png"],
  ["7/11/2026 21:56:56", "Team 4", "1) An anime that deserves more attention (show title card)", "Danshi Koukousei no Nichijou", "https://drive.google.com/open?id=1O4ZFMBSYCducq0dGS_bLZf9463zDzygh", "IMG_7491 - Joshua Chan.png"],
  ["7/11/2026 21:57:00", "Team 3", "4) At least 5 distinct hair colors", "Kuroko no Basket", "https://drive.google.com/open?id=1mRFZqodgM_hmDRVCqvT2YroDI-4K_MyZ", "Screenshot_20260711_215622_Chrome - Peter.jpg"],
  ["7/11/2026 21:57:23", "Team 3", "18) Grayscale frame", "Tokyo Ghoul", "https://drive.google.com/open?id=1HP_XlYPoml3hp086x4EeB15f2EovlXz9", "IMG_8049 - Jonathan Tong.jpeg"],
  ["7/11/2026 21:57:39", "Team 2", "25) Water bottle", "Salaryman's club", "https://drive.google.com/open?id=15FQyTBGil3x4DBGyeePuZ_j8o25HRcBM", "IMG_6387 - Ethan Cope.png"],
  ["7/11/2026 21:57:43", "Team 2", "11) Character wearing a scarf", "Aot", "https://drive.google.com/open?id=1j7_xcHYTOGPKBL4f2U8_caTb10FwqySh", "Screenshot_20260711-215715 - Cameron Hui.png"],
  ["7/11/2026 21:57:49", "Team 3", "17) Glass shatter/pieces of broken glass", "Phi brain puzzle of god", "https://drive.google.com/open?id=1nivWkRl7lDszJEtP_X83Gz3bfLJukTAK", "IMG_6233 - Emily Gao.png"],
  ["7/11/2026 21:58:42", "Team 1", "10) Character reaching/pointing upward", "Jojo", "https://drive.google.com/open?id=1TPN1-lUXRgSF6-nncNt4dD_35HnF-wMA", "Screenshot_20260711_215732_YouTube - Kevin C.jpg"],
  ["7/11/2026 21:58:47", "Team 2", "13) Chess board/chess piece", "No game no life", "https://drive.google.com/open?id=1UqdIgXWkWY7xlVBrBm3n2ZSi78l75VGD", "IMG_6388 - Ethan Cope.png"],
  ["7/11/2026 21:58:54", "Team 1", "21) IRL shot (can have other added elements)", "Fire force", "https://drive.google.com/open?id=10444NcqJYV0MnkkSFYmklsR5Xqom18Uj", "IMG_1304 - Matthew Tang.png"],
  ["7/11/2026 21:59:35", "Team 3", "19) Gun", "Cowboy bepop", "https://drive.google.com/open?id=1vl-XcZcoukAUOhv0lAmTB21C-TIroIow", "Screenshot_20260711_215903_Chrome - Peter.jpg"],
  ["7/11/2026 21:59:36", "Team 4", "18) Grayscale frame", "tokyo ghoul", "https://drive.google.com/open?id=1QT9iSMTHJEkOjg1bzDSvkRIiz5hcZuuQ", "IMG_1317 - Justin Chang.png"],
  ["7/11/2026 21:59:46", "Team 3", "20) Heterochromia", "Windbreaker", "https://drive.google.com/open?id=1yRLBk7c-bb7lBI_w6uTaQf1ZFm_wQc6c", "IMG_6234 - Emily Gao.png"],
  ["7/11/2026 21:59:51", "Team 2", "12) Character with ice powers using said powers", "Mha", "https://drive.google.com/open?id=15cM-AEPsoNdob6jeHnwIO6xadkNGryu9", "Screenshot_20260711-215915 - Cameron Hui.png"],
  ["7/11/2026 21:59:58", "Team 1", "20) Heterochromia", "Code Geass", "https://drive.google.com/open?id=1z2tKiu0JlhUk0DW-jpDym-8EHzQRCl8I", "IMG_1305 - Matthew Tang.jpeg"],
  ["7/11/2026 22:00:07", "Team 4", "20) Heterochromia", "Love, Chunibyo & Other Delusions", "https://drive.google.com/open?id=1TlT5g-zUkWJRQ6ew-U5HQj6zTqJMTXVP", "IMG_6753 - Vinx Chen.jpeg"],
  ["7/11/2026 22:00:50", "Team 1", "22) Music note", "Your Lie in April", "https://drive.google.com/open?id=1oDZSyaQuquNvVFcN-GvA436KKWSU9X6u", "IMG_1307 - Matthew Tang.jpeg"],
  ["7/11/2026 22:00:53", "Team 2", "5) Character blushing", "Kaguya sama love is war ", "https://drive.google.com/open?id=1ZQobYBzhrkFRLH8_qNz1gDAnsGTnkQmI", "IMG_6389 - Ethan Cope.png"],
  ["7/11/2026 22:01:20", "Team 2", "24) The moon", "FMA: brotherhood", "https://drive.google.com/open?id=1mu8gg7SN-bo7mRdwNP6xXQl_hv-ZD2v-", "Screenshot_20260711_220009_YouTube - Bryan Song.jpg"],
  ["7/11/2026 22:01:26", "Team 4", "25) Water bottle", "toradora", "https://drive.google.com/open?id=1eAG5TAXl5IvG5ckV0MS6_5qZ1L8NmxRg", "IMG_1318 - Justin Chang.png"],
  ["7/11/2026 22:01:30", "Team 1", "16) Fireworks", "Fireworks (movie)", "https://drive.google.com/open?id=1TEMEYGBMDzzWLx0mMJq6kW5IdmvEGH5k", "Screenshot_20260711_220103_YouTube - Kevin C.jpg"],
  ["7/11/2026 22:01:35", "Team 1", "15) Electricity sparks", "Pokemon", "https://drive.google.com/open?id=1PV5v3rQDI7BqiUOhryEX8ePgn0jztpOv", "IMG_3434 - Matt White.png"],
  ["7/11/2026 22:02:06", "Team 1", "24) The moon", "Soul Eater", "https://drive.google.com/open?id=1ECSikUdZ8NyXUAQC1_nCnAo92el0nLc_", "IMG_8203 - Phoebe Lam.png"],
  ["7/11/2026 22:02:26", "Team 3", "22) Music note", "Your Lie in April", "https://drive.google.com/open?id=1sCgtQUF635pPSqVuJnkFCvnn9zvZyDC6", "Screenshot_20260711_220141_Chrome - Peter.jpg"],
  ["7/11/2026 22:02:49", "Team 3", "6) Character crying/tears in eyes", "Fairy tail", "https://drive.google.com/open?id=1SqqR-Ua6N9-gO2ZHYDy5oF2DrFpbWF3o", "IMG_6235 - Emily Gao.png"],
  ["7/11/2026 22:02:52", "Team 1", "5) Character blushing", "Fragrant flowers bloom with dignity ", "https://drive.google.com/open?id=1LAtdkiiMIoNrSIgZz53gSGtb725xYXmP", "IMG_1310 - Matthew Tang.jpeg"],
  ["7/11/2026 22:03:19", "Team 4", "5) Character blushing", "Blue Box", "https://drive.google.com/open?id=1uL5PX7zm5laIOZOJY7ZIbuGDmfT3HFmF", "Screenshot_20260711-220205 - Victor Xue.png"],
  ["7/11/2026 22:03:24", "Team 3", "23) Sunglasses", "Jujutsu Kaisen", "https://drive.google.com/open?id=1WawjRl5nvICkUVrqwvb8FFDIrmueHi5D", "IMG_4519 - Nathan Yee.png"],
  ["7/11/2026 22:03:32", "Team 4", "6) Character crying/tears in eyes", "Fairy Tail, Masayume Chasing", "https://drive.google.com/open?id=1FP5agAlIoS6Zy9-9YGqNAL0-LugiUAIy", "IMG_7492 - Joshua Chan.png"],
  ["7/11/2026 22:03:39", "Team 3", "1) An anime that deserves more attention (show title card)", "Rainbow", "https://drive.google.com/open?id=1Sk_0lSyGiR9GvyucLN28yIU8Lnlmd3zU", "Screenshot_20260711_220314_Chrome - Peter.jpg"],
  ["7/11/2026 22:03:45", "Team 2", "18) Grayscale frame", "My happy marriage", "https://drive.google.com/open?id=1_qPs7W5fesjPOGRLiO9c7b-tX5cr77l5", "Screenshot_20260711-220315 - Cameron Hui.png"],
  ["7/11/2026 22:04:06", "Team 4", "8) Character falling into water/underwater", "March comes in like a lion", "https://drive.google.com/open?id=1C6JO1IYnI57lM4dkS6ox4gCWxNo4B040", "Screenshot_20260711-220340 - Victor Xue.png"],
  ["7/11/2026 22:04:30", "Team 2", "20) Heterochromia", "Yu Gi Oh", "https://drive.google.com/open?id=1CRsIFEhCndB3EApnzWE9ePaH_GgbYIws", "Screenshot_20260711_220353_YouTube - Bryan Song.jpg"],
  ["7/11/2026 22:05:00", "Team 2", "23) Sunglasses", "JJK (duplicated above so no credit)", "https://drive.google.com/open?id=1E0Dq2L6owDk4ID4ZR0bBwQvSDRysR07U", "IMG_6390 - Ethan Cope.png"],
  ["7/11/2026 22:05:16", "Team 1", "2) At least 2 characters in the sky/airborne/falling", "Hunter x hunter", "https://drive.google.com/open?id=1_VRvY9TISzPeCuTxf6tT7SI-7FBqYr-7", "IMG_1311 - Matthew Tang.png"],
  ["7/11/2026 22:05:28", "Team 4", "4) At least 5 distinct hair colors", "AKB 48 ", "https://drive.google.com/open?id=1Znu_pNZq0_7rIcO2zLhVeJFMMWNyqAg3", "Screenshot_20260711-220451 - Victor Xue.png"],
  ["7/11/2026 22:05:46", "Team 2", "1) An anime that deserves more attention (show title card)", "Violet evergarden", "https://drive.google.com/open?id=1SxcVtc6dKWjqJSoL4ay_eRj26DSVGDp6", "Screenshot_20260711-220452 - Cameron Hui.png"],
  ["7/11/2026 22:06:09", "Team 3", "21) IRL shot (can have other added elements)", "BOCCHI the Rock", "https://drive.google.com/open?id=1nWSVP-qth475bAV0td3_sk7T0msIkCFZ", "IMG_8051 - Jonathan Tong.png"],
  ["7/11/2026 22:06:13", "Team 2", "22) Music note", "Your Lie in April", "https://drive.google.com/open?id=180uQhHfTbsyjO9idt8lFOkbGZ6tJprzL", "IMG_3787 - Ryan Kee.png"],
  ["7/11/2026 22:06:25", "Team 4", "9) Character in a school classroom", "Classroom of the Elite", "https://drive.google.com/open?id=1Higk8sBbIbxVVMxcz6qwlSZq4ILUNjkz", "Screenshot_20260711-220550 - Victor Xue.png"],
  ["7/11/2026 22:06:35", "Team 4", "10) Character reaching/pointing upward", "frieren", "https://drive.google.com/open?id=1GhFEpzru33eropfVaE0FfeXxABX_dOjQ", "IMG_1319 - Justin Chang.png"],
  ["7/11/2026 22:06:49", "Team 3", "25) Water bottle", "Running with the Wind", "https://drive.google.com/open?id=1x5AGQbIrrXcajoWqq-H6L6V1UApISQ4-", "IMG_4520 - Nathan Yee.png"],
  ["7/11/2026 22:06:51", "Team 2", "19) Gun", "Black Lagoon", "https://drive.google.com/open?id=15rIQA8VQ_MgiWzenkrK6zXbfGt9KOYp_", "IMG_3788 - Ryan Kee.png"],
  ["7/11/2026 22:07:09", "Team 4", "11) Character wearing a scarf", "Erased", "https://drive.google.com/open?id=1Esa4xNWdzpC8bGXu-UbBl6B2shN_MTNW", "Screenshot_20260711-220650 - Victor Xue.png"],
  ["7/11/2026 22:07:26", "Team 2", "7) Character doing a dance", "Blue Box", "https://drive.google.com/open?id=11saXPYMt_DpZPandk8QWimLQv8trcmqg", "IMG_3791 - Ryan Kee.png"],
  ["7/11/2026 22:07:51", "Team 4", "13) Chess board/chess piece", "No game no life ", "https://drive.google.com/open?id=1Y9HneJd4QYItQsYGsx3cQB3pnT95PS8F", "Screenshot_20260711-220728 - Victor Xue.png"],
  ["7/11/2026 22:08:07", "Team 2", "17) Glass shatter/pieces of broken glass", "Tokyo Ghoul", "https://drive.google.com/open?id=1Bfs2eOPcxTXv2YQu4aBF0wXweYii5nyX", "IMG_3792 - Ryan Kee.png"],
  ["7/11/2026 22:08:11", "Team 4", "16) Fireworks", "Should we see it from the side or bottom?", "https://drive.google.com/open?id=1_fmo0qwgynmlxJeT9GehTR696OK2bJP2", "IMG_7494 - Joshua Chan.png"],
  ["7/11/2026 22:08:18", "Team 2", "21) IRL shot (can have other added elements)", "Your name", "https://drive.google.com/open?id=1Qjeva3uCO-zJpcxPrYdSeAfkA_x1Ow5R", "Screenshot_20260711-220753 - Cameron Hui.png"]
];

export let q_descriptions = [
  "An anime that deserves more attention (show title card)",
  "At least 2 characters in the sky/airborne/falling",
  "At least 3 birds flying",
  "At least 5 distinct hair colors",
  "Character blushing",
  "Character crying/tears in eyes",
  "Character doing a dance",
  "Character falling into water/underwater",
  "Character in a school classroom",
    "Reaching for the sky/into a light/upward",
  "Character wearing a scarf",
  "Character with ice powers using said powers",
  "Chess board/chess piece",
  "Chibi-styled character (stylized/exaggerated)",
  "Electricity sparks",
  "Fireworks",
  "Glass shatter/pieces of broken glass",
  "Grayscale frame",
  "Gun",
  "Heterochromia",
  "IRL shot (can have other added elements)",
  "Music note",
  "Sunglasses",
  "The moon",
  "Water bottle"
]


function structureData(data) {
  const TOTAL_TEAMS = 4;
  const TOTAL_QUESTIONS = 25;

  // Initialize a 4-row matrix filled with null
  const teamLists = Array.from({ length: TOTAL_TEAMS }, () => 
    Array(TOTAL_QUESTIONS).fill([null, null])
  );

  // Loop forward: Oldest submissions to Newest submissions
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    const teamString = row[1];       
    const categoryString = row[2];   
    const animeName = row[3];        // Extracting Anime Name (Index 3)
    const fileName = row[5];         // Extracting File Name (Index 5)

    const teamMatch = teamString.match(/\d+/);
    const questionMatch = categoryString.match(/^(\d+)\)/);

    if (teamMatch && questionMatch) {
      const teamIdx = parseInt(teamMatch[0], 10) - 1;       
      const questionIdx = parseInt(questionMatch[1], 10) - 1; 

      if (teamIdx >= 0 && teamIdx < TOTAL_TEAMS && questionIdx >= 0 && questionIdx < TOTAL_QUESTIONS) {
        
        // Overwrites the entire slot with an array containing [file_name, anime_name]
        // Newer submissions naturally overwrite older ones
        teamLists[teamIdx][questionIdx] = [fileName, animeName]; 
      }
    }
  }

  return teamLists;
}

function countEmptySubmissions(structuredMatrix) {
  // Map over each team's list of questions
  return structuredMatrix.map(teamQuestions => {
    // Count how many questions still have null as the file name
    return teamQuestions.reduce((count, currentQuestion) => {
      const [fileName] = currentQuestion;
      return fileName === null ? count + 1 : count;
    }, 0);
  });
}


const formattedData = structureData(rawData);
const emptyCounts = countEmptySubmissions(formattedData);
console.log(emptyCounts)

export default formattedData;