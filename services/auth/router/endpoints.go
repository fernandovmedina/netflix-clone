package router

import (
	"github.com/gofiber/fiber/v2"

	"github.com/fernandovmedina/services/auth/endpoints"
)

func SetupEndpoints(a *fiber.App) {
	var api = a.Group("/v1/api", endpoints.SupabaseAuth())

	api.Get("/netflix-clone/middleware", nil)
	api.Get("/netflix-clone/user", nil)
}
