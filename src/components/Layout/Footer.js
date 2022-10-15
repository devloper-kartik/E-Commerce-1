import classes from "./Footer.module.css";

const Footer = () => {
  const website = [
    {
      name: "Youtube",
      icon: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
      src: "https://www.youtube.com/",
    },
    {
      name: "Spotify",
      icon: "https://cdn-icons-png.flaticon.com/512/174/174872.png",
      src: "https://open.spotify.com/",
    },
    {
      name: "facebook",
      icon: "https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-512.png",
      src: "https://www.facebook.com/",
    },
  ];

  const Li = website.map((element) => {
    return (
      <li key={element.name}>
        <a href={element.src}>
          <img src={element.icon} alt="Icon" />
        </a>
      </li>
    );
  });

  return (
    <footer>
      <div className={classes.footer}>
        <h1 className={classes["footer-title"]}>The Generics</h1>
        <div className={classes["footer-icon"]}>
          <ul>{Li}</ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
