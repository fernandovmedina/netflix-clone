package main

import (
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"

	"github.com/fernandovmedina/netflix-clone/microservices/profile-images/database"
)

func main() {
	var err error

	if _, err = database.ConnDB(); err != nil {
		log.Println(err.Error())
	}

	if err = godotenv.Load(); err != nil {
		log.Println(err.Error())
	}

	var (
		serverPort string = os.Getenv("SERVER_PORT")
	)

	var mux *http.ServeMux = http.NewServeMux()

	if err = http.ListenAndServe(serverPort, mux); err != nil {
		log.Println(err.Error())
	}
}
