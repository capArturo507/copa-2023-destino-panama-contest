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