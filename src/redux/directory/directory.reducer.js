const INITIAL_STATE = {
  sections: [
    {
      title: "Computers",
      imageUrl: "http://www.anscomputerscny.com/images/ascollage.png",
      id: 1,
      linkUrl: "shop/computers"
    },
    {
      title: "Devices",
      imageUrl:
        "https://s2.eestatic.com/2019/06/24/actualidad/Actualidad_408721953_130584056_1024x576.jpg",
      id: 2,
      linkUrl: "shop/Devices"
    },
    {
      title: "Robotics",
      imageUrl:
        "https://www.therobotreport.com/wp-content/uploads/2019/09/reach-robotics-mekamon.png",
      id: 3,
      linkUrl: "shop/Robotics"
    },
    {
      title: "Domotics",
      imageUrl: "https://i.ytimg.com/vi/smswP1t_eCo/maxresdefault.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/Domotics"
    },
    {
      title: "CoolStuff",
      imageUrl:
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/124512918/original/726bca2b77370ca3b956461545a3cb6f8ee8c559/design-cool-robots-for-you.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/coolstuff"
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
