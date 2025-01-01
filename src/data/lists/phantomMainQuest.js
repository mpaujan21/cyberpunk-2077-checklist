const rawPhantomMainQuest = [
  {
    title: "Complete the Story",
    description:
      'Before starting the 10th main mission "Firestarter," make at least one manual backup save to be able to get all endings in a single playthrough.',
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
        text: 'To achieve this you must select the "Help Songbird escape" dialogue. After picking this choice, advance normally through the main story.',
      },
      {
        text: 'During the mission "The Killing Moon" eventually, you will have a train ride with Songbird. After the train ride, check if the game has made an autosave; otherwise, make a manual one.',
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
        text: 'Load the save from "King of Wands" achievement, then select the choices where you call Reed and close the deal.',
      },
    ],
  },
  {
    title: "The Tower",
    missable: true,
    description: 'Complete "Things Done Changed".',
    items: [
      {
        text: 'After achieving King of Swords, skip some time until Reed calls you to start and complete the "Through Pain to Heaven".',
      },
    ],
  },
  {
    title: "King of Cups",
    missable: true,
    description: "Fulfill Songbird's request.",
    items: [
      {
        text: 'Load your save from the "Firestarter"  job, and this time, choose the option to "help Reed capture Songbird".',
      },
      {
        text: 'During the mission "Somewhat Damaged" eventually, you will reach Songbird inside the core. Make a manual save here.',
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
        text: 'Load the save from "King of Cups" achievement, then select the choices where you spare Songbird.',
      },
    ],
  },
];

export default rawPhantomMainQuest;
