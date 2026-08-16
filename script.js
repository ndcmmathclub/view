const FORMSPREE_ID = "xdkvyoqy"; 

// General activity photo library — powers both the Events page slideshow and the
// "Activity Gallery" grid below it. To add a new photo, just drop the file into
// assets/activities/ and add its path here.
const CLUB_PHOTOS = [
    "./assets/activities/image-01.jpeg",
    "./assets/activities/image-02.jpeg",
    "./assets/activities/image-03.jpeg",
    "./assets/activities/image-04.jpeg",
    "./assets/activities/image-05.jpeg",
    "./assets/activities/image-06.jpeg",
    "./assets/activities/image-07.jpeg",
    "./assets/activities/image-08.jpeg",
    "./assets/activities/image-09.jpeg"
];

const MESSAGES = [
    {
        role: { en: "Founding Co-Moderator's Message", bn: "প্রতিষ্ঠাকালীন সহ-পরিচালকের বাণী" },
        name: { en: "Golam Zakaria Torun", bn: "গোলাম জাকারিয়া তরুণ" },
        designation: { en: "Lecturer, Dept. of Mathematics", bn: "প্রভাষক, গণিত বিভাগ" },
        content: {en: "Mathematics is not only about numbers; it is the language of logic, creativity and discovery. Our Math Club always strives to transform fear of mathematics into curiosity and passion. I hope this small initiative will inspire everyone to explore the beauty of mathematics beyond the classroom.", 
        bn: "গণিত মানেই সংখ্যার সাথে সম্পৃক্ত কিছু না। এটা হলো যুক্তি, সৃজনশীলতা ও আবিষ্কারের ভাষা। আমাদের গণিত ক্লাব সবসময়ই গণিতের প্রতি ভীতিকে কৌতূহল ও ভালোবাসায় রূপান্তর করার চেষ্টা করে। আমি আশা করি, এই ক্ষুদ্র উদ্যোগটি শ্রেণি কার্যক্রমের গণ্ডি ছাড়িয়ে গণিতের সৌন্দর্য অন্বেষণ করতে সবাইকে অনুপ্রাণিত করবে।",
        },
        img: "./assets/committee/torun_sir.jpg"
    },
        {
        role: { en: "Moderator's Message", bn: "পরিচালকের বাণী" },
        name: { en: "Komol Chandra Sarker", bn: "কমল চন্দ্র সরকার" },
        designation: { en: "Lecturer, Dept. of Mathematics", bn: "প্রভাষক, গণিত বিভাগ" },
        content: {en: "The advancement of civilization has moved hand-in-hand with the progress of mathematics. Behind everything aesthetic that surrounds us, there lies the precise application of mathematical logic. Yet, in our childhood, mathematics is often presented to us as something fearsome, leaving an impact that lasts a lifetime. Consequently, the practical utility of math in our daily lives remains unknown. With the vision of highlighting its use in every stage of our daily existence and making mathematics a subject of joy for students, the Principal proposed the formation of a Math Club. Following this initiative, the Math Club began its journey on July 19, 2017.", 
        bn: "গণিতের উন্নতির সাথে সাথে সভ্যতার উন্নতি হয়েছে। আমাদের চার পাশের যা কিছু নান্দনিক- এর অন্তরালে লুকিয়ে রয়েছে গাণিতিক যুক্তির সঠিক প্রয়োগ। অথচ শৈশবে আমাদের সামনে গণিতকে উপস্থাপন করা হয় ভীতিকর বিষয় হিসেবে। এর প্রভাব থেকে যায় সারা জীবন। ফলে গণিত আমাদের প্রাত্যহিক জীবনে কী কাজে লাগে তা অজানাই থেকে যায়। আমাদের দৈনন্দিন জীবনে প্রতিটি পর্যায়ে এর ব্যবহার ও গণিতকে আনন্দের বিষয় হিসেবে কিভাবে ছাত্রদের কাছে উপস্থাপন করা যায় সেই চিন্তা থেকে অধ্যক্ষ মহোদয় গণিত ক্লাবের প্রস্তাব করেন, এবং ১৯.০৭.২০১৭ তারিখ গণিত ক্লাবের শুরু হয।"
        },
        img: "./assets/committee/IMG_3423.jpeg"
    },
    {
        role: { en: "President's Message", bn: "সভাপতির বাণী" },
        name: { en: "Md Radif Hasan", bn: "মোঃ রাদ্বীফ হাসান" },
        designation: { en: "President, Math Club", bn: "সভাপতি, গণিত ক্লাব" },
        content: {
            en: "It is a great privilege to lead this community of passionate learners. Our club is dedicated to breaking the stigma around mathematics and making it a subject of joy rather than fear. I firmly believe that knowledge is attained through collaboration rather than competition. This requires a collective effort and a mindset of mutual respect, through which we can realize the true greatness of mathematics, making it applicable at all levels of society to tackle various social challenges. Mathematics inspires us to solve problems; once that problem-solving mindset is established, there is no looking back. With this very spirit, we shall strive to solve the diverse problems of today’s world.",
            bn: "আগ্রহী শিক্ষার্থীদের এই সংগঠনে নেতৃত্ব দেওয়া আমার জন্য এক বড় পাওয়া। আমাদের ক্লাবের মূল লক্ষ্য হলো গণিত বিষয়ক ভীতি দূর করে একে আনন্দের বিষয়ে পরিণত করা। আমরা সহযোগিতামূলক শিক্ষায় বিশ্বাসী। কারণ আমি এটা বিশ্বাস করি, প্রতিযোগিতা নয়, বরং সহযোগিতার মাধ্যমেই জ্ঞান অর্জন সম্ভব যার জন্য প্রয়োজন সম্মিলিত প্রচেষ্টা ও একে অপরকে সম্মান করার মানসিকতা যার মাধ্যমে গণিতের মাহাত্ম্য আমরা উপলব্ধি করে তা সমাজের সর্বস্তরে ব্যবহার উপযোগী করে তুলতে পারি এবং বিভিন্ন সামাজিক সমস্যার মোকাবেলা করতে পারি। গণিত আমাদের সমস্যার সমাধান করতে উদবুদ্ধ করে, একবার যদি সমস্যা সমাধান করার মানসিকতা এসে যায়, এরপর আর কখনো পেছনে ফিরে তাকানো লাগবে না, এই মানসিকতা নিয়েই আজকের পৃথিবীর বিভিন্ন সমস্যা সমাধানে আমরা সচেষ্ট হবো।"
        },
        img: "./assets/committee/IMG_3345.jpeg"
    }
];

const SITE_DATA = {
    name: { en: "Notre Dame College Math Club", bn: "নটর ডেম কলেজ গণিত ক্লাব" },
    college: { en: "Notre Dame College Mymensingh", bn: "নটর ডেম কলেজ ময়মনসিংহ" },
    logo: "./assets/logo/logo.jpg", 
    email: "ndcmmathclub@gmail.com",
    address: { en: "City Bypass, Barera, Mymensingh", bn: "সিটি বাইপাস, বাড়েরা, ময়মনসিংহ" },
    copyright: { en: "All rights reserved.", bn: "সর্বস্বত্ত্ব সংরক্ষিত।"},
    phone: { en: "+880 1896-135846", bn: "+৮৮০ ১৮৯৬-৩২১৯৭০"},
    year: { en: "2026", bn: "২০২৬"},
    location: { en: "Mymensingh", bn: "ময়মনসিংহ"},
    events: { en: "Lectures, workshops and competitions.", bn: "লেকচার, কর্মশালা এবং প্রতিযোগিতা"},
    host: { en: "Want to host a talk?", bn: "আলোচক হতে আগ্রহী?" },
    encouragement: { en: "We encourage students to share their knowledge.", bn: "আমরা শিক্ষার্থীদেরকে তাদের জ্ঞান সবার মাঝে ছড়িয়ে দিতে উদ্বুদ্ধ করি।"},
    resources: { en: "Tools, YouTube channels, and papers we love.", bn: "আমাদের পছন্দের হাতিয়ার, ইউটিউব চ্যানেল ও গবেষণাপত্রসমূহ"},
    articles: { en: "Back to Articles", bn: "প্রবন্ধে ফিরে যান"}
}

const DICTIONARY = {
    'home': { en: 'Home', bn: 'হোম' },
    'messages': { en: 'Messages', bn: 'বাণী'},
    'events': { en: 'Events', bn: 'অনুষ্ঠানসমূহ' },
    'articles': { en: 'Articles', bn: 'প্রবন্ধ' },
    'resources': { en: 'Resources', bn: 'উপকরনসমূহ' },
    'committee': { en: 'Committee', bn: 'কার্যনির্বাহক সভা' },
    'contact': { en: 'Contact', bn: 'যোগাযোগ' },
    'join_now': { en: 'Join Now', bn: 'যোগ দিন' },
    'read_more': { en: 'Read More', bn: 'আরও পড়ুন' },
    'latest_news': { en: 'Latest News', bn: 'সর্বশেষ সংবাদ' },
    'hero_title': { en: 'In the glow of reasoning,', bn: 'যুক্তির দীপ্তিতে, ' },
    'hero_highlight': { en: 'let the light of Maths burn bright', bn: 'জ্বলে উঠুক গণিতের  জ্যোতি' },
    'hero_desc': { 
        en: 'Answers are easy. Proof is where the beauty lives. We chase clarity, elegance, and the quiet thrill of knowing exactly why something is true.',
        bn: 'উত্তরগুলো সহজ। আসল সৌন্দর্য লুকিয়ে থাকে প্রমাণের গভীরে। আমরা প্রতিনিয়ত ছুটে চলি স্পষ্টতা, নান্দনিকতা আর কোনো কিছু ঠিক কী কারণে সত্য—তা হুবহু জানার সেই প্রশান্ত রোমাঞ্চের খোঁজে।'
    },
    'view_schedule': { en: 'View Schedule', bn: 'সময়সূচী দেখুন' },
    'register': { en: 'Register', bn: 'রেজিস্ট্রেশন' },
    'rsvp': { en: 'RSVP', bn: 'অংশগ্রহণ' },
    'activities': {en: 'Our Activities', bn: 'আমাদের কার্যক্রম' },
    'view': {en: 'View', bn: 'দেখুন'},
    'submit_proposal': { en: 'Submit Proposal', bn: 'প্রস্তাবনা জমা দিন' },
    'send_message': { en: 'Send Message', bn: 'বার্তা পাঠান' },
    'name': { en: 'Name', bn: 'নাম' },
    'email': { en: 'Email', bn: 'ইমেইল' }, 
    'message': { en: 'Message', bn: 'বার্তা' },
    'equation_viz': { en: 'Equation Visualization', bn: 'সমীকরণ চিত্র' },
    'loading': { en: 'Loading...', bn: 'লোড হচ্ছে...' },
    'submit_draft': { en: 'Submit Draft', bn: 'খসড়া জমা দিন' },
    'article_prompt': { en: 'Have an interesting math topic to write about?', bn: 'গণিত নিয়ে লেখার মতো কোনো মজার বিষয় আছে?' },
    'gallery': { en: 'Activity Gallery', bn: 'কার্যক্রমের গ্যালারি' },
    'gallery_desc': { en: 'A look back at our lectures, competitions, and workshops.', bn: 'আমাদের লেকচার, প্রতিযোগিতা ও কর্মশালার কিছু মুহূর্ত।' },
    'photo_gallery': { en: 'Photo Gallery', bn: 'ছবি গ্যালারি' },
    'status_passed': { en: 'Passed', bn: 'সমাপ্ত' },
    'status_upcoming': { en: 'Upcoming', bn: 'আসন্ন' },
};

