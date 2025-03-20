import React from 'react';
import PageAbout from '@/components/Creatives/PageAbout';
import Stats from '@/components/Creatives/Stats';
import Roles from '@/components/Creatives/Role';
import Team from '@/components/Creatives/Team';
import Breadcrumb from '@/components/Common/Breadcrumb';  // Import the breadcrumb component

export default function CreativesDepartment() {
  // Department details
  const departmentDescription = "Welcome to the Creative Department, where imagination meets action and ideas come to life! We're not your average department; in fact, we like to think of ourselves as the heartbeat of the hub. We're the ones who bring color, vibrancy, and a touch of magic to everything we do. Get ready to embark on a journey where innovation meets excitement, where ideas take flight, and where the possibilities are limitless.";
  
  const departmentImage = "/images/culture.png";
  
  const activities = [
    "Art Exhibitions",
    "Music Programs",
    "Dance Workshops",
    "Cultural Events",
    "Creative Skills Development",
    "Digital Arts Initiatives"
  ];
  
  const stats = [
    { label: "Artists Supported", value: "100+" },
    { label: "Exhibitions Hosted", value: "50+" },
    { label: "Workshops Conducted", value: "50+" },
    { label: "Cultural Events", value: "20+" }
  ];
  
  const roles = [
    {
      title: "Theatre Zone",
      description: "If you have a passion for acting, our Theatre Zone program is the perfect place to nurture your talent. Through comprehensive training and educational initiatives, we empower aspiring actors to shine on both stage and screen. Join us on this transformative journey and unlock your full potential.",
      requirements: ["Acting Coach", "Theatre Director"]
    },
    {
      title: "SoundPot",
      description: "At SoundPot, we believe that every voice deserves to be heard. Our dedicated team of mentors and trainers will guide you on a melodic journey of self-expression and artistic growth. Whether you're a singer, poet, or voice artist, join us and let your voice resound in the hearts of others.",
      requirements: ["Vocal Coach", "Sound Engineer"]
    },
    {
      title: "Pot Culture",
      description: "Immerse yourself in the vibrant world of arts at Pot Culture, our periodic event that celebrates creativity in all its forms. Experience captivating performances of dance, music, and poetry as we showcase the rich tapestry of artistic expression within our community. Prepare to be inspired and amazed.",
      requirements: ["Event Coordinator", "Creative Curator"]
    }
  ];
  
  const teamMembers = [
    {
      name: "Person one",
      title: "Arts & Culture Manager",
      image: "/images/blog/mtu.png",
      bio: "Person one brings her extensive background in arts to develop and manage our creative programs and cultural initiatives. She is dedicated to preserving and promoting local cultural heritage.",
    },
    {
      name: "Person two",
      title: "Visual Arts Coordinator",
      image: "/images/blog/mtu.png",
      bio: "Person two manages our visual arts programs, exhibitions, and workshops. He is passionate about providing platforms for artists to showcase their work and develop their skills.",
    },
    {
      name: "Person Three",
      title: "Performing Arts Coordinator",
      image: "/images/blog/mtu.png",
      bio: "Person three coordinates our music, dance, theater, and other performing arts programs. She believes in the power of performance to preserve culture and create social change.",
    }
  ];

  return (
    <>
      {/* Add the breadcrumb component here */}
      <Breadcrumb 
        pageName="Creatives Department" 
        description="Explore the Creatives Department, where we celebrate and promote arts and culture through various programs, exhibitions, and performances."
      />
      
      <PageAbout 
        description={departmentDescription}
        image={departmentImage}
        activities={activities}
      />
      
      <Stats stats={stats} />
      
      <Roles roles={roles} />
      
      <Team members={teamMembers} />
    </>
  );
}
