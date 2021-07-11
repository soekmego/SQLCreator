class RandomName extends Factory{

    constructor(){
        super();

        this.companyNames = ["Spirit Softwares", "Silver Lining Productions", "Jupiter Lighting", "Honey Electronics", "Raptor Industries",
        "Ogre Corp", "Jupiter Intelligence", "Ecstatic Industries", "Nymph Electronics", "Jupiter Co.", "Grizzly Records", "Phantom Industries",
        "Proton", "Chief Acoustics", "Gorilla Systems", "Trek Security", "Smile Systems", "Radiant Media", "Night Acoustics", "Peach Media",
        "Omega Motors", "Cannon Solutions", "Summit", "Gorilla Softwares", "Micro Solutions", "World Brews",
        "Thunder Networks", "Sphinx Enterprises", "Hound Softwares", "Lion Industries", "Boar Corp", "Wizard Co.",
        "Pinnacle Motors", "Amazystems", "Honeytelligence", "Firetronics", "Phantomedia", "Lagoonavigations",
        "Bansheelectronis", "Ansoft", "Aces", "Tigertainment", "Cliffoods", "Marsoftwares", "Dragonetworks",
        "Plutronics", "Paragonetworks", "Crypticorps", "Pixelimited", "Sunavigations", "Padlockurity,", "Asco", 
        "North Starporation", "Prodintelligence", "Grasshoproductions", "Mountelligence", "Goldustries", "Amazystems",
        "Mapletainment", "Smilectronics", "Globaviations", "Orco", "Elviations", "Ecstaticorps", "Pyramidustries",
        "Yelloworks", "Purple air", "Angel shade", "Red dale", "Forest shadow", "Spike fruit", "Marble shine", 
        "Ocean fly", "Shade shine", "Raven mobile", "Squid shade", "Gnome search", "Freak shack", "Arcane wares", "Tiger life",
        "Banshee bar", "Pixy stones", "Humming media", "Pixy gate", "Herb ware", "Gold cloud", "Apex fly", "Chief dream",
        "Life bar"];

        this.brandNames = ["lunism", "isolia", "abambo", "garous", "cervist", "audile", "promia", "yamba", "socinti",
        "camilith", "homofic", "trinti", "movore", "maxixo", "cryonte", "centinder", "symible", "lanti", "geyo",
        "retrocero", "skimbee", "frontill", "oyombo", "eurotz", "vivile", "acerescent", "anor", "mistilane",
        "apore", "cogimm", "vicezz", "podor", "hemilane", "micee", "quinte", "yocero", "pyronyx", "protovu", "quazz",
        "econder", "hyperible", "difosis", "metazio", "astrodeo", "aurile", "fortor", "miser", "demia", "pedosis", 
        "ultrata", "amphipe", "falcile", "infrayo", "sysise", "finoid", "sucer", "myist", "intragen", "genoid", 
        "dynolium", "antefic", "panore", "eacero", "anticy", "leembu", "omninoodle", "hydrodo",
        ];

        // AT City Names
        this.cityNames = ["Allentsteig", "Altheim", "Althofen", "Amstetten", "Ansfelden", "Attnang-Puchheim", "Bad Aussee",
        "Bad Hall", "Bad Ischl", "Bad Leonfelden", "Bad Radkersburg", "Bad St. Leonhard im Lavanttal", "Bad Vöslau", "Baden",
        "Bärnbach", "Berndorf", "Bischofshofen", "Bleiburg", "Bludenz", "Braunau am Inn", "Bregenz", "Bruck an der Leitha",
        "Bruck an der Mur", "Deutsch-Wagram", "Deutschlandsberg", "Dornbirn", "Drosendorf-Zissersdorf", "Dürnstein", "Ebenfurth",
        "Ebreichsdorf", "Eferding", "Eggenburg", "Eisenerz", "Eisenstadt", "Enns", "Fehring", "Feldbach", "Feldkirch",
        "Feldkirchen in Kärnten", "Ferlach", "Fischamend", "Frauenkirchen", "Freistadt", "Friedberg", "Friesach", "Frohnleiten",
        "Fürstenfeld", "Gallneukirchen", "Gänserndorf", "Geras", "Gerasdorf bei Wien", "Gföhl", "Gleisdorf", "Gloggnitz", "Gmünd",
        "Gmünd in Kärnten", "Gmunden", "Graz", "Grein", "Grieskirchen", "Groß-Enzersdorf", "Groß Gerungs", "Groß-Siegharts", "Güssing",
        "Haag", "Hainburg an der Donau", "Hainfeld", "Hall in Tirol", "Hallein", "Hardegg", "Hartberg", "Heidenreichstein",
        "Hermagor-Pressegger See", "Herzogenburg", "Hohenems", "Hollabrunn", "Horn", "Imst", "Innsbruck", "Jennersdorf",
        "Judenburg", "Kapfenberg", "Kindberg", "Kirchdorf an der Krems", "Kirchschlag in der Buckligen Welt", "Kitzbühel",
        "Klagenfurt am Wörthersee", "Klosterneuburg", "Knittelfeld", "Köflach", "Korneuburg", "Krems an der Donau", "Kufstein",
        "Laa an der Thaya", "Laakirchen", "Landeck", "Langenlois", "Leibnitz", "Leoben", "Leonding", "Lienz", "Liezen", "Lilienfeld",
        "Linz", "Litschau", "Maissau", "Mank", "Mannersdorf am Leithagebirge", "Marchegg", "Marchtrenk", "Mariazell", "Mattersburg"];

        this.addressNames = ["Ada", "Christen", "Hansson", "Berger", "Unger", "Landgut", "Alpen", "Alxini", "Amrantino", "Wegner",
        "Ostbahn", "Angela", "Arthuld", "Forzel", "Schweizer", "August", "Kornburger", "Kaiserin", "Baron", "Bogen", "Brecher",
        "Kurpark", "Berhards", "Bierleger", "Baum", "Butterlich", "Buchblauer", "Brantein", "Bulln", "Karl-Appel", "Clemens", "Daumen",
        "Donabaum", "Eckhart", "Elleni", "Flögl", "Ottentullner", "Encke", "Luckenlück", "Erlacher", "Ernstl", "Eschen", "Felix", "Filmteich", 
        "Gaiyer", "Mika", "Friedrich", "Biesmayr", "Geißfluss", "Prontl", "Getriede", "Willihelm", "Gondel", "Gotenbürgger", "Grönalt", 
        "Hackerl", "Huntzendorf"];

        this.humanNames = [ "Anna", "Michael", "Franz", "Hannes", "Justin", "Maria", "Kevin", "Jester", "David", "Alexander", "Michaela", 
        "Verena", "Josefine", "Conny", "Annette", "Franziska", "Jutta", "Gertrude"
        ];
        
    }

    getRandomBrandName(){
        var randomCompanyName = this.getRandomItemFromArray(this.brandNames);
        //console.log(randomCompanyName);
        return randomCompanyName;
    }

    getRandomCompanyName(){
        var randomCompanyName = this.getRandomItemFromArray(this.companyNames);
        //console.log(randomCompanyName);
        return randomCompanyName;
    }

    getRandomAddress(){
        var streetTypes = [" Weg", " Gasse", " Strasse", " Steg"];
        var address = this.getRandomItemFromArray(this.addressNames) + this.getRandomItemFromArray(streetTypes);
        //console.log(address);
        return address;
    }

    getRandomHumanName(){
        var randomHumanName = this.getRandomItemFromArray(this.humanNames);
        //console.log(randomCompanyName);
        return randomHumanName;
    }

    getRandomCityName(){
        var city = this.getRandomItemFromArray(this.cityNames);
        //console.log(city);
        return city;
    }
    
    getRandomEmail(){
        var randomDomains = [".com", ".at", ".de", ".ch"];
        var randomEmail = "" + this.getRandomItemFromArray(this.brandNames) + "@" +  
        this.getRandomItemFromArray(this.brandNames) + 
        this.getRandomItemFromArray(randomDomains); 
        //console.log(randomEmail);
        return randomEmail;
    }
    
}