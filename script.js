const FORMSPREE_ID = "xdkvyoqy"; 

const CLUB_PHOTOS = [
    "./assets/IMG_20260506_130711.jpg.jpeg",
    "./assets/IMG_7932-1536x1024.jpg",
    "./assets/MG_7941-1536x1024.jpg",
    "./assets/IMG_7986-1536x1024.jpg.jpeg",
    "./assets/IMG_0009-1-1536x1024.jpg.jpeg",
    "./assets/WhatsApp Image 2026-05-08 at 10.31.24 AM.jpeg"
];

const SITE_DATA = {
    name: { en: "Notre Dame College Math Club", bn: "নটর ডেম কলেজ গণিত ক্লাব" },
    college: { en: "Notre Dame College Mymensingh", bn: "নটর ডেম কলেজ ময়মনসিংহ" },
    logo: "./assets/logo.jpg", 
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
        en: 'Math is not about answers; its about proof and showing why something is true. Elegant proof expresses clarity, simplicity, and intellectual beauty in mathematics.', 
        bn: 'গণিত মানেই উত্তর না; এটা হলো যুক্তি এবং দেখানো কেন এটা সত্য হলো। যথাযথ প্রমাণ গণিতের মধ্যেকার স্বচ্ছতা, সরলতা এবং বুদ্ধিবৃত্তিক সৌন্দর্যকে প্রকাশ করে।'
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
    'article_prompt': { en: 'Have an interesting math topic to write about?', bn: 'গণিত নিয়ে লেখার মতো কোনো মজার বিষয় আছে?' }
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
        tag: { en: "Latest Event", bn: "সর্বশেষ ইভেন্ট" },
        title: { en: "Intra Math Olympiad 2026", bn: "অভ্যন্তরীণ গণিত অলিম্পিয়াড ২০২৬" },
        desc: { en: "Held on 15 April in Room 402.", bn: "১৫ এপ্রিল ৪০২ নং কক্ষে অনুষ্ঠিত হবে" },
        color: "bg-ndcm-accent"
    },
    {
        id: 2,
        tag: { en: "Announcement", bn: "ঘোষণা" },
        title: { en: "Weekly Problem Solving Round", bn: "সাপ্তাহিক সমস্যা সমাধান পর্ব" },
        desc: { en: "Wednesday at 12:00 PM in Room 402.", bn: "বুধবার দুপুর ১২:০০ টায় ৪০২ নং কক্ষে।" },
        color: "bg-ndcm-primary"
    }
];

const EVENTS = [ 
    
    {
        title: { en: "Intra Math Olympiad 2026", bn: "অভ্যন্তরীণ গণিত অলিম্পিয়াড ২০২৬" },
        date: { en: "APR 15", bn: "১৫ এপ্রিল" },
        time: { en: "12:00 PM", bn: "দুপুর ১২:০০" },
        location: { en: "Room 402", bn: "৪০২ নং কক্ষ" },
        type: { en: "Lecture", bn: "লেকচার" },
        desc: { en: "Math Olympiad", bn: "গণিত অলিম্পিয়াড" },
        color: "bg-blue-100 text-blue-800",
        banner: "./assets/activities/Announcement_NDCMC_IMO2026.png", 
        rsvpLink: "https://forms.gle/your-link"
    }
];

