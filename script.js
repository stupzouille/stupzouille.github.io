const DB = {"Animal": ["Ahri", "Alistar", "Aurora", "Elise", "Fizz", "Gnar", "Kindred", "Lillia", "Naafiri", "Nasus", "Neeko", "Nidalee", "Ornn", "Rammus", "Renekton", "Rengar", "Tahm Kench", "Twitch", "Volibear", "Wukong", "Yuumi"], "Arme": {"Arc Arabalète": ["Akshan", "Ashe", "Kindred", "Quinn", "Varus", "Vayne"], "Sceptre": ["Azir", "Aurora", "Fizz", "Janna", "LeBlanc", "Lillia", "Lulu", "Lux", "Nami", "Soraka", "Veigar", "Viktor"], "Hache": ["Darius", "Dr. Mundo", "Draven", "Nasus", "Olaf", "Sion"], "Epee": ["Aatrox", "Ekko", "Fiora", "Garen", "Kayle", "Leona", "Maïtre Yi", "Riven", "Samira", "Tryndamere", "Viego", "Yasuo", "Yone"], "Lance": ["Jarvan IV", "Kalista", "Kled", "Nidalee", "Pantheon", "Rell", "Xin Zhao"], "Arme à feu": ["Caitlyn", "Corki", "Gangplank", "Graves", "Jhin", "Jinx", "Kled", "Lucian", "Miss Fortune", "Samira", "Tristana", "Twitch"], "Bouclier": ["Braum", "Leona", "Pantheon", "Singed"]}, "Effet de Sort": {"Grab": ["Aatrox", "Amumu", "Aurelion Sol", "Blitzcrank", "Darius", "Diana", "Hwei", "K'Santé", "Kled", "Mordekaiser", "Nautilus", "Nilah", "Orianna", "Pyke", "Renata Glasc", "Singed", "Skarner", "Swain", "Thresh", "Zac"], "Silence": ["Blitzcrank", "Cho'Gath", "Fiddlesticks", "Garen", "Malzahar", "Soraka"], "Charme": ["Ahri", "Evelynn", "Rakan", "Séraphine"], "Provocation": ["Galio", "Rammus", "Renata Glasc", "Shen"], "Fear": ["Briar", "Darius", "Fiddlesticks", "Hecarim", "Hwei", "Nocturne", "Shaco", "Urgot", "Vex", "Warwick"], "Stun": ["Amumu", "Anivia", "Annie", "Aphelios", "Ashe", "Aurelion Sol", "Bard", "Brand", "Braum", "Briar", "Caitlyn", "Cassiopeia", "Ekko", "Elise", "Fiora", "Gnar", "Heimerdinger", "Hwei", "Irelia", "Ivern", "Jax", "Jhin", "Jinx", "Karma", "Kennen", "LeBlanc", "Leona", "Lillia", "Lissandra", "Lux", "Malzahar", "Maokai", "Morgana", "Nautilus", "Neeko", "Nunu et Willump", "Pantheon", "Poppy", "Pyke", "Qiyana", "Rell", "Renata Glasc", "Renekton", "Rengar", "Riven", "Ryze", "Senna", "Singed", "Skarner", "Sona", "Soraka", "Séraphine", "Sion", "Tahm Kench", "Taliyah", "Taric", "Twisted Fate", "Udyr", "Varus", "Vayne", "Veigar", "Veigo", "Viktor", "Volibear", "Warwick", "Xayah", "Xerath", "Zilean", "Zoé", "Zyra"], "Bump": ["Aatrox", "Alistar", "Azir", "Bel'Veth", "Blitzcrank", "Braum", "Briar", "Camille", "Cho'Gath", "Draven", "Fizz", "Galio", "Gnar", "Gragas", "Hecarim", "Ivern", "Janna", "Jarvan IV", "Jayce", "K'Santé", "Kalista", "Kayn", "Kled", "Lee Sin", "Lulu", "Malphite", "Maokai", "Milio", "Nami", "Nautilus", "Neeko", "Nunu et Willump", "Ornn", "Poppy", "Qiyana", "Quinn", "Rakan", "Rek'Sai", "Rell", "Riven", "Sejuani", "Shyvana", "Sion", "Sylas", "Syndra", "Tahm Kench", "Taliyah", "Trundle", "Urgot", "Vel'Koz", "Vi", "Wukong", "Xin Zhao", "Yasuo", "Yone", "Zac", "Ziggs", "Zyra"]}, "Changement Forme": ["Aatrox", "Cho'Gath", "Dr. Mundo", "Elise", "Gnar", "Jayce", "Kayle", "Kayn", "Kled", "Lulu", "Nasus", "Neeko", "Nidalee", "Quinn", "Rell", "Shyvana", "Swain", "Sylas", "Viego", "Vladimir", "Volibear"], "Clone": ["Fiddlesticks", "LeBlanc", "Neeko", "Shaco", "Wukong", "Zed"], "Couvre Chef": ["Annie", "Ashe", "Aurora", "Caitlyn", "Cassiopeia", "Corki", "Draven", "Gangplank", "Gnar", "Kled", "Lulu", "Miss Fortune", "Olaf", "Shaco", "Tahm Kench", "Teemo", "Twisted Fate", "Veigar"], "Déplacement": {"Teleporte": ["Ekko", "Ezreal", "Kassadin", "Katarina", "Lissandra", "Pantheon", "Ryze", "Shen", "Tahm Kench", "Twisted Fate", "Zed", "Zoé"], "Vol": ["Aatrox", "Akshan", "Anivia", "Aurelion Sol", "Bel'Veth", "Corki", "Kayle", "Malzahar", "Nami", "Nocturne", "Syndra", "Séraphine", "Vel'Koz", "Xerath", "Yuumi", "Zilean"], "Saut": ["Aurora", "Fizz", "Galio", "Gnar", "Jarvan IV", "Jax", "Kha'Zix", "Rell", "Rengar", "Talon", "Tristana", "Volibear", "Warwick", "Xayah", "Zac", "Ziggs"], "Dash": ["Aatrox", "Ahri", "Akali", "Akshan", "Alistar", "Aurora", "Azir", "Bel'Veth", "Braum", "Briar", "Caitlyn", "Camille", "Corki", "Diana", "Ekko", "Evelynn", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gragas", "Graves", "Gwen", "Hecarim", "Irelia", "Jarvan IV", "K'Santé", "Kai'Sa", "Kalista", "Kayn", "Kindred", "Kled", "LeBlanc", "Lee Sin", "Lucian", "Malphite", "Naafiri", "Nidalee", "Nilah", "Ornn", "Poppy", "Pyke", "Qiyana", "Rakan", "Rell", "Renekton", "Riven", "Samira", "Sejuani", "Shaco", "Shen", "Shyvana", "Sylas", "Tryndamere", "Urgot", "Vayne", "Vi", "Viego", "Wukong", "Yasuo", "Yone"]}, "Genere": ["Annie", "Aphelios", "Azir", "Bel'Veth", "Elise", "Heimerdinger", "Illaoi", "Ivern", "Kindred", "LeBlanc", "Malzahar", "Maokai", "Naafiri", "Neeko", "Shaco", "Wukong", "Yorick", "Zyra"], "Interaction Terrain": ["Akshan", "Anivia", "Azir", "Bard", "Camille", "Illaoi", "Janna", "Kayn", "Nautilus", "Neeko", "Ornn", "Rek'Sai", "Skarner", "Taliyah", "Trundle"], "Invisibilite": ["Akali", "Akshan", "Aurora", "Evelynn", "Kai'Sa", "Kha'Zix", "LeBlanc", "Neeko", "Pyke", "Rengar", "Senna", "Shaco", "Teemo", "Wukong"], "Prestige Skin": ["Aatrox", "Ahri", "Akali", "Brand", "Caitlyn", "Camille", "Diana", "Ekko", "Evelynn", "Ezreal", "Fiora", "Fizz", "Garen", "Irelia", "Janna", "Jax", "Jayce", "Jinx", "K'Santé", "Kai'Sa", "Katarina", "Kayle", "Kayn", "Kindred", "LeBlanc", "Lee Sin", "Leona", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Maître Yi", "Miss Fortune", "Morgana", "Nami", "Neeko", "Pantheon", "Pyke", "Qiyana", "Rakan", "Renata Glasc", "Riven", "Senna", "Sett", "Shaco", "Sivir", "Sona", "Soraka", "Sylas", "Syndra", "Séraphine", "Talon", "Teemo", "Thresh", "Vayne", "Volibear", "Warwick", "Xayah", "Yasuo", "Yone", "Yuumi", "Zed", "Zeri", "Zoé", "Zyra"], "Soin": ["Bard", "Kayle", "Kindred", "Milio", "Nami", "Nidalee", "Rakan", "Sejuani", "Sona", "Soraka", "Séraphine", "Taric", "Yuumi"], "Stack": ["Aurelion Sol", "Cho'Gath", "Draven", "Kindred", "Nasus", "Senna", "Smolder", "Thresh", "Veigar"], "Ultimate Finish": ["Akali", "Akshan", "Aurelion Sol", "Caitlyn", "Cho'Gath", "Darius", "Draven", "Evelynn", "Ezreal", "Garen", "Graves", "Jinx", "Kayn", "Lux", "Pyke", "Riven", "smolder", "Syndra", "Tristana", "Urgot", "Veigar"], "Classe": {"Assassins": ["Ahri", "Akali", "Aurora", "Ekko", "Evelynn", "Fizz", "Irelia", "Kassadin", "Katarina", "Kha'Zix", "Kindred", "LeBlanc", "Lee Sin", "Malzahar", "Maître Yi", "Naafiri", "Nidalee", "Nocturne", "Pantheon", "Pyke", "Qiyana", "Rengar", "Shaco", "Talon", "Teemo", "Twisted Fate", "Vayne", "Viego", "Xin Zhao", "Yone", "Zed"], "Combattant": ["Aatrox", "Blitzcrank", "Briar", "Camille", "Cho'Gath", "Darius", "Diana", "Dr. Mundo", "Ekko", "Fiora", "Fizz", "Gangplank", "Garen", "Gnar", "Gragas", "Gwen", "Hecarim", "Illaoi", "Irelia", "Jarvan IV", "Jax", "Jayce", "Kayle", "Kled", "Lee Sin", "Lillia", "Malphite", "Mordekaiser", "Nasus", "Nautilus", "Nilah", "Olaf", "Pantheon", "Poppy", "Qiyana", "Rek'Sai", "Renekton", "Rengar", "Riven", "Rumble", "Sett", "Shyvana", "Singed", "Sion", "Skarner", "Sylas", "Trundle", "Tryndamere", "Udyr", "Urgot", "Vi", "Viego", "Vladimir", "Volibear", "Warwick", "Wukong", "Xin Zhao", "Yasuo", "Yone", "Yorick", "Zac", "Zed"], "Mage": ["Ahri", "Anivia", "Annie", "Aurelion Sol", "Aurora", "Azir", "Brand", "Cassiopeia", "Cho'Gath", "Diana", "Elise", "Ezreal", "Fiddlesticks", "Gragas", "Gwen", "Heimerdinger", "Hwei", "Karma", "Karthus", "Kassadin", "Katarina", "Kennen", "LeBlanc", "Lillia", "Lissandra", "Lux", "Malzahar", "Morgana", "Neeko", "Orianna", "Rumble", "Ryze", "Séraphine", "Swain", "Sylas", "Syndra", "Taliyah", "Twisted Fate", "Varus", "Veigar", "Vel'Koz", "Vex", "Viktor", "Vladimir", "Xerath", "Ziggs", "Zilean", "Zoe", "Zyra"], "Tireur": ["Aphelios", "Ashe", "Azir", "Caitlyn", "Corki", "Draven", "Ezreal", "Graves", "Jhin", "Jinx", "Kai'Sa", "Kalista", "Kindred", "Kog'Maw", "Lucian", "Miss Fortune", "Quinn", "Samira", "Senna", "Sivir", "Smolder", "Teemo", "Tristana", "Twitch", "Urgot", "Varus", "Vayne", "Xayah", "Zeri"], "Soutien": ["Anivia", "Bard", "Braum", "Janna", "Karma", "Kayle", "Lulu", "Lux", "Milio", "Morgana", "Nami", "Nidalee", "Pyke", "Rakan", "Rakan", "Rell", "Renata Glasc", "Senna", "Séraphine", "Sona", "Soraka", "Tahm Kench", "Taric", "Thresh", "Vex", "Yuumi", "Zilean", "Zyra"], "Tank": ["Alistar", "Amumu", "Blitzcrank", "Braum", "Cho'Gath", "Darius", "Galio", "illaoi", "Jarvan IV", "Leona", "Malphite", "Maokai", "Nautilus", "Nunu & Willump", "Ornn", "Poppy", "Rammus", "Rell", "Sejuani", "Shen", "Singed", "Tahm Kench", "Volibear", "Zac"]}, "Skin": {"DRX": ["Aatrox", "Akali", "Ashe", "Caitlyn", "Kindred", "Maokai"], "Esport": ["Aatrox", "Akali", "Alistar", "Aphelios", "Ashe", "Azir", "Bard", "Caitlyn", "Camille", "Corki", "Dr. Mundo", "Ekko", "Elise", "Ezreal", "Fiora", "Gangplank", "Gragas", "Graves", "Janna", "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "Kai'Sa", "Kalista", "Karthus", "Kennen", "Kindred", "LeBlanc", "Lee Sin", "Leona", "Malphite", "Maokai", "Nami", "Nidalee", "Nunu & Willump", "Olaf", "Orianna", "Rakan", "Renekton", "Rengar", "Ryze", "Shen", "Singed", "Syndra", "Taliyah", "Talon", "Thresh", "Vayne", "Viego", "Xayah", "Yuumi", "Zac", "Zoé", "Zyra"], "Héros de guerre": ["Aatrox", "Anivia", "Blitzcrank", "Elise", "Graves", "Janna", "Jarvan IV", "Kog'Maw", "Lucian", "Maokai", "Morgana", "Orianna", "Sejuani", "Sivir", "Sona", "Tryndamere"], "Lune de Sang": ["Aatrox", "Akali", "Diana", "Elise", "Evelynn", "Fiddlesticks", "Jhin", "Kalista", "Katarina", "Kennen", "Maître Yi", "Pyke", "Shen", "Sivir", "Talon", "Thresh", "Tryndamere", "Twisted Fate", "Yasuo", "Zed", "Zilean", "Zyra"], "Mecha": ["Aatrox", "Aurelion Sol", "Kha'Zix", "Malphite", "Rengar", "Sion"], "Odyssée": ["Aatrox", "Jinx", "Karma", "Kayn", "Kha'Zix", "Malphite", "Sivir", "Sona", "Twisted Fate", "Yasuo", "Ziggs"], "Primordien": ["Aatrox", "Bel'Veth", "Briar", "Rek'Sai"], "Academie": ["Ahri", "Darius", "Ekko", "Vladimir"], "Arcade": ["Ahri", "Caitlyn", "Corki", "Ezreal", "Hecarim", "Kai'Sa", "Miss Fortune", "Riven", "Sona"], "Arcane": ["Ahri", "Camille", "Hecarim", "Lucian", "Rakan", "Ryze", "Tahm Kench", "Xayah", "Xerath"], "Fleur Spirituelle": ["Ahri", "Aphelios", "Cassiopeia", "Darius", "Evelynn", "Kindred", "Lillia", "Maître Yi", "Riven", "Sett", "Soraka", "Syndra", "Teemo", "Thresh", "Tristana", "Vayne", "Yasuo", "Yone", "Yorick"], "Gardien/Terreur des Étoiles": ["Ahri", "Akali", "Ekko", "Ezreal", "Fiddlesticks", "Janna", "Jinx", "Kai'Sa", "Lulu", "Lux", "Miss Fortune", "Morgana", "Neeko", "Nilah", "Orianna", "Poppy", "Quinn", "Rakan", "Rell", "Senna", "Sona", "Soraka", "Syndra", "Séraphine", "Taliyah", "Xayah", "Zoé"], "K/DA": ["Ahri", "Akali", "Evelynn", "Séraphine"], "Lune de neige": ["Ahri", "Caitlyn", "Illaoi", "Kayn", "Morgana", "Varus"], "Skin de l'assemblée": ["Ahri", "Akali", "Ashe", "Camille", "Cassiopeia", "Elise", "Evelynn", "LeBlanc", "Lissandra", "Morgana", "Nami", "Nilah", "Syndra", "Zyra"], "Sylvestre": ["Ahri", "Azir", "Bard", "Gnar", "Hecarim", "Karthus", "LeBlanc", "Ornn", "Rakan", "Rek'Sai", "Veigar", "Wukong", "Xayah"], "Cauchemar Criminel": ["Akali", "Braum", "Darius", "Graves", "Jinx", "Miss Fortune", "Shaco", "Twisted Fate", "Twitch", "Zyra"], "Chasseur de Têtes": ["Akali", "Caitlyn", "Maître Yi", "Nidalee", "Rengar"], "Empyréen": ["Akali", "Brand", "Jax", "Jhin", "K'Santé", "Kayle", "Lux", "Malzahar", "Nocturne", "Pyke", "Varus", "Vex", "Zac", "Zed"], "Football": ["Akali", "Alistar", "Blitzcrank", "Ezreal", "Gragas", "Katarina", "Lee Sin", "Lucian", "Maokai", "Rammus", "Twisted Fate"], "Infernal": ["Akali", "Alistar", "Amumu", "Ashe", "Diana", "Galio", "Karma", "Karthus", "Kennen", "Mordekaiser", "Nasus", "Olaf", "Shen", "Varus", "Vel'Koz"], "PROJET": ["Akali", "Ashe", "Ekko", "Fiora", "Gangplank", "Irelia", "Jax", "Jhin", "Jinx", "Katarina", "Leona", "Lucian", "Maître Yi", "Mordekaiser", "Naafiri", "Pyke", "Renekton", "Sejuani", "Senna", "Sylas", "Varus", "Vayne", "Vi", "Warwick", "Yasuo", "Zed"], "True Damage": ["Akali", "Ekko", "Qiyana", "Senna", "Yasuo"], "Rose de Cristal": ["Akshan", "Janna", "Swain", "Zyra"], "Conquérant": ["Alistar", "Jax", "Karma", "Nautilus", "Varus"], "Glaces Noires": ["Alistar", "Anivia", "Rek'Sai", "Renekton", "Sion", "Vel'Koz"], "Hextech": ["Alistar", "Amumu", "Anivia", "Annie", "Galio", "Janna", "Jarvan IV", "Kassadin", "Kog'Maw", "Malzahar", "Nocturne", "Poppy", "Rammus", "Renekton", "Sejuani", "Singed", "Sion", "Swain", "Tristana", "Ziggs"], "Maraudeur": ["Alistar", "Ashe", "Kalista", "Kled", "Olaf", "Warwick", "Xin Zhao"], "Métier": ["Alistar", "Azir", "Dr. Mundo", "Draven", "Fizz", "Gangplank", "Gragas", "Heimerdinger", "Irelia", "Janna", "Nidalee", "Olaf", "Sion", "Thresh", "Tristana", "Trundle", "Udyr"], "SKT T1": ["Alistar", "Azir", "Ekko", "Elise", "Jax", "Jhin", "Kalista", "Lee Sin", "Nami", "Olaf", "Renekton", "Ryze", "Syndra", "Vayne", "Zac", "Zyra"], "Halloween": ["Amumu", "Annie", "Blitzcrank", "Dr. Mundo", "Ekko", "Fiddlesticks", "Gangplank", "Hecarim", "Karthus", "Kassadin", "Katarina", "Kled", "LeBlanc", "Lulu", "Maokai", "Nocturne", "Tryndamere", "Twisted Fate", "Urgot", "Vayne", "Vladimir", "Zyra"], "Porcelaine": ["Amumu", "Aurelion Sol", "Darius", "Ezreal", "Graves", "Irelia", "Kindred", "Lissandra", "Lux", "Miss Fortune", "Morgana"], "Cosmique": ["Anivia", "Ashe", "Bel'Veth", "Hecarim", "Illaoi", "Kassadin", "Lulu", "Lux", "Maître Yi", "Nami", "Nautilus", "Nidalee", "Nunu & Willump", "Rakan", "Sion", "Skarner", "Varus", "Vladimir", "Xayah", "Xin Zhao"], "Phénix": ["Anivia", "Quinn", "Séraphine", "Xayah"], "Sorcière": ["Anivia", "Cassiopeia", "Elise", "Fiora", "Janna", "LeBlanc", "Miss Fortune", "Morgana", "Nami", "Neeko", "Nidalee", "Poppy", "Senna", "Syndra", "Tristana", "Yuumi"], "Café Chouchous": ["Annie", "Bard", "Gwen", "Jinx", "Lulu", "Poppy", "Rumble", "Sivir", "Soraka", "Vladimir"], "Intergalactique": ["Annie", "Elise", "Fizz", "Gnar", "Kindred", "Nidalee", "Rumble", "Shyvana"], "Nuit d'éffroi": ["Annie", "Draven", "Nautilus", "Nunu & Willump", "Pyke", "Renata Glasc", "Shaco", "Trundle", "Urgot", "Veigar", "Zeri"], "Saint Valentin": ["Annie", "Ashe", "Fiora", "Jinx", "Lucian", "Orianna", "Quinn", "Rakan", "Sona", "Varus", "Vayne", "Vi", "Xayah", "Yuumi"], "Élu de l'hiver": ["Annie", "Camille", "Diana", "Hecarim", "Hwei", "Lucian", "Senna", "Shaco", "Swain", "Sylas", "Thresh", "Warwick", "Zilean", "Zoé"], "EDG": ["Aphelios", "Graves", "Viego", "Yuumi", "Zoé"], "Hearthsteel": ["Aphelios", "Ezreal", "K'Santé", "Kayn", "Sett", "Yone"], "Héraut de la nuit": ["Aphelios", "Jarvan IV", "Kayn", "Lee Sin", "Lillia", "Nasus", "Soraka", "Tryndamere", "Vladimir", "Yasuo"], "Chant de L'océan": ["Ashe", "Nidalee", "Séraphine", "Yone", "Zeri"], "Dracomanciens": ["Ashe", "Aurelion Sol", "Fiora", "Kai'Sa", "Karma", "Kassadin", "Lee Sin", "Rakan", "Sett", "Thresh", "Vayne", "Volibear", "Yasuo"], "Lunaire": ["Ashe", "Caitlyn", "Diana", "Kha'Zix", "Lux", "Malphite", "Morgana", "Nasus", "Qiyana", "Sylas", "Thresh", "Warwick"], "Skin Championnat": ["Ashe", "Azir", "Jarvan IV", "Kalista", "Kha'Zix", "LeBlanc", "Renekton", "Riven", "Ryze", "Shyvana", "Thresh", "Viego", "Zed"], "Skin de l'ouest": ["Ashe", "Darius", "Evelynn", "Gragas", "Hecarim", "Irelia", "Jhin", "Katarina", "Leona", "Lucian", "Mordekaiser", "Rell", "Samira", "Senna", "Sion", "Tahm Kench", "Talon", "Thresh", "Twisted Fate", "Twitch", "Urgot", "Varus", "Viktor", "Yasuo", "Yone"], "Guerrier D'encre": ["Aurelion Sol", "Kai'Sa", "Maître Yi", "Udyr", "Volibear", "Yasuo", "Yone"], "Anima Squad": ["Aurora", "Briar", "Illaoi", "Jinx", "Leona", "Miss Fortune", "Riven", "Sylas", "Séraphine", "Vayne", "Xayah", "Yasuo", "Yuumi"], "Astronaute": ["Bard", "Corki", "Fizz", "Gnar", "Ivern", "Kennen", "Maokai", "Nautilus", "Poppy", "Rammus", "Teemo", "Veigar", "Xerath"], "Rouleaux de Shan'hai": ["Bard", "Cho'Gath", "Jhin", "Kog'Maw", "Lillia", "Nautilus", "Neeko", "Tahm Kench"], "T1": ["Bard", "Jayce", "Jinx", "Lee Sin", "Orianna"], "Boss de Combat": ["Bel'Veth", "Blitzcrank", "Malzahar", "Qiyana", "Yasuo", "Ziggs"], "Abeilles": ["Blitzcrank", "Heimerdinger", "Kog'Maw", "Malzahar", "Nunu & Willump", "Orianna", "Singed", "Teemo", "Veigar", "Vel'Koz", "Yuumi", "Ziggs"], "Astro Groove": ["Blitzcrank", "Gragas", "Gwen", "Lissandra", "Lulu", "Lux", "Nami", "Nasus", "Nunu & Willump", "Ornn", "Rumble", "Samira", "Taric", "Teemo", "Twisted Fate"], "Pure": ["Brand", "Varus", "Vayne", "Vel'Koz", "Yorick"], "Séducteur": ["Brand", "Draven", "Ezreal", "Galio", "Jayce", "LeBlanc", "Leona", "Malzahar", "Maître Yi", "Vi", "Zed"], "Démons des Villes": ["Brand", "Briar", "Dr. Mundo", "Neeko", "Rengar", "Zyra"], "Folie Sucrée": ["Braum", "Evelynn", "Ziggs", "Zilean"], "Monde des Dragons": ["Braum", "Diana", "Heimerdinger", "Jarvan IV", "Kayle", "Lulu", "Mordekaiser", "Olaf", "Pantheon", "Swain", "Tristana", "Trundle", "Twitch", "Udyr", "Vayne", "Xin Zhao", "Zyra"], "Piscine": ["Braum", "Caitlyn", "Dr. Mundo", "Draven", "Fiora", "Gangplank", "Graves", "Heimerdinger", "Jarvan IV", "Lee Sin", "Leona", "Lulu", "Miss Fortune", "Orianna", "Rek'Sai", "Renekton", "Sett", "Singed", "Syndra", "Taliyah", "Taric", "Zac", "Ziggs", "Zoé"], "Tueur de Dragon": ["Braum", "Diana", "Jarvan IV", "Kayle", "Olaf", "Pantheon", "Trundle", "Twitch", "Vayne", "Xin Zhao"], "Académie du combat": ["Caitlyn", "Ezreal", "Garen", "Graves", "Jayce", "Katarina", "Leona", "Lux", "Wukong", "Yone", "Yuumi"], "Arcane (série)": ["Caitlyn", "Jayce", "Jinx", "Vi"], "Pulsefire": ["Caitlyn", "Ekko", "Ezreal", "Fiora", "Lucian", "Pantheon", "Riven", "Shen", "Thresh", "Twisted Fate"], "Resistant": ["Caitlyn", "Illaoi", "Jayce", "Singed", "Yorick"], "IG": ["Camille", "Fiora", "Kai'Sa", "LeBlanc", "Rakan"], "Alliance brisée": ["Cho'Gath", "Miss Fortune", "Nocturne", "Rakan", "Riven", "Vladimir", "Xayah"], "Proto": ["Cho'Gath", "Kog'Maw", "Nasus", "Skarner", "Urgot", "Vel'Koz", "Viktor", "Xerath", "Zac"], "Pulsar Sombre": ["Cho'Gath", "Jarvan IV", "Jhin", "Karma", "Kha'Zix", "Lissandra", "Lux", "Malphite", "Mordekaiser", "Orianna", "Shaco", "Thresh", "Varus", "Xerath"], "Chats vs Chiens": ["Corki", "Fizz", "Kindred", "Kled", "Maokai", "Nidalee", "Rengar", "Yuumi"], "Fnatic": ["Corki", "Gragas", "Janna", "Jarvan IV", "Karthus"], "URF": ["Corki", "Nami", "Tahm Kench", "Warwick"], "Pyrotechnicien": ["Diana", "Jinx", "Sejuani", "Sett", "Teemo", "Tristana", "Vayne", "Xin Zhao"], "Reine du combat": ["Diana", "Fiora", "Gwen", "Janna", "Katarina", "Miss Fortune", "Qiyana", "Rell"], "Sentinelle": ["Diana", "Graves", "Irelia", "Olaf", "Pyke", "Rengar", "Riven", "Vayne"], "Écailles Célestes": ["Diana", "Ezreal", "Janna", "Kai'Sa", "Lee Sin", "Maître Yi", "Smolder"], "TPA": ["Dr. Mundo", "Ezreal", "Nunu & Willump", "Orianna", "Shen"], "Déchu": ["Draven", "Karma", "Miss Fortune", "Pantheon", "Shyvana"], "La Ilusion": ["Draven", "Gnar", "Nidalee", "Qiyana", "Renata Glasc", "Ziggs"], "Royaume des Mechas": ["Draven", "Garen", "Jax", "Leona", "Sett"], "Rose Fanée": ["Elise", "Syndra", "Talon", "Zeri"], "Combattant spirituel": ["Evelynn", "Gwen", "Jhin", "Lux", "Naafiri", "Pyke", "Samira", "Sett", "Shaco", "Viego"], "Cour Féérique": ["Ezreal", "Fiora", "Kalista", "Katarina", "Lillia", "Lux", "Milio", "Soraka", "Séraphine", "Tristana"], "Psychoguerrier": ["Ezreal", "Kayle", "Maître Yi", "Pyke", "Samira", "Shen", "Sona", "Vi", "Viktor", "Zed"], "SSG": ["Ezreal", "Jarvan IV", "Rakan", "Taliyah", "Xayah"], "Section Oméga": ["Fizz", "Teemo", "Tristana", "Twitch", "Veigar"], "Commando": ["Galio", "Garen", "Jarvan IV", "Lux", "Xin Zhao"], "Mythificateur": ["Galio", "Garen", "Irelia", "Sivir", "Zyra"], "FPX": ["Gangplank", "Lee Sin", "Malphite", "Thresh", "Vayne"], "Royaume en Guerre": ["Garen", "Jarvan IV", "Katarina", "Nidalee", "Xin Zhao"], "Arctique": ["Gragas", "Kennen", "Varus"], "Purificateur": ["Gragas", "Jax", "Karma", "Nautilus", "Quinn", "Sivir"], "Briseur de Monde": ["Hecarim", "Malzahar", "Maokai", "Nasus", "Nautilus", "Sion", "Trundle"], "Dieu Ancien": ["Ivern", "Malphite", "Mordekaiser", "Nocturne", "Warwick"], "Gardien du Sable": ["Janna", "Kha'Zix", "Rammus", "Rengar", "Ryze", "Skarner", "Xerath"], "Full Metal": ["Jayce", "Pantheon", "Rammus"], "DWG": ["Jhin", "Kennen", "Leona", "Nidalee"], "Pentakill": ["Karthus", "Kayle", "Mordekaiser", "Olaf", "Sona", "Viego", "Yorick"], "Voyage Immortel": ["Kayle", "Shyvana", "Sona", "Soraka", "Zed", "Zeri"], "Arcaniste": ["Kog'Maw", "Shaco", "Ziggs", "Zoé"], "Héraut de l'aude": ["Morgana", "Nidalee", "Rakan", "Renekton", "Riven", "Soraka", "Vayne", "Vex", "Yone"], "SSW": ["Rengar", "Singed", "Talon", "Thresh"], "Embuscade Férale": ["Riven", "Sivir", "Talon", "Vi"], "Cendre de Guerre": ["Shen", "Mordekaiser", "Sylas", "Pantheon", "Pyke"]}, "Role": {"Haut": ["Aatrox", "Akali", "Aurora", "Camille", "Cassiopeia", "Cho'Gath", "Darius", "Dr. Mundo", "Fiora", "Gangplank", "Garen", "Gnar", "Gragas", "Gwen", "Heimerdinger", "Illaoi", "Irelia", "Jax", "Jayce", "Kayle", "Kennen", "Kled", "K'Santé", "Malphite", "Mordekaiser", "Nasus", "Olaf", "Ornn", "Pantheon", "Poppy", "Quinn", "Renekton", "Riven", "Rumble", "Ryze", "Sett", "Shen", "Singed", "Sion", "Skarner", "Tahm Kench", "Teemo", "Trundle", "Tryndamere", "Twisted Fate", "Urgot", "Vayne", "Vladimir", "Volibear", "Warwick", "Wukong", "Yone", "Yorick", "Zac"], "Milieu": ["Ahri", "Akali", "Akshan", "Anivia", "Annie", "Aurelion Sol", "Aurora", "Azir", "Brand", "Cassiopeia", "Corki", "Diana", "Ekko", "Fizz", "Galio", "Heimerdinger", "Hwei", "Irelia", "Jayce", "Kassadin", "Katarina", "LeBlanc", "Lissandra", "Lux", "Malphite", "Malzahar", "Naafiri", "Neeko", "Orianna", "Qiyana", "Quinn", "Ryze", "Sylas", "Syndra", "Taliyah", "Talon", "Tristana", "Twisted Fate", "Veigar", "Vel'Koz", "Vex", "Viktor", "Vladimir", "Xerath", "Yasuo", "Yone", "Zed", "Ziggs", "Zoé"], "Support": ["Alistar", "Bard", "Blitzcrank", "Brand", "Braum", "Hwei", "Janna", "Karma", "Leona", "Lulu", "Lux", "Maokai", "Milio", "Morgana", "Nami", "Nautilus", "Neeko", "Pantheon", "Poppy", "Pyke", "Rakan", "Rell", "Renata Glasc", "Senna", "Séraphine", "Shen", "Sona", "Soraka", "Swain", "Tahm Kench", "Taric", "Thresh", "Vel'Koz", "Xerath", "Yuumi", "Zilean", "Zyra"], "Jungle": ["Amumu", "Bel'Veth", "Brand", "Briar", "Diana", "Ekko", "Elise", "Evelynn", "Fiddlesticks", "Gragas", "Graves", "Hecarim", "Ivern", "Jarvan IV", "Jax", "Karthus", "Kayn", "Kha'Zix", "Kindred", "Lee Sin", "Lillia", "Maître Yi", "Maokai", "Nidalee", "Nocturne", "Nunu", "Poppy", "Rammus", "Rek'Sai", "Rengar", "Sejuani", "Shaco", "Shyvana", "Skarner", "Sylas", "Taliyah", "Talon", "Trundle", "Udyr", "Vi", "Viego", "Volibear", "Warwick", "Wukong", "Xin Zhao", "Zac"], "Bas": ["Aphelios", "Ashe", "Caitlyn", "Draven", "Ezreal", "Jhin", "Jinx", "Kai'sa", "Kalista", "Kog'Maw", "Lucian", "Miss Fortune", "Nilah", "Samira", "Sivir", "Smolder", "Tristana", "Twitch", "Varus", "Vayne", "Xayah", "Zeri", "Ziggs"]}, "Espèce": {"Darkin": ["Aatrox", "Kayn", "Naafiri", "Varus"], "Vastaya": ["Ahri", "Aurora", "Nami", "Neeko", "Rakan", "Rengar", "Sett", "Wukong", "Xayah"], "Humain": ["Akali", "Akshan", "Annie", "Aphelios", "Ashe", "Brand", "Braum", "Caitlyn", "Camille", "Cassiopeia", "Darius", "Diana", "Dr. Mundo", "Draven", "Ekko", "Elise", "Ezreal", "Fiora", "Gangplank", "Garen", "Gragas", "Graves", "Gwen", "Hwei", "Illaoi", "Irelia", "Ivern", "Jarvan IV", "Jayce", "Jhin", "Jinx", "Kai'sa", "Karma", "Kassadin", "Katarina", "Kayle", "Kayn", "K'Santé", "LeBlanc", "Lee Sin", "Leona", "Lissandra", "Lucian", "Lux", "Maître Yi", "Malzahar", "Miss Fortune", "Milio", "Morgana", "Nidalee", "Nilah", "Nunu", "Olaf", "Pantheon", "Qiyana", "Quinn", "Rell", "Renata Glasc", "Riven", "Ryze", "Samira", "Sejuani", "Senna", "Séraphine", "Sett", "Shen", "Singed", "Sivir", "Sona", "Swain", "Sylas", "Syndra", "Taliyah", "Talon", "Taric", "Tryndamere", "Twisted Fate", "Udyr", "Urgot", "Varus", "Vayne", "Vi", "Viktor", "Vladimir", "Warwick", "Xin Zhao", "Yasuo", "Yone", "Yorick", "Zed", "Zeri", "Zilean", "Zoé"], "Mort-vivant": ["Amumu", "Hecarim", "Kalista", "Karthus", "Senna", "Thresh", "Viego"], "Yordle": ["Amumu", "Corki", "Fizz", "Gnar", "Heimerdinger", "Kennen", "Kled", "Lulu", "Poppy", "Rumble", "Teemo", "Tristana", "Veigar", "Vex", "Ziggs"], "Dieu": ["Anivia", "Janna", "Kindred", "Ornn", "Volibear"], "Esprit": ["Anivia", "Evelynn", "Fiddlesticks", "Janna", "Kindred", "Lillia", "Maokai", "Nocturne", "Ornn", "Shaco", "Tahm Kench", "Volibear"], "Né magique": ["Annie", "Ezreal", "Hwei", "Lux", "Milio", "Qiyana", "Rell", "Séraphine", "Sona", "Syndra", "Taliyah", "Twisted Fate", "Yasuo", "Zeri", "Zilean"], "Spiritualiste": ["Aphelios", "Illaoi", "Irelia", "Jhin", "Karma", "Lee Sin", "Maître Yi", "Nidalee", "Shen", "Udyr"], "Né de glace": ["Ashe", "Braum", "Gragas", "Lissandra", "Olaf", "Sejuani", "Trundle"], "Céleste": ["Aurelion Sol", "Bard", "Soraka"], "Dragon": ["Aurelion Sol", "Shyvana", "Smolder"], "Dieu-Guerrier": ["Azir", "Nasus", "Renekton", "Xerath"], "Être du néant": ["Bel'Veth", "Cho'Gath", "Kai'sa", "Kassadin", "Kha'Zix", "Kog'Maw", "Malzahar", "Rek'Sai", "Vel'Koz"], "Golem": ["Blitzcrank", "Briar", "Galio", "Malphite", "Orianna", "Zac"], "Altéré Magiquement": ["Brand", "Cassiopeia", "Elise", "Gwen", "Ivern", "Kayle", "Kayn", "LeBlanc", "Morgana", "Nilah", "Rell", "Ryze", "Shyvana", "Swain", "Sylas", "Tryndamere", "Vladimir", "Yone", "Yorick", "Yuumi", "Zed"], "Cyborg": ["Camille", "Urgot", "Viktor", "Warwick"], "Hôte": ["Diana", "Kayle", "Leona", "Morgana", "Pantheon", "Taric", "Zoé"], "Altéré Chimiquement": ["Dr. Mundo", "Jinx", "Renata Glasc", "Singed", "Twitch", "Urgot", "Warwick"], "Démon": ["Evelynn", "Fiddlesticks", "Nocturne", "Tahm Kench"], "Inconnu": ["Jax", "Rammus", "Zyra"], "Revenant": ["Mordekaiser", "Nautilus", "Pyke", "Sion"]}, "Région": {"Runeterra": ["Aatrox", "Alistar", "Annie", "Aurelion Sol", "Bard", "Brand", "Evelynn", "Fiddlesticks", "Jax", "Kayn", "Kindred", "Nami", "Nocturne", "Ryze", "Shaco", "Tahm Kench", "Varus", "Veigar", "Zilean"], "Shurima": ["Aatrox", "Akshan", "Amumu", "Azir", "Cassiopeia", "Janna", "Jax", "Kai'sa", "Kassadin", "Kayn", "K'Santé", "Malphite", "Malzahar", "Naafiri", "Nasus", "Rammus", "Rek'Sai", "Renekton", "Rengar", "Samira", "Sivir", "Taliyah", "Varus", "Xerath", "Zilean"], "Ionia": ["Ahri", "Akali", "Hwei", "Irelia", "Ivern", "Jhin", "Karma", "Kayn", "Kennen", "Lee Sin", "Lillia", "Maître Yi", "Rakan", "Riven", "Sett", "Shen", "Sona", "Soraka", "Syndra", "Udyr", "Varus", "Wukong", "Xayah", "Xin Zhao", "Yasuo", "Yone", "Zed"], "Freljord": ["Anivia", "Ashe", "Aurora", "Brand", "Braum", "Gnar", "Gragas", "Ivern", "Lissandra", "Nunu", "Olaf", "Ornn", "Sejuani", "Sylas", "Trundle", "Tryndamere", "Udyr", "Volibear"], "Noxus": ["Annie", "Briar", "Cassiopeia", "Darius", "Draven", "Elise", "Karthus", "Katarina", "Kayn", "Kled", "LeBlanc", "Mordekaiser", "Rell", "Riven", "Samira", "Sion", "Smolder", "Swain", "Talon", "Urgot", "Vladimir", "Xin Zhao"], "Targon": ["Aphelios", "Aurelion Sol", "Diana", "Kayle", "Leona", "Morgana", "Pantheon", "Soraka", "Taric", "Zoé"], "Le Néant": ["Bel'Veth", "Cho'Gath", "Kai'sa", "Kassadin", "Kha'Zix", "Kog'Maw", "Malzahar", "Rek'Sai", "Vel'Koz"], "Zaun": ["Blitzcrank", "Dr. Mundo", "Ekko", "Janna", "Jinx", "Renata Glasc", "Séraphine", "Singed", "Twitch", "Urgot", "Vi", "Viktor", "Warwick", "Zac", "Zeri", "Ziggs"], "Piltover": ["Caitlyn", "Camille", "Corki", "Ezreal", "Heimerdinger", "Jayce", "Orianna", "Séraphine", "Singed", "Vi", "Viktor"], "Bandle": ["Corki", "Lulu", "Rumble", "Teemo", "Tristana", "Veigar", "Vex", "Yuumi"], "Îles Obscures": ["Elise", "Gwen", "Hecarim", "Kalista", "Karthus", "Lucian", "Maokai", "Mordekaiser", "Senna", "Thresh", "Veigar", "Vex", "Viego", "Vladimir", "Yorick"], "Demacia": ["Fiora", "Galio", "Garen", "Jarvan IV", "Kayle", "Lucian", "Lux", "Morgana", "Poppy", "Quinn", "Shyvana", "Sona", "Sylas", "Taric", "Vayne", "Xin Zhao"], "Bilgewater": ["Fizz", "Gangplank", "Graves", "Illaoi", "Miss Fortune", "Nami", "Nautilus", "Nilah", "Pyke", "Tahm Kench", "Twisted Fate"], "Camavor": ["Gwen", "Hecarim", "Kalista", "Smolder", "Viego", "Vladimir"], "Ixtal": ["Malphite", "Milio", "Nidalee", "Neeko", "Qiyana", "Rengar", "Skarner", "Zyra"]}}

const allChampions = [{name: "Aatrox", img: "imageschamp/Aatrox.png"}, {name: "Ahri", img: "imageschamp/Ahri.png"}, {name: "Akali", img: "imageschamp/Akali.png"}, {name: "Akshan", img: "imageschamp/Akshan.png"}, {name: "Alistar", img: "imageschamp/Alistar.png"}, {name: "Amumu", img: "imageschamp/Amumu.png"}, {name: "Anivia", img: "imageschamp/Anivia.png"}, {name: "Annie", img: "imageschamp/Annie.png"}, {name: "Aphelios", img: "imageschamp/Aphelios.png"}, {name: "Ashe", img: "imageschamp/Ashe.png"}, {name: "Aurelion Sol", img: "imageschamp/AurelionSol.png"}, {name: "Aurora", img: "imageschamp/Aurora.png"}, {name: "Azir", img: "imageschamp/Azir.png"}, {name: "Bard", img: "imageschamp/Bard.png"}, {name: "Bel'Veth", img: "imageschamp/BelVeth.png"}, {name: "Blitzcrank", img: "imageschamp/Blitzcrank.png"}, {name: "Brand", img: "imageschamp/Brand.png"}, {name: "Braum", img: "imageschamp/Braum.png"}, {name: "Briar", img: "imageschamp/Briar.png"}, {name: "Caitlyn", img: "imageschamp/Caitlyn.png"}, {name: "Camille", img: "imageschamp/Camille.png"}, {name: "Cassiopeia", img: "imageschamp/Cassiopeia.png"}, {name: "Cho'Gath", img: "imageschamp/ChoGath.png"}, {name: "Corki", img: "imageschamp/Corki.png"}, {name: "Darius", img: "imageschamp/Darius.png"}, {name: "Diana", img: "imageschamp/Diana.png"}, {name: "Dr. Mundo", img: "imageschamp/DrMundo.png"}, {name: "Draven", img: "imageschamp/Draven.png"}, {name: "Ekko", img: "imageschamp/Ekko.png"}, {name: "Elise", img: "imageschamp/Elise.png"}, {name: "Evelynn", img: "imageschamp/Evelynn.png"}, {name: "Ezreal", img: "imageschamp/Ezreal.png"}, {name: "Fiddlesticks", img: "imageschamp/Fiddlesticks.png"}, {name: "Fiora", img: "imageschamp/Fiora.png"}, {name: "Fizz", img: "imageschamp/Fizz.png"}, {name: "Galio", img: "imageschamp/Galio.png"}, {name: "Gangplank", img: "imageschamp/Gangplank.png"}, {name: "Garen", img: "imageschamp/Garen.png"}, {name: "Gnar", img: "imageschamp/Gnar.png"}, {name: "Gragas", img: "imageschamp/Gragas.png"}, {name: "Graves", img: "imageschamp/Graves.png"}, {name: "Gwen", img: "imageschamp/Gwen.png"}, {name: "Hecarim", img: "imageschamp/Hecarim.png"}, {name: "Heimerdinger", img: "imageschamp/Heimerdinger.png"}, {name: "Hwei", img: "imageschamp/Hwei.png"}, {name: "Illaoi", img: "imageschamp/Illaoi.png"}, {name: "Irelia", img: "imageschamp/Irelia.png"}, {name: "Ivern", img: "imageschamp/Ivern.png"}, {name: "Janna", img: "imageschamp/Janna.png"}, {name: "Jarvan IV", img: "imageschamp/JarvanIV.png"}, {name: "Jax", img: "imageschamp/Jax.png"}, {name: "Jayce", img: "imageschamp/Jayce.png"}, {name: "Jhin", img: "imageschamp/Jhin.png"}, {name: "Jinx", img: "imageschamp/Jinx.png"}, {name: "Kai'sa", img: "imageschamp/Kaisa.png"}, {name: "Kalista", img: "imageschamp/Kalista.png"}, {name: "Karma", img: "imageschamp/Karma.png"}, {name: "Karthus", img: "imageschamp/Karthus.png"}, {name: "Kassadin", img: "imageschamp/Kassadin.png"}, {name: "Katarina", img: "imageschamp/Katarina.png"}, {name: "Kayle", img: "imageschamp/Kayle.png"}, {name: "Kayn", img: "imageschamp/Kayn.png"}, {name: "Kennen", img: "imageschamp/Kennen.png"}, {name: "Kha'Zix", img: "imageschamp/KhaZix.png"}, {name: "Kindred", img: "imageschamp/Kindred.png"}, {name: "Kled", img: "imageschamp/Kled.png"}, {name: "Kog'Maw", img: "imageschamp/KogMaw.png"}, {name: "K'Santé", img: "imageschamp/KSanté.png"}, {name: "LeBlanc", img: "imageschamp/LeBlanc.png"}, {name: "Lee Sin", img: "imageschamp/LeeSin.png"}, {name: "Leona", img: "imageschamp/Leona.png"}, {name: "Lissandra", img: "imageschamp/Lissandra.png"}, {name: "Lillia", img: "imageschamp/Lillia.png"}, {name: "Lucian", img: "imageschamp/Lucian.png"}, {name: "Lulu", img: "imageschamp/Lulu.png"}, {name: "Lux", img: "imageschamp/Lux.png"}, {name: "Maître Yi", img: "imageschamp/MaitreYi.png"}, {name: "Malphite", img: "imageschamp/Malphite.png"}, {name: "Malzahar", img: "imageschamp/Malzahar.png"}, {name: "Maokai", img: "imageschamp/Maokai.png"}, {name: "Miss Fortune", img: "imageschamp/MissFortune.png"}, {name: "Milio", img: "imageschamp/Milio.png"}, {name: "Mordekaiser", img: "imageschamp/Mordekaiser.png"}, {name: "Morgana", img: "imageschamp/Morgana.png"}, {name: "Naafiri", img: "imageschamp/Naafiri.png"}, {name: "Nami", img: "imageschamp/Nami.png"}, {name: "Nasus", img: "imageschamp/Nasus.png"}, {name: "Nautilus", img: "imageschamp/Nautilus.png"}, {name: "Nidalee", img: "imageschamp/Nidalee.png"}, {name: "Nilah", img: "imageschamp/Nilah.png"}, {name: "Neeko", img: "imageschamp/Neeko.png"}, {name: "Nocturne", img: "imageschamp/Nocturne.png"}, {name: "Nunu et Willump", img: "imageschamp/Nunu&Willump.png"}, {name: "Olaf", img: "imageschamp/Olaf.png"}, {name: "Orianna", img: "imageschamp/Orianna.png"}, {name: "Ornn", img: "imageschamp/Ornn.png"}, {name: "Pantheon", img: "imageschamp/Pantheon.png"}, {name: "Poppy", img: "imageschamp/Poppy.png"}, {name: "Pyke", img: "imageschamp/Pyke.png"}, {name: "Qiyana", img: "imageschamp/Qiyana.png"}, {name: "Quinn", img: "imageschamp/Quinn.png"}, {name: "Rakan", img: "imageschamp/Rakan.png"}, {name: "Rammus", img: "imageschamp/Rammus.png"}, {name: "Rek'Sai", img: "imageschamp/RekSai.png"}, {name: "Rell", img: "imageschamp/Rell.png"}, {name: "Renekton", img: "imageschamp/Renekton.png"}, {name: "Renata Glasc", img: "imageschamp/RenataGlasc.png"}, {name: "Rengar", img: "imageschamp/Rengar.png"}, {name: "Riven", img: "imageschamp/Riven.png"}, {name: "Rumble", img: "imageschamp/Rumble.png"}, {name: "Ryze", img: "imageschamp/Ryze.png"}, {name: "Samira", img: "imageschamp/Samira.png"}, {name: "Sejuani", img: "imageschamp/Sejuani.png"}, {name: "Senna", img: "imageschamp/Senna.png"}, {name: "Séraphine", img: "imageschamp/Seraphine.png"}, {name: "Sett", img: "imageschamp/Sett.png"}, {name: "Shaco", img: "imageschamp/Shaco.png"}, {name: "Shen", img: "imageschamp/Shen.png"}, {name: "Shyvana", img: "imageschamp/Shyvana.png"}, {name: "Singed", img: "imageschamp/Singed.png"}, {name: "Sion", img: "imageschamp/Sion.png"}, {name: "Sivir", img: "imageschamp/Sivir.png"}, {name: "Sona", img: "imageschamp/Sona.png"}, {name: "Soraka", img: "imageschamp/Soraka.png"}, {name: "Swain", img: "imageschamp/Swain.png"}, {name: "Sylas", img: "imageschamp/Sylas.png"}, {name: "Syndra", img: "imageschamp/Syndra.png"}, {name: "Tahm Kench", img: "imageschamp/TahmKench.png"}, {name: "Taliyah", img: "imageschamp/Taliyah.png"}, {name: "Talon", img: "imageschamp/Talon.png"}, {name: "Taric", img: "imageschamp/Taric.png"}, {name: "Teemo", img: "imageschamp/Teemo.png"}, {name: "Thresh", img: "imageschamp/Thresh.png"}, {name: "Tristana", img: "imageschamp/Tristana.png"}, {name: "Trundle", img: "imageschamp/Trundle.png"}, {name: "Tryndamere", img: "imageschamp/Tryndamere.png"}, {name: "Twisted Fate", img: "imageschamp/TwistedFate.png"}, {name: "Twitch", img: "imageschamp/Twitch.png"}, {name: "Udyr", img: "imageschamp/Udyr.png"}, {name: "Urgot", img: "imageschamp/Urgot.png"}, {name: "Varus", img: "imageschamp/Varus.png"}, {name: "Vayne", img: "imageschamp/Vayne.png"}, {name: "Veigar", img: "imageschamp/Veigar.png"}, {name: "Vel'Koz", img: "imageschamp/VelKoz.png"}, {name: "Vex", img: "imageschamp/Vex.png"}, {name: "Vi", img: "imageschamp/Vi.png"}, {name: "Viego", img: "imageschamp/Viego.png"}, {name: "Viktor", img: "imageschamp/Viktor.png"}, {name: "Vladimir", img: "imageschamp/Vladimir.png"}, {name: "Volibear", img: "imageschamp/Volibear.png"}, {name: "Warwick", img: "imageschamp/Warwick.png"}, {name: "Wukong", img: "imageschamp/Wukong.png"}, {name: "Xayah", img: "imageschamp/Xayah.png"}, {name: "Xerath", img: "imageschamp/Xerath.png"}, {name: "Yuumi", img: "imageschamp/Yuumi.png"}, {name: "Zac", img: "imageschamp/Zac.png"}, {name: "Zed", img: "imageschamp/Zed.png"}, {name: "Zeri", img: "imageschamp/Zeri.png"}, {name: "Ziggs", img: "imageschamp/Ziggs.png"}, {name: "Zilean", img: "imageschamp/Zilean.png"}, {name: "Zyra", img: "imageschamp/Zyra.png"}];

function categories(DB) {
    return Object.keys(DB);
}

function chooseCat(DB, list) {
    const randomIndex = Math.floor(Math.random() * list.length);
    const selectedCategory = list[randomIndex];

    const categoryKeys = {
        'Skin': 'Skin',
        'Espèce': 'Espèce',
        'Région': 'Région',
        'Effet de Sort': 'Effet de Sort',
        'Classe': 'Classe',
        'Role': 'Role',
        'Déplacement': 'Déplacement',
        'Arme': 'Arme'
    };

    if (categoryKeys[selectedCategory]) {
        const Dico = DB[categoryKeys[selectedCategory]];
        const T = categories(Dico);
        const choice = T[Math.floor(Math.random() * T.length)]; // Sélectionne une catégorie au hasard dans T
        return `${selectedCategory} : ${choice}`; // Formate le résultat
    }

    return selectedCategory; // Retourne la catégorie choisie si ce n'est pas une catégorie spécifique
}

function rawMaker(DB, list, ban) {
    const T = [];
    const usedCategories = new Set(); // Ensemble pour suivre les catégories déjà ajoutées

    while (T.length < 3) { // On veut 3 éléments au total
        const elem = chooseCat(DB, list);

        const n = elem.split(' : ').length;

        if (n > 1) {
            const [category, special] = elem.split(' : ');

            if (!usedCategories.has(category) && !ban.includes(elem)) {
                T.push([elem, DB[category][special]]);
                usedCategories.add(category);
            }
        } else {
            const category = elem.split(' : ')[0];

            if (!usedCategories.has(category) && !ban.includes(elem)) {
                T.push([elem, DB[category]]);
                usedCategories.add(category);
            }
        }
    }

    return T;
}

const categoriesList = categories(DB); // Première utilisation de categoriesList
let Column = rawMaker(DB, categoriesList, []);
let Lign = rawMaker(DB, categoriesList, Column.map(col => col[0]));

function valid(Lign, Column, Final) {
    for (let i = 0; i < 3; i++) {
        const champCommonLign = Lign[i][1];

        for (let j = 0; j < 3; j++) {
            if (Final[i][j] === null) {
                let temp = [];

                const champCommonColumn = Column[j][1];

                temp = champCommonLign.filter(elem => champCommonColumn.includes(elem));

                if (temp.length > 0) {
                    Final[i][j] = temp;
                } else {
                    const ban = Column.map((_, x) => Column[x][0]); // Bannir les lignes actuelles
                    for (const elem of Lign) {
                        ban.push(elem[0]);
                    }
                    Lign[i] = rawMaker(DB, categoriesList, ban)[0]; // Remplace la colonne en question
                    Final[i] = [null, null, null];
                    return valid(Lign, Column, Final); // Recommence la validation avec la nouvelle colonne
                }
            }
        }
    }

    return [Lign, Column, Final];
}

let Final = Array.from({ length: 3 }, () => Array(3).fill(null));

// Exemple d'appel de la fonction valid
const result = valid(Lign, Column, Final);
Lign = result[0];
Column = result[1];
Final = result[2];

document.addEventListener('DOMContentLoaded', () => {
    const gameGrid = document.getElementById('gameGrid');
    const startButton = document.getElementById('startButton');
    const playerDisplay = document.getElementById('currentPlayerDisplay');
    const gridItems = document.querySelectorAll('.grid-item');

    // Lorsque le bouton est cliqué, afficher la grille
    startButton.addEventListener('click', function() {
        gameGrid.style.display = 'grid'; // Affiche la grille
        playerDisplay.style.display = 'flex';
        startButton.style.display = 'none'; // Cache le bouton
        initGame(); // Initie le jeu si nécessaire
    });

    // Gérer les clics sur les cases de la grille
    gridItems.forEach(item => {
        item.addEventListener('click', function() {
            if (!selectionInProgress && currentCellIndex === null) {
                currentCellIndex = item.getAttribute('data-cell');
                if (championsAcceptables[currentCellIndex].includes(currentPlayer)) {
                    item.textContent = currentPlayer; // Afficher X ou O
                    startTurn();
                    playerDisplay.textContent = `Joueur actuel: ${currentPlayer}`;
                }
            }
        });
    });
});

let currentCellIndex = null; // Index de la case actuellement sélectionnée
let currentPlayer = "X"; // Joueur actuel
let selectionInProgress = false; // Indicateur pour savoir si une sélection de champion est en cours
let champions = []; // Liste des champions acceptables pour la partie
const grid = Array(9).fill(null);

const winningCombinations = [
    [0, 1, 2], // Ligne 1
    [3, 4, 5], // Ligne 2
    [6, 7, 8], // Ligne 3
    [0, 3, 6], // Colonne 1
    [1, 4, 7], // Colonne 2
    [2, 5, 8], // Colonne 3
    [0, 4, 8], // Diagonale 1
    [2, 4, 6]  // Diagonale 2
];

const championsAcceptables = [];
Final.forEach(row => {
    row.forEach(subList => {
        championsAcceptables.push(subList); // Ajoute chaque sous-liste à subLists
    });
});

const categorieLign = Lign;

const categorieCol = Column;

const divsCategorieLign = document.querySelectorAll('.categorie-lign');
const divsCategorieCol = document.querySelectorAll('.categorie-col');

divsCategorieLign.forEach((div, index) => {
    if (index < categorieLign.length && typeof categorieLign[index] === 'string') {
        const img = document.createElement('img');
        img.src = categorieLign[index];
        img.alt = categorieLign[index].replace('.jpg', '').replace('imagescat/', '');
        img.style.width = '100%';
        div.appendChild(img);
    } else {
        console.error(`categorieLign[${index}] est invalide :`, categorieLign[index]);
        div.textContent = "Aucune image disponible";
    }
});

divsCategorieCol.forEach((div, index) => {
    if (index < categorieCol.length && typeof categorieCol[index] === 'string') {
        const img = document.createElement('img');
        img.src = categorieCol[index];
        img.alt = categorieCol[index].replace('.jpg', '').replace('imagescat/', '');
        img.style.width = '100%';
        div.appendChild(img);
    } else {
        console.error(`categorieCol[${index}] est invalide :`, categorieCol[index]);
        div.textContent = "Aucune image disponible";
    }
});

function initChampions(index) {
    champions = championsAcceptables[index].map(name => 
        allChampions.find(champ => champ.name === name)
    );
}

function initGame() {
    grid.fill(null); // Réinitialiser la grille
    afficherGrille(); // Afficher la grille
    selectionInProgress = false; // Réinitialiser l'état
    // Choisir aléatoirement qui sera le joueur X et qui sera le joueur O
    currentPlayer = Math.random() < 0.5 ? "X" : "O"; // 50% de chance pour chaque joueur
    afficherJoueur(); // Mettre à jour l'affichage du joueur actuel
}

function afficherGrille() {
    const cells = document.querySelectorAll('[data-cell]');
    cells.forEach((cell, index) => {
        cell.innerHTML = grid[index] === null ? '' : grid[index]; // Remplace par le symbole du joueur
        cell.style.pointerEvents = grid[index] === null ? 'auto' : 'none'; // Désactiver les clics sur les cases déjà prises
    });
}

function afficherJoueur() {
    const currentPlayerDisplay = document.getElementById('currentPlayerDisplay');
    currentPlayerDisplay.innerText = `C'est au joueur ${currentPlayer} de jouer.`; // Mettre à jour le texte
}

function jouerTicTacLOL() {
    initGame(); // Lancer la partie
    startTurn();

    // Sélectionner uniquement les cellules qui ont la classe 'grid-item'
    const cells = document.querySelectorAll('.grid-item');
    
    cells.forEach(cell => {
        cell.addEventListener('click', function () {
            const index = this.getAttribute('data-cell');
            if (grid[index] === null) {
                currentCellIndex = index; // Sauvegarder l'index de la case cliquée
                initChampions(index); // Appeler la fonction avec l'index
                afficherRechercheChampion(index); // Afficher la recherche de champion
            }
        });
    });
}

let timer; // Variable pour le timer
let timeLeft = 15; // Temps initial

function startTurn() {
    clearTimeout(timer); // Assurez-vous de nettoyer le précédent timer
    timeLeft = 15; // Réinitialiser le temps
    document.getElementById('timer').innerText = timeLeft; // Afficher le temps initial

    // Démarrez le timer de 15 secondes
    timer = setInterval(() => {
        timeLeft--; // Décrémenter le temps restant
        document.getElementById('timer').innerText = timeLeft; // Mettre à jour l'affichage

        if (timeLeft <= 0) {
            clearInterval(timer); // Nettoyer le timer
            alert(`${currentPlayer} n'a pas fait de choix à temps ! Passons au joueur suivant.`);
            switchPlayer(); // Passer au joueur suivant
        }
    }, 1000); // Mettre à jour toutes les secondes

    // Ajoutez ici le code pour permettre au joueur de choisir une case
}

function switchPlayer() {
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X'; // Alterner entre X et O
    startTurn(); // Commencer le tour du nouveau joueur
}

function afficherRechercheChampion(index) {
    selectionInProgress = true; // Démarrer le processus de sélection
    const champSearchInput = document.getElementById('champSearchInput');
    const suggestionsBox = document.getElementById('champSuggestions');

    // Afficher l'input et réinitialiser
    champSearchInput.style.display = 'block'; // Afficher l'input
    champSearchInput.value = '';
    suggestionsBox.innerHTML = '';
    suggestionsBox.style.display = 'block'; // Afficher la boîte de suggestions
    suggestionsBox.scrollTop = 0; // Remettre le défilement en haut à chaque ouverture

    // Afficher tous les champions par défaut
    afficherSuggestions(allChampions, index);

    champSearchInput.addEventListener('input', function () {
        const searchTerm = champSearchInput.value.toLowerCase();
        suggestionsBox.innerHTML = '';

        // Filtrer les champions par rapport au texte saisi
        const filteredChampions = allChampions.filter(champ => champ.name.toLowerCase().startsWith(searchTerm));

        // Limiter à 5 suggestions visibles
        afficherSuggestions(filteredChampions, index);
        suggestionsBox.scrollTop = 0; // Remettre le défilement en haut après le filtrage
    });
}

function afficherSuggestions(suggestions, index) {
    const suggestionsBox = document.getElementById('champSuggestions');
    suggestionsBox.innerHTML = ''; // Vider les suggestions existantes

    suggestions.forEach(suggestion => {
        const suggestionItem = document.createElement('div');
        suggestionItem.classList.add('suggestion-item');
        suggestionItem.innerHTML = `<img src="${suggestion.img}" alt="${suggestion.name}"><span>${suggestion.name}</span>`;
        
        suggestionItem.addEventListener('click', function () {
            // Vérifier si le champion sélectionné est dans les champions acceptables
            if (championsAcceptables[index].includes(suggestion.name)) {
                // Marquer la case comme remplie avec le symbole du joueur
                grid[index] = currentPlayer; 
                afficherGrille(); // Mettre à jour la grille

                champSearchInput.value = ''; // Vider l'input
                suggestionsBox.innerHTML = ''; // Effacer les suggestions après la sélection
                suggestionsBox.style.display = 'none'; // Masquer la boîte de suggestions
                champSearchInput.style.display = 'none'; // Masquer l'input
                selectionInProgress = false; // Réinitialiser l'état

                // Vérifier si le joueur a gagné
                if (checkWin(currentPlayer)) {
                    setTimeout(() => alert(`Le joueur ${currentPlayer} a gagné !`), 100); // Alerte de victoire
                } else {
                    // Passer au joueur suivant
                    currentPlayer = currentPlayer === "X" ? "O" : "X"; 
                    afficherJoueur(); // Mettre à jour l'affichage du joueur actuel
                }
            } else {
                champSearchInput.value = ''; // Vider l'input
                suggestionsBox.innerHTML = ''; // Effacer les suggestions
                suggestionsBox.style.display = 'none'; // Masquer la boîte de suggestions
                champSearchInput.style.display = 'none'; // Masquer l'input
                selectionInProgress = false; // Réinitialiser l'état
                
                // Passer au joueur suivant même si le champion n'est pas valide
                currentPlayer = currentPlayer === "X" ? "O" : "X"; 
                afficherJoueur(); // Mettre à jour l'affichage du joueur actuel
                suggestionsBox.scrollTop = 0; // Remettre le défilement en haut
            }
        });

        suggestionsBox.appendChild(suggestionItem);
    });
}

function checkWin(player) {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return grid[index] === player;
        });
    });
}

jouerTicTacLOL(); // Lancer le jeu
