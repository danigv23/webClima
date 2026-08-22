const params = {
    name: "fasdhfsd",
    count: 10,
    language: "es",
    format: "json",
    countryCode: undefined,
};

const filteredParams = Object.fromEntries((Object.entries(params))
    .filter(([key, value]) => value !== undefined));


console.log(filteredParams);