const RESOURCES = [
    { title: "3Blue1Brown", type: {en: "Video", bn: "ভিডিও"}, desc: {en: "Visual explanations of complex math concepts.", bn: "জটিল গণিত ধারণার ভিজ্যুয়াল ব্যাখ্যা।"}, link: "https://www.3blue1brown.com/" },
    { title: "Project Euler", type: {en: "Tool", bn: "টুল"}, desc: {en: "Challenging mathematical/computer programming problems.", bn: "চ্যালেঞ্জিং গাণিতিক/কম্পিউটার প্রোগ্রামিং সমস্যা।"}, link: "https://projecteuler.net/" },
    { title: "Wolfram Alpha", type: {en: "Tool", bn: "টুল"}, desc: {en: "Computational intelligence engine.", bn: "কম্পিউটেশনাল ইন্টেলিজেন্স ইঞ্জিন।"}, link: "https://www.wolframalpha.com/" },
    { title: "The Art of Problem Solving", type: {en: "Course", bn: "কোর্স"}, desc: {en: "Resources for competition math.", bn: "প্রতিযোগিতামূলক গণিতের জন্য রিসোর্স।"}, link: "https://artofproblemsolving.com/" },
    { title: "Overleaf", type: {en: "Tool", bn: "টুল"}, desc: {en: "Online LaTeX editor for papers.", bn: "গবেষণাপত্রের জন্য অনলাইন LaTeX এডিটর।"}, link: "https://www.overleaf.com/" },
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
        title: { en: "Prime Number", bn: "মৌলিক সংখ্যা" },
        author: { en: "Md Radif Hasan", bn: "মোঃ রাদ্বীফ হাসান" },
        role: { en: "President", bn: "সভাপতি" },
        date: { en: "Jan 13, 2026", bn: "১৩ জানুয়ারি, ২০২৬" },
        readTime: { en: "1 min read", bn: "১ মিনিট পাঠ" },
        desc: { en: "One of the most interesting topics for mathematicians and computer scientists.", bn: "গণিতবিদ ও কম্পিউটার বিজ্ঞানীদের অন্যতম সবচেয়ে আগ্রহের বিষয়বস্তু" },
        image: "https://plus.unsplash.com/premium_photo-1753191396890-bb83bf96fc3c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: {
            en: `<p>Often called the most beautiful equation in mathematics...</p>`,
            bn: `<p>গণিতের সবচেয়ে সুন্দর সমীকরণ হিসেবে পরিচিত অয়লারের অভেদ পাঁচটি মৌলিক ধ্রুবককে সংযুক্ত করে:</p>`
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

<p>দেখা যাচ্ছে সর্বমোট ৪ জনের দল থেকে ২৪ উপায়ে ৩ জনের দল নিয়ে প্রথম, দ্বিতীয় ও তৃতীয় অবস্থান নির্ণয় করা যায়। এই বিষয়টাকেই বলা হয় বিন্যাস। আরেকটু খেয়াল করলে দেখা যাবে আমি একটা সুনির্দিষ্ট নিয়ম মেনে কিন্তু বিন্যাসগুলো সাজিয়েছি, এলোমেলোভাবে সাজাইনি, মূলত এখানেই গণিতের সৌন্দর্য নিহিত। 
           
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
}

];

const COMMITTEE = [
    { name: {en: "Komol Chandra Sarker", bn: "কমল চন্দ্র সরকার"}, pos: {en: "Moderator", bn: "পরিচালক"}, group: {en: 'Lecturer at Mathematics Department', bn: 'প্রভাষক, গণিত বিভাগ'}, img: "./assets/committee/komol_sir.jpg" },
    { name: {en: "Md Radif Hasan", bn: "মোঃ রাদ্বীফ হাসান"}, pos: {en: "President", bn: "সভাপতি"}, group: {en: 'Science 1', bn: 'বিজ্ঞান ১'}, img: "./assets/committee/radif.jpg" },
    { name: {en: "Fahmid Rahman Sakif", bn: "ফাহমিদ রহমান সাকিফ"}, pos: {en: "General Secretary", bn: "সাধারণ সম্পাদক"}, group: {en: 'Science 1', bn: 'বিজ্ঞান ১'}, img: "https://api.dicebear.com/7.x/initials/svg?seed=FS&backgroundColor=b45309" },
    { name: {en: "Arif Mahmud Fahad", bn: "আরিফ মাহমুদ ফাহাদ"}, pos: {en: "Organizing Secretary", bn: "সাংগঠনিক সম্পাদক"}, group: {en: 'Science 1', bn: 'বিজ্ঞান ১'}, img: "./assets/committee/fahad.jpg" },
    { name: {en: "Syedul Mursalin", bn: "সাইয়্যেদুল মুরসালিন"}, pos: {en: "General Member Representative", bn: "সাধারণ সদস্য প্রতিনিধি"}, group: {en: 'Science 1', bn: 'বিজ্ঞান ১'}, img: "./assets/committee/mursalin.jpg" },
    { name: {en: "Masadunnobi Topu", bn: "মাসাদুন্নবী তপু"}, pos: {en: "Publicity Secretary", bn: "প্রচার সম্পাদক"}, group: {en: 'Science 5', bn: 'বিজ্ঞান ৫'}, img: "./assets/committee/topu.jpg" },
    { name: {en: "Siyam Sheikh", bn: "সিয়াম শেখ"}, pos: {en: "Treasurer", bn: "কোষাধ্যক্ষ"}, group: {en: 'Science 1', bn: 'বিজ্ঞান ১'}, img: "./assets/committee/siyam.png" },
    { name: {en: "Md Tamim Hasan", bn: "মোঃ তামিম হাসান"}, pos: {en: "Educational Tour Secretary", bn: "শিক্ষা সফর বিষয়ক সম্পাদক"}, group: {en: 'Science 2', bn: 'বিজ্ঞান ২'}, img: "https://api.dicebear.com/7.x/initials/svg?seed=TH&backgroundColor=b45309" }
];

