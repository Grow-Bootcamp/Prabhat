


CREATE DATABASE IF NOT EXISTS week5_day4;
USE week5_day4;

DROP PROCEDURE IF EXISTS transfer_money;

DELIMITER //

CREATE PROCEDURE transfer_money(
    IN sender_id INT,
    IN receiver_id INT,
    IN amount DECIMAL(10,2)
)
BEGIN
    DECLARE sender_rows INT DEFAULT 0;
    DECLARE receiver_rows INT DEFAULT 0;

    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL;
    END;

    IF amount <= 0 THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Amount must be positive';
    END IF;

    START TRANSACTION;

    UPDATE accounts
    SET balance = balance - amount
    WHERE id = sender_id
      AND balance >= amount;

    SET sender_rows = ROW_COUNT();

    IF sender_rows <> 1 THEN
        ROLLBACK;
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT =
                'Insufficient funds or sender not found';
    END IF;

    UPDATE accounts
    SET balance = balance + amount
    WHERE id = receiver_id;

    SET receiver_rows = ROW_COUNT();

    IF receiver_rows <> 1 THEN
        ROLLBACK;
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Receiver not found';
    END IF;

    COMMIT;
END //

DELIMITER ;

CALL transfer_money(1, 2, 1000.00);
SELECT * FROM accounts;


 use week5_day4;
 
 CREATE TABLE listings (
 id INT PRIMARY KEY AUTO_INCREMENT,
 title VARCHAR (150) NOT NULL,
 city VARCHAR  (150) NOT NULL,
 price DECIMAL (12,2) NOT NULL,
 property_type VARCHAR (30) NOT NULL
 ) ENGINE=InnoDB;
 
 INSERT INTO listings (title, city, price, property_type)
 VALUES
   ('House near market', 'Dhangadhi', 7500000, 'House'),
    ('Residential plot', 'Kathmandu', 5000000, 'Plot'),
    ('Family flat', 'Dhangadhi', 4500000, 'Flat'),
    ('Single room', 'Pokhara', 8000, 'Room');
    
    SELECT * FROM listings;
    
    CREATE INDEX idx_listings_city
    ON listings (city);
    
    SELECT * FROM listings
    WHERE city = 'Dhangadhi';
    
    CREATE INDEX idx_city_property_type
ON listings(city, property_type);
        SELECT * FROM listings
    WHERE city = 'Dhangadhi'
    AND property_type = 'House';