const ICONS = {
    menu: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>`,
    x: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`,
    calendar: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>`,
    clock: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
    location: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`,
    arrowRight: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>`,
    chevronLeft: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>`,
    chevronRight: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>`
};

const NEWS_SLIDES = [
    {
        id: 1,
        tag: { en: "Recent Event", bn: "সাম্প্রতিক কার্যক্রম" },
        title: { en: "Differentiation Bee 2026", bn: "অন্তরীকরণ প্রতিযোগিতা ২০২৬" },
        desc: { en: "Took place on 30 July in Room 402.", bn: "৩০ জুলাই ৪০২ নং কক্ষে অনুষ্ঠিত হয়েছিলো" },
        color: "bg-ndcm-accent"
    },
    {
        id: 2,
        tag: { en: "Announcement", bn: "ঘোষণা" },
        title: { en: "Speed Cubing Competition 2026", bn: "স্পিড কিউবিং প্রতিযোগিতা ২০২৬" },
        desc: { en: "Upcoming Wednesday at 12:00 PM in Room 402.", bn: "আসন্ন বুধবার দুপুর ১২:০০ টায় ৪০২ নং কক্ষে।" },
        color: "bg-ndcm-primary"
    }
];

const EVENTS = [ 
    
    {
        title: { en: "Differentiation Bee 2026", bn: "অন্তরীকরণ প্রতিযোগিতা ২০২৬" },
        date: { en: "JUL 30", bn: "৩০ জুলাই" },
        time: { en: "12:40 PM", bn: "দুপুর ১২:৪০" },
        dateISO: "2026-07-30",
        location: { en: "Room 402", bn: "৪০২ নং কক্ষ" },
        type: { en: "Competition", bn: "প্রতিযোগিতা" },
        desc: { en: "Math Olympiad", bn: "গণিত অলিম্পিয়াড" },
        color: "bg-yellow-100 text-blue-800",
        photos: [
"./assets/activities/differentiation-bee/IMG_3715.jpg",
"./assets/activities/differentiation-bee/IMG_3722.jpg",
"./assets/activities/differentiation-bee/IMG_3723.jpg",
"./assets/activities/differentiation-bee/IMG_3725.jpg",
"./assets/activities/differentiation-bee/IMG_3727.jpg",
"./assets/activities/differentiation-bee/IMG_3729.jpg",
"./assets/activities/differentiation-bee/IMG_3731.jpg",
"./assets/activities/differentiation-bee/IMG_3732.jpg",
"./assets/activities/differentiation-bee/IMG_3741.jpg",
"./assets/activities/differentiation-bee/IMG_3745.jpg",
"./assets/activities/differentiation-bee/IMG_3749.jpg",
"./assets/activities/differentiation-bee/IMG_3751.jpg",
"./assets/activities/differentiation-bee/IMG_3755.jpg",
"./assets/activities/differentiation-bee/IMG_3757.jpg",
"./assets/activities/differentiation-bee/IMG_3758.jpg",
"./assets/activities/differentiation-bee/IMG_3759.jpg",
"./assets/activities/differentiation-bee/IMG_3762.jpg",
"./assets/activities/differentiation-bee/IMG_3763.jpg",
"./assets/activities/differentiation-bee/IMG_3767.jpg",
"./assets/activities/differentiation-bee/IMG_3770.jpg",
"./assets/activities/differentiation-bee/IMG_3772.jpg",
"./assets/activities/differentiation-bee/IMG_3782.jpg"        ],
        rsvpLink: "https://forms.gle/your-link"
    },
    {
        title: {en: "Speed Cubing Competition", bn: "স্পিড কিউবিং প্রতিযোগিতা"},
        date: {en: "AUG 19", bn: "১৯ আগস্ট"},
        time: { en: "12:00 PM", bn: "দুপুর ১২:০০" },
        dateISO: "2026-08-19",
        location: { en: "Room 402", bn: "৪০২ নং কক্ষ" },
        type: { en: "Competition", bn: "প্রতিযোগিতা" },
        desc: { en: "Rubix Cube Competition", bn: "রুবিক্স কিউব প্রতিযোগিতা" },
        color: "bg-yellow-100 text-blue-800",
    }
];

const RESOURCES = [
    { title: "3Blue1Brown", type: {en: "Video", bn: "ভিডিও"}, desc: {en: "Visual explanations of complex math concepts.", bn: "জটিল গণিত ধারণার ভিজ্যুয়াল ব্যাখ্যা।"}, link: "https://www.3blue1brown.com/" },
    { title: "Project Euler", type: {en: "Platform", bn: "মঞ্চ"}, desc: {en: "Challenging mathematical/computer programming problems.", bn: "চ্যালেঞ্জিং গাণিতিক/কম্পিউটার প্রোগ্রামিং সমস্যা।"}, link: "https://projecteuler.net/" },
    { title: "Wolfram Alpha", type: {en: "Tool", bn: "টুল"}, desc: {en: "Computational intelligence engine.", bn: "কম্পিউটেশনাল ইন্টেলিজেন্স ইঞ্জিন।"}, link: "https://www.wolframalpha.com/" },
    { title: "The Art of Problem Solving", type: {en: "Course", bn: "কোর্স"}, desc: {en: "Resources for competition math.", bn: "প্রতিযোগিতামূলক গণিতের জন্য রিসোর্স।"}, link: "https://artofproblemsolving.com/" },
    { title: "Gonitzoggo", type: {en: "Platform", bn: "মঞ্চ"}, desc: {en: "Problem solving platform designed for Bangladeshi students", bn: "বাংলাদেশী শিক্ষার্থীদের সমস্যা সমাধানের জন্য মঞ্চ"}, link: "https://www.gonitzoggo.com/" },
    { title: "arXiv Mathematics", type: {en: "Paper", bn: "পেপার"}, desc: {en: "Open access to preprints in Mathematics.", bn: "গণিতের গবেষণাপত্র বা প্রিপ্রিন্টের উন্মুক্ত ভাণ্ডার।"}, link: "https://arxiv.org/archive/math" },
    { title: "Numberphile", type: {en: "Video", bn: "ভিডিও"}, desc: {en: "Extensive discussion on some interesting topics in Mathematics.", bn: "গণিতের কিছু মজার বিষয় নিয়ে বিস্তর আলোচনা।"}, link: "https://www.numberphile.com/"},
    { title: "Computerphile", type: {en: "Video", bn: "ভিডিও"}, desc: {en: "Extensive discussion on some interesting topics in Computer Science.", bn: "কম্পিউটার বিজ্ঞানের মজার কিছু বিষয় নিয়ে বিস্তর আলোচনা।"}, link: "https://www.numberphile.com/"},
    { title: "GeoGebra", type: {en: "Tool", bn: "টুল"}, desc: {en: "Interactive mathematics software that combines geometry, algebra, statistics, and calculus visualization.", bn: "জ্যামিতি, বীজগণিত, পরিসংখ্যান ও কলনবিদ্যার দৃশ্যায়ন একত্রিত করে এমন মিথষ্ক্রিয়ামূলক গাণিতিক সফটওয়্যার।"}, link: "https://www.geogebra.org/" },
    { title: "Reducible", type: {en: "Video", bn: "ভিডিও"}, desc: {en: "All about animating computer science concepts in a fun, interactive, and intuitive manner.", bn: "কম্পিউটার বিজ্ঞানের ধারণাগুলোকে মজার, অংশগ্রহণভিত্তিক এবং সহজবোধ্যভাবে গতিশীল চিত্রের মাধ্যমে উপস্থাপন করা।"}, link: "https://www.youtube.com/@Reducible" },
    { title: "Chamok Hasan", type: {en: "Video", bn: "ভিডিও"}, desc: {en: "Represnting the entire beauty and arising love for Mathematics through interactive discussion", bn: "অনশগ্রহনভিত্তিক আলোচনার মাধ্যমে গণিতের সম্পূর্ণ সৌন্দর্য উপস্থাপন করা এবং গণিতের প্রতি ভালোবাসা জাগিয়ে তোলা।"}, link: "https://www.youtube.com/@ChamokHasan"},
    { title: "BdMO", type:{en: "Catalog", bn: "তালিকা"}, desc: {en: "Math Olmypiad Booklists and Resources", bn: "গণিত অলিম্পিয়াডের বইয়ের তালিকা ও উপকরণসমূহ"}, link: "https://matholympiad.org.bd/math-related-book-list"}
];

const ARTICLES = [
    {
        id: 101,
        title: { en: "The Infinite Hotel Paradox", bn: "অসীম হোটেলের প্যারাডক্স" },
        author: { en: "Md Radif Hasan", bn: "মোঃ রাদ্বীফ হাসান" },
        role: { en: "President", bn: "সভাপতি" },
        date: { en: "Nov 26, 2025", bn: "২৬ নভেম্বর, ২০২৫" },
        readTime: { en: "1 min read", bn: "১ মিনিট পাঠ" },
        desc: { 
            en: "Imagine a hotel with infinite rooms, all occupied. What happens when a new guest arrives?", 
            bn: "এমন একটি হোটেলের কথা চিন্তা করো যার কক্ষ সংখ্যা অসীম এবং সবগুলোই পূর্ণ। নতুন অতিথি এলে কি হবে?" 
        },
        image: "https://imgs.search.brave.com/eya5oUzh8bfOlXm79fOZbzgGjQYzYCovr_CWi1zfQRA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1tYW5hZ2VyLnN0/YXJzaW5zaWRlci5j/b20vZ2FsbGVyeS8x/MDgwL25hXzY3ZGFk/NGMyZjM0MzkuanBn",
        content: {
            en: `<p>Hilbert's paradox of the Grand Hotel is a thought experiment...</p>`,
            bn: `<p>হিলবার্টের গ্র্যান্ড হোটেলের প্যারাডক্স অসীম সেটের একটি অদ্ভুত বৈশিষ্ট্য তুলে ধরে।</p>`
        }
    },
    {
        id: 102,
        title: { en: "Number Theroy and Prime Number", bn: "সংখ্যাতত্ত্ব ও মৌলিক সংখ্যা" },
        author: { en: "Md Radif Hasan", bn: "মোঃ রাদ্বীফ হাসান" },
        role: { en: "President", bn: "সভাপতি" },
        date: { en: "Jan 13, 2026", bn: "১৩ জানুয়ারি, ২০২৬" },
        readTime: { en: "1 min read", bn: "১ মিনিট পাঠ" },
        desc: { en: "One of the most interesting topics for mathematicians and computer scientists.", bn: "গণিতবিদ ও কম্পিউটার বিজ্ঞানীদের অন্যতম সবচেয়ে আগ্রহের বিষয়বস্তু" },
        image: "https://plus.unsplash.com/premium_photo-1753191396890-bb83bf96fc3c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: {
            en: `<h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">How it Works</h2>
            <p class="mb-6">The Sieve of Eratosthenes finds all primes less than or equal to $n$. It iteratively marks the multiples of each prime number as composite (not prime), starting from $2$. The time complexity of this algorithm is $O(n \\log \\log n)$, making it incredibly fast.</p>
            
            <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">C Implementation</h2>
            <p class="mb-4">Here is the highlighted implementation written in C:</p>
            
            <div class="bg-slate-950 text-slate-100 p-6 rounded-xl my-6 font-mono text-sm overflow-x-auto whitespace-pre leading-relaxed shadow-lg">
<span class="text-amber-500">#include</span> <span class="text-emerald-400">&lt;stdio.h&gt;</span>
<span class="text-amber-500">#include</span> <span class="text-emerald-400">&lt;stdbool.h&gt;</span>
<span class="text-amber-500">#include</span> <span class="text-emerald-400">&lt;string.h&gt;</span>
<span class="text-sky-400">void</span> <span class="text-indigo-300">sieveOfEratosthenes</span>(<span class="text-sky-400">int</span> n) {
    <span class="text-slate-500">// Create a boolean array and initialize all entries as true.</span>
    <span class="text-sky-400">bool</span> prime[n + <span class="text-pink-400">1</span>];
    <span class="text-indigo-300">memset</span>(prime, <span class="text-sky-400">true</span>, <span class="text-sky-400">sizeof</span>(prime));
    <span class="text-sky-400">for</span> (<span class="text-sky-400">int</span> p = <span class="text-pink-400">2</span>; p * p &lt;= n; p++) {
        <span class="text-slate-500">// If prime[p] is not changed, then it is a prime</span>
        <span class="text-sky-400">if</span> (prime[p] == <span class="text-sky-400">true</span>) {
            <span class="text-slate-500">// Update all multiples of p greater than or equal to its square</span>
            <span class="text-sky-400">for</span> (<span class="text-sky-400">int</span> i = p * p; i &lt;= n; i += p)
                prime[i] = <span class="text-sky-400">false</span>;
        }
    }

    <span class="text-slate-500">// Print all prime numbers</span>
    <span class="text-indigo-300">printf</span>(<span class="text-emerald-400">"Prime numbers up to %d are:\\n"</span>, n);
    <span class="text-sky-400">for</span> (<span class="text-sky-400">int</span> p = <span class="text-pink-400">2</span>; p &lt;= n; p++) {
        <span class="text-sky-400">if</span> (prime[p]) {
            <span class="text-indigo-300">printf</span>(<span class="text-emerald-400">"%d "</span>, p);
        }
    }
    <span class="text-indigo-300">printf</span>(<span class="text-emerald-400">"\\n"</span>);
}

<span class="text-sky-400">int</span> <span class="text-indigo-300">main</span>() {
    <span class="text-sky-400">int</span> n = <span class="text-pink-400">50</span>;
    <span class="text-indigo-300">sieveOfEratosthenes</span>(n);
    <span class="text-sky-400">return</span> <span class="text-pink-400">0</span>;
}</div>`,
            bn: `<p>গণিতকে যদি বিজ্ঞানের রাণী বলা হয় তাহলে এই সংখ্যাতত্ত্বকে বলা হয় গণিতের রাণী। বর্তমান বিশ্বের যত প্রযুক্তি ও নিরাপত্তা ব্যবস্থা রয়েছে তার কেন্দ্রে রয়েছে এই সংখ্যাতত্ত্বের ব্যবহার। এমনকি এটিই গণিতরে সবচেয়ে প্রাচীন শাখা। প্রাচীন গ্রিস, ভারত, চীন ও মেসোপটেমিয়ার গণিতবিদরা হাজার হাজার বছর আগে থেকেই পূর্ণসংখ্যার (Integers) বিভিন্ন ধর্ম ও মৌলিক সংখ্যা নিয়ে চর্চা করে আসছেন। এমনকি বিখ্যাত গ্রীক গণিতবিদ ইউক্লিড (Euclid) খ্রিস্টপূর্ব ৩০০ অব্দেই মৌলিক সংখ্যার অসীমতার প্রমাণ দিয়েছিলেন।
            সংখ্যাতত্ত্বের (Number Theory) বিকাশে মুসলিম ও ভারতীয় গণিতবিদদের অবদান অত্যন্ত সুদূরপ্রসারী ও মৌলিক। তাঁদের আবিষ্কার ছাড়া আজকের আধুনিক গণিত ও ডিজিটাল প্রযুক্তি অসম্পূর্ণ থেকে যেত।
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ হিন্দু (প্রাচীন ও মধ্যযুগীয় ভারতীয়) গণিতবিদদের অবদান</h3>
        <p>ভারতীয় গণিতবিদদের সবচেয়ে বড় অবদান হলো পুরো গণিত শাস্ত্রের ভাষা বদলে দেওয়া।</p>
    <ol class="list-decimal list-inside space-y-3 text-gray-800">
        <li>
            <span class="font-medium">শূন্য ($0$) ও স্থানিক মান নীতি (Decimal Positional System):</span> 
            সংখ্যাতত্ত্বের ভিত্তি হলো সংখ্যা লেখার পদ্ধতি। ভারতীয় গণিতবিদরাই প্রথম শূন্য ($0$)-কে একটি স্বতন্ত্র সংখ্যা হিসেবে স্বীকৃতি দেন এবং ১০ ভিত্তিক স্থানিক মান পদ্ধতির পূর্ণাঙ্গ রূপ দেন, যা পুরো গণিতের গণনাকে সহজ করে তোলে।
        </li>
        <li>
            <span class="font-medium">আর্যভট্ট (৪৭৬–৫৫০ খ্রিস্টাব্দ):</span> 
            তিনি প্রথম রৈখিক ডায়োফ্যান্টাইন সমীকরণ ($ax + by = c$) সমাধানের জন্য "কুট্টক" (Kuttaka) নামক একটি অ্যালগরিদম তৈরি করেন, যা মডুলার অ্যারিথমেটিকের (Modular Arithmetic) একটি আদি ও অত্যন্ত শক্তিশালী রূপ।
        </li>
        <li>
            <span class="font-medium">ব্রহ্মগুপ্ত (৫৯৮–৬৬৮ খ্রিস্টাব্দ):</span> 
            তিনি ঋণাত্মক সংখ্যা (Negative numbers) এবং শূন্য দিয়ে গণনার সঠিক নিয়ম লিপিবদ্ধ করেন। এছাড়া, অনির্ণেয় দ্বিতীয় ঘাতের সমীকরণ (যা ভুলবশত পরে 'Pell's Equation' নামে পরিচিত হয়, $Nx^2 + 1 = y^2$) সমাধানের জন্য তিনি "ভাবনা" (Bhavana) নামক একটি সমাকলন পদ্ধতি আবিষ্কার করেন।
        </li>
        <li>
            <span class="font-medium">দ্বিতীয় ভাস্করাচার্য (১১১৪–১১৮৫ খ্রিস্টাব্দ):</span> 
            ব্রহ্মগুপ্তের কাজকে আরও একধাপ এগিয়ে নিয়ে তিনি "চক্রবাল পদ্ধতি" (Chakravala method) আবিষ্কার করেন। এটি Pell's Equation সমাধানের এমন এক অদ্বিতীয় পদ্ধতি ছিল, যা ইউরোপীয় গণিতবিদরা (যেমন ফার্মাট বা ল্যাগ্রাঞ্জ) তার প্রায় ৫০০ বছর পর সমাধান করতে পেরেছিলেন।
        </li>
    </ol>
</div>
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ মুসলিম (ইসলামিক স্বর্ণযুগ) গণিতবিদদের অবদান</h3>
    <p>ইসলামিক স্বর্ণযুগে (৮ম–১৪শ শতাব্দী) বাগদাদের বাইতুল হিকমাহ-কে কেন্দ্র করে মুসলিম গণিতবিদরা ভারতীয় ও গ্রীক গণিতকে একত্রিত করেন এবং সংখ্যাতত্ত্বে অভূতপূর্ব উন্নতি সাধন করেন।</p>
    <ol class="list-decimal list-inside space-y-3 text-gray-800">
        <li>
            <span class="font-medium">আল-খাওয়ারিজমি (৭৮০–৮৫০ খ্রিস্টাব্দ):</span> তাঁকে বীজগণিতের (Algebra) জনক বলা হয়। তিনি ভারতীয় দশমিক পদ্ধতি ও শূন্যের ব্যবহার নিয়ে 'কিতাব আল-জ্যাম ওয়া'ল-তাফরিক বি-হিসাব আল-হিন্দ' বইটি লেখেন। এই বইটির আরবি থেকে লাতিন অনুবাদের মাধ্যমেই ইউরোপীয়রা প্রথম আধুনিক সংখ্যা পদ্ধতির পরিচয় পায় (যাকে আজ 'Arabic Numerals' বলা হয়)।        
            </li>
        <li>
            <span class="font-medium">থাবিত ইবনে কুররা (৮২৬–৯০১ খ্রিস্টাব্দ):</span> 
সংখ্যাতত্ত্বের একটি অন্যতম সুন্দর শাখা হলো 'বন্ধুত্বপূর্ণ সংখ্যা' (Amicable Numbers)—এমন দুটি সংখ্যা যার একটির প্রকৃত উৎপাদকগুলোর যোগফল অন্যটির সমান হয়। থাবিত ইবনে কুররা এমন সংখ্যা জোড়া খুঁজে বের করার জন্য একটি সাধারণ উপপাদ্য (Thabit's Theorem) আবিষ্কার করেন, যা সংখ্যাতত্ত্বের ইতিহাসের অন্যতম মাইলফলক।        </li>
        <li>
            <span class="font-medium">আল-কারাজি (৯৫৩–১০২৯ খ্রিস্টাব্দ):</span> 
            তিনি সংখ্যাতত্ত্বে গাণিতিক আরোহ পদ্ধতি (Mathematical Induction)-র আদি রূপ ব্যবহার করেন এবং ১ থেকে $n$ পর্যন্ত ঘনসংখ্যার যোগফল ($1^3 + 2^3 + ... + n^3 = (1 + 2 + ... + n)^2$) প্রমাণ করেন।
        </li>
        <li>
            <span class="font-medium">ইবনে আল-হাইসাম (৯৬৫–১০৪০ খ্রিস্টাব্দ):</span> 
সংখ্যাতত্ত্বের অত্যন্ত গুরুত্বপূর্ণ "উইলসন উপপাদ্য" (Wilson's Theorem)—যা মৌলিক সংখ্যা (Prime numbers) শনাক্ত করতে ব্যবহৃত হয়—ইউরোপের জন উইলসন ১৭৭০ সালে দাবি করার বহু আগেই ইবনে আল-হাইসাম এটি সুস্পষ্টভাবে উল্লেখ ও প্রয়োগ করেছিলেন।        
       </li>
        <li>
            <span class="font-medium">কামালাদ্দীন আল-ফারিসি (১২৬৭–১৩১৯ খ্রিস্টাব্দ):</span> 
তিনি ইউক্লিডের মৌলিক সংখ্যা সংক্রান্ত তত্ত্বগুলোকে আরও সম্প্রসারিত করেন এবং গাণিতিক মৌলিক উপপাদ্যের (Fundamental Theorem of Arithmetic) প্রাথমিক রূপ প্রদান করেন, যেখানে বলা হয়—প্রতিটি যৌগিক সংখ্যাকে মৌলিক সংখ্যার অনন্য গুণফল হিসেবে প্রকাশ করা যায়।       </li>
    </ol>
</div>

এখন আসি এই সংখ্যাতত্ত্বে ব্যবহার প্রসঙ্গে। দীর্ঘদিন ধরে সংখ্যা তত্ত্বকে "বিশুদ্ধ গণিত" (Pure Mathematics) মনে করা হতো এবং বলা হতো এর কোনো বাস্তব বা বাণিজ্যিক ব্যবহার নেই। কিন্তু আধুনিক তথ্যপ্রযুক্তির যুগে সংখ্যা তত্ত্ব আমাদের দৈনন্দিন জীবনের সাথে ওতপ্রোতভাবে জড়িত এবং ব্যক্তিগত ও রাষ্ট্রীয় নিরাপত্তার মূল ভিত্তি হয়ে উঠেছে। একনজরে এর বাস্তব প্রয়োগ দেখা যাক- 

<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ সংখ্যাতত্ত্বের বাস্তব প্রয়োগ</h3>
    <ol class="list-decimal list-inside space-y-3 text-gray-800">
        <li>
সাইবার নিরাপত্তা ও ক্রিপ্টোগ্রাফি (Cryptography): আপনি যখন ইন্টারনেটে ব্যাংকিং লেনদেন করেন, হোয়াটসঅ্যাপে এনক্রিপ্টেড মেসেজ পাঠান বা কোনো পাসওয়ার্ড ব্যবহার করেন—তখন তার পেছনে কাজ করে RSA এনক্রিপশন algorithm। এটি পুরোপুরি বড় বড় মৌলিক সংখ্যা (Prime Numbers) এবং সংখ্যা তত্ত্বের মডুলার অ্যারিথমেটিকের (Modular Arithmetic) ওপর ভিত্তি করে তৈরি।            </li>
        <li>
কম্পিউটার সায়েন্স ও কোডিং থিওরি: ডেটা ট্রান্সমিশনের সময় যাতে কোনো তথ্য ভুল না হয়ে যায়, তা নিশ্চিত করতে "Error-correcting codes" ব্যবহার করা হয়, যা সংখ্যা তত্ত্বের ওপর নির্ভরশীল।
        <li>
      কম্পিউটার অ্যালগরিদম ও সুডো-র্যান্ডম নম্বর: লটারি, সিকিউরিটি কি (Key) তৈরি এবং গেম ডেভেলপমেন্টে র্যান্ডম সংখ্যা তৈরি করতে সংখ্যা তত্ত্বের সূত্র ব্যবহার করা হয়।
              </li>
        <li>
কোয়ান্টাম কম্পিউটিং ও সিস্টেম সিকিউরিটি: ভবিষ্যৎ প্রজন্মের দ্রুতগতির কম্পিউটারের সিকিউরিটি প্রোটোকল ডিজাইনে এটি ব্যাপকভাবে ব্যবহৃত হচ্ছে।      
</li>
    </ol>
</div>
এখন এই সংখ্যাতত্ত্ব বা এর সূত্রগুলো যদি আমরা আবিষ্কার বা ব্যবহার না করতাম, তবে আমাদের আধুনিক ও ডিজিটাল পৃথিবী আজীবনের জন্য থমকে যেত:
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ সংখ্যা তত্ত্ব ব্যবহৃত না হলে কী হতো?</h3>
    <ol class="list-decimal list-inside space-y-3 text-gray-800">
        <li>
কোনো নিরাপদ ইন্টারনেট সার্ভিস থাকত না: কোনো ই-কমার্স, অনলাইন ব্যাংকিং, বা গোপনীয় মেসেজিং সার্ভিস তৈরি করা সম্ভব হতো না। ক্রেডিট কার্ডের তথ্য বা পাসওয়ার্ড খোলা অবস্থায় ইন্টারনেটে আদান-প্রদান হতো, যা যে কেউ চুরি করতে পারত।
        <li>
সাইবার স্পেসে প্রাইভেসি শূন্য হয়ে যেত: ডিজিটাল ফাইল এনক্রিপ্ট করার কোনো উপায় থাকত না, ফলে সামরিক, সরকারি এবং ব্যক্তিগত যেকোনো ডিজিটাল তথ্য সহজেই হ্যাক হয়ে যেত।
        <li>
ডিজিটাল অর্থনীতি অচল হয়ে যেত: আজকের গ্লোবাল অনলাইন ট্রেড, ডিজিটাল কারেন্সি বা অনলাইন শপিং নেটওয়ার্ক এনক্রিপশন ছাড়া কাজই করতে পারত না।
              </li>
        <li>
কম্পিউটিং বিজ্ঞানের অগ্রগতি বাধাগ্রস্ত হতো: ডেটা কম্প্রেশন, নেটওয়ার্কিং প্রোটোকল এবং সুনির্দিষ্ট দ্রুত অ্যালগরিদম তৈরির পথ রুদ্ধ হয়ে যেত।
</li>
    </ol>
</div>
তাই সংখ্যাতত্ত্বকে বৃথা গণিতের "রাণী" (Queen of Mathematics) বলা হয় না—আজকের আধুনিক ডিজিটাল যুগ নিরাপদ রাখার নেপথ্য কারিগর এই সংখ্যার খেলা। <br>
<p>এবার আমরা আসল জায়গায় প্রবেশ করব, অর্থাৎ সংখ্যাতত্ত্বের দুনিয়ায়। সত্যিকথা বলতে এই সংখ্যাতত্ত্বের শাখাটা অনেক বড়। এক লেখায় একে চেনানো অনেক কঠিন এবং আমার নিজেরও জ্ঞানের স্বল্পতা রয়েছে। সহজে বোধগম্য হয় এবং আশেপাশে যেই বাস্তব প্রয়োগ গুলো রয়েছে আমরা এখন সেগুলো নিয়ে কথা বলবো। 
<br>সংখ্যাতত্ত্ব বা নাম্বার থিউরির (Number Theory) প্রাথমিক পাঠ মূলত শুরু হয় গণনার মৌলিক একক বা স্বাভাবিক সংখ্যা $\\mathbb{N} = \\{1, 2, 3, 4, \\dots\\}$ এবং তাদের মধ্যে গাণিতিক সম্পর্ক স্থাপন করার মাধ্যমে।
</p> 

<h1 class="text-2xl font-bold mb-4">⧉ অখণ্ড সংখ্যা ও পেয়ানো স্বীকার্য (Peano Axioms)</h1>
সংখ্যাতত্ত্বের মূল আলোচ্য বিষয় বা ভিত্তিই হলো অখণ্ড সংখ্যার সেট $\\mathbb{Z} = \\{\\dots, -2, -1, 0, 1, 2, \\dots\\}$। গণিতের ইতিহাসে পেয়ানো স্বীকার্য (Peano Axioms) হলো একটি যুগান্তকারী মাইলফলক। প্রথম দর্শনে $1, 2, 3 \\dots$ বা স্বাভাবিক সংখ্যাকে এত সহজ ও স্বতঃসিদ্ধ মনে হলেও, গণিতবিদদের কাছে বড় প্রশ্ন ছিল: "আমরা কীভাবে নিশ্চিত হবো যে পুরো গণিত যে সংখ্যার ওপর দাঁড়িয়ে আছে, তার ভিত্তিটা গাণিতিকভাবে শতভাগ নিখুঁত?" ১৮৮৯ সালে ইতালীয় গণিতবিদ জুসেপ্পে পেয়ানো (Giuseppe Peano) নিচের স্বীকার্যগুলো প্রদান করেন-
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <ol class="list-decimal list-inside space-y-3 text-gray-800">
        <li><span class="font-medium">সূচনা:</span> $1$ একটি স্বাভাবিক সংখ্যা ($1 \\in \\mathbb{N}$)।</li>
        <li><span class="font-medium">অনুসূরী বা Successor:</span> প্রতিটি স্বাভাবিক সংখ্যা $n$ এর একটি অনন্য অনুসূরী $S(n)$ থাকে (যেমন: $S(1) = 2$)।</li>
        <li><span class="font-medium">প্রারম্ভিক রূপ:</span> $1$ কোনো স্বাভাবিক সংখ্যার অনুসূরী নয়।</li>
        <li><span class="font-medium">একক রূপ:</span> যদি $S(a) = S(b)$ হয়, তবে $a = b$।</li>
       <li><span class="font-medium">গাণিতিক আরোহ নীতি (Mathematical Induction):</span> যদি কোনো সেট $K \\subseteq \\mathbb{N}$ এমন হয় যে $1 \\in K$, এবং যেকোনো $k \\in K$ এর জন্য $S(k) \\in K$ হয়, তবে $K = \\mathbb{N}$।</li>
</ol>
</div>
এখানে 'অনুসূরী' (বা গাণিতিক পরিভাষায় Successor) কথাটির সহজ অর্থ হলো—"পরবর্তী সংখ্যা" বা "ঠিক পরেরটি"।সংখ্যাতত্ত্ব বা গণিতের ভাষায়, যেকোনো একটি সংখ্যাকে যদি $n$ ধরা হয়, তবে তার ঠিক পরবর্তী সংখ্যা $n + 1$ হলো তার অনুসূরী (Successor)। যেমনঃ $1$ এর অনুসূরী হলো $2$ (কারণ $1 + 1 = 2$)। $5$ এর অনুসূরী হলো $6$। তাহলে $n$ এর অনুসূরীকে সাধারণত $S(n)$ দিয়ে প্রকাশ করা হয়, অর্থাৎ $S(n) = n + 1$। 
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ পেয়ানো স্বীকার্যের গুরুত্ব (Significance in Mathematics)</h3>
    <ol class="list-decimal list-inside space-y-3 text-gray-800">
        <li>
<span class="font-medium">গণিতের ভিত্তিমূলকে শক্তিশালী করা (Rigorous Foundation of Mathematics): </span>উনবিংশ শতাব্দীর শেষভাগে গণিতবিদরা উপলব্ধি করেন যে প্রমাণের সূক্ষ্মতা রক্ষা করতে হলে গণিতের ভিত্তিকে স্বতঃসিদ্ধ বা স্বীকার্য (Axioms) দিয়ে বাঁধতে হবে। পেয়ানো স্বীকার্য পাটিগণিত ও সংখ্যাতত্ত্বকে একটি নিরেট ভিত্তির ওপর দাঁড় করায়।
        <li>
<span class="font-medium">গাণিতিক আরোহ নীতির (Mathematical Induction) জন্ম: </span>পেয়ানো স্বীকার্যের ৫ম নম্বর নিয়মটি হলো গাণিতিক আরোহ নীতি। সংখ্যাতত্ত্ব, বীজগণিত ও অলিম্পিয়াডের অগণিত গাণিতিক উক্তি ($1 + 2 + \\dots + n = \\frac{n(n+1)}{2}$) অসীম সংখ্যক সংখ্যার জন্য সত্য কিনা, তা প্রমাণের একমাত্র শক্তিশালী হাতিয়ার হলো এই নীতি।
        <li>
<span class="font-medium">কম্পিউটার সায়েন্স ও প্রোগ্রামিংয়ে প্রয়োগ: </span>আধুনিক কম্পিউটার সায়েন্সে রিকার্শন (Recursion) এবং ফাংশনাল প্রোগ্রামিং (Functional Programming)-এর ধারণা পেয়ানো স্বীকার্যের 'অনুসূরী' (Successor) ও আরোহী কাঠামোর ওপর সরাসরি নির্ভরশীল। ডেটা স্ট্রাকচারে ব্যবহৃত 'লিঙ্কড লিস্ট' (Linked List) বা প্রাকৃতিক সংখ্যার টাইপ সিস্টেম (যেমন Haskell বা Coq ভাষায়) পেয়ানো পাটিগণিতের নিয়মেই রূপায়িত হয়।
        <li>
<span class="font-medium">আধুনিক যুক্তিশাস্ত্র ও অটোমেটেড প্রুফ (Formal Logic & Proof Assistants): </span>কম্পিউটার দিয়ে কোনো গাণিতিক প্রমাণ সঠিক কিনা পরীক্ষা করার জন্য (যেমন Lean, Coq প্রুফ এসিস্ট্যান্ট) গণিতকে একেবারে মৌলিক স্বীকার্যে ভাঙতে হয়। পেয়ানো স্বীকার্য এ ধরনের যুক্তিনির্ভর গাণিতিক মডেলের মূল নিয়ামক।
    </ol>
</div>
<h1 class="text-2xl font-bold mb-4">⧉ বিভাজ্যতা (Divisbility)</h1>

বিভাজ্যতা খুবই সহজ একটা বিষয়। আমরা ছোটো থেকেই এটার সাথে পরিচিত। তবে এখন নতুন করে যেভাবে তাত্ত্বিক কচকচানিতে যাব সেভাবে না। আমরা ছোটোবেলায় ৬ কে ২ দিয়ে ভাগ করলে কত হয় বা ১০১ কে ২ দিয়ে ভাগ করলে কত অবশিষ্ট থাকে করে এসেছি। এখন আমরা আরেকটু গুছিয়ে বিষয়গুলো কিভাবে কাজ করে সেটা দেখবো। 

<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ বিভাজ্যতার গুরুত্বপূর্ণ ধর্মসমূহ (Key Properties)</h3>
    <ol class="list-decimal list-inside space-y-4 text-gray-800">
        <li>
            <span class="font-medium">রেফ্লেক্সিভ ও ট্রানজিটিভ ধর্ম (Reflexive & Transitive):</span>
            <ul class="list-disc list-inside ml-5 mt-2 space-y-1">
                <li>$a \\mid a$ (যেকোনো $a \\neq 0$ এর জন্য)</li>
                <li>যদি $a \\mid b$ এবং $b \\mid c$ হয়, তবে $a \\mid c$</li>
            </ul>
        </li>
        <li>
            <span class="font-medium">লিনিয়ার কম্বিনেশন (Linear Combination):</span>
            <ul class="list-disc list-inside ml-5 mt-2 space-y-1">
                <li>
                    যদি $a \\mid b$ এবং $a \\mid c$ হয়, তবে যেকোনো পূর্ণসংখ্যা $x, y$ এর জন্য:
                    <div class="my-1">\\[a \\mid (bx + cy)\\]</div>
                </li>
            </ul>
        </li>
        <li>
            <span class="font-medium">গুণফল এবং বিভাজ্যতা:</span>
            <ul class="list-disc list-inside ml-5 mt-2 space-y-1">
                <li>যদি $a \\mid b$ হয়, তবে যেকোনো পূর্ণসংখ্যা $c$ এর জন্য $a \\mid bc$</li>
            </ul>
        </li>
        <li>
            <span class="font-medium">সীমা সংক্রান্ত ধর্ম (Boundedness):</span>
            <ul class="list-disc list-inside ml-5 mt-2 space-y-1">
                <li>যদি $a \\mid b$ এবং $b \\neq 0$ হয়, তবে $|a| \\le |b|$</li>
            </ul>
        </li>
        <li>
            <span class="font-medium">উভয়মুখী বিভাজ্যতা:</span>
            <ul class="list-disc list-inside ml-5 mt-2 space-y-1">
                <li>যদি $a \\mid b$ এবং $b \\mid a$ হয়, তবে $a = \\pm b$</li>
            </ul>
        </li>
        <li>
            <span class="font-medium">সহ-মৌলিক বা প্রাইম সংখ্যা সংক্রান্ত (Coprime Properties):</span>
            <ul class="list-disc list-inside ml-5 mt-2 space-y-2">
                <li>
                    যদি $a \\mid bc$ হয় এবং $\\gcd(a, b) = 1$ (অর্থাৎ $a$ ও $b$ সহ-মৌলিক) হয়, তবে:
                    <div class="my-1">\\[a \\mid c\\]</div>
                </li>
                <li>
                    যদি $a \\mid n$ এবং $b \\mid n$ হয়, যেখানে $\\gcd(a, b) = 1$, তবে:
                    <div class="my-1">\\[ab \\mid n\\]</div>
                </li>
            </ul>
        </li>
    </ol>
</div>
এই ধর্মগুলো বোঝার জন্য সবচেয়ে ভালো হয় বিভিন্ন সংখ্যা নিয়ে পরীক্ষা করা। এখন অংক ভিত্তিক বিভাজ্যতার কিছু ধর্ম বা নিয়ম দেখা যাক- 
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-2">⧉ অংক ভিত্তিক বিভাজ্যতার নিয়ম (Digit-based Divisibility Rules)</h3>
    
    <p class="mb-4 text-gray-800">
        ধরি, $N$ একটি $k$-অঙ্কের সংখ্যা, যাকে লেখা যায়: 
        \\[N = (a_k a_{k-1} \\dots a_1 a_0)_{10} = \\sum_{i=0}^{k} a_i 10^i\\]
    </p>

    <ol class="list-decimal list-inside space-y-4 text-gray-800">
        <li>
            <span class="font-medium">$2, 4, 8, 2^m$ এর বিভাজ্যতা:</span>
            <ul class="list-disc list-inside ml-5 mt-2 space-y-2">
                <li>
                    $2 \\mid N \\iff 2 \\mid a_0$ (শেষ অঙ্ক জোড়)
                </li>
                <li>
                    $4 \\mid N \\iff 4 \\mid (10a_1 + a_0)$ (শেষ দুই অঙ্ক দ্বারা গঠিত সংখ্যা $4$ দিয়ে বিভাজ্য)
                </li>
                <li>
                    $2^m \\mid N \\iff 2^m \\mid$ শেষ $m$ টি অঙ্ক দ্বারা গঠিত সংখ্যা
                </li>
            </ul>
        </li>

        <li>
            <span class="font-medium">$3$ ও $9$ এর বিভাজ্যতা:</span>
            <ul class="list-disc list-inside ml-5 mt-2 space-y-2">
                <li>
                    $3 \\mid N \\iff 3 \\mid (a_0 + a_1 + \\dots + a_k)$ (অঙ্কগুলোর যোগফল $3$ দিয়ে বিভাজ্য)
                </li>
                <li>
                    $9 \\mid N \\iff 9 \\mid (a_0 + a_1 + \\dots + a_k)$ (অঙ্কগুলোর যোগফল $9$ দিয়ে বিভাজ্য)
                </li>
            </ul>
        </li>

        <li>
            <span class="font-medium">$11$ এর বিভাজ্যতা:</span>
            <ul class="list-disc list-inside ml-5 mt-2 space-y-2">
                <li>
                    $11 \\mid N \\iff 11 \\mid (a_0 - a_1 + a_2 - a_3 + \\dots)$ (জোড় ও বিজোড় স্থানের অঙ্কগুলোর অল্টারনেটিং যোগফল $11$ দিয়ে বিভাজ্য)
                </li>
            </ul>
        </li>
    </ol>
</div>
এখন বাংলাদেশ গণিত অলিম্পিয়াডের আঞ্চলিক ও জাতীয় পর্যায়ে আসা কিছু সমস্যার সমাধান করা যাক- 
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ এমন সব ধনাত্মক পূর্ণসংখ্যা $n$ নির্ণয় করো যেন $(n + 1)$ দ্বারা $(n^2 + 1)$ বিভাজ্য হয়।
অর্থাৎ, $(n + 1) \\mid (n^2 + 1)$</h3>
 আমরা জানি, লিনিয়ার কম্বিনেশন ধর্ম অনুযায়ী যদি $a \\mid b$ হয়, তবে $a \\mid (b - k \\cdot a)$ হবে। এখানে দেওয়া আছে:$$(n + 1) \\mid (n^2 + 1)$$আমরা $n^2 + 1$ কে লিখতে পারি:$$n^2 + 1 = (n^2 - 1) + 2 = (n - 1)(n + 1) + 2$$যেহেতু $(n + 1) \\mid (n - 1)(n + 1)$ সর্বদাই সত্য, তাই বিভাজ্যতার নিয়ম অনুযায়ী:$$(n + 1) \\mid \\Big((n^2 + 1) - (n - 1)(n + 1)\\Big)$$$$\\implies (n + 1) \\mid 2$$$2$ এর ধনাত্মক উৎপাদকগুলো হলো $1$ এবং $2$।<br>১. যদি $n + 1 = 1$ হয় $\\implies n = 0$ (কিন্তু $n$ ধনাত্মক পূর্ণসংখ্যা চাওয়া হয়েছে, তাই $n=0$ গ্রহণযোগ্য নয়)।<br>২. যদি $n + 1 = 2$ হয় $\\implies n = 1$।<br>সুতরাং, একমাত্র সমাধান হলো $n = 1$
 </div>
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ প্রমাণ করো যে, যেকোনো বিজোড় ধনাত্মক পূর্ণসংখ্যা $n$ এর জন্য $8 \\mid (n^2 - 1)$</h3>
যেহেতু $n$ একটি বিজোড় সংখ্যা, তাই $n$ কে লেখা যায় $n = 2k + 1$ আকারে, যেখানে $k$ একটি অঋণাত্মক পূর্ণসংখ্যা ($k \\ge 0$)। এখন,$$n^2 - 1 = (2k + 1)^2 - 1$$$$= (4k^2 + 4k + 1) - 1$$$$= 4k^2 + 4k = 4k(k + 1)$$লক্ষ্য করো, $k(k + 1)$ হলো দুটি পরপর পূর্ণসংখ্যার গুণফল। আমরা জানি যেকোনো দুটি পরপর পূর্ণসংখ্যার একটি অবশ্যই জোড় (অর্থাৎ $2$ দ্বারা বিভাজ্য)। সুতরাং, $k(k + 1) = 2m$ (যেখানে $m$ একটি পূর্ণসংখ্যা)। তাহলে,$$n^2 - 1 = 4 \\cdot (2m) = 8m$$যেহেতু $n^2 - 1 = 8m$, তাই $8 \\mid (n^2 - 1)$। (প্রমাণিত) 
</div>

<h1 class="text-2xl font-bold mb-4">⧉ ভাগ প্রক্রিয়ার অ্যালগরিদম (Division Algorithm)</h1>
আমরা প্রাথমিক বিদ্যালয়ে যে ভাগ অংক শিখে এসেছি—"ভাজ্য = ভাজক × ভাগফল + ভাগশেষ"—সংখ্যাতত্ত্বে এটিকেই আনুঠানিক রূপ দেওয়া হয়েছে ভাগ প্রক্রিয়ার অ্যালগরিদম হিসেবে।
যেকোনো দুটি পূর্ণসংখ্যা $a$ (ভাজ্য) এবং $b$ (ভাজক, যেখানে $b > 0$) এর জন্য অনন্য (unique) দুটি পূর্ণসংখ্যা $q$ (ভাগফল বা Quotient) এবং $r$ (ভাগশেষ বা Remainder) বিদ্যমান থাকবে, যেখানে $$a = b \\cdot q + r$$ যেন $0 \\le r < b$ হয়। 
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ গুরুত্বপূর্ণ বিষয়সমূহ:</h3>
    <ol class="list-decimal list-inside space-y-3 text-gray-800">
        <li><span class="font-medium">ভাগশেষের সীমা ($0 \\le r < b$:</span> ভাগশেষ সর্বদাই অঋণাত্মক হবে এবং তা ভাজক ($b$) এর চেয়ে ছোট হবে।</li>
        <li><span class="font-medium">অনন্যতা (Uniqueness):</span> নির্দিষ্ট $a$ এবং $b$ এর জন্য $q$ ও $r$ এর জোড়া একটি এবং কেবল একটিই হতে পারে।</li>
        <li><span class="font-medium">বিশেষ ক্ষেত্র ($r = 0$):</span> যদি ভাগশেষ $r = 0$ হয়, তবে $a = b \\cdot q$ হয়। এর অর্থ হলো $b$ দ্বারা $a$ নিঃশেষে বিভাজ্য (যাকে লেখা হয় $b \\mid a$)। উদাহরণ: যদি $a = 17$ এবং $b = 5$ হয়, তবে:$$17 = 5 \\cdot 3 + 2$$এখানে ভাগফল $q = 3$ এবং ভাগশেষ $r = 2$, যা শর্ত $0 \\le 2 < 5$ মেনে চলে।</li>
     </ol>
</div>
<h1 class="text-2xl font-bold mb-4">⧉ গরিষ্ঠ সাধারণ গুণনীয়ক বা গসাগু (Greatest Common Divisor - GCD)</h1>
দুটি সংখ্যার মধ্যে সবচেয়ে বড় যে সাধারণ গুণনীয়ক থাকে, তাকে GCD বলা হয়। যেমন: $\\gcd(12, 18) = 6$। তাহলে $a$ এবং $b$ দুটি পূর্ণসংখ্যা (যেখানে অন্তত একটি শূন্য নয়) হলে এদের গসাগু-কে লেখা হয় $\\gcd(a, b)$ অথবা সংক্ষেপে $(a, b)$ দিয়ে। একটি সংখ্যা $d = \\gcd(a, b)$ হবে যদি এবং কেবল যদি তা নিচের দুটি শর্ত পূরণ করে:
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <ol class="list-decimal list-inside space-y-3 text-gray-800">
        <li><span class="font-medium">সাধারণ উৎপাদক (Common Divisor):</span> $d \\mid a$ এবং $d \\mid b$ (অর্থাৎ $d$ দ্বারা $a$ এবং $b$ উভয়ই বিভাজ্য)।</li>
        <li><span class="font-medium">গরিষ্ঠতা (Greatest):</span> যদি অন্য যেকোনো সংখ্যা $c$ এর জন্য $c \\mid a$ এবং $c \\mid b$ হয়, তবে $c \\le d$ (অথবা বিভাজ্যতার ভাষায় $c \\mid d$)।</li>
     </ol>
</div>
আবার যদি দুটি সংখ্যার $\\gcd = 1$ হয়, তবে তাদের বলা হয় সহ-মৌলিক (Co-prime বা Relatively Prime)। যেমন: $\gcd(8, 15) = 1$, তাই $8$ ও $15$ সহ-মৌলিক (যদিও কেউই মৌলিক সংখ্যা নয়)। এখন চট করে গণিত অলিম্পিয়াডের একটি প্রশ্ন সমাধান করা যাক। 
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ প্রমাণ করো যে, যেকোনো ধনাত্মক পূর্ণসংখ্যা $n$ এর জন্য $n^3 - n$ সংখ্যাটি সবসময় $6$ দ্বারা বিভাজ্য</h3>
    আমরা জানি $6 = 2 \\times 3$ এবং $\\gcd(2, 3) = 1$। তাই $6 \\mid (n^3 - n)$ প্রমাণ করতে হলে আমাদের দেখাতে হবে $2 \\mid (n^3 - n)$ এবং $3 \\mid (n^3 - n)$।
    রাশিটিকে উৎপাদকে বিশ্লেষণ করি:$$n^3 - n = n(n^2 - 1) = n(n-1)(n+1)$$এটি তিনটি পরপর পূর্ণসংখ্যার গুণফল।<br>১. তিনটি পরপর সংখ্যার মধ্যে অন্তত একটি জোড় সংখ্যা থাকবেই। সুতরাং, $2 \\mid n(n-1)(n+1)$<br>২. তিনটি পরপর সংখ্যার মধ্যে ঠিক একটি সংখ্যা অবশ্যই $3$ দ্বারা বিভাজ্য হবে। সুতরাং, $3 \\mid n(n-1)(n+1)$<br>যেহেতু $\\gcd(2, 3) = 1$, তাই $2 \\times 3 = 6 \\mid n(n-1)(n+1)$। (প্রমাণিত)
</div>
<h1 class="text-2xl font-bold mb-4">⧉ ইউক্লিডীয় অ্যালগরিদম (Euclidean Algorithm)</h1>
আমরা সাধারণভাবে যেই অ্যালগরিদম ব্যবহার করে গসাগু বের করি সেটা ছোটো সংখ্যার ক্ষেত্রে খুব কার্যকরভাবে কাজ করলেও বড় সংখ্যার ক্ষেত্রে খুবই সময়সাপেক্ষ এবং পরিশ্রমসাধ্য। খ্রিষ্টপুর্ব ৩০০ অব্দে গ্রিক গণিতবিদ ইউক্লিড একটি চমৎকার পদ্ধতির আবিষ্কার করলেন। তিনি দেখলেন বড় দুটি সংখ্যার GCD খুব দ্রুত বের করার উপায় হলো ক্রমাগত ভাগ করে যাওয়া যতক্ষণ না ভাগশেষ শূন্য হচ্ছে। অর্থাৎ $$a = bq + r \\implies \\gcd(a, b) = \\gcd(b, r)$$ 
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ কাজের পদ্ধতি (Step-by-Step Algorithm):</h3>
    <ol class="list-decimal list-inside space-y-3 text-gray-800">
        <li>
বড় সংখ্যাটিকে $a$ এবং ছোট সংখ্যাটিকে $b$ ধরি।
        <li>
 $a$ কে $b$ দ্বারা ভাগ করে ভাগশেষ $r$ বের করি ($a = bq + r$)।
         <li>
 যদি $r = 0$ হয়, তবে $b$-ই হলো নির্ণেয় গসাগু।
               </li>
        <li>
আর যদি $r > 0$ হয়, তবে $a \\leftarrow b$ এবং $b \\leftarrow r$ দিয়ে প্রতিস্থাপন করি এবং ধাপ $2$ পুনরাবৃত্তি করি।
</li>
    </ol>
</div>
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ একটি পূর্ণাঙ্গ উদাহরণ:  $\\gcd(252, 105)$</h3>
    <ol class="list-decimal list-inside space-y-3 text-gray-800">
        <li>
$252$ কে $105$ দিয়ে ভাগ করি:$$252 = 105 \\cdot 2 + 42 \\implies r_1 = 42$$        
(যেহেতু ভাগশেষ $42 \\neq 0$, তাই $\\gcd(252, 105) = \\gcd(105, 42)$)
        </li>
<li>
এখন $105$ কে $42$ দিয়ে ভাগ করি: $$105 = 42 \\cdot 2 + 21 \\implies r_2 = 21$$
(যেহেতু ভাগশেষ $21 \\neq 0$, তাই $\\gcd(105, 42) = \\gcd(42, 21)$)
</li>
         <li>
এখন $42$ কে $21$ দিয়ে ভাগ করি:$$42 = 21 \\cdot 2 + 0 \\implies r_3 = 0$$
যেহেতু এই ধাপে ভাগশেষ $0$ চলে এসেছে, তাই এই ধাপের ভাজক $21$-ই হলো নির্ণেয় গসাগু।
</li>
$$\\therefore \\gcd(252, 105) = 21$$
    </ol>
</div>
<p class="mb-4">সি ল্যাঙ্গুয়েজে প্রয়োগ:</p>
<div class="bg-slate-950 text-slate-100 p-6 rounded-xl my-6 font-mono text-sm overflow-x-auto whitespace-pre leading-relaxed shadow-lg">
<span class="text-amber-500">#include</span> <span class="text-emerald-400">&lt;stdio.h&gt;</span>
<span class="text-sky-400">int</span> <span class="text-indigo-300">gcd</span>(<span class="text-sky-400">int</span> a, <span class="text-sky-400">int</span> b) {
    <span class="text-sky-400">while</span> (b != <span class="text-pink-400">0</span>) {
        <span class="text-sky-400">int</span> temp = b;
        b = a % b;
        a = temp;
    }
    <span class="text-sky-400">return</span> a;
}
<span class="text-sky-400">int</span> <span class="text-indigo-300">main</span>(<span class="text-sky-400">void</span>) {
    <span class="text-sky-400">int</span> a, b;
    <span class="text-indigo-300">scanf</span>(<span class="text-emerald-400">"%d %d"</span>, &amp;a, &amp;b);
    <span class="text-indigo-300">printf</span>(<span class="text-emerald-400">"GCD %d\\n"</span>, <span class="text-indigo-300">gcd</span>(a, b));
    <span class="text-sky-400">return</span> <span class="text-pink-400">0</span>;
}</div>
<h1 class="text-2xl font-bold mb-4">⧉ বেজুটের অভেদ (Bézout's Identity) এবং Extended Euclidean Algorithm</h1>
এক্সটেন্ডেড ইউক্লিডীয় অ্যালগরিদম (Extended Euclidean Algorithm) মূলত বেজুটের অভেদ (Bézout's Identity) অনুযায়ী $ax + by = \\gcd(a, b)$ সমীকরণের $x$ ও $y$ সহগদ্বয়ের মান নির্ণয় করতে ব্যবহৃত হয়। যেকোনো দুটি সংখ্যা $a$ এবং $b$-এর GCD কে সবসময় $a$ এবং $b$-এর সাথে দুটি পূর্ণসংখ্যা ($x$ এবং $y$) গুণ করে যোগফল আকারে প্রকাশ করা যায়:$$ax + by = \\gcd(a, b)$$যেমন: $a = 212$ এবং $b = 42$ হলে, তাদের $\\gcd = 2$। আমরা এটি এভাবে লিখতে পারি:$$212 \\times (-1) + 42 \\times 5 = -212 + 210 = -2$$ চিহ্ন ঠিক রেখে $x=-1, y=5$
নিচে এটি কীভাবে সমাধান তৈরি করে তার পূর্ণাঙ্গ গাণিতিক ব্যাখ্যা দেওয়া হলো-
<h3 class="font-semibold text-lg mb-4">গাণিতিক কৌশল (The Core Idea)</h3>

সাধারণ ইউক্লিডীয় অ্যালগরিদমে আমরা বিভাজ্যতার ধাপে ধাপে এগোই:$$a = b \\cdot q + r \\implies r = a - b \\cdot q$$যেখানে $q = \\lfloor a / b \\rfloor$ (ভাগফল) এবং $r = a \\bmod b$ (ভাগশেষ)। ধরি, পরবর্তী ধাপে $b$ এবং $r$ এর জন্য আমরা $x_1$ ও $y_1$ পেয়ে গেছি যেন:$$b \\cdot x_1 + r \\cdot y_1 = \\gcd(a, b)$$এখন $r$ এর মান বসিয়ে পাই:$$b \\cdot x_1 + (a - b \\cdot q) \\cdot y_1 = \\gcd(a, b)$$$$a \\cdot y_1 + b \\cdot (x_1 - q \\cdot y_1) = \\gcd(a, b)$$মূল সমীকরণ $a x + b y = \\gcd(a, b)$ এর সাথে সহগ তুলনা করলে আমরা পরবর্তী ও পূর্ববর্তী ধাপের সম্পর্ক (Recurrence Formula) পেয়ে যাই:$$\\begin{aligned} x &= y_1 \\ y &= x_1 - \\lfloor a / b \\rfloor \\cdot y_1 \\end{aligned}$$
<h3 class="font-semibold text-lg mb-4">বেস কেস (Base Case)</h3>
ভাগ করতে করতে ইউক্লিডীয় অ্যালগরিদমের শেষ ধাপে যখন ভাজক $b = 0$ হয়ে যায়, তখন:$$\\gcd(a, 0) = a$$এই সময়ে সমীকরণ দাঁড়ায় $a \\cdot x + 0 \\cdot y = a$।কাজেই বেস কেসের সমাধান হলো:$$x = 1, \\quad y = 0$$এরপরে অ্যালগরিদমটি রিকার্সিভলি (বা উল্টো ধাপে) গিয়ে মূল $a$ ও $b$ এর জন্য $x$ এবং $y$ এর চূড়ান্ত সমাধান নিশ্চিত করে।
এখন একটি উদাহরণের মাধ্যমে বিষয়টি স্পষ্ট করা যাক- 
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ $a = 120$ এবং $b = 35$ এর জন্য $120x + 35y = \\gcd(120, 35)$ সমীকরণের একটি পূর্ণসংখ্যা সমাধান $(x, y)$ বের করো।</h3>
    <ol class="list-decimal list-inside space-y-3 text-gray-800">
        <li>
ইউক্লিডীয় অ্যালগরিদমের মাধ্যমে ভাগশেষ ও গসাগু বের করা (Forward Path)<br>১. $120 = 35 \\cdot 3 + 15 \\quad (q_1 = 3, r_1 = 15)$<br>২. $35 = 15 \\cdot 2 + 5 \\quad (q_2 = 2, r_2 = 5)$<br>৩. $15 = 5 \\cdot 3 + 0 \\quad (q_3 = 3, r_3 = 0)$<br>যেহেতু ভাগশেষ $0$ চলে এসেছে, তাই নির্ণেয় গসাগু $\\gcd(120, 35) = 5$।        
     </li>
     <li>
ব্যাক-সাবস্টিটিউশন বা উল্টো মান বসানো (Back Substitution)এখন আমরা শেষ অ-শূন্য ভাগশেষ $5$ এর সমীকরণ থেকে উল্টো দিকে সমীকরণ সাজাবো:<br>১. দ্বিতীয় ধাপে প্রাপ্ত সমীকরণ থেকে $5$ কে আলাদা করি:$$5 = 35 - 15 \\cdot 2$$<br>২. প্রথম ধাপে প্রাপ্ত সমীকরণ থেকে $15 = 120 - 35 \\cdot 3$ মানটি নিয়ে উপরের সমীকরণে $15$ এর জায়গায় বসাই:$$5 = 35 - (120 - 35 \\cdot 3) \\cdot 2$$$$5 = 35 - 120 \\cdot 2 + 35 \\cdot 6$$$$5 = 120 \\cdot (-2) + 35 \\cdot (1 + 6)$$$$5 = 120 \\cdot (-2) + 35 \\cdot 7$$<br>ফলাফল:সমীকরণটি দাঁড়ালো:$$120 \\cdot (-2) + 35 \\cdot 7 = 5$$যেহেতু $120x + 35y = 5$, তাই সমাধান হলো: $$\\begin{aligned} x &= -2 \\ y &= 7 \\end{aligned}$$যাচাই: $120 \\times (-2) + 35 \\times 7 = -240 + 245 = 5$
         </li>
    </ol>
</div>

<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">সমাধান ট্র্যাকিং সারণী (Table Representation) রিকার্সিভ ট্র্যাকিং সহজে বোঝার জন্য নিচের টেবিলটি দেখতে পারো:</h3>
<table style="border-collapse: collapse; border: 1px solid #ccc; width: 100%; text-align: center;">
    <thead>
        <tr>
            <th style="border: 1px solid #ccc; padding: 8px;">Step</th>
            <th style="border: 1px solid #ccc; padding: 8px;">$a$</th>
            <th style="border: 1px solid #ccc; padding: 8px;">$b$</th>
            <th style="border: 1px solid #ccc; padding: 8px;">$q = \\lfloor a/b \\rfloor$</th>
            <th style="border: 1px solid #ccc; padding: 8px;">$r = a \\bmod b$</th>
            <th style="border: 1px solid #ccc; padding: 8px;">$x$</th>
            <th style="border: 1px solid #ccc; padding: 8px;">$y$</th>
            <th style="border: 1px solid #ccc; padding: 8px; text-align: left;">Equation ($ax + by$)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="border: 1px solid #ccc; padding: 8px;">Base</td>
            <td style="border: 1px solid #ccc; padding: 8px;">$5$</td>
            <td style="border: 1px solid #ccc; padding: 8px;">$0$</td>
            <td style="border: 1px solid #ccc; padding: 8px;">—</td>
            <td style="border: 1px solid #ccc; padding: 8px;">—</td>
            <td style="border: 1px solid #ccc; padding: 8px;">$1$</td>
            <td style="border: 1px solid #ccc; padding: 8px;">$0$</td>
            <td style="border: 1px solid #ccc; padding: 8px; text-align: left;">$5(1) + 0(0) = 5$</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ccc; padding: 8px;">Step 2</td>
            <td style="border: 1px solid #ccc; padding: 8px;">$35$</td>
            <td style="border: 1px solid #ccc; padding: 8px;">$15$</td>
            <td style="border: 1px solid #ccc; padding: 8px;">$2$</td>
            <td style="border: 1px solid #ccc; padding: 8px;">$5$</td>
            <td style="border: 1px solid #ccc; padding: 8px;">$0$</td>
            <td style="border: 1px solid #ccc; padding: 8px;">$1$</td>
            <td style="border: 1px solid #ccc; padding: 8px; text-align: left;">$35(0) + 15(1) = 15$</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ccc; padding: 8px;">Step 1</td>
            <td style="border: 1px solid #ccc; padding: 8px;">$120$</td>
            <td style="border: 1px solid #ccc; padding: 8px;">$35$</td>
            <td style="border: 1px solid #ccc; padding: 8px;">$3$</td>
            <td style="border: 1px solid #ccc; padding: 8px;">$15$</td>
            <td style="border: 1px solid #ccc; padding: 8px;">$1$</td>
            <td style="border: 1px solid #ccc; padding: 8px;">$-3$</td>
            <td style="border: 1px solid #ccc; padding: 8px; text-align: left;">$120(1) + 35(-3) = 15$</td>
        </tr>
    </tbody>
</table>
</div>
<p class="mb-4">সি ভাষায় এক্সটেন্ডেড ইউক্লিডীয় অ্যালগরিদমের একটি রিকার্সিভ ইমপ্লিমেন্টেশন নিচে দেওয়া হলো:</p>
<div class="relative bg-slate-950 text-slate-100 p-6 rounded-xl my-6 font-mono text-sm overflow-x-auto whitespace-pre leading-relaxed shadow-lg group">
<span class="text-amber-500">#include</span> <span class="text-emerald-400">&lt;stdio.h&gt;</span>
<span class="text-sky-400">int</span> <span class="text-indigo-300">ext_gcd</span>(<span class="text-sky-400">int</span> a, <span class="text-sky-400">int</span> b, <span class="text-sky-400">int</span> *x, <span class="text-sky-400">int</span> *y) {
    <span class="text-sky-400">if</span> (b == <span class="text-pink-400">0</span>) {
        *x = <span class="text-pink-400">1</span>;
        *y = <span class="text-pink-400">0</span>;
        <span class="text-sky-400">return</span> a;
    }
    <span class="text-sky-400">int</span> x1, y1;
    <span class="text-sky-400">int</span> gcd = <span class="text-indigo-300">ext_gcd</span>(b, a % b, &amp;x1, &amp;y1);
    *x = y1;
    *y = x1 - (a / b) * y1;
    <span class="text-sky-400">return</span> gcd;
}
<span class="text-sky-400">int</span> <span class="text-indigo-300">main</span>(<span class="text-sky-400">void</span>) {
    <span class="text-sky-400">int</span> a = <span class="text-pink-400">252</span>, b = <span class="text-pink-400">105</span>;
    <span class="text-sky-400">int</span> x, y;
    <span class="text-sky-400">int</span> gcd = <span class="text-indigo-300">ext_gcd</span>(a, b, &amp;x, &amp;y);
    <span class="text-indigo-300">printf</span>(<span class="text-emerald-400">"GCD: %d\\n"</span>, gcd);
    <span class="text-indigo-300">printf</span>(<span class="text-emerald-400">"Coefficients x and y: %d, %d\\n"</span>, x, y);
    <span class="text-sky-400">return</span> <span class="text-pink-400">0</span>;
}</code>
</div>








</p>`




/*         আমরা সবাই মৌলিক সংখ্যার সাথে কমবেশি পরিচিত। শুরু করা যাক প্রচলিত সংজ্ঞাটি দিয়েই— যে সংখ্যাটির ১ এবং ওই সংখ্যাটি ব্যতীত অন্য কোনো উৎপাদক নেই সেটিই মৌলিক সংখ্যা। ৫ এর কথাই ধরা যাক, যাকে ৫ এবং ১ এই দুইটি সংখ্যা ব্যতীত আর কোনো পূর্ণসংখ্যা দ্বারা ভাগ করা যায় না। তাই ৫ একটি মৌলিক সংখ্যা। অন্যদিকে ৬-কে ১ এবং ৬ ছাড়াও ২ এবং ৩ দ্বারা ভাগ করা যায়, তাই এটি যৌগিক সংখ্যা। 
            কিন্তু গণিতের এই অতি পরিচিত ‘মৌলিক সংখ্যা’ বা Prime Number নিয়ে একটু গভীরভাবে ভাবলে বেশ কিছু চমৎকার এবং রহস্যময় দিক উন্মোচিত হয়। চলুন আজ মৌলিক সংখ্যার জগৎটা একটু নতুন করে চেনা যাক।
১ কেন মৌলিক সংখ্যা নয়?

অনেকের মনেই প্রশ্ন জাগে, মৌলিক সংখ্যার সংজ্ঞা অনুযায়ী ১-এর তো ১ এবং ওই সংখ্যা (অর্থাৎ ১) ছাড়া কোনো উৎপাদক নেই, তাহলে ১ কেন মৌলিক সংখ্যা নয়?

গণিতবিদরা ১-কে মৌলিক সংখ্যার দল থেকে বাদ দিয়েছেন একটি বিশেষ নিয়মের মর্যাদা রক্ষা করতে। নিয়মটি হলো পাটিগণিতের মৌলিক উপপাদ্য (Fundamental Theorem of Arithmetic)। এই উপপাদ্য অনুযায়ী:

    ১ অপেক্ষা বড় যেকোনো পূর্ণসংখ্যাকে মৌলিক সংখ্যার গুণফল হিসেবে প্রকাশ করা যায় এবং এই প্রকাশ পদ্ধতিটি অনন্য (Unique)।

যেমন: ১২=২×২×৩। এখন ১-কে যদি মৌলিক সংখ্যা ধরা হতো, তবে ১২-কে লেখা যেত:

    ১২=২×২×৩×১

    ১২=২×২×৩×১×১

এভাবে অনন্যতার (Uniqueness) নিয়মটি ভেঙে যেত। তাই ১ মৌলিক বা যৌগিক কোনোটিই নয়, এটি একটি অনন্য সংখ্যা (Unique Number)।
একমাত্র জোড় মৌলিক সংখ্যা

মৌলিক সংখ্যার তালিকায় ২ হচ্ছে একমাত্র জোড় সংখ্যা। ২ ছাড়া পৃথিবীর আর কোনো জোড় সংখ্যা মৌলিক হতে পারে না, কারণ যেকোনো জোড় সংখ্যাকে ২ দ্বারা ভাগ করা সম্ভব। তাই ২-কে বলা হয় সবচেয়ে ছোট এবং একমাত্র জোড় মৌলিক সংখ্যা।
মৌলিক সংখ্যা কি অসীম?

হ্যাঁ, মৌলিক সংখ্যা অসীম। আজ থেকে প্রায় ২৩০০ বছর আগে গ্রিক গণিতবিদ ইউক্লিড প্রমাণ করে গেছেন যে মৌলিক সংখ্যার কোনো শেষ নেই। আপনি যত বড় সংখ্যার দিকেই যান না কেন, মৌলিক সংখ্যা পাওয়া বন্ধ হবে না।

তবে সংখ্যার মান যত বাড়তে থাকে, মৌলিক সংখ্যা পাওয়ার ঘনত্ব তত কমতে থাকে। যেমন:

    ১ থেকে ১০০-এর মধ্যে মৌলিক সংখ্যা আছে ২৫টি।

    ১০১ থেকে ২০০-এর মধ্যে আছে ২১টি।

    বড় সংখ্যার দিকে গেলে দুটি মৌলিক সংখ্যার মধ্যকার দূরত্ব কোটি কোটি ছাড়িয়ে যেতে পারে।

আধুনিক বিশ্বে মৌলিক সংখ্যার ম্যাজিক: সাইবার নিরাপত্তা

আপনার মনে হতে পারে, এই মৌলিক সংখ্যা দিয়ে বাস্তব জীবনে কী কাজ হয়? উত্তর হলো— আপনি যখন অনলাইনে কোনো পাসওয়ার্ড দেন, ক্রেডিট কার্ড দিয়ে কেনাকাটা করেন বা হোয়াটসঅ্যাপে মেসেজ পাঠান, তখন পর্দার আড়ালে আপনার তথ্য সুরক্ষিত রাখে এই মৌলিক সংখ্যা!

আধুনিক কম্পিউটার নিরাপত্তায় RSA এনক্রিপশন নামক একটি পদ্ধতি ব্যবহার করা হয়। এই পদ্ধতিতে দুটি বিশাল (ধরা যাক, শত অঙ্কের বড়) মৌলিক সংখ্যা গুণ করে একটি পাবলিক কি (Public Key) তৈরি করা হয়।

    দুটি বড় মৌলিক সংখ্যা গুণ করা কম্পিউটারের জন্য চোখের পলকের কাজ।

    কিন্তু সেই গুণফলটি ভেঙে মূল মৌলিক সংখ্যা দুটি খুঁজে বের করা বিশ্বের সবচেয়ে শক্তিশালী সুপারকম্পিউটারের জন্যও শত বছরের ব্যাপার। */

        }
    },
   {
   id: 103,
   title: {
       en: "Combinatorics: The Art of Clever Counting",
       bn: "কম্বিনেটরিক্স: চতুরতার সাথে গণনার শিল্প"
   },
   author: {
       en: "Md Radif Hasan",
       bn: "মোঃ রাদিফ হাসান"
   },
   role: { en: "President", bn: "সভাপতি" },
   date: {
       en: "March 28, 2026",
       bn: "২৮ মার্চ, ২০২৬"
   },
   readTime: {
       en: "6 min read",
       bn: "৬ মিনিট পাঠ"
   },
   desc: {
       en: "Can you really count?",
       bn: "তুমি কি সত্যিই গুনতে পারো?"
   },
   image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1679762948968%2F0735e987-8bdb-41cf-9b3d-63acddd282e9.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&f=1&nofb=1&ipt=9c6d9914341e12997390b7ab6950959691246968574f899d77a2f3f1a357919f",
   content: {
       bn: `
           <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">কম্বিনেটরিক্স কী?</h2>
           <p class="mb-6">মানব সভ্যতার শুরুর সাথে সাথেই গণনার ব্যাপারটারও উদ্ভব ঘটে। ধারণা করা হয় আমাদের পূর্ব পুরুষরা নিজেদের প্রয়োজনীয়তা থেকেই এই গণনার উৎপত্তি ঘটান। যেমন শিকার করা, পশুর হিসেব রাখা বা কৃষিকাজের সময়ের হিসেব
           ইত্যাদি। প্রাচীন মানুষ প্রাথমিকভাবে লাঠি, পাথর বা গুহার দেয়ালে দাগ কেটে (tally marks) গণনা করত। পরবর্তীতে, যখন সংখ্যার পরিমাণ বেড়ে যায়, তখন চিহ্নের ব্যবহার শুরু হয়। আমাদের আলোচ্য বিষয়বস্তুর সাথে অনেকেই অপরিচিত এবং নামটিও অনেক বিদঘুটে লাগছে, আবার একটি গালভরা নামও বটে।
           কম্বিনেটরিক্সে মূলত এই গণনার বিষয় নিয়েই আলোচনা করা হয়ে থাকে এবং এটি বিচ্ছিন্ন গণিতের একটি শাখা। এখন অনেকেই বলতে পারে যে আমরা তো সবাইই গণনা করতে পারি, তাহলে নতুন করে গণনার প্রয়োজনীয়তা কোথায়? আসলে নতুন করে গণনার প্রয়োজনীয়তা কোথায় এই প্রশ্নটির চেয়েও সবচেয়ে গুরুত্বপূর্ণ প্রশ্ন হলো চৌকসভাবে গণনার মাধ্যমে যে জ্ঞান আমাদের অর্থ ও সময় উভয়ই সাশ্রয় করে তার কোথায় প্রয়োজনীয়তা নেই? বর্তমানে বিশ্ব দুটি মৌলিক বিষয়ের উপর প্রতিষ্ঠিত।</p>
<ol class="list-decimal-bangla space-y-3 mb-8 pl-6">
    <li><span class="font-semibold">১. কতটা চৌকসভাবে ও সময় এবং অর্থ সাশ্রয় করে যেকোনো কাজ সম্পাদন করা যায়।</span></li>
    <li><span class="font-semibold">২. কতটা দ্রুত এবং নির্ভুলভাবে সেই কাজ সম্পাদন করা যায়।</span></li>
</ol>
           <p class="mb-6">সাধারণ গণনার সাথে কম্বিনেটরিক্সের গণনার বেশ বড় রকমের পার্থক্য আছে এবং এই পার্থক্যটা তৈরি হয় গণনার নিয়মের উপর ভিত্তি করে। একটা ছোট্ট উদাহরণ দিয়ে বিষয়টা পরিষ্কার করা যাক। যদি শক্তি থাকে তাহলে ধরো নাহলে কল্পনা শক্তি দিয়ে মনে করো তুমি একজন কোচ এবং তোমার ক্লাসে ১০ জন ছাত্র আছে যাদের নাম যথাক্রমে $A, B, C,..., J$ ও তাদেরকে নিয়ে একটি প্রতিযোগিতায় অংশগ্রহণ করবে। প্রতিযোগিতার নিয়মটা এমন-</p>
<ol class="list-decimal-bangla space-y-3 mb-8 pl-6">
    <li><span class="font-semibold">১. যে দলই জিতুক বা হারুক, প্রতিযোগিতার প্রধান ও মূল আকর্ষণ হবে একজনই।</span></li>
    <li><span class="font-semibold">২. দলের প্রতিটি সদস্যের বিপরীতে যেকোন একজন বিশেষ প্রতিপক্ষ থাকবে।</span></li>
    <li><span class="font-semibold">৩. যে দল জিতবে সে দলের সদস্যদের সর্বোচ্চ কর্মদক্ষতার ভিত্তিতে তিনজন বিজয়ী হবে।</span></li>
    <li><span class="font-semibold">৪. যে দল জিতবে সে দলের সদস্যদের সর্বোচ্চ কর্মদক্ষতার ভিত্তিতে যথাক্রমে তিনজন বিজয়ী হবে।</span></li>
</ol>
            <p class="mb-6">তুমি খুব করে চেষ্টা করলে প্রথম দুটো নিয়ম নিয়ে চিন্তা করতে কিন্তু বেশিদূর যেতে পারলে না, মিলাতে গিয়েও মিলাতে পারছোনা যে কতভাবে এবং কিভাবে সেই সেরা খেয়ালোয়াড়কে কে বাছাই করা যাবে এবং কতভাবে প্রতিটি সদস্যের বিপরীতে যেকোনো একজন বিশেষ প্রতিপক্ষদের নির্বাচন করা যাবে। আবার তুমি একপ্রকার জেনেই ফেললে কারা কারা বিজয়ী হবে। এখন তুমি তাদেরকে নিয়ে গবেষণা করা শুরু করে দিলে মনে মনে, 'কে প্রথম, দ্বিতীয় ও তৃতীয় হতে পারে।' কিন্তু কয়েকবার চিন্তা করেই হাল ছেড়ে দিচ্ছো। ব্যর্থ হয়ে এখন তুমি মনে মনে ভাবছো তোমার দল যদি প্রতিযোগিতায় জিতে যায় তাহলে তাদের মধ্য থেকে ৩ জন ছাত্র নিয়ে কতভাবে বিজয়ী দল গঠন করতে পারবে। এখন তুমি পড়লে এক বিপদে! কি করবে কি করবে ভেবে কূল কিনারা পাচ্ছোনা। মাথায় একটা সহজ বুদ্ধি এসে গেলো, একটা নোট খাটা নিয়ে বসে পড়লে ও 
            তোমার সামনে সেই দশজনকে দাঁড়া করালে। একে একে তিনজনের দল করে করে দেখতে লাগলে কারা কারা জিততে পারে ও তাদের নাম লিখতে লাগলে। অনেক সময় একটি দলকেই দুইবার বা চারবার করে লিখে ফেললে এবং একটা সময় আর না পেরে তোমার নিজের চুল নিজেরই ছিঁড়তে ইচ্ছে হলো। এরপর শত চেষ্টার পর নিজের ভুলের মাশুল গুনে ছাত্রদের ভোগান্তিতে ভুগিয়ে কাঁটাছেঁড়া করে একটা খসড়া তৈরি করলে এবং শেষে গুনে
           দেখলে যে মোট ১২০ ভাবে বিজয়ী দল নির্বাচন করা যায়। এখন তোমার মাথায় আরেক ভূত এসে হাজির হয়েছে; যদি ১০ জনের মধ্য থেকে ৩ জন বাছাই করে বিজয়ী দল ১২০ ভাবে নির্বাচন করা যায়, তাহলে প্রথম, দ্বিতীয় ও তৃতীয় ক্রমানুসারে সাজালে কতভাবে বিজয়ী দল গঠন করা যায়? আগেরবার সামান্য ১২০ জনের হিসেব করতে গিয়েই নাভিশ্বাস উঠে গিয়েছিলো, এখন যে কি হবে সেটা আর বলার অপেক্ষাই রাখে না। এরপরেও তুমি হাল না ছেড়ে সহস্রবার চেষ্টা করে ছাত্রদের 'বাপ-বাজান-আব্বা' ইত্যাদি বলে বুঝিয়ে তুমি হিসেব করে দেখলে ১০ জন ছাত্র থেকে ৩ জনের ক্রমানুযায়ী বিজয়ী দল ৭২০ ভাবে নির্বাচন করা সম্ভব! তুমি তো 
           খুশীতে গদগদ হয়ে প্রতিযোগিতায় দলকে নিয়ে গেলে এবং মনে মনে ভাবতে লাগলে 'অমুক ছেলেদের দল জিতে যাবে', 'তমুক ছেলেদের দল আমাকে গর্বিত করবে' ইত্যাদি ইত্যাদি। কিন্তু ভাগ্যের কি নির্মম পরিহাস, তোমার দল গো হারা হেরে মুখে চুনকালি মাখিয়ে ফিরলো। তোমার সমস্ত কষ্ট ও আবেগ মুহুর্তেই ম্লান হয়ে ধুলিস্মাৎ হয়ে গেলো একে একে। এখন তুমি যদি একটু গণিত জানতে ও একটু চালাক হতে তাহলে নিজের অতিরিক্ত আনন্দ ও আবগেকে নিয়ন্ত্রণের পাশাপাশি খুবই চৌকসতার সাথে হিসেব করে ফেলতে যেগুলো হিসেব করতে তোমার ভবলিলা সাঙ্গ হওয়ার উপক্রম হয়েছিলো। এখন চলো, এক নজরে দেখে নেওয়া যাক কম্বিনেটরিক্সে গণনার
           মৌলিক নীতিসমূহ এবং আলোচনা করা যাক কিভাবে গণিত ব্যবহার করে তোমার কষ্ট লাঘব হতো।</p>

           <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">মৌলিক নীতিসমূহ</h2>
          
           <div class="bg-gray-100 p-6 rounded-xl my-6">
               <p class="font-semibold mb-2">১. যোগ নীতি (Multiplication Principle)</p>
               <p>প্রতিযোগিতার ১ম নিয়মানুযায়ী দুটো দল থেকে যেকোনো একজন সেরা খেলোয়াড় বের হয়ে আসবে (তার দল জিতলেও কিংবা হারলেও)। যেহেতু সেরা খেলোয়াড় দুটো দলের প্রতিটি সদস্যের যে কেউ হতে পারে তাই ১০ + ১০ = ২০ উপায়ে সেরা খেলোয়াড় পাওয়া যেতে পারে। গাণিতিকভাবে, $m$ সংখ্যক সদস্যবিশিষ্ট $A$ দল এবং $n$ সংখ্যক সদস্যবিশিষ্ট $B$ দল থেকে যেকোনো একজন সেরা খেলোয়াড় পাওয়া যেতে পারে $m + n$ উপায়ে ($A$ অথবা $B$ দল উভয় থেকেই)।</p>
               <p>উদাহরণঃ $m$ প্রকার মাছের তরকারি এবং $n$ প্রকার মাংসের তরকারি থেকে একটি মাছের তরকারি অথবা একটি মাংসের তরকারি খাওয়া যেতে পারে $m + n$ উপায়ে।</p>
           </div>

           <div class="bg-gray-100 p-6 rounded-xl my-6">
               <p class="font-semibold mb-2">২. গুণন নীতি (Multiplication Principle)</p>
               <p>প্রতিযোগিতার দ্বিতীয় নিয়মানুযায়ী দলের প্রতিটি সদস্যের বিপরীতে যেকোনো একজন বিশেষ প্রতিপক্ষ থাকবে এবং তুমি বের করতে চাচ্ছো কতভাবে থাকতে পারে। চলো বিষয়টাকে একটু ভিন্নভাবে ও পরিচিত নিয়মে একটু ব্যাখ্যা করা যাক। মনে করা যাক প্রতিটি সদস্যের নাম যথাক্রমে $A$ দলের জন্য $a_A$, $b_A$,..., $j_A$ এবং $B$ দলের জন্য $a_B$, $b_B$,..., $j_B$ হলে প্রতিযোগিতার দ্বিতীয় শর্তানুযায়ী 
               প্রতিপক্ষ থাকতে পারে $(a_Aa_B)$, $(a_Ab_B)$, $(a_Ac_B)$,...,$(a_Aj_B)$, $(b_Aa_B)$, $(b_Ab_B)$, $(b_Ac_B)$,...,$(b_Aj_B)$,...,$(j_Aa_B)$, $(j_Ab_B)$, $(j_Ac_B)$,...,$(j_Aj_B)$ ভাবে বা ১০০ ভাবে। এই জোড়াটি কি পরিচিত পরিচিত লাগছে? হ্যাঁ, ঠিকই ধরেছ, এটিই সেই সেটে পড়া ক্রমজোড় যাকে আমরা এভাবে লিখতে পারতাম $A \\times B = \\{(a_Aa_B)$, $(a_Ab_B)$, $(a_Ac_B)$,...,$(a_Aj_B)$, $(b_Aa_B)$, $(b_Ab_B)$, $(b_Ac_B)$,...,$(b_Aj_B)$,...,$(j_Aa_B)$, $(j_Ab_B)$, $(j_Ac_B)$,...,$(j_Aj_B)\\}$ এবং এখান থেকেই গুণন নীতির উদ্ভব যা আমরা কম্বিনেটরিক্সে ব্যবহার করে থাকি। 
               তাহলে গাণিতিকভাবে লেখা যায়, $m$ সংখ্যক সদস্য বিশিষ্ট $A$ দল এবং $n$ সংখ্যক সদস্য বিশিষ্ট $B$ দল থেকে একে অপরের প্রতিপক্ষ নির্বাচন করা যেতে পারে $m \\times n$ উপায়ে। </p>
               <p>উদাহরণঃ $m$ প্রকার মাছের তরকারি এবং $n$ প্রকার মাংসের তরকারি থেকে একটি মাছের তরকারি এবং একটি মাংসের তরকারি নিয়ে একত্রে খাওয়া যেতে পারে $m \\times n$ উপায়ে।</p>
           </div>

           <div class="bg-gray-100 p-6 rounded-xl my-6">
               <p class="font-semibold mb-2">৩. গৌণিক (Factorial)</p>
             <p>এবার তোমার মনে দানা বাঁধা তৃতীয় সমস্যাটা নিয়ে আলোকপাত করা যাক। শেষ দুটি সমস্যার সমাধান এই তৃতীয় সমস্যা থেকেই সমাধান করা যাবে। তোমার তৃতীয় সমস্যা অনুযায়ী নাম জেনে ফেলা বিজয়ীরা কতভাবে ক্রমানুসারে বিজয়ী হতে পারে। ধরা যাক বিজয়ীদের নাম $ABC$। এবার তাদেরকে পর্যায়ক্রমে সম্ভাব্য সকল উপায়ে প্রথম, দ্বিতীয় এবং তৃতীয় - এই তিনভাবে বিন্যস্ত করা যাক। $ABC$, $ACB$, $BAC$, $BCA$, $CAB$, $CBA$। একটু খেয়াল করলেই দেখা যাবে আমি এলোমেলোভাবে কিন্তু বিন্যস্ত করিনি। একটা সুনির্দিষ্ট নিয়ম মেনেই কিন্তু বিন্যস্ত করেছি এবং এখানেই সাধারণ গণনা এবং চৌকসভাবে গণনার পার্থক্য স্পষ্টভাবে ফুটে উঠেছে। প্রথম দিকে $A$ কে সামনে রেখে $B$ এবং $C$ কে 
             বিন্যস্ত করেছি, এরপর $B$ কে সামনে রেখে $A$ ও $C$ কে বিন্যস্ত করেছি এবং শেষবার $C$ কে সামনে রেখে $A$ ও $B$ কে বিন্যস্ত করেছি। যারা বুঝতে পারোনি আবারও বুঝিয়ে বলছি। প্রথমবার যখন $A$ কে সামনে রেখে $B$ ও $C$ কে বিন্যস্ত করলাম তখন $A$ যে প্রথম হয়েছে এটা দিনের আলোর মতো সুস্পষ্ট। কিন্তু সমস্যার উৎপত্তি ঘটলো $B$ ও $C$ এর বিন্যাসের বেলায়। কারণ $A$ প্রথম হওয়ার পর আরও দুটি অবস্থান খালি পড়ে থাকে যেখানে $B$ ও $C$ এর যে কেউ দ্বিতীয় হতে পারে। দ্বিতীয় অস্থান দখলকৃত হওয়ার হওয়ার পর খালি থাকে তৃতীয় অবস্থান যেখানে অবশিষ্ট একজন যে বসবে এটাও রাতের আঁধারের মতো পরিষ্কার। অর্থাৎ দ্বিতীয় অবস্থানে যদি $B$ বসে তাহলে তৃতীয় অবস্থানে $C$ 
             বসবে আবার দ্বিতীয় অবস্থানে যদি $C$ বসে তাহলে তৃতীয় অবস্থানে $B$ বসবে। মূলত একারণেই $A$ প্রথম হওয়ার পরেও আরও একবার নতুন সম্ভাবনার উৎপত্তি হয় যেটা নিরসন হয় দ্বিতীয় অবস্থানে কে বসতে পারে তার উপর নির্ভর করে। এরপর তৃতীয় অবস্থান তো পরিষ্কারই, কারণ তার জন্য তো আর অন্য কোনো, রাস্তা নেই। একজন দ্বিতীয় হলে অন্যজনকে চাইলেও তৃতীয় হতে হবে না চাইলেও তৃতীয় হতে হবে। এভাবেই বাকি সম্ভাবনাগুলোর গণনাও চলতে থাকবে। কারণ $A$-ই যে চূড়ান্তভাবে প্রথম হবে এমনটি নয়, $B$ ও হতে পারে অথবা $C$ ও হতে পারে। আবার এই $B$ ও $C$ এর প্রথম হওয়ার পর আবারও আগের নিয়মে নতুন নতুন সম্ভাবনার দ্বার উন্মুক্ত হতে থাকবে এবং পরবর্তীতে কে কে দ্বিতীয় হতে পারে 
             তার উপর নির্ভর করে তৃতীয় ব্যক্তি সেই তৃতীয় অবস্থান দখল করার মাধ্যমে সমস্ত সম্ভাবনার ইতি টানবে। উল্লেখিত ঘটনাবলিকে বলা হয় গৌণিক বা ইংরেজিতে factorial এবং একে '!' দ্বারা বোঝানো হয়। আমাদের আলোচ্য সমসাটাকে এভাবে সমাধান করা যেতো- 
             $3! = 3 \\times 2 \\times 1 = 6$ যেখানে $3$ দ্বারা বোঝায় কতজন প্রথম হতে পারে, $2$ দ্বারা বোঝায় প্রথম হওয়ার পর কতজন দ্বিতীয় হতে পারছে এবং $1$ দ্বারা বোঝায় দ্বিতীয় হওয়ার পর কতজন তৃতীয় হতে পারছে। গাণিতিকভাবে-
             $$n! = n \\times \\ (n - 1) \\times (n - 2) \\times (n - 3) \\times \\dots \\times 3 \\times 2 \\times 1$$</p>
             <p>উদাহরণঃ $n$ সংখ্যক জিনিসকে নিজেদের মাঝে $n!$ ভাবে সাজানো যায়।</p>
             <img src="./assets/articles/factorial.jpg" alt="Description of image" style="display: block; margin-left: auto; margin-right: auto; width: 500px; height: auto;">
           </div>

           <div class="bg-gray-100 p-6 rounded-xl my-6">
          <p class="font-semibold mb-2">৪. বিন্যাস (Permutation)</p>
          <p>খেলার চতুর্থ নিয়মানুযায়ী দলের সদস্যদের সর্বোচ্চ কর্মদক্ষতার ভিত্তিতে যথাক্রমে তিনজন বিজয়ী হবে। যদি তাই হয় তাহলে চলো সম্ভাব্য তিনজনের নাম নিচের টেবিল থেকে দেখা যাক। হিসাবের সুবিধার্থে ধরা যাক ৪ জন সদস্য থেকে সম্ভাব্য ৩ জনের বিজয়ী সদস্য নিয়ে একটি দল গঠিত হবে।</p>
               <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">টেবিল উদাহরণ</h2>
               <p class="mb-6">টেবিলিটির প্রতিটি কলামে একজনকে প্রসঙ্গ কাঠামো হিসেবে ধরে বাকি দুইজনের সম্ভাব্য নাম দেওয়া হয়েছে:</p>
               <table class="combinatorics-table w-full text-center">
<tr>
        <th>$A$</th>
        <th>$B$</th>
        <th>$C$</th>
        <th>$D$</th>
    </tr>
    <tr><td>$ABC$</td><td>$BAC$</td><td>$CAB$</td><td>$DAB$</td></tr>
    <tr><td>$ACB$</td><td>$BCA$</td><td>$CBA$</td><td>$DBA$</td></tr>
    <tr><td>$ACD$</td><td>$BCD$</td><td>$CAD$</td><td>$DAC$</td></tr>
    <tr><td>$ADC$</td><td>$BDC$</td><td>$CDA$</td><td>$DCA$</td></tr>
    <tr><td>$ABD$</td><td>$BAD$</td><td>$CBD$</td><td>$DBC$</td></tr>
    <tr><td>$ADB$</td><td>$BDA$</td><td>$CDB$</td><td>$DCB$</td></tr>
    </table> 
</div>

<p>দেখা যাচ্ছে সর্বমোট ৪ জনের দল থেকে ২৪ উপায়ে ৩ জনের দল নিয়ে প্রথম, দ্বিতীয় ও তৃতীয় অবস্থান নির্ণয় করা যায়। আবার ভালো করে খেয়াল করলে দেখা যাবে $ABC$, $BAC$ এবং $CAB$ এক নয় কারণ তারা প্রত্যেকে আলাদা আলাদা উপায়। এই ২৪ টি সম্ভাব্য নির্বাচনের উপায়কেই বলা বলা হয় বিন্যাস। আরেকটু খেয়াল করলে দেখা যাবে আমি একটা সুনির্দিষ্ট নিয়ম মেনে কিন্তু বিন্যাসগুলো সাজিয়েছি, এলোমেলোভাবে সাজাইনি, মূলত এখানেই গণিতের সৌন্দর্য নিহিত। 
           
            <div class="bg-gray-100 p-6 rounded-xl my-6">
               <p class="font-semibold mb-2">৫. বিন্যাস (Permutation)</p>
             <p>$$ P(n, r) = \\frac{n!}{(n - r)!} $$ — nটি জিনিস থেকে rটি সাজানোর উপায়।</p>
            </div>

           <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">পায়রার খোপ নীতি (Pigeonhole Principle)</h2>
           <p class="mb-6">যদি পায়রার সংখ্যা খোপের চেয়ে বেশি হয়, তাহলে অন্তত একটি খোপে দুইয়ের বেশি পায়রা থাকবে।</p>
           <p class="mb-6">উদাহরণ: ৩৬৭ জন মানুষের মধ্যে অন্তত দু’জনের জন্মদিন একই দিনে পড়বে।</p>

           <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">বাস্তব জীবনে প্রয়োগ</h2>
           <ul class="list-disc pl-6 space-y-3 mb-8">
               <li>ক্রিপ্টোগ্রাফি ও নিরাপত্তা ব্যবস্থা</li>
               <li>কম্পিউটার অ্যালগরিদম</li>
               <li>জেনেটিক্স ও ডিএনএ বিশ্লেষণ</li>
               <li>লটারি, সময়সূচি তৈরি, খেলার ফিক্সচার</li>
           </ul>
           <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">মজার সমস্যা</h2>
           <p class="mb-4"><strong>১. হ্যান্ডশেক সমস্যা:</strong> ১০ জনের পার্টিতে প্রত্যেকে প্রত্যেকের সাথে হাত মেলালে মোট কতটি হ্যান্ডশেক হবে?</p>
           <p class="mb-4"><strong>২. সিঁড়ি ভাঙা:</strong> ১ বা ২ ধাপ করে ১০ ধাপের সিঁড়ি কতভাবে ভাঙা যায়? (ফিবোনাচ্চি সংখ্যা!)</p>

           <div class="bg-amber-50 border border-amber-200 p-6 rounded-xl my-8">
               <p class="font-medium">কম্বিনেটরিক্স আমাদের শেখায় যে — সাধারণ গণনাও গভীর আবিষ্কারের দিকে নিয়ে যেতে পারে।</p>
           </div>

           <p class="text-slate-700">আমাদের ম্যাথ ক্লাবে আমরা নিয়মিত কম্বিনেটরিক্সের সমস্যা নিয়ে আলোচনা করি। তুমিও তোমার প্রিয় কম্বিনেটরিক্স সমস্যাটি পরবর্তী মিটিংয়ে শেয়ার করো!</p>
       `
       //<p>$$ C(n, r) = \\frac{n!}{r!(n - r)!} $$ — ক্রম ছাড়া নির্বাচনের সংখ্যা।</p>
       ,
       en: `
       <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">What is Combinatorics?</h2>
<p class="mb-6">Along with the beginning of human civilization, the concept of counting also emerged. It is believed that our ancestors developed counting out of their daily needs — such as hunting, keeping track of animals, or measuring time for farming. Ancient humans initially counted using tally marks on sticks, stones, or cave walls. Later, when the numbers grew larger, they started using symbols.</p>

<p class="mb-6">The topic we are going to discuss may sound unfamiliar and quite strange to many, yet it has a grand name. Combinatorics is mainly the branch of mathematics that deals with counting. It is a part of discrete mathematics.</p>

<p class="mb-6">Many might say, “We all know how to count, so why do we need a new way of counting?” But the more important question is: Where is the need for smart counting that saves both our time and resources? Today’s world is built upon two fundamental principles.</p>

<ol class="list-decimal space-y-3 mb-8 pl-6">
    <li><span class="font-semibold">1. How efficiently, and with how much time and cost savings, a task can be performed.</span></li>
    <li><span class="font-semibold">2. How quickly and accurately that task can be performed.</span></li>
</ol>

<p class="mb-6">There is a significant difference between ordinary counting and counting in combinatorics. This difference arises from the systematic rules of counting. Let’s clarify this with a small example.</p>

<p class="mb-6">Suppose you are a coach and you have 10 students in your class named $A, B, C, \\dots, J$. You are going to participate in a competition with them. The rules of the competition are as follows:</p>

<ol class="list-decimal space-y-3 mb-8 pl-6">
    <li><span class="font-semibold">1. Whether a team wins or loses, the main attraction of the competition will be a single outstanding player.</span></li>
    <li><span class="font-semibold">2. Each member of a team will have one special opponent against them.</span></li>
    <li><span class="font-semibold">3. The winning team’s members will be awarded the top three winners based on their performance.</span></li>
    <li><span class="font-semibold">4. The three winners from the winning team will be selected based on their highest efficiency.</span></li>
</ol>

<p class="mb-6">You tried hard to understand the first two rules but couldn’t figure out exactly how many ways you could select the best player or assign special opponents to each member. Later you realized who the winners might be. Then you started thinking about who could come 1st, 2nd, and 3rd.</p>

<p class="mb-6">After thinking for a while, you gave up. Frustrated, you thought: If your team wins, how many ways can you form a winning group of 3 students out of 10? After a lot of effort and mistakes, you finally calculated that there are <strong>120</strong> possible ways to choose 3 winners out of 10.</p>

<p class="mb-6">Then another question arose: If you arrange those 3 winners in 1st, 2nd, and 3rd position respectively, how many ways can that be done? You calculated that there are <strong>720</strong> possible ways.</p>

<p class="mb-6">You became very excited and went to the competition with high hopes. But unfortunately, your team lost badly. All your hard work and emotions turned to dust in a moment.</p>

<p class="mb-6">If you had known some mathematics and been a bit smarter, you could have calculated everything efficiently and controlled your emotions. Now, let’s take a look at the fundamental principles of counting in combinatorics.</p>

<h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Fundamental Principles</h2>

<div class="bg-gray-100 p-6 rounded-xl my-6">
    <p class="font-semibold mb-2">1. Addition Principle (Sum Rule)</p>
    <p>According to the first rule, one best player will emerge from either of the two teams. Since the best player can be any member from team A or team B (each having 10 members), the total number of ways is $10 + 10 = 20$.</p>
    <p>In general, if team A has $m$ members and team B has $n$ members, then the total number of ways is $m + n$.</p>
    <p>Example: If there are $m$ types of fish curry and $n$ types of meat curry, you can choose either one in $m + n$ ways.</p>
</div>

<div class="bg-gray-100 p-6 rounded-xl my-6">
    <p class="font-semibold mb-2">2. Multiplication Principle (Product Rule)</p>
    <p>According to the second rule, each member of one team will have one special opponent from the other team. Suppose team A has members $a_A, b_A, \\dots, j_A$ and team B has $a_B, b_B, \\dots, j_B$. Then the possible pairs are:</p>
    <p>$(a_A a_B),\ (a_A b_B),\ \\dots,\ (a_A j_B),\ (b_A a_B),\ \\dots,\ (j_A j_B)$ — total $10 \\times 10 = 100$ ways.</p>
    <p>This is the Cartesian product, written as:</p>
    <p>$$A \\times B = \\{(a_A a_B),\ (a_A b_B),\ \\dots,\ (j_A j_B)\\}$$</p>
    <p>Mathematically, it is $m \\times n$ ways.</p>
    <p>Example: Choosing one fish curry and one meat curry together can be done in $m \\times n$ ways.</p>
</div>

<div class="bg-gray-100 p-6 rounded-xl my-6">
    <p class="font-semibold mb-2">3. Factorial (Permutations)</p>
    <p>Suppose the three winners are $A, B,$ and $C$. We can arrange them in 1st, 2nd, and 3rd positions in all possible orders: $ABC,\ ACB,\ BAC,\ BCA,\ CAB,\ CBA$. There are 6 possible arrangements.</p>
    <p>This is called factorial, denoted by $!$.</p>
    <p>$$3! = 3 \\times 2 \\times 1 = 6$$</p>
    <p>In general:</p>
    <p>$$n! = n \\times (n-1) \\times (n-2) \\times \\dots \\times 3 \\times 2 \\times 1$$</p>
    <p>Example: $n$ distinct objects can be arranged in $n!$ different ways.</p>
    
    <img src="./assets/articles/factorial.jpg" alt="Factorial Arrangement" style="display: block; margin-left: auto; margin-right: auto; width: 500px; height: auto;">
</div>

           <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">The Pigeonhole Principle</h2>
           <p class="mb-6">If you have more pigeons than pigeonholes, then at least one pigeonhole must contain more than one pigeon.</p>
           <p class="mb-6">Example: Among 367 people, at least two people must share the same birthday.</p>

           <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Real-World Applications</h2>
           <ul class="list-disc pl-6 space-y-3 mb-8">
               <li>Cryptography and security systems</li>
               <li>Computer algorithms and data structures</li>
               <li>Genetics and DNA sequence analysis</li>
               <li>Lotteries, scheduling, and sports fixtures</li>
           </ul>

           <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Fun Problems to Solve</h2>
           <p class="mb-4"><strong>1. The Handshake Problem:</strong> If everyone at a party of 10 people shakes hands with everyone else, how many handshakes occur in total?</p>
           <p class="mb-4"><strong>2. Climbing Stairs:</strong> In how many ways can you climb a staircase of 10 steps if you can take either 1 or 2 steps at a time? (Hint: Fibonacci numbers!)</p>

           <div class="bg-amber-50 border border-amber-200 p-6 rounded-xl my-8">
               <p class="font-medium">Combinatorics teaches us that even simple counting can lead to profound mathematical discoveries.</p>
           </div>

           <p class="text-slate-700">In our Math Club, we regularly discuss fascinating combinatorial problems. Why not share your favorite one at our next meeting?</p>
       `
   }
},
    {
        id: 104,
        title: { en: "How does finite shape become infinite?", bn: "সসীম ক্ষেত্রের ক্ষেত্রফল অসীম কি করে হলো?" },
        author: { en: "Md Radif Hasan", bn: "মোঃ রাদ্বীফ হাসান" },
        role: { en: "President", bn: "সভাপতি" },
        date: { en: "Mar 06, 2026", bn: "৬ মার্চ, ২০২৬" },
        readTime: { en: "4 min read", bn: "৪ মিনিট পাঠ" },
        desc: { 
            en: "Have you ever been thought, how do Equilateral Triangle and Circle have infinite area?", 
            bn: "একটি বৃত্তের কিংবা সমবাহু ত্রিভুজের ক্ষেত্রফল অসীম হয়, এটা কি ভেবে দেখেছো কখনো?" 
        },
        image: "https://miro.medium.com/v2/resize:fit:1400/1*XB_D-SxCetKz8f1-mFlAqg.png",
        content: {
            en: `<p>The area of an equilateral triangle or circle becomes infinite, have you ever been thought about this? We know the formulas of finding the area of a circle is $ \\pi r^2 $ and equilateral triangle is $ \\frac{\\sqrt{3}}{4}a^2$. Here one thing becomes crystal clear that $\\sqrt{3}$ and $\\pi$ are irrational numbers. Which are the irrational numbers? The numbers that can't be expressed through $\\frac{p}{q}$ form are called irrational numbers. The detailed proof of irrational number in the first chapter of secondary school's general mathematics is particularly noteworthy. 
            Yet, the proof has been given below for the convenience of the readers-
           <div class="bg-gray-100 p-6 rounded-xl my-6">
               <p class="font-semibold mb-2">⧉ Prove that $\\sqrt{3}$ is an irrational number.</p>
             <p>Let $\\sqrt{3}$ be rational number।<br>Then such two co-prime numbers to each other $p, q > 1$ will exist so that, $$\\sqrt{3} = \\frac{p}{q} \\implies 3 = \\frac{p^2}{q^2} \\implies 3q = \\frac{p^2}{q}$$<br> Clearly $3q$ is an integer but $\\frac{p^2}{q}$ is not an integer, because $p$ and $q$ are natural numbers, they are co-prime to each other and $q > 1$. Since $3q \\ne \\frac{p^2}{q}$, that's why $\\sqrt{3} \\ne \\frac{p}{q}$. <br> Therefore $\\sqrt{3}$ is an irrational number.</p>
           </div>
           Expressing irrational numbers into decimal numbers never end (infinite) and numbers after decimal point never repeat maintaining any special structures or loop (non-repeatant) at all and they are not perfect square (i.e. $2, 3, 4, $) such numbers are called irrational numbers. The reason behind talking too much is only one, and that is making you undestand and finding out the areas of equilateral triangle and circle are not infinite. Let an example be give, Let's assume an equilitteral triangle's length is $5$ unit. Then the area would be $ \\frac{\\sqrt{3}}{4} a^2 = \\frac{\\sqrt{3}}{4} 5^2 \\implies \\frac{\\sqrt{3}}{4} 5^2 = 10.825...$
           and by the same way, the area of a circle can be found $ \\pi r^2 = \\pi \\times 5^2 \\implies \\pi \\times 5^2 = 78.539...$ and here for two cases irregular loop will be continued infinitely although if they are colored, they are filled with colors but problem arises while finding the areas. Why this happens? 
                      <div class="bg-gray-100 p-6 rounded-xl my-6">
               <p class="font-semibold mb-2"><img src="./assets/articles/shape.jpg" alt="Description of image" style="display: block; margin-left: auto; margin-right: auto; width: 500px; height: auto;">
</p>
           </div>
That is why this article is titled, "Why is the Area of a Finite Shape Infinite?" The answer is very simple you know! The finite shape doesn't have infinite area. The answer is simple it is because of the limitations of measurement in our standard number system. The area of a finite shape is not actually infinite. The numbers representing the areas of the triangle and circle calculated above are infinite in length, but the actual area itself is not infinite. These numbers are actually finite—meaning their values are specific and bounded. It only seems like the area is infinite because their decimal forms are non-terminating and non-repeating (irrational). 
In the decimal system, we break numbers down into powers of 10. However, the geometric ratios of a circle and an equilateral triangle ($\\pi$ and $\\sqrt{3}$) cannot be expressed cleanly using our standard base-10 counting system.
           <div class="bg-gray-100 p-6 rounded-xl my-6">
               <p class="font-semibold mb-2">⧉ Traditional base-$10$ counting system at a glance-</p>
               <p>$123.45 = 1 \\times 10^{2} + 2 \\times 10^{1} + 3 \\times 10^{0} + 4 \\times 10^{-1} + 5 \\times 10^{-2}$</p>
           </div>

If it could be expressed that way, the area would seem finite to us. Therefore, when calculating the area, it is better to keep it in terms of $\\pi$ or $\\sqrt{3}$ (such as $9\\pi$ or $4\sqrt{3}$). Otherwise, if you try to find the exact value, their numerical expression in decimals becomes infinite.    </p>`,



            bn: `<p>একটি বৃত্তের কিংবা সমবাহু ত্রিভুজের ক্ষেত্রফল অসীম হয়, এটা কি ভেবে দেখেছো কখনো? আমরা জানি বৃত্তের ক্ষেত্রফল নির্ণয়ের সূত্র $ \\pi r^2 $ এবং সমবাহু ত্রিভুজের ক্ষেত্রফল নির্ণয়ের সূত্র $ \\frac{\\sqrt{3}}{4}a^2$। এখানে একটা বিষয় প্রতীয়মান হয়ে উঠে যে $\\sqrt{3}$ এবং $\\pi$ অমূলদ সংখ্যা। অমূলদ সংখ্যা কোনগুলো? যেই সংখ্যাগুলোকে $\\frac{p}{q}$ আকারে প্রকাশ করা যায়না সেগুলোই অমূলদ সংখ্যা। মাধ্যমিক সাধারণ গণিতের প্রথম অধ্যায়ে এর বিস্তারিত প্রমাণ বিশেষভাবে দ্রষ্টব্য। পাঠকদের সুবিধার্থে এরপরেও প্রমাণটি নিচে দেওয়া হলো-


           <div class="bg-gray-100 p-6 rounded-xl my-6">
               <p class="font-semibold mb-2">⧉ প্রমাণ করো যে $\\sqrt{3}$ একটি অমূলদ সংখ্যা</p>
             <p>ধরি $\\sqrt{3}$ মূলদ সংখ্যা।<br>তাহলে এমন দুইটি পরস্পর সহমৌলিক স্বাভাবিক সংখ্যা $p, q > 1$ থাকবে যে, $$\\sqrt{3} = \\frac{p}{q} \\implies 3 = \\frac{p^2}{q^2} \\implies 3q = \\frac{p^2}{q}$$<br> স্পষ্টত $3q$ পূর্ণসংখ্যা কিন্তু $\\frac{p^2}{q}$ পূর্ণসংখ্যা নয়, কারণ $p$ ও $q$ স্বাভাবিক সংখ্যা, এরা পরস্পর সহমৌলিক এবং $q > 1$। যেহেতু $3q \\ne \\frac{p^2}{q}$, তাই $\\sqrt{3} \\ne \\frac{p}{q}$। <br> অতএব $\\sqrt{3}$ একটি অমূলদ সংখ্যা।</p>
           </div>
           অমূলদ সংখ্যাগুলোকে দশমিকে প্রকাশ করলে তা কখনোই শেষ হয় না (অসীম) এবং দশমিকের পরের সংখ্যাগুলো কোনো নির্দিষ্ট নিয়মে পুনরাবৃত্তি বা চক্রাকারে ঘুরে আসে না (অনাবৃত্ত) এবং পূর্ণবর্গ নয় (যেমন: ২, ৩, ৫, ৭) এমন যেকোনো সংখ্যার বর্গমূলই একটি অমূলদ সংখ্যা। এত পেঁচাল পারার পেছনে কারণ একটিই, সেটি হলো আমাদের বের করা বৃত্তের এবং সমবাহু ত্রিভুজের ক্ষেত্রফল যে অসীম না সেটি বোঝানো। একটি উদাহরণ দেওয়া যাক, ধরো একটি সমবাহু ত্রিভুজের দৈর্ঘ্য ৫ একক। তাহলে এর ক্ষেত্রফল হবে $ \\frac{\\sqrt{3}}{4} a^2 = \\frac{\\sqrt{3}}{4} 5^2 \\implies \\frac{\\sqrt{3}}{4} 5^2 = 10.825...$
           এবং একইভাবে একই একক ব্যাসার্ধ বিশিষ্ট বৃত্তের ক্ষেত্রফল নির্ণয় করলে পাওয়া যায় $ \\pi r^2 = \\pi \\times 5^2 \\implies \\pi \\times 5^2 = 78.539...$ এবং এখানে উভয়ক্ষেত্রেই দশমিকের পর অনন্তকাল যাবত অনিয়মিত পুনরাবৃত্তি চলতেই থাকবে অথচ উভয় ক্ষেত্রকে রঙ করলে সেটি ভরাট হয়ে যায় কিন্তু ক্ষেত্রফল বের করতে গেলেই ঘটে বিপত্তি। এমনটা কেন হয়? 
                      <div class="bg-gray-100 p-6 rounded-xl my-6">
               <p class="font-semibold mb-2"><img src="./assets/articles/shape.jpg" alt="Description of image" style="display: block; margin-left: auto; margin-right: auto; width: 500px; height: auto;">
</p>
           </div>
ঠিক এজন্যেই সমস্যাটির সাথে সামাঞ্জস্য রেখে লেখাটির নাম দেওয়া হয়েছে সসীম ক্ষেত্রের ক্ষেত্রফল অসীম কেন হয়? উত্তরটি সোজা, আমাদের প্রচলিত সংখ্যাপদ্ধতিতে পরিমাপের সীমাবদ্ধতার জন্য। সসীম ক্ষেত্রের ক্ষেত্রফল অসীম হয়না। উপরে বের করা ত্রিভুজ এবং বৃত্তের ক্ষেত্রফল নির্দেশক সংখ্যাগুলো অসীম কিন্তু প্রকৃতভাবে ক্ষেত্রফল অসীম নয়। এই সংখ্যাগুলোও কিন্তু সসীম অর্থাৎ এদের মান নির্দিষ্ট এবং সীমাবদ্ধ। শুধুমাত্র তাদের দশমিক প্রকাশ অসীম ও অনাবৃত্তি (non-terminating, non-repeating) হওয়ায় তা আমাদের কাছে মনে হয় ক্ষেত্রফল অসীম। দশমিক দশমিক পদ্ধতিতে আমরা সংখ্যাকে ১০-এর ঘাত হিসেবে ভাঙি। কিন্তু বৃত্ত এবং সমবাহু ত্রিভুজের জ্যামিতিক অনুপাত ($\\pi$ এবং $\\sqrt{3}$) 
প্রচলিত ১০ ভিত্তিক গণনা পদ্ধতিতে সুন্দরভাবে প্রকাশ করা যায় না।

           <div class="bg-gray-100 p-6 rounded-xl my-6">
               <p class="font-semibold mb-2">⧉ একনজরে প্রচলিত দশভিত্তিক গণনা পদ্ধতি</p>
               <p>$123.45 = 1 \\times 10^{2} + 2 \\times 10^{1} + 3 \\times 10^{0} + 4 \\times 10^{-1} + 5 \\times 10^{-2}$</p>
           </div>

যদি প্রকাশ করা যেত তাহলে আমাদের কাছে ক্ষেত্রফলটা সসীমই মনে হতো। তাই ক্ষেত্রফল বের করার সময় $\\pi$ বা $\\sqrt{3}$ আকারে (যেমন $9\\pi$ কিংবা $4\\sqrt{3}$) রাখাটাই শ্রেয় অথবা মান বের করতে গেলে এজন্যই তাদের সাংখ্যিক প্রকাশ দশমিকে অসীম হয়ে যায়।
    </p>`
        }
    }

];

