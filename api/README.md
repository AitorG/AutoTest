# AutoTest API
By default the API is running in **localhost:3001**. If the request is incorrect the API return the following structure:
```
{
    success: Boolean,
    message: String
}
```
# User:

### 1. Login:
```
Method: POST
Auth with token: false
http://localhost:3001/auth/login
params: {
    username: String,
    password: String
}
return {
    success: Boolean,
    token: token
}
```

### 2. Sign Up:
```
Method: POST
Auth with token: false
http://localhost:3001/auth/
params: {
    username: String,
    password: String,
    email: String
}
return {
    _od: ObjectId
    username: String,
    password: String,
    email: String,
    rightQuestions: Number,
    failedQuestions: Number,
    approvedTest: Number,
    failedTest: Number
}
```

### 3. Delete user:
```
Method: DELETE
Auth with token: true
http://localhost:3001/auth/:userId
params: {
    userId: String
}
```
### 4. Change password
```
Method: POST
Auth with token: true
http://localhost:3001/auth/changePassword
params: {
    userId: String,
    newPassword: String,
    oldPassword: String
}
return {
    _id: ObjectId
    username: String,
    password: String,
    email: String,
    rightQuestions: Number,
    failedQuestions: Number,
    approvedTest: Number,
    failedTest: Number
}
```

### 5. Get user:
```
Method: GET
Auth with token: true
http://localhost:3001/auth/:userId
params: {
    userId: String,
}
return {
    _id: ObjectId
    username: String,
    password: String,
    email: String,
    rightQuestions: Number,
    failedQuestions: Number,
    approvedTest: Number,
    failedTest: Number
}
```
