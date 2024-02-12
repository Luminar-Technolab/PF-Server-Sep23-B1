
-----Mongo DB-----

1. Open Source document db
2. NoSQL Database
3. Collection used to hold documents
4. Document : set of key-value pair JSON, dynamic schema
    ----RDBMS------     ----MONGODB-----------
-   Database            Database
-   Table               Collection
-   Tuple/Row           Document
-   Column              Field
-   Primary Key         _id key (12 bytes hexadecimal number)
5. Advantages of MongoDB
    - Schemaless
    - Faster
    - Scalable

    -------Mongoose : ODM Library---------

1. Object Data Modelling Library for MongoDB And Nodejs
2. Used to translate between object in node app and representation of those object in MongoDB
3. Define Schema/structure for storing documents in a collection
    - Schema type (String,Number,Boolen)
    - Option (required,defualt...)
4. Create Model similar to collection where we can store documents
5. Install mongoose : npm i mongoose
6. Define connection between mongoDb and Node using mongoose
    - create folder in server : DB folder
    - Create a js file to define connection
        - import mongoose