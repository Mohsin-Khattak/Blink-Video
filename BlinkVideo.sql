alter table Video add V_Keywords vARCHAR(max)

CREATE TABLE Course (C_id int primary key identity,C_Title varchar(1000))

CREATE TABLE Video (v_id int primary key identity,V_Title varchar(1000),V_Url varchar(3000),C_id int,V_StartTime time,V_EndTime time)

insert into USerLogin values('Mohsin','1234','Admin')
select * from UserLogIn
select * from Video
--create table UploadVideo (v_id int primary key identity,V_Title varchar(1000),V_Description varchar(1000),V_Keyword varchar(1000),V_Url varchar(3000))
select * from Clip
 select * from Comment
 select * from Ranking


select * from AddUser

select * from views where v_id=1 and user_id=1
select * from UserLogIn