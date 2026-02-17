export const content = {
    about: {
        title: "About Me",
        role: "UI/UX Designer & AI Strategist",
        summary: [
            "I am a **UI/UX Designer** who codes. My focus is on the **feel** and **flow** of digital experiences, using AI to bridge the gap between high-end design and functional reality.",
            "With a background in **UI/UX** and a toolkit built on **React** & **Supabase**, I don't just design static screens; I build living interfaces. I use AI (Vibe Coding) to execute my creative vision without being limited by traditional development bottlenecks.",
            "My philosophy is simple: **Design is the core.** Code is just the medium I use to deliver it."
        ],
        skills: [
            "Vibe Coding", "UI/UX Design", "Framer Motion", "React",
            "Supabase", "Interaction Design", "Prototyping", "AI Workflows"
        ]
    },
    projects: [
        {
            id: "amwag-travel",
            title: "Amwag Travel",
            category: "Product Design",
            description: "A comprehensive travel companion app designed to transform intercity travel into a seamless, secure, and enjoyable journey.",
            link: "https://www.behance.net/gallery/216216367/Amwag-Travel-Your-Journeys-Made-Easier-with-Us-",
            color: "#00C853",
            icon: "Navigation",
            year: "2024",
            technologies: ["React Native", "UX Research", "Figma", "Payment Gateway"],

            problem: "Current travel booking methods are time-consuming and fragmented. In-person booking is inconvenient, and existing digital solutions lack usability, leading to poor customer satisfaction and limited growth.",
            research: "Conducted user surveys identifying that 70% of travelers find current booking processes stressful. Focused on 'Trust' and 'Ease' as core design pillars.",
            userFlow: "Search Trip -> Select Seat -> Secure Payment -> Real-time Tracking -> Digital Ticket.",
            wireframes: "Prioritized clear hierarchy and large touch targets. The 'Booking' flow was designed to be completed in under 3 taps.",
            finalUI: "A clean, trustworthy interface using calming greens and blues. The 'My Journey' feature acts as a digital companion, guiding the user from departure to arrival.",
            why: "By solving the friction of booking, we didn't just build an app; we built a travel companion that respects the user's time and safety."
        },
        {
            id: "chat-app",
            title: "Real-Time Chat App",
            category: "Prototyping",
            description: "A WhatsApp-inspired experience focused on the 'feel' of connection. Features fluid message bubbles, liquid animations, and a satisfying 'pop' on delivery.",
            link: "#",
            color: "#6840FF",
            icon: "MessageCircle",
            year: "2023",
            technologies: ["React", "Framer Motion", "Supabase", "UI/UX"],

            // Case Study Fields
            problem: "Most chat apps feel sterile and utilitarian. They deliver text but fail to convey the emotional nuance and 'weight' of real conversation.",
            research: "Analyzed the physics of real-world interactions—how objects bounce and settle. Concluded that message bubbles should behave like physical entities to create a sense of presence.",
            userFlow: "Login -> Contact List -> Instant Chat Interface -> Sensory Feedback on Send/Receive.",
            wireframes: "Focused on minimizing UI chrome to let the content breathe. The 'send' button was prototyped to have a satisfying 'pressing' animation.",
            finalUI: "A clean, glassmorphic interface where messages slide in with momentum. The color palette shifts subtly based on conversation activity.",
            why: "By adding physics to text, we turned a mundane utility into a playful interaction. The user feels 'connected' not just by the data, but by the motion."
        },
        {
            id: "flowart",
            title: "FlowArt",
            category: "Visual Design",
            description: "An artistic content platform that bridges the gap between mobile and web. Designed with a 'Brutalist' aesthetic to let the art speak for itself.",
            link: "https://www.linkedin.com/posts/mo-hassan21ta_excited-to-finally-share-my-project-flowart-ugcPost-7419925374127702016-bk9h?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEz17e8BcgHJToyW8kTNErDd7IZgXlXNu7A",
            color: "#FF4081",
            icon: "Palette",
            year: "2024",
            technologies: ["React Native", "Next.js", "Vibe Coding", "Design System"],

            problem: "Art platforms often clutter the view with buttons, metadata, and ads, distracting from the artwork itself.",
            research: "Studied museum gallery layouts (white space, minimal labels). Decided to adopt a 'Digital Gallery' approach where UI elements recede until interacted with.",
            userFlow: "Home (Gallery View) -> Tap Art (Immersive View) -> Swipe for Details -> Gestural Navigation.",
            wireframes: "Low-fidelity sketches emphasized negative space and large typographic headers. Navigation was relegated to corners to maximize canvas area.",
            finalUI: "A stark, high-contrast black and white frame that allows the colors of the artwork to pop. Interactions are gesture-based, mimicking handling a physical portfolio.",
            why: "The Brutalist approach removes all noise. It treats the interface as a frame, not a tool, putting the content on a pedestal."
        },
        {
            id: "supply-system",
            title: "Tawreed",
            category: "Information Arch",
            description: "Redefining enterprise software by prioritizing cognitive ease. A supply system that looks as good as it performs.",
            link: "https://www.facebook.com/share/v/1Dg6EmBTXr/",
            color: "#40C4FF",
            icon: "Database",
            year: "2023",
            technologies: ["React", "Data Viz", "UX Research", "PostgreSQL"],

            problem: "Enterprise supply dashboards are notoriously complex, ugly, and induce cognitive overload for operators working long shifts.",
            research: "Interviewed warehouse managers. Found that color-coding and 'glanceability' were more important than raw data density.",
            userFlow: "Dashboard Overview -> Red Alert Filtering -> Item Drill-down -> Quick Action Modal.",
            wireframes: "grid layouts that prioritized status indicators (Green/Red) over text. Shifted complex tables to secondary views.",
            finalUI: "A 'Dark Mode' heavy interface to reduce eye strain. Data is visualized as cards and flowing charts rather than static spreadsheets.",
            why: "By treating B2B software with B2C aesthetic standards, we reduced user error rates and improved daily satisfaction for operators."
        },
        {
            id: "passth",
            title: "Passth",
            category: "Interaction",
            description: "A password manager that builds trust through design. Uses calming colors and clear feedback to make security feel accessible, not scary.",
            link: "#",
            color: "#00E676",
            icon: "Lock",
            year: "2022",
            technologies: ["React", "Interaction Design", "LocalForage", "AES"],

            problem: "Security is scary. Users feel anxious when generating complex passwords or managing keys, fearing they'll lock themselves out.",
            research: "Researched color psychology. Green and soft blues induce calm. Determined that 'Feedback' (confirming actions) reduces anxiety.",
            userFlow: "Master Unlock -> Visual Vault -> Copy Password (Haptic Feedback) -> Auto-Close.",
            wireframes: "Focused on a 'Vault' metaphor but made it look soft, not metallic. rounded corners and friendly typefaces.",
            finalUI: "A serene interface. When a password is secure, the UI glows green. Animations are slow and deliberate to instill confidence.",
            why: "Trust is a design metric. By making the app feel 'secure' through stability and calm aesthetics, usage rates increased."
        },
        {
            id: "nabra-app",
            title: "Nabra App",
            category: "Accessibility",
            description: "Bridging the silence. A mobile app designed with empathy to translate sign language into text, focusing on accessibility first.",
            link: "#",
            color: "#FFEA00",
            icon: "Accessibility",
            year: "2022",
            technologies: ["React Native", "Human-Centered Design", "TensorFlow"],

            problem: "Communication tools for the mute community are often clunky text-to-speech apps that lack the speed and nuance of signing.",
            research: "Studied ASL linguistics. Found that flow matters. The app needs to capture continuous motion, not just static signs.",
            userFlow: "Camera Open -> Sign Detection -> Real-time Text Bubble -> Text-to-Speech Output.",
            wireframes: "Large camera viewport. Minimal text overlay. High contrast buttons for visibility in motion.",
            finalUI: "A vibrant, yellow-accented interface (high visibility). The AI feedback loop is visualized as a sound wave, connecting visual to audio.",
            why: "Accessibility doesn't mean boring. The high-contrast design helps visibility while feeling energetic and empowering."
        },
        {
            id: "21t-studio",
            title: "21t Studio",
            category: "Art Direction",
            description: "The digital home of 21t Studio. A showcase of 'Vibe Coding' in action, merging brutalist art with high-performance web tech.",
            link: "https://21t-studio.vercel.app/",
            color: "#00FF9C",
            icon: "Zap",
            year: "2024",
            technologies: ["Vite", "Three.js", "GSAP", "Creative Dev"],

            problem: "Digital agencies all look the same: generic hero section, 3 grid cards, and a contact form. We needed to stand out.",
            research: "Looked at avant-garde web art and fashion editorials. Decided to break the grid and use 3D typography.",
            userFlow: "Chaotic Landing (Impact) -> Scroll to Order (Grid) -> Interactive Portfolio -> Contact.",
            wireframes: "Experimental layouts using overlapping text and images. No standard navigation bar.",
            finalUI: "A chaotic yet functional masterpiece. Elements float and respond to the cursor using Three.js and GSAP.",
            why: "It filters clients. Those who appreciate the 'Vibe' stay; those who want corporate safety leave. It's a brand filter built into the UI."
        }
    ],
    contact: {
        title: "Get In Touch",
        email: "mohamedta21ak@gmail.com",
        phone: "+201096550164",
        linkedin: "https://www.linkedin.com/in/mo-hassan21ta",
        behance: "https://www.behance.net/mo-hassan21UiUX",
        location: "Minya, Egypt"
    }
};
