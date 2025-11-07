use mydb;
select avg(salary) from employee;
select first_name from employee where salary > 6480;

-- using sub query
 
select first_name from employee where salary >(select avg(salary) from employee);

select department_id,avg_salary from 
(select department_id,avg(salary) avg_salary from employee group by department_id) as dept_avg 
where avg_salary > 5000;



select first_name,salary from employee where department_id in (select department_id from employee where salary > 15000);

select avg(salary) from employee group by department_id;

select first_name from employee where salary >any (select avg(salary) from employee group by department_id);

select first_name from employee where salary >all (select avg(salary) from employee group by department_id);

select count(*) from employee where salary >any (select avg(salary) from employee group by department_id);


SELECT first_name, last_name, salary
FROM employee e
WHERE salary >any (
    SELECT salary
    FROM employee m
    WHERE m.employee_id > e.manager_id
);



