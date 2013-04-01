/**
 * js/models/experience.js
 * Model for Experience
 *
 * We use static data cause the JSON feed is not working
 */
var xola = xola || {};

xola.Experience = Backbone.Model.extend();

var experience1 = 
	{
		"category":"Wilderness Training",
		"complete":true,
		"currency":"USD",
		"desc":"Have you ever wondered what it would have been like to live in the wild? Just you and the elements and a few tools to survive. \n\nSet amongst the beautiful redwoods of Santa Cruz (or Marin), the 1-Day Wilderness Skills clinic is a great way to escape the hustle-and-bustle of the work week and get back to nature! Our trained instructors - expert survivalists and naturalists - are excited to share these sacred skills with you. Learning these timeless traditions, such as native shelter building and fire-by-friction, helps to build self-esteem and awareness from knowing you can survive.\n\nThis class is 100% hands-on and appropriate for all ages, but the pace is geared towards teens and adults. Everything you learn, you will do! Be prepared for your next wilderness adventure by practicing these timeless skills. You will build a shelter, you will make fire, you will learn about edible plants, make native style traps, and learn several other indigenous skills.\n\nThis class is about getting back to the earth, learning how our ancestors lived in harmony with our planet, and experiencing nature to its fullest. There is something here for everybody - come with an open mind and be ready to learn. ","duration":300,"excerpt":"Come learn the ancient skill of survival - build shelter, collect water, hunt for food, and make fire with your own hands. \u00a0These skills have been mainstays of human survival for thousands of years and are disappearing quickly in our world of technology and modern convenience.\n\n","geo":{"lat":37.130416954678,"lng":-122.10223463011},"groupSize":1,"groupSizePrice":99,
		"included":["Knives","Raw materials for bow-drill kit","Fire (but you have to make it)","5 hours of survival instruction"],
		"medias":[
			{"seq":22,"src":"\/uploads\/images\/experiences\/4f25f8fc536e866729000000\/4f738e69536e868f5c00001b.jpg","type":"photo","id":"4f738e69536e868f5c00001b"},
			{"seq":23,"src":"\/uploads\/images\/experiences\/4f25f8fc536e866729000000\/4f738e69536e86905c000011.jpg","type":"photo","id":"4f738e69536e86905c000011"},
			{"seq":21,"src":"\/uploads\/images\/experiences\/4f25f8fc536e866729000000\/4f738e81536e868e5c000017.jpg","type":"photo","id":"4f738e81536e868e5c000017"},
			{"seq":20,"src":"\/uploads\/images\/experiences\/4f25f8fc536e866729000000\/4f738ea9536e86855c00000f.jpg","type":"photo","id":"4f738ea9536e86855c00000f"},
			{"seq":19,"src":"\/uploads\/images\/experiences\/4f25f8fc536e866729000000\/4f738eb2536e86845c00000e.jpg","type":"photo","id":"4f738eb2536e86845c00000e"},
			{"seq":18,"src":"\/uploads\/images\/experiences\/4f25f8fc536e866729000000\/4f738ec8536e86895c000017.jpg","type":"photo","id":"4f738ec8536e86895c000017"},
			{"seq":17,"src":"\/uploads\/images\/experiences\/4f25f8fc536e866729000000\/4f738ed9536e86835c000018.jpg","type":"photo","id":"4f738ed9536e86835c000018"},
			{"caption":"Fungus","seq":16,"src":"\/uploads\/images\/experiences\/4f25f8fc536e866729000000\/4f738eef536e868d5c000015.jpg","type":"photo","id":"4f738eef536e868d5c000015"},
			{"seq":15,"src":"\/uploads\/images\/experiences\/4f25f8fc536e866729000000\/4f738ef6536e86895c000019.jpg","type":"photo","id":"4f738ef6536e86895c000019"},
			{"seq":14,"src":"\/uploads\/images\/experiences\/4f25f8fc536e866729000000\/4f738f07536e868d5c000016.jpg","type":"photo","id":"4f738f07536e868d5c000016"},
			{"seq":13,"src":"\/uploads\/images\/experiences\/4f25f8fc536e866729000000\/4f738f0d536e86875c00001a.jpg","type":"photo","id":"4f738f0d536e86875c00001a"},
			{"seq":12,"src":"\/uploads\/images\/experiences\/4f25f8fc536e866729000000\/4f738f0d536e86895c00001a.jpg","type":"photo","id":"4f738f0d536e86895c00001a"},
			{"src":"36163762","type":"vimeo","id":"4f7391ac536e86885c000021"},
			{"seq":11,"src":"\/uploads\/images\/experiences\/4f25f8fc536e866729000000\/4f7394e1536e86835c00001d.jpg","type":"photo","id":"4f7394e1536e86835c00001d"},
			{"seq":24,"src":"\/uploads\/images\/experiences\/4f25f8fc536e866729000000\/4f739502536e868d5c000018.jpg","type":"photo","id":"4f739502536e868d5c000018"},
			{"seq":10,"src":"\/uploads\/images\/experiences\/4f25f8fc536e866729000000\/4f73956a536e86825c00001f.jpg","type":"photo","id":"4f73956a536e86825c00001f"},
			{"seq":8,"src":"\/uploads\/images\/experiences\/4f25f8fc536e866729000000\/4f73959f536e868d5c000019.jpg","type":"photo","id":"4f73959f536e868d5c000019"},
			{"seq":7,"src":"\/uploads\/images\/experiences\/4f25f8fc536e866729000000\/4f7395a0536e868e5c00001b.jpg","type":"photo","id":"4f7395a0536e868e5c00001b"},
			{"seq":9,"src":"\/uploads\/images\/experiences\/4f25f8fc536e866729000000\/4f7395a1536e86865c000018.jpg","type":"photo","id":"4f7395a1536e86865c000018"},
			{"seq":6,"src":"\/uploads\/images\/experiences\/4f25f8fc536e866729000000\/4f7395b7536e868b5c00001d.jpg","type":"photo","id":"4f7395b7536e868b5c00001d"},
			{"seq":4,"src":"\/uploads\/images\/experiences\/4f25f8fc536e866729000000\/4f7395ba536e868f5c000022.jpg","type":"photo","id":"4f7395ba536e868f5c000022"},
			{"seq":5,"src":"\/uploads\/images\/experiences\/4f25f8fc536e866729000000\/4f7395bf536e868a5c000019.jpg","type":"photo","id":"4f7395bf536e868a5c000019"},
			{"seq":3,"src":"\/uploads\/images\/experiences\/4f25f8fc536e866729000000\/4f7395c3536e86835c00001e.jpg","type":"photo","id":"4f7395c3536e86835c00001e"},
			{"seq":1,"src":"\/uploads\/images\/experiences\/4f25f8fc536e866729000000\/4f7395cb536e868d5c00001a.jpg","type":"photo","id":"4f7395cb536e868d5c00001a"},
			{"seq":2,"src":"\/uploads\/images\/experiences\/4f25f8fc536e866729000000\/4f7395d2536e86895c00001c.jpg","type":"photo","id":"4f7395d2536e86895c00001c"}
		],
		"name":"Survival Skills Training in the Heart of the Santa Cruz Mountains",
		"notIncluded":["Lunch","Water \/ Beverages","Transportation","Outdoor clothing","Notebook and pen"],
		"other":"Age Requirements:\nThis course is appropriate for all ages, however it is a fast-paced learning experience geared towards teens and adults. Children under the age of 12 must be accompanied by an adult at a 1:1 ratio of child to adult (i.e. 1 adult cannot bring a large group of children to a class). Childcare is not available at this course - it is the responsibility of parents to monitor their children so that our instructors can focus on teaching to the group. Thank you for complying!\n\nLocation and Directions:\nClinics are held in two locations: the beautiful redwoods of the Santa Cruz Mountains (south Bay Area) and Marin (north Bay Area). Exact directions, maps, recommended packing lists, and other details will all be provided during the registration process. ",
		"photo":{"src":"\/uploads\/images\/experiences\/4f25f8fc536e866729000000\/4f738e81536e868e5c000017.jpg","type":"photo","seq":46,"id":"4f738e81536e868e5c000017"},"price":99,"reviewed":true,"reviewedAt":"2012-05-28T09:38:58+00:00","reviews":[{"name":"Brett M","email":"","review":"I took the 5 Hour Basic Survival Skills Clinic with Adventure Out LLC. I learned the basic survival skills: Shelter, Water, Fire, Food...but more importantly I had an amazing time! The instructors, Jack and Shawn, were awesome guides and really took the time to make sure everyone in the class learned and had fun while doing it!\n\nOur entire class is planning on doing the next course on traps and snares!!!","seller":true,"id":"4f8eef3c536e86b44d00001d"}],
		"seller":{"id":"4f25f60a536e869529000000"},"status":1,"updated":"2012-05-05T01:54:24+00:00","visible":true,"id":"4f25f8fc536e866729000000"
	};


