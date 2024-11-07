import { Link } from "react-router-dom";
// styles
import "./styles/pixel-stars.css";
import "./styles/seniors.css";
// icons
import { ArrowIcon } from "../assets/icons/Icons";

const seniors = [
  {
    name: "Rabeya Khatun",
    hometown: "Pabna",
    roll: 2210001,
    bloodGroup: "A+",
    school: "Miapur Hazi Jasim Uddin High School & College",
    college: "Miapur Hazi Jasim Uddin High School & College, Bonogram, Pabna.",
    socialMedia: "https://www.facebook.com/profile.php?id=100095600646057\nhttps://x.com/RabeyaK60054889?t=hArTSFEr2aeQWUwyoNa2jA&s=09",
    bio: "Raise your words, not your voice. It is rain that grows flowers, not thunder.\"\n-Rumi",
    photo: null
  },
  {
    name: "Rifat Habib",
    hometown: "Nilphamari",
    roll: 2210003,
    bloodGroup: "A+",
    school: "Kishorganj M.L. Model High school, Nilphamari",
    college: "Birsrestha Munshi Abdur Rouf public College",
    socialMedia: "https://wa.me/+8801518929863",
    bio: "Low CGian"
  },
  {
    name: "Md. Nadeem Hossain",
    hometown: "Dhaka",
    roll: 2210004,
    bloodGroup: "A+",
    school: "Faizur Rahman Ideal Institute",
    college: "Govt. Science College",
    socialMedia: "https://www.facebook.com/profile.php?id=100004559417861",
    bio: "Problem solver, Tech enthusiast"
  },
  {
    name: "PIYAL BISWAS",
    hometown: "KHULNA",
    roll: 2210005,
    bloodGroup: "B+",
    school: "MOHAMMAD ALI SECONDARY SCHOOL, CHALNA, KHULNA",
    college: "GOV. M.M CITY COLLEGE,KHULNA",
    socialMedia: "https://www.facebook.com/piyal.biswas.9634?mibextid=ZbWKwL",
    bio: "Never give up."
  },
  {
    name: "Zarjis Ahammed",
    hometown: "Naogaon",
    roll: 2210006,
    bloodGroup: "O+",
    school: "Rajshahi Collegiate School",
    college: "Notre Dame College, Dhaka",
    socialMedia: "https://www.facebook.com/profile.php?id=61551762901565&mibextid=ZbWKwL",
    bio: "Impure soul trying to escape at an eternity"
  },
  {
    name: "Ahnaf Shahriar",
    hometown: "Saidpur, Nilphamari",
    roll: 2210007,
    bloodGroup: "B+",
    school: "Saidpur Govt. Science School, Saidpur, Nilphamari",
    college: "Saidpur Govt. Science College, Saidpur, Nilphamari",
    socialMedia: "https://www.facebook.com/ahnaf.ahnaf.129794?mibextid=ZbWKwL",
    bio: "Like to keep everything simple.\nLove all kind of sports."
  },
  {
    name: "Jaharun Binte Feroz",
    hometown: "Bogura",
    roll: 2210008,
    bloodGroup: "AB+",
    school: "Bogura Govt. Girls High School, Bogura",
    college: "Govt. Azizul Haque College Bogura",
    socialMedia: "https://www.facebook.com/saima.afroz.100",
    bio: "RUET-22",
    photo: null
  },
  {
    name: "Md Adib Hasan",
    hometown: "Narsingdi",
    roll: 2210011,
    bloodGroup: "O+",
    school: "Brahmondi KKM Govt High School",
    college: "Abdul Kadir Mollah City College, Narsingdi",
    socialMedia: "https://www.facebook.com/weirdadib?mibextid=ZbWKwL\nhttps://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav",
    bio: "Muslim | Learner | Ambitious",
    photo: null
  },
  {
    name: "Fida Haque Shafi",
    hometown: "Sirajganj",
    roll: 2210012,
    bloodGroup: "B+",
    school: "Monipur High School and College",
    college: "Dhaka College",
    socialMedia: "https://www.facebook.com/fida.haque.17",
    bio: "chill…",
    photo: null
  },
  {
    name: "MD TaMiM Hasan",
    hometown: "Tangail",
    roll: 2210013,
    bloodGroup: "O+",
    school: "Karimunnesa Siddiquee High School, Kalihati",
    college: "Shahid Syed Nazmul Islam College, Mymensingh",
    socialMedia: "https://www.facebook.com/profile.php?id=100013086852612",
    bio: "Extraordinary."
  },
  {
    name: "Semanta Dey",
    hometown: "Mymensingh",
    roll: 2210014,
    bloodGroup: "A+",
    school: "Kapashia High School, Purbadhala",
    college: "Shahid Syed Nazrul Islam College, Mymensingh",
    socialMedia: "https://www.facebook.com/semanta.dey.94?mibextid=ZbWKwL",
    bio: "Nai🫥"
  },
  {
    name: "Sumaiya Islam",
    hometown: "Dhaka",
    roll: 2210015,
    bloodGroup: "B+",
    school: "Birshreshtha Noor Mohammad Public College",
    college: "Birshreshtha Noor Mohammad Public College",
    socialMedia: "https://www.facebook.com/sumaiyaislam373?mibextid=LQQJ4d",
    bio: "Live every moment",
    photo: null
  },
  {
    name: "Asraful Islam",
    hometown: "Brahmanbaria",
    roll: 2210016,
    bloodGroup: "O+",
    school: "Annada Govt High School",
    college: "Brahmanbaria Govt College",
    socialMedia: "https://www.facebook.com/profile.php?id=100051830794939&mibextid=LQQJ4d",
    bio: "You Want Praise Now?",
    photo: null
  },
  {
    name: "MD. Maruf Hasan",
    hometown: "Bogura",
    roll: 2210017,
    bloodGroup: "A-",
    school: "Bogura Cantonment Public School and College, Bogura",
    college: "Govt. Azizul Haque College, Bogura",
    socialMedia: "https://www.facebook.com/md.marufhasan235/",
    bio: "You don't have to know more about me."
  },
  {
    name: "Shadman Zaman Olive",
    hometown: "Mymensingh",
    roll: 2210018,
    bloodGroup: "B+",
    school: "Phulpur Pilot Government High School",
    college: "Shahid Syed Nazrul Islam College",
    socialMedia: "https://www.facebook.com/sz.olive.7\nhttps://www.linkedin.com/in/shadman-zaman-olive/",
    bio: "Film buff | Tech enthusiast | Exploring new skills, ideas, and perspectives"
  },
  {
    name: "Abid Aziz",
    hometown: "Naogaon",
    roll: 2210019,
    bloodGroup: "B+",
    school: "Naogaon KD Govt High School",
    college: "Notre Dame College",
    socialMedia: "https://www.facebook.com/abidaziz.nihal.9/\nhttps://www.linkedin.com/in/abid-aziz-nihal/",
    bio: "Cyber Security Enthusiast||Tech Lover||Adventure Travel||Love to watch TV shows"
  },
  {
    name: "Abu Rahul Nafis",
    hometown: "Bogura",
    roll: 2210020,
    bloodGroup: "B+",
    school: "Karatoa Multimedia School and College , Bogura",
    college: "Govt Azizul Haque College,Bogura",
    socialMedia: "https://www.facebook.com/profile.php?id=61564852221995&mibextid=ZbWKwL",
    bio: "Feel free to share anything."
  },
  {
    name: "Khadimul Islam",
    hometown: "Tangail",
    roll: 2210021,
    bloodGroup: "B+",
    school: "...",
    college: "Shaheed Ramiz Uddin Cantonment college",
    socialMedia: "https://www.facebook.com/profile.php?id=100052978943747&mibextid=ZbWKwL\nhttps://github.com/21-khadimul",
    bio: "তুমি যদি এমন কিছু পেতে চাও যা আগে পাওনি, তাহলে তোমাকে এমন কিছু করতে হবে যা তুমি আগে করোনি"
  },
  {
    name: "Md Ahnaf Abid Fahim",
    hometown: "Mollahat, Bagerhat",
    roll: 2210022,
    bloodGroup: "O+",
    school: "Jhenaidah Cadet College",
    college: "Jhenaidah Cadet College",
    socialMedia: "facebook=> https://www.facebook.com/profile.php?id=100093218120308",
    bio: "Alhamdulillah for everything",
    photo: null
  },
  {
    name: "Moynul Kabir",
    hometown: "Jhenaidah",
    roll: 2210023,
    bloodGroup: "B+",
    school: "Govt. Naldanga Bhushan pilot secondary school",
    college: "Govt. Mahatub Uddin degre college",
    socialMedia: "Fb:https://www.facebook.com/ahm.kabir.50?mibextid=ZbWKwL",
    bio: "Pera nai chill"
  },
  {
    name: "Shadid Hasan Niloy",
    hometown: "Mymensingh",
    roll: 2210024,
    bloodGroup: "O+",
    school: "Islami Academy School and College, Trishal, Mymensingh",
    college: "Shahid Syed Nazrul Islam College, Mymensingh",
    socialMedia: "facebook.com/shadid.hasan141\nhttps://www.linkedin.com/in/shadid-hasan/\nhttps://www.instagram.com/shadid.hasan/",
    bio: "."
  },
  {
    name: "Umme Sumaya Niha",
    hometown: "Dhaka",
    roll: 2210025,
    bloodGroup: "B+",
    school: "Bashir Uddin Adarsha School and College",
    college: "Shaheed Bir Uttam Lt. Anwar Girls' College",
    socialMedia: "https://www.facebook.com/ummesumaya.niha.9?mibextid=ZbWKwL",
    bio: "Error"
  },
  {
    name: "Okia Goni",
    hometown: "Bogura",
    roll: 2210027,
    bloodGroup: "A+",
    school: "RDA Lab School and College,Bogura .",
    college: "Rajuk Uttara Model College",
    socialMedia: "https://www.facebook.com/okiasarker1?mibextid=ZbWKwL",
    bio: "...",
    photo: null
  },
  {
    name: "Md. Taurat Kibria",
    hometown: "Naogaon",
    roll: 2210028,
    bloodGroup: "O+",
    school: "Naogaon K.D Government High School, Naogaon",
    college: "New Government Degree College, Rajshahi",
    socialMedia: "https://www.facebook.com/tauratkibria?mibextid=ZbWKwL",
    bio: "Passionate about technology and lifelong learning , always exploring new ideas"
  },
  {
    name: "S. M Sadman Aziz",
    hometown: "Chittagong",
    roll: 2210029,
    bloodGroup: "B+",
    school: "Government Muslim High School",
    college: "Chittagong Collegiate College",
    socialMedia: "https://www.facebook.com/shadman.aziz.98",
    bio: "Just be simple"
  },
  {
    name: "Jony Ahmed",
    hometown: "Sirajganj",
    roll: 2210030,
    bloodGroup: "B+",
    school: "Dhamaich bill chalan high school",
    college: "Dhaka College",
    socialMedia: "https://www.facebook.com/JM.JonyAhmed?mibextid=ZbWKwL",
    bio: "I have a dream."
  },
  {
    name: "Md.Hamimul Islam Hamim",
    hometown: "Rajshahi",
    roll: 2210031,
    bloodGroup: "O+",
    school: "Rajshahi Collegiate School",
    college: "Shahid AHM Kamruzzaman Govt. Degree College, Rajshahi",
    socialMedia: "https://www.facebook.com/hi.hamim.2018",
    bio: "LOVE RUET 🖤",
    photo: null
  },
  {
    name: "Nur Nafis Fuad",
    hometown: "Jashore",
    roll: 2210032,
    bloodGroup: "O(+)",
    school: "Police Line Secondary School, Jashore",
    college: "Govt. M M College, Jashore",
    socialMedia: "https://www.facebook.com/nnfuad\nhttps://www.github.com/nnfuad/\nhttps://www.linkedin.com/in/nnfuad01/",
    bio: "."
  },
  {
    name: "Mahita Tasnim Nadrima",
    hometown: "Demra,Dhaka",
    roll: 2210033,
    bloodGroup: "A+",
    school: "Shamsul Hoque Khan School & College",
    college: "Holy Cross College",
    socialMedia: "https://www.facebook.com/mahitatasnim.nadrima.3",
    bio: "Only peace."
  },
  {
    name: "Shahriar Islam Siyam",
    hometown: "Dhaka",
    roll: 2210034,
    bloodGroup: "A+",
    school: "BNMPC",
    college: "BNMPC",
    socialMedia: "https://www.facebook.com/sahriarislam.siyam?mibextid=ZbWKwL",
    bio: "K"
  },
  {
    name: "Waliullah",
    hometown: "Sherpur",
    roll: 2210035,
    bloodGroup: "O+'ve",
    school: "Mirzapur Cadet College",
    college: "Mirzapur Cadet College",
    socialMedia: "https://www.linkedin.com/in/waliullah-ullash-2b0657154/\nhttps://www.facebook.com/waliullah.ullash.14\nhttps://t.me/waliullah14\nhttps://www.instagram.com/_waliullah14_/",
    bio: "The only real prison is fear, and the only real freedom is freedom from fear."
  },
  {
    name: "Arafat Rahaman",
    hometown: "Barishal",
    roll: 2210036,
    bloodGroup: "B+",
    school: "Nooria secondary school, barishal",
    college: "Govt.Barishal College, Barishal",
    socialMedia: "https://www.facebook.com/profile.php?id=100094161245712",
    bio: "Kichu bolar nai🥲",
    photo: null
  },
  {
    name: "Md.Rownak Mridha",
    hometown: "Brahmanbaria",
    roll: 2210037,
    bloodGroup: "O+",
    school: "Annada Govt. High School",
    college: "Dhaka College",
    socialMedia: null,
    bio: "Be the unique which can't be imagined😊"
  },
  {
    name: "Sadia Rahman Mithila",
    hometown: "Bogura",
    roll: 2210038,
    bloodGroup: "B-",
    school: "Bogura Cantonment Public School and College",
    college: "Govt. Azizul Haque College, Bogura",
    socialMedia: "https://www.facebook.com/profile.php?id=100080438469749&mibextid=ZbWKwL",
    bio: "I'm a student",
    photo: null
  },
  {
    name: "Miftahul Islam",
    hometown: "Rajshahi",
    roll: 2210040,
    bloodGroup: "AB+",
    school: "RGLHS",
    college: "NGDC",
    socialMedia: "https://www.facebook.com/MiftahulIslam22",
    bio: "...",
    photo: null
  },
  {
    name: "Md. Tasnim Shehjabin Shaon",
    hometown: "Rajshahi",
    roll: 2210041,
    bloodGroup: "B+",
    school: "Rajshahi Collegiate School, Rajshahi",
    college: "Rajshahi Education Board Government School and College, Rajshahi",
    socialMedia: "https://www.facebook.com/tasnim.shaon.1?mibextid=ZbWKwL",
    bio: ".",
    photo: null
  },
  {
    name: "Md. Samiul Alam",
    hometown: "Chapai Nawabganj",
    roll: 2210042,
    bloodGroup: "O+",
    school: "Sristy Central School & College, Rajshahi",
    college: "Rajshahi Government City College, Rajshahi",
    socialMedia: "https://www.facebook.com/alamsamiul09?mibextid=ZbWKwL",
    bio: "Nothing special"
  },
  {
    name: "Nuruzzaman",
    hometown: "Chapainawabganj",
    roll: 2210043,
    bloodGroup: "A+",
    school: "Charadanga Boys High Academy, Gomastapur, Chapainawabganj",
    college: "Nawabganj Govt. College",
    socialMedia: "https://www.facebook.com/md.nuruzzaman.5855?mibextid=ZbWKwL\nhttps://www.instagram.com/nuruzzaman.43/profilecard/?igsh=MTBzbmw4NjlxM2szZw==",
    bio: "Keep Clam and Carry On."
  },
  {
    name: "SOMYA DISHA",
    hometown: "Barishal",
    roll: 2210044,
    bloodGroup: "B+",
    school: "Power Development Board High School, Ghorashal, Palash, Narsingdi",
    college: "Abdul Kadir Mollah City College, Narsingdi",
    socialMedia: "https://www.facebook.com/dishanur5321/",
    bio: "SKY IS THE LIMIT",
    photo: null
  },
  {
    name: "Kifayat Mashud Nitol",
    hometown: "Bogura",
    roll: 2210045,
    bloodGroup: "A+",
    school: "Guzia High School",
    college: "Bogura Government College",
    socialMedia: "https://www.facebook.com/profile.php?id=100070928912707&mibextid=ZbWKwL",
    bio: "Simple and peaceful l"
  },
  {
    name: "Mst.Tania Khatun",
    hometown: "Chapainawabgonj",
    roll: 2210046,
    bloodGroup: "B+",
    school: "Fulkuri Islamic Academy",
    college: "Rajshahi Government City College",
    socialMedia: "https://www.facebook.com/taniaeceruet/",
    bio: "None",
    photo: null
  },
  {
    name: "Md.Tanveer Rashid",
    hometown: "Rangpur",
    roll: 2210047,
    bloodGroup: "O+",
    school: "St.Joseph Higher Secondary School",
    college: "Notre Dame College",
    socialMedia: "https://www.facebook.com/mohammad.tanveer.rashid",
    bio: "Don't grieve. Anything you lose comes round in another form.\" – Rumi",
    photo: null
  },
  {
    name: "MD Huzayfa",
    hometown: "Dhaka",
    roll: 2210048,
    bloodGroup: "A+",
    school: "Tajkiatul Ummah Dakhil Madrasha, Bashabo, Dhaka",
    college: "Tamirul Millat Kamil Madrasha, Jatrabari, Dhaka",
    socialMedia: "https://www.facebook.com/md.hujayfa.7?mibextid=ZbWKwL",
    bio: "Good at nothing 🥱"
  },
  {
    name: "Maheya Jannat Nilima",
    hometown: "Sylhet",
    roll: 2210049,
    bloodGroup: "AB+",
    school: "Govt Agragami Girls High School and College",
    college: "Murarichand College,Sylhet",
    socialMedia: "https://www.facebook.com/maheyajannat.nilima?mibextid=ZbWKwL",
    bio: "."
  },
  {
    name: "Abdulla Al Shahab",
    hometown: "Pabna",
    roll: 2210050,
    bloodGroup: "O+",
    school: "Al-Hera Academy School And College, Bera-Pabna",
    college: "Rajuk Uttara Model College",
    socialMedia: "https://www.facebook.com/abdullaal.shahab.9?mibextid=ZbWKwL",
    bio: "."
  },
  {
    name: "Fabiha Hoque Naisha",
    hometown: "Dhaka",
    roll: 2210052,
    bloodGroup: "O+",
    school: "Shamsul Hoque Khan School and College",
    college: "Holy Cross College,Dhaka.",
    socialMedia: "https://www.facebook.com/fabihahoque.naisha?mibextid=ZbWKwL",
    bio: 0
  },
  {
    name: "Likhan Kumar Das",
    hometown: "Narail",
    roll: 2210054,
    bloodGroup: "B+",
    school: "Narail Govt. High School",
    college: "Narail Govt. Victoria College",
    socialMedia: "https://www.facebook.com/likhan.das.727846?mibextid=ZbWKwL",
    bio: "Hello 👋"
  },
  {
    name: "Sharmin Akter",
    hometown: "Chandpur",
    roll: 2210055,
    bloodGroup: "AB+",
    school: "Savar Cantonment Board Girls High School",
    college: "Savar Cantonment Public School & College",
    socialMedia: "Fb - https://www.facebook.com/profile.php?id=100054927014190&mibextid=ZbWKwL",
    bio: "Active. Friendly. Ambivert."
  },
  {
    name: "Jilani Hasan",
    hometown: "Habiganj",
    roll: 2210056,
    bloodGroup: "A+",
    school: "ShahJalal Jamia Islamia School and College",
    college: "Brindaban Government College",
    socialMedia: "https://www.facebook.com/gulamgilanih?mibextid=ZbWKwL",
    bio: "Hey everyone, listen. Life throws a lot at us. The good, the bad, the in-between. But here's the thing; all those experiences, they stitch together this amazing story, our story. So don't be afraid to embrace them all. It's the wild mix that makes it yours, you know?",
    photo: null
  },
  {
    name: "Mahmudul Hasan",
    hometown: "Kurigram",
    roll: 2210057,
    bloodGroup: "A+",
    school: "Islampur Fazil Madrasah",
    college: "Kurigram Government College",
    socialMedia: null,
    bio: "Chasing dreams"
  },
  {
    name: "Arafat Rahman",
    hometown: "Bogura",
    roll: 2210059,
    bloodGroup: "o+",
    school: "Kahaloo Govt. Model High School",
    college: "Govt. Azizul Haque College",
    socialMedia: null,
    bio: ""
  },
  {
    name: "Bellal Matubber",
    hometown: "Madaripur",
    roll: 2210060,
    bloodGroup: "B+",
    school: "Alomdaster Adarsho High school, Rajoir, Madaripur",
    college: "Madaripur Govt College, Madaripur",
    socialMedia: "https://www.facebook.com/bellal.matubber.39?mibextid=ZbWKwL",
    bio: "Optimistic"
  },
  {
    name: "Sanumong marma",
    hometown: "Khagrachari,Chittagong",
    roll: 2210061,
    bloodGroup: "O+",
    school: "Rani Nihar Debi Govt. High School",
    college: "Dhaka Commerce College",
    socialMedia: "https://www.facebook.com/sanumong.marma.161?mibextid=LQQJ4d",
    bio: "THE END"
  }
]

