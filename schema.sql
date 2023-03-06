-- \dt             ->(print out table)
-- \d (table name) ->(print out table info)
drop table survey;
SELECT * from survey

create table survey(
  survey_id       SERIAL PRIMARY KEY,
  time_stamp      TIMESTAMP NOT NULL default now(),
  student_year    varchar(20),
  library         varchar(20),
  framework       varchar(20),
  student_comment varchar(255)
);