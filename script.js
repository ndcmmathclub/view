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
    logo: "./assets/logo/logo.png", 
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
        en: 'Mathematics is the language of all sciences. To understand the universe\'s most complex mysteries, one must first learn the language of mathematics.',
        bn: 'গণিত হলো সমস্ত বিজ্ঞানের ভাষা। মহাবিশ্বের জটিলতম রহস্যগুলোকে বুঝতে হলে আগে গণিতের ভাষা শিখতে হবে।'
    },
    'hero_author': { 
        en: 'Prof. Dr. Jamal Nazrul Islam',
        bn: 'অধ্যাপক ড. জামাল নজরুল ইসলাম'
    },
    'view' : {en: 'view', bn: 'দেখুন'},
    'pdf_cat_math': { en: 'Mathematics', bn: 'গণিত' },
    'pdf_cat_cs': { en: 'Computer Science', bn: 'কম্পিউটার বিজ্ঞান' },
    'view_schedule': { en: 'View Schedule', bn: 'সময়সূচী দেখুন' },
    'register': { en: 'Register', bn: 'রেজিস্ট্রেশন' },
    'rsvp': { en: 'RSVP', bn: 'অংশগ্রহণ' },
    'activities': {en: 'Our Activities', bn: 'আমাদের কার্যক্রম' },
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
    'pdf_books': { en: 'PDF Books', bn: 'পিডিএফ বই' },
    'pdf_books_desc': { en: 'Free eBooks on mathematics, computer science, and the fields where math works behind the scenes.', bn: 'গণিত, কম্পিউটার বিজ্ঞান এবং এমন সব বিষয়ের বিনামূল্যের ই-বই যেখানে গণিত নেপথ্যে কাজ করে।' },
};

const ICONS = {
    menu: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>`,
    x: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`,
    calendar: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>`,
    clock: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
    location: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`,
    arrowRight: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>`,
    chevronLeft: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>`,
    chevronRight: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>`,
    expand: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4"></path></svg>`,
    compress: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v4h4M20 16v4h-4M4 8V4h4M20 8V4h-4"></path></svg>`
};