let state = {
    view: 'HOME',
    articleId: null, 
    lang: 'en', 
    menuOpen: false,
    currentSlide: 0,
    graphMode: 0,
    eventSlideIndex: 0
};

function startEventSlideshow() {
    setInterval(() => {
        if (state.view === 'EVENTS') {
            state.eventSlideIndex = (state.eventSlideIndex + 1) % CLUB_PHOTOS.length;
            
            render(); 
        }
    }, 3000); 
}

function handleRouting() {
    const hash = window.location.hash.replace('#', '');
    const [view, id] = hash.split('/');

    if (!view || view === 'home') {
        state.view = 'HOME';
    } else if (view === 'articles' && id) {
        state.view = 'ARTICLE_SINGLE';
        state.articleId = parseInt(id);
    } else {
        const foundView = view.toUpperCase();
        state.view = foundView;
    }
    render();
}

function navigate(viewName, params = null) {
    state.view = viewName;
    state.menuOpen = false;

    if (params && params.id) {
        state.articleId = params.id;
        window.location.hash = `articles/${params.id}`;
    } else {
        window.location.hash = viewName.toLowerCase();
    }
    
    window.scrollTo(0, 0);
}

const t = (key) => DICTIONARY[key] ? DICTIONARY[key][state.lang] : key;
const getLang = (obj) => obj ? obj[state.lang] : '';

const app = document.getElementById('app');
let mathAnimationId;
let sliderInterval;

function init() {
    updateBodyLang();
    window.addEventListener('hashchange', handleRouting);
    handleRouting(); 
    startSlider();
    startEventSlideshow(); 
}

function updateBodyLang() {
    document.body.classList.remove('lang-en', 'lang-bn');
    document.body.classList.add(`lang-${state.lang}`);
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
    }
}

function render() {
    app.innerHTML = `
        ${renderHeader()}
        <main class="flex-grow pt-16 min-h-[80vh]">
            ${renderView()}
        </main>
        ${renderFooter()}
    `;
    
    renderMath(); 
    
    if (state.view === 'HOME') {
        initMathAnimation();
        updateSliderUI();
    }
}

