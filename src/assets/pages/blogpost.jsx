import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Navbar from "../components/navbar";
import day1Pic from '../pics/day1.jpg';
import day1Pics from '../pics/d1.jpg';
import d1 from '../pics/d1d.jpg';
import day2Pic from '../pics/s1.jpg';
import day2Pics from '../pics/d2d.jpg';
import d2 from '../pics/s3.jpg';
import day3Pic from '../pics/day3.jpg';
import day3Pics from '../pics/d3.jpg';
import day4Pic from '../pics/day4.jpg';
import day4Pics from '../pics/d4.jpg';
import day5Pic from '../pics/day5.jpg';
import day5Pics from '../pics/day5.1.jpg';
import day6Pic from '../pics/d6d.jpg';
import day6Pic2 from '../pics/day6.jpg';
import day6Pic3 from '../pics/d6c.jpg';
import day6Pic4 from '../pics/day7c.jpg';
import day6Pic5 from '../pics/d6a.jpg';
import day7Pic from '../pics/day7.jpg';

const blogData = [
  { 
    id: 1, 
    title: "Day 1 Tour: Luneta and Intramuros Visit", 
    img: day1Pic, 
    date: "April 7, 2025", 
    description: `Our first day was a journey through the rich tapestry of Philippine history. 
    We started at Luneta Park, where the monument of national hero Dr. Jose Rizal 
    stands as a powerful symbol of the country's fight for freedom. After taking 
    in the serene atmosphere of the park, we ventured into Intramuros, the "Walled 
    City," where cobblestone streets and ancient architecture told stories of a 
    time long past. Each step we took inside these historic walls brought us closer 
    to understanding the cultural roots and colonial history that shaped the Philippines.`,
    photos: [
      {
        img: day1Pic,
        caption: ' In this photo, Ms. Veron, our insightful tour guide, is seen passionately discussing the origins of the various streets we passed. She shared fascinating trivia about how each street got its name — from influential historical figures to cultural references — and connected these names to key moments in Philippine history. Her storytelling brought a new appreciation for everyday places we often overlook.',
      },
      {
        img: day1Pics,
        caption:  'Captured here at Luneta Park, Ms. Veron guided us through the life and legacy of Dr. Jose Rizal, standing in front of his iconic monument. She emphasized the park’s symbolic importance and recounted emotional stories about Rizal’s final moments and how this space has become a place of national pride, reflection, and remembrance. Her explanation helped us see Luneta not just as a park, but as a sacred historical site.',
      },
      {
        img: d1,
        caption:  'Here at Trinoma, a bustling commercial hub, Ms. Veron offered a unique perspective on the area’s transformation from a transport and trade zone to a symbol of modern urban progress. She contrasted the area’s current vibrancy with its humble beginnings and connected it to the broader narrative of Manila’s economic and architectural evolution, reminding us how history and modern life often coexist in unexpected ways.',
      }
    ],
  },
  {
    id: 2,
    title: "Day 2 Tour: Subic Bay Visit",
    img: day2Pic,
    date: "April 8, 2025",
    description: `On Day 2, we ventured out to Subic Bay, a place known for its natural beauty and historical significance. 
    Our first stop was the Subic Bay Economic and Commercial Corporation (SBECC), where we gained insight into the area's development and 
    its transformation from a U.S. naval base to a bustling commercial hub. Next, we visited the SBMA Law Enforcement Department's Communication Branch,
     learning how the department coordinates safety and public order within the freeport zone. Finally, 
     we explored the SBMA Seaport Department, where we observed the Vessel Traffic Management System — an essential tool 
     in ensuring the safe movement of vessels in the busy port area.`,
    photos: [
      {
        img: day2Pic,
        caption: (
          <>
            <h5 className="font-semibold text-lg">Speaker: Mr. Marlon E. Montello</h5>
            <p>
              In this photo, we are at the Subic Bay Exhibition and Convention Center (SBECC),
              where we learned about the history of Subic Bay’s transformation and its economic
              growth since the U.S. military’s departure. Our guide shared fascinating facts about
              the area’s role in the Philippines’ development as an international trade and commerce center.
            </p>
          </>
        ),
      },
      {
        img: day2Pics,
        caption: (
          <>
            <h5 className="font-semibold text-lg">Speaker: Lieutenant Derek Grueso</h5>
            <p>
              Here, we are inside the SBMA Law Enforcement Department – Communication Branch.
              Our guide explained the intricate communication systems used for coordinating public
              safety across the Subic Bay Freeport Zone. We learned about their emergency response
              protocols and the high-tech tools they use to manage safety in this busy area.
            </p>
          </>
        ),
      },
      {
        img: d2,
        caption: (
          <>
            <h5 className="font-semibold text-lg">Speaker: Engr. Jerome D. Saddi, ECE</h5>
            <p>
              At the SBMA Seaport Department, we had the chance to observe the Vessel Traffic
              Management System, which ensures the smooth flow of ships in Subic Bay. The system
              is crucial in preventing accidents and managing the high volume of vessels in the port.
              Our guide explained how technology plays a vital role in maritime safety.
            </p>
          </>
        ),
      },
    ],
    
    
  },
  
  { 
    id: 3, 
    title: "Day 3 Tour: Museum Visit", 
    img: day3Pic, 
    date: "April 9, 2025", 
    description: `Day 3: Exploring History and Nature in the City. Since it was a holiday,
     we took the opportunity to visit two important museums in Metro Manila. Our first destination was the 
     Museo ni Manuel Quezon, located at the Quezon Memorial Circle. This museum gave us a deeper understanding of 
     President Manuel L. Quezon’s life, his contributions to the Philippines, and his efforts in promoting the national language. 
     After that, we headed to the National Museum of Natural History, where we explored exhibits that highlighted the country’s rich biodiversity, 
     including rare animals, plants, and natural landscapes. The day allowed us to reflect on both the country’s historical legacy and its environmental treasures.`,
    photos: [
      {
        img: day3Pic,
        caption: 'The Museo ni Manuel Quezon, located at the Quezon Memorial Shrine in Quezon City, highlights the life and legacy of President Manuel L. Quezon. It features personal items, photographs, and documents that showcase his contributions to the country, especially the promotion of the national language. The shrine also serves as the final resting place of President Quezon and his wife, Aurora.',
      },
      {
        img: day3Pics,
        caption: 'The National Museum of Natural History in Rizal Park, Manila, showcases the Philippines’ rich biodiversity through exhibits on wildlife, marine life, forests, and geology. Notable features include the iconic “Tree of Life” structure and the preserved skeleton of Lolong, the world’s largest crocodile in captivity. The museum promotes awareness and appreciation of the country’s natural heritage.',
      }
    ],
  },
  { 
    id: 4, 
    title: "Day 4 Tour: Bangko Sentral and Hytech Company Visit", 
    img: day4Pic, 
    date: "April 10, 2025", 
    description: `On Day 4, we explored two significant institutions that play key roles in the country’s economic development and 
    technological advancement. Our day began with a visit to the Bangko Sentral ng Pilipinas (BSP), the central bank of the Philippines. 
    Here, we gained insight into how the bank manages the country’s monetary policy, regulates currency, and ensures financial stability. 
    In the afternoon, we toured Hytech Power Inc., a modern energy and technology company known for its work in developing fuel-saving and 
    sustainable engine systems. This visit offered us a closer look at how private industry contributes to innovation and environmental responsibility.`,
    photos: [
      {
        img: day4Pics,

        caption: 'Inside the Bangko Sentral ng Pilipinas, we learned about the country’s economic history and future developments in the financial sector.',
      },
      {
        img: day4Pic,
        caption: 'At Hytech Power Inc., we discovered the company’s innovations in developing fuel-saving technologies and sustainable engine systems. We learned about their efforts to reduce carbon emissions and improve energy efficiency, supporting both business growth and environmental responsibility.',
      }
    ],
  },
  { 
    id: 5, 
    title: "Day 5 Tour: LRT and TEC Visit", 
    img: day5Pic, 
    date: "April 11, 2025", 
    description: `Day 5 introduced us to the dynamic urban infrastructure of Manila, beginning with a ride on the Light Rail Transit (LRT)
     and a visit to the Traffic Engineering Center (TEC). We gained valuable insights into Manila’s public transportation system and the strategies 
     used to manage traffic flow and improve city mobility. It was fascinating to see how the LRT is essential for daily commuters and how the Traffic 
     Engineering Center is working to enhance the efficiency of the city’s roadways.`,
    photos: [
      {
        img: day5Pic,
        caption: 'I learned that the LRT is a vital part of Manila’s public transport system, serving hundreds of thousands of commuters daily. It helps ease traffic congestion and provides a faster alternative to road travel. Riding it gave me a better understanding of how important efficient transit is in a busy city.',
      },
      {
        img: day5Pics,
        caption: 'I learned that the TEC is responsible for analyzing and managing traffic in Metro Manila. They use technology like signal control systems and data monitoring to keep traffic moving smoothly and safely. Their work is essential in addressing the city traffic challenges.',
      }
    ],
  },
  { 
    id: 6, 
    title: "Day 6 Tour: Baguio Tour", 
    img: day6Pic, 
    date: "April 6, 2025", 
    description: `We spent the day exploring some of the most iconic and scenic spots in Baguio City. 
    At the Strawberry Farm, we saw how strawberries are grown and even tried picking a few ourselves. 
    We then visited the Chinese Bell Church, a peaceful site that reflects Chinese-Filipino culture and architecture. 
    At the Mansion House, the official summer residence of the President, we admired the stately grounds and took photos near its famous gates. 
    Our stop at Mines View Park gave us stunning views of the surrounding mountains and valleys. We also toured the Philippine Military Academy (PMA),
     where we got a glimpse into the training grounds of the country’s future military officers and learned more about their discipline and dedication.`,
    photos: [
      {
        img: day6Pic,
        caption: 'Located in La Trinidad, just outside Baguio, the Strawberry Farm is a popular spot for visitors to pick fresh strawberries directly from the fields. It offers a unique experience of farming in the cool, crisp climate of Baguio’s highlands.',
      },
      {
        img: day6Pic2,
        caption: 'A serene and culturally significant site in Baguio, the Chinese Bell Church is an architectural gem that blends Chinese and Filipino traditions. It features a large bell tower and beautiful gardens, offering a peaceful environment for reflection and worship.',
      },
      {
        img: day6Pic3,
        caption: 'The PMA is the premier military training institution for the country’s future officers. Located in Fort Del Pilar, the academy offers visitors a chance to tour the grounds and learn about the rigorous training and discipline that PMA cadets undergo in preparation for military service.',
      },
      {
        img: day6Pic4,
        caption: 'The Mansion House, built in 1908, is the official summer residence of the President of the Philippines. Known for its elegant architecture and lush gardens, it remains a symbol of the country’s historical ties with the American colonial period.',
      },
      {
        img: day6Pic5,
        caption: 'Famous for its stunning panoramic views of the Cordillera mountains and the nearby mining town of Itogon, Mines View Park offers breathtaking photo opportunities. Visitors can enjoy the cool weather and explore souvenir shops selling local handicrafts.',
      }
    ],
  },
  { 
    id: 7, 
    title: "Day 7 Tour: Free Time", 
    img: day7Pic, 
    date: "April 7, 2025", 
    description: `On our final day, we had some free time to explore and enjoy the peaceful surroundings of Burnham Park in Baguio. 
    While some of us took leisurely walks around the park, others rented boats and paddled around the scenic lake. 
    It was a perfect way to relax, reflect, and take in the natural beauty one last time before heading back.
    sharing memories and laughter from the week’s adventures.`,
    photos: [
      {
        img: day7Pic,
        caption: 'We spent a peaceful and relaxing time walking through Burnham Park, taking in the cool air and beautiful scenery. The park’s lush greenery, vibrant flowers, and calm lake created the perfect backdrop for a leisurely stroll. As we wandered along the tree-lined paths, we couldn’t help but appreciate the tranquility that surrounded us. Some of us paused to take photos, while others simply enjoyed the quiet, letting the soothing atmosphere wash over us. It was a great way to unwind, reflect on the week, and connect with nature before heading back.',
      }
    ],
  },
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogData.find((item) => item.id === parseInt(id));

  if (!post) {
    return (
      <>
        <Navigation />
        <h2 className="text-center my-5">Blog Post Not Found</h2>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <Container className="py-5" style={{ maxWidth: '900px' }}>
        <div className="text-center mb-5">
          <h1 className="blog-title">{post.title}</h1>
          <p className="blog-meta">Tour Activity</p>
          <p className="text-muted" style={{ fontSize: '0.9rem' }}>{post.date}</p>
        </div>

        <Row className="justify-content-center mb-5">
          <Col md={10}>
            <p className="blog-paragraph">{post.description}</p>

            <section className="blog-section">
              <h2 className="blog-section-title">Why This Day Was Memorable</h2>

              <div className="blog-paragraph">
                <strong>What we visited or did:</strong>
                {post.id === 1 && "We explored Luneta Park and Intramuros, two historic landmarks that offered us a rich and immersive experience of the Philippines’ colonial and revolutionary past. Walking through Luneta allowed us to reflect on the life and legacy of Dr. Jose Rizal, while Intramuros’ centuries-old architecture and fortifications transported us to an era where Spanish influence shaped much of our country's identity."}
                {post.id === 2 && "On Day 2, we ventured out to Subic Bay, where we explored several key areas that gave us a deeper understanding of the region's transformation. We started with the Subic Bay Economic and Commercial Corporation (SBECC), learning about the area’s history and how it evolved from a U.S. naval base into a major economic hub. Our visit continued with a stop at the SBMA Law Enforcement Department's Communication Branch, where we discovered how the department ensures safety and coordination within the Subic Bay Freeport Zone. Finally, we explored the SBMA Seaport Department, where we observed the Vessel Traffic Management System in action, which helps maintain smooth operations in the busy port."}
                {post.id === 3 && "At the Museo ni Manuel Quezon, we learned about Quezon’s leadership during the Commonwealth era, his work toward Philippine independence, and his passion for national identity. We also saw personal items, official documents, and photos that helped us understand his role in shaping modern Filipino society. In the afternoon, we toured the National Museum of Natural History, which featured impressive exhibits on Philippine wildlife and natural ecosystems. One of the highlights was the famous skeleton of Lolong, the largest crocodile in captivity, as well as the stunning “Tree of Life” structure at the center of the museum."}
                {post.id === 4 && "At Bangko Sentral ng Pilipinas, we learned about the bank’s core functions, including printing money, managing inflation, and maintaining the value of the Philippine peso. The staff also introduced us to how they detect counterfeit currency and safeguard the country’s financial system. Meanwhile, our visit to Hytech Power Inc. showcased innovations in fuel efficiency and engine technology. The company’s presentations highlighted how research and development can lead to practical solutions that support both business growth and environmental sustainability."}
                {post.id === 5 && "We took a ride on the LRT, experiencing Manila's bustling urban transit system firsthand. Afterward, we visited the Traffic Engineering Center, where we learned about traffic management systems, traffic flow optimization, and the role of technology in reducing congestion."}
                {post.id === 6 && "We spent the day exploring some of the most iconic and scenic spots in Baguio City. At the Strawberry Farm, we had the chance to see how strawberries are grown and even try picking them ourselves. We then visited the Chinese Bell Church, a peaceful and beautifully designed place of worship that showcases Chinese-Filipino culture. Our next stop was the Mansion House, the official summer residence of the President of the Philippines, where we admired its historic architecture and well-kept grounds. Finally, we enjoyed the breathtaking mountain views at Mines View Park, a popular spot where we could look out over the Benguet hills and take in the fresh mountain air."}
                {post.id === 7 && "On our final day, we visited Burnham Park, where we had some free time to enjoy the natural beauty, take a boat ride, and simply unwind before the journey home."}
              </div>

              <div className="blog-paragraph">
                <strong>Interesting facts:</strong>
                <ul>
                  {post.id === 1 && (
                    <>
                  <li className="blog-bullet">
                    <strong>Jose Rizal’s Final Steps Are Preserved at Fort Santiago:</strong>
                    One of the most fascinating things we learned was that Fort Santiago, a fortress inside Intramuros, once served as a prison for national hero Jose Rizal before his execution. The site still preserves his footsteps — literally marked on the ground — tracing his final walk, which made the history feel strikingly real and personal.
                  </li>
                  <li className="blog-bullet">
                    <strong>Intramuros Had Its Own Moat Like a Medieval Castle:</strong>
                    Much like castles in Europe, Intramuros was once protected by a wide moat that encircled its massive stone walls. The moat was filled with water from Manila Bay and served as a defensive barrier to slow down or prevent invasions. Though it's no longer filled with water today, remnants of it still exist, giving a glimpse into the strategic military planning of the Spanish colonizers.
                  </li>
                  <li className="blog-bullet">
                    <strong>The Name "Luneta" Comes from the Word "Luna":</strong>
                    “Luneta” is derived from the Spanish word <em>luna</em>, meaning “moon,” because the park's original layout resembled a crescent moon when viewed from above. This moon-like shape was part of a military design that allowed cannons stationed nearby to have a clear firing range — blending beauty and strategy in one of Manila’s most iconic open spaces.
                  </li>
                    </>
                  )}
                  {post.id === 2 && (
                    <>
                     <li className="blog-bullet">
                    <strong>Subic Bay’s Transformation: </strong>
                    Before becoming an economic zone, Subic Bay was home to a large U.S. naval base. When the U.S. Navy vacated the base in 1992, it was transformed into the Subic Bay Freeport Zone. This transformation helped turn the area into a thriving commercial and industrial hub, creating thousands of jobs and boosting the local economy.
                  </li>
                  <li className="blog-bullet">
                    <strong>Home to the Philippines’ Largest Port: </strong>
                    Subic Bay is home to the country’s largest and busiest port, which plays a crucial role in the Philippines’ trade and logistics industry. The port sees a variety of ships, from massive container vessels to oil tankers, making it an essential part of the nation’s maritime network.
                  </li>
                  <li className="blog-bullet">
                    <strong>TEco-Tourism Success:</strong>
                    Subic Bay is not only an industrial center but also an eco-tourism destination. It is home to a number of protected marine areas and wildlife sanctuaries. The area’s efforts to balance industrial growth with environmental conservation have earned it recognition as a model for sustainable development in the Philippines.
                  </li>
                    </>
                  )}
                  {post.id === 3 && (
                    <>
                  <li className="blog-bullet">
                    <strong>President Manuel L. Quezon’s Legacy:</strong>
                    Known as the “Father of the National Language,” Manuel L. Quezon was the first president of the Commonwealth of the Philippines under U.S. rule. 
                    He played a key role in promoting Filipino as the national language and laid the foundation for Philippine independence. 
                    His leadership helped shape the country’s identity during a critical period in its history.
                  </li>
                  <li className="blog-bullet">
                    <strong>Quezon Memorial Shrine: </strong>
                    The Quezon Memorial Shrine, where the Museo ni Manuel Quezon is located, also serves as the final resting place of President Quezon and his wife, Aurora. 
                    The shrine stands 66 meters tall, symbolizing the age he would have been had he lived to see Philippine independence in 1946. 
                    It is considered a National Cultural Treasure.
                  </li>
                  <li className="blog-bullet">
                    <strong>Lolong the Giant Crocodile:</strong>
                    Lolong was a saltwater crocodile captured in Agusan del Sur in 2011. Measuring 6.17 meters and weighing over a ton, 
                    he holds the Guinness World Record as the largest crocodile ever caught in captivity. His preserved skeleton is now a 
                    major exhibit at the National Museum of Natural History.
                  </li>
                    </>
                  )}
                  {post.id === 4 && (
                    <>
                        <li className="blog-bullet">
                    <strong>Central Bank’s Role:</strong>
                    The BSP is responsible for maintaining price stability and the integrity of the Philippine currency. 
                    It also supervises banks and other financial institutions to ensure the soundness of the financial system.
                  </li>
                  <li className="blog-bullet">
                    <strong>Green Innovation at Hytech:</strong>
                    Hytech Power Inc. develops fuel-saving systems that reduce carbon emissions and improve engine performance, supporting cleaner and more efficient transportation.
                  </li>
                  <li className="blog-bullet">
                    <strong>Anti-Counterfeiting Technology: </strong>
                    The BSP uses advanced security features like watermarks, color-shifting ink, and security threads in Philippine banknotes to prevent counterfeiting.

                  </li>
                    </>
                  )}
                  {post.id === 5 && (
                    <>
                    <li className="blog-bullet">
                    <strong>LRT’s Impact on Commuters: </strong>
                    The Light Rail Transit (LRT) system in Manila serves over 400,000 commuters daily, offering a 
                    crucial mode of public transportation that alleviates traffic congestion and provides an efficient travel option across the city.
                  </li>
                  <li className="blog-bullet">
                    <strong>Traffic Flow Optimization at TEC: </strong>
                    The Traffic Engineering Center (TEC) is responsible for implementing various strategies to optimize traffic flow in Manila. TEC uses technology and data 
                    analytics to manage congestion, improve road safety, and ensure smoother traffic management in a densely populated urban environment.
                  </li>
                  <li className="blog-bullet">
                    <strong>Technological Role in City Planning:</strong>
                    TEC plays a key role in integrating technology into traffic management, 
                    using systems like signal control, real-time monitoring, and data collection to improve overall transportation efficiency.
                  </li>
                    </>
                  )}
                  {post.id === 6 && (
                    <>
                      <li className="blog-bullet">
                    <strong>Summer Capital of the Philippines: </strong>
                    Baguio earned this title because of its cool climate, which attracts thousands of visitors each summer.
                  </li>
                  <li className="blog-bullet">
                    <strong>Strawberry Farming in the Highlands: </strong>
                    The Strawberry Farm in nearby La Trinidad is one of the few places in the Philippines where strawberries are grown commercially.
                  </li>
                  <li className="blog-bullet">
                    <strong>The Mansion House: </strong>
                    Built in 1908, the Mansion House serves as the official summer residence of the President of the Philippines.
                  </li>
                    </>
                  )}
                  {post.id === 7 && (
                    <>
                      <li>The final day gave us the chance to explore the relaxing environment of Burnham Park, one of Baguio’s most beloved spots. Originally designed by American architect Daniel Burnham, the park offers a serene escape with its wide-open spaces, tranquil lake, and lush greenery. It’s not only a favorite among tourists but also a popular gathering place for locals who enjoy boating, cycling, and leisurely strolls. Whether for relaxation or recreation, Burnham Park is a true reflection of Baguio's charm and beauty.</li>
                    </>
                  )}
                </ul>
              </div>

              <div className="blog-paragraph">
                <strong>Reflections or feelings:</strong>
                {post.id === 1 && " Wandering through the cobblestone streets, surrounded by thick stone walls and weathered buildings, we felt as though we had stepped into a living museum. There was a profound sense of reverence and awe as we imagined what life must have been like during the Spanish colonial period. The atmosphere made us reflect not just on the past, but also on the struggles and sacrifices that have shaped our national identity."}
                {post.id === 2 && " Visiting Subic Bay was both enlightening and inspiring. It was incredible to see how an area once dominated by military operations has been completely transformed into a thriving economic zone. The modernization and the use of technology in the SBMA departments were impressive, and it was clear that Subic Bay's story is one of resilience and progress."}
                {post.id === 3 && "Visiting these museums gave us a meaningful experience, especially on a holiday when the atmosphere was calm and peaceful. It was inspiring to learn about Quezon’s dedication to the country and to see how the Philippines is working to protect its natural environment. The day made us feel more connected to both our history and our surroundings."}
                {post.id === 4 && "This day gave us a new perspective on how different sectors—government and private industry—work toward national progress. It was inspiring to see the efforts behind currency management and technological innovation. The experience reminded us of the importance of responsible leadership and creative problem-solving in building a better future.The mix of finance and technology gave us a unique insight into the country’s future."}
                {post.id === 5 && "Riding the LRT gave us a deeper appreciation for Manila’s urban transportation, while visiting the Traffic Engineering Center highlighted the importance of effective traffic management in a bustling city like Manila."}
                {post.id === 6 && "The day in Baguio was both relaxing and refreshing. Surrounded by nature and cool mountain air, we felt a sense of calm that was different from the busier days of our trip. It was nice to take a break from the usual fast pace, enjoy the scenery, and simply be in the moment with our group."}
                {post.id === 7 && "It was a bittersweet feeling to wrap up the tour, knowing we'd be leaving behind such an enjoyable and enriching experience. While it was hard to say goodbye to the beautiful places and experiences we had, we carried with us unforgettable memories and a deeper appreciation for the culture and people of the Philippines. The connections we made and the lessons we learned throughout the journey will stay with us long after the tour ended."}
              </div>

              <div className="blog-paragraph" style={{ marginBottom: '2rem' }}>
                <strong>Funny moments:</strong>
                {post.id === 1 && "In the middle of our deep historical reflections, we decided to take a group photo — and, hilariously, every single one of us blinked at the exact same moment! We ended up with a blurry, eye-shut memory that gave us all a good laugh and perfectly captured the lighthearted spirit of the day"}
                {post.id === 2 && "During our tour, there were a few lighthearted moments, especially when we visited the SBMA Seaport Department. We had a bit of fun trying to picture how busy the port must be with all the ships coming in and out, and there were some jokes about what would happen if the Vessel Traffic Management System had a glitch! The day was filled with both educational moments and playful banter, making it a memorable experience."}
                {post.id === 3 && "At the Museum of Fine Arts, we all tried to imitate the poses of classical Filipino sculptures — with varying success!"}
                {post.id === 4 && "At Hytech, a few of our colleagues struggled to operate a demonstration robot, pressing random buttons and making it move in all sorts of directions. It was hilarious watching them try to figure it out, and even the staff had a good laugh as we all got it under control."}
                {post.id === 5 && "While getting off the LRT, I accidentally overstepped on the stairs and almost fell—it gave everyone a quick laugh and a mini heart attack! Thankfully, I caught my balance just in time, and we all had a good chuckle about it afterward."}
                {post.id === 6 && "One of the funniest parts of the day was when our tour guide enthusiastically started talking at the front of the van. But when he turned around to check on us, he found that almost everyone had fallen asleep! We all had a good laugh about it later—Baguio’s cool breeze and long drive clearly made us too relaxed to stay awake."}
                {post.id === 7 && "One of the funniest moments happened when someone in our group, trying to blend in, casually posed as a patch of grass while walking through the park. Their unexpected camouflage startled us all, and we couldn’t stop laughing when they suddenly stood up! It was a lighthearted moment that added some extra fun to our final day."}
              </div>
              <Row className="mb-4">
                <Col>
                  <h2 className="blog-section-title">More About the Tour</h2>
                  <p className="blog-paragraph">
                    Each day of the tour brought new adventures, and we felt fortunate to have experienced so much of the Philippines' culture, history, and innovation. The journey was an incredible blend of learning, exploration, and fun moments that we'll carry with us forever.
                  </p>
                </Col>
              </Row>
              {post.photos.map((photo, index) => (
                <Row
                  key={index}
                  className="align-items-center mb-4"
                  style={{ flexWrap: 'nowrap', marginLeft: 0, marginRight: 0 }}
                >
                  <Col md={6} className="d-flex justify-content-center">
                    <img
                      src={photo.img}
                      alt={`Day ${post.id} Photo ${index + 1}`}
                      className="img-fluid"
                      style={{
                        borderRadius: '8px',
                        maxHeight: '250px',
                        objectFit: 'cover',
                        width: '80%',
                      }}
                    />
                  </Col>
                  <Col md={6}>
                    <p className="text-muted mb-0" style={{ fontSize: '1rem' }}>
                      {photo.caption}
                    </p>
                  </Col>
                </Row>
              ))}

            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BlogPost;