const NEWS_SLIDES = [
    {
        id: 1,
        tag: { en: "Recent Event", bn: "সাম্প্রতিক কার্যক্রম" },
        title: { en: "Speed Cubing Competition 2026", bn: "স্পিড কিউবিং প্রতিযোগিতা ২০২৬" },
        desc: { en: "Took place on 02 September in Room 402.", bn: "২ সেপ্টেম্বর ৪০২ নং কক্ষে অনুষ্ঠিত হয়েছিলো" },
        color: "bg-ndcm-accent"
    },
    {
        id: 2,
        tag: { en: "Announcement", bn: "ঘোষণা" },
        title: { en: "Final Round of Differentiation Bee 2026", bn: "অন্তরীকরণ প্রতিযোগিতা ২০২৬ এর চূড়ান্ত পর্ব" },
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
        noRsvp: true,
    },
    {
        title: {en: "Speed Cubing Competition 2026", bn: "স্পিড কিউবিং প্রতিযোগিতা ২০২৬"},
        date: {en: "SEP 02", bn: "০২ সেপ্টেম্বর"},
        time: { en: "12:00 PM", bn: "দুপুর ১২:০০" },
        dateISO: "2026-09-02",
        location: { en: "Room 402", bn: "৪০২ নং কক্ষ" },
        type: { en: "Competition", bn: "প্রতিযোগিতা" },
        desc: { en: "Rubix Cube Competition", bn: "রুবিক্স কিউব প্রতিযোগিতা" },
        color: "bg-yellow-100 text-blue-800",
        viewLink: "./assets/activities/speed-cubing/rulebook.pdf",
        photos: [
"./assets/activities/speed-cubing/IMG_3946.jpg",
"./assets/activities/speed-cubing/IMG_3948.jpg",
"./assets/activities/speed-cubing/IMG_3949.jpg",
"./assets/activities/speed-cubing/IMG_3952.jpg",
"./assets/activities/speed-cubing/IMG_3953.jpg",
"./assets/activities/speed-cubing/IMG_3956.jpg",
"./assets/activities/speed-cubing/IMG_3957.jpg",
"./assets/activities/speed-cubing/IMG_3958.jpg",
"./assets/activities/speed-cubing/IMG_3959.jpg",
"./assets/activities/speed-cubing/IMG_3960.jpg",
"./assets/activities/speed-cubing/IMG_3961.jpg",
"./assets/activities/speed-cubing/IMG_3962.jpg",
"./assets/activities/speed-cubing/IMG_3963.jpg",
"./assets/activities/speed-cubing/IMG_3964.jpg",
"./assets/activities/speed-cubing/IMG_3965.jpg",
"./assets/activities/speed-cubing/IMG_3966.jpg",
"./assets/activities/speed-cubing/IMG_3967.jpg",
"./assets/activities/speed-cubing/IMG_3968.jpg",
"./assets/activities/speed-cubing/IMG_3969.jpg",
"./assets/activities/speed-cubing/IMG_3970.jpg",
"./assets/activities/speed-cubing/IMG_3972.jpg",
"./assets/activities/speed-cubing/IMG_3974.jpg",
"./assets/activities/speed-cubing/IMG_3975.jpg",
"./assets/activities/speed-cubing/IMG_3976.jpg",
"./assets/activities/speed-cubing/IMG_3977.jpg",
"./assets/activities/speed-cubing/IMG_3978.jpg",
"./assets/activities/speed-cubing/IMG_3979.jpg",
"./assets/activities/speed-cubing/IMG_3980.jpg",
"./assets/activities/speed-cubing/IMG_3981.jpg",
"./assets/activities/speed-cubing/IMG_3982.jpg",
"./assets/activities/speed-cubing/IMG_3983.jpg",
"./assets/activities/speed-cubing/IMG_3984.jpg",
"./assets/activities/speed-cubing/IMG_3985.jpg",
        ],
        noRsvp: true,
    },
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

const PDF_BOOKS = [
    { title: "Math Olympiad Preparation", author: "Adib Hasan", type: {en: "Math", bn: "গণিত"}, desc: {en: "A shortlisted path for Math Olympiad", bn: "গণিত অলিম্পিয়াডের প্রস্তুতির জন্য বাছাইকৃত পন্থা"}, link: "https://adibhasan.com/files/adib_olympiad_prep.pdf"},
    { title: "Notes for Math Olympiad", author: "Adib Hasan, Thanic Nur Samin, Asif E Elahi, Mutasim Mim, Ahmed Zawad Chowdhury, Rahul Saha and Nayeemul Islam Swad", type: {en: "Math", bn: "গণিত"}, desc: {en: "A comprehensive notes for Math Olympiad", bn: "গণিত অলিম্পিয়াডের জন্য সার্বিক নোট"}, link: "https://drive.google.com/drive/u/0/folders/0B8NfhxOmm_tpbW1zOENuWElCTWM?resourcekey=0-kBAQEb3zwQKxsanI3DT3Ug"},
    { title: "Mathematics for Computer Science", author: "Lehman, Leighton & Meyer", type: {en: "Math · CS", bn: "গণিত · কম্পিউটার বিজ্ঞান"}, desc: {en: "MIT 6.042 — the math that powers computing", bn: "MIT 6.042 — কম্পিউটিংয়ের পেছনের গণিত"}, link: "https://courses.csail.mit.edu/6.042/spring18/mcs.pdf" },
    { title: "Calculus", author: "Gilbert Strang", type: {en: "Mathematics", bn: "গণিত"}, desc: {en: "A complete, readable calculus text from MIT", bn: "MIT-এর একটি সম্পূর্ণ ও সহজপাঠ্য ক্যালকুলাস বই"}, link: "https://ocw.mit.edu/ans7870/resources/Strang/Edited/Calculus/Calculus.pdf" },
    { title: "Linear Algebra Done Right", author: "Sheldon Axler", type: {en: "Mathematics", bn: "গণিত"}, desc: {en: "A clean, elegant approach to linear algebra", bn: "যোগাশ্রয়ী বীজগণিতের সুন্দর পন্থা"}, link: "https://linear.axler.net/LinearAlgebraDoneRight.pdf" },
    { title: "A Computational Introduction to Number Theory and Algebra", author: "Victor Shoup", type: {en: "Math · CS", bn: "গণিত · কম্পিউটার বিজ্ঞান"}, desc: {en: "Number theory with computing at its core", bn: "গণনার কেন্দ্রে সংখ্যাতত্ত্ব"}, link: "https://shoup.net/ntb/ntb-v2.pdf" },
    { title: "Structure and Interpretation of Computer Programs", author: "Abelson & Sussman", type: {en: "Computer Science", bn: "কম্পিউটার বিজ্ঞান"}, desc: {en: "The legendary MIT intro to programming", bn: "প্রোগ্রামিংয়ের কালজয়ী MIT পাঠ্যপুস্তক"}, link: "https://web.mit.edu/6.001/6.037/sicp.pdf" },
    { title: "Open Data Structures", author: "Pat Morin", type: {en: "Computer Science", bn: "কম্পিউটার বিজ্ঞান"}, desc: {en: "Efficient data structures, open and free", bn: "দক্ষ ডেটা স্ট্রাকচার, উন্মুক্ত ও বিনামূল্যে"}, link: "https://opendatastructures.org/ods-java.pdf" },
    { title: "Algorithms", author: "Jeff Erickson", type: {en: "CS · Math", bn: "কম্পিউটার বিজ্ঞান · গণিত"}, desc: {en: "Rigorous algorithms, free forever", bn: "কঠোরভাবে অ্যালগরিদম, চিরকাল বিনামূল্যে"}, link: "http://jeffe.cs.illinois.edu/teaching/algorithms/book/Algorithms-JeffE.pdf" },
    { title: "A Graduate Course in Applied Cryptography", author: "Boneh & Shoup", type: {en: "Applied", bn: "প্রয়োগ"}, desc: {en: "Where number theory secures the digital world", bn: "যেখানে সংখ্যাতত্ত্ব =ডিজিটাল দুনিয়ার রক্ষক"}, link: "https://toc.cryptobook.us/book.pdf" }
];

// Books hosted directly on this site under assets/Ebooks/ (no external links).
// Each entry supports an in-page PDF viewer ("View") and a direct "Download".
const LOCAL_PDF_BOOKS = [
    { title: "Discrete Mathematics and Its Applications (8th ed.)", author: "Kenneth Rosen", cat: "math", file: "Mathematics/Rosen, Kenneth H - Discrete mathematics and its applications-McGraw-Hill (8th ed)(2019).pdf" },
    { title: "Discrete Mathematics and Its Applications (7th ed.)", author: "Kenneth Rosen", cat: "math", file: "Mathematics/[Kenneth_Rosen]_Discrete_Mathematics_and_Its_Appli_7th_2.pdf" },
    { title: "Calculus - Early Transcendentals (8th Edition)", author: "James Stewart", cat: "math", file: "Mathematics/James Stewart - Calculus - Early transcendentals (8th Edition).pdf" },
    { title: "Calculus - Early Transcendentals (6th Edition)", author: "James Stewart", cat: "math", file: "Mathematics/_ Calculus - Early Transcendentals by James Stewart (8th Edition).pdf" },
    { title: "সহজ ক্যালকুলাস", author: "মুহম্মদ জাফর ইকবাল", cat: "math", file: "Mathematics/calculus-18-aug-16_pdf_14971604389804.pdf" },
    { title: "Advanced Calculus", author: "Lynn H. Loomis & Shlomo Sternberg", cat: "math", file: "Mathematics/Advanced_Calculus.pdf" },
    { title: "Calculus Volume 1", author: "OpenStax", cat: "math", file: "Mathematics/calculus-volume-1_-_WEB.pdf" },
    { title: "Calculus Volume 2", author: "OpenStax", cat: "math", file: "Mathematics/calculus-volume-2_-_WEB.pdf" },
    { title: "Calculus Volume 3", author: "OpenStax", cat: "math", file: "Mathematics/calculus-volume-3_-_WEB.pdf" },
    { title: "Linear Algebra", author: "Gilbert Strang", cat: "math", file: "Mathematics/linear-algebra-author-gilbert-strang.pdf" },
    { title: "Elementary Linear Algebra", author: "Howard Anton & Anton Kaul", cat: "math", file: "Mathematics/Elementary Linear Algebra.pdf" },
    { title: "Linear Algebra (General)", author: "Jim Heffereon", cat: "math", file: "Mathematics/Linear Algebra.pdf" },
    { title: "Elementary Number Theory", author: "Kenneth Rosen", cat: "math", file: "Mathematics/Elementary Number Theory by Keneth Rosen .pdf" },
    { title: "Number Theory (JHU Spring 2025)", author: "Egbert Rijke", cat: "math", file: "Mathematics/jhu-number-theory-spring-2025.pdf" },
    { title: "Graph Theory & Addititive Combinatorics", author: "Yufei Zhao", cat: "math", file: "Mathematics/gtacbook.pdf" },

    { title: "The Art of Computer Programming - Vol 1", author: "Donald Knuth", cat: "cs", file: "Mathematics/The_Art_of_Computer_Programming - Vol 1_text.pdf" },
    { title: "Introduction to Algorithms", author: "Cormen, Leiserson, Rivest & Stein", cat: "cs", file: "CS/IntroductiontoAlgorithms.pdf" },
    { title: "Introduction to Algorithms (Cormen)", author: "Cormen, Leiserson, Rivest & Stein", cat: "cs", file: "CS/Cormen Introduction to Algorithms.pdf" },
    { title: "Competitive Programming 1", author: "Halim & Halim", cat: "cs", file: "CS/cp1.pdf" },
    { title: "Competitive Programming 2", author: "Halim & Halim", cat: "cs", file: "CS/cp2.pdf" },
    { title: "Competitive Programming 3", author: "Halim & Halim", cat: "cs", file: "CS/cp3.pdf" },
    { title: "Programming Challenges", author: "Skiena & Revilla", cat: "cs", file: "CS/b2-programming_challenges.pdf" },
    { title: "Competitive Programmer’s Handbook", author: "Antti Laaksonen", cat: "cs", file: "CS/book.pdf" },
    { title: "ডায়নামিক প্রোগ্রামিং এ হাতেখড়ি", author: "তাসমিম রেজা ও মামনুন সিয়াম", cat: "cs", file: "CS/book-0.1.alpha.pdf" },
    { title: "Understanding Cryptography", author: "Christof Paar", cat: "cs", file: "CS/Understanding Cryptography by Christof Paar .pdf" }
];

const ARTICLES = [
    {
        id: 101,
        title: { en: "The Infinite Hotel Paradox", bn: "অসীম হোটেলের প্যারাডক্স" },
        author: { en: "Md Radif Hasan", bn: "মোঃ রাদ্বীফ হাসান" },
        role: { en: "President", bn: "সভাপতি" },
        date: { en: "Dec 26, 2025", bn: "২৬ ডিসেম্বর, ২০২৫" },
        readTime: { en: "12 min read", bn: "১২ মিনিট পাঠ" },
        desc: { 
            en: "Imagine a hotel with infinite rooms, all occupied. What happens when a new guest arrives?", 
            bn: "এমন একটি হোটেলের কথা চিন্তা করো যার কক্ষ সংখ্যা অসীম এবং সবগুলোই পূর্ণ। নতুন অতিথি এলে কি হবে?" 
        },
        image: "https://imgs.search.brave.com/eya5oUzh8bfOlXm79fOZbzgGjQYzYCovr_CWi1zfQRA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1tYW5hZ2VyLnN0/YXJzaW5zaWRlci5j/b20vZ2FsbGVyeS8x/MDgwL25hXzY3ZGFk/NGMyZjM0MzkuanBn",
        content: {
            en: `<p>If someone asked you, <em>"How many numbers are there between 1 and 3?"</em>—what would you answer? If you said "three", your answer would not be entirely correct. Because if you glance at the number line, you will see that between 1 and 3 there are infinitely many numbers—$1.2$, $2.7$, $\\sqrt{2}$, $\\pi$—name it! That "countless" quantity is precisely what we call <strong>infinity</strong>.</p>

<p>The Bengali poet Rabindranath Tagore seems to have understood infinity very well. That is why he wrote, <em>"In the midst of the finite, O Infinity, you play your tune."</em> Infinity is not a number; it points to a quantity or an idea. For example, the set of real numbers is infinite, and our universe is infinite. The limit human beings have not yet reached—that is the infinity closest to us.</p>

<h1 class="text-2xl font-bold mb-4">⧉ Hilbert's Grand Hotel</h1>
<p>Putting this idea of infinity to work, German mathematician <strong>David Hilbert</strong> created a paradox now known as the <em>Infinite Hotel Paradox</em> or <em>Hilbert's Grand Hotel Paradox</em>. It is a thought experiment that highlights a surprising property of infinite sets.</p>
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ From the pages of history</h3>
    <ol class="list-decimal list-inside space-y-3 text-gray-800">
        <li><span class="font-medium">1924:</span> Hilbert first presented the paradox in a lecture titled "Über das Unendliche" (On the Infinite) in Berlin.</li>
        <li><span class="font-medium">1947:</span> George Gamow popularized it worldwide in his book <em>"One Two Three ... Infinity"</em>.</li>
    </ol>
</div>
<p>Now the adventure of imagination begins. Why imagination? Because in reality you will never see a hotel with infinitely many rooms. So first, clear your mind completely—this paradox will plunge you into an infinite fantasy.</p>

<h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">The Hotel's Fairy Tale</h2>
<p>First, you must take on the role of a hotel manager. That special hotel has <strong>infinitely many floors</strong>, and each floor has <strong>infinitely many rooms</strong>. The funny thing is—even when the hotel is full to the brim with infinitely many people, it can still accommodate more. But how? You don't even know which room is the last one! So how will you make room for anyone new?</p>

<div class="bg-amber-50 border border-amber-200 p-6 rounded-xl my-8">
    <p class="font-medium">Key idea: the "size" of an infinite set does not obey the rules of our finite world. Hilbert's Hotel shows that an infinite set that looks completely "full" can still admit new elements—if we can move every existing guest according to a clear rule (a one-to-one matching, i.e. a bijection).</p>
</div>

<h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Journey 1: One New Guest</h2>
<p>At midnight a guest arrives, but the hotel is full. It is impossible to send him away at such an hour. The solution is simple—<strong>every person in the hotel moves to the next room</strong>:</p>
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <p>The person in room 1 goes to room 2, the one in room 2 goes to room 3, room 3's occupant goes to room 4 … and the person in room $n$ moves to room $n+1$. And so it continues to infinity.</p>
</div>
<p>Result—<strong>room number 1 becomes free</strong> for the new guest. Notice that here "infinity + 1 = infinity" remains; there is no last number, and no one was pushed out. From now on, the general rule for any <em>countably many</em> new guests (say $k$ of them):</p>
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <p class="font-medium">$$f(n) = n + k \\qquad \\text{(every guest moves } k \\text{ rooms back)}$$</p>
    <p>As a result, the first $k$ rooms ($1, 2, \\dots, k$) fall empty, and everyone still gets exactly one room.</p>
</div>

<h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Journey 2: Infinitely Many New Guests</h2>
<p>One morning a bus arrives carrying infinitely many passengers, and they are all very important people. This time too, no one can be turned away. But how? There is a way—the <strong>odd-even</strong> trick.</p>
<p>Ask the current guests to move into the room whose number is <strong>double</strong> their current room number:</p>
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <p class="font-medium">$$g(n) = 2n \\qquad \\text{(1 goes to 2, 2 goes to 4, 3 goes to 6, …)}$$</p>
    <p>Here $n$ is the current room number.</p>
</div>
<p>Notice that with this scheme, <strong>no one touches the odd rooms</strong>—nobody moves into an odd-numbered room anymore. As a result $1, 3, 5, 7, \\dots$—infinitely many odd rooms—have fallen empty. Now the infinitely many new passengers can be placed, one by one, into those odd rooms.</p>
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ The mathematical viewpoint</h3>
    <p>$g(n) = 2n$ is a <em>bijective</em> mapping—from the set of natural numbers onto the set of even numbers. This means there is a perfect pairing between the even numbers $(\\{2, 4, 6, \\dots\\})$ and the natural numbers $(\\{1, 2, 3, \\dots\\})$. In other words, the two sets have the same mathematical "size" (cardinality):</p>
    <p>$$|\\mathbb{N}| = |2\\mathbb{N}|$$</p>
    <p>And since the odd numbers are also infinite (of the form "$2k - 1$"), we accommodated infinitely many new guests while keeping the hotel full. In short, <strong>infinity + infinity = infinity</strong>.</p>
</div>

<h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Journey 3: Infinitely Many Buses, Each with Infinitely Many Passengers</h2>
<p>The hotel's fame spread; one day <strong>infinitely many buses</strong> arrive, each carrying <strong>infinitely many passengers</strong>. Your head may spin at this moment, but a little thought will reveal the solution. Because Euclid proved—<strong>there are infinitely many prime numbers</strong>. This is the key we are going to exploit.</p>

<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ A matter of combination</h3>
    <p>First, the current guests—if they are in room $n$, move them to room <strong>$2^n$</strong>:</p>
    <p class="text-slate-800">$$\\text{room } n \\rightarrow \\text{room } 2^n \\qquad (1 \\rightarrow 2,\\ 2 \\rightarrow 4,\\ 3 \\rightarrow 8,\\ 4 \\rightarrow 16, \\dots)$$</p>
</div>

<p>Now the passengers will use the powers of the <strong>next prime numbers</strong>:</p>
<ul class="list-disc pl-6 space-y-3 mb-8">
    <li>For the 1st bus, powers of $3$: the passenger in seat $j$ of bus 1 goes to room $3^j$. For example, the passenger in seat 7 goes to $3^7 = 2187$.</li>
    <li>For the 2nd bus, the next prime $5$: room $5^j$.</li>
    <li>For the 3rd bus, powers of $7$: room $7^j$.</li>
    <li>For the 4th bus, powers of $11$: room $11^j$ … and so on, forever.</li>
</ul>

<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ Why does this work?</h3>
    <ol class="list-decimal list-inside space-y-3 text-gray-800">
        <li><span class="font-medium">Unique Prime Factorization:</span> by the Fundamental Theorem of Arithmetic, every integer greater than $1$ can be written as a product of primes in <em>exactly one way</em> (ignoring order). For instance $36 = 2^2 \\times 3^2$. Since $2^n$ and $3^j$ can never be equal (otherwise the number would have two different factorizations), no two guests ever get the same room.</li>
        <li><span class="font-medium">Infinitely many primes:</span> for infinitely many buses we need infinitely many primes—guaranteed by Euclid's proof.</li>
        <li><span class="font-medium">Some rooms stay empty:</span> $6$, $10$, $12$—none of these is a power of a prime, so such rooms remain vacant. But that does not matter; our goal is simply to give everyone a room.</li>
    </ol>
</div>

<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ Euclid's proof: there are infinitely many primes</h3>
    <p>Suppose the primes are finite and are exactly $p_1, p_2, \\dots, p_k$. Now build a new number:</p>
    <p>$$N = p_1 \\cdot p_2 \\cdots p_k + 1$$</p>
    <p>Dividing $N$ by any of $p_1, p_2, \\dots, p_k$ leaves a remainder of $1$. So $N$ is not divisible by any number on the list; therefore $N$ is either itself a new prime, or a product of primes not on the list. Either way, our "finite" assumption is false. Hence there are infinitely many primes. (Proved)</p>
</div>

<h1 class="text-2xl font-bold mb-4">⧉ Countably Infinite vs. Uncountably Infinite</h1>
<p>Everything we have done so far works only for <strong>countably infinite</strong> sets—like $1, 2, 3, \\dots$. But in the world of decimals and real numbers the path is different. Cantor proved that even the set of decimals between $0$ and $1$ cannot be paired with $\\mathbb{N}$—because no matter how you list $[0,1]$, <strong>Cantor's diagonal argument</strong> lets you change one digit so that the new number matches none of the listed numbers.</p>
<div class="bg-amber-50 border border-amber-200 p-6 rounded-xl my-8">
    <p class="font-medium">So Hilbert's Hotel shows that infinity is not just one thing—according to Cantor, "uncountable infinity" characterises the world of real numbers, while "countable infinity" characterises the world of natural numbers. That is exactly why the prime-power method only succeeds for the countably infinite.</p>
</div>

<h1 class="text-2xl font-bold mb-4">⧉ The Historical Journey of Infinity</h1>
<p>Human beings have thought about infinity since the dawn of civilisation. Primitive people stared at the night sky in wonder at its vastness; Maya astronomers and the pyramid-builders of Egypt—all had their eyes fixed on the infinite. But the question is: when did the idea become formalised mathematically?</p>
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <ol class="list-decimal list-inside space-y-3 text-gray-800">
        <li><span class="font-medium">Bernard Bolzano:</span> the Czech priest and mathematician; in his book "Paradoxes of the Infinite" he first gave a mathematical definition of infinity.</li>
        <li><span class="font-medium">Georg Cantor (second half of the 19th century):</span> founder of set theory. While studying the continuity of trigonometric series, he showed that $\\mathbb{N}$ and $[0,1]$ are infinite sets of different sizes—there are "infinities inside infinity".</li>
    </ol>
</div>

<h1 class="text-2xl font-bold mb-4">⧉ The Universe, Space and Infinity</h1>
<p>Infinity stands firm in mathematics, but scientists struggle to pin it down in the physical world. Is space infinite? Is time? The universe? Answers have not fully arrived. A circle with a diameter of about $1{,}00{,}000$ billion billion (i.e. $10^{23}$) kilometres can hold our entire observable universe; but in the 90s scientists discovered the universe is <strong>expanding</strong>—still growing in size. Maybe the expansion will end at infinity! But where is that infinity?</p>

<p><strong>Black holes:</strong> scientists believe a <strong>singularity</strong> hides inside a black hole—an infinitesimal region whose density is <strong>infinite</strong>; all the mass of the black hole is fused there. It is about as close as mathematics gets to a real example of infinite density.</p>

<p><strong>The Planck length and discrete space:</strong> take a 1-metre stick and start breaking it—first in two, then in four, and so on a million times. Science says you cannot break it infinitely many times; because space is actually <strong>finite, or discrete</strong>. The smallest possible length is called the <strong>Planck length</strong>:</p>
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <p class="font-medium">$$\\ell_P \\approx 1.6 \\times 10^{-35} \\text{ metres}$$</p>
    <p>That is about $10$ billion billion billion billionth of a metre. Beyond this finite unit no further splitting is possible, so space is considered <em>discrete</em>—any length is built from countless Planck lengths stacked together.</p>
</div>

<h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">An infinite universe and parallel Earths?</h2>
<p>If the universe is made of a finite number of atoms, then only a finite number of arrangements of matter is possible. But if the universe is infinite, then some arrangement must inevitably repeat across its vastness—<strong>patterns will repeat</strong>. Then another planet like our Earth is only natural; Bangladesh's presence on its map would not be strange—even a resident resembling someone in Dhaka is far from impossible!</p>

<h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Infinite time and recurrence</h2>
<p>Leave an apple in a box. After one year it rots; after $100$ years it decays to dust; after a million years its chemical bonds break down into a plasma of elementary particles; and then that plasma can transform back into matter. The plasma faces countless billions of possible combinations. If time is infinite, then through regular recombinations that plasma might one day <strong>become an apple again</strong>. A profound question arises here—</p>
<div class="bg-amber-50 border border-amber-200 p-6 rounded-xl my-8">
    <p class="font-medium">Does infinite time hint at human immortality? What was, will be again; what has happened, will happen again.</p>
</div>

<h1 class="text-2xl font-bold mb-4">⧉ Conclusion</h1>
<p>Hilbert's Hotel teaches us that the "paradox" created when we try to measure infinity with finite thinking actually has a very logical solution. At every step we used one clear rule (a bijection)—$n+1$ for a single guest, $2n$ for infinitely many passengers, and powers of primes for the buses. This shows that the room count of a countably infinite set never changes; <strong>the infinite hotel is always "full" and yet can always take in more</strong>.</p>
<p>But this incredible building has no address in the real world. The mystery of infinity in the universe, time, and space remains unsolved. So next time you look at the night sky, remember—every star does not necessarily find its own prime-power room in the "hotel of infinity", but our imagination always does!</p>`,
            bn: `<p>আপনাকে যদি কখনো বলা হয়—"১ থেকে ৩ এর মধ্যে কতটি সংখ্যা আছে?"—তুমি কী উত্তর দেবেন? বললে যদি "তিনটি", তাহলে আপনার উত্তর পুরোপুরি সঠিক হবে না। কারণ সংখ্যারেখার দিকে তাকালে দেখা যাবে, ১ থেকে ৩ এর মধ্যে আছে অসংখ্য সংখ্যা—$1.2$, $2.7$, $\\sqrt{2}$, $\\pi$—কী নেই! এই "অসংখ্য" পরিমাণটাই হলো <strong>অসীম (Infinity)</strong>।</p>

<p>বিশ্বকবি রবীন্দ্রনাথ ঠাকুর হয়তো অসীমত্বের ব্যাপারটা খুব ভালো করেই বুঝেছিলেন। তাই তো তিনি লিখেছিলেন, <em>"সীমার মাঝে, অসীম, তুমি বাজাও আপন সুর"।</em> অসীম কোনো সংখ্যা নয়; এটি একটি পরিমাণ বা ধারণা নির্দেশ করে। যেমন, বাস্তব সংখ্যার সেট অসীম, আমাদের মহাবিশ্ব অসীম। যে সীমায় মানুষ আজও পৌঁছাতে পারেনি, সেটাই তার কাছের অসীম।</p>

<h1 class="text-2xl font-bold mb-4">⧉ হিলবার্টের গ্র্যান্ড হোটেল</h1>
<p>এই অসীমত্বকে কাজে লাগিয়ে জার্মান গণিতবিদ <strong>ডেভিড হিলবার্ট</strong> একটি প্যারাডক্স তৈরি করেন, যা <em>ইনফিনিট হোটেল প্যারাডক্স</em> বা <em>হিলবার্টের গ্র্যান্ড হোটেল প্যারাডক্স</em> নামে পরিচিত। এটি একধরনের চিন্তন পরীক্ষা (Thought Experiment), যা দিয়ে অসীম সেটের একটি অনির্দিষ্ট সম্পত্তি তুলে ধরা হয়েছে।</p>
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ ইতিহাসের পাতা থেকে</h3>
    <ol class="list-decimal list-inside space-y-3 text-gray-800">
        <li><span class="font-medium">১৯২৪:</span> হিলবার্ট ভারলিনে "Über das Unendliche" (অসীম প্রসঙ্গে) শীর্ষক এক লেকচারে প্রথম এই প্যারাডক্সটি উপস্থাপন করেন।</li>
        <li><span class="font-medium">১৯৪৭:</span> জর্জ গ্যামোর তাঁর "One Two Three ... Infinity" বইয়ে প্যারাডক্সটি উল্লেখ করলে এটি বিশ্বজুড়ে জনপ্রিয়তা পায়।</li>
    </ol>
</div>
<p>এবার কল্পনার চিন্তার পালা শুরু। কেন কল্পনা? কারণ বাস্তবে তুমি কখনো অসীম সংখ্যক কক্ষের হোটেল দেখতে পাবেন না। তাই আগে মাথাটা পুরোপুরি পরিষ্কার করে নিন—এই প্যারাডক্স আপনাকে অসীম এক কল্পনায় ডুবিয়ে দেবে।</p>

<h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">হোটেলের রূপকথা</h2>
<p>প্রথমেই আপনাকে একজন হোটেল ম্যানেজারের ভূমিকা নিতে হবে। বিশেষ সেই হোটেলটিতে <strong>অসীম সংখ্যক তলা</strong>, আর প্রতিটি তলায় <strong>অসীম সংখ্যক কক্ষ</strong>। মজার ব্যাপার হলো—এই হোটেলটি অসীম সংখ্যক মানুষে পূর্ণ থাকার পরও এতে আরও মানুষের জায়গা হওয়া সম্ভব। কিন্তু কীভাবে? এর শেষ কক্ষটি কোনটি, তা-ই তো আপনার জানা নেই! তাহলে নতুন কারও জায়গা দেবেন কী করে?</p>

<div class="bg-amber-50 border border-amber-200 p-6 rounded-xl my-8">
    <p class="font-medium">মূল ধারণা: অসীম সেটের "আকার" আমাদের পরিচিত সসীম জগতের নিয়মে চলে না। হিলবার্টের হোটেল দেখিয়ে দেয়—দেখতে "সম্পূর্ণ পূর্ণ" এমন একটি অসীম সেটেও নতুন উপাদান ঢোকানো সম্ভব, যদি আমরা প্রতিটি অতিথিকে স্পষ্ট নিয়মে ("এক-এক মিল" বা bijection) নতুন কক্ষে সরাতে পারি।</p>
</div>

<h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">যাত্রা ১: একজন নতুন অতিথি</h2>
<p>হঠাৎ এক অর্ধরাত্রে একজন অতিথি হোটেলে এলেন, কিন্তু হোটেল তো পূর্ণ। এত রাতে তাঁকে ফেরানোও অসম্ভব। সমাধান সহজ—হোটেলে অবস্থানরত <strong>প্রতিটি মানুষ তাদের পরের কক্ষে</strong> চলে যাবে:</p>
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <p>১ নং কক্ষের মানুষ যাবে ২ নং-এ, ২ নং-এর জন ৩ নং-এ, ৩ নং-এর জন ৪ নং-এ … এবং $n$ তম কক্ষের মানুষ যাবে $n+1$ তম কক্ষে। এভাবে চলবে অসীম পর্যন্ত।</p>
</div>
<p>ফলাফল—নতুন অতিথির জন্য <strong>১ নং কক্ষটি ফাঁকা</strong>। লক্ষ করো, এখানে "অসীম + ১ = অসীম" থেকে গেল; কোনো শেষ সংখ্যা নেই, কোনো কক্ষও খালি হলো না শেষের দিকে discharging করে। এখন থেকে যেকোনো <em>গণনাযোগ্য</em> সংখ্যক অতিথির (ধরা যাক $k$ জন) জন্য সাধারণ নিয়ম:</p>
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <p class="font-medium">$$f(n) = n + k$$</p>
    <p>প্রতিটি অতিথি ঘরের নম্বরে $k$ যোগ করবে; ফলে সামনের $k$টি কক্ষ ($1, 2, \\dots, k$) ফাঁকা পড়ে, আর সবাই একটি-একটি কক্ষ পায়।</p>
</div>

<h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">যাত্রা ২: অসীম সংখ্যক নতুন অতিথি</h2>
<p>কোনো এক সকালে অসীম সংখ্যক যাত্রী নিয়ে একটি বাস হাজির, আর সকলেই কীর্তিমান ব্যক্তি। এবারো কাউকে ফেরানো যাবে না। উপায়? উপায় আছে—<strong>জোড়-বিজোড়</strong> কৌশল।</p>
<p>বর্তমানে যে অতিথিরা হোটেলে আছেন, তাদের সবাইকে তাদের কক্ষ নম্বরের <strong>দ্বিগুণ</strong> কক্ষে সরিয়ে দিন:</p>
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <p class="font-medium">$$g(n) = 2n$$</p>
    <p>অর্থাৎ ১ নং যায় ২ নং-এ, ২ নং যায় ৪ নং-এ, ৩ নং যায় ৬ নং-এ, … — এখানে $n$ হলো বর্তমান কক্ষ নম্বর।</p>
</div>
<p>লক্ষ করো, পদ্ধতিটি ব্যবহার করা হলে <strong>বিজোড় কক্ষগুলোর কাছে আনুমাত্রা নেই</strong>—অর্থাৎ কেউই আর বিজোড় কক্ষে যাচ্ছে না। ফলে $1, 3, 5, 7, \\dots$—অসীম সংখ্যক বিজোড় কক্ষ ফাঁকা হয়ে গেল। এবার নতুন আসা অসীম সংখ্যক যাত্রীদের ক্রমান্বয়ে ঐ বিজোড় কক্ষগুলোতে বসানো যায়।</p>
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ গাণিতিক দৃষ্টিকোণ (Mathematical Viewpoint)</h3>
    <p>$g(n) = 2n$ একটি <em>এক-এক ও উপর</em> (bijective) প্রতিচিত্রণ—স্বাভাবিক সংখ্যার সেটকে জোড় সংখ্যার সেটে। এর মানে, জোড় সংখ্যার সেট $(\\{2, 4, 6, \\dots\\})$ এবং স্বাভাবিক সংখ্যার সেট $(\\{1, 2, 3, \\dots\\})$ এর মধ্যে একটি নিখুঁত জুড়ি (pairing) স্থাপন গেছে। অর্থাৎ দুটো সেটের গাণিতিক "আকার" (cardinality) <strong>সমান</strong>:</p>
    <p>$$|\\mathbb{N}| = |2\\mathbb{N}|$$</p>
    <p>এবং যেহেতু বিজোড় সংখ্যাও অসীম ("$2k - 1$" আকারের), তাই হোটেলের সবাইকে পূর্ণ রেখেই অসীম সংখ্যক নতুন অতিথিকে জায়গা দিলাম। অর্থাৎ <strong>অসীম + অসীম = অসীম</strong>।</p>
</div>

<h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">যাত্রা ৩: অসীম সংখ্যক বাস, প্রতিটিতে অসীম যাত্রী</h2>
<p>হোটেলের খ্যাতি ছড়িয়ে পড়ল; হঠাৎ একদিন <strong>অসীম সংখ্যক বাস</strong> হাজির, প্রতিটি বাসে <strong>অসীম সংখ্যক যাত্রী</strong>। এবার মাথা ঘোরাটা স্বাভাবিক, কিন্তু অল্প ভাবলেই সমাধান পেয়ে যাব। কারণ ইউক্লিড প্রমাণ করে গেছেন—<strong>মৌলিক সংখ্যা অসীম</strong>। এই সত্যটিকে আমরা পুঁজি করব।</p>

<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ কম্বিনেশনের সম্ভাবনা</h3>
    <p>আজকের হোটেলের অতিথিরা $n$ নম্বর কক্ষে থাকলে তাঁদের সরানো হয় <strong>$2^n$</strong>-এ:</p>
    <p class="text-slate-800">$$n \\rightarrow 2^n$$</p>
    <p>অর্থাৎ কক্ষ ১ এর অতিথি যান ২-এ ($2^1$), কক্ষ ২ এর যান ৪-এ ($2^2$), কক্ষ ৩ এর যান ৮-এ ($2^3$) … এই বিন্যাস চলতে থাকে।</p>
</div>

<p>এবার যাত্রীদের জন্য ব্যবহার হবে <strong>পরের মৌলিক সংখ্যার ঘাত</strong>:</p>
<ul class="list-disc pl-6 space-y-3 mb-8">
    <li>১ম বাসের যাত্রীদের জন্য $3$ এর ঘাত: ১ম বাসের $j$ নং আসনের যাত্রী যাবেন $3^j$ নং-এ। যেমন $7$ নং আসনের যাত্রী যাবেন $3^7 = 2187$ নং-এ।</li>
    <li>২য় বাসের জন্য পরের মৌলিক সংখ্যা $5$ এর ঘাত: $5^j$।</li>
    <li>৩য় বাসের জন্য $7$ এর ঘাত: $7^j$।</li>
    <li>৪র্থ বাসের জন্য $11$ এর ঘাত: $11^j$ … এবং এভাবে চলতে থাকবে।</li>
</ul>

<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ কেন এই পদ্ধতি কাজ করে? (Why It Works)</h3>
    <ol class="list-decimal list-inside space-y-3 text-gray-800">
        <li><span class="font-medium">অনন্য মৌলিক উৎপাদক (Unique Prime Factorization):</span> পাটিগণিতের মৌলিক উপপাদ্য (Fundamental Theorem of Arithmetic) অনুযায়ী, প্রতিটি $1$ অপেক্ষা বড় পূর্ণসংখ্যাকে মৌলিক সংখ্যার গুণফল হিসেবে <em>একমাত্র উপায়ে</em> লেখা যায় (ক্রম বাদ দিয়ে)। যেমন $36 = 2^2 \\times 3^2$। কারণ $2^n$ এবং $3^j$ কখনোই সমান হতে পারে না (অন্যথায় দুটি ভিন্ন ভাঙন থাকত), তাই কোনো দুই অতিথি কখনো একই কক্ষ পাবে না।</li>
        <li><span class="font-medium">অসীম মৌলিক সংখ্যা (Infinitely Many Primes):</span> অসীম সংখ্যক বাসের জন্য অসীম সংখ্যক মৌলিক দরকার—যা ইউক্লিডের প্রমাণে নিশ্চিত।</li>
        <li><span class="font-medium">কিছু কক্ষ খালি থাকবে:</span> $6$, $10$, $12$—এসব সংখ্যা কোনো মৌলিক সংখ্যার ঘাত নয়, তাই এ কক্ষগুলো ফাঁকা থাকবে। কিন্তু সমস্যা নেই; আমাদের লক্ষ্য তো সবাইকে জায়গা দেওয়া।</li>
    </ol>
</div>

<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ ইউক্লিডের প্রমাণ: মৌলিক সংখ্যা অসীম (Proof That Primes Are Infinite)</h3>
    <p>ধরি, মৌলিক সংখ্যা সসীম এবং সেগুলো $p_1, p_2, \\dots, p_k$। এবার একটি নতুন সংখ্যা তৈরি করি:</p>
    <p>$$N = p_1 \\cdot p_2 \\cdots p_k + 1$$</p>
    <p>$N$-কে $p_1, p_2, \\dots, p_k$-এর যেকোনোটি দিয়ে ভাগ করলে ভাগশেষ হয় $1$। সুতরাং $N$ এই তালিকার কোনো সংখ্যা দিয়ে বিভাজ্য নয়; তার মানে $N$ হয় নিজেই নতুন মৌলিক, নয়তো তালিকায় নেই এমন মৌলিকের গুণফল। দুই ক্ষেত্রেই আমাদের "সসীম" ধারণা ভুল। অতএব মৌলিক সংখ্যা অসীম। (প্রমাণিত)</p>
</div>

<h1 class="text-2xl font-bold mb-4">⧉ গণনাযোগ্য অসীম বনাম অগণনাযোগ্য অসীম</h1>
<p>এতক্ষণ যা করলাম তা কাজ করে <strong>কেবলমাত্র গণনাযোগ্য অসীম</strong> (Countably Infinite) এর জন্য—যেমন $1, 2, 3, \\dots$। কিন্তু দশমিক বা বাস্তব সংখ্যার (Real Numbers) দুনিয়ায় পথ আলাদা। ক্যান্টর প্রমাণ করেছেন, $0$ থেকে $1$-এর মধ্যকার দশমিক সংখ্যাগুলোর সেট-ও $\\mathbb{N}$-এর সাথে জুড়ি দেওয়া যায় না—কারণ $[0, 1]$ কে কোনো পূর্ণসংখ্যা তালিকায় সাজালেও আমরা <strong>তির্যক যুক্তি</strong> (Cantor's Diagonal Argument) দিয়ে সর্বদা একটি ডিজিট এমনভাবে বদলাতে পারি যে নতুন সংখ্যাটি তালিকার কোনো সংখ্যার সাথে মেলে না।</p>
<div class="bg-amber-50 border border-amber-200 p-6 rounded-xl my-8">
    <p class="font-medium">তাই হিলবার্টের হোটেল দেখায়—অসীম শুধু একটাই নয়; ক্যান্টরের মতে "অগণনাযোগ্য অসীম" হলো বাস্তব সংখ্যার দুনিয়ার বৈশিষ্ট্য, আর "গণনাযোগ্য অসীম" হলো স্বাভাবিক সংখ্যার দুনিয়ার। মৌলিক সংখ্যার ঘাত-পদ্ধতি এ কারণেই কেবল গণনাযোগ্য অসীমের ক্ষেত্রে সফল।</p>
</div>

<h1 class="text-2xl font-bold mb-4">⧉ অসীমের ঐতিহাসিক যাত্রা</h1>
<p>অসীম নিয়ে মানুষ সভ্যতার শুরু থেকেই ভেবেছে। আদিমানব রাতের আকাশের দিকে তাকিয়ে এর বিস্তার দেখে বিস্মিত হয়েছে; আর মায়া সভ্যতার জ্যোতির্বিজ্ঞানী, মিশরের পিরামিড-নির্মাতা—সবার চোখ অসীমের দিকে ছিল। কিন্তু প্রশ্ন হলো, গাণিতিকভাবে এই ভাবনা কবে আনুষ্ঠানিক হলো?</p>
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <ol class="list-decimal list-inside space-y-3 text-gray-800">
        <li><span class="font-medium">বার্নার্ড বোলজানো:</span> চেক পাদ্রী ও গণিতবিদ; তাঁর "Paradoxes of the Infinite" গ্রন্থে প্রথম গাণিতিক দৃষ্টিকোণ থেকে অসীমের সংজ্ঞা দাও।</li>
        <li><span class="font-medium">গেয়র্গ ক্যান্টর (১৯ শতকের দ্বিতীয়ার্ধ):</span> সেট তত্ত্বের প্রবর্তক। ত্রিকোণমিতিক ধারার অবিচ্ছিন্নতা নিয়ে কাজ করতে গিয়ে তিনি দেখান—$\\mathbb{N}$ ও $[0,1]$ আলাদা আকারের অসীম; "অসীমের মধ্যে অসীম" আছে।</li>
    </ol>
</div>

<h1 class="text-2xl font-bold mb-4">⧉ মহাবিশ্ব, স্থান ও অসীম</h1>
<p>গণিতে অসীমের অবস্থান এখন সুদৃঢ়, কিন্তু জাগতিক জগতে এর খোঁজ পেতে বেগ পাচ্ছেন বিজ্ঞানীরা। মহাশূন্য কি অসীম? সময় কী? মহাবিশ্ব? উত্তর এখনো পুরোপুরি মেলেনি। মহাবিশ্বের প্রায় $1{,}00{,}000$ বিলিয়ন বিলিয়ন (অর্থাৎ $10^{23}$) কিলোমিটার দীর্ঘ ব্যাসের একটি বৃত্ত আমাদের সমগ্র মহাবিশ্বকে দখল করে নিতে সক্ষম; কিন্তু $90$-এর দশকে বিজ্ঞানীরা দেখান মহাবিশ্ব <strong>সম্প্রসারিত</strong> হচ্ছে—এখনো এর আকার ক্রমবর্ধমান। হয়তো অসীমেই শেষ হবে এই সম্প্রসারণ! কিন্তু সেই অসীমের অবস্থান কোথায়?</p>

<p><strong>কৃষ্ণগহ্বর (Black Hole):</strong> বিজ্ঞানীরা মনে করেন, ব্ল্যাকহোলের অভ্যন্তরে একটি <strong>সিঙ্গুলারিটি</strong> (Singularity) বিরাজ করে—ক্ষুদ্রাতিক্ষুদ্র এক স্থান, যার ঘনত্ব <strong>অসীম</strong>; ব্ল্যাকহোলের সমস্ত ভর সেখানে একীভূত। গণিতের কোথাও একটা অসীম ঘনত্বের উদাহরণ পাওয়া যায় এখানেই।</p>

<p><strong>প্ল্যাঙ্ক দৈর্ঘ্য ও বিযুক্ত স্থান:</strong> ১ মিটার লম্বা একটি লাঠি ভাঙা শুরু করি—প্রথমে দুই ভাগ, তারপর চার ভাগ, এভাবে দশলাখ বার। বিজ্ঞান বলেন, এভাবে অসীম সংখ্যকবার ভাঙা সম্ভব নয়; কারণ স্থান আসলে <strong>সসীম বা বিযুক্ত</strong>। সবচেয়ে ক্ষুদ্রতম দৈর্ঘ্যকে বলা হয় <strong>প্ল্যাঙ্ক দৈর্ঘ্য</strong>:</p>
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <p class="font-medium">$$\\ell_P \\approx 1.6 \\times 10^{-35} \\text{ m}$$</p>
    <p>অর্থাৎ ১ মিটারের প্রায় $10$ বিলিয়ন বিলিয়ন বিলিয়ন বিলিয়ন (এক ভাগেরও কম) ভাগের একটি। এই সসীম এককের বাইরে ভাঙা অসম্ভব, তাই স্থানকে <em>ডিসক্রিট</em> (Discrete) ধরা হয়—যেকোনো দৈর্ঘ্য গঠিত অসংখ্য প্ল্যাঙ্ক-দৈর্ঘ্যের সমন্বয়ে।</p>
</div>

<h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">অসীম মহাবিশ্ব ও সমান্তরাল পৃথিবী?</h2>
<p>মহাবিশ্ব যদি সসীম সংখ্যক পরমাণু দিয়ে গঠিত হয়, তবে এর মধ্যে বস্তুগুলোর সসীম সংখ্যক বিন্যাসই সম্ভব। কিন্তু মহাবিশ্ব যদি অসীম হয়, তাহলে এই বিন্যাস বিশাল মহাবিশ্বে পুনরাবৃত্তি হতে বাধ্য—<strong>প্যাটার্ন রিপিট করবে</strong>। তাহলে এই পৃথিবীর মতো আরেকটি গ্রহের অস্তিত্ব স্বাভাবিক; সেখানকার মানচিত্রে বাংলাদেশের উপস্থিতি অস্বাভাবিক নয়—এমনকি ঢাকার কোনো বাসিন্দার মতো একজনের অস্তিত্বও দূরকল্পনা নয়!</p>

<h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">অসীম সময় ও পুনরাবৃত্তি</h2>
<p>একটি আপেল একটি বাক্সে রেখে দেওয়া হলো। ১ বছর পর পচন ধরল; $100$ বছর পর ক্ষয়ে ধুলো; লক্ষ বছর পর রাসায়নিক বন্ধন ভেঙে মৌলিক কণার প্লাজমা; এরপর সেই প্লাজমা আবার বস্তুতে রূপান্তরিত হতে পারে। প্লাজমার সামনে রয়েছে লাখো-বিলিয়ন-বিলিয়ন সম্ভাব্য সমন্বয়। সময় যদি অসীম হয়, তবে নিয়মিত কম্বিনেশনের কারণে সেই প্লাজমা কোনও একদিন <strong>আবার আপেল</strong> হয়ে উঠতে পারে। এখানে একটি গভীর প্রশ্ন দাঁড়ায়—</p>
<div class="bg-amber-50 border border-amber-200 p-6 rounded-xl my-8">
    <p class="font-medium">অসীম সময় কি মানুষের অমরত্বের ইঙ্গিত দেয়? যা ছিল, তা আবার হবে; যা ঘটেছে, তা আবার ঘটবে।</p>
</div>

<h1 class="text-2xl font-bold mb-4">⧉ উপসংহার</h1>
<p>হিলবার্টের হোটেল আমাদের শেখায়, সসীম চিন্তা দিয়ে অসীমকে মাপতে গেলে যে "প্যারাডক্স" বা হেঁয়ালি তৈরি হয়, তার সমাধান কিন্তু খুবই যুক্তিনির্ভর। প্রতিটি ধাপে আমরা একটি-একটি স্পষ্ট নিয়ম (bijection) ব্যবহার করেছি—একজন অতিথির জন্য $n+1$, অসীম যাত্রীর জন্য $2n$, আর বাসগুলো অনুসারে মৌলিক সংখ্যার ঘাত। এতে দেখা যায়, গণনাযোগ্য অসীমের সে কক্ষসংখ্যা কখনো বদলায় না; <strong>অসীম হোটেল সবসময় "পূর্ণ" আর সবসময় আরও কিছু ধারণ করতে পারে</strong>।</p>
<p>তবে এই অবিশ্বাস্য ভবনের বাস্তব জগতে কোনো বাসস্থান নেই। মহাবিশ্ব, সময়, স্থান—সবখানেই অসীমের রহস্য আজও অমীমাংসিত। তাই পরের বার যখন রাতের আকাশ দেখবে, মনে রাখবে—আকাশের প্রতিটি তারা "অসীমের হোটেলে" নিজের মৌলিক-ঘাত-কক্ষ খুঁজে পায় না, কিন্তু আমাদের কল্পনা অবশ্যই পায়!</p>`
        }
    },
    {
        id: 102,
        title: { en: "Number Theroy and Prime Number", bn: "সংখ্যাতত্ত্ব ও মৌলিক সংখ্যা" },
        author: { en: "Md Radif Hasan", bn: "মোঃ রাদ্বীফ হাসান" },
        role: { en: "President", bn: "সভাপতি" },
        date: { en: "Mar 13, 2026", bn: "১৩ মার্চ, ২০২৬" },
        readTime: { en: "22 min read", bn: "২২ মিনিট পাঠ" },
        desc: { en: "One of the most interesting topics for mathematicians and computer scientists.", bn: "গণিতবিদ ও কম্পিউটার বিজ্ঞানীদের অন্যতম সবচেয়ে আগ্রহের বিষয়বস্তু" },
        image: "https://plus.unsplash.com/premium_photo-1753191396890-bb83bf96fc3c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: {
            en: `
<p>If mathematics is called the queen of science, then number theory is called the queen of mathematics. Every technology and security system in today's world is built around the use of number theory. In fact, it is the oldest branch of mathematics. Mathematicians of ancient Greece, India, China and Mesopotamia have been studying the properties of integers and prime numbers for thousands of years. The famous Greek mathematician Euclid had already given a proof of the infinitude of prime numbers as early as 300 BC.
The development of number theory owes a profound and fundamental debt to Muslim and Indian mathematicians. Without their discoveries, today's modern mathematics and digital technology would remain incomplete.</p>

<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ Contributions of Hindu (Ancient and Medieval Indian) Mathematicians</h3>
        <p>The greatest contribution of Indian mathematicians is that they changed the language of the entire discipline of mathematics.</p>
    <ol class="list-decimal list-inside space-y-3 text-gray-800">
        <li>
            <span class="font-medium">Zero ($0$) and the Decimal Positional System:</span>
            The very foundation of number theory is the way numbers are written. Indian mathematicians were the first to recognize zero ($0$) as a distinct number of its own and to give the complete form of the base-10 positional system, which made all of mathematical calculation far easier.
        </li>
        <li>
            <span class="font-medium">Aryabhata (476–550 AD):</span>
            He devised an algorithm named "Kuttaka" for solving linear Diophantine equations ($ax + by = c$), an early and extremely powerful form of modular arithmetic.
        </li>
        <li>
            <span class="font-medium">Brahmagupta (598–668 AD):</span>
            He recorded the correct rules for computing with negative numbers and zero. He also discovered a composition method named "Bhavana" for solving indeterminate quadratic equations (later mistakenly known as 'Pell's Equation', $Nx^2 + 1 = y^2$).
        </li>
        <li>
            <span class="font-medium">Bhaskara II (1114–1185 AD):</span>
            Carrying Brahmagupta's work a step further, he invented the "Chakravala method". It was such an original technique for solving Pell's Equation that European mathematicians (such as Fermat or Lagrange) could only solve it almost 500 years later.
        </li>
    </ol>
</div>
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ Contributions of Muslim (Islamic Golden Age) Mathematicians</h3>
    <p>During the Islamic Golden Age (8th–14th centuries), centred around Baghdad's House of Wisdom, Muslim mathematicians combined Indian and Greek mathematics and brought unprecedented advances to number theory.</p>
    <ol class="list-decimal list-inside space-y-3 text-gray-800">
        <li>
            <span class="font-medium">Al-Khwarizmi (780–850 AD):</span> He is called the father of algebra. He wrote the book 'Kitab al-Jam' wal-Tafriq bi-Hisab al-Hind' on the Indian decimal system and the use of zero. It was through the Latin translation of this book that Europeans first came to know the modern system of numerals (what today we call 'Arabic Numerals').
        </li>
        <li>
            <span class="font-medium">Thabit ibn Qurra (826–901 AD):</span>
A beautiful branch of number theory is 'Amicable Numbers'—two numbers such that the sum of the proper divisors of one equals the other. Thabit ibn Qurra discovered a general theorem (Thabit's Theorem) for finding such pairs of numbers, one of the milestones in the history of number theory.        </li>
        <li>
            <span class="font-medium">Al-Karaji (953–1029 AD):</span>
            He used an early form of mathematical induction in number theory and proved the sum of cubes from $1$ to $n$: $1^3 + 2^3 + \\dots + n^3 = (1 + 2 + \\dots + n)^2$.
        </li>
        <li>
            <span class="font-medium">Ibn al-Haytham (965–1040 AD):</span>
The highly important "Wilson's Theorem" of number theory—used to identify prime numbers—was clearly stated and applied by Ibn al-Haytham long before the European John Wilson claimed it in 1770.        
       </li>
        <li>
            <span class="font-medium">Kamal al-Din al-Farisi (1267–1319 AD):</span>
He greatly expanded Euclid's theories on prime numbers and provided an early form of the Fundamental Theorem of Arithmetic, which states that every composite number can be expressed as a unique product of prime numbers.       </li>
    </ol>
</div>

Now let us come to the uses of number theory. For a long time, number theory was regarded as "pure mathematics", and it was said to have no real or commercial application. But in the age of modern information technology, number theory is deeply woven into our daily lives and has become the very foundation of personal and state security. Let us look at its real applications at a glance:

<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ Real Applications of Number Theory</h3>
    <ol class="list-decimal list-inside space-y-3 text-gray-800">
        <li>
Cybersecurity and Cryptography: When you do banking online, send an encrypted message on WhatsApp, or use a password—the RSA encryption algorithm works behind the scenes. It is built entirely on large prime numbers and the modular arithmetic of number theory.            </li>
        <li>
Computer Science and Coding Theory: To ensure that no information gets corrupted during data transmission, "error-correcting codes" are used, which depend on number theory.
        <li>
      Computer Algorithms and Pseudo-Random Numbers: For lotteries, security key generation and game development, random numbers are produced using the formulas of number theory.
              </li>
        <li>
Quantum Computing and System Security: It is being used extensively in designing security protocols for the next generation of fast computers.      
</li>
    </ol>
</div>
Now if we had not discovered or used number theory and its formulas, our modern digital world would be frozen forever:
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ What Would Happen If Number Theory Were Not Used?</h3>
    <ol class="list-decimal list-inside space-y-3 text-gray-800">
        <li>
No secure internet service would exist: no e-commerce, online banking, or confidential messaging service could be built. Credit card information and passwords would travel over the internet in plain form, and anyone could steal them.
        <li>
Privacy in cyberspace would become zero: there would be no way to encrypt digital files, so any military, governmental or personal digital information would easily be hacked.
        <li>
The digital economy would come to a halt: today's global online trade, digital currency or online shopping network could not function at all without encryption.
              </li>
        <li>
The progress of computing science would be obstructed: the road to data compression, networking protocols and precise fast algorithms would be blocked.
</li>
    </ol>
</div>
So number theory is not called the "Queen of Mathematics" in vain—this play of numbers is the backstage artisan that keeps today's modern digital age secure. <br>
<p>Now we shall enter the real heart of the matter—the world of number theory itself. To tell the truth, this branch of mathematics is very large. It is very difficult to introduce it fully in a single article, and I also have my own limitations of knowledge. We shall therefore discuss only those parts that are easy to understand and have real applications around us.
<br>An elementary reading of number theory essentially begins with the fundamental units of counting, the natural numbers $\\mathbb{N} = \\{1, 2, 3, 4, \\dots\\}$, and with establishing mathematical relations among them.
</p>

<h1 class="text-2xl font-bold mb-4">⧉ Integers and the Peano Axioms</h1>
The central object and foundation of number theory is the set of integers $\\mathbb{Z} = \\{\\dots, -2, -1, 0, 1, 2, \\dots\\}$. In the history of mathematics, the Peano Axioms are a revolutionary milestone. At first glance the natural numbers $1, 2, 3 \\dots$ seem so simple and self-evident; yet for mathematicians the big question was: "How can we be sure that the very numbers on which all of mathematics stands have a mathematically flawless foundation?" In 1889 the Italian mathematician Giuseppe Peano gave the following axioms:
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <ol class="list-decimal list-inside space-y-3 text-gray-800">
        <li><span class="font-medium">Initial element:</span> $1$ is a natural number ($1 \\in \\mathbb{N}$).</li>
        <li><span class="font-medium">Successor:</span> Every natural number $n$ has a unique successor $S(n)$ (for example: $S(1) = 2$).</li>
        <li><span class="font-medium">Initial form:</span> $1$ is not the successor of any natural number.</li>
        <li><span class="font-medium">Uniqueness:</span> If $S(a) = S(b)$, then $a = b$.</li>
       <li><span class="font-medium">Mathematical Induction:</span> If a set $K \\subseteq \\mathbb{N}$ is such that $1 \\in K$, and for every $k \\in K$ we have $S(k) \\in K$, then $K = \\mathbb{N}$.</li>
</ol>
</div>
Here the word 'successor' simply means—"the next number" or "the one after it". In the language of number theory or mathematics, if some number is taken as $n$, then the very next number $n + 1$ is its successor. For example: the successor of $1$ is $2$ (since $1 + 1 = 2$). The successor of $5$ is $6$. So the successor of $n$ is generally written $S(n)$, that is, $S(n) = n + 1$.
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ Significance of the Peano Axioms in Mathematics</h3>
    <ol class="list-decimal list-inside space-y-3 text-gray-800">
        <li>
<span class="font-medium">Rigorous Foundation of Mathematics: </span>In the late nineteenth century mathematicians realized that to maintain rigour in proofs, the foundation of mathematics must be tied to axioms or postulates. The Peano Axioms place arithmetic and number theory on a solid foundation.
        <li>
<span class="font-medium">The Birth of Mathematical Induction: </span>The 5th Peano axiom is exactly the principle of mathematical induction. For proving that countless mathematical statements of number theory, algebra and olympiads ($1 + 2 + \\dots + n = \\frac{n(n+1)}{2}$) hold for an infinite number of values, this principle is the only powerful tool.
        <li>
<span class="font-medium">Application in Computer Science and Programming: </span>In modern computer science, the notions of recursion and functional programming depend directly on the 'successor' and the inductive structure of the Peano Axioms. Data structures like the 'linked list', or natural number type systems (for example in languages like Haskell or Coq), are realized by Peano arithmetic.
        <li>
<span class="font-medium">Formal Logic and Automated Proof: </span>To verify with a computer whether a mathematical proof is correct (for example with proof assistants such as Lean or Coq), mathematics must be decomposed all the way down to the most basic axioms. The Peano Axioms are the key regulator of this kind of logic-based mathematical model.
    </ol>
</div>
<h1 class="text-2xl font-bold mb-4">⧉ Divisibility</h1>

Divisibility is a very simple matter. We have been familiar with it since childhood. But now we shall not go the way of those theoretical ramblings. As children we did sums like "what is 6 divided by 2" or "what is the remainder when 101 is divided by 2". Now let us study a bit more systematically how these things actually work.

<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ Key Properties of Divisibility</h3>
    <ol class="list-decimal list-inside space-y-4 text-gray-800">
        <li>
            <span class="font-medium">Reflexive and Transitive Properties:</span>
            <ul class="list-disc list-inside ml-5 mt-2 space-y-1">
                <li>$a \\mid a$ (for every $a \\neq 0$)</li>
                <li>If $a \\mid b$ and $b \\mid c$, then $a \\mid c$</li>
            </ul>
        </li>
        <li>
            <span class="font-medium">Linear Combination:</span>
            <ul class="list-disc list-inside ml-5 mt-2 space-y-1">
                <li>
                    If $a \\mid b$ and $a \\mid c$, then for any integers $x, y$:
                    <div class="my-1">\\[a \\mid (bx + cy)\\]</div>
                </li>
            </ul>
        </li>
        <li>
            <span class="font-medium">Product and Divisibility:</span>
            <ul class="list-disc list-inside ml-5 mt-2 space-y-1">
                <li>If $a \\mid b$, then for any integer $c$ we have $a \\mid bc$</li>
            </ul>
        </li>
        <li>
            <span class="font-medium">Boundedness:</span>
            <ul class="list-disc list-inside ml-5 mt-2 space-y-1">
                <li>If $a \\mid b$ and $b \\neq 0$, then $|a| \\le |b|$</li>
            </ul>
        </li>
        <li>
            <span class="font-medium">Mutual Divisibility:</span>
            <ul class="list-disc list-inside ml-5 mt-2 space-y-1">
                <li>If $a \\mid b$ and $b \\mid a$, then $a = \\pm b$</li>
            </ul>
        </li>
        <li>
            <span class="font-medium">Coprime (Relatively Prime) Properties:</span>
            <ul class="list-disc list-inside ml-5 mt-2 space-y-2">
                <li>
                    If $a \\mid bc$ and $\\gcd(a, b) = 1$ (that is, $a$ and $b$ are coprime), then:
                    <div class="my-1">\\[a \\mid c\\]</div>
                </li>
                <li>
                    If $a \\mid n$ and $b \\mid n$, where $\\gcd(a, b) = 1$, then:
                    <div class="my-1">\\[ab \\mid n\\]</div>
                </li>
            </ul>
        </li>
    </ol>
</div>
The best way to understand these properties is to test them with various numbers. Now let us look at some digit-based divisibility rules:
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-2">⧉ Digit-based Divisibility Rules</h3>
    
    <p class="mb-4 text-gray-800">
        Let $N$ be a $k$-digit number, which can be written as: 
        \\[N = (a_k a_{k-1} \\dots a_1 a_0)_{10} = \\sum_{i=0}^{k} a_i 10^i\\]
    </p>

    <ol class="list-decimal list-inside space-y-4 text-gray-800">
        <li>
            <span class="font-medium">Divisibility by $2, 4, 8, 2^m$:</span>
            <ul class="list-disc list-inside ml-5 mt-2 space-y-2">
                <li>
                    $2 \\mid N \\iff 2 \\mid a_0$ (the last digit is even)
                </li>
                <li>
                    $4 \\mid N \\iff 4 \\mid (10a_1 + a_0)$ (the number formed by the last two digits is divisible by $4$)
                </li>
                <li>
                    $2^m \\mid N \\iff 2^m \\mid$ the number formed by the last $m$ digits
                </li>
            </ul>
        </li>

        <li>
            <span class="font-medium">Divisibility by $3$ and $9$:</span>
            <ul class="list-disc list-inside ml-5 mt-2 space-y-2">
                <li>
                    $3 \\mid N \\iff 3 \\mid (a_0 + a_1 + \\dots + a_k)$ (the sum of the digits is divisible by $3$)
                </li>
                <li>
                    $9 \\mid N \\iff 9 \\mid (a_0 + a_1 + \\dots + a_k)$ (the sum of the digits is divisible by $9$)
                </li>
            </ul>
        </li>

        <li>
            <span class="font-medium">Divisibility by $11$:</span>
            <ul class="list-disc list-inside ml-5 mt-2 space-y-2">
                <li>
                    $11 \\mid N \\iff 11 \\mid (a_0 - a_1 + a_2 - a_3 + \\dots)$ (the alternating sum of digits in even and odd positions is divisible by $11$)
                </li>
            </ul>
        </li>
    </ol>
</div>
Now let us solve some problems that have appeared in the regional and national rounds of the Bangladesh Mathematical Olympiad:
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ Find all positive integers $n$ such that $(n^2 + 1)$ is divisible by $(n + 1)$.
That is, $(n + 1) \\mid (n^2 + 1)$</h3>
 We know, by the linear combination property, that if $a \\mid b$ then $a \\mid (b - k \\cdot a)$. Here it is given that:$$(n + 1) \\mid (n^2 + 1)$$We can write $n^2 + 1$ as:$$n^2 + 1 = (n^2 - 1) + 2 = (n - 1)(n + 1) + 2$$Since $(n + 1) \\mid (n - 1)(n + 1)$ is always true, by the rules of divisibility:$$(n + 1) \\mid \\Big((n^2 + 1) - (n - 1)(n + 1)\\Big)$$$$\\implies (n + 1) \\mid 2$$The positive divisors of $2$ are $1$ and $2$.<br>1. If $n + 1 = 1$ then $\\implies n = 0$ (but $n$ was required to be a positive integer, so $n=0$ is not acceptable).<br>2. If $n + 1 = 2$ then $\\implies n = 1$.<br>Therefore, the only solution is $n = 1$
 </div>
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ Prove that for every odd positive integer $n$, $8 \\mid (n^2 - 1)$</h3>
Since $n$ is an odd number, $n$ can be written in the form $n = 2k + 1$, where $k$ is a non-negative integer ($k \\ge 0$). Now,$$n^2 - 1 = (2k + 1)^2 - 1$$$$= (4k^2 + 4k + 1) - 1$$$$= 4k^2 + 4k = 4k(k + 1)$$Notice that $k(k + 1)$ is the product of two consecutive integers. We know that among any two consecutive integers, one must be even (that is, divisible by $2$). So, $k(k + 1) = 2m$ (where $m$ is an integer). Then,$$n^2 - 1 = 4 \\cdot (2m) = 8m$$Since $n^2 - 1 = 8m$, we have $8 \\mid (n^2 - 1)$. (Proved)
</div>

<h1 class="text-2xl font-bold mb-4">⧉ The Division Algorithm</h1>
The division sum we learned in primary school—"Dividend = Divisor × Quotient + Remainder"—is given a formal shape in number theory as the Division Algorithm.
For any two integers $a$ (the dividend) and $b$ (the divisor, with $b > 0$) there exist unique integers $q$ (the quotient) and $r$ (the remainder) with $$a = b \\cdot q + r$$ such that $0 \\le r < b$.
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ Important Points:</h3>
    <ol class="list-decimal list-inside space-y-3 text-gray-800">
        <li><span class="font-medium">Range of the remainder ($0 \\le r < b$):</span> The remainder is always non-negative and smaller than the divisor ($b$).</li>
        <li><span class="font-medium">Uniqueness:</span> For given $a$ and $b$, there is one and only one pair $q$ and $r$.</li>
        <li><span class="font-medium">Special case ($r = 0$):</span> If the remainder is $r = 0$, then $a = b \\cdot q$. This means $a$ is exactly divisible by $b$ (written $b \\mid a$). Example: if $a = 17$ and $b = 5$, then:$$17 = 5 \\cdot 3 + 2$$Here the quotient is $q = 3$ and the remainder is $r = 2$, which satisfies the condition $0 \\le 2 < 5$.</li>
     </ol>
</div>
<h1 class="text-2xl font-bold mb-4">⧉ Greatest Common Divisor (GCD)</h1>
The largest common divisor of two numbers is called their GCD. For example: $\\gcd(12, 18) = 6$. Then for two integers $a$ and $b$ (at least one of which is not zero), their GCD is written as $\\gcd(a, b)$ or briefly as $(a, b)$. A number $d = \\gcd(a, b)$ if and only if it satisfies the following two conditions:
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <ol class="list-decimal list-inside space-y-3 text-gray-800">
        <li><span class="font-medium">Common Divisor:</span> $d \\mid a$ and $d \\mid b$ (that is, both $a$ and $b$ are divisible by $d$).</li>
        <li><span class="font-medium">Greatest:</span> If for any other number $c$, $c \\mid a$ and $c \\mid b$, then $c \\le d$ (or in the language of divisibility, $c \\mid d$).</li>
     </ol>
</div>
Again, if the $\\gcd$ of two numbers is $1$, they are called coprime (or relatively prime). For example: $\\gcd(8, 15) = 1$, so $8$ and $15$ are coprime (even though neither is prime). Now let us quickly solve an olympiad problem.
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ Prove that for every positive integer $n$, the number $n^3 - n$ is always divisible by $6$</h3>
    We know $6 = 2 \\times 3$ and $\\gcd(2, 3) = 1$. So to prove $6 \\mid (n^3 - n)$ we must show $2 \\mid (n^3 - n)$ and $3 \\mid (n^3 - n)$.
    Factor the expression:$$n^3 - n = n(n^2 - 1) = n(n-1)(n+1)$$This is the product of three consecutive integers.<br>1. Among three consecutive integers, at least one is even. So, $2 \\mid n(n-1)(n+1)$<br>2. Among three consecutive integers, exactly one is divisible by $3$. So, $3 \\mid n(n-1)(n+1)$<br>Since $\\gcd(2, 3) = 1$, we get $2 \\times 3 = 6 \\mid n(n-1)(n+1)$. (Proved)
</div>
<h1 class="text-2xl font-bold mb-4">⧉ The Euclidean Algorithm</h1>
The algorithm we commonly use to find the GCD works very effectively for small numbers, but for large numbers it is very time-consuming and laborious. In 300 BC the Greek mathematician Euclid invented a wonderful method. He observed that the way to find the GCD of two large numbers very quickly is to keep dividing successively until the remainder becomes zero. That is $$a = bq + r \\implies \\gcd(a, b) = \\gcd(b, r)$$
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ Step-by-Step Algorithm:</h3>
    <ol class="list-decimal list-inside space-y-3 text-gray-800">
        <li>
Let the larger number be $a$ and the smaller number be $b$.
        <li>
 Divide $a$ by $b$ and find the remainder $r$ ($a = bq + r$).
         <li>
 If $r = 0$, then $b$ is the required GCD.
               </li>
        <li>
But if $r > 0$, replace $a \\leftarrow b$ and $b \\leftarrow r$ and repeat step 2.
</li>
    </ol>
</div>
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ A Complete Example:  $\\gcd(252, 105)$</h3>
    <ol class="list-decimal list-inside space-y-3 text-gray-800">
        <li>
Divide $252$ by $105$:$$252 = 105 \\cdot 2 + 42 \\implies r_1 = 42$$        
(Since the remainder $42 \\neq 0$, $\\gcd(252, 105) = \\gcd(105, 42)$)
        </li>
<li>
Now divide $105$ by $42$: $$105 = 42 \\cdot 2 + 21 \\implies r_2 = 21$$
(Since the remainder $21 \\neq 0$, $\\gcd(105, 42) = \\gcd(42, 21)$)
</li>
         <li>
Now divide $42$ by $21$:$$42 = 21 \\cdot 2 + 0 \\implies r_3 = 0$$
Since the remainder has become $0$ in this step, the divisor of this step, $21$, is the required GCD.
</li>
$$\\therefore \\gcd(252, 105) = 21$$
    </ol>
</div>
<p class="mb-4">Implementation in the C language:</p>
<div class="vscode-window my-6">
    <button class="vscode-copy" type="button" aria-label="Copy code">Copy</button>
    <div class="vscode-body">
        <div class="vscode-line"><span class="vscode-gutter">1</span><span class="vscode-code"><span class="text-amber-500">#include</span> <span class="text-emerald-400">&lt;stdio.h&gt;</span></span></div>
        <div class="vscode-line"><span class="vscode-gutter">2</span><span class="vscode-code"></span></div>
        <div class="vscode-line"><span class="vscode-gutter">3</span><span class="vscode-code"><span class="text-sky-400">int</span> <span class="text-indigo-300">gcd</span>(<span class="text-sky-400">int</span> a, <span class="text-sky-400">int</span> b) {</span></div>
        <div class="vscode-line"><span class="vscode-gutter">4</span><span class="vscode-code">    <span class="text-sky-400">while</span> (b != <span class="text-pink-400">0</span>) {</span></div>
        <div class="vscode-line"><span class="vscode-gutter">5</span><span class="vscode-code">        <span class="text-sky-400">int</span> temp = b;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">6</span><span class="vscode-code">        b = a % b;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">7</span><span class="vscode-code">        a = temp;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">8</span><span class="vscode-code">    }</span></div>
        <div class="vscode-line"><span class="vscode-gutter">9</span><span class="vscode-code">    <span class="text-sky-400">return</span> a;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">10</span><span class="vscode-code">}</span></div>
        <div class="vscode-line"><span class="vscode-gutter">11</span><span class="vscode-code"></span></div>
        <div class="vscode-line"><span class="vscode-gutter">12</span><span class="vscode-code"><span class="text-sky-400">int</span> <span class="text-indigo-300">main</span>(<span class="text-sky-400">void</span>) {</span></div>
        <div class="vscode-line"><span class="vscode-gutter">13</span><span class="vscode-code">    <span class="text-sky-400">int</span> a, b;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">14</span><span class="vscode-code">    <span class="text-indigo-300">scanf</span>(<span class="text-emerald-400">"%d %d"</span>, &amp;a, &amp;b);</span></div>
        <div class="vscode-line"><span class="vscode-gutter">15</span><span class="vscode-code">    <span class="text-indigo-300">printf</span>(<span class="text-emerald-400">"GCD %d\\n"</span>, <span class="text-indigo-300">gcd</span>(a, b));</span></div>
        <div class="vscode-line"><span class="vscode-gutter">16</span><span class="vscode-code">    <span class="text-sky-400">return</span> <span class="text-pink-400">0</span>;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">17</span><span class="vscode-code">}</span></div>
    </div>
</div>
<h1 class="text-2xl font-bold mb-4">⧉ Bézout's Identity and the Extended Euclidean Algorithm</h1>
The Extended Euclidean Algorithm is used to find the coefficients $x$ and $y$ of the equation $ax + by = \\gcd(a, b)$, according to Bézout's Identity. The GCD of any two numbers $a$ and $b$ can always be expressed as the sum of $a$ and $b$ multiplied by two integers ($x$ and $y$):$$ax + by = \\gcd(a, b)$$For example: with $a = 212$ and $b = 42$, their $\\gcd = 2$. We can write it like this:$$212 \\times 1 + 42 \\times (-5) = 212 - 210 = 2$$ So the coefficients are $x=1, y=-5$.
Below is the complete mathematical explanation of how it builds up the solution:
<h3 class="font-semibold text-lg mb-4">The Core Idea</h3>

In the ordinary Euclidean algorithm we go forward step by step through division:$$a = b \\cdot q + r \\implies r = a - b \\cdot q$$where $q = \\lfloor a / b \\rfloor$ (the quotient) and $r = a \\bmod b$ (the remainder). Suppose that in the next step, for $b$ and $r$, we have already found $x_1$ and $y_1$ such that:$$b \\cdot x_1 + r \\cdot y_1 = \\gcd(a, b)$$Now substituting the value of $r$ we get:$$b \\cdot x_1 + (a - b \\cdot q) \\cdot y_1 = \\gcd(a, b)$$$$a \\cdot y_1 + b \\cdot (x_1 - q \\cdot y_1) = \\gcd(a, b)$$Comparing coefficients with the original equation $a x + b y = \\gcd(a, b)$, we obtain the recurrence relation between the next and previous steps:$$\\begin{aligned} x &= y_1 \\ y &= x_1 - \\lfloor a / b \\rfloor \\cdot y_1 \\end{aligned}$$
<h3 class="font-semibold text-lg mb-4">Base Case</h3>
Continuing to divide, in the last step of the Euclidean algorithm the divisor becomes $b = 0$, when:$$\\gcd(a, 0) = a$$At this point the equation becomes $a \\cdot x + 0 \\cdot y = a$. So the base case solution is:$$x = 1, \\quad y = 0$$After that the algorithm works recursively (backwards through the steps) and guarantees the final solution of $x$ and $y$ for the original $a$ and $b$.
Now let us clear the matter with an example:
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ Find an integer solution $(x, y)$ of the equation $120x + 35y = \\gcd(120, 35)$ for $a = 120$ and $b = 35$.</h3>
    <ol class="list-decimal list-inside space-y-3 text-gray-800">
        <li>
Finding the remainders and the GCD through the Euclidean algorithm (forward path)<br>1. $120 = 35 \\cdot 3 + 15 \\quad (q_1 = 3, r_1 = 15)$<br>2. $35 = 15 \\cdot 2 + 5 \\quad (q_2 = 2, r_2 = 5)$<br>3. $15 = 5 \\cdot 3 + 0 \\quad (q_3 = 3, r_3 = 0)$<br>Since the remainder has become $0$, the required GCD is $\\gcd(120, 35) = 5$.        
     </li>
     <li>
Back SubstitutionNow let us arrange the equations backwards, starting from the last non-zero remainder $5$:<br>1. Separate $5$ from the equation obtained in the second step:$$5 = 35 - 15 \\cdot 2$$<br>2. Take the value $15 = 120 - 35 \\cdot 3$ from the first step and substitute it in place of $15$ in the equation above:$$5 = 35 - (120 - 35 \\cdot 3) \\cdot 2$$$$5 = 35 - 120 \\cdot 2 + 35 \\cdot 6$$$$5 = 120 \\cdot (-2) + 35 \\cdot (1 + 6)$$$$5 = 120 \\cdot (-2) + 35 \\cdot 7$$<br>Result:The equation becomes:$$120 \\cdot (-2) + 35 \\cdot 7 = 5$$Since $120x + 35y = 5$, the solution is: $$\\begin{aligned} x &= -2 \\ y &= 7 \\end{aligned}$$Verification: $120 \\times (-2) + 35 \\times 7 = -240 + 245 = 5$
         </li>
    </ol>
</div>

<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">Solution Tracking TableTo understand recursive tracking easily you may look at the table below:</h3>
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
<p class="mb-4">A recursive implementation of the Extended Euclidean Algorithm in the C language is given below:</p>
<div class="vscode-window my-6">
    <button class="vscode-copy" type="button" aria-label="Copy code">Copy</button>
    <div class="vscode-body">
        <div class="vscode-line"><span class="vscode-gutter">1</span><span class="vscode-code"><span class="text-amber-500">#include</span> <span class="text-emerald-400">&lt;stdio.h&gt;</span></span></div>
        <div class="vscode-line"><span class="vscode-gutter">2</span><span class="vscode-code"></span></div>
        <div class="vscode-line"><span class="vscode-gutter">3</span><span class="vscode-code"><span class="text-sky-400">int</span> <span class="text-indigo-300">ext_gcd</span>(<span class="text-sky-400">int</span> a, <span class="text-sky-400">int</span> b, <span class="text-sky-400">int</span> *x, <span class="text-sky-400">int</span> *y) {</span></div>
        <div class="vscode-line"><span class="vscode-gutter">4</span><span class="vscode-code">    <span class="text-sky-400">if</span> (b == <span class="text-pink-400">0</span>) {</span></div>
        <div class="vscode-line"><span class="vscode-gutter">5</span><span class="vscode-code">        *x = <span class="text-pink-400">1</span>;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">6</span><span class="vscode-code">        *y = <span class="text-pink-400">0</span>;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">7</span><span class="vscode-code">        <span class="text-sky-400">return</span> a;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">8</span><span class="vscode-code">    }</span></div>
        <div class="vscode-line"><span class="vscode-gutter">9</span><span class="vscode-code">    <span class="text-sky-400">int</span> x1, y1;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">10</span><span class="vscode-code">    <span class="text-sky-400">int</span> gcd = <span class="text-indigo-300">ext_gcd</span>(b, a % b, &amp;x1, &amp;y1);</span></div>
        <div class="vscode-line"><span class="vscode-gutter">11</span><span class="vscode-code">    *x = y1;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">12</span><span class="vscode-code">    *y = x1 - (a / b) * y1;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">13</span><span class="vscode-code">    <span class="text-sky-400">return</span> gcd;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">14</span><span class="vscode-code">}</span></div>
        <div class="vscode-line"><span class="vscode-gutter">15</span><span class="vscode-code"></span></div>
        <div class="vscode-line"><span class="vscode-gutter">16</span><span class="vscode-code"><span class="text-sky-400">int</span> <span class="text-indigo-300">main</span>(<span class="text-sky-400">void</span>) {</span></div>
        <div class="vscode-line"><span class="vscode-gutter">17</span><span class="vscode-code">    <span class="text-sky-400">int</span> a = <span class="text-pink-400">252</span>, b = <span class="text-pink-400">105</span>;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">18</span><span class="vscode-code">    <span class="text-sky-400">int</span> x, y;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">19</span><span class="vscode-code">    <span class="text-sky-400">int</span> gcd = <span class="text-indigo-300">ext_gcd</span>(a, b, &amp;x, &amp;y);</span></div>
        <div class="vscode-line"><span class="vscode-gutter">20</span><span class="vscode-code">    <span class="text-indigo-300">printf</span>(<span class="text-emerald-400">"GCD: %d\\n"</span>, gcd);</span></div>
        <div class="vscode-line"><span class="vscode-gutter">21</span><span class="vscode-code">    <span class="text-indigo-300">printf</span>(<span class="text-emerald-400">"Coefficients x and y: %d, %d\\n"</span>, x, y);</span></div>
        <div class="vscode-line"><span class="vscode-gutter">22</span><span class="vscode-code">    <span class="text-sky-400">return</span> <span class="text-pink-400">0</span>;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">23</span><span class="vscode-code">}</span></div>
    </div>
</div>

<h1 class="text-2xl font-bold mb-4">⧉ Prime Numbers</h1>
<p>We are all more or less familiar with prime numbers. Let us begin with the common definition—a number that has no divisor other than $1$ and itself is a prime number. Take $5$ for example: apart from $5$ and $1$, no other integer divides it. So $5$ is a prime number. On the other hand, $6$ can be divided by $1$ and $6$ and also by $2$ and $3$, so it is a composite number.
But if we think a little more deeply about this very familiar notion of the 'prime number', several wonderful and mysterious sides of it become uncovered. Let us come to know the world of prime numbers a little anew.</p>

<h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Why is 1 Not a Prime Number?</h2>
<p>Many people wonder: according to the definition of a prime number, apart from $1$ and the number itself (that is, $1$) the number $1$ has no divisor—so why is $1$ not a prime?</p>
<p>Mathematicians have excluded $1$ from the family of primes in order to preserve the dignity of a special rule. The rule is the Fundamental Theorem of Arithmetic. According to this theorem:</p>
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <p class="font-medium">Every integer greater than $1$ can be expressed as a product of prime numbers, and this way of expression is unique.</p>
</div>
<p>For example: $12 = 2 \\times 2 \\times 3$. Now if $1$ were taken as a prime number, then $12$ could be written as:
$$12 = 2 \\times 2 \\times 3 \\times 1$$
$$12 = 2 \\times 2 \\times 3 \\times 1 \\times 1$$</p>
<p>In this way the rule of uniqueness would break down. So $1$ is neither prime nor composite; it is a unique number.</p>

<h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">The Only Even Prime Number</h2>
<p>In the list of primes, $2$ is the only even number. Other than $2$, no even number in the world can be prime, because every even number can be divided by $2$. So $2$ is called the smallest and the only even prime.</p>

<h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Are There Infinitely Many Primes?</h2>
<p>Yes, primes are infinite. About 2300 years ago the Greek mathematician Euclid proved that primes have no end. No matter how far you go toward larger numbers, primes never stop appearing.</p>
<p>However, as numbers grow larger, the density of primes decreases. For example:</p>
<ul class="list-disc list-inside ml-5 mt-2 space-y-1">
    <li>There are 25 primes between 1 and 100.</li>
    <li>There are 21 primes between 101 and 200.</li>
    <li>Going toward larger numbers, the gap between two primes can exceed millions.</li>
</ul>

<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ Euclid's Proof</h3>
    <p>Suppose the primes are finite and they are $p_1, p_2, \\dots, p_k$. Now let us build a new number:
    $$N = p_1 \\cdot p_2 \\cdot p_3 \\cdots p_k + 1$$
    If this number $N$ is divided by any one of $p_1, p_2, \\dots, p_k$, the remainder in every case is $1$. That is, $N$ is not divisible by any number in our list of primes. So $N$ is either itself a new prime, or the product of some primes that are not in our list. Either way, our assumption is disproved. Therefore, primes are infinite. (Proved)</p>
</div>

<h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">How to Find Primes: The Sieve of Eratosthenes</h2>
<p>We now know the primes are infinite, but a practical question remains — how do we actually create their list? A straightforward hand-or-computer method is <strong>trial division</strong>: to check whether a number $m$ is prime, test divisibility by every integer from $2$ up to $\\sqrt{m}$. If none of them divides $m$, then $m$ is prime. Trial division works, but when we need all primes below a large $n$, checking every single number, one by one, becomes painfully slow.</p>
<p>Around 240 BC the Greek scholar <strong>Eratosthenes of Cyrene</strong> invented a far smarter method. Instead of testing numbers one by one, he proposed to <em>cross out</em> the composite numbers in a single, organised pass — exactly like sifting flour to remove the coarse lumps. That method is the <strong>Sieve of Eratosthenes</strong>.</p>

<h3 class="font-semibold text-lg mb-4">The Algorithm, Step by Step</h3>
<ol class="list-decimal list-inside space-y-3 text-gray-800 mb-4">
    <li>Write down all the integers from $2$ to $n$ in a row.</li>
    <li>Let $p = 2$, the first number of the list.</li>
    <li>Cross out every <em>proper</em> multiple of $p$, namely $2p, 3p, 4p, \\dots$ (but not $p$ itself).</li>
    <li>Move to the next number that is still uncrossed — it is necessarily a prime. Make it the new $p$.</li>
    <li>Repeat steps 3 and 4 until $p \\times p > n$. Then stop.</li>
</ol>
<p>The numbers that still remain uncrossed are <strong>exactly</strong> the primes from $2$ to $n$.</p>

<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ Worked Example: All Primes up to $n = 30$</h3>
    <p class="mb-2">Write $2, 3, 4, \\dots, 30$. Start with $p = 2$ and cross out $4, 6, 8, 10, \\dots, 30$. The next uncrossed number is $3$; cross out $6, 9, 12, \\dots, 27$. The next uncrossed number is $5$; cross out $10, 15, 20, 25, 30$. Now $5 \\times 5 = 25 \\le 30$, so we continue: the next uncrossed number is $7$, but $7 \\times 7 = 49 > 30$, so we stop.</p>
    <p>The numbers that remain are $2, 3, 5, 7, 11, 13, 17, 19, 23, 29$ — the ten primes below $30$.</p>
</div>

<p class="mb-4">A simple implementation of the Sieve of Eratosthenes in the C language:</p>
<div class="vscode-window my-6">
    <button class="vscode-copy" type="button" aria-label="Copy code">Copy</button>
    <div class="vscode-body">
        <div class="vscode-line"><span class="vscode-gutter">1</span><span class="vscode-code"><span class="text-amber-500">#include</span> <span class="text-emerald-400">&lt;stdio.h&gt;</span></span></div>
        <div class="vscode-line"><span class="vscode-gutter">2</span><span class="vscode-code"><span class="text-amber-500">#include</span> <span class="text-emerald-400">&lt;stdbool.h&gt;</span></span></div>
        <div class="vscode-line"><span class="vscode-gutter">3</span><span class="vscode-code"></span></div>
        <div class="vscode-line"><span class="vscode-gutter">4</span><span class="vscode-code"><span class="text-sky-400">void</span> <span class="text-indigo-300">sieve</span>(<span class="text-sky-400">int</span> n) {</span></div>
        <div class="vscode-line"><span class="vscode-gutter">5</span><span class="vscode-code">    <span class="text-sky-400">bool</span> isPrime[n + <span class="text-pink-400">1</span>];</span></div>
        <div class="vscode-line"><span class="vscode-gutter">6</span><span class="vscode-code">    <span class="text-sky-400">for</span> (<span class="text-sky-400">int</span> i = <span class="text-pink-400">2</span>; i <= n; i++) isPrime[i] = <span class="text-sky-400">true</span>;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">7</span><span class="vscode-code"></span></div>
        <div class="vscode-line"><span class="vscode-gutter">8</span><span class="vscode-code">    <span class="text-sky-400">for</span> (<span class="text-sky-400">int</span> p = <span class="text-pink-400">2</span>; p * p <= n; p++) {</span></div>
        <div class="vscode-line"><span class="vscode-gutter">9</span><span class="vscode-code">        <span class="text-sky-400">if</span> (isPrime[p]) {</span></div>
        <div class="vscode-line"><span class="vscode-gutter">10</span><span class="vscode-code">            <span class="text-sky-400">for</span> (<span class="text-sky-400">int</span> m = p * p; m <= n; m += p)</span></div>
        <div class="vscode-line"><span class="vscode-gutter">11</span><span class="vscode-code">                isPrime[m] = <span class="text-sky-400">false</span>;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">12</span><span class="vscode-code">        }</span></div>
        <div class="vscode-line"><span class="vscode-gutter">13</span><span class="vscode-code">    }</span></div>
        <div class="vscode-line"><span class="vscode-gutter">14</span><span class="vscode-code"></span></div>
        <div class="vscode-line"><span class="vscode-gutter">15</span><span class="vscode-code">    <span class="text-sky-400">for</span> (<span class="text-sky-400">int</span> i = <span class="text-pink-400">2</span>; i <= n; i++)</span></div>
        <div class="vscode-line"><span class="vscode-gutter">16</span><span class="vscode-code">        <span class="text-sky-400">if</span> (isPrime[i]) <span class="text-indigo-300">printf</span>(<span class="text-emerald-400">"%d "</span>, i);</span></div>
        <div class="vscode-line"><span class="vscode-gutter">17</span><span class="vscode-code">    <span class="text-indigo-300">printf</span>(<span class="text-emerald-400">"\\n"</span>);</span></div>
        <div class="vscode-line"><span class="vscode-gutter">18</span><span class="vscode-code">}</span></div>
        <div class="vscode-line"><span class="vscode-gutter">19</span><span class="vscode-code"></span></div>
        <div class="vscode-line"><span class="vscode-gutter">20</span><span class="vscode-code"><span class="text-sky-400">int</span> <span class="text-indigo-300">main</span>(<span class="text-sky-400">void</span>) {</span></div>
        <div class="vscode-line"><span class="vscode-gutter">21</span><span class="vscode-code">    <span class="text-indigo-300">sieve</span>(<span class="text-pink-400">30</span>);</span></div>
        <div class="vscode-line"><span class="vscode-gutter">22</span><span class="vscode-code">    <span class="text-sky-400">return</span> <span class="text-pink-400">0</span>;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">23</span><span class="vscode-code">}</span></div>
    </div>
</div>

<h3 class="font-semibold text-lg mb-4">Two Clever Shortcuts</h3>
<p>The sieve is careful twice over:</p>
<ul class="list-disc list-inside ml-5 mt-2 space-y-1 mb-4">
    <li><strong>We only need to go up to $p \\times p \\le n$.</strong> If $m$ is composite, it has a divisor $d$ with $1 < d \\le \\sqrt{m} \\le \\sqrt{n}$. Every composite below $n$ is therefore caught by some prime $p \\le \\sqrt{n}$; beyond that, nothing new can be crossed out.</li>
    <li><strong>We start crossing out from $p \\times p$.</strong> Any proper multiple $k \\cdot p$ with $k < p$ is also a multiple of the smaller number $k$; if $k$ is prime it already did the crossing when it was "$p$" in an earlier round, and if $k$ is composite it already perished. Starting from $p \\times p$ avoids repeated, wasteful marking.</li>
</ul>

<h3 class="font-semibold text-lg mb-4">Why Does It Work? Proof of Correctness</h3>
<div class="bg-amber-50 border border-amber-200 p-6 rounded-xl my-8">
    <p class="font-medium mb-2">Theorem. When the algorithm stops (at the first prime $p$ with $p \\times p > n$), a number $m$ with $2 \\le m \\le n$ is left uncrossed if and only if $m$ is prime.</p>
    <p class="mb-2"><strong>If $m$ is prime:</strong> it is never a <em>proper</em> multiple of any smaller number, so no step ever crosses it out. It survives.</p>
    <p><strong>If $m$ is composite:</strong> write $m = a \\cdot b$ with $1 < a \\le b < m$. Then $a \\le \\sqrt{m} \\le \\sqrt{n}$. The number $a$ has at least one prime divisor $p \\le a \\le \\sqrt{n}$, so $p \\times p \\le n$ — the loop did process $p$ and crossed out every proper multiple of $p$. Since $p \\mid a$ and $a \\mid m$, we get $p \\mid m$; and because $m > p$, the number $m$ is a proper multiple of $p$. Hence $m$ was crossed out.</p>
</div>

<h3 class="font-semibold text-lg mb-4">How Fast Is It? $O(n \\log \\log n)$</h3>
<p>When the sieve processes a prime $p$, it visits roughly $\\frac{n}{p}$ multiples. So the total work is about</p>
$$\\sum_{p \\le n} \\frac{n}{p} = n \\sum_{p \\le n} \\frac{1}{p}$$
<p>The formula is reassuring once you notice the intuition: large primes have very few multiples below $n$, so they cost almost nothing. A classical result of Euler and Mertens says the sum of reciprocals of the primes grows like $\\log \\log n$:</p>
$$\\sum_{p \\le n} \\frac{1}{p} \\approx \\log \\log n + 0.261$$
<p>Consequently the whole sieve costs about $n \\cdot \\log \\log n$ operations and $O(n)$ cells of memory. For $n = 10^6$ that is roughly $10^6 \\times 3.5$ unit operations — well under a second — while testing every number individually by trial division would need far more time.</p>

<h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">The Fundamental Theorem of Arithmetic</h2>
<p>According to the Fundamental Theorem of Arithmetic, every integer greater than $1$ can be written as a product of primes, and this way of writing (ignoring the order of the factors) is unique.</p>
<p>For example: $360 = 2^3 \\times 3^2 \\times 5$ — this expression is unique; apart from reordering the factors, $360$ cannot be written as a different product of primes.</p>

<h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">The Magic of Prime Numbers in the Modern World: Cybersecurity</h2>
<p>You may wonder, what real use do prime numbers have in daily life? The answer is—when you enter a password online, shop with a credit card, or send a message on WhatsApp, it is these prime numbers that keep your information safe behind the screen!</p>
<p>A method called RSA encryption is used in modern computer security. In this method two enormous (say, a hundred digits long) prime numbers are multiplied to create a public key.</p>
<ul class="list-disc list-inside ml-5 mt-2 space-y-1">
    <li>Multiplying two large primes is the work of a blink of an eye for a computer.</li>
    <li>But factoring that product back into the original two primes is a matter of hundreds of years for even the world's most powerful supercomputer.</li>
</ul>
<p>It is exactly this asymmetry that makes RSA so secure—which we have already seen in the context of Bézout's Identity and modular arithmetic.</p>

<h1 class="text-2xl font-bold mb-4">⧉ Modular Arithmetic</h1>
<p>Modular arithmetic is "clock arithmetic". On a clock, after 12 o'clock comes 1 o'clock again; similarly, after passing a certain number ($m$), the numbers return toward the beginning. Mathematically, we say $a \\equiv b \\pmod{m}$ if $m \\mid (a - b)$, that is, $a$ and $b$ leave the same remainder when divided by $m$.</p>
<p>Example: $17 \\equiv 5 \\pmod{12}$, because $17 - 5 = 12$ which is divisible by $12$. Again $23 \\equiv 2 \\pmod{7}$.</p>
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ Fundamental Properties of Modular Arithmetic</h3>
    <ol class="list-decimal list-inside space-y-3 text-gray-800">
        <li>If $a \\equiv b \\pmod{m}$ and $c \\equiv d \\pmod{m}$, then $a + c \\equiv b + d \\pmod{m}$.</li>
        <li>If $a \\equiv b \\pmod{m}$ and $c \\equiv d \\pmod{m}$, then $a \\cdot c \\equiv b \\cdot d \\pmod{m}$.</li>
        <li>If $a \\equiv b \\pmod{m}$, then for any natural number $n$, $a^n \\equiv b^n \\pmod{m}$.</li>
        <li>If $ac \\equiv bc \\pmod{m}$ and $\\gcd(c, m) = 1$, then $a \\equiv b \\pmod{m}$ (the cancellation rule).</li>
    </ol>
</div>
<p>Modular arithmetic is built upon the foundation of the Division Algorithm—if $a = mq + r$ then $a \\equiv r \\pmod{m}$. Using these rules we can easily find the remainder of very large numbers.</p>

<h1 class="text-2xl font-bold mb-4">⧉ Linear Congruences</h1>
<p>An equation of the form $ax \\equiv b \\pmod{m}$, for finding the value of $x$, is called a linear congruence. This equation has a solution if and only if $\\gcd(a, m) \\mid b$.</p>
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ Example: Solve $6x \\equiv 4 \\pmod{8}$.</h3>
    <p>Here $\\gcd(6, 8) = 2$ and $2 \\mid 4$, so a solution exists. Dividing both sides by $2$ we get $3x \\equiv 2 \\pmod{4}$. Now the inverse of $3$ modulo $4$ is $3$, because $3 \\times 3 \\equiv 1 \\pmod{4}$. Therefore:
    $$x \\equiv 3 \\times 2 \\equiv 6 \\equiv 2 \\pmod{4}$$
    That is, $x \\equiv 2 \\pmod{4}$. Verification: for $x = 2$, $6 \\times 2 = 12 \\equiv 4 \\pmod{8}$</p>
</div>

<h1 class="text-2xl font-bold mb-4">⧉ Fermat's Little Theorem</h1>
<p>Fermat's Little Theorem is one of the most important theorems of modular arithmetic. It states:</p>
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <p class="font-medium">If $p$ is a prime number and $p \\nmid a$ (that is, $a$ and $p$ are coprime), then
    $$a^{p-1} \\equiv 1 \\pmod{p}$$</p>
</div>
<p>From this we also get, for any integer $a$: $a^p \\equiv a \\pmod{p}$. This very theorem is the mathematical foundation of RSA encryption and other modern cryptography systems.</p>
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ Example: Find $5^{12} \\bmod 13$.</h3>
    <p>Since $13$ is prime and $\\gcd(5, 13) = 1$, by Fermat's Little Theorem $5^{12} \\equiv 1 \\pmod{13}$. That is, $5^{12} \\bmod 13 = 1$.</p>
</div>

<h1 class="text-2xl font-bold mb-4">⧉ Wilson's Theorem</h1>
<p>Wilson's Theorem gives a wonderful way to recognize primes:</p>
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <p class="font-medium">A positive integer $p > 1$ is prime if and only if
    $$(p - 1)! \\equiv -1 \\pmod{p}$$
    .</p>
</div>
<p>Example: take $p = 7$. Then $(7 - 1)! = 6! = 720$ and $720 = 102 \\times 7 + 6 \\equiv -1 \\pmod{7}$. Again take $p = 9$ (composite). Then $8! = 40320 \\equiv 0 \\pmod{9}$ — which is not $-1$.</p>

<h1 class="text-2xl font-bold mb-4">⧉ The Chinese Remainder Theorem</h1>
<p>In the third century AD, the Chinese mathematician Sun Tzu posed a riddle that has since become legendary. It reads, in modern translation:</p>
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <p class="font-medium">"There are some things whose number is unknown. Counting them by threes leaves a remainder of 2; counting them by fives leaves a remainder of 3; counting them by sevens leaves a remainder of 2. How many are there?"</p>
</div>
<p>Let us translate that into the language of modular arithmetic. We need the smallest positive number $x$ which satisfies three congruences <em>at the same time</em>:</p>
$$x \\equiv 2 \\pmod{3}, \\qquad x \\equiv 3 \\pmod{5}, \\qquad x \\equiv 2 \\pmod{7}$$
<p>The number $23$ works because $23 = 7 \\cdot 3 + 2$, $23 = 4 \\cdot 5 + 3$ and $23 = 7 \\cdot 3 + 2$. But so does $128 = 23 + 105$, and $233 = 23 + 2 \\cdot 105$, and infinitely many others — every solution differs from $23$ by a multiple of $105 = 3 \\times 5 \\times 7$. The theorem that organises this whole pattern is the <strong>Chinese Remainder Theorem</strong> (CRT).</p>

<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ Statement of the Theorem</h3>
    <p class="font-medium">Let $m_1, m_2, \\dots, m_k$ be pairwise coprime positive integers (that is, $\\gcd(m_i, m_j) = 1$ whenever $i \\ne j$), and let $a_1, a_2, \\dots, a_k$ be any integers. Then the system of congruences</p>
    <p class="font-medium text-center">$$x \\equiv a_1 \\pmod{m_1}, \\quad x \\equiv a_2 \\pmod{m_2}, \\quad \\dots, \\quad x \\equiv a_k \\pmod{m_k}$$</p>
    <p class="font-medium">has a solution, and that solution is unique modulo $M = m_1 m_2 \\cdots m_k$: any two solutions are congruent modulo $M$.</p>
</div>

<h3 class="font-semibold text-lg mb-4">Proof: A Construction That Always Works</h3>
<p>The statement has two parts, and the proof of the first part actually <em>builds</em> the answer — that is the wonderful part of this theorem.</p>
<p><strong>Existence.</strong> Define $M = m_1 m_2 \\cdots m_k$, and for each index $i$ define $M_i = M / m_i$ (the product of all the moduli except $m_i$). Since the moduli are pairwise coprime, $\\gcd(M_i, m_i) = 1$. By the linear congruence theory we built earlier, the congruence</p>
$$M_i \\, y_i \\equiv 1 \\pmod{m_i}$$
<p>has a solution $y_i$ (this $y_i$ is called the inverse of $M_i$ modulo $m_i$). Now assemble the candidate answer:</p>
$$x = a_1 M_1 y_1 + a_2 M_2 y_2 + \\dots + a_k M_k y_k$$
<p><strong>Check.</strong> Fix an index $j$ and reduce everything modulo $m_j$. For every $i \\ne j$, the factor $M_i = M / m_i$ contains $m_j$ as a factor, so $a_i M_i y_i \\equiv 0 \\pmod{m_j}$. Only the $j$-th term survives:</p>
$$x \\equiv a_j M_j y_j \\equiv a_j \\cdot 1 \\equiv a_j \\pmod{m_j}$$
<p>So $x$ satisfies all $k$ congruences simultaneously.</p>
<p><strong>Uniqueness.</strong> Suppose $x$ and $x'$ both work. Then $x - x' \\equiv 0 \\pmod{m_j}$ for every $j$, that is, each $m_j$ divides $x - x'$. Because the moduli are pairwise coprime, their product $M$ must divide $x - x'$. Hence $x \\equiv x' \\pmod{M}$. ∎</p>

<h3 class="font-semibold text-lg mb-4">⧉ Worked Example: Solving Sun Tzu's Puzzle</h3>
<p>Here $k = 3$, with $m_1 = 3$, $m_2 = 5$, $m_3 = 7$ and $a_1 = 2$, $a_2 = 3$, $a_3 = 2$. First compute the pieces:</p>
<ul class="list-disc list-inside ml-5 mt-2 space-y-1 mb-4">
    <li>$M = 3 \\times 5 \\times 7 = 105$</li>
    <li>$M_1 = 35$, $M_2 = 21$, $M_3 = 15$</li>
    <li>Inverse of $M_1$ modulo $3$: $35 y_1 \\equiv 2 y_1 \\equiv 1 \\pmod{3}$, so $y_1 = 2$ (since $2 \\times 2 = 4 \\equiv 1$).</li>
    <li>Inverse of $M_2$ modulo $5$: $21 y_2 \\equiv 1 y_2 \\equiv 1 \\pmod{5}$, so $y_2 = 1$.</li>
    <li>Inverse of $M_3$ modulo $7$: $15 y_3 \\equiv 1 y_3 \\equiv 1 \\pmod{7}$, so $y_3 = 1$.</li>
</ul>
<p>Now put everything together:</p>
$$x = a_1 M_1 y_1 + a_2 M_2 y_2 + a_3 M_3 y_3 = 2 \\cdot 35 \\cdot 2 + 3 \\cdot 21 \\cdot 1 + 2 \\cdot 15 \\cdot 1$$
$$x = 140 + 63 + 30 = 233 \\equiv 23 \\pmod{105}$$
<p>So the smallest positive answer is $x = 23$. Check: $23 = 7 \\cdot 3 + 2$, $23 = 4 \\cdot 5 + 3$, $23 = 3 \\cdot 7 + 2$.</p>

<p class="mb-4">A complete C implementation of the CRT, using the Extended Euclidean Algorithm built earlier in this article:</p>
<div class="vscode-window my-6">
    <button class="vscode-copy" type="button" aria-label="Copy code">Copy</button>
    <div class="vscode-body">
        <div class="vscode-line"><span class="vscode-gutter">1</span><span class="vscode-code"><span class="text-amber-500">#include</span> <span class="text-emerald-400">&lt;stdio.h&gt;</span></span></div>
        <div class="vscode-line"><span class="vscode-gutter">2</span><span class="vscode-code"></span></div>
        <div class="vscode-line"><span class="vscode-gutter">3</span><span class="vscode-code"><span class="text-sky-400">long long</span> <span class="text-indigo-300">ext_gcd</span>(<span class="text-sky-400">long long</span> a, <span class="text-sky-400">long long</span> b, <span class="text-sky-400">long long</span> *x, <span class="text-sky-400">long long</span> *y) {</span></div>
        <div class="vscode-line"><span class="vscode-gutter">4</span><span class="vscode-code">    <span class="text-sky-400">if</span> (b == <span class="text-pink-400">0</span>) {</span></div>
        <div class="vscode-line"><span class="vscode-gutter">5</span><span class="vscode-code">        *x = <span class="text-pink-400">1</span>;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">6</span><span class="vscode-code">        *y = <span class="text-pink-400">0</span>;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">7</span><span class="vscode-code">        <span class="text-sky-400">return</span> a;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">8</span><span class="vscode-code">    }</span></div>
        <div class="vscode-line"><span class="vscode-gutter">9</span><span class="vscode-code">    <span class="text-sky-400">long long</span> x1, y1;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">10</span><span class="vscode-code">    <span class="text-sky-400">long long</span> g = <span class="text-indigo-300">ext_gcd</span>(b, a % b, &amp;x1, &amp;y1);</span></div>
        <div class="vscode-line"><span class="vscode-gutter">11</span><span class="vscode-code">    *x = y1;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">12</span><span class="vscode-code">    *y = x1 - (a / b) * y1;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">13</span><span class="vscode-code">    <span class="text-sky-400">return</span> g;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">14</span><span class="vscode-code">}</span></div>
        <div class="vscode-line"><span class="vscode-gutter">15</span><span class="vscode-code"></span></div>
        <div class="vscode-line"><span class="vscode-gutter">16</span><span class="vscode-code"><span class="text-sky-400">long long</span> <span class="text-indigo-300">crt</span>(<span class="text-sky-400">long long</span> a[], <span class="text-sky-400">long long</span> m[], <span class="text-sky-400">int</span> k) {</span></div>
        <div class="vscode-line"><span class="vscode-gutter">17</span><span class="vscode-code">    <span class="text-sky-400">long long</span> M = <span class="text-pink-400">1</span>;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">18</span><span class="vscode-code">    <span class="text-sky-400">for</span> (<span class="text-sky-400">int</span> i = <span class="text-pink-400">0</span>; i < k; i++) M *= m[i];</span></div>
        <div class="vscode-line"><span class="vscode-gutter">19</span><span class="vscode-code">    <span class="text-sky-400">long long</span> x = <span class="text-pink-400">0</span>;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">20</span><span class="vscode-code">    <span class="text-sky-400">for</span> (<span class="text-sky-400">int</span> i = <span class="text-pink-400">0</span>; i < k; i++) {</span></div>
        <div class="vscode-line"><span class="vscode-gutter">21</span><span class="vscode-code">        <span class="text-sky-400">long long</span> Mi = M / m[i];</span></div>
        <div class="vscode-line"><span class="vscode-gutter">22</span><span class="vscode-code">        <span class="text-sky-400">long long</span> y, t;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">23</span><span class="vscode-code">        <span class="text-indigo-300">ext_gcd</span>(Mi, m[i], &amp;y, &amp;t);</span></div>
        <div class="vscode-line"><span class="vscode-gutter">24</span><span class="vscode-code">        x = (x + (a[i] % M) * Mi % M * ((y % M + M) % M)) % M;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">25</span><span class="vscode-code">    }</span></div>
        <div class="vscode-line"><span class="vscode-gutter">26</span><span class="vscode-code">    <span class="text-sky-400">return</span> (x % M + M) % M;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">27</span><span class="vscode-code">}</span></div>
        <div class="vscode-line"><span class="vscode-gutter">28</span><span class="vscode-code"></span></div>
        <div class="vscode-line"><span class="vscode-gutter">29</span><span class="vscode-code"><span class="text-sky-400">int</span> <span class="text-indigo-300">main</span>(<span class="text-sky-400">void</span>) {</span></div>
        <div class="vscode-line"><span class="vscode-gutter">30</span><span class="vscode-code">    <span class="text-sky-400">long long</span> a[] = {<span class="text-pink-400">2</span>, <span class="text-pink-400">3</span>, <span class="text-pink-400">2</span>};</span></div>
        <div class="vscode-line"><span class="vscode-gutter">31</span><span class="vscode-code">    <span class="text-sky-400">long long</span> m[] = {<span class="text-pink-400">3</span>, <span class="text-pink-400">5</span>, <span class="text-pink-400">7</span>};</span></div>
        <div class="vscode-line"><span class="vscode-gutter">32</span><span class="vscode-code">    <span class="text-indigo-300">printf</span>(<span class="text-emerald-400">"Answer: %lld\\n"</span>, <span class="text-indigo-300">crt</span>(a, m, <span class="text-pink-400">3</span>));</span></div>
        <div class="vscode-line"><span class="vscode-gutter">33</span><span class="vscode-code">    <span class="text-sky-400">return</span> <span class="text-pink-400">0</span>;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">34</span><span class="vscode-code">}</span></div>
    </div>
</div>

<h3 class="font-semibold text-lg mb-4">What If the Moduli Are Not Coprime?</h3>
<p>The CRT, in the clean form above, demands pairwise coprime moduli. If the moduli share factors, a solution may or may not exist: it exists exactly when the compatibility conditions $\\gcd(m_i, m_j) \\mid (a_i - a_j)$ hold for every pair $i, j$. In practice, you can always split the moduli into coprime parts, solve each part, and combine — so the pairwise-coprime case is the one that matters most.</p>

<h1 class="text-2xl font-bold mb-4">⧉ Euler's Totient Function</h1>
<p>Fermat's Little Theorem worked only for prime moduli. To carry its power over to composite numbers, the great Leonhard Euler invented a counting function that now bears his name.</p>
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ Definition</h3>
    <p class="font-medium">For $n \\ge 1$, Euler's totient function $\\varphi(n)$ counts how many integers in the set $\\{1, 2, \\dots, n\\}$ are coprime to $n$.</p>
</div>
<p>A few easy values: $\\varphi(1) = 1$, $\\varphi(2) = 1$ (only the number $1$), $\\varphi(3) = 2$ (the numbers $1, 2$), $\\varphi(4) = 2$ (the numbers $1, 3$), and $\\varphi(12) = 4$ (the numbers $1, 5, 7, 11$).</p>
<p>When $n = p$ is prime, every number from $1$ to $p - 1$ is coprime to $p$, so $\\varphi(p) = p - 1$. This single observation is what will let Euler's Theorem reduce to Fermat's Little Theorem later.</p>

<h3 class="font-semibold text-lg mb-4">The Formula</h3>
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <p class="font-medium mb-2">If the distinct prime divisors of $n$ are $p_1, p_2, \\dots, p_k$, then</p>
    $$\\varphi(n) = n \\prod_{i=1}^{k} \\left(1 - \\frac{1}{p_i}\\right)$$
</div>
<p>Examples:</p>
<ul class="list-disc list-inside ml-5 mt-2 space-y-1 mb-4">
    <li>$\\varphi(12)$: the primes dividing $12$ are $2$ and $3$, so $\\varphi(12) = 12 \\cdot \\left(1 - \\frac{1}{2}\\right) \\cdot \\left(1 - \\frac{1}{3}\\right) = 12 \\cdot \\frac{1}{2} \\cdot \\frac{2}{3} = 4$.</li>
    <li>$\\varphi(360)$: since $360 = 2^3 \\cdot 3^2 \\cdot 5$, we get $\\varphi(360) = 360 \\cdot \\frac{1}{2} \\cdot \\frac{2}{3} \\cdot \\frac{4}{5} = 96$.</li>
</ul>

<h3 class="font-semibold text-lg mb-4">Why the Formula Is True (Proof)</h3>
<p>Write the prime factorisation $n = p_1^{e_1} p_2^{e_2} \\cdots p_k^{e_k}$. A number $m$ in $\\{1, 2, \\dots, n\\}$ is coprime to $n$ if and only if it is not divisible by any of $p_1, \\dots, p_k$. Let us count how many numbers in that range are <em>not</em> divisible by any of them.</p>
<ul class="list-disc list-inside ml-5 mt-2 space-y-1 mb-4">
    <li>Numbers divisible by $p_i$: exactly $\\frac{n}{p_i}$.</li>
    <li>Numbers divisible by both $p_i$ and $p_j$: exactly $\\frac{n}{p_i p_j}$.</li>
    <li>Numbers divisible by all three $p_i, p_j, p_l$: exactly $\\frac{n}{p_i p_j p_l}$, and so on.</li>
</ul>
<p>Now use inclusion–exclusion: start with all $n$ numbers, subtract the ones divisible by a single prime, add back the ones divisible by a pair, subtract the ones divisible by a triple, and continue. The result is the alternating sum</p>
$$\\varphi(n) = n - \\sum_{i} \\frac{n}{p_i} + \\sum_{i < j} \\frac{n}{p_i p_j} - \\sum_{i < j < l} \\frac{n}{p_i p_j p_l} + \\cdots$$
<p>But this alternating expression is secretly just the expansion of a product. The algebraic identity $(1 - a_1)(1 - a_2) \\cdots (1 - a_k) = 1 - \\sum a_i + \\sum_{i<j} a_i a_j - \\cdots$ gives, with $a_i = 1/p_i$,</p>
$$\\varphi(n) = n \\left(1 - \\frac{1}{p_1}\\right)\\left(1 - \\frac{1}{p_2}\\right) \\cdots \\left(1 - \\frac{1}{p_k}\\right) = n \\prod_{i=1}^{k} \\left(1 - \\frac{1}{p_i}\\right) \\qquad \\blacksquare$$
<p>This is exactly the claimed formula. ∎</p>

<h3 class="font-semibold text-lg mb-4">Multiplicativity</h3>
<p>If $\\gcd(m, n) = 1$, then $\\varphi(mn) = \\varphi(m) \\cdot \\varphi(n)$. This follows quickly from the product formula, because coprime $m$ and $n$ have disjoint sets of prime divisors, so the products just multiply. For example, $\\varphi(105) = \\varphi(3 \\cdot 5 \\cdot 7) = \\varphi(3) \\varphi(5) \\varphi(7) = 2 \\cdot 4 \\cdot 6 = 48$, and indeed $105 \\cdot \\frac{2}{3} \\cdot \\frac{4}{5} \\cdot \\frac{6}{7} = 48$.</p>

<h1 class="text-2xl font-bold mb-4">⧉ Euler's Theorem</h1>
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ Statement</h3>
    <p class="font-medium">If $\\gcd(a, n) = 1$ and $n \\ge 1$, then</p>
    <p class="font-medium text-center">$$a^{\\varphi(n)} \\equiv 1 \\pmod{n}$$</p>
</div>
<p>Look at what happens when $n = p$ is prime: $\\varphi(p) = p - 1$, and Euler's Theorem becomes exactly Fermat's Little Theorem. So Fermat is nothing but a special case of Euler — the totient function lifts Fermat's result from primes to every modulus. This is the theorem that makes RSA and modern cryptography possible.</p>

<h3 class="font-semibold text-lg mb-4">Proof</h3>
<p>Let $r_1, r_2, \\dots, r_{\\varphi(n)}$ be the numbers from $1$ to $n$ that are coprime to $n$; together they form the <em>reduced residue system</em> modulo $n$. Multiply each of them by $a$, where $\\gcd(a, n) = 1$.</p>
<ol class="list-decimal list-inside space-y-3 text-gray-800 mb-4">
    <li>Each product $a r_i$ is again coprime to $n$, because any common divisor of $a r_i$ and $n$ would have to divide both $n$ and a factor of $a r_i$; but neither $a$ nor any $r_i$ shares a factor with $n$.</li>
    <li>No two products are congruent modulo $n$: if $a r_i \\equiv a r_j \\pmod{n}$, then $n \\mid a (r_i - r_j)$; since $\\gcd(a, n) = 1$, we cancel $a$ and get $n \\mid (r_i - r_j)$, which forces $r_i = r_j$, i.e. $i = j$.</li>
</ol>
<p>Together these two facts mean multiplication by $a$ simply <em>permutes</em> the reduced residue system: the list $a r_1, \\dots, a r_{\\varphi(n)}$ is the same list as $r_1, \\dots, r_{\\varphi(n)}$, possibly in a different order. Therefore the product of all the numbers is unchanged:</p>
$$(a r_1)(a r_2) \\cdots (a r_{\\varphi(n)}) \\equiv r_1 r_2 \\cdots r_{\\varphi(n)} \\pmod{n}$$
$$a^{\\varphi(n)} \\cdot P \\equiv P \\pmod{n}, \\qquad \\text{where } P = r_1 r_2 \\cdots r_{\\varphi(n)}$$
<p>Since every $r_i$ is coprime to $n$, their product $P$ is also coprime to $n$, so we may cancel $P$ on both sides using the cancellation rule of modular arithmetic. What remains is</p>
$$a^{\\varphi(n)} \\equiv 1 \\pmod{n} \\qquad \\blacksquare$$
<p>∎</p>

<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ Example</h3>
    <p>We already know $\\varphi(12) = 4$ and $\\gcd(5, 12) = 1$, so Euler's Theorem predicts $5^4 \\equiv 1 \\pmod{12}$. Indeed $5^4 = 625 = 52 \\cdot 12 + 1$.</p>
</div>

<h3 class="font-semibold text-lg mb-4">How This Powers RSA</h3>
<p>Here is the magic in a nutshell. Choose two large primes $p$ and $q$, and set $n = p \\cdot q$. Then $\\varphi(n) = (p - 1)(q - 1)$. Pick $e$ coprime to $\\varphi(n)$, and find $d$ with $e d \\equiv 1 \\pmod{\\varphi(n)}$. If a message is the number $a$, then raising to $e$ modulo $n$ encrypts it — and because $e d = 1 + t \\cdot \\varphi(n)$ for some integer $t$, the key numeric property is</p>
$$(a^e)^d = a^{e d} = a^{1 + t \\varphi(n)} = a \\cdot \\left(a^{\\varphi(n)}\\right)^t \\equiv a \\cdot 1^t \\equiv a \\pmod{n}$$
<p>So raising to $d$ modulo $n$ perfectly undoes the encryption — and only the owner of $d$ can do it. Euler's Theorem is the mathematical lock (and key) at the heart of secure communication on the internet.</p>
<h1 class="text-2xl font-bold mb-4">⧉ Conclusion</h1>
<p>Number theory is not a subject for memorization; it is a wonderful training ground for the practice of reasoning. From the infinitude of primes to the Sieve of Eratosthenes, and from the Chinese Remainder Theorem to Euler's Theorem—every step shows how a vast mathematical edifice is built upon simple little ideas.</p>
<p>The theorems we met—Bézout's Identity, the Chinese Remainder Theorem, Euler's totient function and Euler's Theorem—are not museum pieces: they are the working engines of real computer systems, from cryptography to number-theory algorithms.</p>
<p>And always remember one more thing—just like sports, the more you practise divisibility, modular arithmetic and prime numbers hands-on, the easier olympiad problems will feel. Solving problems again and again is the only way to become skilled in this branch.</p>
        `,
            bn: `<p>গণিতকে যদি বিজ্ঞানের রাণী বলা হয় তাহলে এই সংখ্যাতত্ত্বকে বলা হয় গণিতের রাণী। বর্তমান বিশ্বের যত প্রযুক্তি ও নিরাপত্তা ব্যবস্থা রয়েছে তার কেন্দ্রে রয়েছে এই সংখ্যাতত্ত্বের ব্যবহার। এমনকি এটিই গণিতরে সবচেয়ে প্রাচীন শাখা। প্রাচীন গ্রিস, ভারত, চীন ও মেসোপটেমিয়ার গণিতবিদরা হাজার হাজার বছর আগে থেকেই পূর্ণসংখ্যার (Integers) বিভিন্ন ধর্ম ও মৌলিক সংখ্যা নিয়ে চর্চা করে আসছেন। এমনকি বিখ্যাত গ্রীক গণিতবিদ ইউক্লিড (Euclid) খ্রিস্টপূর্ব ৩০০ অব্দেই মৌলিক সংখ্যার অসীমতার প্রমাণ দিয়েছিলেন।
            সংখ্যাতত্ত্বের (Number Theory) বিকাশে মুসলিম ও ভারতীয় গণিতবিদদের অবদান অত্যন্ত সুদূরপ্রসারী ও মৌলিক। তাঁদের আবিষ্কার ছাড়া আজকের আধুনিক গণিত ও ডিজিটাল প্রযুক্তি অসম্পূর্ণ থেকে যেত।
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ হিন্দু (প্রাচীন ও মধ্যযুগীয় ভারতীয়) গণিতবিদদের অবদান</h3>
        <p>ভারতীয় গণিতবিদদের সবচেয়ে বড় অবদান হলো পুরো গণিত শাস্ত্রের ভাষা বদলে দেওয়া।</p>
    <ol class="list-decimal list-inside space-y-3 text-gray-800">
        <li>
            <span class="font-medium">শূন্য ($0$) ও স্থানিক মান নীতি (Decimal Positional System):</span> 
            সংখ্যাতত্ত্বের ভিত্তি হলো সংখ্যা লেখার পদ্ধতি। ভারতীয় গণিতবিদরাই প্রথম শূন্য ($0$)-কে একটি স্বতন্ত্র সংখ্যা হিসেবে স্বীকৃতি দাও এবং ১০ ভিত্তিক স্থানিক মান পদ্ধতির পূর্ণাঙ্গ রূপ দাও, যা পুরো গণিতের গণনাকে সহজ করে তোলে।
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
সাইবার নিরাপত্তা ও ক্রিপ্টোগ্রাফি (Cryptography): তুমি যখন ইন্টারনেটে ব্যাংকিং লেনদেন করেন, হোয়াটসঅ্যাপে এনক্রিপ্টেড মেসেজ পাঠান বা কোনো পাসওয়ার্ড ব্যবহার করেন—তখন তার পেছনে কাজ করে RSA এনক্রিপশন algorithm। এটি পুরোপুরি বড় বড় মৌলিক সংখ্যা (Prime Numbers) এবং সংখ্যা তত্ত্বের মডুলার অ্যারিথমেটিকের (Modular Arithmetic) ওপর ভিত্তি করে তৈরি।            </li>
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
আবার যদি দুটি সংখ্যার $\\gcd = 1$ হয়, তবে তাদের বলা হয় সহ-মৌলিক (Co-prime বা Relatively Prime)। যেমন: $\\gcd(8, 15) = 1$, তাই $8$ ও $15$ সহ-মৌলিক (যদিও কেউই মৌলিক সংখ্যা নয়)। এখন চট করে গণিত অলিম্পিয়াডের একটি প্রশ্ন সমাধান করা যাক। 
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
<div class="vscode-window my-6">
    <button class="vscode-copy" type="button" aria-label="Copy code">Copy</button>
    <div class="vscode-body">
        <div class="vscode-line"><span class="vscode-gutter">1</span><span class="vscode-code"><span class="text-amber-500">#include</span> <span class="text-emerald-400">&lt;stdio.h&gt;</span></span></div>
        <div class="vscode-line"><span class="vscode-gutter">2</span><span class="vscode-code"></span></div>
        <div class="vscode-line"><span class="vscode-gutter">3</span><span class="vscode-code"><span class="text-sky-400">int</span> <span class="text-indigo-300">gcd</span>(<span class="text-sky-400">int</span> a, <span class="text-sky-400">int</span> b) {</span></div>
        <div class="vscode-line"><span class="vscode-gutter">4</span><span class="vscode-code">    <span class="text-sky-400">while</span> (b != <span class="text-pink-400">0</span>) {</span></div>
        <div class="vscode-line"><span class="vscode-gutter">5</span><span class="vscode-code">        <span class="text-sky-400">int</span> temp = b;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">6</span><span class="vscode-code">        b = a % b;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">7</span><span class="vscode-code">        a = temp;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">8</span><span class="vscode-code">    }</span></div>
        <div class="vscode-line"><span class="vscode-gutter">9</span><span class="vscode-code">    <span class="text-sky-400">return</span> a;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">10</span><span class="vscode-code">}</span></div>
        <div class="vscode-line"><span class="vscode-gutter">11</span><span class="vscode-code"></span></div>
        <div class="vscode-line"><span class="vscode-gutter">12</span><span class="vscode-code"><span class="text-sky-400">int</span> <span class="text-indigo-300">main</span>(<span class="text-sky-400">void</span>) {</span></div>
        <div class="vscode-line"><span class="vscode-gutter">13</span><span class="vscode-code">    <span class="text-sky-400">int</span> a, b;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">14</span><span class="vscode-code">    <span class="text-indigo-300">scanf</span>(<span class="text-emerald-400">"%d %d"</span>, &amp;a, &amp;b);</span></div>
        <div class="vscode-line"><span class="vscode-gutter">15</span><span class="vscode-code">    <span class="text-indigo-300">printf</span>(<span class="text-emerald-400">"GCD %d\\n"</span>, <span class="text-indigo-300">gcd</span>(a, b));</span></div>
        <div class="vscode-line"><span class="vscode-gutter">16</span><span class="vscode-code">    <span class="text-sky-400">return</span> <span class="text-pink-400">0</span>;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">17</span><span class="vscode-code">}</span></div>
    </div>
</div>
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
<div class="vscode-window my-6">
    <button class="vscode-copy" type="button" aria-label="Copy code">Copy</button>
    <div class="vscode-body">
        <div class="vscode-line"><span class="vscode-gutter">1</span><span class="vscode-code"><span class="text-amber-500">#include</span> <span class="text-emerald-400">&lt;stdio.h&gt;</span></span></div>
        <div class="vscode-line"><span class="vscode-gutter">2</span><span class="vscode-code"></span></div>
        <div class="vscode-line"><span class="vscode-gutter">3</span><span class="vscode-code"><span class="text-sky-400">int</span> <span class="text-indigo-300">ext_gcd</span>(<span class="text-sky-400">int</span> a, <span class="text-sky-400">int</span> b, <span class="text-sky-400">int</span> *x, <span class="text-sky-400">int</span> *y) {</span></div>
        <div class="vscode-line"><span class="vscode-gutter">4</span><span class="vscode-code">    <span class="text-sky-400">if</span> (b == <span class="text-pink-400">0</span>) {</span></div>
        <div class="vscode-line"><span class="vscode-gutter">5</span><span class="vscode-code">        *x = <span class="text-pink-400">1</span>;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">6</span><span class="vscode-code">        *y = <span class="text-pink-400">0</span>;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">7</span><span class="vscode-code">        <span class="text-sky-400">return</span> a;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">8</span><span class="vscode-code">    }</span></div>
        <div class="vscode-line"><span class="vscode-gutter">9</span><span class="vscode-code">    <span class="text-sky-400">int</span> x1, y1;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">10</span><span class="vscode-code">    <span class="text-sky-400">int</span> gcd = <span class="text-indigo-300">ext_gcd</span>(b, a % b, &amp;x1, &amp;y1);</span></div>
        <div class="vscode-line"><span class="vscode-gutter">11</span><span class="vscode-code">    *x = y1;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">12</span><span class="vscode-code">    *y = x1 - (a / b) * y1;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">13</span><span class="vscode-code">    <span class="text-sky-400">return</span> gcd;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">14</span><span class="vscode-code">}</span></div>
        <div class="vscode-line"><span class="vscode-gutter">15</span><span class="vscode-code"></span></div>
        <div class="vscode-line"><span class="vscode-gutter">16</span><span class="vscode-code"><span class="text-sky-400">int</span> <span class="text-indigo-300">main</span>(<span class="text-sky-400">void</span>) {</span></div>
        <div class="vscode-line"><span class="vscode-gutter">17</span><span class="vscode-code">    <span class="text-sky-400">int</span> a = <span class="text-pink-400">252</span>, b = <span class="text-pink-400">105</span>;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">18</span><span class="vscode-code">    <span class="text-sky-400">int</span> x, y;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">19</span><span class="vscode-code">    <span class="text-sky-400">int</span> gcd = <span class="text-indigo-300">ext_gcd</span>(a, b, &amp;x, &amp;y);</span></div>
        <div class="vscode-line"><span class="vscode-gutter">20</span><span class="vscode-code">    <span class="text-indigo-300">printf</span>(<span class="text-emerald-400">"GCD: %d\\n"</span>, gcd);</span></div>
        <div class="vscode-line"><span class="vscode-gutter">21</span><span class="vscode-code">    <span class="text-indigo-300">printf</span>(<span class="text-emerald-400">"Coefficients x and y: %d, %d\\n"</span>, x, y);</span></div>
        <div class="vscode-line"><span class="vscode-gutter">22</span><span class="vscode-code">    <span class="text-sky-400">return</span> <span class="text-pink-400">0</span>;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">23</span><span class="vscode-code">}</span></div>
    </div>
</div>








</p>
<h1 class="text-2xl font-bold mb-4">⧉ মৌলিক সংখ্যা (Prime Numbers)</h1>
<p>আমরা সবাই মৌলিক সংখ্যার সাথে কমবেশি পরিচিত। শুরু করা যাক প্রচলিত সংজ্ঞাটি দিয়েই— যে সংখ্যাটির ১ এবং ওই সংখ্যাটি ব্যতীত অন্য কোনো উৎপাদক নেই সেটিই মৌলিক সংখ্যা। ৫ এর কথাই ধরা যাক, যাকে ৫ এবং ১ এই দুইটি সংখ্যা ব্যতীত আর কোনো পূর্ণসংখ্যা দ্বারা ভাগ করা যায় না। তাই ৫ একটি মৌলিক সংখ্যা। অন্যদিকে ৬-কে ১ এবং ৬ ছাড়াও ২ এবং ৩ দ্বারা ভাগ করা যায়, তাই এটি যৌগিক সংখ্যা।
তবে গণিতের এই অতি পরিচিত ‘মৌলিক সংখ্যা’ বা Prime Number নিয়ে একটু গভীরভাবে ভাবলে বেশ কিছু চমৎকার এবং রহস্যময় দিক উন্মোচিত হয়। চলো মৌলিক সংখ্যার জগৎটা একটু নতুন করে চেনা যাক।</p>

<h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">১ কেন মৌলিক সংখ্যা নয়?</h2>
<p>অনেকের মনেই প্রশ্ন জাগে, মৌলিক সংখ্যার সংজ্ঞা অনুযায়ী ১-এর তো ১ এবং ওই সংখ্যা (অর্থাৎ ১) ছাড়া কোনো উৎপাদক নেই, তাহলে ১ কেন মৌলিক সংখ্যা নয়?</p>
<p>গণিতবিদরা ১-কে মৌলিক সংখ্যার দল থেকে বাদ দিয়েছেন একটি বিশেষ নিয়মের মর্যাদা রক্ষা করতে। নিয়মটি হলো পাটিগণিতের মৌলিক উপপাদ্য (Fundamental Theorem of Arithmetic)। এই উপপাদ্য অনুযায়ী:</p>
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <p class="font-medium">১ অপেক্ষা বড় যেকোনো পূর্ণসংখ্যাকে মৌলিক সংখ্যার গুণফল হিসেবে প্রকাশ করা যায় এবং এই প্রকাশ পদ্ধতিটি অনন্য (Unique)।</p>
</div>
<p>যেমন: $12 = 2 \\times 2 \\times 3$। এখন ১-কে যদি মৌলিক সংখ্যা ধরা হতো, তবে ১২-কে লেখা যেত:
$$12 = 2 \\times 2 \\times 3 \\times 1$$
$$12 = 2 \\times 2 \\times 3 \\times 1 \\times 1$$</p>
<p>এভাবে অনন্যতার (Uniqueness) নিয়মটি ভেঙে যেত। তাই ১ মৌলিক বা যৌগিক কোনোটিই নয়, এটি একটি অনন্য সংখ্যা (Unique Number)।</p>

<h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">একমাত্র জোড় মৌলিক সংখ্যা</h2>
<p>মৌলিক সংখ্যার তালিকায় ২ হচ্ছে একমাত্র জোড় সংখ্যা। ২ ছাড়া পৃথিবীর আর কোনো জোড় সংখ্যা মৌলিক হতে পারে না, কারণ যেকোনো জোড় সংখ্যাকে ২ দ্বারা ভাগ করা সম্ভব। তাই ২-কে বলা হয় সবচেয়ে ছোট এবং একমাত্র জোড় মৌলিক সংখ্যা।</p>

<h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">মৌলিক সংখ্যা কি অসীম?</h2>
<p>হ্যাঁ, মৌলিক সংখ্যা অসীম। আজ থেকে প্রায় ২৩০০ বছর আগে গ্রিক গণিতবিদ ইউক্লিড প্রমাণ করে গেছেন যে মৌলিক সংখ্যার কোনো শেষ নেই। তুমি যত বড় সংখ্যার দিকেই যান না কেন, মৌলিক সংখ্যা পাওয়া বন্ধ হবে না।</p>
<p>তবে সংখ্যার মান যত বাড়তে থাকে, মৌলিক সংখ্যা পাওয়ার ঘনত্ব তত কমতে থাকে। যেমন:</p>
<ul class="list-disc list-inside ml-5 mt-2 space-y-1">
    <li>১ থেকে ১০০-এর মধ্যে মৌলিক সংখ্যা আছে ২৫টি।</li>
    <li>১০১ থেকে ২০০-এর মধ্যে আছে ২১টি।</li>
    <li>বড় সংখ্যার দিকে গেলে দুটি মৌলিক সংখ্যার মধ্যকার দূরত্ব কোটি কোটি ছাড়িয়ে যেতে পারে।</li>
</ul>

<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ ইউক্লিডের প্রমাণ (Euclid's Proof)</h3>
    <p>ধরে নিই মৌলিক সংখ্যা সসীম এবং সেগুলো হলো $p_1, p_2, \\dots, p_k$। এখন একটি নতুন সংখ্যা তৈরি করি:
    $$N = p_1 \\cdot p_2 \\cdot p_3 \\cdots p_k + 1$$
    এই $N$ সংখ্যাটিকে যদি $p_1, p_2, \\dots, p_k$ এর যে কোনো একটি দিয়ে ভাগ করা হয়, তবে প্রতিক্ষেত্রেই ভাগশেষ থাকে $1$। অর্থাৎ $N$ মৌলিক সংখ্যার তালিকার কোনো সংখ্যা দ্বারাই বিভাজ্য নয়। তাহলে $N$ হয় নিজেই একটি নতুন মৌলিক সংখ্যা, অথবা এমন কিছু মৌলিক সংখ্যার গুণফল যারা আমাদের তালিকায় নেই। উভয় ক্ষেত্রেই আমাদের ধারণা ভুল প্রমাণিত হয়। অতএব, মৌলিক সংখ্যা অসীম। (প্রমাণিত)</p>
</div>


<h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">মৌলিক সংখ্যা বের করা: সিভ অফ ইরাটোস্থেনিস (Sieve of Eratosthenes)</h2>
<p>এখন আমরা জানি মৌলিক সংখ্যা অসীম, কিন্তু বাস্তবে এদের তালিকা তৈরি করার প্রশ্ন থেকেই যায়। হাতে বা কম্পিউটারে সবচেয়ে সোজা পদ্ধতি হলো ট্রায়াল ডিভিশন (trial division): কোনো সংখ্যা $m$ মৌলিক কি না বের করতে $2$ থেকে শুরু করে $\\sqrt{m}$ পর্যন্ত প্রতিটি পূর্ণসংখ্যা দিয়ে ভাগ করে দেখতে হয়। কেউ যদি ভাগ করতে পারে তাহলে $m$ মৌলিক নয়। পদ্ধতিটি কাজ করে বটে, কিন্তু বড় $n$ পর্যন্ত সব মৌলিক সংখ্যা দরকার হলে প্রতিটি সংখ্যাকে আলাদা আলাদা করে পরীক্ষা করা ভয়ংকর ধীরগতির ব্যাপার হয়ে দাঁড়ায়।</p>
<p>খ্রিস্টপূর্ব ২৪০ সালের দিকে গ্রিক পণ্ডিত <strong>ইরাটোস্থেনিস (Eratosthenes of Cyrene)</strong> আরও বুদ্ধিমান একটি পদ্ধতি আবিষ্কার করেন। একে একে সংখ্যা পরীক্ষা না করে তিনি প্রস্তাব করেন— যৌগিক সংখ্যাগুলোকে একটি গোছানো ধাপে একসাথে <em>কেটে ফেলার</em>, ঠিক আটা চালিয়ে মোটা দানাগুলো আলাদা করার মতো। এই পদ্ধতিই <strong>সিভ অফ ইরাটোস্থেনিস</strong> নামে পরিচিত।</p>

<h3 class="font-semibold text-lg mb-4">অ্যালগরিদম, ধাপে ধাপে</h3>
<ol class="list-decimal-bangla space-y-3 mb-8 pl-6">
    <li>$2$ থেকে $n$ পর্যন্ত সব পূর্ণসংখ্যা এক সারিতে লেখো।</li>
    <li>তালিকার প্রথম সংখ্যা $p = 2$ ধরো।</li>
    <li>$p$-এর সব <em>প্রকৃত</em> গুণিতক $2p, 3p, 4p, \\dots$ কেটে দাও ($p$ নিজে নয়)।</li>
    <li>কাটা পড়ে না এমন পরবর্তী সংখ্যায় যাও— সেটি অবশ্যই একটি মৌলিক সংখ্যা। একে নতুন $p$ ধরো।</li>
    <li>$p \\times p > n$ হওয়া পর্যন্ত ধাপ ৩–৪ বার করো, তারপর থামো।</li>
</ol>
<p>যে সংখ্যাগুলো অকাটা থেকে যায় সেগুলোই <strong>ঠিক</strong> $2$ থেকে $n$ পর্যন্ত মৌলিক সংখ্যা।</p>

<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ কাজের উদাহরণ: $n = 30$ পর্যন্ত সব মৌলিক সংখ্যা</h3>
    <p class="mb-2">$2, 3, 4, \\dots, 30$ লেখো। $p = 2$ নিয়ে $4, 6, 8, 10, \\dots, 30$ কেটে দাও। পরের অকাটা সংখ্যা $3$; $6, 9, 12, \\dots, 27$ কেটে দাও। পরের অকাটা সংখ্যা $5$; $10, 15, 20, 25, 30$ কেটে দাও। এখন $5 \\times 5 = 25 \\le 30$, তাই চলতে থাকো: পরের অকাটা সংখ্যা $7$, কিন্তু $7 \\times 7 = 49 > 30$, তাই থেমে যাও।</p>
    <p>অবশিষ্ট সংখ্যাগুলো হলো $2, 3, 5, 7, 11, 13, 17, 19, 23, 29$ — $30$-এর নিচে দশটি মৌলিক সংখ্যা।</p>
</div>

<p class="mb-4">সি ভাষায় সিভ অফ ইরাটোস্থেনিসের একটি সহজ ইমপ্লিমেন্টেশন:</p>
<div class="vscode-window my-6">
    <button class="vscode-copy" type="button" aria-label="Copy code">Copy</button>
    <div class="vscode-body">
        <div class="vscode-line"><span class="vscode-gutter">1</span><span class="vscode-code"><span class="text-amber-500">#include</span> <span class="text-emerald-400">&lt;stdio.h&gt;</span></span></div>
        <div class="vscode-line"><span class="vscode-gutter">2</span><span class="vscode-code"><span class="text-amber-500">#include</span> <span class="text-emerald-400">&lt;stdbool.h&gt;</span></span></div>
        <div class="vscode-line"><span class="vscode-gutter">3</span><span class="vscode-code"></span></div>
        <div class="vscode-line"><span class="vscode-gutter">4</span><span class="vscode-code"><span class="text-sky-400">void</span> <span class="text-indigo-300">sieve</span>(<span class="text-sky-400">int</span> n) {</span></div>
        <div class="vscode-line"><span class="vscode-gutter">5</span><span class="vscode-code">    <span class="text-sky-400">bool</span> isPrime[n + <span class="text-pink-400">1</span>];</span></div>
        <div class="vscode-line"><span class="vscode-gutter">6</span><span class="vscode-code">    <span class="text-sky-400">for</span> (<span class="text-sky-400">int</span> i = <span class="text-pink-400">2</span>; i <= n; i++) isPrime[i] = <span class="text-sky-400">true</span>;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">7</span><span class="vscode-code"></span></div>
        <div class="vscode-line"><span class="vscode-gutter">8</span><span class="vscode-code">    <span class="text-sky-400">for</span> (<span class="text-sky-400">int</span> p = <span class="text-pink-400">2</span>; p * p <= n; p++) {</span></div>
        <div class="vscode-line"><span class="vscode-gutter">9</span><span class="vscode-code">        <span class="text-sky-400">if</span> (isPrime[p]) {</span></div>
        <div class="vscode-line"><span class="vscode-gutter">10</span><span class="vscode-code">            <span class="text-sky-400">for</span> (<span class="text-sky-400">int</span> m = p * p; m <= n; m += p)</span></div>
        <div class="vscode-line"><span class="vscode-gutter">11</span><span class="vscode-code">                isPrime[m] = <span class="text-sky-400">false</span>;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">12</span><span class="vscode-code">        }</span></div>
        <div class="vscode-line"><span class="vscode-gutter">13</span><span class="vscode-code">    }</span></div>
        <div class="vscode-line"><span class="vscode-gutter">14</span><span class="vscode-code"></span></div>
        <div class="vscode-line"><span class="vscode-gutter">15</span><span class="vscode-code">    <span class="text-sky-400">for</span> (<span class="text-sky-400">int</span> i = <span class="text-pink-400">2</span>; i <= n; i++)</span></div>
        <div class="vscode-line"><span class="vscode-gutter">16</span><span class="vscode-code">        <span class="text-sky-400">if</span> (isPrime[i]) <span class="text-indigo-300">printf</span>(<span class="text-emerald-400">"%d "</span>, i);</span></div>
        <div class="vscode-line"><span class="vscode-gutter">17</span><span class="vscode-code">    <span class="text-indigo-300">printf</span>(<span class="text-emerald-400">"\\n"</span>);</span></div>
        <div class="vscode-line"><span class="vscode-gutter">18</span><span class="vscode-code">}</span></div>
        <div class="vscode-line"><span class="vscode-gutter">19</span><span class="vscode-code"></span></div>
        <div class="vscode-line"><span class="vscode-gutter">20</span><span class="vscode-code"><span class="text-sky-400">int</span> <span class="text-indigo-300">main</span>(<span class="text-sky-400">void</span>) {</span></div>
        <div class="vscode-line"><span class="vscode-gutter">21</span><span class="vscode-code">    <span class="text-indigo-300">sieve</span>(<span class="text-pink-400">30</span>);</span></div>
        <div class="vscode-line"><span class="vscode-gutter">22</span><span class="vscode-code">    <span class="text-sky-400">return</span> <span class="text-pink-400">0</span>;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">23</span><span class="vscode-code">}</span></div>
    </div>
</div>

<h3 class="font-semibold text-lg mb-4">দুটি চালাক শর্টকাট</h3>
<p>সিভটি দুই জায়গায় বুদ্ধিমত্তা খাটায়:</p>
<ul class="list-disc list-inside ml-5 mt-2 space-y-1 mb-4">
    <li><strong>শুধু $p \\times p \\le n$ পর্যন্ত যেতে হবে।</strong> $m$ যৌগিক হলে $1 < d \\le \\sqrt{m} \\le \\sqrt{n}$ এমন একটি ভাজক $d$ থাকে। সুতরাং $n$-এর নিচের প্রতিটি যৌগিক সংখ্যা কোনো না কোনো $p \\le \\sqrt{n}$ মৌলিকের হাতেই ধরা পড়বে; এর বাইরে নতুন কিছু কাটার থাকে না।</li>
    <li><strong>$p \\times p$ থেকে কাটা শুরু করা হয়।</strong> $k < p$ হলে $k \\cdot p$ গুণিতকটি ছোট সংখ্যা $k$-এরও গুণিতক; $k$ মৌলিক হলে সে আগেই নিজের পালায় কেটেছে, আর যৌগিক হলে আগেই বাদ গিয়েছে। তাই $p \\times p$ থেকে শুরু করে অযথা বারবার দাগানো এড়ানো যায়।</li>
</ul>

<h3 class="font-semibold text-lg mb-4">কেন কাজ করে? সঠিকতার প্রমাণ</h3>
<div class="bg-amber-50 border border-amber-200 p-6 rounded-xl my-8">
    <p class="font-medium mb-2">উপপাদ্য। অ্যালগরিদম থামলে (প্রথম এমন মৌলিক $p$-এ যেখানে $p \\times p > n$), $2 \\le m \\le n$ এর একটি সংখ্যা $m$ অকাটা থাকে যদি এবং কেবল যদি $m$ মৌলিক হয়।</p>
    <p class="mb-2"><strong>$m$ মৌলিক হলে:</strong> সে কোনো ছোট সংখ্যার <em>প্রকৃত</em> গুণিতক নয়, তাই কোনো ধাপই তাকে কাটতে পারে না। সে টিকে থাকে।</p>
    <p><strong>$m$ যৌগিক হলে:</strong> লিখো $m = a \\cdot b$, যেখানে $1 < a \\le b < m$। তাহলে $a \\le \\sqrt{m} \\le \\sqrt{n}$। $a$-এর অন্তত একটি মৌলিক ভাজক আছে $p \\le a \\le \\sqrt{n}$; ফলে $p \\times p \\le n$ — মানে লুপ $p$-কে প্রসেস করেছে এবং $p$-এর প্রতিটি প্রকৃত গুণিতক কেটে দিয়েছে। যেহেতু $p \\mid a$ এবং $a \\mid m$, তাই $p \\mid m$; আবার $m > p$ হওয়ায় $m$ হলো $p$-এর প্রকৃত গুণিতক। সুতরাং $m$ কাটা পড়েছিল।</p>
</div>

<h3 class="font-semibold text-lg mb-4">কত দ্রুত? $O(n \\log \\log n)$</h3>
<p>সিভ যখন একটি মৌলিক $p$ প্রসেস করে, তখন সে প্রায় $\\frac{n}{p}$ টি গুণিতক দেখে। তাই মোট কাজের পরিমাণ মোটামুটি</p>
$$\\sum_{p \\le n} \\frac{n}{p} = n \\sum_{p \\le n} \\frac{1}{p}$$
<p>সূত্রটি দেখে ঘাবড়ানোর কিছু নেই— অন্তর্দৃষ্টিটা সহজ: মৌলিক সংখ্যা যত বড়, তার গুণিতক তত কম, তাই খরচ তত কম। অয়লার ও মারটেনসের একটি বিখ্যাত ফলাফল বলে মৌলিক সংখ্যাগুলোর ব্যস্তানুপাতিক যোগফল $\\log \\log n$-এর মতো বাড়ে:</p>
$$\\sum_{p \\le n} \\frac{1}{p} \\approx \\log \\log n + 0.261$$
<p>ফলে পুরো সিভের খরচ প্রায় $n \\cdot \\log \\log n$ অপারেশন আর $O(n)$ মেমোরি। $n = 10^6$ ধরে সেটি মোটামুটি $10^6 \\times 3.5$ অপারেশন— এক সেকেন্ডেরও কম, অথচ প্রতিটি সংখ্যা আলাদা ট্রায়াল ডিভিশনে পরীক্ষা করতে অনেক বেশি সময় লাগত।</p>

<h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">পাটিগণিতের মৌলিক উপপাদ্য (Fundamental Theorem of Arithmetic)</h2>
<p>পাটিগণিতের মৌলিক উপপাদ্য অনুযায়ী, $1$-এর চেয়ে বড় প্রতিটি পূর্ণসংখ্যাকে মৌলিক সংখ্যার গুণফল আকারে লেখা যায় এবং এই লেখার পদ্ধতি (মৌলিক উৎপাদকগুলোর ক্রম বাদ দিয়ে) অনন্য।</p>
<p>যেমন: $360 = 2^3 \\times 3^2 \\times 5$ — এই প্রকাশটি অনন্য; অন্য কোনোভাবে উৎপাদকগুলোর ক্রম বদলে সাজানো ছাড়া $360$-কে অন্য মৌলিক গুণফলে লেখা সম্ভব নয়।</p>

<h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">আধুনিক বিশ্বে মৌলিক সংখ্যার জাদু: সাইবার নিরাপত্তা</h2>
<p>আপনার মনে হতে পারে, এই মৌলিক সংখ্যা দিয়ে বাস্তব জীবনে কী কাজ হয়? উত্তর হলো— তুমি যখন অনলাইনে কোনো পাসওয়ার্ড দাও, ক্রেডিট কার্ড দিয়ে কেনাকাটা করেন বা হোয়াটসঅ্যাপে মেসেজ পাঠান, তখন পর্দার আড়ালে আপনার তথ্য সুরক্ষিত রাখে এই মৌলিক সংখ্যা!</p>
<p>আধুনিক কম্পিউটার নিরাপত্তায় RSA এনক্রিপশন নামক একটি পদ্ধতি ব্যবহার করা হয়। এই পদ্ধতিতে দুটি বিশাল (ধরা যাক, শত অঙ্কের বড়) মৌলিক সংখ্যা গুণ করে একটি পাবলিক কি (Public Key) তৈরি করা হয়।</p>
<ul class="list-disc list-inside ml-5 mt-2 space-y-1">
    <li>দুটি বড় মৌলিক সংখ্যা গুণ করা কম্পিউটারের জন্য চোখের পলকের কাজ।</li>
    <li>কিন্তু সেই গুণফলটি ভেঙে মূল মৌলিক সংখ্যা দুটি খুঁজে বের করা বিশ্বের সবচেয়ে শক্তিশালী সুপারকম্পিউটারের জন্যও শত বছরের ব্যাপার।</li>
</ul>
<p>ঠিক এই অসামঞ্জস্যটিই RSA-কে এত নিরাপদ করে তোলে— যা আগে আমরা বেজুটের অভেদ আর মডুলার অ্যারিথমেটিকের প্রসঙ্গে দেখে এসেছি।</p>

<h1 class="text-2xl font-bold mb-4">⧉ মডুলার অ্যারিথমেটিক (Modular Arithmetic)</h1>
<p>মডুলার অ্যারিথমেটিক হলো "ঘড়ির কাঁটার অ্যারিথমেটিক"। ঘড়িতে ১২টার পর আবার ১টা আসে; একইভাবে কোনো নির্দিষ্ট সংখ্যা ($m$) পেরিয়ে গেলে সংখ্যাগুলো আবার শুরুর দিকে ফিরে আসে। গাণিতিকভাবে, আমরা বলি $a \\equiv b \\pmod{m}$ যদি $m \\mid (a - b)$ হয়, অর্থাৎ $a$ ও $b$-কে $m$ দিয়ে ভাগ করলে একই ভাগশেষ থাকে।</p>
<p>উদাহরণ: $17 \\equiv 5 \\pmod{12}$, কারণ $17 - 5 = 12$ যেটি $12$ দিয়ে বিভাজ্য। আবার $23 \\equiv 2 \\pmod{7}$।</p>
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ মডুলার অ্যারিথমেটিকের মৌলিক ধর্মসমূহ</h3>
    <ol class="list-decimal list-inside space-y-3 text-gray-800">
        <li>যদি $a \\equiv b \\pmod{m}$ এবং $c \\equiv d \\pmod{m}$ হয়, তবে $a + c \\equiv b + d \\pmod{m}$।</li>
        <li>যদি $a \\equiv b \\pmod{m}$ এবং $c \\equiv d \\pmod{m}$ হয়, তবে $a \\cdot c \\equiv b \\cdot d \\pmod{m}$।</li>
        <li>যদি $a \\equiv b \\pmod{m}$ হয়, তবে যেকোনো প্রাকৃতিক সংখ্যা $n$ এর জন্য $a^n \\equiv b^n \\pmod{m}$।</li>
        <li>যদি $ac \\equiv bc \\pmod{m}$ এবং $\\gcd(c, m) = 1$ হয়, তবে $a \\equiv b \\pmod{m}$ (সংক্ষিপ্তকরণ নিয়ম)।</li>
    </ol>
</div>
<p>মডুলার অ্যারিথমেটিকের ভিত্তি দাঁড়িয়ে থাকা ভাগ প্রক্রিয়ার অ্যালগরিদমের ওপর— $a = mq + r$ হলে $a \\equiv r \\pmod{m}$। এই নিয়মগুলো ব্যবহার করেই আমরা সহজে বড় সংখ্যার ভাগশেষ বের করতে পারি।</p>

<h1 class="text-2xl font-bold mb-4">⧉ রৈখিক সঙ্গতি (Linear Congruences)</h1>
<p>$x$-এর মান বের করার জন্য $ax \\equiv b \\pmod{m}$ আকারের সমীকরণকে রৈখিক সঙ্গতি (Linear Congruence) বলা হয়। এই সমীকরণের সমাধান থাকবে যদি এবং কেবল যদি $\\gcd(a, m) \\mid b$ হয়।</p>
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ উদাহরণ: $6x \\equiv 4 \\pmod{8}$ সমাধান করো।</h3>
    <p>এখানে $\\gcd(6, 8) = 2$ এবং $2 \\mid 4$, তাই সমাধান বিদ্যমান। উভয় পক্ষকে $2$ দিয়ে ভাগ করে পাই $3x \\equiv 2 \\pmod{4}$। এখন $3$ এর বিপরীত সংখ্যা (mod $4$) হলো $3$, কারণ $3 \\times 3 \\equiv 1 \\pmod{4}$। সুতরাং:
    $$x \\equiv 3 \\times 2 \\equiv 6 \\equiv 2 \\pmod{4}$$
    অর্থাৎ $x \\equiv 2 \\pmod{4}$। যাচাই: $x = 2$ হলে $6 \\times 2 = 12 \\equiv 4 \\pmod{8}$</p>
</div>

<h1 class="text-2xl font-bold mb-4">⧉ ফার্মার ক্ষুদ্র উপপাদ্য (Fermat's Little Theorem)</h1>
<p>ফার্মার ক্ষুদ্র উপপাদ্য মডুলার অ্যারিথমেটিকের সবচেয়ে গুরুত্বপূর্ণ উপপাদ্যগুলোর একটি। এতে বলা হয়:</p>
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <p class="font-medium">যদি $p$ একটি মৌলিক সংখ্যা হয় এবং $p \\nmid a$ হয় (অর্থাৎ $a$ ও $p$ সহ-মৌলিক), তবে
    $$a^{p-1} \\equiv 1 \\pmod{p}$$</p>
</div>
<p>এ থেকে আরও পাওয়া যায়, যেকোনো পূর্ণসংখ্যা $a$ এর জন্য $a^p \\equiv a \\pmod{p}$। এই উপপাদ্যটিই RSA এনক্রিপশন ও অন্যান্য আধুনিক ক্রিপ্টোগ্রাফি পদ্ধতির গাণিতিক ভিত্তি।</p>
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ উদাহরণ: $5^{12} \\bmod 13$ নির্ণয় করো।</h3>
    <p>যেহেতু $13$ মৌলিক এবং $\\gcd(5, 13) = 1$, তাই ফার্মার ক্ষুদ্র উপপাদ্য অনুযায়ী $5^{12} \\equiv 1 \\pmod{13}$। অর্থাৎ $5^{12} \\bmod 13 = 1$।</p>
</div>

<h1 class="text-2xl font-bold mb-4">⧉ উইলসনের উপপাদ্য (Wilson's Theorem)</h1>
<p>উইলসনের উপপাদ্য মৌলিক সংখ্যা চেনার একটি চমৎকার উপায় দেয়:</p>
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <p class="font-medium">একটি ধনাত্মক পূর্ণসংখ্যা $p > 1$ মৌলিক হবে যদি এবং কেবল যদি
    $$(p - 1)! \\equiv -1 \\pmod{p}$$
    হয়।</p>
</div>
<p>উদাহরণ: $p = 7$ ধরলে $(7 - 1)! = 6! = 720$ এবং $720 = 102 \\times 7 + 6 \\equiv -1 \\pmod{7}$। আবার $p = 9$ (যৌগিক) ধরলে $8! = 40320 \\equiv 0 \\pmod{9}$ — যা $-1$ নয়।</p>


<h1 class="text-2xl font-bold mb-4">⧉ চীনা ভাগশেষ উপপাদ্য (Chinese Remainder Theorem)</h1>
<p>তৃতীয় শতকে চীনা গণিতবিদ <strong>সান তজু (Sun Tzu)</strong> এমন একটি ধাঁধা ছেড়ে গিয়েছিলেন যা পরে কিংবদন্তিতে পরিণত হয়। আধুনিক অনুবাদে এটি এমন:</p>
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <p class="font-medium">"কতগুলো জিনিস আছে তার সংখ্যা অজানা। তিন তিন করে গুনলে ২ অবশিষ্ট থাকে; পাঁচ পাঁচ করে গুনলে ৩ অবশিষ্ট থাকে; সাত সাত করে গুনলে ২ অবশিষ্ট থাকে। সংখ্যাটি কত?"</p>
</div>
<p>এখন সেটিকে মডুলার অ্যারিথমেটিকের ভাষায় অনুবাদ করি। আমাদের এমন একটি ক্ষুদ্রতম ধনাত্মক সংখ্যা $x$ দরকার যা <em>একই সাথে</em> তিনটি সঙ্গতি মেনে চলে:</p>
$$x \\equiv 2 \\pmod{3}, \\qquad x \\equiv 3 \\pmod{5}, \\qquad x \\equiv 2 \\pmod{7}$$
<p>$23$ সংখ্যাটি কাজ করে, কারণ $23 = 7 \\cdot 3 + 2$, $23 = 4 \\cdot 5 + 3$ আর $23 = 3 \\cdot 7 + 2$। কিন্তু $128 = 23 + 105$ ও কাজ করে, $233 = 23 + 2 \\cdot 105$ ও কাজ করে— আসলে অসীম সংখ্যক সমাধান আছে, যারা সবাই $23$-এর সাথে $105 = 3 \\times 5 \\times 7$-এর গুণিতক পার্থক্য রাখে। এই পুরো কাঠামোটিকে গুছিয়ে দেয় <strong>চীনা ভাগশেষ উপপাদ্য</strong> (Chinese Remainder Theorem, সংক্ষেপে CRT)।</p>

<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ উপপাদ্যের বিবৃতি</h3>
    <p class="font-medium">ধরা যাক $m_1, m_2, \\dots, m_k$ পরস্পর সহমৌলিক ধনাত্মক পূর্ণসংখ্যা (অর্থাৎ $i \\ne j$ হলে $\\gcd(m_i, m_j) = 1$), আর $a_1, a_2, \\dots, a_k$ যেকোনো পূর্ণসংখ্যা। তাহলে নিচের সঙ্গতি ব্যবস্থার</p>
    <p class="font-medium text-center">$$x \\equiv a_1 \\pmod{m_1}, \\quad x \\equiv a_2 \\pmod{m_2}, \\quad \\dots, \\quad x \\equiv a_k \\pmod{m_k}$$</p>
    <p class="font-medium">একটি সমাধান আছে, এবং $M = m_1 m_2 \\cdots m_k$ দিয়ে মডুলো করলে সেই সমাধান অনন্য: যেকোনো দুটি সমাধান $M$-এর গুণিতক পার্থক্য রাখে।</p>
</div>

<h3 class="font-semibold text-lg mb-4">প্রমাণ: একটি নির্মাণ যা সবসময় কাজ করে</h3>
<p>বিবৃতির দুটি অংশ আছে, আর প্রথম অংশের প্রমাণ আসলে উত্তরটিকে <em>নির্মাণ</em> করে দেখায়— এই উপপাদ্যের সবচেয়ে সুন্দর দিকটি এটাই।</p>
<p><strong>অস্তিত্ব।</strong> সংজ্ঞায়িত করো $M = m_1 m_2 \\cdots m_k$, আর প্রতিটি $i$-র জন্য $M_i = M / m_i$ ($m_i$ বাদে বাকি সব মডুলাসের গুণফল)। মডুলাসগুলো পরস্পর সহমৌলিক বলে $\\gcd(M_i, m_i) = 1$। আগে তৈরি করা রৈখিক সঙ্গতি তত্ত্ব অনুযায়ী</p>
$$M_i \\, y_i \\equiv 1 \\pmod{m_i}$$
<p>সঙ্গতিটির একটি সমাধান আছে $y_i$ (একে বলা হয় $M_i$-এর মডুলো $m_i$ বিপরীতাংশ)। এখন সম্ভাব্য উত্তরটি জোড়া দাও:</p>
$$x = a_1 M_1 y_1 + a_2 M_2 y_2 + \\dots + a_k M_k y_k$$
<p><strong>যাচাই।</strong> একটি সূচক $j$ স্থির করে সবকিছু মডুলো $m_j$ করো। $i \\ne j$ হলে $M_i = M / m_i$-এর উৎপাদকে $m_j$ থাকে, তাই $a_i M_i y_i \\equiv 0 \\pmod{m_j}$। বেঁচে থাকে শুধু $j$-তম পদের:</p>
$$x \\equiv a_j M_j y_j \\equiv a_j \\cdot 1 \\equiv a_j \\pmod{m_j}$$
<p>সুতরাং $x$ একই সাথে সবগুলো $k$টি সঙ্গতি মানে।</p>
<p><strong>অনন্যতা।</strong> ধরো $x$ ও $x'$ দুটোই কাজ করে। তাহলে প্রতিটি $j$-র জন্য $x - x' \\equiv 0 \\pmod{m_j}$, অর্থাৎ প্রতিটি $m_j$ ভাগ করে $x - x'$-কে। মডুলাসগুলো পরস্পর সহমৌলিক বলে তাদের গুণফল $M$ ও ভাগ করবে $x - x'$-কে। সুতরাং $x \\equiv x' \\pmod{M}$। ∎</p>

<h3 class="font-semibold text-lg mb-4">⧉ কাজের উদাহরণ: সান তজুর ধাঁধা সমাধান</h3>
<p>এখানে $k = 3$, $m_1 = 3$, $m_2 = 5$, $m_3 = 7$ আর $a_1 = 2$, $a_2 = 3$, $a_3 = 2$। আগে অংশগুলো হিসাব করি:</p>
<ul class="list-disc list-inside ml-5 mt-2 space-y-1 mb-4">
    <li>$M = 3 \\times 5 \\times 7 = 105$</li>
    <li>$M_1 = 35$, $M_2 = 21$, $M_3 = 15$</li>
    <li>$M_1$-এর মডুলো $3$ বিপরীতাংশ: $35 y_1 \\equiv 2 y_1 \\equiv 1 \\pmod{3}$, তাই $y_1 = 2$ (কারণ $2 \\times 2 = 4 \\equiv 1$)।</li>
    <li>$M_2$-এর মডুলো $5$ বিপরীতাংশ: $21 y_2 \\equiv 1 y_2 \\equiv 1 \\pmod{5}$, তাই $y_2 = 1$।</li>
    <li>$M_3$-এর মডুলো $7$ বিপরীতাংশ: $15 y_3 \\equiv 1 y_3 \\equiv 1 \\pmod{7}$, তাই $y_3 = 1$।</li>
</ul>
<p>এবার সবকিছু একসাথে জোড়া দাও:</p>
$$x = a_1 M_1 y_1 + a_2 M_2 y_2 + a_3 M_3 y_3 = 2 \\cdot 35 \\cdot 2 + 3 \\cdot 21 \\cdot 1 + 2 \\cdot 15 \\cdot 1$$
$$x = 140 + 63 + 30 = 233 \\equiv 23 \\pmod{105}$$
<p>সুতরাং ক্ষুদ্রতম ধনাত্মক উত্তর $x = 23$। যাচাই: $23 = 7 \\cdot 3 + 2$, $23 = 4 \\cdot 5 + 3$, $23 = 3 \\cdot 7 + 2$।</p>

<p class="mb-4">এই লেখায় আগে তৈরি করা Extended Euclidean Algorithm ব্যবহার করে সি ভাষায় CRT-এর একটি পূর্ণাঙ্গ ইমপ্লিমেন্টেশন:</p>
<div class="vscode-window my-6">
    <button class="vscode-copy" type="button" aria-label="Copy code">Copy</button>
    <div class="vscode-body">
        <div class="vscode-line"><span class="vscode-gutter">1</span><span class="vscode-code"><span class="text-amber-500">#include</span> <span class="text-emerald-400">&lt;stdio.h&gt;</span></span></div>
        <div class="vscode-line"><span class="vscode-gutter">2</span><span class="vscode-code"></span></div>
        <div class="vscode-line"><span class="vscode-gutter">3</span><span class="vscode-code"><span class="text-sky-400">long long</span> <span class="text-indigo-300">ext_gcd</span>(<span class="text-sky-400">long long</span> a, <span class="text-sky-400">long long</span> b, <span class="text-sky-400">long long</span> *x, <span class="text-sky-400">long long</span> *y) {</span></div>
        <div class="vscode-line"><span class="vscode-gutter">4</span><span class="vscode-code">    <span class="text-sky-400">if</span> (b == <span class="text-pink-400">0</span>) {</span></div>
        <div class="vscode-line"><span class="vscode-gutter">5</span><span class="vscode-code">        *x = <span class="text-pink-400">1</span>;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">6</span><span class="vscode-code">        *y = <span class="text-pink-400">0</span>;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">7</span><span class="vscode-code">        <span class="text-sky-400">return</span> a;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">8</span><span class="vscode-code">    }</span></div>
        <div class="vscode-line"><span class="vscode-gutter">9</span><span class="vscode-code">    <span class="text-sky-400">long long</span> x1, y1;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">10</span><span class="vscode-code">    <span class="text-sky-400">long long</span> g = <span class="text-indigo-300">ext_gcd</span>(b, a % b, &amp;x1, &amp;y1);</span></div>
        <div class="vscode-line"><span class="vscode-gutter">11</span><span class="vscode-code">    *x = y1;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">12</span><span class="vscode-code">    *y = x1 - (a / b) * y1;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">13</span><span class="vscode-code">    <span class="text-sky-400">return</span> g;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">14</span><span class="vscode-code">}</span></div>
        <div class="vscode-line"><span class="vscode-gutter">15</span><span class="vscode-code"></span></div>
        <div class="vscode-line"><span class="vscode-gutter">16</span><span class="vscode-code"><span class="text-sky-400">long long</span> <span class="text-indigo-300">crt</span>(<span class="text-sky-400">long long</span> a[], <span class="text-sky-400">long long</span> m[], <span class="text-sky-400">int</span> k) {</span></div>
        <div class="vscode-line"><span class="vscode-gutter">17</span><span class="vscode-code">    <span class="text-sky-400">long long</span> M = <span class="text-pink-400">1</span>;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">18</span><span class="vscode-code">    <span class="text-sky-400">for</span> (<span class="text-sky-400">int</span> i = <span class="text-pink-400">0</span>; i < k; i++) M *= m[i];</span></div>
        <div class="vscode-line"><span class="vscode-gutter">19</span><span class="vscode-code">    <span class="text-sky-400">long long</span> x = <span class="text-pink-400">0</span>;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">20</span><span class="vscode-code">    <span class="text-sky-400">for</span> (<span class="text-sky-400">int</span> i = <span class="text-pink-400">0</span>; i < k; i++) {</span></div>
        <div class="vscode-line"><span class="vscode-gutter">21</span><span class="vscode-code">        <span class="text-sky-400">long long</span> Mi = M / m[i];</span></div>
        <div class="vscode-line"><span class="vscode-gutter">22</span><span class="vscode-code">        <span class="text-sky-400">long long</span> y, t;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">23</span><span class="vscode-code">        <span class="text-indigo-300">ext_gcd</span>(Mi, m[i], &amp;y, &amp;t);</span></div>
        <div class="vscode-line"><span class="vscode-gutter">24</span><span class="vscode-code">        x = (x + (a[i] % M) * Mi % M * ((y % M + M) % M)) % M;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">25</span><span class="vscode-code">    }</span></div>
        <div class="vscode-line"><span class="vscode-gutter">26</span><span class="vscode-code">    <span class="text-sky-400">return</span> (x % M + M) % M;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">27</span><span class="vscode-code">}</span></div>
        <div class="vscode-line"><span class="vscode-gutter">28</span><span class="vscode-code"></span></div>
        <div class="vscode-line"><span class="vscode-gutter">29</span><span class="vscode-code"><span class="text-sky-400">int</span> <span class="text-indigo-300">main</span>(<span class="text-sky-400">void</span>) {</span></div>
        <div class="vscode-line"><span class="vscode-gutter">30</span><span class="vscode-code">    <span class="text-sky-400">long long</span> a[] = {<span class="text-pink-400">2</span>, <span class="text-pink-400">3</span>, <span class="text-pink-400">2</span>};</span></div>
        <div class="vscode-line"><span class="vscode-gutter">31</span><span class="vscode-code">    <span class="text-sky-400">long long</span> m[] = {<span class="text-pink-400">3</span>, <span class="text-pink-400">5</span>, <span class="text-pink-400">7</span>};</span></div>
        <div class="vscode-line"><span class="vscode-gutter">32</span><span class="vscode-code">    <span class="text-indigo-300">printf</span>(<span class="text-emerald-400">"Answer: %lld\\n"</span>, <span class="text-indigo-300">crt</span>(a, m, <span class="text-pink-400">3</span>));</span></div>
        <div class="vscode-line"><span class="vscode-gutter">33</span><span class="vscode-code">    <span class="text-sky-400">return</span> <span class="text-pink-400">0</span>;</span></div>
        <div class="vscode-line"><span class="vscode-gutter">34</span><span class="vscode-code">}</span></div>
    </div>
</div>

<h3 class="font-semibold text-lg mb-4">মডুলাসগুলো সহমৌলিক না হলে?</h3>
<p>উপরে দেওয়া পরিচ্ছন্ন রূপে CRT-তে পরস্পর সহমৌলিক মডুলাস চাই। মডুলাসগুলোতে সাধারণ গুণনীয়ক থাকলে সমাধান থাকতেও পারে, নাও পারে: সমাধান থাকবে ঠিক তখনই, যখন প্রতিটি জোড়া $i, j$-র জন্য সামঞ্জস্য শর্ত $\\gcd(m_i, m_j) \\mid (a_i - a_j)$ পূরণ হয়। বাস্তবে মডুলাসগুলোকে সহমৌলিক অংশে ভাগ করে প্রতিটি অংশ আলাদাভাবে সমাধান করে মিলিয়ে নেওয়া যায়— তাই পরস্পর সহমৌলিক ক্ষেত্রটিই সবচেয়ে গুরুত্বপূর্ণ।</p>

<h1 class="text-2xl font-bold mb-4">⧉ অয়লারের টোটিয়েন্ট ফাংশন (Euler's Totient Function)</h1>
<p>ফার্মার ক্ষুদ্র উপপাদ্য শুধু মৌলিক মডুলাসের জন্য কাজ করত। সেই শক্তিকে যৌগিক সংখ্যায় ছড়িয়ে দিতে মহান গণিতবিদ <strong>লিওনার্দ অয়লার (Leonhard Euler)</strong> একটি গণনা-ফাংশন উদ্ভাবন করেন যা আজ তাঁর নামে পরিচিত।</p>
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ সংজ্ঞা</h3>
    <p class="font-medium">$n \\ge 1$ হলে, অয়লারের টোটিয়েন্ট ফাংশন $\\varphi(n)$-এর মান হলো $\\{1, 2, \\dots, n\\}$ সেটের $n$-এর সাথে সহমৌলিক (coprime) সেই সব পূর্ণসংখ্যার সংখ্যা।</p>
</div>
<p>কয়েকটি সহজ মান: $\\varphi(1) = 1$, $\\varphi(2) = 1$ (শুধু $1$), $\\varphi(3) = 2$ (সংখ্যা $1, 2$), $\\varphi(4) = 2$ (সংখ্যা $1, 3$), আর $\\varphi(12) = 4$ (সংখ্যা $1, 5, 7, 11$)।</p>
<p>যখন $n = p$ মৌলিক, তখন $1$ থেকে $p - 1$ পর্যন্ত প্রতিটি সংখ্যাই $p$-এর সহমৌলিক, তাই $\\varphi(p) = p - 1$। এই একটি পর্যবেক্ষণই পরে অয়লারের উপপাদ্যকে ফার্মার ক্ষুদ্র উপপাদ্যে রূপান্তরিত করবে।</p>

<h3 class="font-semibold text-lg mb-4">সূত্রটি</h3>
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <p class="font-medium mb-2">$n$-এর ভিন্ন ভিন্ন মৌলিক ভাজকগুলো যদি $p_1, p_2, \\dots, p_k$ হয়, তাহলে</p>
    $$\\varphi(n) = n \\prod_{i=1}^{k} \\left(1 - \\frac{1}{p_i}\\right)$$
</div>
<p>উদাহরণ:</p>
<ul class="list-disc list-inside ml-5 mt-2 space-y-1 mb-4">
    <li>$\\varphi(12)$: $12$-কে ভাগ করা মৌলিক সংখ্যা $2$ ও $3$, তাই $\\varphi(12) = 12 \\cdot \\left(1 - \\frac{1}{2}\\right) \\cdot \\left(1 - \\frac{1}{3}\\right) = 12 \\cdot \\frac{1}{2} \\cdot \\frac{2}{3} = 4$।</li>
    <li>$\\varphi(360)$: যেহেতু $360 = 2^3 \\cdot 3^2 \\cdot 5$, তাই $\\varphi(360) = 360 \\cdot \\frac{1}{2} \\cdot \\frac{2}{3} \\cdot \\frac{4}{5} = 96$।</li>
</ul>

<h3 class="font-semibold text-lg mb-4">কেন সূত্রটি সত্য (প্রমাণ)</h3>
<p>মৌলিক উৎপাদক লেখো $n = p_1^{e_1} p_2^{e_2} \\cdots p_k^{e_k}$। $\\{1, 2, \\dots, n\\}$-এর কোনো সংখ্যা $m$ $n$-এর সহমৌলিক হবে, যদি এবং কেবল যদি সে $p_1, \\dots, p_k$-এর কোনোটির দ্বারাও বিভাজ্য না হয়। চলো সেই সীমার মধ্যে কতগুলো সংখ্যা তাদের <em>কোনোটির দ্বারাই</em> বিভাজ্য নয়, তা গুনি।</p>
<ul class="list-disc list-inside ml-5 mt-2 space-y-1 mb-4">
    <li>$p_i$ দিয়ে বিভাজ্য সংখ্যা: ঠিক $\\frac{n}{p_i}$ টি।</li>
    <li>$p_i$ ও $p_j$ দুইটির দ্বারাই বিভাজ্য সংখ্যা: ঠিক $\\frac{n}{p_i p_j}$ টি।</li>
    <li>তিনটি $p_i, p_j, p_l$-এর প্রতিটি দিয়ে বিভাজ্য সংখ্যা: ঠিক $\\frac{n}{p_i p_j p_l}$ টি, ইত্যাদি।</li>
</ul>
<p>এবার অন্তর্ভুক্তি-বর্জন (inclusion–exclusion) নীতি ব্যবহার করো: সব $n$ সংখ্যা দিয়ে শুরু করে একটি মৌলিক দিয়ে বিভাজ্য গুলো বাদ দাও, জোড়া দিয়ে বিভাজ্য গুলো আবার যোগ করো, ত্রিপল দিয়ে বিভাজ্য গুলো বাদ দাও, এভাবে চলতে থাকো। ফলাফল হলো এই বিকল্প যোগফল</p>
$$\\varphi(n) = n - \\sum_{i} \\frac{n}{p_i} + \\sum_{i < j} \\frac{n}{p_i p_j} - \\sum_{i < j < l} \\frac{n}{p_i p_j p_l} + \\cdots$$
<p>কিন্তু এই বিকল্প রাশিটা আসলে একটি গুণফলের সম্প্রসারণ ছাড়া আর কিছু নয়। বীজগণিতের অভেদ $(1 - a_1)(1 - a_2) \\cdots (1 - a_k) = 1 - \\sum a_i + \\sum_{i<j} a_i a_j - \\cdots$-তে $a_i = 1/p_i$ বসালে পাওয়া যায়</p>
$$\\varphi(n) = n \\left(1 - \\frac{1}{p_1}\\right)\\left(1 - \\frac{1}{p_2}\\right) \\cdots \\left(1 - \\frac{1}{p_k}\\right) = n \\prod_{i=1}^{k} \\left(1 - \\frac{1}{p_i}\\right)$$
<p>এটিই দাবি করা সূত্র। ∎</p>

<h3 class="font-semibold text-lg mb-4">গুণনীয় বৈশিষ্ট্য (Multiplicativity)</h3>
<p>যদি $\\gcd(m, n) = 1$ হয়, তাহলে $\\varphi(mn) = \\varphi(m) \\cdot \\varphi(n)$। গুণফল-সূত্র থেকে এটি দ্রুত আসে, কারণ সহমৌলিক $m$ ও $n$-এর মৌলিক ভাজকগুলোর সেট আলাদা, তাই গুণফলগুলো সহজে গুণ হয়ে যায়। যেমন $\\varphi(105) = \\varphi(3 \\cdot 5 \\cdot 7) = \\varphi(3) \\varphi(5) \\varphi(7) = 2 \\cdot 4 \\cdot 6 = 48$, আর সত্যিই $105 \\cdot \\frac{2}{3} \\cdot \\frac{4}{5} \\cdot \\frac{6}{7} = 48$।</p>

<h1 class="text-2xl font-bold mb-4">⧉ অয়লারের উপপাদ্য (Euler's Theorem)</h1>
<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ বিবৃতি</h3>
    <p class="font-medium">যদি $\\gcd(a, n) = 1$ এবং $n \\ge 1$, তাহলে</p>
    <p class="font-medium text-center">$$a^{\\varphi(n)} \\equiv 1 \\pmod{n}$$</p>
</div>
<p>দেখো $n = p$ মৌলিক হলে কী হয়: $\\varphi(p) = p - 1$, আর অয়লারের উপপাদ্যটিও হয়ে যায় ঠিক ফার্মার ক্ষুদ্র উপপাদ্য। অর্থাৎ ফার্মারটা অয়লারের একটা বিশেষ ক্ষেত্র মাত্র— টোটিয়েন্ট ফাংশন ফার্মারের ফলাফলকে মৌলিক থেকে প্রতিটি মডুলাসে তুলে নিয়েছে। এই উপপাদ্যই RSA ও আধুনিক ক্রিপ্টোগ্রাফিকে সম্ভব করেছে।</p>

<h3 class="font-semibold text-lg mb-4">প্রমাণ</h3>
<p>$1$ থেকে $n$ পর্যন্ত $n$-এর সহমৌলিক সংখ্যাগুলো ধরা যাক $r_1, r_2, \\dots, r_{\\varphi(n)}$; এরা একসাথে গঠন করে <em>সংক্ষিপ্ত ভাগশেষ পদ্ধতি</em> (reduced residue system) মডুলো $n$। এখন $\\gcd(a, n) = 1$ এমন একটি $a$ দিয়ে প্রত্যেককে গুণ করো।</p>
<ol class="list-decimal-bangla space-y-3 mb-8 pl-6">
    <li>প্রতিটি গুণফল $a r_i$ আবারও $n$-এর সহমৌলিক, কারণ $a r_i$ ও $n$-এর কোনো সাধারণ ভাজক হলে সেটি $a r_i$-র কোনো উৎপাদককেও ভাগ করত; কিন্তু $a$ বা $r_i$-র কারও সঙ্গেই $n$-এর সাধারণ উৎপাদক নেই।</li>
    <li>কোনো দুটি গুণফল পরস্পর সমগুণিতক নয়: $a r_i \\equiv a r_j \\pmod{n}$ হলে $n \\mid a (r_i - r_j)$; যেহেতু $\\gcd(a, n) = 1$, $a$ বাতিল করে পাই $n \\mid (r_i - r_j)$, যা বাধ্য করে $r_i = r_j$, অর্থাৎ $i = j$।</li>
</ol>
<p>এই দুইটি সত্য একসাথে বলে— $a$ দিয়ে গুণ করলে সংখ্যাগুলো শুধু <em>পুনর্বিন্যস্ত</em> হয়: $a r_1, \\dots, a r_{\\varphi(n)}$ তালিকাটি $r_1, \\dots, r_{\\varphi(n)}$-এরই তালিকা, শুধু ক্রম ভিন্ন হতে পারে। তাই দুই তালিকার সব সংখ্যার গুণফল সমান মডুলো $n$:</p>
$$(a r_1)(a r_2) \\cdots (a r_{\\varphi(n)}) \\equiv r_1 r_2 \\cdots r_{\\varphi(n)} \\pmod{n}$$
$$a^{\\varphi(n)} \\cdot P \\equiv P \\pmod{n}$$
<p>যেখানে $P = r_1 r_2 \\cdots r_{\\varphi(n)}$</p>
<p>প্রতিটি $r_i$ যেহেতু $n$-এর সহমৌলিক, তাদের গুণফল $P$-ও $n$-এর সহমৌলিক; তাই মডুলার অ্যারিথমেটিকের বাতিল নিয়মে দুই পাশ থেকে $P$ বাদ দেওয়া যায়। যা বাকি থাকে:</p>
$$a^{\\varphi(n)} \\equiv 1 \\pmod{n}$$
<p>∎</p>

<div class="bg-gray-100 p-6 rounded-xl my-6">
    <h3 class="font-semibold text-lg mb-4">⧉ উদাহরণ</h3>
    <p>আগেই দেখেছি $\\varphi(12) = 4$ আর $\\gcd(5, 12) = 1$, তাই অয়লারের উপপাদ্য বলে $5^4 \\equiv 1 \\pmod{12}$। সত্যিই $5^4 = 625 = 52 \\cdot 12 + 1$।</p>
</div>

<h3 class="font-semibold text-lg mb-4">কীভাবে এটা RSA-কে শক্তি দেয়</h3>
<p>এখানে জাদুটির মোটামুটি সংক্ষিপ্ত বিবরণ। দুটি বড় মৌলিক সংখ্যা $p$ ও $q$ বাছাই করে $n = p \\cdot q$ ধরো। তাহলে $\\varphi(n) = (p - 1)(q - 1)$। $\\varphi(n)$-এর সহমৌলিক এমন একটি $e$ বাছো এবং এমন $d$ বের করো যেন $e d \\equiv 1 \\pmod{\\varphi(n)}$ হয়। কোনো বার্তা $a$ সংখ্যা হলে $e$ ঘাতে তোলা মানে মডুলো $n$ এনক্রিপশন — আর যেহেতু $e d = 1 + t \\cdot \\varphi(n)$ (কোনো পূর্ণসংখ্যা $t$-এর জন্য), মূল গাণিতিক বৈশিষ্ট্যটি হলো</p>
$$(a^e)^d = a^{e d} = a^{1 + t \\varphi(n)} = a \\cdot \\left(a^{\\varphi(n)}\\right)^t \\equiv a \\cdot 1^t \\equiv a \\pmod{n}$$
<p>সুতরাং $d$ ঘাতে তোলা মডুলো $n$ এনক্রিপশনকে পুরোপুরি পূর্বাবস্থায় ফেরায়— আর শুধু $d$-এর মালিকই সেটি পারবে। অয়লারের উপপাদ্যই ইন্টারনেটে নিরাপদ যোগাযোগের গাণিতিক তালা (ও চাবি)।</p>

<h1 class="text-2xl font-bold mb-4">⧉ উপসংহার (Conclusion)</h1>
<p>সংখ্যাতত্ত্ব শুধু মুখস্থ করার বিষয় নয়, এটি যুক্তি চর্চার একটি দুর্দান্ত প্রশিক্ষণক্ষেত্র। মৌলিক সংখ্যার অসীমতা থেকে শুরু করে সিভ অফ ইরাটোস্থেনিস, চীনা ভাগশেষ উপপাদ্য থেকে অয়লারের উপপাদ্য পর্যন্ত— প্রতিটি ধাপই দেখায় কীভাবে সহজ ছোটো ধারণার ওপর দাঁড়িয়ে বিশাল গাণিতিক ভবন নির্মিত হয়।</p>
<p>এই লেখায় আমরা যে উপপাদ্যগুলোর সঙ্গে পরিচিত হলাম— বেজুটের অভেদ, চীনা ভাগশেষ উপপাদ্য, অয়লারের টোটিয়েন্ট ফাংশন আর অয়লারের উপপাদ্য— এগুলো জাদুঘরের শোভা বর্ধনকারী নয়; ক্রিপ্টোগ্রাফি থেকে সংখ্যাতত্ত্বের অ্যালগরিদম পর্যন্ত এরা বাস্তব কম্পিউটার সিস্টেমের কাজের ইঞ্জিন।</p>
<p>আরও একটি বিষয় সবসময় মনে রাখবে— খেলাধুলার মতোই বিভাজ্যতা, মডুলার অ্যারিথমেটিক ও মৌলিক সংখ্যা নিয়ে যত বেশি হাতেকলমে অনুশীলন করবে, গণিত অলিম্পিয়াডের সমস্যাগুলো তত সহজ লাগবে। বারবার সমস্যা সমাধান করাই এই শাখায় দক্ষ হওয়ার একমাত্র পথ।</p>`




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
       en: "Jun 28, 2026",
       bn: "২৮ জুন, ২০২৬"
   },
   readTime: {
       en: "18 min read",
       bn: "১৮ মিনিট পাঠ"
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
               <p class="font-semibold mb-2">১. যোগ নীতি (Addition Principle)</p>
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

            <div class="bg-gray-100 p-6 rounded-xl my-6">
                <p class="font-semibold mb-2">৬. সমাবেশ (Combination)</p>
                <p>আমাদের গল্পের শুরুতে ফিরে যাই। প্রথম সমস্যাটি ছিল—১০ জন ছাত্র থেকে ৩ জনকে বাছাই করে "বিজয়ী দল" কতভাবে গঠন করা যায়, আর তোমার হিসাব মতে সেটি ১২০। কিন্তু দ্বিতীয় সমস্যাটি ছিল—ঐ ৩ জনকে প্রথম, দ্বিতীয় ও তৃতীয় ক্রমে সাজালে কতভাবে সাজানো যায়, আর সেটি ৭২০।</p>
                <p>মূল পার্থক্যটা কোথায়? প্রথম ক্ষেত্রে আমরা শুধু <b>নির্বাচন</b> করেছি—<b>ক্রম গুরুত্বপূর্ণ ছিল না</b>। দ্বিতীয় ক্ষেত্রে <b>ক্রম গুরুত্বপূর্ণ ছিল</b>। বিন্যাসে (Permutation) ক্রম গুরুত্বপূর্ণ, তাই $P(n, r) = \\frac{n!}{(n - r)!}$। কিন্তু যখন ক্রম গুরুত্বপূর্ণ নয়, শুধু নির্বাচনই আসল, তখন সেটাকে বলা হয় সমাবেশ (Combination):</p>
                <p>$$C(n, r) = \\frac{n!}{r!(n - r)!}$$ — $n$ টি জিনিস থেকে $r$ টি জিনিস বাছাই করার সংখ্যা (ক্রম ছাড়া)।</p>
                <p>এবার ধরো, ১০ জন থেকে ৩ জন বাছাই:<br>
                $$C(10, 3) = \\frac{10!}{3! \\times (10 - 3)!} = \\frac{10!}{3! \\times 7!} = \\frac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1} = 120$$</p>
                <p>ঠিক তোমার হাতে-গোনা ১২০! আর বিন্যাস ছিল $P(10, 3) = \\frac{10!}{7!} = 10 \\times 9 \\times 8 = 720$। লক্ষ করো, $C(10, 3) = \\frac{P(10, 3)}{3!}$। কারণ নির্বাচিত ৩ জনকে নিজেদের মধ্যে $3! = 6$ উপায়ে সাজানো যায়, আর নির্বাচনে সেই ক্রম বাদ দিতে $3!$ দিয়ে ভাগ করে দেওয়াই হয়।</p>
            </div>


            <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">গভীরতর টুলবক্স</h2>
            <p class="mb-6">উপরে শেখা দুই নীতি—সংযোজন নীতি (Addition Principle) আর গুণন নীতি (Multiplication Principle)—হলো গণনার যমজ ইঞ্জিন, আর তাদেরই উপরে দাঁড়িয়ে আছে ফ্যাক্টোরিয়াল, বিন্যাস ও সমাবেশের সূত্রগুলো। এই অংশে আমরা টুলবক্স থেকে আরও সাতটি হাতিয়ার বের করবো। প্রতিটির পেছনেই থাকবে পূর্ণাঙ্গ যুক্তি (derivation)—কারণ যে সূত্র ঘুরেফিরে নিজে নিজে তৈরি করে ফেলা যায়, সেই সূত্র কোথাও ব্যবহার করতেই ভয় নেই।</p>

            <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">প্যাসকেলের অভেদ ও প্যাসকেলের ত্রিভুজ</h2>
            <p class="mb-6">ছোট্ট একটি সারণি দেখো। নিচের প্রতিটি সারিতে $C(n, 0), C(n, 1), \\dots, C(n, n)$ এর মান রাখা হয়েছে $n = 0, 1, 2, \\dots$ এর জন্য।</p>
            <div class="bg-gray-100 p-6 rounded-xl my-6">
                <p class="font-mono text-sm">n = 0:&nbsp;&nbsp;1<br>
n = 1:&nbsp;&nbsp;1&nbsp;&nbsp;1<br>
n = 2:&nbsp;&nbsp;1&nbsp;&nbsp;2&nbsp;&nbsp;1<br>
n = 3:&nbsp;&nbsp;1&nbsp;&nbsp;3&nbsp;&nbsp;3&nbsp;&nbsp;1<br>
n = 4:&nbsp;&nbsp;1&nbsp;&nbsp;4&nbsp;&nbsp;6&nbsp;&nbsp;4&nbsp;&nbsp;1</p>
            </div>
            <p class="mb-6">খেয়াল করো, ভেতরের প্রতিটি সংখ্যা তার ঠিক উপরের দুটি সংখ্যার যোগফল। এটি নিছক কাকতালীয় নয়, এটি একটি উপপাদ্য:</p>
            <div class="bg-gray-100 p-6 rounded-xl my-6">
                <p class="font-semibold mb-2">প্যাসকেলের অভেদ</p>
                <p>$$C(n, k) = C(n - 1, k - 1) + C(n - 1, k)$$</p>
            </div>
            <div class="bg-amber-50 border border-amber-200 p-6 rounded-xl my-8">
                <h3 class="font-semibold text-lg mb-4">প্রমাণ (সমাবেশগত)</h3>
                <p class="mb-4">$n$ টি বস্তুর মধ্যে একটি নির্দিষ্ট বস্তুকে $O$ ধরা যাক। $k$ সদস্যের উপসেটগুলোকে দুইটি বিচ্ছিন্ন দলে ভাগ করে তাদের সংখ্যা গুনি।</p>
                <ul class="list-disc pl-6 space-y-3 mb-4">
                    <li><strong>যে উপসেটগুলোতে $O$ আছে:</strong> বাকি $k - 1$ জনকে বাকি $n - 1$ টি বস্তু থেকে বাছতে হবে, ফলে $C(n - 1, k - 1)$ টি উপসেট।</li>
                    <li><strong>যে উপসেটগুলোতে $O$ নেই:</strong> সব $k$ জনকেই বাকি $n - 1$ টি বস্তু থেকে বাছতে হবে, ফলে $C(n - 1, k)$ টি উপসেট।</li>
                </ul>
                <p>প্রতিটি $k$ সদস্যের উপসেট ঠিক একটি দলের অন্তর্ভুক্ত, তাই দুই দলের গণনা যোগ হয়ে মোটটা দাঁড়ায়: $C(n, k) = C(n - 1, k - 1) + C(n - 1, k)$। এ কারণেই ত্রিভুজটা এভাবে বাড়তে থাকে। (প্রমাণিত)</p>
            </div>
            <p class="mb-6">এই অভেদের সাহায্যে প্যাসকেলের ত্রিভুজের যেকোনো ঘর শুধু যোগ করেই বের করা যায়—প্রান্তের $1$ গুলো থেকে শুরু করে। ফ্যাক্টোরিয়ালের সূত্রও সবসময় একই ফল দেয়। যেমন $C(10, 4) = \\frac{10!}{4!\\,6!} = 210$, আর ত্রিভুজ ধরে ধরে যোগ করতে করতেও শেষে হুবহু $210$ এসে দাঁড়ায়।</p>

            <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">দ্বিপদী উপপাদ্য (Binomial Theorem)</h2>
            <p class="mb-6">$(x + y)^n$ কে পুরোপুরি বিস্তার করে একই ঘাতের পদগুলো মিলালে কী পাওয়া যায়? প্রথমে সবচেয়ে ছোট ঘাতগুলো দিয়ে পরীক্ষা করে দেখি।</p>
            <div class="bg-gray-100 p-6 rounded-xl my-6">
                <p>$$(x + y)^2 = x^2 + 2xy + y^2$$</p>
                <p>$$(x + y)^3 = x^3 + 3x^2 y + 3x y^2 + y^3$$</p>
            </div>
            <p class="mb-6">সহগগুলো $1, 2, 1$ আর $1, 3, 3, 1$—ঠিক প্যাসকেলের ত্রিভুজের একই সারি! এই নিদর্শনটিই বিখ্যাত <strong>দ্বিপদী উপপাদ্য</strong>:</p>
            <div class="bg-gray-100 p-6 rounded-xl my-6">
                <p class="font-semibold mb-2">দ্বিপদী উপপাদ্য</p>
                <p>$$(x + y)^n = \\sum_{k=0}^{n} C(n, k)\\, x^{n-k} y^k$$</p>
            </div>
            <div class="bg-amber-50 border border-amber-200 p-6 rounded-xl my-8">
                <h3 class="font-semibold text-lg mb-4">প্রমাণ (পদ গণনা করে)</h3>
                <p class="mb-4">$(x + y)^n$ বিস্তার মানে হলো সেটিকে $(x + y)(x + y) \\cdots (x + y)$ আকারে $n$ টি বন্ধনী লিখে প্রতিটি বন্ধনী থেকে ঠিক একটি উৎপাদক—সেটির $x$ না হয় $y$—বেছে নিয়ে গুণ করা। $x^{n-k} y^k$ আকারের একটি পদ তখনই পাওয়া যায়, যখন ঠিক $k$ টি বন্ধনী থেকে $y$ বাছা হয়।</p>
                <p class="mb-4">ওই $k$ টি বন্ধনী কতভাবে বাছা যায়? সেটা হলো $n$ টি বন্ধনী থেকে $k$ সদস্যের উপসেট বাছাই, অর্থাৎ $C(n, k)$। যেহেতু ভিন্ন $k$ ভিন্ন ঘাতের পদ তৈরি করে, তাই দলগুলোর মধ্যে ছেদ নেই এবং সেগুলো বিনা বাধায় যোগ হয়ে যায়। অতএব $(x + y)^n = \\sum_{k=0}^{n} C(n, k)\\, x^{n-k} y^k$। (প্রমাণিত)</p>
            </div>
            <p class="mb-6"><strong>উদাহরণ।</strong> $(a + b)^4 = a^4 + 4a^3 b + 6a^2 b^2 + 4a b^3 + b^4$। প্যাসকেলের সারি $1, 4, 6, 4, 1$ এর সাথে মিলিয়ে দেখো।</p>
            <p class="mb-6">উপপাদ্যটি সঙ্গে সঙ্গে ফল দেয়। $x = y = 1$ বসালে পাওয়া যায় $\\sum_{k=0}^{n} C(n,k) = 2^n$: অর্থাৎ $n$ উপাদানের একটি সেটের ঠিক $2^n$ টি উপসেট আছে। আর $x = 1, y = -1$ বসালে পাওয়া যায় $0 = \\sum_{k=0}^{n} (-1)^k C(n, k)$, অর্থাৎ জোড় আকারের ও বিজোড় আকারের উপসেট সংখ্যা সমান।</p>

            <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">পুনরাবৃত্তিসহ বিন্যাস</h2>
            <p class="mb-6">এ পর্যন্ত আমরা যত সাজানো করেছি, প্রতিটি বস্তুই ছিল আলাদা। কিন্তু বাস্তব সমস্যায় অভিন্ন বস্তুও জুটে যায়—MISSISSIPPI শব্দের অক্ষরগুলোর কথা ভাবো, কিংবা বাক্সে রাখা অভিন্ন বলের কথা। অভিন্ন বস্তু পরস্পরের সাথে অদলবদল করলে সাজানোটা বদলায় না, তাই সেই অতিগণনা (overcounting) বাদ দিতে হবে।</p>
            <p class="mb-6">ধরো, $n$ টি বস্তু সাজাতে হবে, যেখানে $n_1$ টি প্রথম প্রকারের অভিন্ন অনুলিপি, $n_2$ টি দ্বিতীয় প্রকারের অভিন্ন অনুলিপি, ... এবং $n_k$ টি $k$তম প্রকারের অভিন্ন অনুলিপি, যেখানে $n_1 + n_2 + \\cdots + n_k = n$। বস্তুগুলো যদি সব আলাদা হতো, সাজানোর উপায় হতো $n!$। কিন্তু $n_1$ টি অভিন্ন বস্তু নিজেদের মধ্যে $n_1!$ উপায়ে ঘুরিয়ে দিলেও সাজানো একই থাকে, তাই প্রতিটি ফ্যাক্টোরিয়াল দিয়ে ভাগ করতে হয়:</p>
            <div class="bg-gray-100 p-6 rounded-xl my-6">
                <p class="font-semibold mb-2">সূত্র (পুনরাবৃত্তিসহ বিন্যাস)</p>
                <p>$$\\frac{n!}{n_1!\\, n_2! \\cdots n_k!}$$</p>
            </div>
            <p class="mb-6"><strong>উদাহরণ।</strong> MISSISSIPPI শব্দের অক্ষরগুলো কতভাবে পুনর্বিন্যাস করা যায়? শব্দটিতে $11$ টি অক্ষর: $M$ একবার, $I$ চারবার, $S$ চারবার এবং $P$ দুইবার। উত্তর হলো</p>
            <p>$$\\frac{11!}{1!\\, 4!\\, 4!\\, 2!} = \\frac{39916800}{1152} = 34650.$$</p>

            <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">বৃত্তীয় বিন্যাস (Circular Permutation)</h2>
            <p class="mb-6">এতক্ষণ আমরা বস্তুগুলো সারিবদ্ধভাবে সাজিয়েছি, যেখানে প্রথম আসন আর শেষ আসন পরিষ্কার ভিন্ন। কিন্তু বৃত্তাকার টেবিলে কোনো "প্রথম" আসন নেই: শুধু লোকদের পাশাপাশি বসার বৃত্তাকার ক্রমটাই আসল। আর সবাইকে এক ঘর ঘড়ির কাঁটার দিকে ঘুরিয়ে দিলে যে সাজানো পাওয়া যায়, তাকে আমরা একই সাজানো ধরি।</p>
            <div class="bg-gray-100 p-6 rounded-xl my-6">
                <p class="font-semibold mb-2">সূত্র (বৃত্তীয় বিন্যাস)</p>
                <p>$$(n - 1)!$$</p>
            </div>
            <div class="bg-amber-50 border border-amber-200 p-6 rounded-xl my-8">
                <h3 class="font-semibold text-lg mb-4">যুক্তি</h3>
                <p class="mb-4">সারিবদ্ধ সাজানোতে $n!$ উপায়ই সত্যি ভিন্ন। কিন্তু বৃত্তে ঘূর্ণন প্রতিসাম্য আছে: সবাইকে এক ঘর ঘড়ির কাঁটার দিকে (কিংবা দুই ঘর, তিন ঘর, $\\dots$) সরালে আপেক্ষিক ক্রম অপরিবর্তিত থাকে। তাই $n!$ টি সারিবদ্ধ সাজানো, প্রতিটিতে $n$ টি ঘূর্ণন করে, একই বৃত্তীয় সাজানোর দলে জমা হয়। ঘূর্ণন দিয়ে ভাগ করলেই আসল সংখ্যা পাওয়া যায়:</p>
                <p>$$\\frac{n!}{n} = (n - 1)!.$$</p>
                <p class="mt-4">অন্যভাবে ভাবো: প্রথমে একজনকে তার আসনে বসিয়ে দাও—এতে প্রতিসাম্য ভেঙে যায়। বাকি $n - 1$ জনকে অবশিষ্ট $n - 1$ টি আসনে সাজানো যায় $(n - 1)!$ উপায়ে। (প্রমাণিত)</p>
            </div>
            <p class="mb-6"><strong>উদাহরণ।</strong> বৃত্তাকার ডিনার টেবিলে ছয় বন্ধু: $(6 - 1)! = 5! = 120$ টি সাজানো। কিন্তু যদি বস্তুগুলো পুঁতির মালার মতো হয়, যেখানে মালাটি উল্টে দিলেও (আয়নার প্রতিসাম্য) একই সাজানো হয়, তবে সংখ্যাটি আবার অর্ধেক হয়ে $5!/2 = 60$ হয়।</p>

            <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">তারা ও দণ্ড (Stars and Bars)</h2>
            <p class="mb-6">সংখ্যাতত্ত্বে ঘুরেফিরে একটি প্রশ্ন আসে: একটি অঋণাত্মক পূর্ণসংখ্যা $n$ কে $k$ টি অঋণাত্মক পূর্ণসংখ্যার ক্রমিক সমষ্টি হিসেবে কতভাবে লেখা যায়? অর্থাৎ $(x_1, x_2, \\dots, x_k)$ এর কতগুলো অঋণাত্মক পূর্ণসাংখ্যিক সমাধান আছে সেই সমীকরণটিতে:</p>
            <p>$$x_1 + x_2 + \\cdots + x_k = n?$$</p>
            <div class="bg-gray-100 p-6 rounded-xl my-6">
                <p class="font-semibold mb-2">তারা ও দণ্ডের সূত্র</p>
                <p>$$\\text{number of nonnegative solutions } = C(n + k - 1, k - 1)$$</p>
            </div>
            <div class="bg-amber-50 border border-amber-200 p-6 rounded-xl my-8">
                <h3 class="font-semibold text-lg mb-4">প্রমাণ (দৃষ্টিসম্বন্ধীয় কৌশল)</h3>
                <p class="mb-4">একটি সমাধানকে এভাবে আঁকো: $n$ টি অভিন্ন তারা সারিবদ্ধ লিখো, তারপর সেগুলোকে $k$ টি দলে ভাগ করতে $k - 1$ টি উল্লম্ব দণ্ড (ঝুঁকি) বসাও। প্রথম দণ্ডের আগে যতগুলো তারা, সেটাই $x_1$; প্রথম ও দ্বিতীয় দণ্ডের মাঝে যতগুলো, সেটাই $x_2$; ... আর শেষ দণ্ডের পরে যেগুলো থাকে, সেগুলো $x_k$। দণ্ডগুলোকে পাশাপাশিও বসানো যায়, ফলে শূন্য দলও বৈধ।</p>
                <p class="mb-4">উদাহরণস্বরূপ, $n = 6$ এবং $k = 4$ হলে সমাধান $(2, 0, 3, 1)$ কে আঁকা যায়:</p>
                <p>$$\\star \\star \\;\\; | \\;\\; | \\;\\; \\star \\star \\star \\;\\; | \\;\\; \\star$$</p>
                <p class="mt-4">$n$ টি তারার ও $k - 1$ টি দণ্ডের প্রতিটি বিন্যাস ঠিক একটি সমাধানের সাথে মেলে, আর প্রতিটি সমাধান ঠিক একটি বিন্যাসের সাথে মেলে। তাহলে শুধু হিসাব করতে হবে: $n$ টি অভিন্ন তারা ও $k - 1$ টি অভিন্ন দণ্ড কতভাবে সাজানো যায়। মোট $n + k - 1$ টি অবস্থান থেকে $k - 1$ টি অবস্থানে দণ্ড বসাও, সেটাই $C(n + k - 1, k - 1)$। (প্রমাণিত)</p>
            </div>
            <p class="mb-6"><strong>উদাহরণ ১।</strong> ১০ টি অভিন্ন বলকে ৪ টি আলাদা বাক্সে ভাগ করাই হলো $x_1 + x_2 + x_3 + x_4 = 10$ এর অঋণাত্মক সমাধান: $C(10 + 4 - 1, 4 - 1) = C(13, 3) = 286$ টি উপায়।</p>
            <p class="mb-6"><strong>উদাহরণ ২।</strong> $x_1 + x_2 + x_3 = 20$ এর ধনাত্মক সমাধান চাইলে $y_i = x_i - 1 \\geq 0$ বসাও; সমীকরণ দাঁড়ায় $y_1 + y_2 + y_3 = 17$, ফলে $C(17 + 3 - 1, 3 - 1) = C(19, 2) = 171$ টি ধনাত্মক সমাধান।</p>

            <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">অন্তর্ভুক্তি–বর্জন নীতি (Inclusion–Exclusion)</h2>
            <p class="mb-6">সংযোজন নীতি তখনই ভঙ্গুর, যখন সেটগুলোর মধ্যে ছেদ (overlap) থাকে—নিষ্পাপ যোগফলে ওই এলাকা গুণে দুইবার চলে আসে। অন্তর্ভুক্তি–বর্জন নীতি এই দুর্বলতা সেরে তোলে: আগে প্রতিটি সেটের আকার যোগ করো, তারপর জোড়ায় জোড়ায় ছেদ বাদ দাও, তারপর ত্রয়ী ছেদ আবার যোগ করো—এভাবে চিহ্ন উল্টে উল্টে শেষ পর্যন্ত যাও।</p>
            <div class="bg-gray-100 p-6 rounded-xl my-6">
                <p class="font-semibold mb-2">অন্তর্ভুক্তি–বর্জন (দুই ও তিন সেটের জন্য)</p>
                <p>$$|A \\cup B| = |A| + |B| - |A \\cap B|$$</p>
                <p>$$|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|$$</p>
            </div>
            <div class="bg-amber-50 border border-amber-200 p-6 rounded-xl my-8">
                <h3 class="font-semibold text-lg mb-4">কেন কাজ করে (প্রতিটি উপাদান একবার করে গুনি)</h3>
                <p class="mb-4">সংযোজনের প্রেক্ষাপটে যেকোনো একটি উপাদান $x$ নাও এবং জিজ্ঞেস করো, পর্যায়ক্রমিক যোগফলে সেটি কতবার গুণতে হবে। $x$ যদি ঠিক একটি সেটে থাকে, তবে যোগফলে এটি $1$ বার গুণত হয়। ঠিক দুই সেটে থাকলে—একক সেটের পদে $2$ বার যোগ হলো, আবার জোড়া ছেদের বাদে $1$ বার কেটে গেল: $2 - 1 = 1$। তিনটি সেটেই থাকলে $3 - 3 + 1 = 1$। অর্থাৎ সংঘের প্রতিটি উপাদান ঠিক একবারই গুণত হয়, আর সংঘের বাইরের উপাদান কোনো খাতায় আসেই না। এটি-ই তো সংঘের আকারের সংজ্ঞা। (প্রমাণিত)</p>
            </div>
            <p class="mb-6"><strong>উদাহরণ।</strong> $1$ থেকে $100$ পর্যন্ত কতগুলো পূর্ণসংখ্যা $3$ অথবা $5$ দিয়ে বিভাজ্য? $A$ কে $3$ এর গুণিতক ধরি, $|A| = 33$; $B$ কে $5$ এর গুণিতক ধরি, $|B| = 20$। ছেদ হলো $15$ এর গুণিতক, যাদের সংখ্যা $|A \\cap B| = 6$। অন্তর্ভুক্তি–বর্জনে: $33 + 20 - 6 = 47$।</p>

            <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">ক্রমচ্যুতি (Derangement): যখন কেউ নিজের জায়গায় থাকে না</h2>
            <p class="mb-6">একটি ক্লাসিক সমস্যা। এক পার্টিতে $n$ জন অতিথি তাদের টুপি পরিচারকের কাছে গচ্ছিত রাখলেন। শেষে পরিচারক সম্পূর্ণ এলোমেলোভাবে টুপিগুলো ফেরত দিলেন। কত প্রকারে ফেরত দেওয়া যায় যেন কোনো অতিথিই নিজের টুপি না পান? এমন বিন্যাসকেই বলা হয় <strong>ক্রমচ্যুতি</strong> (derangement)—যেসব বিন্যাসে কোনো উপাদান নিজের জায়গায় স্থির থাকে না—এবং এর সংখ্যা লেখা হয় $!n$।</p>
            <div class="bg-gray-100 p-6 rounded-xl my-6">
                <p class="font-semibold mb-2">সূত্র (ক্রমচ্যুতি)</p>
                <p>$$!n = n! \\sum_{k=0}^{n} \\frac{(-1)^k}{k!}$$</p>
                <p class="mt-2">উদাহরণস্বরূপ: $!3 = 6\\left(1 - 1 + \\frac{1}{2} - \\frac{1}{6}\\right) = 2$, এবং $!4 = 24\\left(1 - 1 + \\frac{1}{2} - \\frac{1}{6} + \\frac{1}{24}\\right) = 9$।</p>
            </div>
            <div class="bg-amber-50 border border-amber-200 p-6 rounded-xl my-8">
                <h3 class="font-semibold text-lg mb-4">প্রমাণ (অন্তর্ভুক্তি–বর্জন দিয়ে)</h3>
                <p class="mb-4">সবগুলো $n!$ বিন্যাস দিয়ে শুরু করো, তারপর অন্তত একটি উপাদানকে স্থির রাখে এমন বিন্যাসগুলো বাদ দাও। $A_i$ ধরা যাক সেই সব বিন্যাসের সেট, যেখানে উপাদান $i$ নিজের জায়গায় স্থির থাকে। $n$ টি সেট $A_1, A_2, \\dots, A_n$-এর উপর অন্তর্ভুক্তি–বর্জন প্রয়োগ করি:</p>
                <p class="mb-4">নির্দিষ্ট $k$ টি উপাদানকে স্থির রাখে এমন বিন্যাস গণনা করতে ওই $k$ টিকে পিন করে দাও আর বাকি $n - k$ টিকে স্বাধীনভাবে ঘোরাও, ফলে $(n - k)!$ টি বিন্যাস। কোন $k$ টি উপাদান স্থির হবে তা বাছা যায় $\\binom{n}{k}$ উপায়ে, তাই সব $k$-ঘাত ছেদের মোট অবদান $\\binom{n}{k}(n - k)! = \\frac{n!}{k!}$। অন্তর্ভুক্তি–বর্জন তাই দেয়</p>
                <p>$$!n = n! - \\frac{n!}{1!} + \\frac{n!}{2!} - \\frac{n!}{3!} + \\cdots + (-1)^n \\frac{n!}{n!} = n! \\sum_{k=0}^{n} \\frac{(-1)^k}{k!},$$</p>
                <p class="mt-4">যা দাবি করা সূত্রটির হুবহু রূপ। (প্রমাণিত)</p>
            </div>
            <p class="mb-6"><strong>উদাহরণ।</strong> ৪ জন অতিথি থাকলে $!4 = 9$ টি উপায়ে টুপি বদলানো যায় যেন কেউ নিজের টুপি না পান—মোট $4! = 24$ টি উপায়ের মধ্যে, অর্থাৎ সম্ভাবনা $9/24 = 3/8$। একটা চমকপ্রদ সত্য: $n$ বড় হতে হতে এই সম্ভাবনা $1/e \\approx 0.3679$ এর কাছে পৌঁছে যায়। তাই খাতা সম্পূর্ণ এলোমেলো করে ফেরত দিলেও প্রায় $37\\%$ সময় ঠিক কেউ করেই নিজের খাতা ফিরে পায় না!</p>


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

           <div class="bg-gray-100 p-6 rounded-xl my-6">
               <p class="font-semibold mb-2">Permutation Formula</p>
             <p>$$ P(n, r) = \\frac{n!}{(n - r)!} $$ — the number of ways to arrange $r$ items out of $n$.</p>
           </div>

           <div class="bg-gray-100 p-6 rounded-xl my-6">
               <p class="font-semibold mb-2">4. Combination</p>
               <p>Let us return to the very beginning of our story. The first problem was—in how many ways can a winning group of $3$ be formed from $10$ students? Your calculation gave 120. But the second problem was—in how many ways can those 3 winners be arranged in 1st, 2nd and 3rd positions? That gave 720.</p>
               <p>What exactly is the difference? In the first case we only did a <b>selection</b>—<b>order did not matter</b>. In the second case <b>order mattered</b>. In a permutation order matters, hence $P(n, r) = \\frac{n!}{(n - r)!}$. But when order does not matter and only selection counts, it is called a combination:</p>
               <p>$$C(n, r) = \\frac{n!}{r!(n - r)!}$$ — the number of ways to choose $r$ items out of $n$ (without order).</p>
               <p>Now let us choose 3 out of 10:<br>
               $$C(10, 3) = \\frac{10!}{3! \\times (10 - 3)!} = \\frac{10!}{3! \\times 7!} = \\frac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1} = 120$$</p>
               <p>Exactly the 120 you counted by hand! And the permutation was $P(10, 3) = \\frac{10!}{7!} = 10 \\times 9 \\times 8 = 720$. Notice that $C(10, 3) = \\frac{P(10, 3)}{3!}$, because the 3 chosen students can be arranged among themselves in $3! = 6$ ways, and to drop that order in selection we simply divide by $3!$.</p>
           </div>


            <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Deeper Into the Toolbox</h2>
            <p class="mb-6">The two fundamental principles — addition and multiplication — are the twin engines of counting, and the factorial, permutation, and combination formulas built on top give us our first set of calibrated tools. In this section we pull seven more tools out of the box. Each one earns its place with a full derivation rather than a hand-wavy leap, because a formula you can rebuild from scratch is a formula you can trust anywhere.</p>

            <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Pascal's Identity and Pascal's Triangle</h2>
            <p class="mb-6">Look at a small table of combinations. The rows below list $C(n, 0), C(n, 1), \\dots, C(n, n)$ for $n = 0, 1, 2, \\dots$.</p>
            <div class="bg-gray-100 p-6 rounded-xl my-6">
                <p class="font-mono text-sm">n = 0:&nbsp;&nbsp;1<br>
n = 1:&nbsp;&nbsp;1&nbsp;&nbsp;1<br>
n = 2:&nbsp;&nbsp;1&nbsp;&nbsp;2&nbsp;&nbsp;1<br>
n = 3:&nbsp;&nbsp;1&nbsp;&nbsp;3&nbsp;&nbsp;3&nbsp;&nbsp;1<br>
n = 4:&nbsp;&nbsp;1&nbsp;&nbsp;4&nbsp;&nbsp;6&nbsp;&nbsp;4&nbsp;&nbsp;1</p>
            </div>
            <p class="mb-6">Each interior entry is the sum of the two entries diagonally above it. That is a theorem, not an accident:</p>
            <div class="bg-gray-100 p-6 rounded-xl my-6">
                <p class="font-semibold mb-2">Pascal's Identity</p>
                <p>$$C(n, k) = C(n - 1, k - 1) + C(n - 1, k)$$</p>
            </div>
            <div class="bg-amber-50 border border-amber-200 p-6 rounded-xl my-8">
                <h3 class="font-semibold text-lg mb-4">Proof (Combinatorial)</h3>
                <p class="mb-4">Fix one particular object, call it $O$, among the $n$ objects. Count the $k$-element subsets by splitting them into two disjoint families.</p>
                <ul class="list-disc pl-6 space-y-3 mb-4">
                    <li><strong>Subsets that contain $O$:</strong> the remaining $k - 1$ members must be chosen from the other $n - 1$ objects, giving $C(n - 1, k - 1)$ subsets.</li>
                    <li><strong>Subsets that do not contain $O$:</strong> all $k$ members come from the other $n - 1$ objects, giving $C(n - 1, k)$ subsets.</li>
                </ul>
                <p>Every $k$-element subset falls into exactly one of these two groups, so the counts must add up to the total: $C(n, k) = C(n - 1, k - 1) + C(n - 1, k)$. This also explains why the triangle grows the way it does. (QED)</p>
            </div>
            <p class="mb-6">The identity lets us compute any entry of Pascal's Triangle purely by addition, starting from the boundary $1$'s; the factorial formula always agrees. For example $C(10, 4) = \\frac{10!}{4!\\,6!} = 210$, and building the same value by repeated addition through the triangle arrives at exactly $210$.</p>

            <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">The Binomial Theorem</h2>
            <p class="mb-6">What does $(x + y)^n$ become once we expand it fully and collect like terms? Experiment with the smallest cases first.</p>
            <div class="bg-gray-100 p-6 rounded-xl my-6">
                <p>$$(x + y)^2 = x^2 + 2xy + y^2$$</p>
                <p>$$(x + y)^3 = x^3 + 3x^2 y + 3x y^2 + y^3$$</p>
            </div>
            <p class="mb-6">The coefficients $1, 2, 1$ and $1, 3, 3, 1$ are exactly the matching rows of Pascal's Triangle. This pattern is the celebrated <strong>Binomial Theorem</strong>:</p>
            <div class="bg-gray-100 p-6 rounded-xl my-6">
                <p class="font-semibold mb-2">Binomial Theorem</p>
                <p>$$(x + y)^n = \\sum_{k=0}^{n} C(n, k)\\, x^{n-k} y^k$$</p>
            </div>
            <div class="bg-amber-50 border border-amber-200 p-6 rounded-xl my-8">
                <h3 class="font-semibold text-lg mb-4">Proof (Counting the Terms)</h3>
                <p class="mb-4">Expanding $(x + y)^n$ means writing it as $(x + y)(x + y) \\cdots (x + y)$ with $n$ brackets, then choosing exactly one factor from each bracket — either its $x$ or its $y$ — and multiplying the choices. A term of the form $x^{n-k} y^k$ appears precisely when $y$ is chosen from exactly $k$ of the $n$ brackets.</p>
                <p class="mb-4">How many ways are there to choose those $k$ brackets? It is the number of $k$-element subsets of the $n$ brackets, namely $C(n, k)$. Since different values of $k$ produce different powers of $x$ and $y$, the families of terms are disjoint and simply add up. Hence $(x + y)^n = \\sum_{k=0}^{n} C(n, k)\\, x^{n-k} y^k$. (QED)</p>
            </div>
            <p class="mb-6"><strong>Example.</strong> $(a + b)^4 = a^4 + 4a^3 b + 6a^2 b^2 + 4a b^3 + b^4$. Compare with the Pascal row $1, 4, 6, 4, 1$.</p>
            <p class="mb-6">The theorem pays out instantly. Setting $x = y = 1$ gives $\\sum_{k=0}^{n} C(n,k) = 2^n$: an $n$-element set has exactly $2^n$ subsets. Setting $x = 1, y = -1$ gives $0 = \\sum_{k=0}^{n} (-1)^k C(n, k)$, meaning the subsets of even size and odd size are equally numerous.</p>

            <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Permutations with Repetition</h2>
            <p class="mb-6">So far every object we arranged was completely distinct. But real word problems are full of identical objects — think of the letters of MISSISSIPPI, or the indistinguishable balls in a box. When identical objects are swapped among themselves, the arrangement does not change, so we must divide out that overcounting.</p>
            <p class="mb-6">Suppose we arrange $n$ objects of which $n_1$ are identical copies of type 1, $n_2$ identical copies of type 2, and so on up to type $k$, with $n_1 + n_2 + \\cdots + n_k = n$. If all $n$ objects were distinct there would be $n!$ arrangements. The $n_1$ identical objects can be permuted among themselves in $n_1!$ ways without creating a new arrangement, so we divide by each such factorial:</p>
            <div class="bg-gray-100 p-6 rounded-xl my-6">
                <p class="font-semibold mb-2">Formula (Permutations with Repetition)</p>
                <p>$$\\frac{n!}{n_1!\\, n_2! \\cdots n_k!}$$</p>
            </div>
            <p class="mb-6"><strong>Example.</strong> How many distinct rearrangements of the letters of MISSISSIPPI are there? The word has $11$ letters: $M$ once, $I$ four times, $S$ four times, and $P$ twice. The answer is</p>
            <p>$$\\frac{11!}{1!\\, 4!\\, 4!\\, 2!} = \\frac{39916800}{1152} = 34650.$$</p>

            <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Circular Permutations</h2>
            <p class="mb-6">All arrangements so far placed objects in a straight line, where the first seat is clearly distinct from the last. Around a circular table there is no first seat at all: only the cyclic order of the people matters, and rotating everyone one seat clockwise gives an arrangement we should regard as the same one.</p>
            <div class="bg-gray-100 p-6 rounded-xl my-6">
                <p class="font-semibold mb-2">Formula (Circular Permutations)</p>
                <p>$$(n - 1)!$$</p>
            </div>
            <div class="bg-amber-50 border border-amber-200 p-6 rounded-xl my-8">
                <h3 class="font-semibold text-lg mb-4">Derivation</h3>
                <p class="mb-4">In a line, the $n!$ arrangements are all genuinely different. But a circle has rotational symmetry: shifting every person one seat clockwise (or two, or three, $\\dots$) preserves the relative order. The $n!$ linear arrangements therefore clump into groups of $n$ rotations that must all be counted as the same circular arrangement. Dividing out the rotations:</p>
                <p>$$\\frac{n!}{n} = (n - 1)!.$$</p>
                <p class="mt-4">Equivalently, seat one particular person first to anchor the circle and remove the symmetry; the other $n - 1$ people then occupy the remaining $n - 1$ seats in $(n - 1)!$ ways. (QED)</p>
            </div>
            <p class="mb-6"><strong>Example.</strong> Six friends around a round dinner table: $(6 - 1)! = 5! = 120$ arrangements. If the objects are beads on a necklace, where flipping the necklace over also yields the same arrangement, mirror symmetry halves the count again to $5!/2 = 60$.</p>

            <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Stars and Bars</h2>
            <p class="mb-6">A recurring question — in number theory especially — asks: in how many ways can a nonnegative integer $n$ be written as an ordered sum of $k$ nonnegative integers? Equivalently, how many nonnegative integer solutions $(x_1, x_2, \\dots, x_k)$ satisfy</p>
            <p>$$x_1 + x_2 + \\cdots + x_k = n?$$</p>
            <div class="bg-gray-100 p-6 rounded-xl my-6">
                <p class="font-semibold mb-2">Stars and Bars Formula</p>
                <p>$$\\text{number of nonnegative solutions } = C(n + k - 1, k - 1)$$</p>
            </div>
            <div class="bg-amber-50 border border-amber-200 p-6 rounded-xl my-8">
                <h3 class="font-semibold text-lg mb-4">Proof (The Visual Trick)</h3>
                <p class="mb-4">Draw a solution as a row of $n$ identical stars, then drop $k - 1$ vertical bars into the gaps to split the stars into $k$ groups. The number of stars before the first bar is $x_1$, between the first and second bar is $x_2$, and so on; whatever stars remain after the last bar give $x_k$. Because bars are allowed to sit next to each other, empty groups are perfectly legal.</p>
                <p class="mb-4">For example, with $n = 6$ and $k = 4$, the solution $(2, 0, 3, 1)$ becomes:</p>
                <p>$$\\star \\star \\;\\; | \\;\\; | \\;\\; \\star \\star \\star \\;\\; | \\;\\; \\star$$</p>
                <p class="mt-4">Every arrangement of $n$ stars and $k - 1$ bars corresponds to exactly one solution, and every solution to exactly one arrangement. So we simply count the ways to order $n$ identical stars and $k - 1$ identical bars: choose positions for the $k - 1$ bars among the $n + k - 1$ total positions, giving $C(n + k - 1, k - 1)$. (QED)</p>
            </div>
            <p class="mb-6"><strong>Example 1.</strong> Distributing 10 identical balls into 4 distinct boxes is exactly a sum $x_1 + x_2 + x_3 + x_4 = 10$ of nonnegative integers: $C(10 + 4 - 1, 4 - 1) = C(13, 3) = 286$ ways.</p>
            <p class="mb-6"><strong>Example 2.</strong> For strictly positive solutions of $x_1 + x_2 + x_3 = 20$, substitute $y_i = x_i - 1 \\geq 0$; the equation becomes $y_1 + y_2 + y_3 = 17$, giving $C(17 + 3 - 1, 3 - 1) = C(19, 2) = 171$ positive solutions.</p>

            <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">The Inclusion–Exclusion Principle</h2>
            <p class="mb-6">The sum rule fails when the sets we are counting overlap, because naive addition counts every overlapping element twice. Inclusion–exclusion repairs this: add the individual sizes, subtract the pairwise intersections, add back the triple intersections, and so on, alternating the signs all the way down.</p>
            <div class="bg-gray-100 p-6 rounded-xl my-6">
                <p class="font-semibold mb-2">Inclusion–Exclusion (two and three sets)</p>
                <p>$$|A \\cup B| = |A| + |B| - |A \\cap B|$$</p>
                <p>$$|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|$$</p>
            </div>
            <div class="bg-amber-50 border border-amber-200 p-6 rounded-xl my-8">
                <h3 class="font-semibold text-lg mb-4">Why It Works (Counting Each Element Once)</h3>
                <p class="mb-4">Fix any element $x$ that belongs to the union and ask how many times the alternating sum counts it. If $x$ belongs to exactly one set, the sum counts it $1$ time. If it belongs to exactly two sets, it is counted $2$ by the single-set terms, then cancelled $1$ time by the pairwise subtraction: $2 - 1 = 1$. If it belongs to all three sets, it is counted $3 - 3 + 1 = 1$. Every element of the union is counted exactly once, and elements outside the union contribute nothing at all. That is exactly what a union count should do. (QED)</p>
            </div>
            <p class="mb-6"><strong>Example.</strong> Among the integers from $1$ to $100$, how many are divisible by 3 or by 5? Let $A$ be the multiples of 3, $|A| = 33$, and $B$ the multiples of 5, $|B| = 20$. The overlap is the multiples of 15, of which there are $|A \\cap B| = 6$. Inclusion–exclusion gives $33 + 20 - 6 = 47$.</p>

            <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Derangements: When Nothing Stays Put</h2>
            <p class="mb-6">Here is a classic puzzle. At a party, $n$ guests hand their hats to an attendant. At the end, the attendant returns the hats completely at random. In how many ways can the hats be returned so that no guest receives their own hat? Such orderings are called <strong>derangements</strong> — permutations in which no element stays fixed — and the number of them is written $!n$.</p>
            <div class="bg-gray-100 p-6 rounded-xl my-6">
                <p class="font-semibold mb-2">Formula (Derangements)</p>
                <p>$$!n = n! \\sum_{k=0}^{n} \\frac{(-1)^k}{k!}$$</p>
                <p class="mt-2">For example: $!3 = 6\\left(1 - 1 + \\frac{1}{2} - \\frac{1}{6}\\right) = 2$, and $!4 = 24\\left(1 - 1 + \\frac{1}{2} - \\frac{1}{6} + \\frac{1}{24}\\right) = 9$.</p>
            </div>
            <div class="bg-amber-50 border border-amber-200 p-6 rounded-xl my-8">
                <h3 class="font-semibold text-lg mb-4">Proof (By Inclusion–Exclusion)</h3>
                <p class="mb-4">Start from all $n!$ permutations and remove those that fix at least one element. Let $A_i$ be the set of permutations that leave element $i$ fixed. Applying inclusion–exclusion to the $n$ sets $A_1, A_2, \\dots, A_n$:</p>
                <p class="mb-4">To count the permutations that fix a chosen block of $k$ elements, pin those $k$ elements down and let the other $n - k$ elements permute freely, giving $(n - k)!$ permutations. There are $\\binom{n}{k}$ ways to pick which $k$ elements are fixed, so the total contribution of the $k$-fold intersections is $\\binom{n}{k}(n - k)! = \\frac{n!}{k!}$. Inclusion–exclusion therefore yields</p>
                <p>$$!n = n! - \\frac{n!}{1!} + \\frac{n!}{2!} - \\frac{n!}{3!} + \\cdots + (-1)^n \\frac{n!}{n!} = n! \\sum_{k=0}^{n} \\frac{(-1)^k}{k!},$$</p>
                <p class="mt-4">which is precisely the formula claimed. (QED)</p>
            </div>
            <p class="mb-6"><strong>Example.</strong> With 4 guests there are $!4 = 9$ scramblings in which nobody gets their own hat, out of $4! = 24$ total scramblings — a probability of $9/24 = 3/8$. A striking fact: as $n$ grows, this probability approaches $1/e \\approx 0.3679$. So if you ever return homework papers completely at random, roughly $37\\%$ of the time nobody gets the right paper back.</p>


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
        date: { en: "Aug 06, 2026", bn: "৬ আগস্ট, ২০২৬" },
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

If it could be expressed that way, the area would seem finite to us. Therefore, when calculating the area, it is better to keep it in terms of $\\pi$ or $\\sqrt{3}$ (such as $9\\pi$ or $4\\sqrt{3}$). Otherwise, if you try to find the exact value, their numerical expression in decimals becomes infinite.    </p>`,



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
    { name: {en: "Shahriar Nafis Siyam", bn: "শাহরিয়ার নাফিস সিয়াম"}, pos: {en: "Organizing Secretary", bn: "সাংগঠনিক সম্পাদক"}, group: {en: '1271009', bn: '১২৭১০০৯'}, img: "./assets/committee/siyam.jpg" },
    { name: {en: "Abdur Rahim", bn: "আব্দুল রহিম"}, pos: {en: "General Member Representative", bn: "সাধারণ সদস্য প্রতিনিধি"}, group: {en: '1275025', bn: '১২৭৫০২৫'}, img: "https://api.dicebear.com/7.x/initials/svg?seed=AR&backgroundColor=b45309" },
    { name: {en: "Yasir Amir", bn: "ইয়াসির আমির"}, pos: {en: "Publicity Secretary", bn: "প্রচার সম্পাদক"}, group: {en: '1271029', bn: '১২৭১০২৯'}, img: "./assets/committee/yasir.jpg" },
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
    eventGallery: { open: false, eventIndex: null },
    pdfViewer: { open: false, src: null, title: null, fullscreen: false }
};

// --- Image preloading helpers -------------------------------------------------
// Warms the browser cache ahead of time so gallery/lightbox images that were
// already fetched appear instantly instead of popping in on click.
function preloadImage(src) {
    if (!src) return;
    const img = new Image();
    // High priority + full decode so every image is fully rendered in cache before
    // it appears, instead of streaming in row-by-row. fetchingHint/fetchPriority
    // also bump the network priority above other page assets.
    img.decoding = 'async';
    img.fetchPriority = 'high';
    img.src = src;
}
function preloadImages(list) {
    (list || []).forEach(preloadImage);
}

// Mark one image fully loaded. Also re-arms the safety net so any image that
// never fires onload (broken path, aggressive caching, render churn) is still
// force-revealed shortly after, so nothing stays dim/hidden.
window.markImgLoaded = function (img) {
    if (img && img.classList && !img.classList.contains('is-loaded')) {
        img.classList.add('is-loaded');
    }
    ensureImgReveal();
};
function ensureImgReveal() {
    if (window.revealArmed) return;
    window.revealArmed = true;
    setTimeout(() => {
        document.querySelectorAll('.img-load:not(.is-loaded)').forEach(img => img.classList.add('is-loaded'));
    }, 6000);
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
    } else if (state.pdfViewer.open) {
        if (e.key === 'Escape') closePdfViewer();
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

function openPdfViewer(evOrSrc, title) {
    let src, pdfTitle;
    if (typeof evOrSrc === 'number') {
        const ev = EVENTS[evOrSrc];
        if (!ev || !ev.viewLink) return;
        src = ev.viewLink;
        pdfTitle = ev.title;
    } else {
        src = evOrSrc;
        pdfTitle = title || 'PDF Viewer';
    }
    if (!src) return;
    // In-page viewer (rendered by renderPdfViewerModal below). No window.open:
    // the PDF opens as a modal on the current page. This works now because the
    // real PDF bytes are served (previously broken LFS pointers made it look
    // like the viewer was the problem).
    state.pdfViewer = { open: true, src: encodeURI(src), title: pdfTitle, fullscreen: false };
    render();
}
function closePdfViewer() {
    state.pdfViewer.open = false;
    render();
}
function togglePdfFullscreen() {
    state.pdfViewer.fullscreen = !state.pdfViewer.fullscreen;
    render();
}

// Absolute path for a book hosted locally under assets/Ebooks/. The `file` field
// already includes its subfolder (e.g. "CS/cp1.pdf"), so we build the path straight
// from that. Encoding happens once, in openPdfViewer, to avoid double-encoding.
function localPdfPath(file) {
    return `./assets/Ebooks/${file}`;
}
// Single entry point for the per-book "View" button. Passing the array index keeps
// filenames out of inline HTML attributes (which would break on quotes/Bengali in
// the name) -- we resolve the actual file from LOCAL_PDF_BOOKS.
function openLocalPdf(globalIdx) {
    const book = LOCAL_PDF_BOOKS[globalIdx];
    if (!book) return;
    openPdfViewer(localPdfPath(book.file), book.title);
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

// The app is deployed at ndcmmathclub.github.io/view/ on GitHub Pages, but it is
// also opened from different roots during local development (python3 -m http.server
// from the view/ folder serves at '/', while VS Code's Live Server and GitHub Pages
// serve under '/view/'). Hard-coding one base breaks the others -- navigation and
// refresh collapse to the homepage. So the base path is DETECTED at load time by
// stripping any known route (and its numeric id) off the current URL to find the
// real subpath this app is served from.
const KNOWN_VIEWS = ['messages','events','articles','resources','committee','contact','home'];
function detectBasePath() {
    const parts = (window.location.pathname || '/').split('/').filter(Boolean);
    // Strip a trailing index.html (e.g. file:///.../view/index.html) so the base is
    // the app folder itself.
    if (parts.length && parts[parts.length - 1].toLowerCase() === 'index.html') parts.pop();
    while (parts.length) {
        const last = parts[parts.length - 1].toLowerCase();
        if (KNOWN_VIEWS.includes(last)) { parts.pop(); continue; }
        if (/^\d+$/.test(parts[parts.length - 1]) && parts.length >= 2 && parts[parts.length - 2].toLowerCase() === 'articles') { parts.pop(); parts.pop(); continue; }
        break;
    }
    return '/' + parts.join('/');
}
const BASE_PATH = detectBasePath();
// Keep every relative URL (./assets/..., the loading-screen logo, PDFs, etc.)
// rooted at the detected base regardless of the current route's depth -- otherwise
// nested routes like /view/articles/5 would resolve them against the wrong folder.
(function setAppBase() {
    const ba = document.createElement('base');
    ba.href = (BASE_PATH || '/') + '/';
    document.head.appendChild(ba);
})();
const SITE_ORIGIN = 'https://ndcmmathclub.github.io';

function pathFor(viewName, params) {
    if (params && params.id) return `${BASE_PATH}/articles/${params.id}`;
    if (viewName === 'HOME') return `${BASE_PATH}/`;
    return `${BASE_PATH}/${viewName.toLowerCase()}`;
}

// --- Routing ---------------------------------------------------------------
// This site is an SPA on GitHub Pages (static hosting, no server-side rewrites),
// so it uses clean history.pushState paths for in-app navigation (e.g. /view/
// resources). A direct visit or refresh on such a real path 404s on GitHub
// Pages; the paired 404.html restores the URL and redirects to index.html where
// runRoutingState() re-reads it -- giving dynamic-style refresh behaviour without
// hash routing (better for SEO). Because it's client-side routing, if the host
// rewrites (404.html) or pushState are unavailable the app still renders via the
// pathname. We do NOT use location.hash, keeping each route a unique indexable URL.
function runRoutingState() {
    let path = window.location.pathname;
    if (path.startsWith(BASE_PATH)) path = path.slice(BASE_PATH.length);
    const segments = path.split('/').filter(Boolean);

    if (segments.length === 0) {
        state.view = 'HOME';
    } else if (segments[0] === 'articles' && segments[1]) {
        state.view = 'ARTICLE_SINGLE';
        state.articleId = parseInt(segments[1]);
    } else {
        const view = segments[0].toUpperCase();
        // Guard against unrecognised routes so an unknown/malformed path falls
        // back to the homepage instead of producing an invalid view (which would
        // render nothing).
        state.view = ['HOME','MESSAGES','EVENTS','ARTICLES','RESOURCES','COMMITTEE','CONTACT'].includes(view) ? view : 'HOME';
    }
}

function handleRouting() {
    runRoutingState();
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
    //
    // NOTE: some browser extensions (ad/tracker/privacy blockers) throw
    // "The operation is insecure" on pushState even on localhost -- that is an
    // environment quirk, not a code bug. We log it only ONCE so the console isn't
    // flooded on every click while still working (the chosen view still renders).
    try {
        const path = pathFor(viewName, params);
        if (window.location.pathname !== path) {
            window.history.pushState({}, '', path);
            urlUpdateBlockedLogged = false;
        }
    } catch (e) {
        if (!urlUpdateBlockedLogged) {
            console.warn(
                'URL update unavailable here (likely file:// or a blocking browser ' +
                'extension). Navigation still works, but the address bar won\'t reflect ' +
                'the current page and a refresh will return to the loaded URL.',
                e
            );
            urlUpdateBlockedLogged = true;
        }
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
let urlUpdateBlockedLogged = false;

function init() {
    updateBodyLang();
    window.addEventListener('popstate', handleRouting);
    window.addEventListener('keydown', handleLightboxKey);
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.vscode-copy');
        if (!btn) return;
        const lines = btn.closest('.vscode-window').querySelectorAll('.vscode-code');
        const text = Array.from(lines, (el) => el.textContent).join('\n').replace(/\n+$/, '');
        const label = btn.textContent;
        const done = () => {
            btn.textContent = 'Copied!';
            setTimeout(() => { btn.textContent = label; }, 1200);
        };
        const fallback = () => {
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.style.position = 'fixed';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.select();
            try { document.execCommand('copy'); done(); } catch (_) { btn.textContent = 'Failed'; }
            document.body.removeChild(ta);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(done).catch(fallback);
        } else {
            fallback();
        }
    });
    handleRouting(); 
    startSlider();
    startEventSlideshow();

    // Warm the homepage banner images only (already web-sized, ~150KB each).
    // Event/activity photos preload lazily when their gallery is opened, so the
    // initial page load isn't weighed down by photos the user hasn't asked for.
    preloadImages(CLUB_PHOTOS);
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
        ${state.pdfViewer.open ? renderPdfViewerModal() : ''}
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
                                    <img src="${src}" alt="${getLang(ev.title)} photo ${idx + 1}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 img-load" onload="markImgLoaded(this)" loading="eager" decoding="async">
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
            <img src="${src}" alt="Activity photo ${index + 1}" class="max-w-[92vw] max-h-[82vh] object-contain rounded-lg shadow-2xl img-load" onload="markImgLoaded(this)" loading="eager" fetchpriority="high">
            ${images.length > 1 ? `
                <div class="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs font-bold tracking-widest">
                    ${index + 1} / ${images.length}
                </div>
            ` : ''}
        </div>
    `;
}