var experience2 = 
	{
		"category":"Photography","complete":true,"currency":"USD","desc":"Photograph Yosemite from a different perspective with the support and guidance of an expert. Take control of your camera while capturing images of landscapes and a diverse array of wildlife. This original program is crafted to help sharpen your skills and optimize your time in Yosemite. Learn interesting techniques from our richly talented Yosemite photographers while shooting in select locations during optimal periods of light.\n\nSubjects of our workshops and photo field sessions may include granite monoliths and domes, waterfalls, wildflowers, black bears, and other wildlife. Beginners and professional photographers alike have benefited from working with our experienced mentors. The workshop is suitable for all levels of photographers with various types of cameras (including point and shoot). Programs are crafted by an expert photographer who will lead the session. \n\nSome of our Signature Specialty Workshops include: Yosemite Valley Icons Photography Session, Behind the Lens: Yosemite Landscape Photo Session, and Yosemite High Country Icons Photography Session.",
		"duration":300,"excerpt":"Sharpen your photographic skills, take control of your camera, and achieve your artistic goals in the natural setting of Yosemite National Park.",
		"geo":{"lat":37.579412513438,"lng":-119.55322265625},
		"groupDiscount":{"discountIncrement":10,"discountMax":30,"discountStart":20,"discountType":"percent","quantityIncrement":1,"quantityStart":2},"groupSize":1,"guestType":"normal",
		"included":["Local Professional Photo Guide","Unique shooting locations","Expert instruction","Itinerary planning","Gear list"],
		"medias":[
			{"src":"\/uploads\/images\/experiences\/4f271bdc536e863404000000\/4f2789b5536e866729000002.jpg","type":"photo","id":"4f2789b5536e866729000002"},
			{"src":"\/uploads\/images\/experiences\/4f271bdc536e863404000000\/4f278a07536e866304000001.jpg","type":"photo","id":"4f278a07536e866304000001"},
			{"src":"\/uploads\/images\/experiences\/4f271bdc536e863404000000\/4f278a19536e860d20000001.jpg","type":"photo","id":"4f278a19536e860d20000001"},
			{"src":"\/uploads\/images\/experiences\/4f271bdc536e863404000000\/4f278a4c536e86e63f000000.jpg","type":"photo","id":"4f278a4c536e86e63f000000"},
			{"src":"\/uploads\/images\/experiences\/4f271bdc536e863404000000\/4f278a75536e860e20000000.jpg","type":"photo","id":"4f278a75536e860e20000000"},
			{"src":"\/uploads\/images\/experiences\/4f271bdc536e863404000000\/4f278ac4536e863504000001.jpg","type":"photo","id":"4f278ac4536e863504000001"},
			{"src":"\/uploads\/images\/experiences\/4f271bdc536e863404000000\/4f278b01536e860d20000002.jpg","type":"photo","id":"4f278b01536e860d20000002"},
			{"src":"\/uploads\/images\/experiences\/4f271bdc536e863404000000\/4f278b61536e861020000001.jpg","type":"photo","id":"4f278b61536e861020000001"},
			{"src":"\/uploads\/images\/experiences\/4f271bdc536e863404000000\/4f278baa536e866729000003.jpg","type":"photo","id":"4f278baa536e866729000003"},
			{"src":"\/uploads\/images\/experiences\/4f271bdc536e863404000000\/4f278c02536e869529000001.jpg","type":"photo","id":"4f278c02536e869529000001"},
			{"src":"\/uploads\/images\/experiences\/4f271bdc536e863404000000\/4f278c1f536e866304000002.jpg","type":"photo","id":"4f278c1f536e866304000002"},
			{"src":"\/uploads\/images\/experiences\/4f271bdc536e863404000000\/4f278cfc536e860d20000003.jpg","type":"photo","id":"4f278cfc536e860d20000003"},
			{"src":"35526698","type":"vimeo","id":"4f39adfa536e86ec70000001"}
		],"name":"Yosemite Specialty Photography Workshop",
		"notIncluded":["Camera gear","Transportation to shooting location","Food and water"],
		"other":"Cancellation Policy:\nWe run our tours in all weather without canceling. The only way we cancel a tour is if the roads leading into Yosemite National Park are closed due to extreme weather conditions.\n\nWe require 14 days advanced notice to cancel a tour for a refund. We will charge a transaction fee commensurate to the amount of charges we incur and will refund the difference. Refunds are not offered to those who cancel within two weeks but consideration will be given based on the circumstances of an emergency. ",
		"photo":{"src":"\/uploads\/images\/experiences\/4f271bdc536e863404000000\/4f2789b5536e866729000002.jpg","type":"photo","id":"4f2789b5536e866729000002"},
		"price":250,"priceType":"person","reviewed":false,"reviewedAt":"2012-05-28T09:38:58+00:00",
		"reviews":[
			{"name":"Trina","email":"thinkley@uow.edu.au","review":"I had an absolutely awesome time in Yosemite with your guides. I learnt some good tips from Gabe and he took some amazing pics of me. Lindsay was amazing - her knowledge of the area - animals, birds, plants, geology - was fantastic and she conveyed it in a very easy to understand way. She was friendly, easy to talk with and very good company. My time in Yosemite with your guides is one of my two favourite memories of the US as I head home to Australia later today. Many thanks to Catherine also for making the process of organizing and booking my adventures so simple. ","seller":true,"id":"4f2819ed536e86e63f000001"},
			{"name":"Jon and Nina ","email":"jglaser757@aol.com","review":"The Photographers that you arranged for our workshops were extremely helpful. Each one had his own take on photography and really helped in my pictures. The workshops I have taken in the past really don't even compare. They were geared around the instructors getting great images and not the students. Sure, they take you to great spots, but that's it..They don't even measure up to the photographers that you have on staff. I was pleasantly surprised to find that they were more concerned with the training the students than themselves.\n\nNina and I really enjoyed our session with Phil. The methods he showed us on taking abstract photographs were really new thing for me, but I have some really unique and fascinated images for my wall. After spending time with Walter Flint(two days), I really slowed down. I didn't take as many images, but they\u2019re great! Our last workshop with Robb Hirsch was even better. Robb was so helpful in every way possible. He helped me in creating some amazing images that I didn't expect from myself. I learned just as much from him as the other instructors, but in a different way. He spent time teaching me more about composition than I even imagined. And, I am really proud of myself and the images I created!\n \nOnce again, thank you for all your help!","seller":true,"id":"4f281a67536e860e20000001"},
			{"name":"Fred Crowden","email":"fred_crowden@yahoo.com","review":"I enjoyed my workshop today and I learned a lot. I have some great shots that I am excited to get out of my memory card and get a good look at. Robb did a great job and he is the reason I feel so good about the workshop! \n\nRegards,\nFred \n","seller":true,"id":"4f9a21ba536e86830e00001b"},
			{"name":"Usha","email":"ucmutt@gmail.com","review":"Just wanted to drop you a note of thanks. We thoroughly enjoyed the workshops in Yosemite with you. Your choice of locations and technical help is much appreciated. Thanks again for making it so memorable for me.","seller":true,"id":"4f9a21e9536e864f0e000021"},
			{"name":"Bill Connolly","email":"homedollars@msn.com","review":"I just had to write and give you and your photographer, Robb Hirsch, who I learned so much from last Tuesday, a testimonial. I literally found your services through a Google search. I have to admit that it was one of the best \"finds\" I've experienced from the internet. The care you showed in making sure your photographer addressed my needs, far in advance of actually getting to Yosemite were impressive. After your detailed guidance on driving to Yosemite, where to get chains for my car rental and then where to meet your photographer, my experience was only out done by the GREAT photography instruction provided by Robb Hirsch, your staff photography instructor. Robb not only gave great instructions on composition and various photographic techniques, he made suggestions for inexpensive additions to add to my equipment to dramatically improve my photographs. We've got some great photographs from our vacation that we wouldn't have had without Robb's instruction! I'd not only highly recommend you, I hope to use your services when I visit the Yosemite again when I visit in the future.","seller":true,"id":"4f9a2216536e86970b00001f"}
		],
		"seller":{"id":"4f232d4d536e86d503000000"},"status":1,"updated":"2013-03-17T14:02:55+00:00","visible":true,"id":"4f271bdc536e863404000000"
	};