function renderHeader() {
    const navLinks = ['HOME', 'EVENTS', 'ARTICLES', 'RESOURCES', 'COMMITTEE', 'CONTACT'];
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
                            <svg id="math-vis" width="100%" height="100%" viewBox="0 0 400 400" class="absolute inset-0 text-ndcm-accent opacity-80">
                                <path id="math-vis-path" d="" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <div class="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg border border-gray-100 shadow text-sm font-mono text-ndcm-primary pointer-events-none">
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
                    <div class="absolute inset-0 transition-opacity duration-700 ${state.eventSlideIndex === idx ? 'opacity-100' : 'opacity-0'}">
                        <img src="${src}" class="w-full h-full object-cover" alt="Club Activity">
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
                ${EVENTS.map(event => `
                    <div class="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-6 items-start md:items-center">
                        <div class="flex-shrink-0 w-full md:w-32 bg-slate-50 rounded-lg p-4 text-center border border-gray-200">
                            <div class="text-xs font-bold text-slate-500 uppercase tracking-wide">Date</div>
                            <div class="text-xl font-bold text-ndcm-primary">${getLang(event.date)}</div>
                        </div>
                        <div class="flex-grow">
                            <div class="flex items-center gap-3 mb-2">
                                <span class="text-[10px] font-bold uppercase px-2 py-1 rounded ${event.color}">${getLang(event.type)}</span>
                                <div class="flex items-center gap-1 text-xs text-slate-500 font-medium">${ICONS.clock} ${getLang(event.time)}</div>
                            </div>
                            <h3 class="text-xl font-bold text-slate-900 mb-2">${getLang(event.title)}</h3>
                            <p class="text-slate-600 text-sm mb-3">${getLang(event.desc)}</p>
                            <div class="flex items-center gap-1 text-xs text-slate-500 font-medium">${ICONS.location} ${getLang(event.location)}</div>
                        </div>
                        
                        <div class="flex flex-col gap-2 w-full md:w-auto">
                            ${event.banner ? `
                                <a href="${event.banner}" target="_blank" class="w-full text-center px-6 py-2 bg-slate-100 text-ndcm-primary text-xs font-bold rounded-lg border border-ndcm-primary hover:bg-ndcm-primary hover:text-white transition-all">
                                    ${getLang(DICTIONARY.view)}
                                </a>
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

function toggleGraphMode() {
    state.graphMode = (state.graphMode + 1) % 3;
    initMathAnimation();
}

function initMathAnimation() {
    let t = 0;
    const labels = [
        "$$ x=A\\sin(at+\\delta), y=B\\sin(bt) $$", 
        "$$ r = e^{\\sin\\theta} - 2\\cos(4\\theta) + \\sin^5(\\frac{2\\theta - \\pi}{24})$$", 
        "$$ z = \\sin(x^2 + y^2) $$" 
    ];

    const labelEl = document.getElementById('math-label');
    if(labelEl) {
        labelEl.innerHTML = labels[state.graphMode];
        renderMath(); 
    }

    function animate() {
        t += 0.02;
        const path = document.getElementById('math-vis-path');
        if (!path || state.view !== 'HOME') return;

        const points = [];
        const width = 400, height = 400;
        const cx = width / 2, cy = height / 2;
        
        if (state.graphMode === 0) {
            const scale = 140;
            for (let i = 0; i <= 200; i++) {
                const theta = (i / 200) * Math.PI * 2;
                const x = cx + scale * Math.sin(3 * theta + t);
                const y = cy + scale * Math.sin(2 * theta);
                points.push(`${x},${y}`);
            }
        } else if (state.graphMode === 1) {
            const scale = 35;
            for (let i = 0; i <= 300; i++) {
                const theta = (i / 300) * Math.PI * 12; 
                const r = Math.exp(Math.sin(theta)) - 2 * Math.cos(4 * theta) + Math.pow(Math.sin((2 * theta - Math.PI) / 24), 5);
                const rotX = r * Math.cos(theta + t*0.5);
                const rotY = r * Math.sin(theta + t*0.5);
                points.push(`${cx + rotX * scale},${cy + rotY * scale}`);
            }
        } else {
            const scale = 30;
            for (let x = -5; x <= 5; x += 0.2) {
                const yVal = Math.sin(x*x + t) * 2; 
                const isoX = cx + (x * scale);
                const isoY = cy + (yVal * 10);
                points.push(`${isoX},${isoY}`);
            }
        }

        path.setAttribute('d', `M ${points.join(' L ')}`);
        mathAnimationId = requestAnimationFrame(animate);
    }

    if (mathAnimationId) cancelAnimationFrame(mathAnimationId);
    mathAnimationId = requestAnimationFrame(animate);
}

init();