import express from 'express';
import { faker } from '@faker-js/faker';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extende:true}));

class User{
    constructor(){
        this._id = faker.database.mongodbObjectId()
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.phoneNumber = faker.phone.number('(510) ###-####')
        this.password = faker.internet.password()
        this.email = faker.internet.email()
    }
};
class Company {
    constructor(){
        this._id = faker.database.mongodbObjectId()
        this.name = faker.company.name()
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
};

app.get('/api', (req,res) => {
    res.json({ message: 'API is running'})
});
app.get('/api/users/new', (req,res) => {
    res.json({ user: new User() })
});
app.get('/api/companies/new', (req,res) => {
    res.json({ company: new Company() })
});
app.get('/api/user/company', (req,res) => {
    res.json({ user: new User(), company: new Company() })
});

const port = 8000;
app.listen(port, () => console.log(`Listening on port: ${port}`));