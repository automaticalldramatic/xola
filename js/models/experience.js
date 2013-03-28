/**
 * js/models/experience.js
 * Model for Experience
 *
 * We use static data cause the JSON feed is not working
 */
var xola = xola || {};

xola.Experience = Backbone.Model.extend();

var experience1 = new xola.Experience([
	{"category":"Wilderness Training",
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
	"seller":{"id":"4f25f60a536e869529000000"},"status":1,"updated":"2012-05-05T01:54:24+00:00","visible":true,"id":"4f25f8fc536e866729000000"},
	{
		"addOns":[
			{"name":"Observer Fee","desc":"This nominal fee covers an additional person to tag along on the trip","price":25,"id":"50d21fc9986ae5c303000040"}
		]
	}
]);

var experience2 = new xola.Experience([
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
	}
]);