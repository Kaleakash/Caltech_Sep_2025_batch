use mydb;
DELIMITER $$

CREATE PROCEDURE get_employee_salary(
    IN emp_id INT,
    OUT emp_salary FLOAT
)
BEGIN
    -- Retrieve employee salary
    SELECT salary INTO emp_salary
    FROM employee
    WHERE employee_id = emp_id;

    -- Optional conditional check
    IF emp_salary > 10000 THEN
        SELECT CONCAT('Employee ', emp_id, ' has a high salary of ', emp_salary) AS Message;
    ELSE
        SELECT CONCAT('Employee ', emp_id, ' has a salary of ', emp_salary) AS Message;
    END IF;
END$$

DELIMITER ;

CALL get_employee_salary(106, @salary);
SELECT @salary AS Employee_Salary;


DELIMITER $$

CREATE FUNCTION get_full_name(emp_id INT)
RETURNS VARCHAR(50)
DETERMINISTIC
BEGIN
    DECLARE full_name VARCHAR(50);

    SELECT CONCAT(first_name, ' ', last_name)
    INTO full_name
    FROM employee
    WHERE employee_id = emp_id;

    RETURN full_name;
END$$

DELIMITER ;get_full_name


select get_full_name(104) as full_name;

drop function get_full_name;
