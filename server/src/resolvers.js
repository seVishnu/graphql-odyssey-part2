const resolvers = {
  Query: {
    //return an array of tracks for homepage
    tracksForHome: (parent, args, { dataSources }, info) => {
      return dataSources.trackAPI.getTracksForHome();
    },
  },
  Track: {
    author: ({ authorId }, args, { dataSources }, info) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
  },
};

module.exports = resolvers;
