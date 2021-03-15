const products = [
  
  {
    
    name:"Vigor Sandbags",
    image:"/images/Vigor_Sandbags.jpg",
    description:"Beginner sandbags offer a non-intimidating alternative to using a barbell! younger students and new users will gain confidence and skill with these softer yet challenging sandbags.",
    brand: '',
    category:'Sandbags & Sand Weights',
    price: 74.95,
    countInStock: 5,
    rating: 4.5,
    numReviews: 4,
  },
  {
    
    name:"Slide Board Pro",
    image:"/images/Slide_Board_Pro.jpg",
    description:"Easily adjust bumpers to any length using to create a fully customized experience for every student. Simply loosen the dial bolts on one bumper (no tools required) and slide it up or down the board to find the best fit in seconds.",
    brand: '',
    category:'Speed & Agility',
    price: 185.00,
    countInStock: 3,
    rating: 3.5,
    numReviews: 4,
  },
  {
    
    name:"SlidePro Fitness Sliders",
    image:"/images/SlidePro_Fitness_Sliders.jpg",
    description:"Slide the intensity of your workouts up a notch with these versatile fitness sliders. They allow for a low-impact routine that is easy on the joints but burns your core and glutes! Secure sliders onto your hands or feet with removable hook-and-loop straps, and see how they intensify a variety of fast or complex bodyweight movements, such as mountain climbers, planks, pikes, and lunges.",
    brand: '',
    category:'Speed & Agility',
    price: 49.95,
    countInStock: 3,
    rating: 4.5,
    numReviews: 4,
  },
  {
    
    name:"Gopher Drag Bag",
    image:"/images/Gopher_Drag_Bag.jpg",
    description:"Our only all-terrain drag bag features durable rubber backing that can be dragged through the gym, over turf, or across the parking lot. A large-mouth opening is easy to load with up to 4 pre-filled 10 lb sand fillers depending on users' age and skill. 60 lb weight capacity. Straps inside the bag secure fillers in place so the weight stays put during sharp turns or changes of direction",
    brand: '',
    category:'Speed & Agility',
    price: 139.00,
    countInStock: 4,
    rating: 4.0,
    numReviews: 4,
  },
  {
    
    name:"Xtreme Stax Shuttle",
    image:"/images/Xtreme_Stax_Shuttle.jpg",
    description:"Go for the gold with a stackable shuttle drill that creates excitement during relay races. Teams stack plastic rings during relays or shuttle runs. The rings’ vibrant Rainbow colors show all players exactly where each team is in the race. The first team to place the gold ring at the top of their stack wins!",
    brand: '',
    category:'Speed & Agility',
    price: 74.95,
    countInStock: 10,
    rating: 3.5,
    numReviews: 4,
  },
  {
    
    name:"Overspeed Trainer",
    image:"/images/Overspeed_Trainer.jpg",
    description:"Maximize stride length and frequency in experienced athletes using dual man overspeed assistance!",
    brand: '',
    category:'Speed & Agility',
    price: 69.95,
    countInStock: 7,
    rating: 3.5,
    numReviews: 4,
  },
  {
    
    name:"Rainbow UltraFit  ",
    image:"/images/Rainbow_UltraFit_Stability_Balls.jpg",
    description:"Rainbow colors make class organization simple, with packs and colors to support entire classes as you get the most out of exercises and ball activities. A European construction and extremely durable design support up to 220 lb! Build core, lower-body, and upper-body muscle strength using a range of stability ball exercises, while also increasing balance and coordination. Exercises allow users to focus on abs, back, hips, and more, with low-impact.    ",
    brand: '',
    category:'Stability & Balance Balls',
    price: 149.00,
    countInStock: 8,
    rating: 4.5,
    numReviews: 4,
  },
  {
    
    name:"UltraFit ClassStep ",
    image:"/images/UltraFit_ClassStep_Fitness_Steps.jpg",
    description:"Get a set of entry-level, economical aerobic steps built to hold up to long-term use! These tough, colorful steps feature a convenient stacking design for simple height variations and easy storage. Use them for step aerobics and aerobic exercise, or as an added component to other types of workouts.",
    brand: '',
    category:'Fitness Steps',
    price: 34.95,
    countInStock: 5,
    rating: 3.5,
    numReviews: 4,
  },
  
  {
    
    name:"UltraFit Yoga Mats",
    image:"/images/UltraFit_Yoga_Mats.jpg",
    description:"Our best entry-level yoga mat is the perfect blend of stability and comfort. Its no-frills design and great longevity make it a supremely economical choice for PE and recreational yoga units!",
    brand: '',
    category:'Mats',
    price: 23.95,
    countInStock: 9,
    rating: 4.0,
    numReviews: 4,
  },
  {
    
    name:"IntroFit Yoga Mats",
    image:"/images/IntroFit_Yoga_Mats.jpg",
    description:"Introducing elementary yoga improves fitness while also promoting focus and concentration. Non-slip mats provide a comfortable, secure footing for a variety of poses, from downward dog to sun salutation! UltraFit Mats are available in Rainbow colors, and our individual Instrux mats come in blue with poses printed on the mat.",
    brand: '',
    category:'Yoga Mats & Stretching Equipment',
    price: 28.95,
    countInStock: 7,
    rating: 4.0,
    numReviews: 4,
  },
  {
    
    name:"Gopher Barbell ",
    image:"/images/Gopher_Barbell_Weight_Plates.jpg",
    description:"These friendly weight plates are perfect for getting beginners and young students interested in fitness. Ergonomic Cutouts make plates easy to load and unload and allows for use as free weights.",
    brand: '',
    category:'Fitness Bars & Cardio Barbells',
    price: 6.95,
    countInStock: 8,
    rating: 4.5,
    numReviews: 4,
  },
  {
    
    name:"Warrior Elite ",
    image:"/images/Warrior_Elite_Conditioning_Ropes.jpg",
    description:"We took our standard fitness battle rope and made it even better! Sheathed in nylon, they’ll stand up to constant abuse, including repeated impact with the ground over time! This staple is great for teaching beginner to intermediate battle rope techniques.",
    brand: '',
    category:'Conditioning Ropes',
    price: 239.00,
    countInStock: 4,
    rating: 4.0,
    numReviews: 4,
  },
  {
    
    name:"Heavy Bag",
    image:"/images/Heavy_Bag.jpg",
    description:"We have your boxing workout covered with a 100 lb punching bag. Built to last with a vinyl-coated PVC cover, this bag is designed to withstand years of punching!",
    brand: '',
    category:'Boxing',
    price: 129.00,
    countInStock: 8,
    rating: 4.5,
    numReviews: 4,
  },
  {
    
    name:"Speed Bag ",
    image:"/images/Speed_Bag_Training_Set.jpg",
    description:"The most versatile boxing training equipment we offer gives you everything needed to begin your heavy bag or speed bag training! Setup is easy and gives you access to a full, satisfying workout.",
    brand: '',
    category:'Boxing',
    price: 399.00,
    countInStock: 7,
    rating: 4.5,
    numReviews: 4,
  },
  {
    
    name:"Everlast Heavy ",
    image:"/images/Everlast_Heavy_Bag_Gloves.jpg",
    description:"Give yourself a more comfortable set of gloves with full hand and wrist protection when training with heavy bags. These foam-filled 14 oz gloves have an antimicrobial lining and Thumb Lok feature for safety. ",
    brand: '',
    category:'Boxing',
    price: 34.95,
    countInStock: 9,
    rating: 4.0,
    numReviews: 4,
  },
  
  {
    
    name:"Double Ab Wheel",
    image:"/images/Double_Ab_Wheel.jpg",
    description:"Add stability to your ab exercise with this double abdominal wheel! Cushioned foam handles provide a more secure grip for easy, reliable use.",
    brand: '',
    category:'Bodyweight Training',
    price:13.95,
    countInStock: 8,
    rating: 4.7,
    numReviews: 4,
  },
  {
    
    name:"CoreSolo Ab Trainer ",
    image:"/images/CoreSolo_Ab_Trainer.jpg",
    description:"Users simply place their feet under the adjustable footpad to lock in to place and perform a variety of core exercises – no partner required. Foam footpad adjusts to 4 heights from 4 to 7 for a comfortable fit for all users. The removable hip pad allows users to adjust along 32L hook-and-loop strips to customize the trainer to perform exercises targeting the glute, hamstring, and back muscles.",
    brand: '',
    category:'Bodyweight Training',
    price:499.00,
    countInStock: 8,
    rating: 3.5,
    numReviews: 4,
  },
  {
    
    name:"Troy Dumbbells",
    image:"images/Troy_Dumbbells.jpg",
    description:"Dumbbells that combine no-roll design with the added control of flat ends!",
    brand: '',
    category:'Dumbbells',
    price: 9.95,
    countInStock: 8,
    rating: 4.0,
    numReviews: 4,
  },
  {
    
    name:"Acacia Official ",
    image:"/images/Acacia_Official_Broomball.jpg",
    description:"High-quality condensed rubber shell for lasting performance!",
    brand: '',
    category:'Broomball Equipment',
    price: 24.95,
    countInStock: 7,
    rating: 4.0,
    numReviews: 4,
  },
 
 
  
]

export default products