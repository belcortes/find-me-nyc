create table USERS (
    ID serial,
    USER_NAME varchar(100) NOT NULL,
    FIRST_NAME varchar(100) NOT NULL,
    LAST_NAME varchar(100) NOT NULL,
    LAST_LOGIN_AT timestamp,
    LAST_SEARCH varchar(100) NOT NULL,
    LAST_SEARCH_AT timestamp,
    ADMIN boolean
);