var experience3 =
{
    "category": "River Rafting",
    "complete": true,
    "currency": "USD",
    "desc": "We start the trip at our campground with our orientation, where you\u2019ll learn all about the techniques of rafting, safety and equipment. You\u2019ll also meet our awesome river guides and be divided into groups. Each raft holds 6-8 so you can stay with your friends! \n\nThe day warms up with some relatively easy rapids, giving you a chance to get the hang of rafting before a riverside all you can eat deli lunch. After you\u2019ve had your fill, it\u2019s back into the raft. The canyon walls steepen, the river narrows, and the water moves faster and faster, getting your adrenaline pumping. There might even be the chance for unforgettable \u201cSwimmer\u2019s Rapids,\u201d where you can float down the rapids WITHOUT the boat! You\u2019ll bounce along \u201cHaystack Canyon\u201d \u2013 a series of standing waves that will make you feel like you\u2019re riding the wettest and wildest amusement park ride of your life. You\u2019ll encounter \u201cBouncing Rock,\u201d where your boat will \u201ckiss\u201d the rock, then fall down a chute like a wet slippery slide. Every rapid has a name \u2013 some are fast, some are tricky. But all are thrilling in their own way!\n\nAt the end of the day, after you\u2019ve had your fill of crashes and splashes (and let\u2019s not forget the many water fights you\u2019ll have with the other boats!), we'll head to back the campground. ",
    "duration": 1440,
    "excerpt": "A full day of Class III rapids, perfect for beginner or intermediate rafters. Come enjoy the river with fun guides and a delicious all you can eat riverside lunch! ",
    "geo": {
      "lat": 38.80517012837,
      "lng": -120.91829520021
    },
    "groupSize": 1,
    "included": [
      "All you can eat deli lunch",
      "Shuttle services",
      "Rafting equipment",
      "Safety equipment"
    ],
    "medias": [
      {
        "src": "\/uploads\/images\/experiences\/4f2b03fa536e864069000000\/4f2b043f536e86bf4e000000.jpg",
        "type": "photo",
        "id": "4f2b043f536e86bf4e000000"
      },
      {
        "src": "\/uploads\/images\/experiences\/4f2b03fa536e864069000000\/4f2b0440536e868f69000000.jpg",
        "type": "photo",
        "id": "4f2b0440536e868f69000000"
      },
      {
        "src": "\/uploads\/images\/experiences\/4f2b03fa536e864069000000\/4f2b0443536e86964a000001.jpg",
        "type": "photo",
        "id": "4f2b0443536e86964a000001"
      },
      {
        "src": "\/uploads\/images\/experiences\/4f2b03fa536e864069000000\/4f2b0467536e86ed4e000000.jpg",
        "type": "photo",
        "id": "4f2b0467536e86ed4e000000"
      },
      {
        "src": "\/uploads\/images\/experiences\/4f2b03fa536e864069000000\/4f2b046c536e860c67000002.jpg",
        "type": "photo",
        "id": "4f2b046c536e860c67000002"
      },
      {
        "src": "\/uploads\/images\/experiences\/4f2b03fa536e864069000000\/4f2b0473536e863b69000000.jpg",
        "type": "photo",
        "id": "4f2b0473536e863b69000000"
      },
      {
        "src": "\/uploads\/images\/experiences\/4f2b03fa536e864069000000\/4f2b0477536e869069000000.jpg",
        "type": "photo",
        "id": "4f2b0477536e869069000000"
      },
      {
        "id": "4f2b047d536e86bf4e000001"
      },
      {
        "id": "4f2b047d536e86bf4e000002"
      }
    ],
    "name": "1-Day Rafting Trip on the South Fork of the American River",
    "notIncluded": [
      "Swimsuit or shorts (2 pair)",
      "Shoes or sandals (1 for raft, 1 for camp)",
      "Sweatshirt or jacket",
      "Money (for T-shirts, extra film, etc.)",
      "T-shirt and long sleeved shirt",
      "Long pants",
      "Sunscreen (waterproof)",
      "Mosquito repellent",
      "Hat (w\/ string attached!)",
      "Sunglasses (w\/ string attached!)"
    ],
    "other": "If you are taking a rafting adventure in the early season (April \u2013 May), you may also want to bring a wetsuit, lightweight rain poncho and extra warm clothes. \n\nOptional camping is available at our riverside Camp Lotus, where orientation begins. The cost is $10\/night which includes hot showers, sleeping accommodations, modern bathrooms, and electricity. \n\nSafety Restrictions: The minimum age is 8 years. The child must have basic swimming skills. Rafters need to be in generally good health, basic swimming skills highly recommended. People with heart conditions or who are pregnant should not attempt this trip.\n\nCancellation Policy: For full refunds, we require 30 days written notice prior to your trip. 50% of your trip price will be refunded if written cancellation is postmarked between 21 and 30 days prior to the trip. No refunds will be made less than 21 days prior to the trip.",
    "photo": {
      "src": "\/uploads\/images\/experiences\/4f2b03fa536e864069000000\/4f2b046c536e860c67000002.jpg",
      "type": "photo",
      "id": "4f2b046c536e860c67000002"
    },
    "price": 105,
    "priceType": "person",
    "reviewed": true,
    "reviewedAt": "2012-05-28T09:38:58+00:00",
    "reviews": [
      {
        "email": "",
        "name": "Dianna Herold",
        "review": "Dear Pam and River Guides,\n\nOn behalf of Joe, Dianna,Eric and Jered we would like to thank you for making our experience on the river such a great one. We enjoyed every aspect of our adventure from great food to running the river,we appreciate the hard work it took to make it all happen and look forward to bringing our granddaughters on our next adventure. So don\u2019t think you\u2019ve seen the last of us. Thank you to everyone but especially John and Joe who provided laughs and thoughtful care to meet our every needs. Please keep up the good work the world needs more caring people such as yourselves.\n\nWarmest Regards\n\nDianna Herold",
        "seller": true,
        "id": "4f2b2167536e868f69000003"
      },
      {
        "email": "",
        "name": "The Vitali & Rodela Family",
        "review": "Just wanted to say THANKS for the fun experience we will not forget! We were looking for a chance to get away from \u201clife\u201d for a few days. Well, you all provided that for us. We had a chance to laugh, experience some exciting rapids, eat great food and enjoy the beautiful outdoors. Not having to bring tents or food was especially nice. We felt so spoiled! Your Guides were wonderful. We really appreciated all of their hard work. A special thanks to our guide Chris, who was just awesome! On our drive back home, there was nothing but positive comments all around.\n\nWhat a fun adventure!\n\nWe would definitely recommend.\n\nSincerely,\nThe Vitali & Rodela Family",
        "seller": true,
        "id": "4f2b21ad536e86ed4e000001"
      },
      {
        "email": "",
        "name": "Sam Hamedani",
        "review": "My first trip with you guys was so thrilling that I made it a point to return to the River camp with my family and friends on subsequent rafting trips. I have had a blast taking on the rapids of the South Fork with the skilled, entertaining and enormously hospitable guides. The food is great, the camp is comfortable and the rafting is an adventure.\n\nMy expectations of a rafting adventure were not only met but greatly surpassed by your entire team.\n\nThank you all for all the memories!\n\nSincerely,\nSam Hamedani\nDirector, Viking River Cruises",
        "seller": true,
        "id": "4f2b21f9536e864069000002"
      },
      {
        "email": "",
        "name": "Jeff Miller",
        "review": "Just a short note of thanks for a wonderful adventure.\n\n\u201cI gotta tell ya\u201d \u2026wow, did I love my rafting trip.\n\nYour crew puts out some good karma, along with confidence building skills for us neophytes to navigate the river. Your food and service hit the spot. Of the rafting companies I saw on the river, you guys were the best.\n\nAt 58, and years after my back surgery, I never thought you would find me river rafting.\n\nThe south fork of the American River was simply awesome, inspiring, magnificent\u2026I was forced by nature to yell with glee at the top of my lungs many times.\n\nThanks for making our company outing a great one.\n\nSincerely,\nJeff Miller",
        "seller": true,
        "id": "4f2b2219536e860c67000004"
      },
      {
        "email": "",
        "name": "Brad, Suzanne, Lily and Izabelle Leslie",
        "review": "My family and I would like to thank everyone on your team for a wonderful river rafting experience! To begin, we\u2019d like to mention Pam, who works in reservations. She was so nice and helpful and was always prompt with a reply to all of our many questions! Next, what can we say about our awesome river guide and magnificent chef, Hillary! What a lovely, lovely woman! Beautiful, knowledgeable, informative, fun, and a more than amazing river guide! We couldn\u2019t be happier that she was the person who took our daughters, Lily\u2026age 15 and Izabelle\u2026.age 11, on their first rafting experience! Oh, and Hillary, many thanks for \u201csaving\u201d Izabelle after she went \u201coverboard\u201d! Hahaha! We feel Izabelle came away from this trip having faced her biggest fear (which of course was falling out of the raft) \u2026\u2026a much stronger and confident young lady! Next to Daniel! Thank you for the yummy grub and good laughs! Thanks to Jon for the lifts to and from the river! The camp was great and the food was fantastic! The river and scenic views were beautiful and the rapids were thrilling! We met many nice people and our family will remember this trip fondly with smiles on our faces\u2026\u2026as we can see by the pictures of our daughter, Lily, who is literally smiling in every picture that was taken! We have already talked about coming back and have recommended you guys to all of our family and friends! Thanks again\u2026.you\u2019re the best!\n\nMost sincerely,\nBrad, Suzanne, Lily and Izabelle Leslie\nHuntington Beach, California",
        "seller": true,
        "id": "4f2b224a536e86315e000001"
      }
    ],
    "seller": {
      "id": "4f282642536e862343000001"
    },
    "status": 1,
    "updated": "2012-11-08T00:08:47+00:00",
    "visible": true,
    "id": "4f2b03fa536e864069000000"
};