const COMMITTEE = [
    { name: {en: "Golam Zakaria Torun", bn: "গোলাম জাকারিয়া তরুণ"}, pos: {en: "Founding Co-Moderator", bn: "প্রতিষ্ঠাকালীন সহ-পরিচালক"}, group: {en: 'Lecturer at Mathematics Department', bn: 'প্রভাষক, গণিত বিভাগ'}, img: "./assets/committee/torun_sir.jpg" },
    { name: {en: "Komol Chandra Sarker", bn: "কমল চন্দ্র সরকার"}, pos: {en: "Moderator", bn: "পরিচালক"}, group: {en: 'Lecturer at Mathematics Department', bn: 'প্রভাষক, গণিত বিভাগ'}, img: "./assets/committee/komol_sir.jpg" },
    { name: {en: "Md Radif Hasan", bn: "মোঃ রাদ্বীফ হাসান"}, pos: {en: "President", bn: "সভাপতি"}, group: {en: '1271064', bn: '১২৭১০৬৪'}, img: "./assets/committee/radif.jpg" },
    { name: {en: "Syedul Mursalin", bn: "সাইয়্যেদুল মুরসালিন"}, pos: {en: "General Secretary", bn: "সাধারণ সম্পাদক"}, group: {en: '1271002', bn: '১২৭১০০২'}, img: "./assets/committee/mursalin.jpg" },
    { name: {en: "Arif Mahmud Fahad", bn: "আরিফ মাহমুদ ফাহাদ"}, pos: {en: "Organizing Secretary", bn: "সাংগঠনিক সম্পাদক"}, group: {en: '1271065', bn: '১২৭১০৬৫'}, img: "./assets/committee/fahad.jpg" },
    { name: {en: "Abdur Rahim", bn: "আব্দুল রহিম"}, pos: {en: "General Member Representative", bn: "সাধারণ সদস্য প্রতিনিধি"}, group: {en: '1275025', bn: '১২৭৫০২৫'}, img: "https://api.dicebear.com/7.x/initials/svg?seed=AR&backgroundColor=b45309" },
    { name: {en: "Yasir Amir", bn: "ইয়াসির আমির"}, pos: {en: "Publicity Secretary", bn: "প্রচার সম্পাদক"}, group: {en: '1274029', bn: '১২৭১০২৯'}, img: "./assets/committee/yasir.jpg" },
    { name: {en: "Md Fuad Hasan", bn: "মোঃ ফুয়াদ হাসান"}, pos: {en: "Treasurer", bn: "কোষাধ্যক্ষ"}, group: {en: '1274064', bn: '১২৭৪০৬৪'}, img: "https://api.dicebear.com/7.x/initials/svg?seed=FH&backgroundColor=b45309" },
    { name: {en: "Md Tamim Hasan", bn: "মোঃ তামিম হাসান"}, pos: {en: "Educational Tour Secretary", bn: "শিক্ষা সফর বিষয়ক সম্পাদক"}, group: {en: '1272065', bn: '১২৭২০৬৫'}, img: "https://api.dicebear.com/7.x/initials/svg?seed=TH&backgroundColor=b45309" }
];

