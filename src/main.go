package main

import (
	"context"
	"log"
	
	"go.mongodb.org/mongo-driver/mongo"
    "go.mongodb.org/mongo-driver/mongo/options"
    "go.mongodb.org/mongo-driver/mongo/readpref"

	"../src/Methods"
	"github.com/gin-gonic/gin"
	"os"
	"io"
)

// Om I find this particular thing a bit difficult to understand I understand the working but I am not getting any examples
func checkRoute() gin.HandlerFunc {
    return func (c *gin.Context) {
        log.Println("I am inside the middleware")
    }
}

// Return mongoDB client which can be used to setup connection
func GetMongoClient() *mongo.Client {
	options := options.Client().ApplyURI("mongodb://localhost:27017")
    client, err := mongo.NewClient(options)
    if err != nil {
        log.Fatal(err)
    }
    err = client.Connect(context.Background())
    if err != nil {
        log.Fatal(err)
    }
    return client
}

// Setup gin server
func SetupRouter() *gin.Engine {
	gin.SetMode(gin.ReleaseMode)
	
	router := gin.Default()
	
	// Rendering HTML files (This is just to check how template are loaded, I will convert this into full working module as we go forward)
	router.LoadHTMLGlob("../resources/template/*.html")
	router.Static("/static", "../resources/static")  // Loading static files
	// router.LoadHTMLGlob("../resource1/template/*.tmpl")

	// This will load our index.html file
	router.GET("/" , func(c *gin.Context){
		c.HTML(200 , "index.html" , gin.H{})
	})

	// Calling different methods to hanlde user grouping this routes as version v1
	v1 := router.Group("/v1")
	v1.Use(checkRoute()) // Using middleware
	{
		v1.GET("/users" , Methods.GetAllUsers)
		v1.GET("/user/:name" , Methods.GetUserDetail) // Passing params
		v1.POST("/user/new" , Methods.CreateNewUser) // Passing params 
		v1.PUT("/user/:name" , Methods.UpdateUserDetail) // Passing params
		v1.DELETE("/user/:name" , Methods.DeleteUserDetail) // Passing params
	}

	return router
}

func main(){
	// Writing logs to file 
	// If you want to print log only to console then please skip the below code from here 
	gin.DisableConsoleColor() // This will disbale log color (You can skip this if you want to logs with console colors)
	// gin.ForceConsoleColor() // Use this line when you want to print logs using console color

	file , err := os.Create("server.log")

	if err != nil{
		log.Println(err.Error())
	}

	gin.DefaultWriter = io.MultiWriter(file , os.Stdout) // This line helps us to write the logs in both file and console.
	//gin.DefaultWriter = io.MultiWriter(file) // This will help you to write log only to file 
	// Till here 
	
	// Creating mongoDB connection
	c := GetMongoClient()
	c.Database("data_learning")
	// Using ping function to check wether the DB is connected or not
    err = c.Ping(context.Background(), readpref.Primary())
    if err != nil {
        log.Fatal("Couldn't connect to the database", err)
    } else {
        log.Println("Connected!")
	}
	

	// Running the server on port 3000
	SetupRouter().Run(":3000")
}