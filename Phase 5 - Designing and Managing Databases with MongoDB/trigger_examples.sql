use mydb;
create table product(pid int primary key,pname varchar(10), price float);
insert into product values(1,'TV',45000);
insert into product values(2,'Computer',35000);
insert into product values(3,'Laptop',95000);
select * from product;

create table product_log(plid int primary key auto_increment, pname varchar(10), oldprice float, newprice float,
updateAt datetime);
select sysdate();

DELIMITER $$

create trigger product_log_trigger 
after update 
on product
for each row 
begin 
	insert into product_log(pname,oldprice,newprice,updateAt) values(old.pname,old.price,new.price,sysdate());
end $$

DELIMITER ;

select * from product;
select * from product_log;
update product set price = 59000 where pid=3;