export default function Seniors() {
  return (
    <div className="page seniors_page">
      <header>
        <div className="header_inner">
          <div className="pixel_stars">
            <div className="stars_1"></div>
            <div className="stars_2"></div>
          </div>
        </div>

        <div className="container">
          <div className="logo">
            <img src={require("../assets/images/logo.png")} alt="RUET" />
          </div>

          <div className="links_route">
            <Link to={"/"}>Home</Link>
            <ArrowIcon />
            Seniors
          </div>

          <h1>KNOW YOUR SENIORS</h1>
        </div>
        
        <div className="container" style={{ marginTop: "20px" }}>
          <section className="seniors">
            <div className="cards">
              {
                seniors.map((senior, i) => {
                  return (
                    <div className="card" key={i}>
                      <div className="photo">
                        <img src={senior.photo !== null? require(`../assets/images/seniors/${senior.roll}.jpg`) : require("../assets/images/avatar.jpg")} alt={senior.name} />
                      </div>
  
                      <div className="details">
                        <h2 className="name">{senior.name}</h2>
                        <p className="roll">{senior.roll}</p>
                        <p className="hometown"><span>Hometown:</span><br />{senior.hometown}</p>
                        <p className="college"><span>College:</span><br />{senior.college}</p>
                        <p className="school"><span>School:</span><br />{senior.school}</p>
                        <p className="bio">{senior.bio}</p>
                      </div>
                      
                      {
                        senior.socialMedia?
                        <div className="social_links">
                          {
                            senior.socialMedia.includes("\n")?
                            senior.socialMedia?.split("\n").map((s, i) => {
                              if (s.includes("facebook.com")) {
                                return (
                                  <a href={s} target="__blank"><i class="fa-brands fa-facebook"></i></a>
                                )
                              }
                              else if (s.includes("instagram.com")) {
                                return (
                                  <a href={s} target="__blank"><i class="fa-brands fa-instagram"></i></a>
                                )
                              }
                              else if (s.includes("x.com")) {
                                return (
                                  <a href={s} target="__blank"><i class="fa-brands fa-twitter"></i></a>
                                )
                              }
                              else if (s.includes("github.com")) {
                                return (
                                  <a href={s} target="__blank"><i class="fa-brands fa-github"></i></a>
                                )
                              }
                              else if (s.includes("linkedin.com")) {
                                return (
                                  <a href={s} target="__blank"><i class="fa-brands fa-linkedin"></i></a>
                                )
                              }
                              else if (s.includes("wa.me")) {
                                return (
                                  <a href={s} target="__blank"><i class="fa-brands fa-whatsapp"></i></a>
                                )
                              }
                              else if (s.includes("t.me")) {
                                return (
                                  <a href={s} target="__blank"><i class="fa-brands fa-telegram"></i></a>
                                )
                              }
                              else {
                                return (
                                  <a href={s} target="__blank">Contact</a>
                                )
                              }
                            })
                            :
                            senior.socialMedia.includes("facebook.com")?
                            <a href={senior.socialMedia} target="__blank"><i class="fa-brands fa-facebook"></i></a> :
                            senior.socialMedia.includes("instagram.com")?
                            <a href={senior.socialMedia} target="__blank"><i class="fa-brands fa-instagram"></i></a> :
                            senior.socialMedia.includes("x.com")?
                            <a href={senior.socialMedia} target="__blank"><i class="fa-brands fa-twitter"></i></a> :
                            senior.socialMedia.includes("github.com")?
                            <a href={senior.socialMedia} target="__blank"><i class="fa-brands fa-github"></i></a> :
                            senior.socialMedia.includes("linkedin.com")?
                            <a href={senior.socialMedia} target="__blank"><i class="fa-brands fa-linkedin"></i></a> :
                            senior.socialMedia.includes("wa.me")?
                            <a href={senior.socialMedia} target="__blank"><i class="fa-brands fa-whatsapp"></i></a> :
                            senior.socialMedia.includes("t.me")?
                            <a href={senior.socialMedia} target="__blank"><i class="fa-brands fa-telegram"></i></a> :
                            <a href={senior.socialMedia} target="__blank">Contact</a>
                          }
                        </div>
                        : ""
                      }
                    </div>
                  )
                })
              }
            </div>
          </section>
        </div>
        
        <p className="copyright">Made with ❤ by <a href="https://facebook.com/forhadhossain.me" target="__blank">Forhad</a></p>
      </header>
    </div>
  )
}
