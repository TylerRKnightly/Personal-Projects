BEGIN TRANSACTION;

DROP TABLE IF EXISTS subject, site, site_subject, rater;
DROP SEQUENCE IF EXISTS seq_site_id, seq_subject_id, seq_rater_id;

CREATE SEQUENCE seq_site_id
INCREMENT BY 1
START WITH 1001
NO MAXVALUE;

CREATE TABLE site(
	site_id SERIAL NOT NULL,
	site_name VARCHAR(50) NOT NULL,
	address VARCHAR(50),
	city VARCHAR(50),
	state VARCHAR(50),
	zip_code VARCHAR(10),
	
	CONSTRAINT PK_site PRIMARY KEY (site_id)
);

CREATE SEQUENCE seq_rater_id
INCREMENT BY 1
START WITH 2001
NO MAXVALUE;

CREATE TABLE rater(
	rater_id SERIAL NOT NULL,
	site_id int NOT NULL,
	username VARCHAR(50) NOT NULL,
	password_hash VARCHAR(200) NOT NULL,
	first_name VARCHAR(25) NOT NULL,
	last_name VARCHAR(25) NOT NULL,
	
	CONSTRAINT pk_rater PRIMARY KEY (rater_id),
	CONSTRAINT fk_site_id FOREIGN KEY (site_id) REFERENCES site (site_id)
	
);
	
CREATE SEQUENCE seq_subject_id
	INCREMENT BY 1
	START WITH 3001
	NO MAXVALUE;

CREATE TABLE subject(
	subject_id SERIAL NOT NULL,
	site_id int NOT NULL,
	subject_name VARCHAR(50) NOT NULL,
	mmse int,
	rbans int,
	ravlt VARCHAR(20),
	notes VARCHAR(100),
	
	CONSTRAINT pk_subject PRIMARY KEY (subject_id)
);

CREATE TABLE site_subject(
	site_id int NOT NULL,
	subject_id int NOT NULL,
	
	CONSTRAINT pk_site_subject PRIMARY KEY (site_id, subject_id)
);

COMMIT;