function deprecationHeader(sunsetDate = "2027-01-01") {
  return (req, res, next) => {
    res.set("Deprecation", "true");
    res.set("Sunset", sunsetDate);
    res.set("X-API-Version", "v1");
    next();
  };
}

export { deprecationHeader };
