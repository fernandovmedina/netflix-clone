package main

import (
	"log"

	"github.com/fernandovmedina/services/auth/database"
	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"
)

func main() {
	var err = godotenv.Load(".env")

	if err != nil {
		log.Fatal("failed to open .env file for database connection")
	}

	if _, err = database.ConnDB(); err != nil {
		log.Fatalf("failed to connect to db: %s", err)
	}

	var app = fiber.New()

	// endpoints.SetupEndpoints(app)

	app.Listen(":8000")
}