let state = {
    view: 'HOME',
    articleId: null, 
    lang: 'en', 
    menuOpen: false,
    currentSlide: 0,
    graphMode: 0,
    eventSlideIndex: 0,
    lightbox: { open: false, images: [], index: 0 },
    eventGallery: { open: false, eventIndex: null }
};

// --- Image preloading helpers -------------------------------------------------
// Warms the browser cache ahead of time so gallery/lightbox images that were
// already fetched appear instantly instead of popping in on click.
function preloadImage(src) {
    if (!src) return;
    const img = new Image();
    img.src = src;
}
function preloadImages(list) {
    (list || []).forEach(preloadImage);
}

// ISO Time
function getEventStatus(dateISO) {
    if (!dateISO) return null;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const eventDate = new Date(dateISO);
    return eventDate < today ? 'passed' : 'upcoming';
}

// --- Lightbox (Google Photos style viewer) ------------------------------------
function openLightbox(images, index) {
    if (!images || !images.length) return;
    state.lightbox = { open: true, images, index: index || 0 };
    preloadImage(images[(state.lightbox.index + 1) % images.length]);
    preloadImage(images[(state.lightbox.index - 1 + images.length) % images.length]);
    render();
}
function closeLightbox() {
    state.lightbox.open = false;
    render();
}
function lightboxStep(dir) {
    const { images, index } = state.lightbox;
    if (!images || !images.length) return;
    const next = (index + dir + images.length) % images.length;
    state.lightbox.index = next;
    preloadImage(images[(next + dir + images.length) % images.length]);
    render();
}
function handleLightboxKey(e) {
    if (state.lightbox.open) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') lightboxStep(1);
        if (e.key === 'ArrowLeft') lightboxStep(-1);
    } else if (state.eventGallery.open) {
        if (e.key === 'Escape') closeEventGallery();
    }
}

