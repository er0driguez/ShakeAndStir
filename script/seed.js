const { db } = require('../server/db')

//seed function only modifies the db
async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');

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