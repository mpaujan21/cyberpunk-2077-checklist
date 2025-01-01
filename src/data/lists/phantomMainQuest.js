const rawPhantomMainQuest = [
  {
    title: "Complete the Story",
    description:
      "Before starting the 10th main mission ”Firestarter”, make at least one manual backup save to be able to get all endings in a single playthrough.",
    items: [
      {
        text: "All the President's Men",
      },
      {
        text: "Arachnophobia",
      },
      {
        text: "Spin Doctor",
      },
    ],
  },
  {
    title: "King of Wands",
    missable: true,
    description: "Take Songbird to the stars.",
    items: [
      {
        text: "To achieve this you must select the ”Help Songbird escape” dialogue. After picking this choice, advance normally through the main story.",
      },
      {
        text: "During the mission ”The Killing Moon” eventually, you will have a train ride with Songbird. After the train ride, check if the game has made an autosave; otherwise, make a manual one.",
      },
      {
        text: "After saving, choose the option to pick up Songbird and then lay her down when Reed appears.",
      },
      {
        text: "Choose the options: Can't let you take her > Draw Weapon > Shoot Reed.",
      },
    ],
  },
  {
    title: "King of Swords",
    missable: true,
    description: "Take Songbird home.",
    items: [
      {
        text: "Load the save from ”King of Wands” achievement, then select the choices where you call Reed and close the deal.",
      },
    ],
  },
  {
    title: "The Tower",
    missable: true,
    description: 'Complete "Things Done Changed".',
    items: [
      {
        text: "After achieving King of Swords, skip some time until Reed calls you to start and complete the ”Through Pain to Heaven”.",
      },
    ],
  },
  {
    title: "King of Cups",
    missable: true,
    description: "Fulfill Songbird's request.",
    items: [
      {
        text: 'Load your save from the ”Firestarter”  job, and this time, choose the option to "help Reed capture Songbird".',
      },
      {
        text: "During the mission ”Somewhat Damaged” eventually, you will reach Songbird inside the core. Make a manual save here.",
      },
      {
        text: "Choose the dialogue where you kill her",
      },
    ],
  },
  {
    title: "King of Pentacles",
    missable: true,
    description: "Refuse Songbird's request.",
    items: [
      {
        text: "Load the save from ”King of Cups” achievement, then select the choices where you spare Songbird.",
      },
    ],
  },
  {
    title: "Complete every Gig in Dogtown",
    items: [
      {
        text: "4 gigs unlock during ”Lucretia My Reflection”",
      },
      {
        text: "3 gigs unlock during ”Get It Together”",
      },
      {
        text: "2 gigs unlock after ”Firestarter”",
      },
    ],
  },
  {
    title: "Become Dogtown's most wanted criminal",
    items: [
      {
        text: "Simply start attacking civilians by shooting at them or driving into them. Then shoot all incoming Barghest forces to increase the Wanted Level until it reaches the maximum of 5 stars.",
      },
    ],
  },
  {
    title:
      "Eliminate three bosses from the ”Increased criminal activity” category.",
    items: [
      {
        text: "In the south-west of Dogtown. From the dataterm fast travel point called “Kress Street” head slightly south and you’ll find enemies.",
      },
      {
        text: "Found in the east at the edge of Dogtown. Look for a big old production hall. There are some enemies in front and an opening near the street where you can enter the building.",
      },
      {
        text: "Found in the south-east of Dogtown. In the museum/amusement park area, in the space shuttle exhibition hall on the right. The boss is a flying drone.",
      },
    ],
  },
  {
    title:
      "Steal the Arasaka medical truck or deliver 10 vehicles to El Capitan.",
    items: [
      {
        text: "Unlock the first delivery mission after rescuing Rosaline Myers. The mission is called ”Push to the Limit”.",
      },
      {
        text: "After delivering 8 vehicles, you'll receive a side job to steal an Arasaka truck.",
      },
    ],
  },
  {
    title: "Unlock all Perks in the Relic Perk tree.",
    items: [
      {
        text: "6 are given by just progressing through the story.",
      },
      {
        text: "3 by exploring each one of the ”Increased criminal activity” areas",
      },
      {
        text: "6 by collecting Restricted Data Terminals, they show up on your map by a white Relic icon when you're nearby",
      },
    ],
  },
];

export default rawPhantomMainQuest;
