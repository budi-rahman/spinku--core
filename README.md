
---
# SPINKU RESTAPI
---

### How To Use
```
SETTING

npm i
sequelize db:migrate

RUN
npm install -g nodemon (if you dont have installed globally)
nodemon app.js (if you have installed nodemon globally)

Server URL : http://localhost:3000

```


### User
| Method | Route            | Description           |
| ------ | ---------------- | --------------------- |
| GET    | /users           | Get all data user     |
| POST   | /users           | Add new user          |
| PUT    | /users/:id       | Edit data user        |
| DELETE | /users/:id       | Delete data user      |
| POST   | /user/login      | Login as Admin        |

---
### POST /user/login
---
> login user

_Request Headers_
```
Not needed
```

_Request Body_
```
{
    email : admin123@mail.com,
    password : admin123
}
```

_Response ( 200 )_
```
{
    role : "admin"
}
```

_Response (401)_
```
{
    "msg": "invalid email / password"
}
```

---
### POST /users
---
> login user

_Request Headers_
```
Not needed
```

_Request Body_
```
{
    firstName : rahman,
    lastName : Muhamad,
    birthDate : 1994-03-04,
    phone: 082240090090,
    email: rahmanbudi23@gmail.com,
    password: 23022020,
    role: admin
}
```

_Response ( 201 )_
```
{
    "id": 4,
    "firstName": "rahman",
    "lastName": "Muhamad",
    "birthDate": "1994-03-04T00:00:00.000Z",
    "phone": "082240090090",
    "email": "rahmanbudi23@gmail.com",
    "role": "admin"
}
```

_Response (500)_
```
{
    "message": "internal server error"
}
```
---
### DELETE /users/:id
---
_Response ( 200 )_
```
{
    "message": "User has been deleted"
}
```

### Merchant
| Method | Route                      | Description                           |
| ------ | -------------------------- | ------------------------------------- |
| GET    | /merchants                 | Get all data merchants                |
| POST   | /merchants                 | Add new data merchants                |
| DELETE | /merchants/:id             | Edit data merchants                   |
| PUT    | /merchants/:id             | Add new data merchants                |

---
### POST /merchants
---
> login user

_Request Headers_
```
Not needed
```

_Request Body_
```
{
    merchantCode : 30,
    name : ISMAYA GROUP,
    location : JAKARTA
}
```

_Response ( 201 )_
```
{
    "id": 7,
    "merchantCode": "30",
    "name": "IMPERIAL KITCHEN",
    "location": "CITIWALK"
}
```

_Response (500)_
```
{
    "message": "internal server error"
}
```
---
### DELETE /merchants/:id
---
_Response ( 200 )_
```
{
    "message": "Merchant has been deleted"
}
```

### Outlet
| Method | Route                      | Description                           |
| ------ | -------------------------- | ------------------------------------- |
| GET    | /outlets                   | Get all data outlets                  |
| POST   | /outlets                   | Add new data outlets                  |
| DELETE | /outlets/:id               | Edit data outlets                     |
| PUT    | /outlets/:id               | Add new data outlets                  |

---
### POST /outlets
---
> login user

_Request Headers_
```
Not needed
```

_Request Body_
```
{
    outletName : CITIWALK,
    address : JAKARTA PUSAT,
    outletCode : 1125
}
```

_Response ( 201 )_
```
{
    "id": 5,
    "outletName": "CITIWALK",
    "address": "Jakarta Pusat",
    "outletCode": "1125"
}
```

_Response (500)_
```
{
    "message": "internal server error"
}
```
---
### DELETE /outlets/:id
---
_Response ( 200 )_
```
{
    "message": "Outlet has been deleted"
}
```

### Terminal
| Method | Route                      | Description                           |
| ------ | -------------------------- | ------------------------------------- |
| GET    | /terminals                 | Get all data terminals                |
| POST   | /terminals                 | Add new data terminals                |
| DELETE | /terminals/:id             | Edit data terminals                   |
| PUT    | /terminals/:id             | Add new data terminals                |

---
### POST /terminals
---
> login user

_Request Headers_
```
Not needed
```

_Request Body_
```
{
    imei : 23DDFG31,
    phone : 081234567890,
    username : budirahman231,
    email: rahmanbudi123@gmail.com,
    password: 23022020,
    terminalCode: 7
}
```

_Response ( 201 )_
```
{
    "id": 4,
    "imei": "23DDFG31",
    "phone": "082240803377",
    "username": "budirahman231",
    "email": "rahmanbudi123@gmail.com",
    "terminalCode": "7"
}
```

_Response (500)_
```
{
    "message": "internal server error"
}
```
---
### DELETE /terminals/:id
---
_Response ( 200 )_
```
{
    "message": "terminal has been deleted"
}
```