use loginpage;
create table User (
    id integer primary key auto_increment,
    firstName varchar (20),
    lastName varchar (20),
    age  integer,
    dob varchar (20),
    address varchar (100)
);