// --- Per-event "Photo Gallery" popup ------------------------------------------
// Shows a grid of just that one event's photos (same look as the Activity
// Gallery grid), scoped inside a popup launched from the event's own card.
function openEventGallery(eventIndex) {
    state.eventGallery = { open: true, eventIndex };
    preloadImages(EVENTS[eventIndex] && EVENTS[eventIndex].photos);
    render();
}
function closeEventGallery() {
    state.eventGallery.open = false;
    render();
}

function startEventSlideshow() {
    setInterval(() => {
        if (state.view === 'EVENTS') {
            state.eventSlideIndex = (state.eventSlideIndex + 1) % CLUB_PHOTOS.length;
            updateEventSlideshowUI();
        }
    }, 3000); 
}

// Toggles opacity classes on the already-rendered slides directly, instead of
// calling render() (which would tear down and rebuild the whole page, causing
// the visible "blink"). Same idea as updateSliderUI() for the home slider.
function updateEventSlideshowUI() {
    const slides = document.querySelectorAll('[data-event-slide]');
    slides.forEach((el) => {
        const idx = Number(el.dataset.eventSlide);
        el.classList.toggle('opacity-100', idx === state.eventSlideIndex);
        el.classList.toggle('opacity-0', idx !== state.eventSlideIndex);
    });
}