var experience4 =
{
    "category": "River Rafting",
    "complete": true,
    "currency": "USD",
    "desc": "Day 1: The smell of a country breakfast wafts through the air, luring you out of your sleeping bag and towards the dining area. After a hearty All You Can Eat omelet breakfast, it\u2019s orientation time to learn all about the techniques of rafting, safety and equipment. You\u2019ll also meet the river guides and be divided into groups. Rest assured, each raft holds 6 to 8 rafters, so you will be in the same raft as your friends. \n\nAfter a full day of exciting rapids and a delicious riverside lunch, you'll be taken back to camp where you'll have time for a hot shower, a game of volleyball, ping pong, or quiet time while dinner is being prepared for you. Then you\u2019ll be ready for a sumptuous dinner of steak, chicken, salmon, garlic bread, baked potato, corn, salad, drinks and dessert. After dinner there\u2019s roasting marshmallows by the campfire where you will swap stories with your raft mates on the day\u2019s adventure. And finally, before slumber time, you may just want to take a quiet stroll along the shore of the river, or look up and marvel at the thousands of stars visible in the nighttime country sky\u2026\n\nDay 2: This time, pancakes and all the trimmings will call you to breakfast. Today's rapids are more adrenaline packed, which you are experienced enough to handle. There are even some optional \u201cSwimmer\u2019s Rapids,\u201d where, if you want, you can float down the rapids WITHOUT the boat. Unforgettable! The grand finale is the \u201cTroublemaker\u201d rapid \u2013 the meanest, noisiest, and biggest ride of the trip! Troublemaker is a celebrity rapid, it\u2019s been in many movies including Indiana Jones.\n\nYou\u2019ll raft on back to the camp for a late and yes, All You Can Eat lunch. You\u2019re tired, but it\u2019s a good tired. In these two days, you\u2019ve rafted twenty-three miles, survived over fifty rapids, consumed five All You Can Eat meals, made new friends, maybe picked up a rash, and most definitely acquired some new memories that will last a lifetime!",
    "duration": 2880,
    "excerpt": "An incredible two day journey that covers a 21 mile stretch with over 50 exciting rapids! This Class III run is ideal for first-time and intermediate rafters. It includes 5 delicious all you can eat meals!",
    "geo": {
      "lat": 38.802093293942,
      "lng": -120.91572027956
    },
    "groupSize": 1,
    "groupSizePrice": 295,
    "included": [
      "Food and Water",
      "Rafting equipment",
      "Safety equipment",
      "5 delicious all you can eat meals"
    ],
    "medias": [
      {
        "src": "\/uploads\/images\/experiences\/4f2b1dcc536e864069000001\/4f2b1ded536e86315e000000.jpg",
        "type": "photo",
        "id": "4f2b1ded536e86315e000000"
      },
      {
        "src": "\/uploads\/images\/experiences\/4f2b1dcc536e864069000001\/4f2b1df9536e860c67000003.jpg",
        "type": "photo",
        "id": "4f2b1df9536e860c67000003"
      },
      {
        "src": "\/uploads\/images\/experiences\/4f2b1dcc536e864069000001\/4f2b1dfb536e86ca26000000.jpg",
        "type": "photo",
        "id": "4f2b1dfb536e86ca26000000"
      },
      {
        "src": "\/uploads\/images\/experiences\/4f2b1dcc536e864069000001\/4f2b1e00536e86bf4e000003.jpg",
        "type": "photo",
        "id": "4f2b1e00536e86bf4e000003"
      },
      {
        "src": "\/uploads\/images\/experiences\/4f2b1dcc536e864069000001\/4f2b1e35536e868c1e000000.jpg",
        "type": "photo",
        "id": "4f2b1e35536e868c1e000000"
      },
      {
        "src": "\/uploads\/images\/experiences\/4f2b1dcc536e864069000001\/4f2b1e37536e863b69000001.jpg",
        "type": "photo",
        "id": "4f2b1e37536e863b69000001"
      },
      {
        "src": "\/uploads\/images\/experiences\/4f2b1dcc536e864069000001\/4f2b1e38536e868f69000001.jpg",
        "type": "photo",
        "id": "4f2b1e38536e868f69000001"
      }
    ],
    "name": "2-Day Rafting Trip on the South Fork of the American River",
    "notIncluded": [
      "Swimsuit or shorts (2 pair)",
      "Tennis shoes or sandals (1 for raft, 1 for camp)",
      "Sweatshirt\/Jacket",
      "Towel and washcloth",
      "Flashlight",
      "T-shirt & long sleeved shirt",
      "Long pants",
      "Personal toiletries",
      "Waterproof sunscreen",
      "Mosquito repellent",
      "Pillow",
      "Sleeping Bag",
      "Sunglasses (w\/ string attached!)",
      "Hat (w\/ string attached!)",
      "Optional: air mattress or foam pad"
    ],
    "other": "If you are taking a rafting adventure in the early season (April \u2013 May), you may also want to bring a wetsuit, lightweight rain poncho and extra warm clothes. \n\nCancellation Policy: For full refunds, we require 30 days written notice prior to your trip. 50% of your trip price will be refunded if written cancellation is postmarked between 21 and 30 days prior to the trip. No refunds will be made less than 21 days prior to the trip.",
    "photo": {
      "src": "\/uploads\/images\/experiences\/4f2b1dcc536e864069000001\/4f2b1ded536e86315e000000.jpg",
      "type": "photo",
      "id": "4f2b1ded536e86315e000000"
    },
    "price": 290,
    "reviewed": true,
    "reviewedAt": "2012-05-28T09:38:58+00:00",
    "reviews": [
      {
        "email": "",
        "name": "Helen, Elena, Inna, Tom, Greg, Mike and Serge (The Russians)",
        "review": "What an amazing vacation we had! My family and I are still talking about the trip and now we have more confidence to do this again\u2026soon! Your crew is the absolute best!\u2026..Joe T, Hawaiian Joe, Melissa, Daniel, John\u2026 They\u2019re incredible guides, joke tellers, pretty awesome cooks and simply great people! The whole experience far exceeded all of our expectations, from the gorgeous scenery and thrilling rapids, campgrounds and great food to the truly experienced and fun guides!\n\nThank you to the entire team and to our instructor Joe T for making it happen!",
        "seller": true,
        "id": "4f2b1f40536e86e225000000"
      },
      {
        "email": "",
        "name": "Lisa Hooper",
        "review": "Thanks for the awesomely exciting weekend! I had sooo much fun! Thanks for everything. I want to come again right away but I\u2019ll have to settle for next summer. Joe T. was our guide and he was great, he made a fun weekend even better with his great attitude and fun personality. We just loved him. We will be requesting him for our next trip. All the guides were friendly and helpful. See you next summer.\n\nLisa Hooper, Beaumont Ca.",
        "seller": true,
        "id": "4f2b1f73536e86bf4e000004"
      },
      {
        "email": "",
        "name": "Dick Daley",
        "review": "John and Danny thanks you and the entire team at Camp Lotus for a most enjoyable weekend. You can take pride in the quality product that you deliver from the Camp Lotus Campground, to the friendly and professional guides and staff, to the delicious food served, the \u201cgoing the extra mile\u201d to ensure that all of your guests are well taken care of, etc.\n\nSpecial thanks to the both of you for your personal efforts to ensure our weekend trip is so enjoyable each year.\n\nBest of wishes for a successful rest of the summer. Looking forward to seeing you both again and the entire Camp Lotus team next year.\n\nTake care.\n\nDick Daley",
        "seller": true,
        "id": "4f2b1fa9536e868c1e000001"
      },
      {
        "email": "",
        "name": "Julie Buckley",
        "review": "We DID have a great time.\n\nI just wanted you to know how much I enjoyed and appreciated everything the crew did for us. We enjoy camping as our main recreation (in Michigan) and I know how much work it is. I have never camped like this before. To have the tents set up and the use of your sleeping bags and all the wonderful meals prepared for us was a blessing. I love to cook and I felt the food was prepared with quality ingredients, care and love. I also saw the awesome garden on the grounds (and the deer stalking it!) The staff also had a benevolent outlook on the skunks, which was wonderful, a great example on so many levels.\n\nMatt was our guide: we loved his easy, natural, mastery of the raft and his unassuming confidence and sense of adventure on the water, as well as his historical knowledge of the area. I enjoyed every moment on the water, it was so beautiful. The excitement on the rapids was the icing on the cake. It was a blast, I can speak as a hood ornament : )\n\nYou guys are a special group that really felt like a family to me. I loved the fact you are an independent goup that allowed us to do things like jump into the river where the other, more corporate outfits, wouldn\u2019t.\n\nI can\u2019t say how much fun we had and how great all the staff were with each and every individual. What a special experience!\n\n-Julie Buckley",
        "seller": true,
        "id": "4f2b1fdb536e863b69000002"
      },
      {
        "email": "",
        "name": "Joni Guerrero",
        "review": "Hello River Family!\n\nI just wanted to send a friendly email to let you know how much fun our group had! This was my second 2-day trip this summer. I look forward to next season! I will definitely be there again, and I will be bringing more people with me to experience this great outdoor adventure.\n\nI\u2019ve never met a staff as great as yours, and I think they are the best! Our guide was Joe T. & I think he\u2019s such an awesome person!\n\nAttached are a few pictures for you!\n\nCan\u2019t wait to see you all next year!\n\nWarm Regards,\n\nJoni Guerrero",
        "seller": true,
        "id": "4f2b2002536e868f69000002"
      }
    ],
    "seller": {
      "id": "4f282642536e862343000001"
    },
    "status": 1,
    "updated": "2012-05-05T02:14:45+00:00",
    "visible": true,
    "id": "4f2b1dcc536e864069000001"
};

