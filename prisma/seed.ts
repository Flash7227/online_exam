require('dotenv').config({ path: '.env' });
const bcrypt = require('bcrypt');

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const initialLocations = [
  { name: 'АРХАНГАЙ' },
  { name: 'БАГАНУУР' },
  { name: 'БАЯН-ӨЛГИЙ' },
  { name: 'БАЯНХОНГОР' },
  { name: 'БУЛГАН' },
  { name: 'ГОВЬ-АЛТАЙ' },
  { name: 'ГОВЬСҮМБЭР' },
  { name: 'ДАРХАН-УУЛ' },
  { name: 'ДОРНОГОВЬ' },
  { name: 'ДОРНОД' },
  { name: 'ДУНДГОВЬ' },
  { name: 'ЗАВХАН' },
  { name: 'НАЛАЙХ' },
  { name: 'ОРХОН' },
  { name: 'СЭЛЭНГЭ' },
  { name: 'СҮХБААТАР' },
  { name: 'ТӨВ' },
  { name: 'УБ' },
  { name: 'УВС' },
  { name: 'ХОВД' },
  { name: 'ХЭНТИЙ' },
  { name: 'ХӨВСГӨЛ' },
  { name: 'ӨВӨРХАНГАЙ' },
  { name: 'ӨМНӨГОВЬ' }
];



const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const hash = bcrypt.hashSync('12345678', salt);

const initialUser = { name:'admin', desc: 'Administrator', email:'admin@admin.admin', is_admin: true, password: hash };

const seed = async () => {
  // clean up before the seeding (optional)
  await prisma.location.deleteMany();
  await prisma.user.deleteMany();
  // you could also use createMany
  // but it is not supported for databases
  // e.g. SQLite https://github.com/prisma/prisma/issues/10710
  for (const location of initialLocations) {
    await prisma.location.create({
      data: location,
    });
  }
  await prisma.user.create({
    data: initialUser,
  });
};

seed();