// GitHub Pages project path -- this site lives at ndcmmathclub.github.io/view/,
// so every real route must be prefixed with /view (see 404.html + the redirect
// -restore script in index.html's <head> for why this is needed on a static host).
const BASE_PATH = '/view';
const SITE_ORIGIN = 'https://ndcmmathclub.github.io';

function pathFor(viewName, params) {
    if (params && params.id) return `${BASE_PATH}/articles/${params.id}`;
    if (viewName === 'HOME') return `${BASE_PATH}/`;
    return `${BASE_PATH}/${viewName.toLowerCase()}`;
}

function handleRouting() {
    let path = window.location.pathname;
    if (path.startsWith(BASE_PATH)) path = path.slice(BASE_PATH.length);
    const segments = path.split('/').filter(Boolean);

    if (segments.length === 0) {
        state.view = 'HOME';
    } else if (segments[0] === 'articles' && segments[1]) {
        state.view = 'ARTICLE_SINGLE';
        state.articleId = parseInt(segments[1]);
    } else {
        state.view = segments[0].toUpperCase();
    }
    render();
    updateSeoTags();
}

function navigate(viewName, params = null) {
    // Article cards call navigate('ARTICLES', {id}) rather than
    // navigate('ARTICLE_SINGLE', {id}) -- so an id in params always means
    // "go to that single article", regardless of the viewName passed in.
    if (params && params.id) {
        state.view = 'ARTICLE_SINGLE';
        state.articleId = params.id;
    } else {
        state.view = viewName;
    }
    state.menuOpen = false;

    // Updating the URL is best-effort. pushState throws a SecurityError in some
    // sandboxed/embedded preview contexts (e.g. file:// or a restricted iframe),
    // and in-app navigation must never depend on that succeeding -- otherwise a
    // thrown error here stops execution before render() runs, leaving the page
    // stuck on the old view (and, since state.view already changed, the HOME
    // graph's animation loop sees the mismatch and freezes mid-frame).
    try {
        const path = pathFor(viewName, params);
        if (window.location.pathname !== path) {
            window.history.pushState({}, '', path);
        }
    } catch (e) {
        console.warn('URL update skipped (pushState unavailable in this context):', e);
    }

    window.scrollTo(0, 0);
    render();
    updateSeoTags();
}

// --- Per-page SEO metadata -------------------------------------------------------
// This is a client-rendered SPA, so this mainly helps Googlebot (which does
// execute JS) index each route as its own page with its own title/description/
// canonical URL, rather than everything collapsing into one homepage entry.
// It does NOT fix link-preview cards on platforms that don't execute JS before
// fetching Open Graph tags (e.g. Facebook, Twitter/X) -- that would need a real
// prerendering/SSG build step, which is a bigger change than this one.
const SEO_META = {
    HOME: { title: 'Notre Dame College Mymensingh Math Club', description: 'Official website for the Math Club of Notre Dame College Mymensingh. Explore events, articles, and resources.' },
    MESSAGES: { title: 'Messages — NDCM Math Club', description: 'Messages and announcements from the Notre Dame College Mymensingh Math Club.' },
    EVENTS: { title: 'Events — NDCM Math Club', description: 'Upcoming and past events, competitions, and activities hosted by the Notre Dame College Mymensingh Math Club.' },
    ARTICLES: { title: 'Articles — NDCM Math Club', description: 'Student-written articles and explorations in mathematics from the Notre Dame College Mymensingh Math Club.' },
    RESOURCES: { title: 'Resources — NDCM Math Club', description: 'Curated learning resources, tools, and references for math enthusiasts at Notre Dame College Mymensingh.' },
    COMMITTEE: { title: 'Committee — NDCM Math Club', description: 'Meet the committee members leading the Notre Dame College Mymensingh Math Club.' },
    CONTACT: { title: 'Contact — NDCM Math Club', description: 'Get in touch with the Notre Dame College Mymensingh Math Club.' }
};

