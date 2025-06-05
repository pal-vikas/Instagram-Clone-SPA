const Users = [
    {
        name: "Aarav",
        profession: "Software Engineer",
        image: "https://images.unsplash.com/photo-1598346762291-aee88549193f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHVzZXJ8ZW58MHwwfDB8fHww",
        description: "Coding my way through life! 💻 | Coffee lover ☕ | Always curious 🚀",
        followers: 1200,
        following: 350,
        username: "aarav_coder",
        posts: [
            {
                id: 1,
                image: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=800&auto=format&fit=crop&q=60",
                caption: "New day, new code! 🌟 #CodingLife",
                likes: 200,
                posted: "2024-06-01"
            },
            {
                id: 2,
                image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=60",
                caption: "Debugging mode: ON 🐛 #SoftwareEngineer",
                likes: 150,
                posted: "2024-06-05"
            },
            {
                id: 3,
                image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=60",
                caption: "Coffee and code ☕💻 #CodeLife",
                likes: 180,
                posted: "2024-06-10"
            },
            {
                id: 4,
                image: "https://images.unsplash.com/photo-1748519707841-df414b70a215?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
                caption: "Just launched a new feature! 🚀 #ProductLaunch",
                likes: 220,
                posted: "2024-06-12"
            },
            {
                id: 5,
                image: "https://images.unsplash.com/photo-1745894118353-88e64617e064?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D",
                caption: "Coding marathon underway 🏃‍♂️ #Hackathon",
                likes: 250,
                posted: "2024-06-15"
            },
            {
                id: 6,
                image: "https://plus.unsplash.com/premium_photo-1748882218591-0755e2a8baa2?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D",
                caption: "Weekend coding session! 🖥️ #WeekendVibes",
                likes: 190,
                posted: "2024-06-17"
            }
        ]
    },
    {
        name: "Riya",
        profession: "Data Scientist",
        image: "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHVzZXJ8ZW58MHwwfDB8fHww",
        description: "Data whisperer 📊 | Exploring the world through numbers 🌍 | Yoga enthusiast 🧘‍♀️",
        followers: 950,
        following: 420,
        username: "riya_data",
        posts: [
            {
                id: 7,
                image: "https://images.unsplash.com/photo-1735305995508-acf59ef621e5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D",
                caption: "Analyzing new data sets 📊 #DataScience",
                likes: 210,
                posted: "2024-06-01"
            },
            {
                id: 8,
                image: "https://images.unsplash.com/photo-1681503648108-1856e62003d6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
                caption: "Data visualization is key 🔑 #BigData",
                likes: 190,
                posted: "2024-06-04"
            },
            {
                id: 9,
                image: "https://images.unsplash.com/photo-1697310393749-7d7da74730d3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
                caption: "Loving my new workspace setup! 🖥️ #WorkFromHome",
                likes: 230,
                posted: "2024-06-07"
            },
            {
                id: 10,
                image: "https://images.unsplash.com/photo-1623607963858-75dacfb4cbc6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
                caption: "Deep dive into machine learning 🤖 #AI",
                likes: 250,
                posted: "2024-06-09"
            },
            {
                id: 11,
                image: "https://images.unsplash.com/photo-1690636104822-768e8fe334d1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8",
                caption: "Yoga break to clear the mind 🧘‍♀️ #Balance",
                likes: 270,
                posted: "2024-06-12"
            },
            {
                id: 12,
                image: "https://images.unsplash.com/photo-1672947149713-a618e4f5fb96?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ4fHx8ZW58MHx8fHx8",
                caption: "Numbers tell a story 📈 #DataScience",
                likes: 240,
                posted: "2024-06-15"
            }
        ]
    },
    {
        name: "Vivaan",
        profession: "Product Manager",
        image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJ8ZW58MHwwfDB8fHww",
        description: "Building products that matter 🚀 | Tech enthusiast 💡 | Traveler 🌍",
        followers: 1500,
        following: 380,
        username: "vivaan_pm",
        posts: [
            {
                id: 13,
                image: "https://plus.unsplash.com/premium_photo-1684820878202-52781d8e0ea9?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3BvcnRzfGVufDB8fDB8fHww",
                caption: "Brainstorming new ideas 💡 #ProductManagement",
                likes: 260,
                posted: "2024-06-02"
            },
            {
                id: 14,
                image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D",
                caption: "Launching our new app 🚀 #ProductLaunch",
                likes: 300,
                posted: "2024-06-06"
            },
            {
                id: 15,
                image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJhdmVsfGVufDB8fDB8fHww",
                caption: "Traveling inspires innovation ✈️ #TravelDiaries",
                likes: 320,
                posted: "2024-06-09"
            },
            {
                id: 16,
                image: "https://plus.unsplash.com/premium_photo-1668456460190-ec6eabb39cf8?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
                caption: "User feedback session 🗣️ #UserExperience",
                likes: 290,
                posted: "2024-06-11"
            },
            {
                id: 17,
                image: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=800&auto=format&fit=crop&q=60",
                caption: "Working on the go 💻 #RemoteWork",
                likes: 310,
                posted: "2024-06-14"
            },
            {
                id: 18,
                image: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=800&auto=format&fit=crop&q=60",
                caption: "Collaborating with an amazing team 🤝 #TeamWork",
                likes: 280,
                posted: "2024-06-17"
            }
        ]
    },
    {
        name: "Ananya",
        profession: "UX Designer",
        image: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHwwfDB8fHww",
        description: "Designing delightful experiences 🎨 | Minimalist at heart 🌿 | Bookworm 📚",
        followers: 1100,
        following: 290,
        username: "ananya_designs",
        posts: [
            {
                id: 19,
                image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=60",
                caption: "Sketching new ideas 🎨 #UXDesign",
                likes: 220,
                posted: "2024-06-03"
            },
            {
                id: 20,
                image: "https://images.unsplash.com/photo-1745253606009-9f01a3404db5?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D",
                caption: "User testing is crucial 🧪 #UserExperience",
                likes: 210,
                posted: "2024-06-06"
            },
            {
                id: 21,
                image: "https://images.unsplash.com/photo-1496180727794-817822f65950?w=800&auto=format&fit=crop&q=60",
                caption: "Minimalist designs speak volumes 🌿 #Minimalism",
                likes: 230,
                posted: "2024-06-08"
            },
            {
                id: 22,
                image: "https://images.unsplash.com/photo-1745750747234-9584cbd65358?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D",
                caption: "Book recommendations for designers 📚 #Bookworm",
                likes: 250,
                posted: "2024-06-11"
            },
            {
                id: 23,
                image: "https://plus.unsplash.com/premium_photo-1748909098626-9c4de59e8a1e?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D",
                caption: "Nature-inspired designs 🌲 #DesignInspiration",
                likes: 270,
                posted: "2024-06-13"
            },
            {
                id: 24,
                image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&auto=format&fit=crop&q=60",
                caption: "Always learning, always growing 🌱 #DesignerLife",
                likes: 260,
                posted: "2024-06-16"
            }
        ]
    },
    {
        name: "Kunal",
        profession: "Marketing Specialist",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHwwfDB8fHww",
        description: "Marketing ninja 🥷 | Creative thinker 💡 | Fitness freak 💪",
        followers: 800,
        following: 450,
        username: "kunal_markets",
        posts: [
            {
                id: 25,
                image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=60",
                caption: "Brainstorming marketing strategies 📈 #Marketing",
                likes: 180,
                posted: "2024-06-02"
            },
            {
                id: 26,
                image: "https://images.unsplash.com/photo-1557683304-673a23048d34?w=800&auto=format&fit=crop&q=60",
                caption: "Creative campaigns drive engagement 💡 #CreativeMarketing",
                likes: 200,
                posted: "2024-06-05"
            },
            {
                id: 27,
                image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&auto=format&fit=crop&q=60",
                caption: "Fitness fuels my creativity 🏋️‍♂️ #FitLife",
                likes: 220,
                posted: "2024-06-07"
            },
            {
                id: 28,
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60",
                caption: "Analyzing marketing trends 📊 #MarketAnalysis",
                likes: 240,
                posted: "2024-06-10"
            },
            {
                id: 29,
                image: "https://images.unsplash.com/photo-1746168563269-f78442ba7f34?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D",
                caption: "Collaboration is key 🤝 #TeamWork",
                likes: 260,
                posted: "2024-06-13"
            },
            {
                id: 30,
                image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&auto=format&fit=crop&q=60",
                caption: "Weekend workout session 🏋️‍♂️ #Fitness",
                likes: 280,
                posted: "2024-06-15"
            }
        ]
    },
    {
        name: "Priya",
        profession: "Financial Analyst",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHwwfDB8fHww",
        description: "Crunching numbers 📈 | Finance geek 💹 | Adventure seeker 🏔️",
        followers: 1250,
        following: 300,
        username: "priya_finance",
        posts: [
            {
                id: 31,
                image: "https://images.unsplash.com/photo-1746704948438-f3e307e1833c?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D",
                caption: "Analyzing financial data 📊 #Finance",
                likes: 260,
                posted: "2024-06-03"
            },
            {
                id: 32,
                image: "https://images.unsplash.com/photo-1746901292401-29aa9fe03e46?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D",
                caption: "Balancing the books 💹 #Accounting",
                likes: 280,
                posted: "2024-06-06"
            },
            {
                id: 33,
                image: "https://images.unsplash.com/photo-1748784099206-14d86e4477cb?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D",
                caption: "Adventure time in the mountains 🏔️ #Travel",
                likes: 300,
                posted: "2024-06-08"
            },
            {
                id: 34,
                image: "https://plus.unsplash.com/premium_photo-1748882647770-63f297e4277a?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D",
                caption: "Investment analysis 🧐 #Finance",
                likes: 320,
                posted: "2024-06-11"
            },
            {
                id: 35,
                image: "https://images.unsplash.com/photo-1747093963436-1b0577a3eec5?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D",
                caption: "Mountain hiking adventure 🏔️ #NatureLover",
                likes: 340,
                posted: "2024-06-14"
            },
            {
                id: 36,
                image: "https://images.unsplash.com/photo-1748783266580-a5b05c4e54b1?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2OHx8fGVufDB8fHx8fA%3D%3D",
                caption: "Financial modeling in progress 📈 #FinancialAnalyst",
                likes: 360,
                posted: "2024-06-16"
            }
        ]
    },
    {
        name: "Rohan",
        profession: "Operations Manager",
        image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHwwfDB8fHww",
        description: "Streamlining operations ⚙️ | Efficiency expert 📊 | Nature lover 🌲",
        followers: 900,
        following: 410,
        username: "rohan_ops",
        posts: [
            {
                id: 37,
                image: "https://plus.unsplash.com/premium_photo-1747535270431-0daaeae1b43e?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4MXx8fGVufDB8fHx8fA%3D%3D",
                caption: "Optimizing operations for efficiency ⚙️ #OperationsManagement",
                likes: 180,
                posted: "2024-06-02"
            },
            {
                id: 38,
                image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=60",
                caption: "Efficiency is key to success 📊 #ProcessOptimization",
                likes: 200,
                posted: "2024-06-05"
            },
            {
                id: 39,
                image: "https://images.unsplash.com/photo-1747567687565-3d0374e0a90c?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4M3x8fGVufDB8fHx8fA%3D%3D",
                caption: "Streamlining operations for better performance ⚙️ #OperationalExcellence",
                likes: 220,
                posted: "2024-06-07"
            },
            {
                id: 40,
                image: "https://images.unsplash.com/photo-1496180727794-817822f65950?w=800&auto=format&fit=crop&q=60",
                caption: "Nature walk to clear the mind 🌲 #NatureLover",
                likes: 240,
                posted: "2024-06-10"
            },
            {
                id: 41,
                image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=60",
                caption: "Improving operational efficiency ⚙️ #Efficiency",
                likes: 260,
                posted: "2024-06-12"
            },
            {
                id: 42,
                image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=60",
                caption: "Nature's beauty 🌲 #NatureWalk",
                likes: 280,
                posted: "2024-06-15"
            }
        ]
    }
];


export default Users;