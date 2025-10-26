const parseEnv = () => {
  const prefix = "RSS_";

  const result = Object.entries(process.env)
    .filter(([envVar]) => envVar.startsWith(prefix))
    .map(([key, value]) => `${key}=${value}`)
    .join("; ");

  console.log(result);
};

parseEnv();
