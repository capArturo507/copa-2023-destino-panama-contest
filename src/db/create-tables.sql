CREATE TABLE participants (
  id                    VARCHAR(36) PRIMARY KEY NOT NULL,
  full_name             VARCHAR(255) NOT NULL,
  instagram             VARCHAR(30) UNIQUE NOT NULL,
  email                 VARCHAR(320) UNIQUE NOT NULL,
  phone                 VARCHAR(15) NOT NULL,
  questions             VARCHAR(64) NOT NULL,
  answers               VARCHAR(255),
  started_datetime      DATETIME NOT NULL, 
  completed_datetime    DATETIME,
  correct_answers       TINYINT
  completed_time_ms     INT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


ALTER TABLE participants MODIFY COLUMN started_datetime DATETIME(3), MODIFY COLUMN completed_datetime DATETIME(3);

ALTER TABLE participants ADD CONSTRAINT unique_phone UNIQUE(phone);


-- POSSIBLE WINNERS
SELECT * FROM participants WHERE completed_datetime IS NOT NULL AND correct_answers IS NOT NULL AND completed_time_ms IS NOT NULL ORDER BY correct_answers DESC, completed_time_ms ASC LIMIT 10;

-- REGISTERED PARTICIPANTS
SELECT COUNT(*) FROM participants;

-- ANSWERED PARTICIPANTS
SELECT COUNT(*) FROM participants WHERE completed_datetime IS NOT NULL;

-- NOT ANSWERED PARTICIPANTS
SELECT COUNT(*) FROM participants WHERE completed_datetime IS NULL;

-- DUPLICATE PHONES
SELECT phone, COUNT(phone) as total  FROM participants GROUP BY phone HAVING total > 1;

SELECT * FROM participants A
INNER JOIN (
SELECT phone, COUNT(phone) as total  FROM participants GROUP BY phone HAVING total > 1) B ON A.phone = B.phone
WHERE correct_answers is null

-- ERRORS IN DB
SELECT * FROM participants WHERE completed_datetime IS NULL AND (correct_answers IS NOT NULL OR completed_time_ms IS NOT NULL);
SELECT * FROM participants WHERE correct_answers IS NULL AND (completed_datetime IS NOT NULL OR completed_time_ms IS NOT NULL);
SELECT * FROM participants WHERE completed_time_ms IS NULL AND (completed_datetime IS NOT NULL OR correct_answers IS NOT NULL);