function updateSeoTags() {
    let meta = SEO_META[state.view];
    let path = pathFor(state.view, state.view === 'ARTICLE_SINGLE' ? { id: state.articleId } : null);
    let image = null;

    if (state.view === 'ARTICLE_SINGLE') {
        const article = ARTICLES.find(a => a.id === state.articleId);
        if (article) {
            meta = {
                title: `${getLang(article.title)} — NDCM Math Club`,
                description: (getLang(article.desc) || '').slice(0, 160)
            };
            image = article.image;
        } else {
            meta = SEO_META.ARTICLES;
        }
    }
    if (!meta) meta = SEO_META.HOME;

    const fullUrl = `${SITE_ORIGIN}${path}`;
    document.title = meta.title;
    setMetaContent('name', 'description', meta.description);
    setMetaContent('property', 'og:title', meta.title);
    setMetaContent('property', 'og:description', meta.description);
    setMetaContent('property', 'og:url', fullUrl);
    if (image) setMetaContent('property', 'og:image', image);
    setCanonical(fullUrl);
}

function setMetaContent(attr, key, content) {
    if (!content) return;
    let el = document.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
    }
    el.setAttribute('content', content);
}

function setCanonical(url) {
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
    }
    link.setAttribute('href', url);
}

const t = (key) => DICTIONARY[key] ? DICTIONARY[key][state.lang] : key;
const getLang = (obj) => obj ? obj[state.lang] : '';

const app = document.getElementById('app');
// (mathAnimationId is declared later, alongside the rest of the math-viz engine)
let sliderInterval;

function init() {
    updateBodyLang();
    window.addEventListener('popstate', handleRouting);
    window.addEventListener('keydown', handleLightboxKey);
    handleRouting(); 
    startSlider();
    startEventSlideshow();

    // Start fetching activity photos immediately (not only once the user opens
    // the Events page) so the slideshow and "View" banners feel instant.
    preloadImages(CLUB_PHOTOS);
    EVENTS.forEach(ev => preloadImages(ev.photos));
}

function updateBodyLang() {
    document.body.classList.remove('lang-en', 'lang-bn');
    document.body.classList.add(`lang-${state.lang}`);
    // Keep the <html lang="..."> attribute in sync too -- screen readers and
    // search engines rely on this to know which language the page is in,
    // and it was previously stuck on "en" even when viewing the Bengali version.
    document.documentElement.lang = state.lang;
}

function toggleLanguage() {
    state.lang = state.lang === 'en' ? 'bn' : 'en';
    updateBodyLang();
    render();
    if(state.view === 'HOME') initMathAnimation(); 
}

function renderMath() {
    if (window.renderMathInElement) {
        renderMathInElement(document.body, {
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: false},
                {left: '\\(', right: '\\)', display: false},
                {left: '\\[', right: '\\]', display: true}
            ],
            throwOnError : false
        });
    } else {
        // KaTeX loads with `defer`, so on the very first paint it can still be
        // mid-download. Retry shortly instead of silently leaving raw LaTeX on screen.
        setTimeout(renderMath, 50);
    }
}

function render() {
    app.innerHTML = `
        ${renderHeader()}
        <main class="flex-grow pt-16 min-h-[80vh]">
            ${renderView()}
        </main>
        ${renderFooter()}
        ${state.eventGallery.open ? renderEventGalleryModal() : ''}
        ${state.lightbox.open ? renderLightbox() : ''}
    `;
    
    renderMath(); 
    
    if (state.view === 'HOME') {
        initMathAnimation();
        updateSliderUI();
    }
    if (state.view === 'EVENTS') {
        updateEventSlideshowUI();
    }
}

function renderEventGalleryModal() {
    const ev = EVENTS[state.eventGallery.eventIndex];
    if (!ev) return '';
    const photos = ev.photos || [];
    return `
        <div class="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 fade-in" onclick="if(event.target === this) closeEventGallery()">
            <div class="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto">
                <div class="flex items-center justify-between gap-4 p-5 border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm rounded-t-2xl">
                    <div class="min-w-0">
                        <div class="text-xs font-bold uppercase tracking-widest text-ndcm-accent">${getLang(DICTIONARY.photo_gallery)}</div>
                        <h3 class="text-lg font-bold text-slate-900 truncate">${getLang(ev.title)}</h3>
                    </div>
                    <button onclick="closeEventGallery()" aria-label="Close" class="flex-shrink-0 text-slate-400 hover:text-slate-700 p-2 -mr-2">
                        ${ICONS.x}
                    </button>
                </div>
                <div class="p-5">
                    ${photos.length ? `
                        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                            ${photos.map((src, idx) => `
                                <button onclick="openLightbox(EVENTS[${state.eventGallery.eventIndex}].photos, ${idx})" aria-label="Open photo ${idx + 1}" class="group relative aspect-square rounded-xl overflow-hidden bg-slate-100 shadow-sm hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-ndcm-accent">
                                    <img src="${src}" alt="${getLang(ev.title)} photo ${idx + 1}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" loading="eager" decoding="async">
                                    <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                                </button>
                            `).join('')}
                        </div>
                    ` : `<p class="text-sm text-slate-500">No photos yet.</p>`}
                </div>
            </div>
        </div>
    `;
}

function renderLightbox() {
    const { images, index } = state.lightbox;
    const src = images[index];
    return `
        <div class="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center fade-in" onclick="if(event.target === this) closeLightbox()">
            <button onclick="closeLightbox()" aria-label="Close" class="absolute top-4 right-4 md:top-6 md:right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors">
                ${ICONS.x}
            </button>
            ${images.length > 1 ? `
                <button onclick="lightboxStep(-1)" aria-label="Previous" class="absolute left-2 md:left-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 md:p-3 transition-colors">
                    ${ICONS.chevronLeft}
                </button>
                <button onclick="lightboxStep(1)" aria-label="Next" class="absolute right-2 md:right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 md:p-3 transition-colors">
                    ${ICONS.chevronRight}
                </button>
            ` : ''}
            <img src="${src}" alt="Activity photo ${index + 1}" class="max-w-[92vw] max-h-[82vh] object-contain rounded-lg shadow-2xl" loading="eager" fetchpriority="high">
            ${images.length > 1 ? `
                <div class="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs font-bold tracking-widest">
                    ${index + 1} / ${images.length}
                </div>
            ` : ''}
        </div>
    `;
}

