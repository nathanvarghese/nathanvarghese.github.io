// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my projects!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This page contains a brief overview of my education and skills. Please click the link for the latest version of my cv! The best way to reach me is via email.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-my-music",
          title: "my music",
          description: "The one thing that I am very passionate about!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/my_music/";
          },
        },{id: "news-i-started-my-internship-at-inspector-bots-sparkles",
          title: 'I started my internship at Inspector Bots! :sparkles:',
          description: "",
          section: "News",},{id: "news-new-song-released",
          title: 'New song released!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3.html";
            },},{id: "projects-ros-development-kit",
          title: 'ROS Development Kit',
          description: "Robotics Software Engineering Intern @ Inspector Bots",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-aws-deepracer",
          title: 'AWS Deepracer',
          description: "CSCI 5302 - Advanced Robotics Project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-vision-based-control-in-webots",
          title: 'Vision Based Control in WeBots',
          description: "CSCI 5722 - Computer Vision Project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/template.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6E%61%74%68%61%6E.%76%61%72%67%68%65%73%65@%63%6F%6C%6F%72%61%64%6F.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/nathanvarghese", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/nathan-varghese-499052175", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
