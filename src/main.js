  

    /* ============================================================================
       HOPEBRIDGE FOUNDATION, CONTENT
       ----------------------------------------------------------------------------
       Everything written on this site lives in this one object. To swap in the
       real foundation's information later, edit the values here; no markup or
       layout code needs to change.
    
       ========================================================================== */

    const IMG = {
      landscape: "images/Community%20Wellbeing.jpg",
      table: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0zuRA9HkWYCzRelxfxxx9pnwlmbi8AJDx49GOOghhg_RS8ydvG79uXwKbLPdgCy-Z8C6JH7062SRq_Lb8uih1srBCy7IXMroS5uJV9AfHBbA1ssJeYGMoEGGy-5kxVtZzZ04Ob3Qr-D4GPWxdcieLt2oD4tXJpIpWXkAGY_qURXNZMtpj_U7htUqFPURKgBlpI2HLRAhTd_c0g2U0ssnJHMgXMG8lnSVJqhoEookHT3gJjPTdbe31",
      classroom: "images/Education%20and%20Opportunity.jpg",
      clinic: "images/Health%20and%20Dignity.avif",
      workshop: "images/youth%20developlment.jpg",
      cleanStart: "images/clean%20start.jpg",
      bridgeToLearning: "images/Bridge%20to%20Learning%20Initiative.jpg",
      wellAndWhole: "images/Well%20and%20Whole%20Mobile%20Clinics.jpg",
      craftLine: "images/The%20Craft%20Line.jpg",
      storyFromDetroit: "images/A%20story%20from%20Detroit.jpg",
      craftman2: "images/The%20Craft%20Line2.jpg",
      building: "https://lh3.googleusercontent.com/aida-public/AB6AXuByuerxChvZGJ0jT30Z0q92KayFEbTVsYt9rx-GF8yvn7kEmjB7rAo1Ilq8b4dB2ziLeMGGmMEPwcClRNy7Cyc3Q-AEBh7s0lra8auxhu0KakY5oFSBpQFx4IIunFwLE2rc2TWNhYH-eDRFkdYu5CrWbHj7BXXQaCoo6ApqU8Qi09YKueyuwuAlw7fn8tlKqw8VYUx0_xME-lQyG_8x7mBA-Ky8G63voVpXPdRc9DnqRKGTPLGkNvPs",
      dana: "images/Dana%20Whifield.jpg",
      marcus: "images/Marcus%20Reyes.jpg",
      priya: "images/Priya%20Raman.jpg"
    };

    /* The four hero photographs, pre-encoded by build_heroes.py into AVIF, WebP and
       JPEG at every width the source actually supports. The browser downloads exactly
       one file per hero: the smallest format it understands at the width it needs.
       `widths` never exceeds the source width, so the srcset never promises detail
       the original does not have. */
    const HERO = {
      home:   { w: 735, h: 490, widths: [640, 735] },
      work:   { w: 1000, h: 625, widths: [640, 1000] },
      impact: { w: 1200, h: 675, widths: [640, 1024, 1200] },
      about:  { w: 1920, h: 1279, widths: [640, 1024, 1536] }
    };

    function heroPicture(slot) {
      const m = HERO[slot];
      const srcset = (ext) => m.widths
        .map((w) => "images/hero/hero-" + slot + "-" + w + "." + ext + " " + w + "w")
        .join(", ");
      const widest = m.widths[m.widths.length - 1];
      return '<picture>' +
        '<source type="image/avif" srcset="' + srcset("avif") + '" sizes="100vw"/>' +
        '<source type="image/webp" srcset="' + srcset("webp") + '" sizes="100vw"/>' +
        '<img src="images/hero/hero-' + slot + '-' + widest + '.jpg" srcset="' + srcset("jpg") + '" ' +
        'sizes="100vw" width="' + m.w + '" height="' + m.h + '" alt="" ' +
        'fetchpriority="high" decoding="async" class="w-full h-full object-cover hero-img"/>' +
        '</picture>';
    }

    const SITE = {

      /* ---------- IDENTITY ---------- */
      name: "HopeBridge Foundation",
      tagline: "Connecting compassion with opportunity.",
      founded: 2018,
      years: 8,

      mission: "To connect people facing hard circumstances with the practical support, skills and dignity they need to build the life they choose for themselves.",
      vision: "Communities across America where the circumstances a person is born into no longer decide what is possible for them.",

      /* ---------- HEADLINE FIGURES (used site-wide) ---------- */
      stats: [
        { value: 12500, suffix: "+", label: "People supported", icon: "groups" },
        { value: 68, suffix: "", label: "Community initiatives", icon: "volunteer_activism" },
        { value: 24, suffix: "", label: "Communities reached", icon: "location_on" },
        { value: 1850, suffix: "+", label: "Young people supported", icon: "school" }
      ],

      statsSecondary: [
        { value: 8, suffix: "", label: "Years of work", icon: "calendar_month" },
        { value: 6, suffix: "", label: "States", icon: "map" },
        { value: 87, suffix: "%", label: "Spent on programs", icon: "donut_small" },
        { value: 340, suffix: "", label: "Active volunteers", icon: "diversity_3" },
        { value: 9, suffix: "", label: "Partner organizations", icon: "handshake" },
        { value: 12.4, prefix: "$", suffix: "M", decimals: 1, label: "Invested since 2018", icon: "payments" }
      ],

      /* ---------- ORIGIN ---------- */
      founder: {
        name: "Dana Whitfield",
        role: "Founder & Executive Director",
        image: IMG.dana,
        quote: "The distance between what a student could do and what their circumstances allow is usually small. It is just unbridged.",
        story: [
          "In 2018, Dana Whitfield had been teaching chemistry for eleven years at a high school on the west side of Columbus, Ohio. She kept a list in the back of her lesson planner of students who had stopped showing up.",
          "The reasons on that list were rarely dramatic. A ninety-eight dollar exam fee. A bus pass nobody could replace. A winter coat that no longer fit. A parent in the hospital and a younger sibling who needed watching. Capable students, a semester from graduating, walking away over sums a household could not spare that month.",
          "In March of that year, six teachers put $4,200 of their own money into an envelope and covered fees and materials for forty of those students for a single semester. Thirty-seven finished the year. Two of them are in college now.",
          "That envelope is the whole idea. HopeBridge exists because compassion and opportunity are usually both present in a community already, sitting on opposite banks with nothing running between them. The work is the bridge."
        ]
      },

      values: [
        {
          icon: "diversity_1", title: "Dignity first",
          body: "We work with people, not on them. Nobody is asked to perform hardship to qualify for help, and nobody appears in our photographs without knowing exactly why they are there."
        },
        {
          icon: "hearing", title: "Listen, then build",
          body: "The community describes the problem before we design anything. Our first visit to a new place carries no budget and no proposal, only questions and time."
        },
        {
          icon: "history_toggle_off", title: "Stay long enough to matter",
          body: "Three years is our minimum commitment anywhere. Every program is written with an exit in mind, so that what we build keeps working after we have gone."
        },
        {
          icon: "receipt_long", title: "Show the ledger",
          body: "We publish what we spent, what worked and what did not. Our 2024 report gives four pages to a well system that failed in West Virginia, and to what the failure taught us."
        }
      ],

      timeline: [
        { year: "2018", title: "An envelope in a faculty room", body: "Six teachers in Columbus pool $4,200 to keep forty students in school for one semester. Thirty-seven finish the year." },
        { year: "2019", title: "HopeBridge is incorporated", body: "501(c)(3) status is granted and the Bridge to Learning Initiative formalizes across three Columbus schools. The foundation hires its first full-time staff member." },
        { year: "2020", title: "A volunteer network forms", body: "Groceries and prescriptions reach 3,000 households through the pandemic. The 200 neighbors who carried them become our permanent volunteer base." },
        { year: "2021", title: "Clean Start begins", body: "Water and septic work opens in Mingo County, West Virginia, and after an early well system fails, the committee-first rule is written into policy." },
        { year: "2022", title: "Two programs at once", body: "Well & Whole mobile clinics run their first circuit in eastern Kentucky. The Craft Line opens a shared shop in Detroit." },
        { year: "2023", title: "Opening the books", body: "Second Chair digital hubs open in Doña Ana County, New Mexico. Our first independent audit is completed and shared unedited with anyone who asks." },
        { year: "2024", title: "Ten thousand people", body: "Sit With Us begins in the Mississippi Delta. HopeBridge passes 10,000 people supported since founding." },
        { year: "2025", title: "Handing over", body: "Program spending crosses $12 million. The Columbus family fund is transferred to the parent-teacher association to run without us." },
        { year: "2026", title: "Where we are now", body: "Six flagship programs and 62 smaller community initiatives, across 24 communities in six states." }
      ],

      leadership: [
        {
          name: "Dana Whitfield", role: "Founder & Executive Director", image: IMG.dana,
          bio: "Taught chemistry for eleven years in Columbus before founding HopeBridge. Still runs one Saturday tutoring circle a month, mostly because she is poor at delegating that particular thing."
        },
        {
          name: "Marcus Reyes", role: "Director of Programs", image: IMG.marcus,
          bio: "Fifteen years in rural water and sanitation across Appalachia. Wrote the certification-first policy that every piece of HopeBridge infrastructure now follows."
        },
        {
          name: "Priya Raman", role: "Head of Community Partnerships", image: IMG.priya,
          bio: "A former county community liaison in Franklin County, Ohio. Leads the listening visits that open every new HopeBridge program, and decides when we are not the right organization for a job."
        }
      ],

      board: [
        { name: "Dr. Ellis Beaumont", role: "Chair, retired public health physician" },
        { name: "Karen Osei", role: "CPA, chairs the audit committee" },
        { name: "Ray Kowalski", role: "Civil engineer, water systems" },
        { name: "Denise Harper", role: "Community trustee, Columbus" },
        { name: "Sam Whitaker", role: "Retired high school principal" }
      ],

      partners: [
        "Cumberland Community Health Trust",
        "Buckeye Education Fund",
        "Tug Fork Community Alliance",
        "Detroit Trades Guild",
        "Delta Aging Coalition",
        "Mesilla Valley Community Development",
        "Northline Solar",
        "Riverstone Impact Fund",
        "Bassett & Cole, pro bono counsel"
      ],

      recognition: [
        { year: "2024", body: "Transparency in Reporting commendation, National Nonprofit Accountability Council" },
        { year: "2023", body: "Community Program of the Year, finalist, Midwest Philanthropy Forum" },
        { year: "2022", body: "Education Partnership Award, Ohio Department of Education" }
      ],

      /* ---------- FOUR AREAS OF FOCUS ---------- */
      focus: [
        {
          slug: "education",
          icon: "menu_book",
          title: "Education & Opportunity",
          image: IMG.classroom,
          lede: "A student rarely leaves school because they stopped caring. They leave over a fee, a bus pass, or an afternoon that had to be spent somewhere else.",
          challenge: "Across the schools we partner with, roughly one student in four was chronically absent, missing more than eighteen days a year. The causes were small and specific: testing fees due mid-semester, a bus pass nobody could replace, a parent in the hospital, a younger sibling who needed watching.",
          approach: "We work through schools that already exist rather than building parallel ones. Supply kits, a family fund held and decided on by the parent-teacher association, trained community mentors who notice an absence in week one instead of week six, and Saturday tutoring circles led by juniors and seniors.",
          metric: "2,140 students supported across nine partner schools"
        },
        {
          slug: "wellbeing",
          icon: "water_drop",
          title: "Community Wellbeing",
          image: IMG.landscape,
          lede: "Water, sanitation and shared space. The unglamorous plumbing of a decent life.",
          challenge: "Well systems get installed, and then they fail. In counties where the nearest licensed operator is ninety minutes away and no money was set aside for parts, a new system can be offline again inside two years, and trust is harder to restore than a pump.",
          approach: "We train and hand over before we build. A local water committee is formed and state-certified before the rig arrives, and a three-year parts fund sits in the community's own account rather than ours. Septic replacement and street lighting follow the same rule.",
          metric: "4,300 people now on a tested, reliable water supply"
        },
        {
          slug: "health",
          icon: "ecg_heart",
          title: "Health & Dignity",
          image: IMG.clinic,
          lede: "Care that arrives, rather than care that waits to be reached.",
          challenge: "Two health centers serve roughly forty thousand people across four Appalachian counties, and the nearest labor and delivery unit closed in 2019. For a woman in her third trimester, a fifty-mile round trip is not an inconvenience, it is the reason the visit does not happen.",
          approach: "A monthly circuit through eleven sites, offering prenatal checks, childhood immunizations, blood pressure monitoring and vision screening. Between visits, community health workers who live in each community keep the roster and follow up on anyone the clinic flagged.",
          metric: "6,800 visits delivered on the mobile circuit"
        },
        {
          slug: "youth",
          icon: "handyman",
          title: "Youth & Economic Empowerment",
          image: IMG.workshop,
          lede: "Skills without tools is a certificate in a drawer.",
          challenge: "Young people finish training with genuine ability and no way to use it. No bench, no machine, no first customer, and no habit of writing down what came in and what went out.",
          approach: "Apprenticeships that end the way they should: a tool grant, a place in a shared shop, six months of bookkeeping support, and an introduction to contractors who actually place orders. For remote work, a laptop loan program and a transportation stipend so attendance is not a wealth test.",
          metric: "1,850 young people supported through training and apprenticeships"
        }
      ],

      /* ---------- HOW WE WORK (a real sequence, so it is numbered) ---------- */
      method: [
        { n: "01", title: "Listen", body: "Two to three weeks in a community with no budget attached. We meet the people already doing the work, teachers, clinic staff, shop owners, pastors and coaches, and ask what is actually in the way." },
        { n: "02", title: "Design together", body: "A local working group co-writes the plan and sets the targets. If the group cannot agree that the plan will hold after we leave, we do not fund it." },
        { n: "03", title: "Build and train", body: "Training comes before construction, not after. Committees, mentors and volunteers are in place and paid to learn before the first delivery arrives." },
        { n: "04", title: "Measure honestly", body: "Every program reports quarterly against the numbers the community chose. Where a target is missed, the report says so and says why." },
        { n: "05", title: "Hand over", body: "A written exit from day one. Assets, funds and decisions transfer to a local body, and we stay on call for two years afterward." }
      ],

      regions: [
        { state: "Ohio", communities: 7, note: "Hilltop, Linden and five neighborhoods across Franklin County" },
        { state: "West Virginia", communities: 5, note: "Five communities along the Tug Fork in Mingo County" },
        { state: "Kentucky", communities: 5, note: "Perry and Knott Counties, on the mobile clinic circuit" },
        { state: "Michigan", communities: 3, note: "Osborn, Brightmoor and Southwest Detroit" },
        { state: "New Mexico", communities: 2, note: "Two colonias outside Las Cruces, Doña Ana County" },
        { state: "Mississippi", communities: 2, note: "Greenville and Clarksdale, in the Delta" }
      ],

      /* ---------- PROJECTS ---------- */
      projects: [
        {
          id: "bridge-to-learning",
          name: "Bridge to Learning Initiative",
          location: "Hilltop & Linden, Columbus, Ohio",
          focus: "Education & Opportunity",
          since: "Since 2019",
          image: IMG.bridgeToLearning,
          summary: "Keeping students in school by removing the small, specific costs that push them out.",
          problem: "At three partner middle and high schools on the west side of Columbus, the attendance data told a consistent story: students disappeared around the weeks testing fees came due, and some never came back. Teachers knew the names. What nobody had was a fund small enough to move in a day and local enough to be trusted.",
          response: [
            "A semester family fund held by each school's parent-teacher association, with the PTA deciding who receives it",
            "Supply kits, notebooks, a calculator, a laptop charger, a winter coat where needed, issued at the start of each semester",
            "Sixty community mentors trained to spot an absence in its first week and reach the family",
            "Saturday tutoring circles run by juniors and seniors, now operating in all nine partner schools"
          ],
          results: [
            { value: "2,140", label: "Students supported" },
            { value: "71% → 92%", label: "Average daily attendance" },
            { value: "96%", label: "Promoted to the next grade" },
            { value: "9", label: "Partner schools" }
          ],
          story: {
            name: "Maya, 13",
            text: "Maya missed most of a semester when her mother was hospitalized and the family could not cover her testing fees. A mentor from her own neighborhood stopped by twice before Maya agreed to come back. The fee was paid from the PTA fund; she took her exams three weeks late, in a quiet room, and passed. She is in eighth grade now and helps run the Saturday circle for the younger students."
          }
        },
        {
          id: "clean-start",
          name: "Clean Start",
          location: "Mingo County, West Virginia",
          focus: "Community Wellbeing",
          since: "Since 2021",
          image: IMG.cleanStart,
          summary: "Well systems and septic replacement built around the people who will maintain them.",
          problem: "Half the households along the Tug Fork were hauling water or drinking from wells that tested positive for iron, manganese and coliform. Two systems installed by other groups in the previous decade had failed within three years, not for want of engineering, but because nobody nearby was certified to service them and no money existed for parts.",
          response: [
            "A twenty-two person water committee formed, trained and state-certified before any drilling began",
            "Six well systems and fourteen septic replacements across five communities",
            "A three-year parts fund held in the community's own account, not the foundation's",
            "Quarterly water testing with results posted publicly at each site"
          ],
          results: [
            { value: "4,300", label: "People on a tested supply" },
            { value: "6", label: "Well systems" },
            { value: "14", label: "Septic replacements" },
            { value: "22", label: "Certified committee members" }
          ],
          story: {
            name: "The committee",
            text: "The county health department logged roughly half as many waterborne illness reports in the eighteen months after the systems came online as in the eighteen months before. When a pump failed in the second year, the committee had it running again in four days using the parts fund, without contacting us at all. That was the outcome we were actually aiming for."
          }
        },
        {
          id: "well-and-whole",
          name: "Well & Whole Mobile Clinics",
          location: "Perry & Knott Counties, Kentucky",
          focus: "Health & Dignity",
          since: "Since 2022",
          image: IMG.wellAndWhole,
          summary: "A monthly clinic circuit through eleven sites that the road system had quietly excluded.",
          problem: "Two health centers serve about forty thousand people across four counties, and the nearest labor and delivery unit closed in 2019. Prenatal attendance in the outlying communities was low, for a reason that had nothing to do with willingness: the trip cost a day's pay and, through the winter, was sometimes impossible.",
          response: [
            "A monthly circuit reaching eleven sites, run with Cumberland Community Health Trust",
            "Prenatal care, childhood immunizations, blood pressure monitoring and vision screening at every stop",
            "Thirty-five community health workers trained and kept on a small stipend between visits",
            "A referral fund covering gas and lodging for anyone who needs the hospital in Hazard"
          ],
          results: [
            { value: "6,800", label: "Visits delivered" },
            { value: "2.3×", label: "Rise in prenatal attendance" },
            { value: "1,200", label: "Children fully immunized" },
            { value: "11", label: "Sites on the circuit" }
          ],
          story: {
            name: "Tara, 31",
            text: "Tara had started the fifty-mile round trip to the health center twice in two previous pregnancies and turned back both times. At the first mobile visit to her community she was found to be anemic and started on treatment that week. She made four prenatal appointments without leaving home, delivered safely, and now keeps the roster for her community as one of the thirty-five community health workers."
          }
        },
        {
          id: "craft-line",
          name: "The Craft Line",
          location: "Osborn & Brightmoor, Detroit, Michigan",
          focus: "Youth & Economic Empowerment",
          since: "Since 2022",
          image: IMG.craftman2,
          summary: "An apprenticeship that ends with tools, a bench and a first contract, not just a certificate.",
          problem: "Detroit has no shortage of trades training. What it had was a steady supply of graduates with real ability and nothing to practice on. Without a machine or a workbench, a trained finish carpenter becomes a warehouse temp, and the training quietly evaporates within a year.",
          response: [
            "Six-month apprenticeships in cabinetry, welding and upholstery alongside working master tradespeople",
            "A tool grant on completion, plus twelve months of shared shop access",
            "Bookkeeping, bidding and pricing sessions every other week for the first six months",
            "Standing referral arrangements with four contractors and two furniture retailers"
          ],
          results: [
            { value: "410", label: "Apprentices graduated" },
            { value: "78%", label: "Earning independently at 12 months" },
            { value: "96", label: "Registered businesses" },
            { value: "31", label: "Now employing someone else" }
          ],
          story: {
            name: "Andre, 24",
            text: "Andre finished a cabinetry program in 2021 and spent the following year on a warehouse floor, because a starter set of tools cost more than he could put aside. The Craft Line gave him bench space, a tool grant and, he insists, one thing that mattered more: the ledger he now keeps for every job. He has his own shop in Osborn, two apprentices, and a standing contract with a builder in Ferndale."
          }
        },
        {
          id: "second-chair",
          name: "Second Chair Digital Hubs",
          location: "Doña Ana County, New Mexico",
          focus: "Youth & Economic Empowerment",
          since: "Since 2023",
          image: "images/Second%20Chair%20Digital%20Hubs.jpg",
          summary: "Neighborhood hubs where remote work stops being something other people do.",
          problem: "Remote work is genuinely open to young people in the colonias outside Las Cruces, provided they own a laptop, have reliable broadband and can afford the drive to somewhere with both. Those three conditions quietly exclude most of the people the opportunity would help most.",
          response: [
            "Three neighborhood hubs with fiber and backup power, open six days a week",
            "A sixteen-week curriculum in data entry, customer support, bookkeeping and design fundamentals",
            "A laptop loan program repaid out of earnings over eighteen months, interest free",
            "A transportation stipend during training, and portfolio reviews with working freelancers"
          ],
          results: [
            { value: "620", label: "Trainees enrolled" },
            { value: "71%", label: "In paid work within 6 months" },
            { value: "184", label: "Laptops on loan" },
            { value: "3", label: "Hubs open" }
          ],
          story: {
            name: "The waiting list",
            text: "The Anthony hub was built for forty trainees a cohort and had ninety-one applicants for its second intake. Rather than expand the room, we asked the first cohort to teach the fundamentals module themselves, paid, on Saturdays. Eleven of them did. Six now teach for other organizations as well."
          }
        },
        {
          id: "sit-with-us",
          name: "Sit With Us",
          location: "Greenville & Clarksdale, Mississippi",
          focus: "Health & Dignity",
          since: "Since 2024",
          image: "images/Sit%20With%20Us.jpg",
          summary: "Weekly company, prescription support and a monthly lunch for older neighbors living alone.",
          problem: "Older adults living alone in the Delta were missing prescription refills, not through cost alone but through isolation: nobody was tracking the calendar, nobody noticed a missed week, and nobody was making the trip to the pharmacy. Loneliness turns a manageable condition into an emergency room visit.",
          response: [
            "One hundred and eighty trained volunteer visitors making weekly home visits",
            "A shared medication calendar and pharmacy runs organized by neighborhood",
            "A monthly community lunch in four neighborhoods, cooked and hosted locally",
            "Cataract and blood pressure screening, with surgery referrals funded through partners"
          ],
          results: [
            { value: "740", label: "Older adults enrolled" },
            { value: "180", label: "Volunteer visitors" },
            { value: "118", label: "Cataract surgeries referred" },
            { value: "4", label: "Monthly lunch sites" }
          ],
          story: {
            name: "Miss Freda, 78",
            text: "Miss Freda had not been past her own porch in nine months when a volunteer first knocked. It took six visits before she agreed to come to the lunch, and she now arrives early to help set out the chairs. Her blood pressure prescription is refilled on the same Tuesday every month. She describes the change, accurately, as having somewhere to be."
          }
        }
      ],

      /* ---------- SUCCESS STORIES ---------- */
      stories: [
        {
          name: "Maya",
          age: "13",
          place: "Hilltop, Columbus, Ohio",
          program: "Bridge to Learning Initiative",
          image: IMG.bridgeToLearning,
          challenge: "Her mother's hospital stay put the family's testing fees out of reach, and Maya spent most of a semester watching her younger brother instead of sitting in class.",
          support: "A trained community mentor from her own neighborhood stopped by twice. The fees were covered by the parent-teacher association's family fund, and she received a supply kit and a place in the Saturday tutoring circle.",
          outcome: "She took her exams three weeks late and passed. She is in eighth grade now, plans to study pharmacy, and helps run the tutoring circle for younger students.",
          quote: "The mentor did not ask me why I stopped coming. She asked what would need to be true for me to come back."
        },
        {
          name: "Andre",
          age: "24",
          place: "Osborn, Detroit, Michigan",
          program: "The Craft Line",
          image: IMG.storyFromDetroit,
          challenge: "He completed a cabinetry program and then spent a year on a warehouse floor, because a starter set of tools cost more than he could put aside.",
          support: "A place on the Craft Line apprenticeship, a tool grant on completion, twelve months of shared shop access, and sessions every other week on bidding and bookkeeping.",
          outcome: "Andre runs his own shop with two apprentices and holds a standing contract with a builder in Ferndale. He was earning nothing from cabinetry in 2022.",
          quote: "Everyone talks about the tools. The thing that changed my work was learning to write down what a cabinet actually costs me to make."
        },
        {
          name: "Tara",
          age: "31",
          place: "Perry County, Kentucky",
          program: "Well & Whole Mobile Clinics",
          image: IMG.wellAndWhole,
          challenge: "The nearest health center was a fifty-mile round trip. In two previous pregnancies she had started the drive and turned back.",
          support: "The mobile circuit reached her community monthly. Anemia was picked up at her first visit and treated, and she completed four prenatal appointments close to home.",
          outcome: "She delivered safely and is now one of thirty-five community health workers, keeping the roster for her community between clinic visits.",
          quote: "I did not need convincing that the checkups mattered. I needed them somewhere I could actually get to."
        }
      ],

      /* ---------- TESTIMONIALS ---------- */
      homeTestimonials: [
        {
          quote: "They did not arrive with a plan. They sat through two PTA meetings asking what was actually stopping our kids from finishing the year. That is not how it usually goes.",
          name: "Denise Harper", role: "PTA Chair, Hilltop, Columbus"
        },
        {
          quote: "We have had water projects before. They broke, and no one knew who to call. This time the committee was certified before the rig showed up, and the parts fund is in our name.",
          name: "Roy Adkins", role: "Water Committee Secretary, Mingo County, West Virginia"
        },
        {
          quote: "HopeBridge gave us the tools to advocate for ourselves. It’s not just about receiving help; it’s about building the capacity to thrive independently.",
          name: "Sarah Jenkins", role: "Community Leader, Appalachia"
        }
      ],

      impactTestimonials: [
        {
          quote: "As a partner, what I value is that they send us the numbers that look bad too. It is what makes the good ones worth reading.",
          name: "Dr. Nora Whitlock", role: "Medical Director, Cumberland Community Health Trust"
        },
        {
          quote: "The transparency and dedication to measurable outcomes sets HopeBridge apart. We’ve seen a 40% increase in youth engagement since our partnership began.",
          name: "Marcus Thorne", role: "Director of Programs, State Youth Initiative"
        },
        {
          quote: "Serving on the committee has shown me firsthand how every dollar is maximized. The focus is always on long-term, sustainable impact over quick fixes.",
          name: "Elena Rostova", role: "Advisory Committee Member"
        }
      ],

      /* ---------- DONATIONS ---------- */
      donate: {
        currency: "$",
        designations: [
          { value: "most-needed", label: "Where it is needed most" },
          { value: "education", label: "Education & Opportunity" },
          { value: "wellbeing", label: "Community Wellbeing" },
          { value: "health", label: "Health & Dignity" },
          { value: "youth", label: "Youth & Economic Empowerment" }
        ],
        presets: {
          once: [
            { amount: 25, note: "A full set of school supplies for one student for a semester." },
            { amount: 50, note: "Testing fees for two students through the Columbus family fund." },
            { amount: 100, note: "A month of parts and servicing for one community well system." },
            { amount: 250, note: "A full round of prenatal visits for six women on the Well & Whole circuit." }
          ],
          monthly: [
            { amount: 10, note: "Keeps one student in notebooks, pens and bus fare all year." },
            { amount: 25, note: "A weekly home visit for one older neighbor in the Sit With Us program." },
            { amount: 50, note: "A seat in a Second Chair digital cohort, month by month." },
            { amount: 100, note: "A share of the mobile clinic's fuel and medical supplies every month." }
          ]
        },
        allocation: [
          { label: "Programs and communities", pct: 87 },
          { label: "Operations and staff", pct: 9 },
          { label: "Fundraising", pct: 4 }
        ]
      },

      /* ---------- CREDENTIALS ----------
         The verifiable facts behind the donate-page ledger. A row with an `href`
         renders as a link: point it at a real PDF once the documents are hosted
         and change `value` to drop the "on request" wording. `mono` is for values
         that read as reference numbers rather than prose. */
      credentials: [
        { label: "Legal status", value: "501(c)(3) public charity" },
        { label: "Tax ID (EIN)", value: "00-0000000", mono: true },
        { label: "Incorporated", value: "2019, State of Ohio" },
        { label: "Independently audited", value: "Every year since 2023" },
        { label: "Form 990", value: "FY2025, on request", href: "#/contact" },
        { label: "Audited financials", value: "FY2025, on request", href: "#/contact" }
      ],

      /* ---------- FAQ ---------- */
      faq: [
        {
          q: "How can I donate?",
          a: "Through the donation form on this site, by Crypto Currency or bank transfer. You choose the amount, decide whether it is one-time or monthly, and can direct it to a specific area of our work. A tax receipt reaches you by email within a few minutes."
        },
        {
          q: "Is my donation tax-deductible?",
          a: "Yes. HopeBridge is a registered 501(c)(3) nonprofit, so your gift is deductible to the fullest extent allowed by law. Every receipt carries our EIN and a statement of goods or services received, which is what your accountant will want to see."
        },
        {
          q: "Can I choose my own donation amount?",
          a: "Yes. We believe you should be able to donate any amount you wish personally. Enter any amount you like in the field, every dollar makes a difference, and small regular gifts are the steadiest thing we receive."
        },
        {
          q: "Can I donate monthly?",
          a: "Yes, and it helps more than the equivalent one-time gift. Monthly giving lets us commit to a three-year program knowing roughly what will be there in year two. You can change or cancel a monthly gift at any time by emailing us."
        },
        {
          q: "Where does my donation go?",
          a: "Eighty-seven cents of every dollar goes directly to programs; nine cents to operations and staff, and four to fundraising. Our audited financials and Form 990 are prepared every year and sent in full to anyone who asks, including the pages on the projects that did not work."
        },
        {
          q: "Can I support a specific cause?",
          a: "You can direct your gift to Education & Opportunity, Community Wellbeing, Health & Dignity, or Youth & Economic Empowerment. If you would rather we decide, choose “Where it is needed most”, it is the most useful option for us, and we will still tell you where it went."
        },
        {
          q: "Can I volunteer?",
          a: "Yes. Most of our 340 volunteers live in the communities where they work, but we also need remote help with design, translation, data and grant writing. Tell us where you are and how much time you have, and we will be honest about whether we can use it well."
        },
        {
          q: "How can organizations partner with HopeBridge?",
          a: "We work with health centers, school districts, trade guilds, suppliers and funders, and we accept corporate matching gifts and grants from donor-advised funds. Write to our partnerships team with what you do and what you hope to change; we reply within 2 business days, including when the answer is that we are not the right fit."
        }
      ],

      /* ---------- CONTACT ---------- */
      contact: {
        email: "hopebridgefoundation018@gmail.com",
        emails: [
          { label: "General inquiries", value: "hopebridgefoundation018@gmail.com" }
        ],
        phone: "(614) 555-0142",
        phoneHref: "+16145550142",
        offices: [
          { label: "Headquarters", lines: ["1400 Bridgeway Avenue, Suite 210", "Columbus, OH 43215"] },
          { label: "Field office", lines: ["118 Second Street", "Williamson, WV 25661"] }
        ],
        reasons: [
          { value: "general", label: "General inquiry" },
          { value: "volunteer", label: "I would like to volunteer" },
          { value: "partnership", label: "Partnership or collaboration" },
          { value: "donation", label: "Help with a donation" },
          { value: "media", label: "Press and media" },
          { value: "careers", label: "Careers" }
        ]
      }
    };
    /* ============================================================================
       SHARED UI HELPERS
       ========================================================================== */

    const esc = (s) => String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");

    const money = (n) => "$" + Number(n).toLocaleString("en-US");

    /* Image with a built-in fallback wrapper (see .ph / .ph--failed in CSS) */
    function ph(src, alt, ratioCls, extra) {
      return '<div class="ph ' + (ratioCls || "aspect-[4/3]") + " " + (extra || "") + '">' +
        '<img src="' + src + '" alt="' + esc(alt) + '" loading="lazy" decoding="async"/></div>';
    }

    function eyebrow(text, cls) {
      return '<p class="eyebrow ' + (cls || "") + '">' + esc(text) + "</p>";
    }

    function heroEyebrow(text) {
      return '<p class="eyebrow eyebrow--chip mb-7">' + esc(text) + "</p>";
    }

    /* One card per figure, all the same size. The first used to span two columns
       and two rows and set its number at 56px, which made the strip read as a
       feature panel rather than a row of statistics. */
    function statCell(s) {
      return '<div class="stat-card">' +
        (s.icon ? '<span class="stat-card__icon material-symbols-outlined" aria-hidden="true">' + esc(s.icon) + "</span>" : "") +
        '<div class="stat-card__value font-numeric" ' +
        'data-count="' + s.value + '" data-prefix="' + (s.prefix || "") + '" data-suffix="' + (s.suffix || "") + '" data-decimals="' + (s.decimals || 0) + '">' +
        (s.prefix || "") + "0" + (s.suffix || "") + "</div>" +
        '<div class="stat-card__label">' + esc(s.label) + "</div>" +
        '</div>';
    }

    function statsStrip(stats, big) {
      return '<section class="py-24 md:py-32 bg-stone-surface">' +
        '<div class="max-w-container-max mx-auto px-margin-mobile md:px-10 lg:px-margin-desktop">' +
        '<div class="stat-grid reveal">' +
        stats.map((s) => statCell(s)).join("") +
        "</div>" +
        "</div></section>";
    }

    function ctaBand(opts) {
      const o = opts || {};
      return '<section class="bg-primary text-on-primary py-24 md:py-32">' +
        '<div class="max-w-container-max mx-auto px-margin-mobile md:px-10 lg:px-margin-desktop">' +
        '<div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end reveal">' +
        '<div class="lg:col-span-7">' +
        (o.eyebrow === false || o.eyebrow === "" ? "" : '<p class="eyebrow eyebrow--plain text-secondary-fixed-dim mb-6">' + esc(o.eyebrow || "Support the work") + "</p>") +
        '<h2 class="text-display-lg-m md:text-display-lg text-balance mb-6">' +
        esc(o.title || "Be part of the bridge.") + "</h2>" +
        '<p class="text-body-lg text-primary-fixed-dim max-w-xl text-pretty">' +
        esc(o.body || "Every program we run was paid for by people who decided that a small, steady contribution was worth more than a large intention.") + "</p>" +
        "</div>" +
        '<div class="lg:col-span-5 flex flex-col items-start sm:flex-row lg:justify-end gap-4">' +
        '<a href="#/donate" data-link class="cta-pill bg-secondary-container text-primary border border-transparent px-6 lg:px-9 py-4 text-label-caps-sm lg:text-label-caps uppercase text-center btn-lift active:scale-[0.98] transition-all rounded-full">Donate now</a>' +
        (o.hideOtherWays ? "" : '<a href="#/contact" data-link class="cta-pill btn-ghost-dark border border-primary-fixed-dim text-primary-fixed px-6 lg:px-9 py-4 text-label-caps-sm lg:text-label-caps uppercase text-center active:scale-[0.98] transition-all rounded-full">Other ways to help</a>') +
        "</div>" +
        "</div>" +
        "</div></section>";
    }

    function testimonialSection(title, data) {
      const testimonials = data || SITE.homeTestimonials;
      return '<section class="py-24 md:py-32 bg-surface-container-low border-y border-border-subtle">' +
        '<div class="max-w-container-max mx-auto px-margin-mobile md:px-10 lg:px-margin-desktop">' +
        '<div class="max-w-2xl mb-16 reveal">' +
        '<h2 class="text-headline-lg-m md:text-headline-lg text-primary mt-6 text-balance">' +
        esc(title || "What the communities we work with say") + "</h2>" +
        "</div>" +
        '<div class="grid grid-cols-1 md:grid-cols-3 gap-x-gutter gap-y-14">' +
        testimonials.map((t, i) =>
          '<figure class="reveal" style="transition-delay:' + i * 90 + 'ms">' +
          '<svg viewBox="0 0 28 20" class="w-7 h-5 mb-6 text-secondary" fill="currentColor" aria-hidden="true">' +
          '<path d="M11.6 0v6.6c-2 .3-3.4 1-4.2 2-.8 1-1.2 2.5-1.2 4.4h5.4V20H0v-6C0 6.6 3.9 1.9 11.6 0Zm16.4 0v6.6c-2 .3-3.4 1-4.2 2-.8 1-1.2 2.5-1.2 4.4H28V20H16.4v-6C16.4 6.6 20.3 1.9 28 0Z"/></svg>' +
          '<blockquote class="text-quote-m md:text-quote text-primary mb-6 text-pretty">' + esc(t.quote) + "</blockquote>" +
          '<figcaption class="border-t border-border-subtle pt-4">' +
          '<div class="font-semibold text-on-surface">' + esc(t.name) + "</div>" +
          '<div class="text-body-md text-on-surface-variant">' + esc(t.role) + "</div>" +
          "</figcaption>" +
          "</figure>").join("") +
        "</div>" +
        "</div></section>";
    }

    function faqSection(items, opts) {
      const o = opts || {};
      return '<section id="faq" class="py-24 md:py-32 ' + (o.bg || "bg-surface") + '">' +
        '<div class="max-w-container-max mx-auto px-margin-mobile md:px-10 lg:px-margin-desktop">' +
        '<div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-gutter">' +
        '<div class="lg:col-span-4 reveal">' +
        eyebrow(o.eyebrow || "Questions") +
        '<h2 class="text-headline-lg-m md:text-headline-lg text-primary mt-6 text-balance">' +
        esc(o.title || "Answers to what people ask most") + "</h2>" +
        '<p class="text-body-md text-on-surface-variant mt-6 max-w-sm">Not covered here? ' +
        '<a href="mailto:hopebridgefoundation018@gmail.com" class="text-primary underline underline-offset-4 hover:text-secondary transition-colors">Write to us</a> and a person will reply.</p>' +
        "</div>" +
        '<div class="lg:col-span-7 lg:col-start-6 reveal">' +
        '<div class="border-t border-border-subtle">' +
        items.map((f) =>
          '<details class="faq-item border-b border-border-subtle group">' +
          '<summary class="flex items-start justify-between gap-6 py-6">' +
          '<span class="text-title-lg-m md:text-title-lg text-primary pr-4">' + esc(f.q) + "</span>" +
          '<span class="chev material-symbols-outlined text-secondary shrink-0 mt-1" style="font-size:24px" aria-hidden="true">add</span>' +
          "</summary>" +
          '<div class="pb-7 pr-10 text-body-md text-on-surface-variant max-w-2xl text-pretty">' + esc(f.a) + "</div>" +
          "</details>").join("") +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div></section>";
    }

    function pageHero(o) {
      return '<section class="hero-offset relative bg-stone-surface overflow-hidden">' +
        '<div class="absolute inset-0 ph noise-hero" aria-hidden="true">' +
        heroPicture(o.slot) +
        "</div>" +
        '<div class="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-10 lg:px-margin-desktop pt-12 pb-20 md:pt-16 md:pb-32">' +
        '<div class="max-w-3xl hero-copy">' +
        heroEyebrow(o.eyebrow) +
        '<h1 class="text-display-xl-mobile md:text-display-xl mb-7 text-balance">' + esc(o.title) + "</h1>" +
        '<p class="text-body-lg hero-lede max-w-2xl text-pretty">' + esc(o.body) + "</p>" +
        "</div>" +
        "</div>" +
        "</section>";
    }

    /* ============================================================================
       HOME
       ========================================================================== */
    function pageHome() {
      return (
        /* Hero */
        '<section class="hero-offset hero--photo relative bg-stone-surface overflow-hidden min-h-[100svh] flex items-center">' +
        '<div class="absolute inset-0 ph noise-hero" aria-hidden="true">' +
        heroPicture("home") +
        "</div>" +
        '<div class="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-10 lg:px-margin-desktop pt-12 pb-24 md:pt-16 md:pb-32">' +
        '<div class="max-w-3xl hero-copy">' +
        heroEyebrow(SITE.name + ", Est. " + SITE.founded) +
        '<h1 class="text-display-xl-mobile md:text-display-xl mb-7 text-balance">Bridging hope, creating lasting change.</h1>' +
        '<p class="text-body-lg hero-lede mb-11 max-w-2xl text-pretty">Compassion and opportunity usually exist in the same community already, sitting on opposite banks with nothing running between them. For eight years we have been building what runs between.</p>' +
        '<div class="flex flex-col items-start sm:flex-row gap-4 mb-10">' +
        '<a href="#/donate" data-link class="cta-pill hero-cta border px-6 lg:px-9 py-4 text-label-caps-sm lg:text-label-caps uppercase text-center active:scale-[0.98] transition-all rounded-full">Donate now</a>' +
        '<a href="#/our-work" data-link class="cta-pill hero-ghost border px-6 lg:px-9 py-4 text-label-caps-sm lg:text-label-caps uppercase text-center active:scale-[0.98] transition-all rounded-full">Discover our work</a>' +
        "</div>" +
        '<div class="hero-proof reveal reveal-delay-2">' +
        '<div class="hero-proof__avatars">' +
        '<img class="rounded-full object-cover" src="' + IMG.dana + '" alt=""/>' +
        '<img class="rounded-full object-cover" src="' + IMG.marcus + '" alt=""/>' +
        '<img class="rounded-full object-cover" src="' + IMG.priya + '" alt=""/>' +
        '</div>' +
        '<span class="hero-proof__rule" aria-hidden="true"></span>' +
        '<p class="hero-proof__text tracking-tight">' +
        '<span class="hero-proof__label">People supported</span> ' +
        '<strong class="hero-proof__figure">' + SITE.stats[0].value.toLocaleString("en-US") + SITE.stats[0].suffix + '</strong>' +
        '</p>' +
        '</div>' +
        "</div>" +
        "</div>" +
        "</section>" +

        /* Why we exist, editorial asymmetry */
        '<section class="py-24 md:py-32 bg-surface">' +
        '<div class="max-w-container-max mx-auto px-margin-mobile md:px-10 lg:px-margin-desktop">' +
        '<div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-gutter">' +
        '<div class="lg:col-span-5 reveal">' +
        '<h2 class="text-headline-lg-m md:text-headline-lg text-primary mt-6 text-balance">Most of what stands between a person and their future is smaller than you think.</h2>' +
        "</div>" +
        '<div class="lg:col-span-6 lg:col-start-7 reveal">' +
        '<p class="text-body-lg text-on-surface-variant mb-6 text-pretty">A ninety-eight dollar exam fee. A well pump with a broken part and nobody nearby certified to fix it. A clinic fifty miles away in February. A trained carpenter with no tools.</p>' +
        '<p class="text-body-md text-on-surface-variant mb-10 text-pretty">These are not intractable problems. They are unattended ones. HopeBridge works in the gap between what a community can already do and the one specific thing it is missing, then trains someone local to hold that thing after we go.</p>' +
        '<figure class="border-l-2 border-secondary pl-7 mb-10">' +
        '<blockquote class="text-quote text-primary text-pretty">' + esc(SITE.founder.quote) + "</blockquote>" +
        '<figcaption class="mt-4 text-body-md text-on-surface-variant">' + esc(SITE.founder.name) + ", " + esc(SITE.founder.role) + "</figcaption>" +
        "</figure>" +
        '<a href="#/about" data-link class="arrow-link">Read our story <span class="material-symbols-outlined">arrow_forward</span></a>' +
        "</div>" +
        "</div>" +
        "</div>" +
        "</section>" +

        /* Focus areas */
        '<section class="py-24 md:py-32 bg-surface-container-low border-y border-border-subtle">' +
        '<div class="max-w-container-max mx-auto px-margin-mobile md:px-10 lg:px-margin-desktop">' +
        '<div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 reveal">' +
        "<div>" +
        '<h2 class="text-headline-lg-m md:text-headline-lg text-primary mt-6 max-w-xl text-balance">Four kinds of work, one way of working.</h2></div>' +
        '<a href="#/our-work" data-link class="arrow-link shrink-0">See how we work <span class="material-symbols-outlined">arrow_forward</span></a>' +
        "</div>" +
        '<div class="grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-16">' +
        SITE.focus.map((f, i) =>
          '<a href="#/our-work#' + f.slug + '" data-link class="group block reveal" style="transition-delay:' + i * 80 + 'ms">' +
          ph(f.image, f.title, "aspect-[16/10] mb-7") +
          '<p class="eyebrow eyebrow--plain mb-3">0' + (i + 1) + ", " + esc(f.title) + "</p>" +
          '<h3 class="text-headline-md-m md:text-headline-md text-primary mb-4 text-pretty group-hover:text-secondary transition-colors">' + esc(f.lede) + "</h3>" +
          '<p class="text-body-md text-on-surface-variant mb-5 max-w-lg text-pretty">' + esc(f.approach.split(". ")[0]) + ".</p>" +
          '<span class="arrow-link">Read more <span class="material-symbols-outlined">arrow_forward</span></span>' +
          "</a>").join("") +
        "</div>" +
        "</div>" +
        "</section>" +

        /* Featured projects */
        '<section class="py-24 md:py-32 bg-surface">' +
        '<div class="max-w-container-max mx-auto px-margin-mobile md:px-10 lg:px-margin-desktop">' +
        '<div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 reveal">' +
        "<div>" +
        '<h2 class="text-headline-lg-m md:text-headline-lg text-primary mt-6 max-w-xl text-balance">Six flagship programs. Sixty-two smaller ones.</h2></div>' +
        '<a href="#/impact" data-link class="arrow-link shrink-0">All projects &amp; impact <span class="material-symbols-outlined">arrow_forward</span></a>' +
        "</div>" +
        '<div class="grid grid-cols-1 md:grid-cols-3 gap-x-gutter gap-y-14">' +
        SITE.projects.slice(0, 3).map((p, i) =>
          '<a href="#/impact#' + p.id + '" data-link class="group block reveal" style="transition-delay:' + i * 80 + 'ms">' +
          ph(p.image, p.name, "aspect-[4/3] mb-6") +
          '<p class="eyebrow eyebrow--plain mb-3">' + esc(p.location) + "</p>" +
          '<h3 class="text-title-lg text-primary mb-3 group-hover:text-secondary transition-colors">' + esc(p.name) + "</h3>" +
          '<p class="text-body-md text-on-surface-variant mb-5 text-pretty">' + esc(p.summary) + "</p>" +
          '<span class="arrow-link">View project <span class="material-symbols-outlined">arrow_forward</span></span>' +
          "</a>").join("") +
        "</div>" +
        "</div>" +
        "</section>" +

        /* Story spotlight */
        '<section class="bg-stone-surface border-y border-border-subtle">' +
        '<div class="grid grid-cols-1 lg:grid-cols-2">' +
        '<div class="ph min-h-[340px] lg:min-h-[620px]"><img src="' + SITE.stories[1].image + '" alt="' + esc(SITE.stories[1].name) + " at work in Detroit" + '" class="w-full h-full object-cover"/></div>' +
        '<div class="flex items-center py-20 md:py-28 px-margin-mobile md:px-16 xl:px-24">' +
        '<div class="max-w-xl reveal">' +
        eyebrow("A story from Detroit") +
        '<h2 class="text-headline-lg-m md:text-headline-lg text-primary mt-6 mb-7 text-balance">' + esc(SITE.stories[1].quote) + "</h2>" +
        '<p class="text-body-md text-on-surface-variant mb-4 text-pretty">' + esc(SITE.stories[1].challenge) + "</p>" +
        '<p class="text-body-md text-on-surface-variant mb-8 text-pretty">' + esc(SITE.stories[1].outcome) + "</p>" +
        '<p class="text-label-caps uppercase text-on-surface-variant mb-8">' + esc(SITE.stories[1].name) + ", " + esc(SITE.stories[1].age) + ", " + esc(SITE.stories[1].program) + "</p>" +
        '<a href="#/impact#stories" data-link class="arrow-link">More stories <span class="material-symbols-outlined">arrow_forward</span></a>' +
        "</div>" +
        "</div>" +
        "</div>" +
        "</section>" +

        testimonialSection(null, SITE.homeTestimonials) +

        ctaBand({
          eyebrow: "",
          title: "Be part of the bridge.",
          body: "Every contribution, no matter the size, makes a difference, your personal support helps us bring lasting opportunity to the communities we serve. Give what feels right for you."
        })
      );
    }

    /* ============================================================================
       ABOUT
       ========================================================================== */
    function pageAbout() {
      return (
        pageHero({
          slot: "about",
          eyebrow: "About HopeBridge",
          title: "The bridge was always the point.",
          body: "HopeBridge Foundation began in 2018 with six teachers, an envelope and forty students who were about to leave school over sums their households could not spare that month. Eight years on, the method has not really changed."
        }) +

        /* Founder story */
        '<section class="py-24 md:py-32 bg-surface">' +
        '<div class="max-w-container-max mx-auto px-margin-mobile md:px-10 lg:px-margin-desktop">' +
        '<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter items-start">' +
        '<div class="lg:col-span-5 reveal">' +
        ph(SITE.founder.image, SITE.founder.name + ", " + SITE.founder.role, "aspect-[4/5]") +
        '<div class="mt-6 border-t border-border-subtle pt-5">' +
        '<div class="text-title-lg text-primary">' + esc(SITE.founder.name) + "</div>" +
        '<div class="text-body-md text-on-surface-variant">' + esc(SITE.founder.role) + "</div>" +
        "</div>" +
        "</div>" +
        '<div class="lg:col-span-6 lg:col-start-7 reveal">' +
        eyebrow("How it started") +
        '<h2 class="text-headline-lg-m md:text-headline-lg text-primary mt-6 mb-8 text-balance">A list in the back of a lesson planner.</h2>' +
        SITE.founder.story.map((p, i) =>
          '<p class="' + (i === 0 ? "text-body-lg" : "text-body-md") + ' text-on-surface-variant mb-5 text-pretty">' + esc(p) + "</p>").join("") +
        '<figure class="border-l-2 border-secondary pl-7 mt-10">' +
        '<blockquote class="text-quote text-primary text-pretty">' + esc(SITE.founder.quote) + "</blockquote>" +
        "</figure>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</section>" +

        /* Mission & Vision */
        '<section class="bg-stone-surface border-y border-border-subtle py-24 md:py-32">' +
        '<div class="max-w-container-max mx-auto px-margin-mobile md:px-10 lg:px-margin-desktop">' +
        '<div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-gutter">' +
        '<div class="reveal">' + '<span class="material-symbols-outlined text-secondary mb-5 block" style="font-size:32px" aria-hidden="true">public</span>' + eyebrow("Mission") +
        '<p class="text-headline-md-m md:text-headline-md text-primary mt-6 text-pretty">' + esc(SITE.mission) + "</p></div>" +
        '<div class="reveal md:border-l md:border-border-subtle md:pl-16">' + '<span class="material-symbols-outlined text-secondary mb-5 block" style="font-size:32px" aria-hidden="true">insights</span>' + eyebrow("Vision") +
        '<p class="text-headline-md-m md:text-headline-md text-primary mt-6 text-pretty">' + esc(SITE.vision) + "</p></div>" +
        "</div>" +
        "</div>" +
        "</section>" +

        /* Values */
        '<section class="py-24 md:py-32 bg-surface">' +
        '<div class="max-w-container-max mx-auto px-margin-mobile md:px-10 lg:px-margin-desktop">' +
        '<div class="max-w-2xl mb-16 reveal">' + eyebrow("Core values") +
        '<h2 class="text-headline-lg-m md:text-headline-lg text-primary mt-6 text-balance">Four rules we have broken and then rewritten.</h2>' +
        '<p class="text-body-md text-on-surface-variant mt-5 text-pretty">Each of these exists because we got something wrong first. They are working rules, not slogans.</p>' +
        "</div>" +
        '<div class="grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-12">' +
        SITE.values.map((v, i) =>
          '<div class="border-t border-border-subtle pt-8 reveal" style="transition-delay:' + i * 80 + 'ms">' +
          '<span class="material-symbols-outlined text-secondary mb-5 block" style="font-size:32px" aria-hidden="true">' + v.icon + "</span>" +
          '<h3 class="text-title-lg text-primary mb-4">' + esc(v.title) + "</h3>" +
          '<p class="text-body-md text-on-surface-variant max-w-md text-pretty">' + esc(v.body) + "</p>" +
          "</div>").join("") +
        "</div>" +
        "</div>" +
        "</section>" +

        /* Timeline, genuine chronology, so dated markers carry information */
        '<section class="py-24 md:py-32 bg-surface-container-low border-y border-border-subtle">' +
        '<div class="max-w-container-max mx-auto px-margin-mobile md:px-10 lg:px-margin-desktop">' +
        '<div class="max-w-2xl mb-16 reveal">' + eyebrow("Eight years") +
        '<h2 class="text-headline-lg-m md:text-headline-lg text-primary mt-6 text-balance">From an envelope to six programs.</h2></div>' +
        '<ol class="border-t border-border-subtle">' +
        SITE.timeline.map((t) =>
          '<li class="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-gutter py-8 border-b border-border-subtle reveal">' +
          '<div class="md:col-span-2 text-headline-md-m md:text-headline-md text-secondary leading-none">' + esc(t.year) + "</div>" +
          '<div class="md:col-span-4"><h3 class="text-title-lg text-primary">' + esc(t.title) + "</h3></div>" +
          '<div class="md:col-span-6"><p class="text-body-md text-on-surface-variant text-pretty">' + esc(t.body) + "</p></div>" +
          "</li>").join("") +
        "</ol>" +
        "</div>" +
        "</section>" +

        /* Leadership */
        '<section class="py-24 md:py-32 bg-surface">' +
        '<div class="max-w-container-max mx-auto px-margin-mobile md:px-10 lg:px-margin-desktop">' +
        '<div class="max-w-2xl mb-16 reveal">' + eyebrow("Our leadership") +
        '<h2 class="text-headline-lg-m md:text-headline-lg text-primary mt-6 text-balance">A small team, most of whom live where we work.</h2></div>' +
        '<div class="grid grid-cols-1 md:grid-cols-3 gap-x-gutter gap-y-14 mb-20">' +
        SITE.leadership.map((l, i) =>
          '<div class="reveal" style="transition-delay:' + i * 80 + 'ms">' +
          ph(l.image, l.name, "aspect-[3/4] mb-6") +
          '<h3 class="text-title-lg text-primary mb-1">' + esc(l.name) + "</h3>" +
          '<p class="eyebrow eyebrow--plain mb-4">' + esc(l.role) + "</p>" +
          '<p class="text-body-md text-on-surface-variant text-pretty">' + esc(l.bio) + "</p>" +
          "</div>").join("") +
        "</div>" +
        '<div class="border-t border-border-subtle pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 reveal">' +
        '<div class="lg:col-span-4">' + eyebrow("Board of trustees") +
        '<p class="text-body-md text-on-surface-variant mt-5 max-w-sm text-pretty">The board meets quarterly and includes two trustees who live in communities where we run programs.</p></div>' +
        '<div class="lg:col-span-7 lg:col-start-6 grid grid-cols-1 sm:grid-cols-2 gap-x-gutter gap-y-6">' +
        SITE.board.map((b) =>
          "<div>" +
          '<div class="font-semibold text-on-surface">' + esc(b.name) + "</div>" +
          '<div class="text-body-md text-on-surface-variant">' + esc(b.role) + "</div>" +
          "</div>").join("") +
        "</div>" +
        "</div>" +
        "</div>" +
        "</section>" +

        /* Partners & recognition */
        '<section class="py-24 md:py-32 bg-stone-surface border-y border-border-subtle">' +
        '<div class="max-w-container-max mx-auto px-margin-mobile md:px-10 lg:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-gutter">' +
        '<div class="lg:col-span-6 reveal">' + eyebrow("Who we work with") +
        '<h2 class="text-headline-lg-m md:text-headline-lg text-primary mt-6 mb-8 text-balance">Nine partner organizations, and the communities themselves.</h2>' +
        '<ul class="grid grid-cols-1 sm:grid-cols-2 gap-x-gutter">' +
        SITE.partners.map((p) => '<li class="py-3 text-body-md text-on-surface border-b border-border-subtle">' + esc(p) + "</li>").join("") +
        "</ul>" +
        "</div>" +
        '<div class="lg:col-span-5 lg:col-start-8 reveal">' + eyebrow("Recognition") +
        '<div class="mt-6 border-t border-border-subtle">' +
        SITE.recognition.map((r) =>
          '<div class="py-5 border-b border-border-subtle flex gap-6">' +
          '<span class="text-title-lg text-secondary shrink-0">' + esc(r.year) + "</span>" +
          '<span class="text-body-md text-on-surface-variant text-pretty">' + esc(r.body) + "</span>" +
          "</div>").join("") +
        "</div>" +
        "</div>" +
        "</div>" +
        "</section>" +

        ctaBand({
          eyebrow: "Get involved",
          title: "Come and see the work.",
          body: "We host two community visits a year for donors and partners, and we answer every message that reaches us, including the sceptical ones."
        })
      );
    }

    /* ============================================================================
       OUR WORK
       ========================================================================== */
    function pageWork() {
      return (
        pageHero({
          slot: "work",
          eyebrow: "Our work",
          title: "Where compassion meets action.",
          body: "Four areas of focus, chosen because they are what communities asked us for, not because they photograph well. Each follows the same five-step method, and each is designed to be handed over."
        }) +

        /* Focus areas, alternating asymmetry */
        SITE.focus.map((f, i) => {
          const flip = i === 1 || i === 2 || i === 5;
          const imgCol = '<div class="lg:col-span-6 ' + (flip ? "lg:col-start-7 lg:row-start-1" : "") + ' reveal">' +
            ph(f.image, f.title, "aspect-[4/3]", "ph--flush-b") +
            '<div class="work-metric bg-primary text-on-primary px-7 py-6 -mt-1">' +
            '<p class="eyebrow eyebrow--plain text-secondary-fixed-dim mb-2">By the numbers</p>' +
            '<p class="text-title-lg">' + esc(f.metric) + "</p>" +
            "</div>" +
            "</div>";
          const txtCol = '<div class="lg:col-span-5 ' + (flip ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-8") + ' reveal">' +
            '<p class="eyebrow mb-6">0' + (i + 1) + ", " + esc(f.title) + "</p>" +
            '<h2 class="text-headline-lg-m md:text-headline-lg text-primary mb-8 text-balance">' + esc(f.lede) + "</h2>" +
            '<div class="border-t border-border-subtle pt-6 mb-6">' +
            '<p class="eyebrow eyebrow--plain mb-3">The challenge</p>' +
            '<p class="text-body-md text-on-surface-variant text-pretty">' + esc(f.challenge) + "</p>" +
            "</div>" +
            '<div class="border-t border-border-subtle pt-6 mb-8">' +
            '<p class="eyebrow eyebrow--plain mb-3">Our approach</p>' +
            '<p class="text-body-md text-on-surface-variant text-pretty">' + esc(f.approach) + "</p>" +
            "</div>" +
            '<a href="#/impact" data-link class="arrow-link">See the results <span class="material-symbols-outlined">arrow_forward</span></a>' +
            "</div>";
          return '<section id="' + f.slug + '" class="scroll-mt-24 py-20 md:py-28 ' +
            (i % 2 === 0 ? "bg-surface" : "bg-surface-container-low") +
            (i > 0 ? " border-t border-border-subtle" : "") + '">' +
            '<div class="max-w-container-max mx-auto px-margin-mobile md:px-10 lg:px-margin-desktop">' +
            '<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter items-center">' +
            (flip ? txtCol + imgCol : imgCol + txtCol) +
            "</div></div></section>";
        }).join("") +

        /* Method, numbered because it is an actual sequence */
        '<section class="py-24 md:py-32 bg-primary text-on-primary">' +
        '<div class="max-w-container-max mx-auto px-margin-mobile md:px-10 lg:px-margin-desktop">' +
        '<div class="max-w-2xl mb-16 reveal">' +
        '<p class="eyebrow eyebrow--plain text-secondary-fixed-dim mb-6">How we work</p>' +
        '<h2 class="text-headline-lg-m md:text-headline-lg text-balance">The same five steps, every time, in every community.</h2>' +
        '<p class="text-body-md text-primary-fixed-dim mt-5 text-pretty">Step five is the one most organizations skip. It is the reason we will only open in a new place when we can name the local body that will eventually run the work.</p>' +
        "</div>" +
        '<ol class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-x-gutter gap-y-10">' +
        SITE.method.map((m, i) =>
          '<li class="border-t border-primary-fixed-dim/40 pt-6 reveal" style="transition-delay:' + i * 70 + 'ms">' +
          '<div class="text-display-lg-m leading-none text-secondary-fixed-dim mb-5">' + m.n + "</div>" +
          '<h3 class="text-title-lg mb-3">' + esc(m.title) + "</h3>" +
          '<p class="text-body-md text-primary-fixed-dim text-pretty">' + esc(m.body) + "</p>" +
          "</li>").join("") +
        "</ol>" +
        "</div>" +
        "</section>" +

        /* Where we work */
        '<section class="py-24 md:py-32 bg-surface">' +
        '<div class="max-w-container-max mx-auto px-margin-mobile md:px-10 lg:px-margin-desktop">' +
        '<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter">' +
        '<div class="lg:col-span-4 reveal">' + eyebrow("Where we work") +
        '<h2 class="text-headline-lg-m md:text-headline-lg text-primary mt-6 mb-6 text-balance">Twenty-four communities across six states.</h2>' +
        '<p class="text-body-md text-on-surface-variant text-pretty">We expand slowly and deliberately. A new state is only opened when an existing program has reached the point of being handed over.</p>' +
        "</div>" +
        '<div class="lg:col-span-7 lg:col-start-6 reveal">' +
        '<div class="border-t border-border-subtle">' +
        SITE.regions.map((r) =>
          '<div class="flex items-baseline gap-6 py-5 border-b border-border-subtle">' +
          '<span class="text-title-lg text-primary w-10 shrink-0">' + r.communities + "</span>" +
          '<span class="flex-1"><span class="block font-semibold text-on-surface">' + esc(r.state) + "</span>" +
          '<span class="block text-body-md text-on-surface-variant">' + esc(r.note) + "</span></span>" +
          "</div>").join("") +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</section>" +

        statsStrip(SITE.stats, false) +

        ctaBand({
          eyebrow: "Fund the method",
          title: "Programs that outlast us cost more up front.",
          body: "Certifying a local water committee before the drilling starts adds about eleven percent to a well project. It is the difference between water for two years and water for twenty."
        })
      );
    }
    /* ============================================================================
       IMPACT
       ========================================================================== */
    function projectBlock(p, i) {
      const flip = i === 1 || i === 2 || i === 5;

      const media = '<div class="lg:col-span-5 ' + (flip ? "lg:col-start-8 lg:row-start-1" : "") + ' reveal">' +
        ph(p.image, p.name + ", " + p.location, "aspect-[4/5]") +
        "</div>";

      const body = '<div class="lg:col-span-6 ' + (flip ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-7") + ' reveal">' +
        '<p class="eyebrow mb-5">' + esc(p.focus) + "</p>" +
        '<h3 class="text-headline-md-m md:text-headline-md text-primary mb-4 text-balance">' + esc(p.name) + "</h3>" +
        '<div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-label-caps uppercase text-on-surface-variant mb-7">' +
        '<span class="inline-flex items-center gap-1.5"><span class="material-symbols-outlined text-secondary" style="font-size:16px">location_on</span>' + esc(p.location) + "</span>" +
        '<span class="w-px h-3 bg-border-subtle hidden sm:block"></span>' +
        "<span>" + esc(p.since) + "</span>" +
        "</div>" +
        '<p class="text-body-lg text-on-surface mb-9 text-pretty">' + esc(p.summary) + "</p>" +

        '<div class="border-t border-border-subtle pt-6 mb-7">' +
        '<p class="eyebrow eyebrow--plain mb-3">The problem</p>' +
        '<p class="text-body-md text-on-surface-variant text-pretty">' + esc(p.problem) + "</p>" +
        "</div>" +

        '<div class="border-t border-border-subtle pt-6 mb-8">' +
        '<p class="eyebrow eyebrow--plain mb-4">What we did</p>' +
        '<ul class="space-y-3">' +
        p.response.map((r) =>
          '<li class="flex gap-3 text-body-md text-on-surface-variant">' +
          '<span class="material-symbols-outlined text-secondary shrink-0 mt-0.5" style="font-size:18px" aria-hidden="true">check_small</span>' +
          "<span class=\"text-pretty\">" + esc(r) + "</span></li>").join("") +
        "</ul>" +
        "</div>" +

        '<div class="bg-stone-surface border-l-2 border-secondary px-7 py-7">' +
        '<p class="eyebrow eyebrow--plain mb-3">' + esc(p.story.name) + "</p>" +
        '<p class="text-body-lg text-primary text-pretty">' + esc(p.story.text) + "</p>" +
        "</div>" +
        "</div>";

      return '<article id="' + p.id + '" class="scroll-mt-24 py-16 md:py-24 border-t border-border-subtle">' +
        '<div class="max-w-container-max mx-auto px-margin-mobile md:px-10 lg:px-margin-desktop">' +
        '<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter items-start">' +
        (flip ? body + media : media + body) +
        "</div></div></article>";
    }

    function pageImpact() {
      return (
        pageHero({
          slot: "impact",
          eyebrow: "Impact",
          title: "A legacy of change.",
          body: "Numbers on this page are counted the way the communities asked us to count them. Where a target was missed we have said so, and our full audited accounts are sent to anyone who asks for them."
        }) +

        statsStrip(SITE.stats, true) +

        /* Secondary figures removed */

        /* Projects */
        '<section class="bg-surface pt-8">' +
        '<div class="max-w-container-max mx-auto px-margin-mobile md:px-10 lg:px-margin-desktop">' +
        '<div class="max-w-2xl mb-4 reveal">' + eyebrow("Projects", "eyebrow--plain") +
        '<h2 class="text-headline-lg-m md:text-headline-lg text-primary mt-6 mb-5 text-balance">Six flagship programs, in detail.</h2>' +
        '<p class="text-body-md text-on-surface-variant text-pretty">Alongside these run 62 smaller community initiatives, tutoring circles, pharmacy runs, repair funds, most of them proposed and led by the communities themselves.</p>' +
        "</div>" +
        "</div>" +
        SITE.projects.map(projectBlock).join("") +
        "</section>" +

        /* Stories */
        '<section id="stories" class="scroll-mt-24 py-24 md:py-32 bg-stone-surface border-y border-border-subtle">' +
        '<div class="max-w-container-max mx-auto px-margin-mobile md:px-10 lg:px-margin-desktop">' +
        '<div class="max-w-2xl mb-16 reveal">' + eyebrow("Success stories") +
        '<h2 class="text-headline-lg-m md:text-headline-lg text-primary mt-6 mb-5 text-balance">Three people, described in their own terms.</h2>' +
        '<p class="text-body-md text-on-surface-variant text-pretty">Shared with permission. We do not photograph or describe anyone at the lowest point of their circumstances, and everyone here has read what is written about them.</p>' +
        "</div>" +
        '<div class="grid grid-cols-1 lg:grid-cols-3 gap-x-gutter gap-y-16">' +
        SITE.stories.map((s, i) =>
          '<article class="reveal" style="transition-delay:' + i * 90 + 'ms">' +
          ph(s.image, s.name + ", " + s.place, "aspect-[4/3] mb-7") +
          '<h3 class="text-title-lg text-primary mb-1">' + esc(s.name) + ", " + esc(s.age) + "</h3>" +
          '<p class="eyebrow eyebrow--plain mb-6">' + esc(s.place) + ", " + esc(s.program) + "</p>" +
          '<blockquote class="text-quote-m md:text-quote text-primary border-l-2 border-secondary pl-5 mb-7 text-pretty">' + esc(s.quote) + "</blockquote>" +
          '<div class="space-y-5">' +
          '<div><p class="eyebrow eyebrow--plain mb-2">The challenge</p><p class="text-body-md text-on-surface-variant text-pretty">' + esc(s.challenge) + "</p></div>" +
          '<div><p class="eyebrow eyebrow--plain mb-2">How we helped</p><p class="text-body-md text-on-surface-variant text-pretty">' + esc(s.support) + "</p></div>" +
          '<div><p class="eyebrow eyebrow--plain mb-2">Where things stand</p><p class="text-body-md text-on-surface-variant text-pretty">' + esc(s.outcome) + "</p></div>" +
          "</div>" +
          "</article>").join("") +
        "</div>" +
        "</div>" +
        "</section>" +

        testimonialSection("Partners, parents and committee members", SITE.impactTestimonials) +

        /* Accountability */
        '<section id="accountability" class="scroll-mt-24 py-24 md:py-32 bg-surface">' +
        '<div class="max-w-container-max mx-auto px-margin-mobile md:px-10 lg:px-margin-desktop">' +
        '<div class="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-gutter">' +
        '<div class="lg:col-span-5 reveal">' + eyebrow("Accountability") +
        '<h2 class="text-headline-lg-m md:text-headline-lg text-primary mt-6 mb-6 text-balance">Where every dollar went last year.</h2>' +
        '<p class="text-body-md text-on-surface-variant mb-5 text-pretty">Independently audited since 2023. We send the audit unedited, alongside our Form 990, to anyone who asks — including the four pages on the Mingo County well system that failed in its second year and what replacing it cost.</p>' +
        '<p class="text-body-md text-on-surface-variant mb-8 text-pretty">Program spending has stayed above 85% every year since 2021. If it drops below that, we will say why.</p>' +
        '<a href="#/contact" data-link class="arrow-link">Request the full report <span class="material-symbols-outlined">arrow_forward</span></a>' +
        "</div>" +
        '<div class="lg:col-span-6 lg:col-start-7 reveal">' +
        '<div class="border-t border-border-subtle">' +
        SITE.donate.allocation.map((a) =>
          '<div class="py-7 border-b border-border-subtle">' +
          '<div class="flex items-baseline justify-between mb-4">' +
          '<span class="text-body-lg text-on-surface">' + esc(a.label) + "</span>" +
          '<span class="text-headline-md text-primary">' + a.pct + "%</span>" +
          "</div>" +
          '<div class="bar-track"><div class="h-full bg-primary transition-[width] duration-1000 ease-out" style="width:0%" data-bar="' + a.pct + '"></div></div>' +
          "</div>").join("") +
        "</div>" +
        '<p class="text-body-md text-on-surface-variant mt-7 text-pretty">Figures are for the 2025 fiscal year and are rounded. Full statements, our Form 990, quarterly program reports and the board\u2019s annual review are available on request.</p>' +
        "</div>" +
        "</div>" +
        "</div>" +
        "</section>" +

        ctaBand({
          eyebrow: "Keep it going",
          title: "These numbers have a running cost.",
          body: "Mobile clinics need fuel every month. Tutoring circles need notebooks every semester. Regular giving is what turns a good year into a program."
        })
      );
    }

    /* ============================================================================
       CONTACT
       ========================================================================== */
    function pageContact(query) {
      const preset = (query && query.reason) || "general";
      const reasonOpts = SITE.contact.reasons.map((r) =>
        '<option value="' + r.value + '"' + (r.value === preset ? " selected" : "") + ">" + esc(r.label) + "</option>").join("");

      return (
        '<section class="bg-surface pt-20 pb-14 md:pt-32 md:pb-20 border-b border-border-subtle">' +
        '<div class="max-w-container-max mx-auto px-margin-mobile md:px-10 lg:px-margin-desktop">' +
        '<div class="max-w-4xl">' +
        eyebrow("Contact") +
        '<h1 class="text-primary text-display-xl-mobile md:text-display-xl mt-7 mb-7 text-balance">Let us start a conversation.</h1>' +
        '<p class="text-body-lg text-on-surface-variant max-w-2xl text-pretty">Whether you want to volunteer, partner, ask about a donation or challenge something you read on this site, write to us. A person reads every message, and we aim to reply within 2 business days.</p>' +
        "</div>" +
        "</div>" +
        "</section>" +

        '<section class="py-20 md:py-28 bg-surface">' +
        '<div class="max-w-container-max mx-auto px-margin-mobile md:px-10 lg:px-margin-desktop">' +
        '<div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-gutter">' +

        /* Form */
        '<div class="lg:col-span-7 reveal">' +
        '<div id="contactFormWrap">' +
        eyebrow("Send a message") +
        '<h2 class="text-headline-lg-m md:text-headline-lg text-primary mt-6 mb-10 text-balance">Tell us what you are hoping to do.</h2>' +
        '<form id="contactForm" novalidate class="grid grid-cols-1 sm:grid-cols-2 gap-x-gutter gap-y-8">' +
        '<div class="field-group"><label class="field-label" for="cName">Full name</label>' +
        '<input class="field" id="cName" name="name" type="text" placeholder="Jordan Ellis" autocomplete="name"/>' +
        '<p class="field-error">Please tell us your name.</p></div>' +
        '<div class="field-group"><label class="field-label" for="cEmail">Email address</label>' +
        '<input class="field" id="cEmail" name="email" type="email" placeholder="you@example.com" autocomplete="email"/>' +
        '<p class="field-error">Please enter a valid email address.</p></div>' +
        '<div class="field-group"><label class="field-label" for="cPhone">Phone <span class="normal-case tracking-normal font-normal text-outline">(optional)</span></label>' +
        '<input class="field" id="cPhone" name="phone" type="tel" placeholder="(614) 555-0142" autocomplete="tel"/></div>' +
        '<div class="field-group"><label class="field-label" for="cReason">What is this about?</label>' +
        '<select class="field" id="cReason" name="reason">' + reasonOpts + "</select></div>" +
        '<div class="field-group sm:col-span-2"><label class="field-label" for="cOrg">Organization <span class="normal-case tracking-normal font-normal text-outline">(optional)</span></label>' +
        '<input class="field" id="cOrg" name="org" type="text" placeholder="Company, school district, foundation or trust"/></div>' +
        '<div class="field-group sm:col-span-2"><label class="field-label" for="cMsg">Your message <span class="normal-case tracking-normal font-normal text-outline">(optional)</span></label>' +
        '<textarea class="field" id="cMsg" name="message" rows="5" placeholder="A few lines about what you have in mind."></textarea>' +
        '</div>' +
        '<div class="sm:col-span-2 flex items-start gap-3">' +
        '<input id="cConsent" type="checkbox" class="mt-1 w-6 h-6 border-outline text-primary focus:ring-primary"/>' +
        '<label for="cConsent" class="text-body-md text-on-surface-variant">Keep me on the mailing list for quarterly updates. We send four a year and never share your details.</label>' +
        "</div>" +
        '<div class="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-5 pt-2">' +
        '<button type="submit" class="cta-pill bg-primary text-on-primary px-10 py-4 text-label-caps uppercase btn-lift active:scale-[0.98] transition-all rounded-full">Send message</button>' +
        '<p class="text-body-md text-on-surface-variant">Typical reply time: within 2 business days.</p>' +
        "</div>" +
        "</form>" +
        "</div>" +
        '<div id="contactDone" class="hidden border border-border-subtle bg-surface-container-low panel-pad">' +
        '<span class="material-symbols-outlined text-primary mb-5 block" style="font-size:40px" aria-hidden="true">mark_email_read</span>' +
        '<h2 class="text-headline-md-m md:text-headline-md text-primary mb-4">Message ready to send.</h2>' +
        '<p class="text-body-md text-on-surface-variant mb-6 max-w-lg text-pretty">Thank you for reaching out. Your message has been received.</p>' +
        '<button id="contactAgain" class="cta-pill cta-pill--compact border border-primary text-primary px-8 py-3 text-label-caps uppercase hover:bg-primary hover:text-on-primary active:scale-[0.98] transition-all rounded-full">Write another message</button>' +
        "</div>" +
        "</div>" +

        /* Info */
        '<div class="lg:col-span-4 lg:col-start-9 reveal">' +
        '<div class="border-t border-border-subtle pt-7 mb-9">' +
        '<p class="eyebrow eyebrow--plain mb-4">Email us</p>' +
        SITE.contact.emails.map((e) =>
          '<div class="mb-3"><div class="text-body-sm text-outline">' + esc(e.label) + "</div>" +
          '<a href="mailto:' + e.value + '" class="contact-link text-body-md text-primary hover:text-secondary transition-colors break-all">' +
          '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>' +
          esc(e.value) + "</a></div>").join("") +
        "</div>" +

        '<div class="border-t border-border-subtle pt-7 mb-9">' +
        '<p class="eyebrow eyebrow--plain mb-4">WhatsApp</p>' +
        '<div class="mb-3">' +
        '<a href="https://wa.me/16145550142" target="_blank" rel="noopener" class="contact-link contact-link--lg text-title-lg text-primary hover:text-secondary transition-colors break-all">' +
        '<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true" class="shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>' +
        esc(SITE.contact.phone) + "</a>" +
        "</div>" +
        "</div>" +

        "</div>" +
        "</div>" +
        "</section>" +

        faqSection(
          [SITE.faq[6], SITE.faq[7], SITE.faq[0], SITE.faq[1]],
          { bg: "bg-surface-container-low border-y border-border-subtle", eyebrow: "Before you write", title: "A few things people usually ask first" }
        ) +

        ctaBand({
          eyebrow: "",
          title: "Give what feels right",
          body: "Not sure where to begin? Make a contribution of any size. Every dollar directly supports our programs, and you can always reach out to us afterward.",
          hideOtherWays: true
        })
      );
    }
    /* ============================================================================
       DONATE, full front-end flow.
       No payment provider is connected. Nothing on this page charges anyone.
       The card step is deliberately locked to non-enterable demo values so that
       no real card details can ever be typed into this demonstration.
       ========================================================================== */

    function stepper() {
      const steps = ["Amount", "Details", "Review", "Payment"];
      return '<ol id="stepper" class="flex items-center gap-2 mb-12" aria-label="Donation progress">' +
        steps.map((s, i) =>
          '<li class="flex items-center gap-2 flex-1" data-step-dot="' + (i + 1) + '">' +
          '<span class="dot border border-border-subtle text-on-surface-variant bg-surface transition-colors">' + (i + 1) + "</span>" +
          '<span class="lbl text-on-surface-variant hidden sm:block">' + s + "</span>" +
          (i < steps.length - 1 ? '<span class="step-rail"></span>' : "") +
          "</li>").join("") +
        "</ol>";
    }

    function pageDonate() {
      const desigOpts = SITE.donate.designations.map((d) =>
        '<option value="' + d.value + '">' + esc(d.label) + "</option>").join("");

      const states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming", "Outside the United States"];

      return (
        '<section class="bg-surface pt-16 pb-10 md:pt-24 md:pb-12 border-b border-border-subtle">' +
        '<div class="max-w-container-max mx-auto px-margin-mobile md:px-10 lg:px-margin-desktop">' +
        '<div class="max-w-3xl">' + eyebrow("Donate") +
        '<h1 class="text-primary text-display-xl-mobile md:text-display-xl mt-7 mb-6 text-balance">Give once, or give monthly.</h1>' +
        '<p class="text-body-lg text-on-surface-variant max-w-2xl text-pretty">Eighty-seven cents of every dollar reaches a program. You choose where it goes, and we tell you what it did.</p>' +
        "</div>" +
        "</div>" +
        "</section>" +

        '<section class="py-16 md:py-24 bg-surface">' +
        '<div class="max-w-container-max mx-auto px-margin-mobile md:px-10 lg:px-margin-desktop">' +
        '<div class="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-gutter items-start">' +

        /* ---------- LEFT: context ---------- */
        '<aside class="lg:col-span-5 lg:sticky lg:top-28">' +
        ph(IMG.classroom, "A student in a HopeBridge partner school in Columbus, Ohio", "aspect-[5/4] mb-8") +
        '<figure class="border-l-2 border-secondary pl-6 mb-10">' +
        '<blockquote class="text-quote-m md:text-quote text-primary text-pretty">Your stewardship today builds the foundation for tomorrow\u2019s quiet triumphs.</blockquote>' +
        '<figcaption class="mt-3 text-body-md text-on-surface-variant">' + esc(SITE.founder.name) + ", " + esc(SITE.founder.role) + "</figcaption>" +
        "</figure>" +

        '<div class="border-t border-border-subtle pt-7 mb-8">' +
        '<p class="eyebrow eyebrow--plain mb-5">Where your money goes</p>' +
        SITE.donate.allocation.map((a) =>
          '<div class="mb-5">' +
          '<div class="flex items-baseline justify-between mb-2">' +
          '<span class="text-body-md text-on-surface">' + esc(a.label) + "</span>" +
          '<span class="text-title-md text-primary">' + a.pct + "%</span>" +
          "</div>" +
          '<div class="bar-track"><div class="h-full bg-primary transition-[width] duration-1000 ease-out" style="width:0%" data-bar="' + a.pct + '"></div></div>' +
          "</div>").join("") +
        "</div>" +

        /* Credential ledger: facts and documents, not reassurances. */
        '<div class="border-t border-border-subtle pt-7">' +
        '<p class="eyebrow eyebrow--plain mb-6">Registered and audited</p>' +
        '<dl class="border-t border-border-subtle">' +
        SITE.credentials.map((c) => {
          var value = c.href
            ? '<a href="' + c.href + '" data-link class="group inline-flex items-center gap-2 text-body-md text-primary hover:text-secondary transition-colors">' +
            esc(c.value) +
            '<span class="material-symbols-outlined shrink-0" style="font-size:16px" aria-hidden="true">arrow_forward</span>' +
            "</a>"
            : '<span class="text-body-md text-on-surface' + (c.mono ? " font-mono" : "") + '" style="font-variant-numeric:tabular-nums">' + esc(c.value) + "</span>";
          return '<div class="flex items-baseline justify-between gap-6 py-4 border-b border-border-subtle">' +
            '<dt class="text-body-sm text-on-surface-variant shrink-0">' + esc(c.label) + "</dt>" +
            '<dd class="text-right">' + value + "</dd>" +
            "</div>";
        }).join("") +
        "</dl>" +
        '<p class="text-body-sm text-on-surface-variant mt-6 text-pretty">A monthly gift can be changed or cancelled at any time, by one email.</p>' +
        "</div>" +
        "</aside>" +

        /* ---------- RIGHT: the flow ---------- */
        '<div class="lg:col-span-6 lg:col-start-7">' +
        '<div id="donateCard" class="donate-card">' +
        stepper() +

        /* ---- STEP 1 : AMOUNT ---- */
        '<div data-step="1">' +
        '<h2 class="text-headline-md-m md:text-headline-md text-primary mb-2">Choose your amount</h2>' +
        '<p class="text-body-md text-on-surface-variant mb-9">Any amount is useful. Monthly gifts are what let us commit to a community for three years.</p>' +

        '<p class="field-label mb-3">How often</p>' +
        '<div class="segbar mb-8" role="group" aria-label="Donation frequency">' +
        '<button type="button" class="seg" data-freq="once" aria-pressed="true">Give once</button>' +
        '<button type="button" class="seg" data-freq="monthly" aria-pressed="false">Give monthly</button>' +
        "</div>" +

        '<div class="field-group mb-9">' +
        '<label class="field-label mb-3" for="customAmount">Enter an amount</label>' +
        '<div class="amount-wrap flex items-center gap-2 border-b border-border-subtle focus-within:border-primary transition-colors">' +
        '<span class="text-title-lg text-on-surface-variant pb-2 pt-2">$</span>' +
        '<input id="customAmount" type="text" inputmode="numeric" placeholder="Enter any amount" class="field border-b-0 flex-1 text-body-lg" required aria-required="true" aria-describedby="customAmountErr"/>' +
        "</div>" +
        '<p class="field-error" id="customAmountErr" role="alert">Please enter an amount of $5 or more.</p>' +
        "</div>" +

        '<div class="field-group mb-10">' +
        '<label class="field-label" for="designation">Direct my gift to</label>' +
        '<select class="field" id="designation">' + desigOpts + "</select>" +
        '<p class="text-body-sm text-outline mt-2">Choosing “where it is needed most” is the most useful option for us, and we will still write and tell you where it went.</p>' +
        "</div>" +

        '<button type="button" data-next="2" class="cta-pill w-full bg-primary text-on-primary px-8 py-4 text-label-caps uppercase btn-lift active:scale-[0.98] transition-all rounded-full">Continue to your details</button>' +
        "</div>" +

        /* ---- STEP 2 : DETAILS ---- */
        '<div data-step="2" class="hidden">' +
        '<h2 class="text-headline-md-m md:text-headline-md text-primary mb-2">Your details</h2>' +
        '<p class="text-body-md text-on-surface-variant mb-9">We need an email to send your tax receipt. Everything else is optional.</p>' +

        '<div class="grid grid-cols-1 sm:grid-cols-2 gap-x-gutter gap-y-8 mb-9">' +
        '<div class="field-group"><label class="field-label" for="dFirst">First name</label>' +
        '<input class="field" id="dFirst" type="text" placeholder="Jordan" autocomplete="given-name" required aria-required="true" aria-describedby="dFirstErr"/>' +
        '<p class="field-error" id="dFirstErr" role="alert">Please enter your first name.</p></div>' +
        '<div class="field-group"><label class="field-label" for="dLast">Last name</label>' +
        '<input class="field" id="dLast" type="text" placeholder="Ellis" autocomplete="family-name" required aria-required="true" aria-describedby="dLastErr"/>' +
        '<p class="field-error" id="dLastErr" role="alert">Please enter your last name.</p></div>' +
        '<div class="field-group sm:col-span-2"><label class="field-label" for="dEmail">Email address</label>' +
        '<input class="field" id="dEmail" type="email" placeholder="you@example.com" autocomplete="email" required aria-required="true" aria-describedby="dEmailErr"/>' +
        '<p class="field-error" id="dEmailErr" role="alert">Please enter a valid email address for your receipt.</p></div>' +
        '<div class="field-group"><label class="field-label" for="dPhone">Phone <span class="normal-case tracking-normal font-normal text-outline">(optional)</span></label>' +
        '<input class="field" id="dPhone" type="tel" placeholder="(614) 555-0142" autocomplete="tel"/></div>' +
        '<div class="field-group"><label class="field-label" for="dCountry">State</label>' +
        '<select class="field" id="dCountry">' + states.map((c) => '<option' + (c === "Ohio" ? " selected" : "") + ">" + c + "</option>").join("") + "</select></div>" +
        "</div>" +

        '<div class="border-t border-border-subtle pt-7 space-y-5 mb-10">' +
        '<label class="flex items-start gap-3 cursor-pointer">' +
        '<input id="dAnon" type="checkbox" class="mt-1 w-6 h-6 border-outline text-primary focus:ring-primary"/>' +
        '<span class="text-body-md text-on-surface-variant">Give anonymously. Your name will not appear in any donor list or report.</span></label>' +
        '<label class="flex items-start gap-3 cursor-pointer">' +
        '<input id="dFees" type="checkbox" class="mt-1 w-6 h-6 border-outline text-primary focus:ring-primary"/>' +
        '<span class="text-body-md text-on-surface-variant">Add 3% to cover processing fees, so the full amount reaches the program.</span></label>' +
        "</div>" +

        '<div class="flex flex-col-reverse sm:flex-row gap-3">' +
        '<button type="button" data-back="1" class="cta-pill sm:w-auto border border-primary text-primary px-8 py-4 text-label-caps uppercase hover:bg-surface-container transition-colors rounded-full">Back</button>' +
        '<button type="button" data-next="3" class="cta-pill flex-1 bg-primary text-on-primary px-8 py-4 text-label-caps uppercase btn-lift active:scale-[0.98] transition-all rounded-full">Review your donation</button>' +
        "</div>" +
        "</div>" +

        /* ---- STEP 3 : REVIEW ---- */
        '<div data-step="3" class="hidden">' +
        '<h2 class="text-headline-md-m md:text-headline-md text-primary mb-2">Check it over</h2>' +
        '<p class="text-body-md text-on-surface-variant mb-9">Nothing has been charged yet. You can still change anything here.</p>' +
        '<dl id="reviewList" class="border-t border-border-subtle mb-8"></dl>' +
        '<div class="flex flex-col-reverse sm:flex-row gap-3">' +
        '<button type="button" data-back="2" class="cta-pill sm:w-auto border border-primary text-primary px-8 py-4 text-label-caps uppercase hover:bg-surface-container transition-colors rounded-full">Back</button>' +
        '<button type="button" data-next="4" class="cta-pill flex-1 bg-primary text-on-primary px-8 py-4 text-label-caps uppercase btn-lift active:scale-[0.98] transition-all rounded-full">Proceed to payment</button>' +
        "</div>" +
        "</div>" +

        /* ---- STEP 4 : PAYMENT ---- */
        '<div data-step="4" class="hidden">' +
        '<h2 class="text-headline-md-m md:text-headline-md text-primary mb-2">Payment</h2>' +
        '<p class="text-body-md text-on-surface-variant mb-7">This is where your payment provider takes over.</p>' +

        '<div class="border border-border-subtle bg-surface px-5 py-6 mb-9" style="border-radius: 1rem; overflow: hidden;">' +
        '<p class="eyebrow eyebrow--plain mb-4">Bitcoin Wallet Address</p>' +
        '<p class="text-body-md text-on-surface-variant mb-5">Please send your donation to the wallet address below. Once sent, click complete.</p>' +
        '<div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">' +
        '<input type="text" id="cryptoAddress" value="bc1qj7fa2rk4efl7lgjvasm0u25w0h9cql9j7aman9" class="font-mono text-body-md bg-transparent" style="flex: 1; border: 1px solid #E0DCD3; padding: 10px 14px; border-radius: 0.5rem;" readonly/>' +
        '<button type="button" id="copyWalletBtn" class="cta-pill cta-pill--compact sm:w-auto w-full border border-primary text-primary px-6 py-3 text-label-caps uppercase hover:bg-surface-container transition-colors rounded-full shrink-0">Copy</button>' +
        "</div>" +
        '<p id="copyMsg" class="text-body-sm text-primary mt-3 hidden">Address copied to clipboard!</p>' +
        "</div>" +

        '<div class="border-t border-border-subtle pt-6 mb-8 flex items-baseline justify-between">' +
        '<span class="text-label-caps uppercase text-on-surface-variant">Total today</span>' +
        '<span id="payTotal" class="font-numeric text-headline-md text-primary">$0</span>' +
        "</div>" +

        '<div class="flex flex-col-reverse sm:flex-row gap-3">' +
        '<button type="button" data-back="3" class="cta-pill sm:w-auto border border-primary text-primary px-8 py-4 text-label-caps uppercase hover:bg-surface-container transition-colors rounded-full">Back</button>' +
        '<button type="button" id="payBtn" class="cta-pill flex-1 bg-primary text-on-primary px-8 py-4 text-label-caps uppercase btn-lift active:scale-[0.98] transition-all rounded-full">Complete donation</button>' +
        "</div>" +

        "</div>" +

        /* ---- PROCESSING ---- */
        '<div data-step="processing" class="hidden py-16 text-center" role="status" aria-live="polite">' +
        '<div class="spinner mx-auto mb-8"></div>' +
        '<h2 class="text-title-lg text-primary mb-3">Processing your donation</h2>' +
        '<p id="processingMsg" class="text-body-md text-on-surface-variant">Contacting the payment provider…</p>' +

        "</div>" +

        /* ---- SUCCESS ---- */
        '<div data-step="success" class="hidden">' +
        '<div class="text-center mb-10">' +
        '<svg viewBox="0 0 64 64" class="tick w-16 h-16 mx-auto mb-7" fill="none" aria-hidden="true">' +
        '<circle cx="32" cy="32" r="30" stroke="#CFCABF" stroke-width="1.5"/>' +
        '<path d="M19 33.5 28 42l17-19" stroke="#173B2F" stroke-width="3" stroke-linecap="square"/></svg>' +
        '<h2 class="text-headline-lg-m md:text-headline-lg text-primary mb-4 text-balance">Thank you, your donation is confirmed.</h2>' +
        '<p id="successLead" class="text-body-md text-on-surface-variant max-w-md mx-auto text-pretty"></p>' +
        "</div>" +

        '<dl id="receiptList" class="border-t border-border-subtle mb-8"></dl>' +

        '<div class="bg-stone-surface px-6 py-6 mb-8">' +
        '<p class="eyebrow eyebrow--plain mb-4">What happens next</p>' +
        '<ol class="space-y-3">' +
        ["A tax receipt with our EIN reaches your inbox within a few minutes.",
          "Your gift is allocated within 2 business days and recorded in the quarterly report.",
          "In about three months you will get a short update naming what it paid for."]
          .map((t, i) =>
            '<li class="flex gap-3 text-body-md text-on-surface-variant">' +
            '<span class="text-secondary shrink-0">' + (i + 1) + ".</span>" +
            "<span class=\"text-pretty\">" + t + "</span></li>").join("") +
        "</ol>" +
        "</div>" +



        '<div class="flex flex-col sm:flex-row gap-3">' +
        '<a href="#/impact" data-link class="cta-pill flex-1 bg-primary text-on-primary px-8 py-4 text-label-caps uppercase text-center btn-lift active:scale-[0.98] transition-all rounded-full">See what donations fund</a>' +
        '<button type="button" id="donateAgain" class="cta-pill sm:w-auto border border-primary text-primary px-8 py-4 text-label-caps uppercase hover:bg-surface-container transition-colors rounded-full">Start again</button>' +
        "</div>" +
        "</div>" +

        "</div>" +

        '<p class="text-body-sm text-outline mt-6 text-pretty">Prefer to give another way? Checks, donor-advised fund grants, employer matching and stock gifts are all welcome, ' +
        '<a href="#/contact?reason=donation" data-link class="text-primary underline underline-offset-4 hover:text-secondary transition-colors">talk to us</a>.</p>' +
        "</div>" +

        "</div>" +
        "</div>" +
        "</section>" +

        faqSection(SITE.faq, {
          bg: "bg-surface-container-low border-y border-border-subtle",
          eyebrow: "Donation questions",
          title: "Everything people ask before giving"
        }) +

        '<section class="py-24 md:py-32 bg-surface">' +
        '<div class="max-w-container-max mx-auto px-margin-mobile md:px-10 lg:px-margin-desktop">' +
        '<div class="max-w-2xl mb-14 reveal">' + eyebrow("Other ways to help") +
        '<h2 class="text-headline-lg-m md:text-headline-lg text-primary mt-6 text-balance">Money is not the only useful thing.</h2></div>' +
        '<div class="grid grid-cols-1 md:grid-cols-3 gap-x-gutter gap-y-12">' +
        [["volunteer_activism", "Volunteer", "Most of our 340 volunteers live where they work, but we need remote help with design, translation, data and grant writing.", "volunteer"],
        ["handshake", "Partner with us", "Health centers, school districts, trade guilds, suppliers and funders. Tell us what you do and what you want to change.", "partnership"],
        ["campaign", "Fundraise", "Birthdays, workplace matching, a 5K, a bake sale. We will send you the numbers and photographs you need.", "general"]]
          .map((c, i) =>
            '<a href="#/contact?reason=' + c[3] + '" data-link class="group block border-t border-border-subtle pt-8 reveal" style="transition-delay:' + i * 80 + 'ms">' +
            '<span class="material-symbols-outlined text-secondary mb-5 block" style="font-size:32px" aria-hidden="true">' + c[0] + "</span>" +
            '<h3 class="text-title-lg text-primary mb-3 group-hover:text-secondary transition-colors">' + c[1] + "</h3>" +
            '<p class="text-body-md text-on-surface-variant mb-5 text-pretty">' + c[2] + "</p>" +
            '<span class="arrow-link">Get in touch <span class="material-symbols-outlined">arrow_forward</span></span>' +
            "</a>").join("") +
        "</div>" +
        "</div>" +
        "</section>"
      );
    }

    function pagePrivacy() {
      return (
        '<section class="bg-surface pt-20 pb-14 md:pt-32 md:pb-20 border-b border-border-subtle">' +
        '<div class="max-w-container-max mx-auto px-margin-mobile md:px-10 lg:px-margin-desktop">' +
        '<div class="max-w-4xl">' +
        eyebrow("Legal") +
        '<h1 class="text-primary text-display-xl-mobile md:text-display-xl mt-7 mb-7 text-balance">Privacy Policy</h1>' +
        '</div></div></section>' +
        '<section class="py-16 md:py-24 bg-surface">' +
        '<div class="max-w-3xl mx-auto px-margin-mobile md:px-10 lg:px-margin-desktop text-body-lg text-on-surface-variant space-y-8">' +
        '<p>At HopeBridge Foundation, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, make a donation, or communicate with us.</p>' +
        '<div><h3 class="text-title-lg text-primary mb-3">1. Information We Collect</h3>' +
        '<p class="mb-4">We collect information that you voluntarily provide to us when you express an interest in obtaining information about us, participate in activities on our website, or otherwise contact us.</p>' +
        '<ul class="list-disc pl-6 space-y-2">' +
        '<li><strong>Personal Information:</strong> Name, email address, postal address, phone number, and other contact data.</li>' +
        '<li><strong>Payment Data:</strong> Data necessary to process your payment if you make a donation, such as your payment instrument number and security code. All payment data is stored by our payment processor, and you should review its privacy policies.</li>' +
        '</ul></div>' +
        '<div><h3 class="text-title-lg text-primary mb-3">2. How We Use Your Information</h3>' +
        '<p class="mb-4">We use personal information collected via our website for a variety of organizational purposes described below:</p>' +
        '<ul class="list-disc pl-6 space-y-2">' +
        '<li>To process your donations and send tax receipts.</li>' +
        '<li>To send you updates about our projects, impact reports, and organizational news.</li>' +
        '<li>To respond to your inquiries and offer support.</li>' +
        '<li>To comply with legal obligations and resolve any disputes.</li>' +
        '</ul></div>' +
        '<div><h3 class="text-title-lg text-primary mb-3">3. Will Your Information Be Shared?</h3>' +
        '<p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill organizational obligations. We do not sell your personal information to third parties.</p></div>' +
        '<div><h3 class="text-title-lg text-primary mb-3">4. Security of Your Information</h3>' +
        '<p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.</p></div>' +
        '<div><h3 class="text-title-lg text-primary mb-3">5. Contact Us</h3>' +
        '<p>If you have questions or comments about this policy, you may <a href="#/contact" data-link class="text-primary underline hover:text-secondary transition-colors">contact us here</a> or by post to:</p>' +
        '<p class="mt-4 font-mono text-body-md">HopeBridge Foundation<br>1400 Bridgeway Avenue, Suite 210<br>Columbus, OH 43215</p></div>' +
        '</div></section>'
      );
    }

    function pageTerms() {
      return (
        '<section class="bg-surface pt-20 pb-14 md:pt-32 md:pb-20 border-b border-border-subtle">' +
        '<div class="max-w-container-max mx-auto px-margin-mobile md:px-10 lg:px-margin-desktop">' +
        '<div class="max-w-4xl">' +
        eyebrow("Legal") +
        '<h1 class="text-primary text-display-xl-mobile md:text-display-xl mt-7 mb-7 text-balance">Terms of Service</h1>' +
        '<p class="text-body-lg text-on-surface-variant max-w-2xl text-pretty">The rules for using our website and services.</p>' +
        '</div></div></section>' +
        '<section class="py-16 md:py-24 bg-surface">' +
        '<div class="max-w-3xl mx-auto px-margin-mobile md:px-10 lg:px-margin-desktop text-body-lg text-on-surface-variant space-y-8">' +
        '<p>These Terms of Service constitute a legally binding agreement made between you and HopeBridge Foundation concerning your access to and use of our website. You agree that by accessing the site, you have read, understood, and agreed to be bound by all of these Terms of Service.</p>' +
        '<div><h3 class="text-title-lg text-primary mb-3">1. Use of Site</h3>' +
        '<p>Our website and its content are provided for informational and charitable purposes. You may not access or use the site for any purpose other than that for which we make the site available. The site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p></div>' +
        '<div><h3 class="text-title-lg text-primary mb-3">2. Donations</h3>' +
        '<p>All donations made through the website are final. Monthly subscriptions can be canceled at any time by contacting us. In the rare event of an error in processing a transaction, please contact us immediately to resolve the issue.</p></div>' +
        '<div><h3 class="text-title-lg text-primary mb-3">3. Intellectual Property</h3>' +
        '<p>Unless otherwise indicated, the site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the site are owned or controlled by us, and are protected by copyright and trademark laws.</p></div>' +
        '<div><h3 class="text-title-lg text-primary mb-3">4. Limitation of Liability</h3>' +
        '<p>In no event will we or our directors, employees, or volunteers be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages arising from your use of the site.</p></div>' +
        '<div><h3 class="text-title-lg text-primary mb-3">5. Governing Law</h3>' +
        '<p>These terms shall be governed by and defined following the laws of the State of Ohio. HopeBridge Foundation and yourself irrevocably consent that the courts of Ohio shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.</p></div>' +
        '</div></section>'
      );
    }

    function pageFinancials() {
      return (
        '<section class="bg-surface pt-20 pb-14 md:pt-32 md:pb-20 border-b border-border-subtle">' +
        '<div class="max-w-container-max mx-auto px-margin-mobile md:px-10 lg:px-margin-desktop">' +
        '<div class="max-w-4xl">' +
        eyebrow("Transparency") +
        '<h1 class="text-primary text-display-xl-mobile md:text-display-xl mt-7 mb-7 text-balance">Financials & Accountability</h1>' +
        '<p class="text-body-lg text-on-surface-variant max-w-2xl text-pretty">Where every dollar goes and what it achieves.</p>' +
        '</div></div></section>' +
        '<section class="py-16 md:py-24 bg-surface">' +
        '<div class="max-w-3xl mx-auto px-margin-mobile md:px-10 lg:px-margin-desktop text-body-lg text-on-surface-variant space-y-8">' +
        '<p class="text-headline-sm-m md:text-headline-sm text-primary text-pretty">We believe that stewardship is the foundation of trust. That is why our financial records are open, audited, and always available for public scrutiny.</p>' +
        '<p>For every dollar donated to HopeBridge Foundation, eighty-seven cents goes directly to programs in Appalachia. Nine cents covers the essential operations and staff that make those programs possible, and four cents is reinvested into fundraising to sustain our long-term commitments.</p>' +
        
        '<figure class="alloc border border-border-subtle">' +
        '<figcaption class="alloc__head">' +
        '<h3 class="text-title-lg text-primary">FY2025 Resource Allocation</h3>' +
        '<p class="alloc__sub">How every dollar was spent</p>' +
        '</figcaption>' +
        '<div class="alloc__bar" role="img" aria-label="Program services 87 percent, management and operations 9 percent, fundraising 4 percent">' +
        '<span class="alloc-seg alloc-seg--primary" style="width:87%"></span>' +
        '<span class="alloc-seg alloc-seg--secondary" style="width:9%"></span>' +
        '<span class="alloc-seg alloc-seg--outline" style="width:4%"></span>' +
        '</div>' +
        '<ul class="alloc__list">' +
        '<li class="alloc-row">' +
        '<span class="alloc-swatch alloc-swatch--primary" aria-hidden="true"></span>' +
        '<span class="alloc-row__body">' +
        '<span class="alloc-row__label">Program Services</span>' +
        '<span class="alloc-row__note">Direct funding for water, sanitation, and education initiatives.</span>' +
        '</span>' +
        '<span class="alloc-row__figure">87<span class="alloc-row__pct">%</span></span>' +
        '</li>' +
        '<li class="alloc-row">' +
        '<span class="alloc-swatch alloc-swatch--secondary" aria-hidden="true"></span>' +
        '<span class="alloc-row__body">' +
        '<span class="alloc-row__label">Management &amp; Operations</span>' +
        '<span class="alloc-row__note">Logistics, auditing, certification processes, and core staff.</span>' +
        '</span>' +
        '<span class="alloc-row__figure">9<span class="alloc-row__pct">%</span></span>' +
        '</li>' +
        '<li class="alloc-row">' +
        '<span class="alloc-swatch alloc-swatch--outline" aria-hidden="true"></span>' +
        '<span class="alloc-row__body">' +
        '<span class="alloc-row__label">Fundraising</span>' +
        '<span class="alloc-row__note">Grant writing, donor outreach, and sustainable growth efforts.</span>' +
        '</span>' +
        '<span class="alloc-row__figure">4<span class="alloc-row__pct">%</span></span>' +
        '</li>' +
        '</ul>' +
        '</figure>' +
        
        '<div><h3 class="text-title-lg text-primary mb-3">Audits and Tax Documents</h3>' +
        '<p class="mb-4">Our audited financials and IRS Form 990 are prepared every year by an independent third-party accounting firm. We send these documents in full to anyone who asks, including the pages detailing projects that did not meet their target metrics.</p>' +
        '<ul class="list-disc pl-6 space-y-2">' +
        '<li><a href="#/contact" data-link class="text-primary underline hover:text-secondary transition-colors">Request FY2025 Audited Financials (PDF)</a></li>' +
        '<li><a href="#/contact" data-link class="text-primary underline hover:text-secondary transition-colors">Request FY2025 IRS Form 990 (PDF)</a></li>' +
        '</ul></div>' +
        
        '</div></section>'
      );
    }

    function page404() {
      return (
        '<section class="bg-surface pt-20 pb-14 md:pt-32 md:pb-20 border-b border-border-subtle page-404 flex flex-col justify-center items-center text-center">' +
        '<div class="max-w-container-max mx-auto px-margin-mobile md:px-10 lg:px-margin-desktop">' +
        '<h1 class="text-primary text-display-xl-mobile md:text-display-xl mb-6">404</h1>' +
        '<p class="text-title-lg-m md:text-title-lg text-on-surface-variant mb-10 max-w-xl mx-auto">We couldn\'t find the page you\'re looking for.</p>' +
        '<a href="#/" data-link class="cta-pill cta-pill--compact inline-flex border border-primary text-primary px-8 py-3 text-label-caps uppercase hover:bg-surface-container transition-colors rounded-full">Return Home</a>' +
        '</div>' +
        '</section>'
      );
    }
    /* ============================================================================
       APP, routing, motion, forms and the donation flow
       ========================================================================== */

    const ROUTES = {
      "/": { render: pageHome, title: "HopeBridge Foundation, Connecting compassion with opportunity" },
      "/about": { render: pageAbout, title: "About, HopeBridge Foundation" },
      "/our-work": { render: pageWork, title: "Our Work, HopeBridge Foundation" },
      "/impact": { render: pageImpact, title: "Impact & Projects, HopeBridge Foundation" },
      "/donate": { render: pageDonate, title: "Donate, HopeBridge Foundation" },
      "/contact": { render: pageContact, title: "Contact, HopeBridge Foundation" },
      "/privacy": { render: pagePrivacy, title: "Privacy Policy, HopeBridge Foundation" },
      "/terms": { render: pageTerms, title: "Terms of Service, HopeBridge Foundation" },
      "/financials": { render: pageFinancials, title: "Financials, HopeBridge Foundation" },
      "/404": { render: page404, title: "Page Not Found, HopeBridge Foundation" }
    };

    let currentPath = null;
    let currentKey = null;

    function parseHash() {
      let raw = location.hash.replace(/^#/, "");
      if (!raw || raw === "/") raw = "/";

      /* A bare "#id" is an in-page anchor, not a route. The skip link uses one, and
         treating it as a path sent the reader to the home page: "#main" became
         "/main", matched no route, and fell back to "/". Resolve it against the page
         already showing instead, so it scrolls without re-rendering. */
      if (raw.charAt(0) !== "/") {
        const here = currentPath || "/";
        return { path: here, anchor: raw, query: {}, key: currentKey || here };
      }

      let anchor = "";
      const hi = raw.indexOf("#");
      if (hi > -1) { anchor = raw.slice(hi + 1); raw = raw.slice(0, hi); }

      const query = {};
      let qs = "";
      const qi = raw.indexOf("?");
      if (qi > -1) {
        qs = raw.slice(qi + 1);
        raw.slice(qi + 1).split("&").forEach((pair) => {
          const kv = pair.split("=");
          if (kv[0]) query[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1] || "");
        });
        raw = raw.slice(0, qi);
      }
      if (raw.length > 1 && raw.slice(-1) === "/") raw = raw.slice(0, -1);
      const path = ROUTES[raw] ? raw : "/404";
      /* the key includes the query string so that e.g. ?reason=volunteer
         re-renders the page, while a bare #anchor change does not */
      return { path: path, anchor: anchor, query: query, key: path + (qs ? "?" + qs : "") };
    }

    function scrollToAnchor(id) {
      if (!id) return false;
      const el = document.getElementById(id);
      if (!el) return false;
      if (el.scrollIntoView) el.scrollIntoView({ behavior: "smooth", block: "start" });
      return true;
    }

    function setActiveNav(path) {
      document.querySelectorAll("[data-nav]").forEach((a) => {
        const on = a.getAttribute("data-nav") === path;
        a.classList.toggle("text-primary", on);
        a.classList.toggle("text-on-surface-variant", !on);
        a.style.textDecoration = on ? "underline" : "";
        a.style.textUnderlineOffset = "6px";
        if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
      });
      document.querySelectorAll("[data-bnav]").forEach((a) => {
        const on = a.getAttribute("data-bnav") === path;
        a.classList.toggle("text-primary", on);
        a.classList.toggle("text-on-surface-variant", !on);
        const icon = a.querySelector(".material-symbols-outlined");
        if (icon) icon.style.fontVariationSettings = on ? "'FILL' 1, 'wght' 400" : "'FILL' 0, 'wght' 300";
      });
    }

    function prefersReducedMotion() {
      return typeof window.matchMedia === "function" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }

    /* Where the reader was on each route they have already seen. Going Back to a long
       page should return you to the paragraph you left, not the top of it. */
    const scrollMemory = new Map();
    /* "pop" only when the browser moved through history; a tapped link is always a push
       and always lands at the top. Set by the popstate listener below. */
    let navIntent = "push";

    function render() {
      const r = parseHash();
      const samePage = r.key === currentKey;
      const intent = navIntent;
      navIntent = "push";

      if (!samePage) {
        if (currentKey) scrollMemory.set(currentKey, window.scrollY || window.pageYOffset || 0);

        const route = ROUTES[r.path];
        document.title = route.title;
        const app = document.getElementById("app");
        app.innerHTML = route.render(r.query);
        currentPath = r.path;
        currentKey = r.key;
        setActiveNav(r.path);
        if (r.path === "/donate") initDonation();
        if (r.path === "/contact") initContactForm();
        observeAll();

        /* Enter-only fade: the new page resolves in, but nothing waits for an exit
           animation first, so navigation still feels instant. */
        if (!prefersReducedMotion()) {
          app.classList.remove("route-in");
          void app.offsetWidth;
          app.classList.add("route-in");
        }
      }

      requestAnimationFrame(() => {
        if (scrollToAnchor(r.anchor) || samePage) return;
        const remembered = intent === "pop" ? scrollMemory.get(r.key) : 0;
        /* "instant", not "auto": html{scroll-behavior:smooth} makes "auto" resolve to a
           smooth glide, so a route change would visibly scroll up from wherever the
           reader had been. Arriving on a new page should be a cut, not a journey. */
        window.scrollTo({ top: remembered || 0, behavior: "instant" });
      });
    }

    /* ---------------------------------------------------------------- motion --*/
    let io, ioCount, ioBar;

    function observeAll() {
      if (io) io.disconnect();
      if (ioCount) ioCount.disconnect();
      if (ioBar) ioBar.disconnect();

      const reduce = typeof window.matchMedia === "function" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
      document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

      ioCount = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          countUp(e.target, reduce);
          ioCount.unobserve(e.target);
        });
      }, { threshold: 0.35 });
      document.querySelectorAll("[data-count]").forEach((el) => ioCount.observe(el));

      ioBar = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.style.width = e.target.getAttribute("data-bar") + "%";
          ioBar.unobserve(e.target);
        });
      }, { threshold: 0.4 });
      document.querySelectorAll("[data-bar]").forEach((el) => ioBar.observe(el));

      attachImageFallbacks();
    }

    function countUp(el, reduce) {
      const target = parseFloat(el.getAttribute("data-count")) || 0;
      const prefix = el.getAttribute("data-prefix") || "";
      const suffix = el.getAttribute("data-suffix") || "";
      const decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
      const fmt = (v) => prefix + v.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix;

      if (reduce) { el.textContent = fmt(target); return; }

      const dur = 1500;
      const t0 = performance.now();
      function frame(now) {
        const p = Math.min(1, (now - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        const v = decimals ? target * eased : Math.round(target * eased);
        el.textContent = fmt(v);
        if (p < 1) requestAnimationFrame(frame);
        else el.textContent = fmt(target);
      }
      requestAnimationFrame(frame);
    }

    /* Any image that fails to load falls back to a brand-colored panel
       rather than a broken-image icon. */
    function attachImageFallbacks() {
      const reduce = prefersReducedMotion();
      document.querySelectorAll(".ph img").forEach((img) => {
        if (img.dataset.fbBound) return;
        img.dataset.fbBound = "1";
        const fail = () => {
          img.closest(".ph").classList.add("ph--failed");
          img.classList.remove("img-fade");
        };
        img.addEventListener("error", fail);
        if (img.complete && img.naturalWidth === 0) { fail(); return; }
        /* Resolve out of the .ph tint rather than snapping in. An already-cached image
           skips the fade, so a second visit stays instant. The class only ever hides
           an image that JS is holding, so a JS failure still shows every photo. */
        if (reduce || img.complete) return;
        img.classList.add("img-fade");
        img.addEventListener("load", () => img.classList.remove("img-fade"), { once: true });
      });
    }

    /* ------------------------------------------------------------- chrome ----*/
    function initChrome() {
      const menu = document.getElementById("mobileMenu");
      const panel = document.getElementById("menuPanel");
      const btn = document.getElementById("menuBtn");
      const closeB = document.getElementById("menuClose");
      const scrim = document.getElementById("menuScrim");

      function openMenu() {
        menu.classList.remove("hidden");
        document.body.style.overflow = "hidden";
        btn.setAttribute("aria-expanded", "true");
        requestAnimationFrame(() => panel.classList.remove("translate-x-full"));
        closeB.focus();
      }
      function closeMenu() {
        panel.classList.add("translate-x-full");
        btn.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
        setTimeout(() => menu.classList.add("hidden"), 300);
      }
      btn.addEventListener("click", openMenu);
      closeB.addEventListener("click", closeMenu);
      scrim.addEventListener("click", closeMenu);
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !menu.classList.contains("hidden")) closeMenu();
      });
      menu.addEventListener("click", (e) => { if (e.target.closest("[data-link]")) closeMenu(); });

      /* header condenses once you scroll */
      const inner = document.getElementById("headerInner");
      let ticking = false;
      window.addEventListener("scroll", () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          const s = window.scrollY > 40;
          inner.classList.toggle("md:h-16", s);
          inner.classList.toggle("md:h-20", !s);
          ticking = false;
        });
      }, { passive: true });

      /* newsletter */
      const nlForm = document.getElementById("newsletterForm");
      nlForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const input = document.getElementById("nlEmail");
        const msg = document.getElementById("nlMsg");
        if (!isEmail(input.value)) {
          msg.textContent = "Please enter a valid email address.";
          msg.className = "text-body-md mt-3 text-on-error-container";
          input.focus();
          return;
        }

        msg.textContent = "Signing up...";
        msg.className = "text-body-md mt-3 text-on-surface-variant";

        try {
          const response = await fetch("https://formspree.io/f/xrpgeqon", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({ email: input.value, form_type: "newsletter" })
          });

          if (response.ok) {
            msg.textContent = "You are on the list, four updates a year, nothing else.";
            msg.className = "text-body-md mt-3 text-on-surface-variant";
            input.value = "";
          } else {
            msg.textContent = "Oops! There was a problem submitting your email.";
            msg.className = "text-body-md mt-3 text-on-error-container";
          }
        } catch (error) {
          msg.textContent = "Oops! There was a network error.";
          msg.className = "text-body-md mt-3 text-on-error-container";
        }
      });
    }

    const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v).trim());

    function markError(inputEl, on) {
      const g = inputEl.closest(".field-group") || inputEl.parentElement;
      if (g) g.classList.toggle("has-error", !!on);
      if (on) inputEl.setAttribute("aria-invalid", "true");
      else inputEl.removeAttribute("aria-invalid");
    }

    /* ------------------------------------------------------- contact form ----*/
    function initContactForm() {
      const form = document.getElementById("contactForm");
      if (!form) return;

      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const name = document.getElementById("cName");
        const mail = document.getElementById("cEmail");
        const phone = document.getElementById("cPhone");
        const reason = document.getElementById("cReason");
        const org = document.getElementById("cOrg");
        const msg = document.getElementById("cMsg");
        let bad = null;

        const nameBad = !name.value.trim();
        const mailBad = !isEmail(mail.value);

        markError(name, nameBad); markError(mail, mailBad);
        bad = nameBad ? name : mailBad ? mail : null;

        if (bad) { bad.focus(); return; }

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = "Sending...";
        submitBtn.disabled = true;

        try {
          const response = await fetch("https://formspree.io/f/xrpgeqon", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({
              form_type: "contact",
              name: name.value,
              email: mail.value,
              phone: phone ? phone.value : "",
              reason: reason ? reason.value : "",
              organization: org ? org.value : "",
              message: msg.value
            })
          });

          submitBtn.textContent = originalText;
          submitBtn.disabled = false;

          if (response.ok) {
            document.getElementById("contactFormWrap").classList.add("hidden");
            const done = document.getElementById("contactDone");
            done.classList.remove("hidden");
            if (done.scrollIntoView) done.scrollIntoView({ behavior: "smooth", block: "center" });
            form.reset();
          } else {
            alert("Oops! There was a problem submitting your form.");
          }
        } catch (error) {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          alert("Oops! There was a network error.");
        }
      });

      document.getElementById("contactAgain").addEventListener("click", () => {
        form.reset();
        form.querySelectorAll(".has-error").forEach((el) => el.classList.remove("has-error"));
        document.getElementById("contactDone").classList.add("hidden");
        document.getElementById("contactFormWrap").classList.remove("hidden");
        document.getElementById("cName").focus();
      });
    }

    /* ---------------------------------------------------------- donation -----*/
    const DON = {
      freq: "once",
      amount: 0,
      designation: "most-needed",
      fees: false,
      anon: false,
      first: "", last: "", email: "", phone: "", country: "Ohio"
    };

    /* The donation form is the one place on this site where losing your work costs real
       money, so every change is mirrored to localStorage and offered back for 24 hours.
       Persistence is a convenience: every call is guarded, and a browser that refuses
       storage (private mode, quota, blocked cookies) simply gets the old behaviour. */
    const DON_KEY = "hb.donate.v1";
    const DON_TTL = 24 * 60 * 60 * 1000;
    let donStep = "1";

    /* An untouched form is not a draft. Without this, merely opening the donate page
       (or pressing "Start over") would store default values and greet the next visit
       with a "we kept your place" prompt for a form nobody had filled in. */
    function donIsPristine() {
      return donStep === "1" && DON.freq === "once" && !DON.amount &&
        DON.designation === "most-needed" && !DON.fees && !DON.anon &&
        !DON.first && !DON.last && !DON.email && !DON.phone;
    }

    function donSave() {
      if (donStep === "processing" || donStep === "success") return;
      if (donIsPristine()) { donClear(); return; }
      try {
        localStorage.setItem(DON_KEY, JSON.stringify({ t: Date.now(), step: donStep, don: DON }));
      } catch (e) { /* storage unavailable - nothing to do, and nothing to tell the donor */ }
    }
    function donLoad() {
      try {
        const raw = localStorage.getItem(DON_KEY);
        if (!raw) return null;
        const saved = JSON.parse(raw);
        if (!saved || !saved.don || typeof saved.don !== "object") return null;
        if (Date.now() - (saved.t || 0) > DON_TTL) { donClear(); return null; }
        return saved;
      } catch (e) { return null; }
    }
    function donClear() {
      try { localStorage.removeItem(DON_KEY); } catch (e) { }
    }

    /* The sentence that persuaded someone to give, carried past step one instead of
       vanishing the moment they move on. */
    function donImpactNote() {
      const match = donPresets().find((p) => p.amount === DON.amount);
      return match ? match.note : "";
    }

    function donPresets(freq) {
      return SITE.donate.presets[freq || DON.freq] || SITE.donate.presets.once;
    }
    /* Second tier, which is the one most people pick, so the form opens on a real amount
       instead of an empty field that still validated as $50 behind the scenes. */
    function donDefault(freq) {
      const list = donPresets(freq);
      return (list[1] || list[0]).amount;
    }

    function renderAmountChips() {
      const wrap = document.getElementById("amountChips");
      if (!wrap) return;
      const per = DON.freq === "monthly" ? '<span class="opacity-70">/mo</span>' : "";
      wrap.innerHTML = donPresets().map((p) =>
        '<button type="button" class="chip" data-amount="' + p.amount + '" aria-pressed="false">' +
        money(p.amount) + per + "</button>").join("");
    }

    /* Single place that keeps the chips, the custom field and DON.amount telling the same
       story, so the donor always sees the amount they are about to give. */
    function syncAmountUI() {
      const wrap = document.getElementById("amountChips");
      const note = document.getElementById("amountNote");
      const match = donPresets().find((p) => p.amount === DON.amount);
      if (wrap) wrap.querySelectorAll("[data-amount]").forEach((b) =>
        b.setAttribute("aria-pressed", String(Number(b.getAttribute("data-amount")) === DON.amount)));
      if (note) note.textContent = match ? match.note
        : DON.amount ? "Thank you. " + money(DON.amount) + (DON.freq === "monthly" ? " a month" : "") +
          " goes into the same programmes as every other gift."
          : "";
    }
    function donFeeAmount() { return DON.fees ? Math.round(DON.amount * 0.03) : 0; }
    function donTotal() { return DON.amount + donFeeAmount(); }
    function donDesigLabel() {
      const d = SITE.donate.designations.find((x) => x.value === DON.designation);
      return d ? d.label : "Where it is needed most";
    }

    /* Put a restored DON back onto the actual controls. */
    function donHydrateFields() {
      const root = document.getElementById("donateCard");
      if (!root) return;
      root.querySelectorAll("[data-freq]").forEach((x) =>
        x.setAttribute("aria-pressed", String(x.getAttribute("data-freq") === DON.freq)));
      const onPreset = donPresets().some((p) => p.amount === DON.amount);
      const custom = document.getElementById("customAmount");
      if (custom) custom.value = (onPreset || !DON.amount) ? "" : DON.amount.toLocaleString("en-US");
      const set = (id, v) => { const el = document.getElementById(id); if (el) el.value = v; };
      set("dFirst", DON.first); set("dLast", DON.last); set("dEmail", DON.email);
      set("dPhone", DON.phone); set("dCountry", DON.country); set("designation", DON.designation);
      const anon = document.getElementById("dAnon"); if (anon) anon.checked = !!DON.anon;
      const fees = document.getElementById("dFees"); if (fees) fees.checked = !!DON.fees;
    }

    function donRemoveResumeNote() {
      const note = document.getElementById("donResume");
      if (note) note.remove();
    }

    function donShowResumeNote() {
      // Resume note feature disabled as per requirements.
    }

    function initDonation() {
      DON.freq = "once"; DON.amount = 0; DON.designation = "most-needed";
      DON.fees = false; DON.anon = false;
      DON.first = ""; DON.last = ""; DON.email = ""; DON.phone = ""; DON.country = "Ohio";

      const root = document.getElementById("donateCard");

      /* frequency */
      root.querySelectorAll("[data-freq]").forEach((b) => {
        b.addEventListener("click", () => {
          DON.freq = b.getAttribute("data-freq");
          root.querySelectorAll("[data-freq]").forEach((x) =>
            x.setAttribute("aria-pressed", String(x === b)));
          document.getElementById("customAmount").value = "";
          DON.amount = 0;
          renderAmountChips();
          syncAmountUI();
        });
      });

      /* Delegated, because the chips are re-rendered whenever the frequency changes. */
      const chipWrap = document.getElementById("amountChips");
      if (chipWrap) chipWrap.addEventListener("click", (e) => {
        const b = e.target.closest("[data-amount]");
        if (!b) return;
        DON.amount = Number(b.getAttribute("data-amount"));
        const custom = document.getElementById("customAmount");
        custom.value = "";
        markError(custom, false);
        syncAmountUI();
      });

      /* custom amount */
      const custom = document.getElementById("customAmount");
      custom.addEventListener("input", () => {
        const digits = custom.value.replace(/[^\d]/g, "");
        custom.value = digits ? Number(digits).toLocaleString("en-US") : "";
        DON.amount = digits ? parseInt(digits, 10) : 0;
        markError(custom, false);
        syncAmountUI();
      });

      document.getElementById("designation").addEventListener("change", (e) => {
        DON.designation = e.target.value;
      });

      /* An error that only lifts when you press Continue again reads as though the
         form ignored the correction, so each required field clears its own. */
      ["dFirst", "dLast", "dEmail"].forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.addEventListener("input", () => {
          const ok = id === "dEmail" ? isEmail(el.value) : !!el.value.trim();
          if (ok) markError(el, false);
        });
      });

      /* step navigation */
      root.querySelectorAll("[data-next]").forEach((b) =>
        b.addEventListener("click", () => {
          const to = b.getAttribute("data-next");
          if (validateStep(Number(to) - 1)) goStep(to);
        }));
      root.querySelectorAll("[data-back]").forEach((b) =>
        b.addEventListener("click", () => goStep(b.getAttribute("data-back"))));

      /* crypto copy button */
      const copyBtn = document.getElementById("copyWalletBtn");
      if (copyBtn) {
        copyBtn.addEventListener("click", () => {
          const addr = document.getElementById("cryptoAddress");
          addr.select();
          addr.setSelectionRange(0, 99999);
          navigator.clipboard.writeText(addr.value);
          const msg = document.getElementById("copyMsg");
          msg.classList.remove("hidden");
          setTimeout(() => msg.classList.add("hidden"), 3000);
        });
      }

      document.getElementById("payBtn").addEventListener("click", runPayment);
      document.getElementById("donateAgain").addEventListener("click", resetDonation);

      /* Delegated, and deliberately after the specific handlers above: those set DON
         from whichever control changed, then these persist whatever DON now holds. */
      const mirrorDetails = () => {
        const val = (id) => { const el = document.getElementById(id); return el ? el.value.trim() : ""; };
        const chk = (id) => { const el = document.getElementById(id); return el ? el.checked : false; };
        DON.first = val("dFirst"); DON.last = val("dLast"); DON.email = val("dEmail");
        DON.phone = val("dPhone");
        const c = document.getElementById("dCountry"); if (c) DON.country = c.value;
        DON.anon = chk("dAnon"); DON.fees = chk("dFees");
        donSave();
      };
      root.addEventListener("input", mirrorDetails);
      root.addEventListener("change", mirrorDetails);
      root.addEventListener("click", donSave);

      const saved = donLoad();
      if (saved) Object.assign(DON, saved.don);

      donHydrateFields();
      renderAmountChips();
      syncAmountUI();

      if (saved) {
        const step = ["1", "2", "3"].indexOf(String(saved.step)) === -1 ? "1" : String(saved.step);
        goStep(step, true);
        donShowResumeNote();
      } else {
        goStep("1", true);
      }
    }

    /* Clears the form without re-binding listeners (the DOM is not re-rendered). */
    function resetDonation() {
      donClear();
      donRemoveResumeNote();
      DON.freq = "once"; DON.amount = 0; DON.designation = "most-needed";
      DON.fees = false; DON.anon = false;
      DON.first = ""; DON.last = ""; DON.email = ""; DON.phone = ""; DON.country = "Ohio";

      const root = document.getElementById("donateCard");
      root.querySelectorAll("[data-freq]").forEach((x) =>
        x.setAttribute("aria-pressed", String(x.getAttribute("data-freq") === "once")));
      root.querySelectorAll("[data-pay]").forEach((x) =>
        x.setAttribute("aria-pressed", String(x.getAttribute("data-pay") === "card")));
      root.querySelectorAll("[data-paypanel]").forEach((p) =>
        p.classList.toggle("hidden", p.getAttribute("data-paypanel") !== "card"));

      ["customAmount", "dFirst", "dLast", "dEmail", "dPhone"].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.value = "";
      });
      ["dAnon", "dFees"].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.checked = false;
      });
      document.getElementById("designation").value = "most-needed";
      document.getElementById("dCountry").value = "Ohio";
      root.querySelectorAll(".has-error").forEach((el) => el.classList.remove("has-error"));

      renderAmountChips();
      syncAmountUI();
      goStep("1");
    }

    function validateStep(step) {
      if (step === 1) {
        const custom = document.getElementById("customAmount");
        if (!DON.amount || DON.amount < 5) {
          markError(custom, true);
          custom.focus();
          return false;
        }
        markError(custom, false);
        return true;
      }
      if (step === 2) {
        const f = document.getElementById("dFirst");
        const l = document.getElementById("dLast");
        const e = document.getElementById("dEmail");
        const fb = !f.value.trim(), lb = !l.value.trim(), eb = !isEmail(e.value);
        markError(f, fb); markError(l, lb); markError(e, eb);
        if (fb || lb || eb) { (fb ? f : lb ? l : e).focus(); return false; }

        DON.first = f.value.trim();
        DON.last = l.value.trim();
        DON.email = e.value.trim();
        DON.phone = document.getElementById("dPhone").value.trim();
        DON.country = document.getElementById("dCountry").value;
        DON.anon = document.getElementById("dAnon").checked;
        DON.fees = document.getElementById("dFees").checked;
        return true;
      }
      return true;
    }

    function goStep(step, silent) {
      donStep = String(step);
      const root = document.getElementById("donateCard");
      root.querySelectorAll("[data-step]").forEach((p) =>
        p.classList.toggle("hidden", p.getAttribute("data-step") !== String(step)));

      const numeric = Number(step);
      const stepperEl = document.getElementById("stepper");
      if (stepperEl) {
        const done = isNaN(numeric) ? 5 : numeric;
        stepperEl.classList.toggle("hidden", step === "success");
        stepperEl.querySelectorAll("[data-step-dot]").forEach((li) => {
          const n = Number(li.getAttribute("data-step-dot"));
          const dot = li.querySelector(".dot");
          const lbl = li.querySelector(".lbl");
          const on = n <= done;
          dot.classList.toggle("bg-primary", on);
          dot.classList.toggle("text-on-primary", on);
          dot.classList.toggle("border-primary", on);
          dot.classList.toggle("bg-surface", !on);
          dot.classList.toggle("text-on-surface-variant", !on);
          lbl.classList.toggle("text-primary", n === done);
          lbl.classList.toggle("text-on-surface-variant", n !== done);
        });
      }

      if (step === "3") buildReview();
      if (step === "4") document.getElementById("payTotal").textContent = money(donTotal());
      donSave();

      if (!silent) {
        if (root.scrollIntoView) root.scrollIntoView({ behavior: "smooth", block: "start" });
        const h = root.querySelector('[data-step="' + step + '"] h2');
        if (h) { h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true }); }
      }
    }

    function reviewRow(label, value, editStep) {
      return '<div class="flex items-baseline justify-between gap-6 py-4 border-b border-border-subtle">' +
        '<dt class="text-label-caps uppercase text-on-surface-variant shrink-0">' + esc(label) + "</dt>" +
        '<dd class="text-body-md text-on-surface text-right flex items-baseline gap-3">' +
        "<span>" + value + "</span>" +
        (editStep ? '<button type="button" data-back="' + editStep + '" class="text-label-caps-sm uppercase text-secondary hover:text-primary transition-colors">Edit</button>' : "") +
        "</dd></div>";
    }

    function buildReview() {
      const fee = donFeeAmount();
      let html = "";
      html += reviewRow("Amount", '<span class="font-numeric text-title-lg text-primary">' + money(DON.amount) + "</span>", "1");
      html += reviewRow("Frequency", DON.freq === "monthly" ? "Monthly gift" : "One-time gift", "1");
      html += reviewRow("Directed to", esc(donDesigLabel()), "1");
      const impact = donImpactNote();
      if (impact) html += '<div class="py-5 border-b border-border-subtle">' +
        '<p class="text-body-md text-on-surface-variant text-pretty">' + esc(impact) + "</p></div>";
      html += reviewRow("Donor", DON.anon ? "Anonymous" : esc(DON.first + " " + DON.last), "2");
      html += reviewRow("Receipt to", esc(DON.email), "2");
      if (DON.phone) html += reviewRow("Phone", esc(DON.phone), "2");
      html += reviewRow("State", esc(DON.country), "2");
      if (fee) html += reviewRow("Processing fee", money(fee) + " (added)", "2");
      html += '<div class="flex items-baseline justify-between gap-6 py-6 border-b border-border-subtle bg-stone-surface px-5 -mx-5 sm:mx-0 sm:px-5">' +
        '<dt class="text-label-caps uppercase text-on-surface">Total ' + (DON.freq === "monthly" ? "per month" : "today") + "</dt>" +
        '<dd class="font-numeric text-headline-md text-primary">' + money(donTotal()) + "</dd></div>";

      const list = document.getElementById("reviewList");
      list.innerHTML = html;
      list.querySelectorAll("[data-back]").forEach((b) =>
        b.addEventListener("click", () => goStep(b.getAttribute("data-back"))));
    }

    function makeReference() {
      const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
      let s = "";
      for (let i = 0; i < 6; i++) s += chars.charAt(Math.floor(Math.random() * chars.length));
      return "HB-" + new Date().getFullYear() + "-" + s;
    }

    function runPayment() {
      goStep("processing");
      const msg = document.getElementById("processingMsg");
      const lines = [
        "Contacting the payment provider…",
        "Authorising " + money(donTotal()) + "…",
        "Confirming with HopeBridge…"
      ];
      let i = 0;
      const tick = setInterval(() => {
        i += 1;
        if (i < lines.length) msg.textContent = lines[i];
      }, 900);

      setTimeout(() => {
        clearInterval(tick);
        /* The gift is complete; a saved draft would only be a stale prompt next visit. */
        donClear();
        donRemoveResumeNote();
        buildReceipt();
        goStep("success");

        /* Refresh to a new page to start over again after 30 seconds */
        setTimeout(() => {
          window.location.reload();
        }, 30000);
      }, 2900);
    }

    function buildReceipt() {
      const ref = makeReference();
      const when = new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
      const fee = donFeeAmount();

      document.getElementById("successLead").innerHTML =
        "A receipt is on its way to <strong>" + esc(DON.email) + "</strong>. You are supporting <strong>" +
        esc(donDesigLabel()) + "</strong>" + (DON.freq === "monthly" ? " every month" : "") + "." +
        (donImpactNote() ? " " + esc(donImpactNote()) : "");

      let html = "";
      html += reviewRow("Reference", '<span class="font-mono tracking-wide">' + ref + "</span>");
      html += reviewRow("Date", when);
      html += reviewRow("Amount", money(DON.amount));
      if (fee) html += reviewRow("Processing fee", money(fee));
      html += reviewRow("Frequency", DON.freq === "monthly" ? "Monthly gift" : "One-time gift");
      html += reviewRow("Directed to", esc(donDesigLabel()));
      html += reviewRow("Donor", DON.anon ? "Anonymous" : esc(DON.first + " " + DON.last));
      html += reviewRow("Tax ID (EIN)", "00-0000000");
      html += '<div class="flex items-baseline justify-between gap-6 py-6 border-b border-border-subtle bg-stone-surface px-5">' +
        '<dt class="text-label-caps uppercase text-on-surface">Total ' + (DON.freq === "monthly" ? "per month" : "charged") + "</dt>" +
        '<dd class="font-numeric text-headline-md text-primary">' + money(donTotal()) + "</dd></div>";

      document.getElementById("receiptList").innerHTML = html;
    }

    /* ------------------------------------------------------------- start -----*/
    function initScrollToTop() {
      const btn = document.getElementById("scrollToTopBtn");
      if (!btn) return;
      window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
          btn.classList.remove("opacity-0", "pointer-events-none");
          btn.classList.add("opacity-100", "pointer-events-auto");
        } else {
          btn.classList.add("opacity-0", "pointer-events-none");
          btn.classList.remove("opacity-100", "pointer-events-auto");
        }
      });
      btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    let booted = false;
    function boot() {
      if (booted) return;
      booted = true;
      /* We restore scroll ourselves, per route key; the browser's own guess fights it. */
      if ("scrollRestoration" in history) history.scrollRestoration = "manual";
      initChrome();
      initScrollToTop();
      render();
    }
    window.addEventListener("popstate", () => { navIntent = "pop"; });
    window.addEventListener("hashchange", render);
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", boot);
    } else {
      boot();
    }
  