function renderHeader() {
    const navLinks = ['HOME', 'MESSAGES', 'EVENTS', 'ARTICLES', 'RESOURCES', 'COMMITTEE', 'CONTACT'];
    const logoHtml = SITE_DATA.logo 
        ? `<img src="${SITE_DATA.logo}" alt="Logo" class="w-10 h-10 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform bg-white">`
        : `<div class="w-10 h-10 bg-ndcm-primary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md group-hover:bg-ndcm-accent transition-colors">Σ</div>`;

    return `
        <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50 transition-all">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <div class="flex items-center gap-4">
                        <button onclick="toggleLanguage()" class="text-xs font-bold border border-slate-300 rounded px-2 py-1 text-slate-500 hover:text-ndcm-primary hover:border-ndcm-primary transition-colors">
                            ${state.lang === 'en' ? 'BN' : 'EN'}
                        </button>
                        <div class="flex items-center gap-3 cursor-pointer group" onclick="navigate('HOME')">
                            ${logoHtml}
                            <div class="flex flex-col hidden sm:flex">
                                <span class="font-bold text-slate-900 leading-tight">${getLang(SITE_DATA.name)}</span>
                                <span class="text-[10px] tracking-wider text-slate-500 font-medium uppercase">${getLang(SITE_DATA.location)}</span>
                            </div>
                        </div>
                    </div>
                    <div class="hidden md:flex items-center gap-1">
                        ${navLinks.map(link => `
                            <button onclick="navigate('${link}')" class="px-3 py-2 text-sm font-medium transition-colors duration-200 ${state.view === link || (state.view === 'ARTICLE_SINGLE' && link === 'ARTICLES') ? 'text-ndcm-accent font-bold' : 'text-slate-600 hover:text-ndcm-primary'}">
                                ${t(link.toLowerCase())}
                            </button>
                        `).join('')}
                    </div>
                    <div class="md:hidden flex items-center">
                        <button onclick="state.menuOpen = !state.menuOpen; render();" class="text-slate-600 p-2">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${state.menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
            ${state.menuOpen ? `
                <div class="md:hidden bg-white border-t border-gray-100 mobile-menu-enter shadow-lg absolute w-full">
                    <div class="px-2 pt-2 pb-3 space-y-1">
                        ${navLinks.map(link => `
                            <button onclick="navigate('${link}')" class="block w-full text-left px-3 py-3 rounded-md text-base font-medium ${state.view === link ? 'bg-blue-50 text-ndcm-accent' : 'text-slate-600 hover:bg-gray-50'}">
                                ${t(link.toLowerCase())}
                            </button>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
        </nav>
    `;
}

function renderView() {
    switch(state.view) {
        case 'HOME': return renderHome();
        case 'MESSAGES' : return renderMessages();
        case 'EVENTS': return renderEvents();
        case 'ARTICLES': return renderArticles();
        case 'ARTICLE_SINGLE': return renderSingleArticle();
        case 'RESOURCES': return renderResources();
        case 'COMMITTEE': return renderCommittee();
        case 'CONTACT': return renderContact();
        default: return renderHome();
    }
}

function renderHome() {
    return `
        <div class="fade-in">
            <section class="relative pt-8 pb-20 overflow-hidden">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="mb-12">
                        <div class="slider-container bg-slate-50 rounded-xl border border-gray-200 h-28 shadow-inner relative overflow-hidden">
                            <div class="slider-track h-full" id="slider-track">
                                ${NEWS_SLIDES.map(slide => `
                                    <div class="slide flex flex-col justify-center px-8 md:px-12 h-full relative">
                                        <div class="absolute left-0 top-0 bottom-0 w-1.5 ${slide.color}"></div>
                                        <div class="flex items-center gap-3 mb-1">
                                            <span class="text-[10px] font-bold uppercase tracking-wider text-white px-2 py-0.5 rounded-full ${slide.color}">
                                                ${getLang(slide.tag)}
                                            </span>
                                        </div>
                                        <h3 class="font-bold text-lg md:text-xl text-slate-800 truncate">${getLang(slide.title)}</h3>
                                        <p class="text-sm text-slate-600 truncate">${getLang(slide.desc)}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                    <div class="grid lg:grid-cols-2 gap-12 items-center">
                        <div class="space-y-6">
                            <h1 class="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
                                ${t('hero_title')} <br />
                                <span class="text-transparent bg-clip-text bg-gradient-to-r from-ndcm-primary to-ndcm-accent">${t('hero_highlight')}</span>
                            </h1>
                            <p class="text-lg text-slate-600 leading-relaxed max-w-lg">${t('hero_desc')}</p>
                            <div class="flex flex-wrap gap-4 pt-4">
                                <button onclick="navigate('EVENTS')" class="px-8 py-3 bg-ndcm-primary text-white rounded-lg font-bold hover:bg-ndcm-accent transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                                    ${t('view_schedule')}
                                </button>
                                <button onclick="navigate('CONTACT')" class="px-8 py-3 bg-white text-slate-900 border border-gray-200 rounded-lg font-bold hover:border-ndcm-accent hover:text-ndcm-accent transition-all">
                                    ${t('join_now')}
                                </button>
                            </div>
                        </div>
                        <div class="relative h-[400px] bg-slate-50 rounded-2xl border border-gray-200 overflow-hidden shadow-sm flex items-center justify-center cursor-pointer" onclick="toggleGraphMode()">
                            <div id="math-vis-slot" class="contents">${renderMathVisContainer()}</div>
                            <div class="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg border border-gray-100 shadow text-xs md:text-sm font-mono text-ndcm-primary pointer-events-none max-w-[85%] overflow-x-auto">
                                <span id="math-label"></span>
                            </div>
                            <div class="absolute top-4 right-4 text-xs text-slate-400">Click to change graph</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    `;
}

function renderEvents() {
    return `
        <div class="fade-in max-w-5xl mx-auto px-4 py-12">
            <div class="mb-12 relative rounded-2xl overflow-hidden shadow-md h-64 md:h-80 bg-slate-100">
                ${CLUB_PHOTOS.map((src, idx) => `
                    <div class="absolute inset-0 transition-opacity duration-700 ${state.eventSlideIndex === idx ? 'opacity-100' : 'opacity-0'}" data-event-slide="${idx}">
                        <img src="${src}" class="w-full h-full object-cover" alt="Club Activity" loading="${idx === 0 ? 'eager' : 'lazy'}" ${idx === 0 ? 'fetchpriority="high"' : ''} decoding="async">
                        <div class="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                            <span class="text-white text-xs font-bold uppercase tracking-widest">${getLang(DICTIONARY.activities)}</span>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-slate-900">${t('events')}</h2>
                <p class="text-slate-600 mt-2">${getLang(SITE_DATA.events)}</p>
            </div>

            <div class="space-y-6">
${EVENTS.map((event, evIdx) => `
                    <div class="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-6 items-start md:items-center">
                        <div class="flex-shrink-0 w-full md:w-32 bg-slate-50 rounded-lg p-4 text-center border border-gray-200">
                            <div class="text-xs font-bold text-slate-500 uppercase tracking-wide">Date</div>
                            <div class="text-xl font-bold text-ndcm-primary">${getLang(event.date)}</div>
                        </div>
                        <div class="flex-grow">
                            <div class="flex items-center gap-3 mb-2">
                                <span class="text-[10px] font-bold uppercase px-2 py-1 rounded ${event.color}">${getLang(event.type)}</span>
                                ${event.dateISO ? `
                                    <span class="text-[10px] font-bold uppercase px-2 py-1 rounded ${getEventStatus(event.dateISO) === 'passed' ? 'bg-slate-200 text-slate-500' : 'bg-green-100 text-green-700'}">
                                        ${getEventStatus(event.dateISO) === 'passed' ? getLang(DICTIONARY.status_passed) : getLang(DICTIONARY.status_upcoming)}
                                    </span>
                                ` : ''}
                                <div class="flex items-center gap-1 text-xs text-slate-500 font-medium">${ICONS.clock} ${getLang(event.time)}</div>
                            </div>
                            <h3 class="text-xl font-bold text-slate-900 mb-2">${getLang(event.title)}</h3>
                            <p class="text-slate-600 text-sm mb-3">${getLang(event.desc)}</p>
                            <div class="flex items-center gap-1 text-xs text-slate-500 font-medium">${ICONS.location} ${getLang(event.location)}</div>
                        </div>
                        
                        <div class="flex flex-col gap-2 w-full md:w-auto">
                            ${event.photos && event.photos.length ? `
                                <button onclick="openEventGallery(${evIdx})" class="w-full text-center px-6 py-2 bg-slate-100 text-ndcm-primary text-xs font-bold rounded-lg border border-ndcm-primary hover:bg-ndcm-primary hover:text-white transition-all">
                                    ${getLang(DICTIONARY.photo_gallery)}
                                </button>
                            ` : ''}
                            <button class="w-full md:w-auto px-6 py-2 bg-white border border-slate-200 text-slate-700 text-sm font-bold rounded-lg hover:bg-slate-50 hover:border-ndcm-primary hover:text-ndcm-primary transition-all">
                                ${t('rsvp')}
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderMessages() {
    return `
        <div class="fade-in max-w-5xl mx-auto px-4 py-12">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-slate-900 border-b-2 border-ndcm-gold inline-block pb-2">${t('messages')}</h2>
                <p class="text-slate-500 mt-4 italic">Words from our leadership</p>
            </div>
            
            <div class="space-y-24">
                ${MESSAGES.map((msg, idx) => `
                    <div class="flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center">
                        <div class="w-full md:w-1/3">
                            <div class="relative">
                                <div class="absolute inset-0 bg-ndcm-primary rounded-2xl transform rotate-3 scale-105 opacity-10"></div>
                                <img src="${msg.img}" alt="${getLang(msg.name)}" class="relative w-full aspect-square object-cover rounded-2xl shadow-xl border-4 border-white">
                            </div>
                        </div>
                        <div class="w-full md:w-2/3 message-card p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                            <div class="quote-mark">“</div>
                            <h3 class="text-sm font-bold text-ndcm-gold uppercase tracking-widest mb-2">${getLang(msg.role)}</h3>
                            <div class="article-content text-slate-700 text-lg leading-relaxed italic mb-8">
                                ${getLang(msg.content)}
                            </div>
                            <div>
                                <h4 class="text-xl font-bold text-slate-900">${getLang(msg.name)}</h4>
                                <p class="text-sm text-slate-500 font-medium">${getLang(msg.designation)}</p>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderArticles() {
    return `
        <div class="fade-in max-w-7xl mx-auto px-4 py-12">
            <h2 class="text-3xl font-bold text-slate-900 text-center mb-16">${t('articles')}</h2>
            <div class="grid md:grid-cols-2 gap-8">
                ${ARTICLES.map(article => `
                    <div class="bg-white rounded-xl overflow-hidden border border-gray-100 card-hover flex flex-col md:flex-row h-full cursor-pointer" onclick="navigate('ARTICLES', {id: ${article.id}})">
                        <div class="md:w-2/5 h-48 md:h-auto bg-gray-200 relative overflow-hidden">
                            <img src="${article.image}" alt="Article" class="absolute inset-0 w-full h-full object-cover">
                        </div>
                        <div class="p-6 md:w-3/5 flex flex-col justify-between">
                            <div>
                                <h3 class="text-xl font-bold text-slate-900 mb-2 hover:text-ndcm-primary">${getLang(article.title)}</h3>
                                <p class="text-slate-600 text-sm mb-4 line-clamp-2">${getLang(article.desc)}</p>
                            </div>
                            <div class="flex items-center gap-3 pt-4 border-t border-gray-100">
                                <div class="text-xs">
                                    <div class="font-bold text-slate-900">${getLang(article.author)}</div>
                                    <div class="text-slate-500">${getLang(article.date)}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="mt-12 text-center">
                <p class="text-slate-600 mb-4">${t('article_prompt')}</p>
                <button onclick="navigate('CONTACT')" class="inline-flex items-center gap-2 border border-ndcm-primary text-ndcm-primary px-6 py-2 rounded-full font-medium hover:bg-ndcm-primary hover:text-white transition-colors">
                    ${t('submit_draft')} ${ICONS.arrowRight}
                </button>
            </div>
        </div>
    `;
}

function renderSingleArticle() {
    const article = ARTICLES.find(a => a.id === state.articleId);
    if (!article) return renderArticles();

    return `
        <div class="fade-in max-w-3xl mx-auto px-4 py-12">
            <button onclick="navigate('ARTICLES')" class="mb-6 text-sm text-ndcm-primary hover:underline">← ${getLang(SITE_DATA.articles)}</button>
            <h1 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">${getLang(article.title)}</h1>
            <div class="flex items-center gap-4 mb-8 text-sm text-slate-500 border-b border-gray-100 pb-4">
                <span class="font-bold text-slate-900">${getLang(article.author)}</span>
                <span>•</span>
                <span>${getLang(article.date)}</span>
                <span>•</span>
                <span>${getLang(article.readTime)}</span>
            </div>
            <img src="${article.image}" class="w-full h-64 md:h-96 object-cover rounded-xl mb-8 shadow-sm">
            <div class="article-content text-slate-700 text-lg leading-relaxed">
                ${getLang(article.content)}
            </div>
        </div>
    `;
}

function renderCommittee() {
    return `
        <div class="fade-in max-w-7xl mx-auto px-4 py-12">
            <h2 class="text-3xl font-bold text-slate-900 text-center mb-16">${t('committee')}</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${COMMITTEE.map(member => `
                    <div class="bg-white rounded-xl overflow-hidden border border-gray-100 text-center p-6 card-hover">
                        <div class="w-24 h-24 mx-auto bg-gray-100 rounded-full mb-4 overflow-hidden border-2 border-ndcm-light">
                            <img src="${member.img}" class="w-full h-full object-cover">
                        </div>
                        <h3 class="text-lg font-bold text-slate-900">${getLang(member.name)}</h3>
                        <div class="text-xs font-bold text-ndcm-accent uppercase tracking-wider mb-2">${getLang(member.pos)}</div>
                        <div class="text-sm text-slate-500">${getLang(member.group)}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderResources() {
    return `
        <div class="fade-in max-w-6xl mx-auto px-4 py-12">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-slate-900">${t('resources')}</h2>
                <p class="text-slate-600 mt-2">${getLang(SITE_DATA.resources)}</p>
            </div>
            <div class="grid md:grid-cols-3 gap-6">
                ${RESOURCES.map(res => `
                    <a href="${res.link}" target="_blank" class="block bg-white p-6 rounded-xl border border-gray-100 card-hover group h-full">
                        <div class="flex justify-between items-start mb-4">
                            <span class="text-[10px] font-bold uppercase bg-slate-100 text-slate-600 px-2 py-1 rounded">${getLang(res.type)}</span>
                            <span class="text-slate-300 group-hover:text-ndcm-accent transition-colors">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                            </span>
                        </div>
                        <h3 class="text-lg font-bold text-slate-900 mb-2 group-hover:text-ndcm-primary transition-colors">${res.title}</h3>
                        <p class="text-sm text-slate-600">${getLang(res.desc)}</p>
                    </a>
                `).join('')}
            </div>
        </div>
    `;
}

function renderContact() {
    return `
        <div class="fade-in max-w-4xl mx-auto px-4 py-12">
            <div class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 grid md:grid-cols-5">
                <div class="md:col-span-2 bg-ndcm-primary text-white p-8">
                    <h2 class="text-2xl font-bold mb-6">${t('contact')}</h2>
                    <div class="space-y-4 text-sm opacity-90">
                        <p>${SITE_DATA.email}</p>
                        <p>${getLang(SITE_DATA.address)}</p>
                        <p>${getLang(SITE_DATA.phone)}</p>
                    </div>
                </div>
                <div class="md:col-span-3 p-8">
                    <form action="https://formspree.io/f/${FORMSPREE_ID}" method="POST" class="space-y-4">
                        <input type="text" name="name" placeholder="${t('name')}" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-ndcm-primary" required>
                        <input type="email" name="email" placeholder="${t('email')}" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-ndcm-primary" required>
                        <textarea name="message" rows="4" placeholder="${t('message')}" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-ndcm-primary" required></textarea>
                        <button type="submit" class="w-full bg-ndcm-primary text-white font-bold py-3 rounded-lg hover:bg-ndcm-accent transition-colors">
                            ${t('send_message')}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    `;
}

function renderFooter() {
    return `
        <footer class="bg-white border-t border-gray-100 py-8 mt-auto">
            <div class="max-w-7xl mx-auto px-4 text-center text-xs text-slate-500">
                &copy; ${getLang(SITE_DATA.year)} • ${getLang(SITE_DATA.name)} ${getLang(SITE_DATA.location)} • ${getLang(SITE_DATA.copyright)}
            </div>
        </footer>
    `;
}

function startSlider() {
    if (sliderInterval) clearInterval(sliderInterval);
    sliderInterval = setInterval(() => {
        state.currentSlide = (state.currentSlide + 1) % NEWS_SLIDES.length;
        updateSliderUI();
    }, 5000);
}

function updateSliderUI() {
    const track = document.getElementById('slider-track');
    if (track) track.style.transform = `translateX(-${state.currentSlide * 100}%)`;
}

// =================================================================================
// MATH VISUALIZATION ENGINE
// ---------------------------------------------------------------------------------
// Modes come in 3 flavors, because they genuinely need different rendering tech:
//   'svg'    - a single evolving curve, redrawn every frame. Cheap, uses <path>.
//   'canvas' - a pixel grid (escape-time fractals, domain coloring, DFT bars).
//              Computed once per mode-activation (not every frame) since a full
//              grid render is too expensive to redo 60x/second, then painted
//              progressively row-by-row so the tab never freezes on entry.
//   'webgl'  - true 3D structures, via three.js (lazy-loaded only when the user
//              actually reaches a 3D mode, so nobody pays for it up front).
// =================================================================================
const GRAPH_MODES = [
    { id: 'lissajous',    type: 'svg',    label: "$$ x=A\\sin(at+\\delta),\\ y=B\\sin(bt) $$" },
    { id: 'rose',         type: 'svg',    label: "$$ r = e^{\\sin\\theta} - 2\\cos(4\\theta) + \\sin^5(\\frac{2\\theta - \\pi}{24}) $$" },
    { id: 'wave',         type: 'svg',    label: "$$ z = \\sin(x^2 + y^2) $$" },
    { id: 'euler',        type: 'svg',    label: "$$ e^{i\\pi} + 1 = 0 $$" },
    { id: 'fourier',      type: 'svg',    label: "$$ \\hat g(f)=\\int g(t)e^{-i2\\pi ft}dt $$" },
    { id: 'zeta',         type: 'svg',    label: "$$ \\zeta(\\tfrac12+it) $$" },
    { id: 'lorenz',       type: 'svg',    label: "$$ \\dot x=\\sigma(y-x),\\ \\dot y=x(\\rho-z)-y,\\ \\dot z=xy-\\beta z $$" },
    { id: 'mandelbrot',   type: 'canvas', label: "$$ z_{n+1}=z_n^2+c $$" },
    { id: 'julia',        type: 'canvas', label: "$$ z_{n+1}=z_n^2+c,\\ c=-0.4+0.6i $$" },
    { id: 'newton',       type: 'canvas', label: "$$ z_{n+1}=z_n-\\frac{z_n^3-1}{3z_n^2} $$" },
    { id: 'burningship',  type: 'canvas', label: "$$ z_{n+1}=(|Re(z_n)|+i|Im(z_n)|)^2+c $$" },
    { id: 'domaincolor',  type: 'canvas', label: "$$ f(z)=z^3-1 $$" },
    { id: 'dft',          type: 'canvas', label: "$$ X_k=\\sum_{n=0}^{N-1} x_n e^{-i\\frac{2\\pi}{N}kn} $$" },
    { id: 'hopf',         type: 'webgl',  label: "$$ \\eta(z_1,z_2)=z_1/z_2 $$" },
    { id: 'quaternion',   type: 'webgl',  label: "$$ q_{n+1}=q_n^2+C,\\ q\\in\\mathbb{H} $$" }
];

let mathAnimationId = null;
let webglEngine = null;
let threeLoadingPromise = null;

function renderMathVisContainer() {
    const mode = GRAPH_MODES[state.graphMode];
    if (mode.type === 'svg') {
        return `<svg id="math-vis" width="100%" height="100%" viewBox="0 0 400 400" class="absolute inset-0 text-ndcm-accent opacity-80">
            <path id="math-vis-path" d="" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;
    }
    if (mode.type === 'canvas') {
        return `<canvas id="math-vis-canvas" width="400" height="400" class="absolute inset-0 w-full h-full"></canvas>`;
    }
    return `<canvas id="math-vis-webgl" class="absolute inset-0 w-full h-full"></canvas>
        <div id="math-vis-loading" class="absolute inset-0 flex items-center justify-center text-xs text-slate-400 pointer-events-none">Loading 3D engine…</div>`;
}

function toggleGraphMode() {
    state.graphMode = (state.graphMode + 1) % GRAPH_MODES.length;
    // Swap only the visualization node itself (svg/canvas/webgl-canvas) instead of
    // calling render(), which would rebuild the entire page and cause a visible
    // flash. The header, hero copy, footer, etc. never need to change here.
    const slot = document.getElementById('math-vis-slot');
    if (slot) {
        slot.innerHTML = renderMathVisContainer();
        initMathAnimation(); // this also calls cleanupMathVis() first, tearing down the old mode
    } else {
        render(); // fallback, shouldn't normally happen while on the Home page
    }
}

function cleanupMathVis() {
    if (mathAnimationId) cancelAnimationFrame(mathAnimationId);
    mathAnimationId = null;
    if (webglEngine) {
        webglEngine.dispose();
        webglEngine = null;
    }
}

function initMathAnimation() {
    cleanupMathVis();
    const mode = GRAPH_MODES[state.graphMode];

    const labelEl = document.getElementById('math-label');
    if (labelEl) {
        labelEl.innerHTML = mode.label;
        renderMath();
    }

    if (mode.type === 'svg') runSvgMode(mode.id);
    else if (mode.type === 'canvas') runCanvasMode(mode.id);
    else runWebglMode(mode.id);
}

// --- 'svg' modes: one continuously redrawn curve --------------------------------
function runSvgMode(id) {
    let t = 0;
    let lorenz = null; // lazily initialized only if this activation is the Lorenz mode

    function animate() {
        t += 0.02;
        const path = document.getElementById('math-vis-path');
        if (!path || state.view !== 'HOME') return;

        const cx = 200, cy = 200;
        const points = [];

        if (id === 'lissajous') {
            const scale = 140;
            for (let i = 0; i <= 200; i++) {
                const theta = (i / 200) * Math.PI * 2;
                points.push(`${cx + scale * Math.sin(3 * theta + t)},${cy + scale * Math.sin(2 * theta)}`);
            }
        } else if (id === 'rose') {
            const scale = 35;
            for (let i = 0; i <= 300; i++) {
                const theta = (i / 300) * Math.PI * 12;
                const r = Math.exp(Math.sin(theta)) - 2 * Math.cos(4 * theta) + Math.pow(Math.sin((2 * theta - Math.PI) / 24), 5);
                points.push(`${cx + r * Math.cos(theta + t * 0.5) * scale},${cy + r * Math.sin(theta + t * 0.5) * scale}`);
            }
        } else if (id === 'wave') {
            const scale = 30;
            for (let x = -5; x <= 5; x += 0.2) {
                const yVal = Math.sin(x * x + t) * 2;
                points.push(`${cx + x * scale},${cy + yVal * 10}`);
            }
        } else if (id === 'euler') {
            // Sweeps theta from 0 -> 2*pi, tracing e^{i*theta} around the unit circle.
            // Passing straight through -1 at theta=pi is the geometric heart of e^{i*pi}+1=0.
            const scale = 150;
            const theta = t % (Math.PI * 2);
            const steps = 120;
            for (let i = 0; i <= steps; i++) {
                const a = (i / steps) * theta;
                points.push(`${cx + scale * Math.cos(a)},${cy - scale * Math.sin(a)}`);
            }
        } else if (id === 'fourier') {
            // Epicycle sum of odd harmonics (classic square-wave approximation),
            // trailing the last ~6s of the resulting path.
            const freqs = [1, 3, 5, 7, 9];
            const scale = 90;
            const steps = 200;
            for (let i = 0; i <= steps; i++) {
                const time = t - (steps - i) * 0.03;
                let x = 0, y = 0;
                freqs.forEach((f) => {
                    const amp = 1 / f;
                    x += amp * Math.cos(f * time);
                    y += amp * Math.sin(f * time);
                });
                points.push(`${cx + x * scale},${cy + y * scale}`);
            }
        } else if (id === 'zeta') {
            // Decorative approximation of zeta on the critical line via a damped
            // Dirichlet-eta partial sum (not numerically rigorous, but traces the
            // characteristic winding spiral shape the real function produces).
            const scale = 60;
            const steps = 240;
            for (let i = 0; i <= steps; i++) {
                const tt = (i / steps) * 6 + (t % 4);
                const z = zetaCriticalLineApprox(tt);
                points.push(`${cx + z.re * scale},${cy + z.im * scale}`);
            }
        } else if (id === 'lorenz') {
            if (!lorenz) lorenz = { x: 0.1, y: 0, z: 0, trail: [] };
            const sigma = 10, rho = 28, beta = 8 / 3, dt = 0.008;
            for (let step = 0; step < 6; step++) {
                const { x, y, z } = lorenz;
                const dx = sigma * (y - x), dy = x * (rho - z) - y, dz = x * y - beta * z;
                lorenz.x += dx * dt; lorenz.y += dy * dt; lorenz.z += dz * dt;
                lorenz.trail.push({ x: lorenz.x, z: lorenz.z });
            }
            if (lorenz.trail.length > 900) lorenz.trail.splice(0, lorenz.trail.length - 900);
            const scale = 6.5;
            lorenz.trail.forEach(p => points.push(`${cx + p.x * scale},${cy - (p.z - 25) * scale * 0.6}`));
        }

        path.setAttribute('d', points.length ? `M ${points.join(' L ')}` : '');
        mathAnimationId = requestAnimationFrame(animate);
    }
    mathAnimationId = requestAnimationFrame(animate);
}

function zetaCriticalLineApprox(t) {
    // eta(s) = sum (-1)^(n-1) / n^s ;  zeta(s) = eta(s) / (1 - 2^(1-s))
    const sigma = 0.5;
    let re = 0, im = 0;
    const terms = 40;
    for (let n = 1; n <= terms; n++) {
        const sign = (n % 2 === 1) ? 1 : -1;
        const mag = Math.pow(n, -sigma);
        const angle = -t * Math.log(n);
        re += sign * mag * Math.cos(angle);
        im += sign * mag * Math.sin(angle);
    }
    const denomMag = Math.pow(2, 1 - sigma);
    const dRe = 1 - denomMag * Math.cos(t * Math.log(2));
    const dIm = denomMag * Math.sin(t * Math.log(2));
    const dMagSq = dRe * dRe + dIm * dIm || 1e-6;
    return {
        re: (re * dRe + im * dIm) / dMagSq,
        im: (im * dRe - re * dIm) / dMagSq
    };
}

// --- 'canvas' modes: pixel grids, painted progressively -------------------------
function runCanvasMode(id) {
    const canvas = document.getElementById('math-vis-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width, h = canvas.height;

    if (id === 'dft') {
        renderDFTBars(ctx, w, h);
        return;
    }

    const imgData = ctx.createImageData(w, h);
    let row = 0;
    const rowsPerFrame = 6;

    function paintRow(y) {
        for (let x = 0; x < w; x++) {
            const [r, g, b] = fractalPixelColor(id, x, y, w, h);
            const idx = (y * w + x) * 4;
            imgData.data[idx] = r; imgData.data[idx + 1] = g; imgData.data[idx + 2] = b; imgData.data[idx + 3] = 255;
        }
    }

    function step() {
        if (state.view !== 'HOME') return;
        for (let i = 0; i < rowsPerFrame && row < h; i++, row++) paintRow(row);
        ctx.putImageData(imgData, 0, 0);
        if (row < h) mathAnimationId = requestAnimationFrame(step);
    }
    mathAnimationId = requestAnimationFrame(step);
}

function fractalPixelColor(id, px, py, w, h) {
    const maxIter = 60;

    if (id === 'mandelbrot') {
        const re = (px / w) * 3.2 - 2.2, im = (py / h) * 3.2 - 1.6;
        let zr = 0, zi = 0, i = 0;
        for (; i < maxIter; i++) {
            const zr2 = zr * zr - zi * zi + re, zi2 = 2 * zr * zi + im;
            zr = zr2; zi = zi2;
            if (zr * zr + zi * zi > 4) break;
        }
        return escapeColor(i, maxIter);
    }
    if (id === 'julia') {
        const cr = -0.4, ci = 0.6;
        let zr = (px / w) * 3.2 - 1.6, zi = (py / h) * 3.2 - 1.6, i = 0;
        for (; i < maxIter; i++) {
            const zr2 = zr * zr - zi * zi + cr, zi2 = 2 * zr * zi + ci;
            zr = zr2; zi = zi2;
            if (zr * zr + zi * zi > 4) break;
        }
        return escapeColor(i, maxIter);
    }
    if (id === 'burningship') {
        const re = (px / w) * 3.0 - 2.0, im = (py / h) * 3.0 - 2.2;
        let zr = 0, zi = 0, i = 0;
        for (; i < maxIter; i++) {
            zr = Math.abs(zr); zi = Math.abs(zi);
            const zr2 = zr * zr - zi * zi + re, zi2 = 2 * zr * zi + im;
            zr = zr2; zi = zi2;
            if (zr * zr + zi * zi > 4) break;
        }
        return escapeColor(i, maxIter);
    }
    if (id === 'newton') {
        let zr = (px / w) * 3.2 - 1.6, zi = (py / h) * 3.2 - 1.6;
        const roots = [[1, 0], [-0.5, Math.sqrt(3) / 2], [-0.5, -Math.sqrt(3) / 2]];
        let iter = 0;
        for (; iter < 25; iter++) {
            const z2r = zr * zr - zi * zi, z2i = 2 * zr * zi;
            const z3r = z2r * zr - z2i * zi, z3i = z2r * zi + z2i * zr;
            const fr = z3r - 1, fi = z3i;
            const dfr = 3 * z2r, dfi = 3 * z2i;
            const denom = (dfr * dfr + dfi * dfi) || 1e-9;
            const qr = (fr * dfr + fi * dfi) / denom, qi = (fi * dfr - fr * dfi) / denom;
            zr -= qr; zi -= qi;
            if (qr * qr + qi * qi < 1e-6) break;
        }
        let best = 0, bestDist = Infinity;
        roots.forEach(([rr, ri], idx) => {
            const d = (zr - rr) * (zr - rr) + (zi - ri) * (zi - ri);
            if (d < bestDist) { bestDist = d; best = idx; }
        });
        const shades = [[239, 68, 68], [59, 130, 246], [16, 185, 129]];
        const dim = Math.max(0.35, 1 - iter / 25);
        return shades[best].map(c => Math.round(c * dim));
    }
    if (id === 'domaincolor') {
        // f(z) = z^3 - 1, HSL domain coloring: hue = phase, lightness = magnitude
        const re = (px / w) * 4 - 2, im = (py / h) * 4 - 2;
        const z2r = re * re - im * im, z2i = 2 * re * im;
        const fr = z2r * re - z2i * im - 1, fi = z2r * im + z2i * re;
        const mag = Math.sqrt(fr * fr + fi * fi);
        const hue = ((Math.atan2(fi, fr) + Math.PI) / (2 * Math.PI)) * 360;
        const light = 100 / (1 + mag * 0.3);
        return hslToRgb(hue, 70, Math.min(85, Math.max(15, light)));
    }
    return [255, 255, 255];
}

function escapeColor(iter, maxIter) {
    if (iter === maxIter) return [15, 23, 42]; // inside the set: slate-900
    const t = iter / maxIter;
    const r = Math.round(180 + 75 * Math.sin(6.28 * t));
    const g = Math.round(80 + 60 * Math.sin(6.28 * t + 2));
    const b = Math.round(120 + 100 * Math.sin(6.28 * t + 4));
    return [Math.min(255, Math.max(0, r)), Math.min(255, Math.max(0, g)), Math.min(255, Math.max(0, b))];
}

function hslToRgb(h, s, l) {
    s /= 100; l /= 100;
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = l - c / 2;
    let r = 0, g = 0, b = 0;
    if (h < 60) { r = c; g = x; b = 0; }
    else if (h < 120) { r = x; g = c; b = 0; }
    else if (h < 180) { r = 0; g = c; b = x; }
    else if (h < 240) { r = 0; g = x; b = c; }
    else if (h < 300) { r = x; g = 0; b = c; }
    else { r = c; g = 0; b = x; }
    return [Math.round((r + m) * 255), Math.round((g + m) * 255), Math.round((b + m) * 255)];
}

function renderDFTBars(ctx, w, h) {
    // Synthetic signal (3 sine components), naive O(N^2) DFT (N=64 is trivial),
    // drawn as a magnitude spectrum. Illustrative, not linked to real audio.
    const N = 64;
    const signal = [];
    for (let n = 0; n < N; n++) {
        signal.push(Math.sin(2 * Math.PI * 3 * n / N) + 0.5 * Math.sin(2 * Math.PI * 7 * n / N) + 0.3 * Math.sin(2 * Math.PI * 13 * n / N));
    }
    const mags = [];
    for (let k = 0; k < N / 2; k++) {
        let re = 0, im = 0;
        for (let n = 0; n < N; n++) {
            const angle = -2 * Math.PI * k * n / N;
            re += signal[n] * Math.cos(angle);
            im += signal[n] * Math.sin(angle);
        }
        mags.push(Math.sqrt(re * re + im * im));
    }
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, w, h);
    const barW = w / mags.length;
    const maxMag = Math.max(...mags);
    mags.forEach((m, i) => {
        const bh = (m / maxMag) * (h * 0.75);
        ctx.fillStyle = (i === 3 || i === 7 || i === 13) ? '#b45309' : '#4c1d95';
        ctx.fillRect(i * barW + 2, h - bh, barW - 4, bh);
    });
}

// --- 'webgl' modes: true 3D, three.js lazy-loaded only when needed --------------
function ensureThree() {
    if (window.THREE) return Promise.resolve();
    if (threeLoadingPromise) return threeLoadingPromise;
    threeLoadingPromise = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
    return threeLoadingPromise;
}

function runWebglMode(id) {
    const loadingEl = document.getElementById('math-vis-loading');
    ensureThree().then(() => {
        // The user may have switched modes again while three.js was downloading.
        if (state.view !== 'HOME' || GRAPH_MODES[state.graphMode].id !== id) return;
        if (loadingEl) loadingEl.remove();
        const canvas = document.getElementById('math-vis-webgl');
        if (!canvas) return;
        startThreeScene(id, canvas);
    }).catch(() => {
        if (loadingEl) loadingEl.textContent = 'Could not load 3D engine.';
    });
}

function startThreeScene(id, canvas) {
    const w = canvas.clientWidth || 400, h = canvas.clientHeight || 400;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(w, h, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
    camera.position.set(0, 0, id === 'hopf' ? 4 : 3.2);
    scene.add(new THREE.AmbientLight(0x404040, 1.5));
    const light = new THREE.DirectionalLight(0xffffff, 1.2);
    light.position.set(2, 3, 4);
    scene.add(light);

    const disposables = [];
    if (id === 'hopf') buildHopfFibration(scene, disposables);
    else if (id === 'quaternion') buildQuaternionJulia(scene, disposables);

    let raf;
    function loop() {
        if (state.view !== 'HOME' || GRAPH_MODES[state.graphMode].id !== id) return;
        scene.rotation.y += 0.004;
        scene.rotation.x = Math.sin(Date.now() * 0.0002) * 0.15;
        renderer.render(scene, camera);
        raf = requestAnimationFrame(loop);
    }
    loop();

    webglEngine = {
        dispose() {
            if (raf) cancelAnimationFrame(raf);
            disposables.forEach(d => d.dispose && d.dispose());
            renderer.dispose();
        }
    };
}

function buildHopfFibration(scene, disposables) {
    // A handful of Hopf fibers (circles on S^3, stereographically projected to
    // R^3) traced over base points on S^2 -- each fiber a torus-like linked loop.
    const baseCount = 10;
    for (let i = 0; i < baseCount; i++) {
        const theta = (i / baseCount) * Math.PI;
        const phi = (i / baseCount) * Math.PI * 4;
        const points = [];
        for (let j = 0; j <= 200; j++) {
            const eta = (j / 200) * Math.PI * 2;
            const z1r = Math.cos(theta / 2) * Math.cos(eta);
            const z1i = Math.cos(theta / 2) * Math.sin(eta);
            const z2r = Math.sin(theta / 2) * Math.cos(eta + phi);
            const z2i = Math.sin(theta / 2) * Math.sin(eta + phi);
            const denom = (1 - z2i) || 1e-6;
            points.push(new THREE.Vector3(z1r / denom, z1i / denom, z2r / denom));
        }
        const geo = new THREE.BufferGeometry().setFromPoints(points);
        const mat = new THREE.LineBasicMaterial({ color: new THREE.Color().setHSL(i / baseCount, 0.65, 0.55) });
        scene.add(new THREE.Line(geo, mat));
        disposables.push(geo, mat);
    }
}

function buildQuaternionJulia(scene, disposables) {
    // Full volumetric raymarching is too heavy for a homepage widget, so this
    // samples a 3D grid of starting quaternions (x,y,z,0), iterates q -> q^2+C,
    // and keeps the points that stay bounded -- a point-cloud cross-section.
    const C = { a: -0.2, b: 0.6, c: 0.2, d: 0.2 };
    const positions = [], colors = [];
    const res = 26, bound = 1.4;
    for (let xi = 0; xi < res; xi++) {
        for (let yi = 0; yi < res; yi++) {
            for (let zi = 0; zi < res; zi++) {
                const x = (xi / (res - 1)) * 2 * bound - bound;
                const y = (yi / (res - 1)) * 2 * bound - bound;
                const z = (zi / (res - 1)) * 2 * bound - bound;
                let a = x, b = y, c = z, d = 0, iter = 0;
                for (; iter < 12; iter++) {
                    const na = a * a - b * b - c * c - d * d + C.a;
                    const nb = 2 * a * b + C.b;
                    const nc = 2 * a * c + C.c;
                    const nd = 2 * a * d + C.d;
                    a = na; b = nb; c = nc; d = nd;
                    if (a * a + b * b + c * c + d * d > 4) break;
                }
                if (iter === 12) {
                    positions.push(x, y, z);
                    const col = new THREE.Color().setHSL((0.6 + 0.1 * Math.sin(x * 3 + y * 3 + z * 3)) % 1, 0.6, 0.55);
                    colors.push(col.r, col.g, col.b);
                }
            }
        }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    const mat = new THREE.PointsMaterial({ size: 0.045, vertexColors: true });
    scene.add(new THREE.Points(geo, mat));
    disposables.push(geo, mat);
}

// script.js is a plain (non-deferred) script, so it can run and call init()
// before the deferred KaTeX <script> tags in <head> have finished executing.
// Waiting for DOMContentLoaded guarantees deferred scripts have already run,
// so the very first render has KaTeX available and never shows raw LaTeX.
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
