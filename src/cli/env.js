const parseEnv = () => {
    Object.entries(process.env)
      .filter((envVar) => envVar[0].slice(0, 4) === "RSS_")
      .map((rssVar) => console.log(`${rssVar[0]}=${rssVar[1]}`));
  };
  
  parseEnv();
  