var experience5 =
{
    "category": "Birdwatching",
    "complete": true,
    "currency": "USD",
    "desc": "Humboldt County is a birder's and nature lover's paradise, with almost 470 bird species recorded. Seals, whales, otters, elk, and bears are also abundant. We have the world's tallest trees, miles of unspoiled coastline, and lots of public land including a national park, 13 state parks, and a national wildlife refuge.\n\n Spectacular birding is waiting for you when we explore such locations as Redwood National & State Parks, the Arcata Marsh & Wildlife Sanctuary, Humboldt Bay National Wildlife Refuge, the Eel and Mad River estuaries, Humboldt Lagoons State Park, and Six Rivers National Forest.\n\n Custom half-day, full-day, and two-day (or even longer) outings are available to focus on certain species or habitats; or we can take a less-focused approach and simply go exploring. I will work with you to craft an experience that caters to your desires while respecting any constraints you may have.",
    "duration": 1440,
    "excerpt": "Enjoy the miles of unspoiled coastline and forest in Humboldt County that make it a nature-lover's paradise. Let me customize a tour to your specifications. I offer both natural-history tours and bird-focused outings that can be tailored to target specific species.",
    "geo": {
      "lat": 40.308854425638,
      "lng": -124.03015136719
    },
    "group": {
      "max": 20
    },
    "groupSize": 1,
    "groupSizePrice": 175,
    "guestType": "normal",
    "included": [
      "Pre-trip Discussion and Planning",
      "Lodging Suggestions",
      "Ecological and Historical Interpretation",
      "Identification Tips",
      "Assistance Finding Species of Interest"
    ],
    "medias": [
      {
        "seq": 1,
        "src": "\/uploads\/images\/experiences\/4f2c4c6a536e86315e000003\/4f2c4cfb536e86786a000000.jpg",
        "type": "photo",
        "id": "4f2c4cfb536e86786a000000"
      },
      {
        "seq": 2,
        "src": "\/uploads\/images\/experiences\/4f2c4c6a536e86315e000003\/4f2c4cfb536e86ed4e000003.jpg",
        "type": "photo",
        "id": "4f2c4cfb536e86ed4e000003"
      },
      {
        "seq": 3,
        "src": "\/uploads\/images\/experiences\/4f2c4c6a536e86315e000003\/4f2c4cfb536e86fa3d000000.jpg",
        "type": "photo",
        "id": "4f2c4cfb536e86fa3d000000"
      },
      {
        "seq": 4,
        "src": "\/uploads\/images\/experiences\/4f2c4c6a536e86315e000003\/4f2c4d01536e864069000004.jpg",
        "type": "photo",
        "id": "4f2c4d01536e864069000004"
      },
      {
        "seq": 5,
        "src": "\/uploads\/images\/experiences\/4f2c4c6a536e86315e000003\/4f2c4d36536e86e225000004.jpg",
        "type": "photo",
        "id": "4f2c4d36536e86e225000004"
      },
      {
        "seq": 6,
        "src": "\/uploads\/images\/experiences\/4f2c4c6a536e86315e000003\/4f2c4d4b536e860c67000007.jpg",
        "type": "photo",
        "id": "4f2c4d4b536e860c67000007"
      },
      {
        "seq": 7,
        "src": "\/uploads\/images\/experiences\/4f2c4c6a536e86315e000003\/4f2c4d63536e86786a000001.jpg",
        "type": "photo",
        "id": "4f2c4d63536e86786a000001"
      },
      {
        "seq": 8,
        "src": "\/uploads\/images\/experiences\/4f2c4c6a536e86315e000003\/4f2c4d80536e86ed4e000004.jpg",
        "type": "photo",
        "id": "4f2c4d80536e86ed4e000004"
      },
      {
        "seq": 9,
        "src": "\/uploads\/images\/experiences\/4f2c4c6a536e86315e000003\/4f2c4d9f536e864a71000000.jpg",
        "type": "photo",
        "id": "4f2c4d9f536e864a71000000"
      },
      {
        "seq": 10,
        "src": "\/uploads\/images\/experiences\/4f2c4c6a536e86315e000003\/4f2c4ddb536e86e225000005.jpg",
        "type": "photo",
        "id": "4f2c4ddb536e86e225000005"
      },
      {
        "seq": 11,
        "src": "\/uploads\/images\/experiences\/4f2c4c6a536e86315e000003\/4f2c4dee536e860c67000008.jpg",
        "type": "photo",
        "id": "4f2c4dee536e860c67000008"
      },
      {
        "seq": 12,
        "src": "\/uploads\/images\/experiences\/4f2c4c6a536e86315e000003\/4f2ff267536e86c229000000.jpg",
        "type": "photo",
        "id": "4f2ff267536e86c229000000"
      }
    ],
    "name": "Custom Birding and Ecology Outings in Redwood Country",
    "notIncluded": [
      "Transportation",
      "Food"
    ],
    "other": "The price is good for any number of people, you choose the group size. \nHalf-day and two-day custom tours are also available. Half-day: $100; Two-day: $300\nCancellation Policy: No policy",
    "photo": {
      "src": "\/uploads\/images\/experiences\/4f2c4c6a536e86315e000003\/4f2ff267536e86c229000000.jpg",
      "type": "photo",
      "id": "4f2ff267536e86c229000000"
    },
    "price": 175,
    "priceType": "outing",
    "reviewed": false,
    "reviewedAt": "2012-05-28T09:38:58+00:00",
    "reviews": [
      {
        "name": "Kellye Rosenheim",
        "email": "krosenheim@nyc.rr.com",
        "review": "As a novice birder visiting from the East Coast, I was eager to see as many California species as possible. Ken carefully planned a trip to do that, and we saw a huge number of birds in different environments - and what excellent birding places these were. Ken is very knowledgeable about the birds, their field marks, their songs, their habitat, history of land use in the area - in fact, knowledgeable on quite a range of interesting topics. As importantly, his easy-going style, patience and free sharing of information were much appreciated. I can't recommend an outing with him highly enough.",
        "seller": true,
        "id": "4f2f0f88536e86aa57000000"
      },
      {
        "name": "Pat Moynahan",
        "email": "pmmoynahan@maine.rr.com",
        "review": "We birded Humboldt for two days with Ken. Ken is a true professional. He asked ahead of time for our target birds and planned our time to search carefully for these species. He asked appropriate questions concerning mobility as one bird required a hike. Ken is an excellent birder who knows the best local birding places and has a great knowledge of bird sound. He used both skills expertly to our advantage. His persistence and willingness to wait out the Sooty Grouse showed his commitment to our priorities. He has cultivated excellent relationships with the local community, which fact allowed us access to restricted areas and to have unique experiences of Northern Spotted Owl. Besides his birding ability, he is fun to be with. We would recommend him to any visiting birder. Thanks, Ken, for the Brown Shrike and many other wonderful birds.",
        "seller": true,
        "id": "4f2f1004536e86de16000000"
      },
      {
        "name": "Allison Garcia",
        "email": "acgarcia@ucsc.edu",
        "review": "As an event coordinator for the University of California, Santa Cruz, Alumni Association, I am always looking for unique activities - fun and educational opportunities to which our alumni would not have access except through their Alumni Association. We have been very fortunate to have UCSC alumnus Ken offer his services as a naturalist guide on hikes in the Point Reyes area. Ken has a deep store of knowledge of the flora, fauna, and other natural history of the area. He also has tremendous enthusiasm for identifying and sharing the sights, sounds,smells, and touch of nature along the trail. Alumni have commented that they learned so much, had a lot of fun, and are looking forward to the\nnext hike!",
        "seller": true,
        "id": "4f2f10a8536e86b22e000000"
      }
    ],
    "seller": {
      "id": "4f2b277d536e86e225000001"
    },
    "status": 1,
    "updated": "2013-03-14T15:59:42+00:00",
    "visible": true,
    "id": "4f2c4c6a536e86315e000003"
};