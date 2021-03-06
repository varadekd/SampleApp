package Methods_test

import (
	"../Methods"
	"encoding/json"
	"net/http"
   	"net/http/httptest"
	"testing"
	"github.com/stretchr/testify/assert"
	"io"
	"github.com/gin-gonic/gin"
	"io/ioutil"
	"bytes"
)

// Setup gin server
func setupRouter() *gin.Engine{
	
	router := gin.Default()

	// Calling different methods to hanlde user grouping this routes as version v1
	v1 := router.Group("/v1")
	{
		v1.GET("/users" , Methods.GetAllUsers)
		v1.GET("/user/:name" , Methods.GetUserDetail) // Passing params
		v1.POST("/user/new" , Methods.CreateNewUser) // Passing params 
		v1.PUT("/user/:name" , Methods.UpdateUserDetail) // Passing params
		v1.DELETE("/user/:name" , Methods.DeleteUserDetail) // Passing params
	}

	return router
}

// Global variable we will be using this quite often
var router = setupRouter()
var response map[string]interface{}

// Global function that handles the request
func requestHandler(router http.Handler, method, path string , body io.Reader) *httptest.ResponseRecorder {
	req, _ := http.NewRequest(method, path, body)
	res := httptest.NewRecorder()
	router.ServeHTTP(res, req)
	return res
}

func requestBody(body interface{}) io.ReadCloser {
	b, _ := json.Marshal(body)
	return ioutil.NopCloser(bytes.NewReader(b))
}

// Checking that the API should always return 200 status (Makes sure API exist)
func TestAllUsers(t *testing.T){
	res := requestHandler(router, "GET", "/v1/users" , nil)
	assert.Equal(t, http.StatusOK , res.Code , "Expecting 200 (Ok)") 
}

// In case of all users Invalid API 404 is been checked 
func TestAllUsersNotFound(t *testing.T){
	res := requestHandler(router, "GET", "/users" , nil)
	assert.Equal(t, http.StatusNotFound , res.Code , "Expecting 404 (Not found)") 
}

// Checking that the API should always return 200 status (Makes sure API exist)
func TestGetUserDetail(t *testing.T){
	res := requestHandler(router, "GET", "/v1/user/kushagra" , nil)
	assert.Equal(t, http.StatusOK , res.Code , "Expecting 200 (Ok)") 
}

// Checking that the API should always return 200 status (Makes sure returned data have some minimal props, is not nil and checking no key is missing)
func TestGetUserDetailJson(t *testing.T){
	res := requestHandler(router, "GET", "/v1/user/kushagra" , nil)
	err := json.Unmarshal([]byte(res.Body.String()), &response)   
	
	// Looking name should always be there
	_ , nameExist := response["name"]
	
	// Checking the error should be nil, and values should be present
	assert.Nil(t, err , "Expecting the error should be nil")
	assert.True(t, nameExist , "Name field is missing")
}

// Checking in case of passing incorrect param API should response with 404
func TestGetUserDetailNotFound(t *testing.T){
	res := requestHandler(router, "GET", "/v1/user/dummyName" , nil)
	assert.Equal(t, http.StatusNotFound, res.Code , "Expecting 404 (Not found)")
}

// POST TEST CASES

// Checking POST API exist and value is added
func TestCreateNewUser(t *testing.T){
	body := requestBody(map[string]interface{} {
		"name" : "Sourabh",
		"age" : 25,
		"company" : "Oracle",
		"location" : "Banaglore",
	})

	res := requestHandler(router, "POST", "/v1/user/new" , body)

	err := json.Unmarshal([]byte(res.Body.String()), &response)   
	
	// Looking name should always be there
	_ , nameExist := response["name"]

	assert.Equal(t , http.StatusOK , res.Code)
	assert.Nil(t, err , "Response should not be nil")
	assert.True(t, nameExist , "Name field is missing")
}

// Checking POST API if request body value is not correct/Missing
func TestCreateNewUserBadRequest(t *testing.T){
	body := requestBody(map[string]interface{} {
		"name" : "Pranav",
		"company" : "MediBuddy",
		"location" : "Banglore",
	})

	res := requestHandler(router, "POST", "/v1/user/new" , body)

	assert.Equal(t , http.StatusBadRequest , res.Code , "Expecting 400 (Bad request)")
}

// Checking if conflict with name
func TestCreateNewUserConflict(t *testing.T){
	body := requestBody(map[string]interface{} {
		"name" : "Sourabh",
		"age" : 25,
		"company" : "Oracle",
		"location" : "Banglore",
	})

	res := requestHandler(router, "POST", "/v1/user/new" , body)

	assert.Equal(t , http.StatusConflict , res.Code , "Expecting 409 (Conflict)")
}

// PUT
// Updating user
func TestUpdateUserDetail(t *testing.T){
	body := requestBody(map[string]interface{} {
		"name" : "Sourabh",
		"age" : 25,
		"company" : "Oracle",
		"location" : "Banglore",
	})

	res := requestHandler(router, "PUT", "/v1/user/Sourabh" , body)

	assert.Equal(t , http.StatusOK , res.Code , "Expecting 200 (Ok)")
}

// Checking PUT API if request body value is not correct/Missing
func TestUpdateUserDetailBadRequest(t *testing.T){
	body := requestBody(map[string]interface{} {
		"name" : "Sourabh",
		"company" : "MediBuddy",
		"location" : "Banglore",
	})

	res := requestHandler(router, "PUT", "/v1/user/Sourabh" , body)

	assert.Equal(t , http.StatusBadRequest , res.Code , "Expecting 400 (Bad request)")
}

// Checking PUT API for 404
func TestUpdateUserDetailNotFound(t *testing.T){
	body := requestBody(map[string]interface{} {
		"name" : "Pranav",
		"age" : 25,
		"company" : "MediBuddy",
		"location" : "Banglore",
	})

	res := requestHandler(router, "PUT", "/v1/user/Pranav" , body)

	assert.Equal(t , http.StatusNotFound , res.Code , "Expecting 404 (Not found)")
}

// DELETE
// Delting user
func TestDeleteUserDetail(t *testing.T){
	res := requestHandler(router, "DELETE", "/v1/user/Sourabh" , nil)

	assert.Equal(t , http.StatusOK , res.Code , "Expecting 200 (Ok)")
}

// Checking DELETE API for 404
func TestDeleteUserDetailNotFound(t *testing.T){
	res := requestHandler(router, "DELETE", "/v1/user/Pranav" , nil)

	assert.Equal(t , http.StatusNotFound , res.Code , "Expecting 404 (Not found)")
}