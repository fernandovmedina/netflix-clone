package database

import (
	"database/sql"
	"os"

	"github.com/joho/godotenv"
)

var DB *sql.DB

func ConnDB() (*sql.DB, error) {
	var err error

	if err = godotenv.Load(); err != nil {
		return nil, err
	}

	var (
		databaseUser string = os.Getenv("DATABASE_USER")
		databaseName string = os.Getenv("DATABASE_NAME")
		databasePass string = os.Getenv("DATABASE_PASS")
		databaseHost string = os.Getenv("DATABASE_HOST")
		databasePort string = os.Getenv("DATABASE_PORT")
	)

	var dsn string = databaseUser + ":" + databasePass + "@tcp(" + databaseHost + ":" + databasePort + ")/" + databaseName

	if DB, err = sql.Open("mysql", dsn); err != nil {
		return nil, err
	}

	return DB, nil
}
