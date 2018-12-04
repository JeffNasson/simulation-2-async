insert into clients(username,password)
values($1,$2);

select * from clients where username=$1;