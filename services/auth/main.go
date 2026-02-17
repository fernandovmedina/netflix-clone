package main

import (
	"github.com/fernandovmedina/services/auth/router"
	"github.com/gofiber/fiber/v2"
)

func main() {
	var app = fiber.New()

	router.SetupEndpoints(app)

	app.Listen(":8010")
}
