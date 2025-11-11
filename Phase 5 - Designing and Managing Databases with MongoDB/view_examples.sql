use mydb;

create view emp_view1 
as 
select employee_id,first_name,salary from employee;

select * from emp_view1;

create view emp_dept_view 
as 
select e.first_name,e.salary,d.department_name from 
employee e inner join department d on e.department_id=d.department_id;

select * from emp_dept_view;