function renderPdfViewerModal() {
    const { src, title, fullscreen } = state.pdfViewer;
    if (!src) return '';
    return `
        <div class="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm fade-in" onclick="if(event.target === this) closePdfViewer()" style="${fullscreen ? 'padding:0;' : 'padding:1rem; display:flex; align-items:center; justify-content:center;'}">
            <div class="bg-white shadow-2xl flex flex-col overflow-hidden" style="${fullscreen ? 'width:100vw; height:100vh; border-radius:0;' : 'width:100%; max-width:64rem; max-height:90vh; border-radius:1rem;'}">
                <div class="flex items-center justify-between gap-4 p-4 border-b border-gray-100 bg-white/95 backdrop-blur-sm flex-shrink-0" style="${fullscreen ? 'border-radius:0;' : 'border-radius:1rem 1rem 0 0;'}">
                    <div class="min-w-0">
                        <div class="text-xs font-bold uppercase tracking-widest text-ndcm-accent">${getLang(DICTIONARY.view)}</div>
                        <h3 class="text-lg font-bold text-slate-900 truncate">${title ? (typeof title === 'string' ? title : getLang(title)) : 'PDF Viewer'}</h3>
                    </div>
                    <div class="flex items-center gap-1 flex-shrink-0">
                        <button onclick="togglePdfFullscreen()" aria-label="Toggle fullscreen" class="text-slate-400 hover:text-slate-700 p-2 transition-colors">
                            ${fullscreen ? ICONS.compress : ICONS.expand}
                        </button>
                        <button onclick="closePdfViewer()" aria-label="Close" class="text-slate-400 hover:text-slate-700 p-2 -mr-2">
                            ${ICONS.x}
                        </button>
                    </div>
                </div>
                <div class="flex-grow min-h-0">
                    <object data="${src}" type="application/pdf" class="w-full h-full border-0" style="${fullscreen ? 'min-height:0; flex:1;' : 'min-height:75vh;'}" aria-label="PDF Viewer">
                        <embed src="${src}" type="application/pdf">
                        <p>${getLang(DICTIONARY.view)}</p>
                    </object>
                </div>
            </div>
        </div>
    `;
}

