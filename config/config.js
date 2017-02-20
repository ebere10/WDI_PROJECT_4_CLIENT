module.exports = {
  port: process.env.PORT || 3000,
  db: 'mongodb://localhost/mind-pops',
  secret: process.env.SECRET || 'gosh this is sooo secret... shhh...'
};
