DROP database IF EXISTS dev10_collective;
CREATE database dev10_collective;
use dev10_collective;

CREATE TABLE `USER`(
	user_id int PRIMARY KEY NOT NULL auto_increment,
	first_name varchar(50) not null,
	last_name varchar(50) not null,
	email varchar(100) not null unique,
	provider varchar(32) not null default 'Discord',
	discord_id varchar(32) unique,
	role varchar(32),
	password varchar(64) not null
);

CREATE TABLE `location`(
	location_id int primary key not null auto_increment,
	city varchar(164) not null,
	state varchar(24) not null,
	country varchar(60) not null
);

create table location_user(
	location_id int,
	user_id int,
	constraint fk_location_user_location_id
	foreign key (location_id)
	references location(location_id),
	constraint fk_location_user_user_id
	foreign key (user_id)
	references `user`(user_id)
);