function renderHeader() {
    const navLinks = ['HOME', 'MESSAGES', 'EVENTS', 'ARTICLES', 'RESOURCES', 'COMMITTEE', 'CONTACT'];
    const logoHtml = SITE_DATA.logo 
        ? `<img src="${SITE_DATA.logo}" alt="Logo" width="40" height="40" class="w-10 h-10 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform bg-white img-load" onload="markImgLoaded(this)" loading="eager" fetchpriority="high" decoding="async">`
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
                            <p class="text-lg text-slate-600 leading-relaxed max-w-lg relative pl-8">
                                <span class="absolute -left-1 -top-4 text-ndcm-gold font-serif text-5xl leading-none select-none" aria-hidden="true">“</span>
                                <span class="italic">${t('hero_desc')}</span>
                                <span class="mt-2 block text-xs font-medium text-slate-400 pl-2">— ${getLang(DICTIONARY.hero_author)}</span>
                            </p>
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
                        <img src="${src}" class="w-full h-full object-cover img-load" alt="Club Activity" onload="markImgLoaded(this)" loading="eager" fetchpriority="${idx === 0 ? 'high' : 'low'}" decoding="async">
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
                            ${event.viewLink ? `
                                <button onclick="openPdfViewer(${evIdx})" class="w-full md:w-auto px-6 py-2 bg-ndcm-primary text-white text-sm font-bold rounded-lg hover:bg-ndcm-accent transition-all">
                                    ${t('view')}
                                </button>
                            ` : (!event.noRsvp ? `
                                <button class="w-full md:w-auto px-6 py-2 bg-white border border-slate-200 text-slate-700 text-sm font-bold rounded-lg hover:bg-slate-50 hover:border-ndcm-primary hover:text-ndcm-primary transition-all">
                                    ${t('rsvp')}
                                </button>
                            ` : '')}
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
                                <img src="${msg.img}" alt="${getLang(msg.name)}" class="relative w-full aspect-square object-cover rounded-2xl shadow-xl border-4 border-white img-load" onload="markImgLoaded(this)">
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
                            <img src="${article.image}" alt="Article" class="absolute inset-0 w-full h-full object-cover img-load" onload="markImgLoaded(this)">
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
            <img src="${article.image}" class="w-full h-64 md:h-96 object-cover rounded-xl mb-8 shadow-sm img-load" onload="markImgLoaded(this)">
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
                            <img src="${member.img}" class="w-full h-full object-cover img-load" onload="markImgLoaded(this)">
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

            <div class="mt-24">
                <div class="text-center mb-12">
                    <h2 class="text-2xl md:text-3xl font-bold text-slate-900 inline-block border-b-2 border-ndcm-gold pb-2">${t('pdf_books')}</h2>
                    <p class="text-slate-600 mt-3">${t('pdf_books_desc')}</p>
                </div>

                <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden divide-y divide-gray-100 mb-12">
                    ${PDF_BOOKS.map((book, idx) => `
                        <a href="${book.link}" target="_blank" rel="noopener" class="group flex items-center gap-4 p-4 md:p-5 hover:bg-gray-50 transition-colors">
                            <span class="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-100 text-ndcm-primary font-bold flex items-center justify-center text-sm">${String(idx + 1).padStart(2, '0')}</span>
                            <div class="min-w-0 flex-grow">
                                <div class="flex items-center gap-2">
                                    <h3 class="font-bold text-slate-900 group-hover:text-ndcm-primary transition-colors truncate">${book.title}</h3>
                                    <span class="flex-shrink-0 text-[10px] font-bold uppercase bg-slate-100 text-slate-500 px-2 py-0.5 rounded hidden sm:inline">${getLang(book.type)}</span>
                                </div>
                                <p class="text-sm text-slate-500 truncate">${book.author} · ${getLang(book.desc)}</p>
                            </div>
                            <svg class="w-5 h-5 text-slate-300 group-hover:text-ndcm-accent transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                        </a>
                    `).join('')}
                </div>

                <div class="text-center mb-8">
                    <h3 class="text-xl font-bold text-slate-900 inline-block border-b-2 border-ndcm-accent pb-1">${t('pdf_cat_math')} <span class="text-slate-400 font-normal text-sm">(${LOCAL_PDF_BOOKS.filter(b => b.cat === 'math').length})</span></h3>
                </div>
                <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden divide-y divide-gray-100 mb-12">
                    ${LOCAL_PDF_BOOKS.map((book, globalIdx) => book.cat === 'math' ? `
                        <div class="flex items-center gap-4 p-4 md:p-5 hover:bg-gray-50 transition-colors">
                            <span class="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-100 text-ndcm-primary font-bold flex items-center justify-center text-sm">${String(LOCAL_PDF_BOOKS.filter(b => b.cat === 'math').indexOf(book) + 1).padStart(2, '0')}</span>
                            <div class="min-w-0 flex-grow">
                                <h3 class="font-bold text-slate-900 truncate">${book.title}</h3>
                                <p class="text-sm text-slate-500 truncate">${book.author}</p>
                            </div>
                            <div class="flex flex-shrink-0 gap-2">
                                <button onclick="openLocalPdf(${globalIdx})" class="px-4 py-1.5 rounded-lg bg-ndcm-primary text-white text-xs font-bold hover:bg-ndcm-accent transition-colors">${t('view')}</button>
                            </div>
                        </div>
                    ` : '').join('')}
                </div>

                <div class="text-center mb-8">
                    <h3 class="text-xl font-bold text-slate-900 inline-block border-b-2 border-ndcm-accent pb-1">${t('pdf_cat_cs')} <span class="text-slate-400 font-normal text-sm">(${LOCAL_PDF_BOOKS.filter(b => b.cat === 'cs').length})</span></h3>
                </div>
                <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden divide-y divide-gray-100">
                    ${LOCAL_PDF_BOOKS.map((book, globalIdx) => book.cat === 'cs' ? `
                        <div class="flex items-center gap-4 p-4 md:p-5 hover:bg-gray-50 transition-colors">
                            <span class="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-100 text-ndcm-primary font-bold flex items-center justify-center text-sm">${String(LOCAL_PDF_BOOKS.filter(b => b.cat === 'cs').indexOf(book) + 1).padStart(2, '0')}</span>
                            <div class="min-w-0 flex-grow">
                                <h3 class="font-bold text-slate-900 truncate">${book.title}</h3>
                                <p class="text-sm text-slate-500 truncate">${book.author}</p>
                            </div>
                            <div class="flex flex-shrink-0 gap-2">
                                <button onclick="openLocalPdf(${globalIdx})" class="px-4 py-1.5 rounded-lg bg-ndcm-primary text-white text-xs font-bold hover:bg-ndcm-accent transition-colors">${t('view')}</button>
                            </div>
                        </div>
                    ` : '').join('')}
                </div>
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
