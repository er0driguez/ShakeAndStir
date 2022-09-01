const { db, models: { User, Cocktail } } = require('../server/db')

//seed function only modifies the db
async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');

  const users = await Promise.all([
    User.create({ username: 'evelyn', password: '123'}),
    User.create({ username: 'john', password: '123'})
  ]);
  
  const cocktails = await Promise.all([
    Cocktail.create({ name: 'Old Fashioned', ingredients: ['whiskey', 'bitters', 'orange'], recipe: 'Mix it all up in a cup!' })
  ])
  
  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${cocktails.length} cocktails`)
  console.log('SEEDED SUCCESSFULLY');
}



async function runSeed() {
  console.log('seeding...seeding...')
  try {
    await seed()
  } catch(err) {
    console.error(err);
    process.exitCode = 1
  } finally {
    console.log('closing db connection');
    await db.close()
    console.log('db connection closed')
  }
}

if (module === require.main) {
  runSeed();
};

module.exports = seed