$(document).ready(function () {
  // Array of card data
  const cardData = [
    {
      imgSrc: "images/img_1.jpg",
      title: "MEDFEST",
      date: "01-07-2024",
      avenue:"Community Service",
      location:"Bala Hospital, Ramanathapuram",
      text: "MedFest, organized by the Rotaract Clubs of Coimbatore Majestic, Unique, and Western Valley, celebrates National Doctors Day at Bala Hospital, Ramanathapuram. This special event honors medical professionals with flowers, personalized greeting cards, and thoughtful mementos, expressing our gratitude for their unwavering dedication and selfless service to the community. Join us in acknowledging their invaluable contributions.",
      progress: "28%",
    },{
      imgSrc: "images/img_1.jpg",
      title: "Pitchy Party",
      date: "06-07-2024	",
      avenue:"Club Service",
      location:"Turf Tavern, Peelamedu",
      text: "Pitchy Party is a special event designed to strengthen bonds among our board members through an evening of camaraderie, collaboration, and creativity. Join us as we celebrate our shared passion for service and community impact, aiming to reinforce our foundation and enhance our collective efforts to make a meaningful difference.",
      progress: "50%",
    },{
      imgSrc: "images/img_1.jpg",
      title: "இயல்வது கரவேல்",
      date: "03-08-2024",
      avenue:"Community Service",
      location:"Coimbatore",
      text: "The Rotaract Club of Coimbatore Majestic, alongside RaC SRCAS, PSG CAS, Karpagam Engineering, KAHE, Coimbatore Cosmopolitan, Coimbatore Main, Coimbatore Cosmos, and RS Puram, Happy Valley, has launched 'இயல்வது கரவேல்' to aid Wayanad flood victims. This initiative aims to provide essential supplies, including non-perishable food, hygiene products, and medicine, to those in need. By collaborating, we seek to deliver effective and timely support to the affected communities.",
      progress: "28%",
    },{
      imgSrc: "images/img_1.jpg",
      title: "Smash Fest",
      date: "18-08-2024",
      avenue:"Club Service",
      location:"Gravity Sports Centre, Hope College, Coimbatore",
      text: "The Rotaract Club of Coimbatore is excited to present Smash Fest, a highly anticipated badminton event. We invite everyone to join us for an evening of fun-filled activities, where playing with friends turns each game into a celebration and every win into shared joy. Your participation will make the event memorable as we come together to enjoy sportsmanship and camaraderie. We look forward to seeing you there!",
      progress: "28%",
    },{
      imgSrc: "images/img_1.jpg",
      title: "Health Haven",
      date: "24-08-2024",
      avenue:"District Priority Projects",
      location:"The Coimbatore District Welfare Association Senior Citizens Home.",
      text: "The Rotaract Club of Coimbatore Majestic is thrilled to announce “Health Haven,” a health camp dedicated to the residents of The Coimbatore District Welfare Association Senior Citizens Home. Join us in extending support and care to our senior community members, focusing on their well-being and providing essential medical assistance. Together, let’s make a meaningful difference in their lives and contribute to their health and happiness. Your participation will be invaluable.",
      progress: "28%",
    },{
      imgSrc: "images/img_1.jpg",
      title: "Trio Treat",
      date: "25-08-2024",
      avenue:"Club Service",
      location:"Coimbatore",
      text: "The Rotaract Club of Coimbatore Majestic, in collaboration with the Rotaract Clubs of Coimbatore Unique and Western Valley, is excited to announce Trio Treat. This event will bring together our club members for a delightful meal and engaging informal meet-and-greet interactions. Join us on August 25th for an enjoyable evening of camaraderie and connection. Your presence will make this gathering memorable and fun. We look forward to seeing you there!",
      progress: "88%",
    },{
      imgSrc: "images/img_1.jpg",
      title: "Turf' N Tea",
      date: "25-08-2024",
      avenue:"Club Service",
      location:"Kick off, Kuniamuthur",
      text: "The Rotaract Club of Coimbatore Majestic, in collaboration with the Rotaract Clubs of Coimbatore Main and Nehru Aeronautics, is excited to present Turf 'N Tea. Join us for this special event that blends leisure with camaraderie. Enjoy social gatherings, recreational activities, and opportunities to relax and connect. It’s a chance to unwind and build connections in a fun and relaxed setting. We look forward to seeing you there!",
      progress: "58%",
    },{
      imgSrc: "images/img_1.jpg",
      title: "SIMBA",
      date: "01-09-2024",
      avenue:"Club Service",
      location:"Essorpee Rotary Hall",
      text: "The Rotaract Club of Coimbatore Majestic is thrilled to announce the 'SIMBA' orientation program for our esteemed club members. This program aims to reinforce fundamental concepts while exploring new avenues for growth and learning. Your expertise and insights will be invaluable in enriching our members' knowledge and fostering their development. We look forward to your participation in making this orientation a memorable and impactful experience.",
      progress: "68%",
    },{
      imgSrc: "images/img_1.jpg",
      title: "REE-NEW",
      date: "01-09-2024",
      avenue:"Club Service",
      location:"Essorpee Rotary Midtown Hall",
      text: "The Rotaract Club of Coimbatore Majestic is excited to announce REE-NEW, our 33rd Installation Ceremony. We warmly invite you to witness a special evening as we bid farewell to Rtr. Swathi, concluding her impactful term as President. The ceremony will also celebrate the installation of Rtr. Lathika as the new President, along with her team of office-bearers. Join us as we embrace this new chapter with enthusiasm and anticipation.",
      progress: "98%",
    },
    // Add more objects here as needed
  ];

  // Function to generate card HTML
  function generateCardHTML(data) {
    return `
                    <div class="card fundraise-item">
                      <a href="#"><img class="card-img-top" src="${
                        data.imgSrc
                      }" alt="Image placeholder" /></a>
                      <div class="card-body">
                        <h3 class="card-title"><a href="#">${
                          data.title
                        }</a></h3>
                        <p class="card-text">${data.text}</p>
                        <span class="donation-time mb-3 d-block">${
                          data.date
                        } - ${data.location}</span>
                        <div class="progress custom-progress-success">
                          <div class="progress-bar bg-primary" role="progressbar" style="width: ${
                            data.progress
                          }" aria-valuenow="${data.progress.replace("%", "")}" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <span class="fund-raised d-block">${
                          data.avenue
                        }</span>
                      </div>
                    </div>
                  `;
  }

  // Append cards to carousel
  cardData.reverse().forEach((item) => {
    $(".nonloop-block-event").append(generateCardHTML(item));
  });

  // Initialize Owl Carousel
  $('.nonloop-block-event').owlCarousel({
    center: true,
    items: 1,
    loop: false,
    stagePadding: 0,
    margin: 30,
    nav: true,
    navText: ['<span class="ion-md-arrow-back">', '<span class="ion-md-arrow-forward">'],
    responsive:{
      600:{
        stagePadding: 0,
        items:1
      },
      800:{
        stagePadding: 40,
        items:2
      },
      1000:{
        stagePadding: 80,
        items:3
      }
    }
  });
});
