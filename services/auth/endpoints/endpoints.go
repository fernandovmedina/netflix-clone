package endpoints

import "github.com/gofiber/fiber/v2"

func SetupEndpoints(a *fiber.App) {
	var api = a.Group("/v1/api", SupabaseAuth())

	api.Post("/netflix-clone/login/v1", nil)
	api.Post("/netflix-clone/signin/v1", nil)
	api.Post("/netflix-clone/signup/v1", nil)
	api.Get("/netflix-clone/user/v1", nil)
}
