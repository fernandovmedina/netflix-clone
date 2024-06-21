package handlers

import (
	"encoding/json"
	"log"
	"net/http"
	"os"
	"strconv"

	"github.com/joho/godotenv"
)

func Title(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		return
	} else {
		var err error

		if err = godotenv.Load(); err != nil {
			log.Printf("Error on microservices/profile-images: %v\n", err.Error())
		}

		var id = r.URL.Query().Get("id")
		var title = r.URL.Query().Get("title")

		dir, err := os.ReadDir(os.Getenv("NETFLIX_IMAGES_FOLDER") + "/" + title)

		if err != nil {
			log.Printf("Error on microservices/profile-images: %v\n", err.Error())
		}

		idINT, err := strconv.Atoi(id)

		if err != nil {
			log.Printf("Error on microservices/profile-images: %v\n", err.Error())
		}

		var imgURL = os.Getenv("NETFLIX_IMAGES_FOLDER") + "/" + title + "/" + dir[idINT-1].Name()

		_, err = os.ReadFile(imgURL)

		if err != nil {
			log.Printf("Error on microservices/profile-images: %v\n", err.Error())
		}

		http.ServeFile(w, r, imgURL)
	}
}

func Titles(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		return
	} else {
		var err error

		if err = godotenv.Load(); err != nil {
			log.Printf("Error on microservices/profile-images: %v\n", err.Error())
		}

		directories, err := os.ReadDir(os.Getenv("NETFLIX_IMAGES_FOLDER"))

		if err != nil {
			log.Printf("Error on microservices/profile-images: %v\n", err.Error())
		}

		type Dir struct {
			Name string
			Len  int
		}

		var dirs []Dir

		for i := range directories {
			dir, err := os.ReadDir(os.Getenv("NETFLIX_IMAGES_FOLDER") + "/" + directories[i].Name())

			if err != nil {
				log.Printf("Error on microservices/profile-images: %v\n", err.Error())
			}

			dirs = append(dirs, Dir{Name: directories[i].Name(), Len: len(dir)})
		}

		if err = json.NewEncoder(w).Encode(map[string]interface{}{
			"status": http.StatusOK,
			"body":   dirs,
		}); err != nil {
			log.Printf("Error on microservices/profile-images: %v\n", err.Error())
		}
	}
}
